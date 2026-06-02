(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="169",Xi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,ac=1,$u=2,Xl=1,Ju=2,En=3,Vn=0,He=1,dn=2,zn=0,qi=1,br=2,cc=3,lc=4,Qu=5,oi=100,th=101,eh=102,nh=103,ih=104,sh=200,rh=201,oh=202,ah=203,Xo=204,qo=205,ch=206,lh=207,uh=208,hh=209,dh=210,fh=211,ph=212,mh=213,gh=214,Yo=0,Ko=1,jo=2,ji=3,Zo=4,$o=5,Jo=6,Qo=7,ql=0,_h=1,vh=2,Hn=0,xh=1,yh=2,Mh=3,Sh=4,Eh=5,bh=6,wh=7,Yl=300,Zi=301,$i=302,ta=303,ea=304,Fr=306,na=1e3,ci=1001,ia=1002,Qe=1003,Th=1004,Fs=1005,rn=1006,Yr=1007,li=1008,An=1009,Kl=1010,jl=1011,Es=1012,za=1013,di=1014,wn=1015,Ds=1016,Ha=1017,Ga=1018,Ji=1020,Zl=35902,$l=1021,Jl=1022,an=1023,Ql=1024,tu=1025,Yi=1026,Qi=1027,eu=1028,Va=1029,nu=1030,Wa=1031,Xa=1033,gr=33776,_r=33777,vr=33778,xr=33779,sa=35840,ra=35841,oa=35842,aa=35843,ca=36196,la=37492,ua=37496,ha=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,va=37815,xa=37816,ya=37817,Ma=37818,Sa=37819,Ea=37820,ba=37821,yr=36492,wa=36494,Ta=36495,iu=36283,Aa=36284,Ra=36285,Ca=36286,Ah=3200,Rh=3201,su=0,Ch=1,Fn="",un="srgb",Xn="srgb-linear",qa="display-p3",Br="display-p3-linear",wr="linear",de="srgb",Tr="rec709",Ar="p3",bi=7680,uc=519,Ph=512,Dh=513,Lh=514,ru=515,Ih=516,Uh=517,Nh=518,Oh=519,hc=35044,dc="300 es",Tn=2e3,Rr=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const _s=Math.PI/180,bs=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Ya(i,t){return(i%t+t)%t}function Fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function kh(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function zh(i,t=1){return t-Math.abs(Ya(i,t*2)-t)}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(fc=i);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*_s}function Kh(i){return i*bs}function jh(i){return(i&i-1)===0&&i!==0}function Zh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $h(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ne={DEG2RAD:_s,RAD2DEG:bs,generateUUID:vi,clamp:ye,euclideanModulo:Ya,mapLinear:Fh,inverseLerp:Bh,lerp:vs,damp:kh,pingpong:zh,smoothstep:Hh,smootherstep:Gh,randInt:Vh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:Kh,isPowerOfTwo:jh,ceilPowerOfTwo:Zh,floorPowerOfTwo:$h,setQuaternionFromProperEuler:Jh,normalize:Ne,denormalize:zi};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],M=s[0],p=s[3],m=s[6],b=s[1],v=s[4],y=s[7],I=s[2],E=s[5],w=s[8];return r[0]=o*M+a*b+c*I,r[3]=o*p+a*v+c*E,r[6]=o*m+a*y+c*w,r[1]=l*M+u*b+f*I,r[4]=l*p+u*v+f*E,r[7]=l*m+u*y+f*w,r[2]=h*M+d*b+g*I,r[5]=h*p+d*v+g*E,r[8]=h*m+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Zt;function ou(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){const i=Cr("canvas");return i.style.display="block",i}const pc={};function Mr(i){i in pc||(pc[i]=!0,console.warn(i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ed(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mc=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[Xn]:{transfer:wr,primaries:Tr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[un]:{transfer:de,primaries:Tr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Br]:{transfer:wr,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(gc),fromReference:i=>i.applyMatrix3(mc)},[qa]:{transfer:de,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(gc),fromReference:i=>i.applyMatrix3(mc).convertLinearToSRGB()}},id=new Set([Xn,Br]),se={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!id.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cs[t].toReference,s=cs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cs[i].primaries},getTransfer:function(i){return i===Fn?wr:cs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(cs[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Cr("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zr(s[o].image)):r.push(Zr(s[o]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;class Ge extends _i{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ci,s=ci,r=rn,o=li,a=an,c=An,l=Ge.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=vi(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Yl;Ge.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(d+1)/2,I=(m+1)/2,E=(u+h)/4,w=(f+M)/4,C=(g+p)/4;return v>y&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=w/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-M)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cu extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ze{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==h||l!==d||u!==g){let p=1-a;const m=c*h+l*d+u*g+f*M,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const I=Math.sqrt(v),E=Math.atan2(I,m*b);p=Math.sin(p*E)/I,a=Math.sin(a*E)/I}const y=a*b;if(c=c*p+h*y,l=l*p+d*y,u=u*p+g*y,f=f*p+M*y,p===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=I,l*=I,u*=I,f*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new P,_c=new ze;class qn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),ks.subVectors(this.max,ls),Ti.subVectors(t.a,ls),Ai.subVectors(t.b,ls),Ri.subVectors(t.c,ls),Cn.subVectors(Ai,Ti),Pn.subVectors(Ri,Ai),Zn.subVectors(Ti,Ri);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!Jr(e,Ti,Ai,Ri,ks)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Ti,Ai,Ri,ks))?!1:(zs.crossVectors(Cn,Pn),e=[zs.x,zs.y,zs.z],Jr(e,Ti,Ai,Ri,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new P,new P,new P,new P,new P,new P,new P,new P],en=new P,Bs=new qn,Ti=new P,Ai=new P,Ri=new P,Cn=new P,Pn=new P,Zn=new P,ls=new P,ks=new P,zs=new P,$n=new P;function Jr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ld=new qn,us=new P,Qr=new P;class xi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Qr)),this.expandByPoint(us.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new P,to=new P,Hs=new P,Dn=new P,eo=new P,Gs=new P,no=new P;class Ls{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(to);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Hs),a=Dn.dot(this.direction),c=-Dn.dot(Hs),l=Dn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(to).addScaledVector(Hs,h),d}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){eo.subVectors(e,t),Gs.subVectors(n,t),no.crossVectors(eo,Gs);let o=this.direction.dot(no),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(Dn,Gs));if(c<0)return null;const l=a*this.direction.dot(eo.cross(Dn));if(l<0||c+l>o)return null;const u=-a*Dn.dot(no);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,M=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-M*l,e[9]=-a*c,e[2]=M-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,M=l*f;e[0]=h+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=M+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,M=l*f;e[0]=h-M*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,M=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+M,e[1]=c*f,e[5]=M*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=M-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-M*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+M,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,hd)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Ln.crossVectors(n,We),Ln.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Ln.crossVectors(n,We)),Ln.normalize(),Vs.crossVectors(We,Ln),s[0]=Ln.x,s[4]=Vs.x,s[8]=We.x,s[1]=Ln.y,s[5]=Vs.y,s[9]=We.y,s[2]=Ln.z,s[6]=Vs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],b=n[3],v=n[7],y=n[11],I=n[15],E=s[0],w=s[4],C=s[8],W=s[12],_=s[1],x=s[5],D=s[9],U=s[13],N=s[2],F=s[6],L=s[10],Q=s[14],q=s[3],st=s[7],ut=s[11],pt=s[15];return r[0]=o*E+a*_+c*N+l*q,r[4]=o*w+a*x+c*F+l*st,r[8]=o*C+a*D+c*L+l*ut,r[12]=o*W+a*U+c*Q+l*pt,r[1]=u*E+f*_+h*N+d*q,r[5]=u*w+f*x+h*F+d*st,r[9]=u*C+f*D+h*L+d*ut,r[13]=u*W+f*U+h*Q+d*pt,r[2]=g*E+M*_+p*N+m*q,r[6]=g*w+M*x+p*F+m*st,r[10]=g*C+M*D+p*L+m*ut,r[14]=g*W+M*U+p*Q+m*pt,r[3]=b*E+v*_+y*N+I*q,r[7]=b*w+v*x+y*F+I*st,r[11]=b*C+v*D+y*L+I*ut,r[15]=b*W+v*U+y*Q+I*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15];return g*(+r*c*f-s*l*f-r*a*h+n*l*h+s*a*d-n*c*d)+M*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+p*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+m*(-s*a*u-e*c*f+e*a*h+s*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],b=f*p*l-M*h*l+M*c*d-a*p*d-f*c*m+a*h*m,v=g*h*l-u*p*l-g*c*d+o*p*d+u*c*m-o*h*m,y=u*M*l-g*f*l+g*a*d-o*M*d-u*a*m+o*f*m,I=g*f*c-u*M*c-g*a*h+o*M*h+u*a*p-o*f*p,E=e*b+n*v+s*y+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=b*w,t[1]=(M*h*r-f*p*r-M*s*d+n*p*d+f*s*m-n*h*m)*w,t[2]=(a*p*r-M*c*r+M*s*l-n*p*l-a*s*m+n*c*m)*w,t[3]=(f*c*r-a*h*r-f*s*l+n*h*l+a*s*d-n*c*d)*w,t[4]=v*w,t[5]=(u*p*r-g*h*r+g*s*d-e*p*d-u*s*m+e*h*m)*w,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*w,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*w,t[8]=y*w,t[9]=(g*f*r-u*M*r-g*n*d+e*M*d+u*n*m-e*f*m)*w,t[10]=(o*M*r-g*a*r+g*n*l-e*M*l-o*n*m+e*a*m)*w,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*d-e*a*d)*w,t[12]=I*w,t[13]=(u*M*s-g*f*s+g*n*h-e*M*h-u*n*p+e*f*p)*w,t[14]=(g*a*s-o*M*s-g*n*c+e*M*c+o*n*p-e*a*p)*w,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*h+e*a*h)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,M=o*u,p=o*f,m=a*f,b=c*l,v=c*u,y=c*f,I=n.x,E=n.y,w=n.z;return s[0]=(1-(M+m))*I,s[1]=(d+y)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(h+m))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(g+v)*w,s[9]=(p-b)*w,s[10]=(1-(h+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const l=1/r,u=1/o,f=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===Tn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*l,d=(n+s)*u;let g,M;if(a===Tn)g=(o+r)*f,M=-2*f;else if(a===Rr)g=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new P,nn=new ce,ud=new P(0,0,0),hd=new P(1,1,1),Ln=new P,Vs=new P,We=new P,vc=new ce,xc=new ze;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const yc=new P,Pi=new ze,yn=new ce,Ws=new P,hs=new P,fd=new P,pd=new ze,Mc=new P(1,0,0),Sc=new P(0,1,0),Ec=new P(0,0,1),bc={type:"added"},md={type:"removed"},Di={type:"childadded",child:null},io={type:"childremoved",child:null};class Me extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new P,e=new pn,n=new ze,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Zt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hs,Ws,this.up):yn.lookAt(Ws,hs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(yn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new P(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new P,Mn=new P,so=new P,Sn=new P,Li=new P,Ii=new P,wc=new P,ro=new P,oo=new P,ao=new P,co=new ae,lo=new ae,uo=new ae;class on{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Mn.subVectors(n,e),so.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(Mn),c=sn.dot(so),l=Mn.dot(Mn),u=Mn.dot(so),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),lo.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(lo,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Mn.subVectors(t,e),sn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),sn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,n),Ii.subVectors(r,n),ro.subVectors(t,n);const c=Li.dot(ro),l=Ii.dot(ro);if(c<=0&&l<=0)return e.copy(n);oo.subVectors(t,s);const u=Li.dot(oo),f=Ii.dot(oo);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Li,o);ao.subVectors(t,r);const d=Li.dot(ao),g=Ii.dot(ao);if(g>=0&&d<=g)return e.copy(r);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ii,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return wc.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(wc,a);const m=1/(p+M+h);return o=M*m,a=h*m,e.copy(n).addScaledVector(Li,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Ya(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ho(o,r,t+1/3),this.g=ho(o,r,t),this.b=ho(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return se.fromWorkingColorSpace(De.copy(this),t),Math.round(ye(De.r*255,0,255))*65536+Math.round(ye(De.g*255,0,255))*256+Math.round(ye(De.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=un){se.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Xs);const n=vs(In.h,Xs.h,e),s=vs(In.s,Xs.s,e),r=vs(In.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Wt;Wt.NAMES=lu;let gd=0;class yi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=qi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new P,qs=new _t;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class uu extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hu extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const je=new ce,fo=new Me,Ui=new P,Xe=new qn,ds=new qn,Te=new P;class ve extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?hu:uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Xe.min,ds.min),Xe.expandByPoint(Te),Te.addVectors(Xe.max,ds.max),Xe.expandByPoint(Te)):(Xe.expandByPoint(ds.min),Xe.expandByPoint(ds.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Te.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(t,l),Te.add(Ui)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new P,c[C]=new P;const l=new P,u=new P,f=new P,h=new _t,d=new _t,g=new _t,M=new P,p=new P;function m(C,W,_){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,W),f.fromBufferAttribute(n,_),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,W),g.fromBufferAttribute(r,_),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const x=1/(d.x*g.y-g.x*d.y);isFinite(x)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(x),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(x),a[C].add(M),a[W].add(M),a[_].add(M),c[C].add(p),c[W].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,W=b.length;C<W;++C){const _=b[C],x=_.start,D=_.count;for(let U=x,N=x+D;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new P,y=new P,I=new P,E=new P;function w(C){I.fromBufferAttribute(s,C),E.copy(I);const W=a[C];v.copy(W),v.sub(I.multiplyScalar(I.dot(W))).normalize(),y.crossVectors(E,W);const x=y.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,x)}for(let C=0,W=b.length;C<W;++C){const _=b[C],x=_.start,D=_.count;for(let U=x,N=x+D;U<N;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new Be(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new ce,Jn=new Ls,Ys=new xi,Ac=new P,Ks=new P,js=new P,Zs=new P,po=new P,$s=new P,Rc=new P,Js=new P;class Re extends Me{constructor(t=new ve,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(po.fromBufferAttribute(f,t),o?$s.addScaledVector(po,u):$s.addScaledVector(po.sub(e),u))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ys.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ys,Ac)===null||Jn.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,I=v;y<I;y+=3){const E=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);s=Qs(this,m,t,n,l,u,f,E,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const b=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=Qs(this,o,t,n,l,u,f,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,I=v;y<I;y+=3){const E=y,w=y+1,C=y+2;s=Qs(this,m,t,n,l,u,f,E,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const b=p,v=p+1,y=p+2;s=Qs(this,o,t,n,l,u,f,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vd(i,t,e,n,s,r,o,a){let c;if(t.side===He?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Vn,a),c===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ks),i.getVertexPosition(c,js),i.getVertexPosition(l,Zs);const u=vd(i,t,e,n,Ks,js,Zs,Rc);if(u){const f=new P;on.getBarycoord(Rc,Ks,js,Zs,f),s&&(u.uv=on.getInterpolatedAttribute(s,a,c,l,f,new _t)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,c,l,f,new _t)),o&&(u.normal=on.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};on.getNormal(Ks,js,Zs,h.normal),u.face=h,u.barycoord=f}return u}class $e extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function g(M,p,m,b,v,y,I,E,w,C,W){const _=y/w,x=I/C,D=y/2,U=I/2,N=E/2,F=w+1,L=C+1;let Q=0,q=0;const st=new P;for(let ut=0;ut<L;ut++){const pt=ut*x-U;for(let Ft=0;Ft<F;Ft++){const Gt=Ft*_-D;st[M]=Gt*b,st[p]=pt*v,st[m]=N,l.push(st.x,st.y,st.z),st[M]=0,st[p]=0,st[m]=E>0?1:-1,u.push(st.x,st.y,st.z),f.push(Ft/w),f.push(1-ut/C),Q+=1}}for(let ut=0;ut<C;ut++)for(let pt=0;pt<w;pt++){const Ft=h+pt+F*ut,Gt=h+pt+F*(ut+1),X=h+(pt+1)+F*(ut+1),ot=h+(pt+1)+F*ut;c.push(Ft,Gt,ot),c.push(Gt,X,ot),q+=6}a.addGroup(d,q,W),d+=q,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function xd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const yd={clone:ts,merge:Oe};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fu extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new P,Cc=new _t,Pc=new _t;class Fe extends fu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Oi=1;class Ed extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(Ni,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Fe(Ni,Oi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(Ni,Oi,t,e);o.layers=this.layers,this.add(o);const a=new Fe(Ni,Oi,t,e);a.layers=this.layers,this.add(a);const c=new Fe(Ni,Oi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ni,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pu extends Ge{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bd extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:zn});r.uniforms.tEquirect.value=e;const o=new Re(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=rn),new Ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const mo=new P,wd=new P,Td=new Zt;class On{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mo.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new xi,tr=new P;class ja{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],M=s[10],p=s[11],m=s[12],b=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,h-l,p-d,y-m).normalize(),n[1].setComponents(c+r,h+l,p+d,y+m).normalize(),n[2].setComponents(c+o,h+u,p+g,y+b).normalize(),n[3].setComponents(c-o,h-u,p-g,y-b).normalize(),n[4].setComponents(c-a,h-f,p-M,y-v).normalize(),e===Tn)n[5].setComponents(c+a,h+f,p+M,y+v).normalize();else if(e===Rr)n[5].setComponents(a,f,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class kr extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],M=[],p=[];for(let m=0;m<u;m++){const b=m*h-o;for(let v=0;v<l;v++){const y=v*f-r;g.push(y,-b,0),M.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const v=b+l*m,y=b+l*(m+1),I=b+1+l*(m+1),E=b+1+l*m;d.push(v,y,E),d.push(y,I,E)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(M,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,Rf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Ld,alphatest_pars_fragment:Id,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Od,batching_vertex:Fd,begin_vertex:Bd,beginnormal_vertex:kd,bsdfs:zd,iridescence_fragment:Hd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:Zd,common:$d,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:cf,envmap_pars_fragment:lf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:yf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Ef,lights_phong_fragment:bf,lights_phong_pars_fragment:wf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Of,map_particle_fragment:Ff,map_particle_pars_fragment:Bf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Hf,morphcolor_vertex:Gf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Kf,normal_pars_vertex:jf,normal_vertex:Zf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:cp,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:hp,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:xp,tonemapping_fragment:yp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:bp,uv_pars_vertex:wp,uv_vertex:Tp,worldpos_vertex:Ap,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Dp,cube_vert:Lp,cube_frag:Ip,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Op,distanceRGBA_frag:Fp,equirect_vert:Bp,equirect_frag:kp,linedashed_vert:zp,linedashed_frag:Hp,meshbasic_vert:Gp,meshbasic_frag:Vp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Zp,meshphong_frag:$p,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},Ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},hn={basic:{uniforms:Oe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Oe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Oe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Oe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Oe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Oe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Oe([Ct.points,Ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Oe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Oe([Ct.common,Ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Oe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Oe([Ct.sprite,Ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Oe([Ct.common,Ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Oe([Ct.lights,Ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};hn.physical={uniforms:Oe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const er={r:0,b:0,g:0},ti=new pn,cm=new ce;function lm(i,t,e,n,s,r,o){const a=new Wt(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function M(b){let v=!1;const y=g(b);y===null?m(a,c):y&&y.isColor&&(m(y,1),v=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Fr)?(u===void 0&&(u=new Re(new $e(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ts(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ti.copy(v.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(ti)),u.material.toneMapped=se.getTransfer(y.colorSpace)!==de,(f!==y||h!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new kr(2,2),new Wn({name:"BackgroundMaterial",uniforms:ts(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,v){b.getRGB(er,du(i)),n.buffers.color.setClear(er.r,er.g,er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:M,addToRenderList:p}}function um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(_,x,D,U,N){let F=!1;const L=f(U,D,x);r!==L&&(r=L,l(r.object)),F=d(_,U,D,N),F&&g(_,U,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(_,x,D,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function f(_,x,D){const U=D.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let F=N[x.id];F===void 0&&(F={},N[x.id]=F);let L=F[U];return L===void 0&&(L=h(c()),F[U]=L),L}function h(_){const x=[],D=[],U=[];for(let N=0;N<e;N++)x[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:D,attributeDivisors:U,object:_,attributes:{},index:null}}function d(_,x,D,U){const N=r.attributes,F=x.attributes;let L=0;const Q=D.getAttributes();for(const q in Q)if(Q[q].location>=0){const ut=N[q];let pt=F[q];if(pt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor)),ut===void 0||ut.attribute!==pt||pt&&ut.data!==pt.data)return!0;L++}return r.attributesNum!==L||r.index!==U}function g(_,x,D,U){const N={},F=x.attributes;let L=0;const Q=D.getAttributes();for(const q in Q)if(Q[q].location>=0){let ut=F[q];ut===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const pt={};pt.attribute=ut,ut&&ut.data&&(pt.data=ut.data),N[q]=pt,L++}r.attributes=N,r.attributesNum=L,r.index=U}function M(){const _=r.newAttributes;for(let x=0,D=_.length;x<D;x++)_[x]=0}function p(_){m(_,0)}function m(_,x){const D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),N[_]!==x&&(i.vertexAttribDivisor(_,x),N[_]=x)}function b(){const _=r.newAttributes,x=r.enabledAttributes;for(let D=0,U=x.length;D<U;D++)x[D]!==_[D]&&(i.disableVertexAttribArray(D),x[D]=0)}function v(_,x,D,U,N,F,L){L===!0?i.vertexAttribIPointer(_,x,D,N,F):i.vertexAttribPointer(_,x,D,U,N,F)}function y(_,x,D,U){M();const N=U.attributes,F=D.getAttributes(),L=x.defaultAttributeValues;for(const Q in F){const q=F[Q];if(q.location>=0){let st=N[Q];if(st===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){const ut=st.normalized,pt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const Gt=Ft.buffer,X=Ft.type,ot=Ft.bytesPerElement,ht=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===za;if(st.isInterleavedBufferAttribute){const Y=st.data,mt=Y.stride,dt=st.offset;if(Y.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt,Y.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let gt=0;gt<q.locationSize;gt++)p(q.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let gt=0;gt<q.locationSize;gt++)v(q.location+gt,pt/q.locationSize,X,ut,mt*ot,(dt+pt/q.locationSize*gt)*ot,ht)}else{if(st.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)m(q.location+Y,st.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Y=0;Y<q.locationSize;Y++)p(q.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Y=0;Y<q.locationSize;Y++)v(q.location+Y,pt/q.locationSize,X,ut,pt*ot,pt/q.locationSize*Y*ot,ht)}}else if(L!==void 0){const ut=L[Q];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(q.location,ut);break;case 3:i.vertexAttrib3fv(q.location,ut);break;case 4:i.vertexAttrib4fv(q.location,ut);break;default:i.vertexAttrib1fv(q.location,ut)}}}}b()}function I(){C();for(const _ in n){const x=n[_];for(const D in x){const U=x[D];for(const N in U)u(U[N].object),delete U[N];delete x[D]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const x=n[_.id];for(const D in x){const U=x[D];for(const N in U)u(U[N].object),delete U[N];delete x[D]}delete n[_.id]}function w(_){for(const x in n){const D=n[x];if(D[_.id]===void 0)continue;const U=D[_.id];for(const N in U)u(U[N].object),delete U[N];delete D[_.id]}}function C(){W(),o=!0,r!==s&&(r=s,l(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function hm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let M=0;M<f;M++)g+=u[M];for(let M=0;M<h.length;M++)e.update(g,n,h[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==an&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==An&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wn&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:I,maxSamples:E}}function fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new On,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,v=b*4;let y=m.clippingState||null;c.value=y,y=u(g,h,v,d);for(let I=0;I!==v;++I)y[I]=e[I];m.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const m=d+M*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==M;++v,y+=4)o.copy(f[v]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function pm(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Zi:a===ea&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gu extends fu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Dc=[.125,.215,.35,.446,.526,.582],ai=20,go=new gu,Lc=new Wt;let _o=null,vo=0,xo=0,yo=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,Ic=[new P(-ri,Fi,0),new P(ri,Fi,0),new P(-Fi,0,ri),new P(Fi,0,ri),new P(0,ri,-Fi),new P(0,ri,Fi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,vo,xo),this._renderer.xr.enabled=yo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ds,format:an,colorSpace:Xn,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,s){const a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lc),u.toneMapping=Hn,u.autoClear=!1;const d=new hi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Re(new $e,d);let M=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,M=!0):(d.color.copy(Lc),M=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;nr(s,b*v,m>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Re(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ai-1),M=r/g,p=isFinite(r)?1+Math.floor(u*M):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const m=[];let b=0;for(let w=0;w<ai;++w){const C=w/M,W=Math.exp(-C*C/2);m.push(W),w===0?b+=W:w<p&&(b+=2*W)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[s],I=3*y*(s>v-Gi?s-v+Gi:0),E=4*(this._cubeSize-y);nr(e,I,E,3*y,2*y),c.setRenderTarget(e),c.render(f,go)}}function mm(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Gi?c=Dc[o-i+Gi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,M=3,p=2,m=1,b=new Float32Array(M*g*d),v=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,C=E>2?0:-1,W=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(W,M*g*E),v.set(h,p*g*E);const _=[E,E,E,E,E,E];y.set(_,m*g*E)}const I=new ve;I.setAttribute("position",new Be(b,M)),I.setAttribute("uv",new Be(v,p)),I.setAttribute("faceIndex",new Be(y,m)),t.push(I),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new fi(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(ai),s=new P(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Oc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===ea,u=c===Zi||c===$i;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Uc(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Uc(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const M=h.morphAttributes[g];for(let p=0,m=M.length;p<m;p++)t.remove(M[p])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const M=d[g];for(let p=0,m=M.length;p<m;p++)t.update(M[p],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(d!==null){const b=d.array;M=d.version;for(let v=0,y=b.length;v<y;v+=3){const I=b[v+0],E=b[v+1],w=b[v+2];h.push(I,E,E,w,w,I)}}else if(g!==void 0){const b=g.array;M=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const I=v+0,E=v+1,w=v+2;h.push(I,E,E,w,w,I)}}else return;const p=new(ou(h)?hu:uu)(h,1);p.version=M;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ym(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/o,d[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,M,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<M.length;b++)e.update(m,n,M[b])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){const n=new WeakMap,s=new ae;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let W=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",W)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let y=a.attributes.position.count*v,I=1;y>t.maxTextureSize&&(I=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*I*4*f),w=new cu(E,y,I,f);w.type=wn,w.needsUpdate=!0;const C=v*4;for(let _=0;_<f;_++){const x=p[_],D=m[_],U=b[_],N=y*I*4*_;for(let F=0;F<x.count;F++){const L=F*C;d===!0&&(s.fromBufferAttribute(x,F),E[N+L+0]=s.x,E[N+L+1]=s.y,E[N+L+2]=s.z,E[N+L+3]=0),g===!0&&(s.fromBufferAttribute(D,F),E[N+L+4]=s.x,E[N+L+5]=s.y,E[N+L+6]=s.z,E[N+L+7]=0),M===!0&&(s.fromBufferAttribute(U,F),E[N+L+8]=s.x,E[N+L+9]=s.y,E[N+L+10]=s.z,E[N+L+11]=U.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new _t(y,I)},n.set(a,h),a.addEventListener("dispose",W)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Em(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class _u extends Ge{constructor(t,e,n,s,r,o,a,c,l,u=Yi){if(u!==Yi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=di),n===void 0&&u===Qi&&(n=Ji),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vu=new Ge,Bc=new _u(1,1),xu=new cu,yu=new cd,Mu=new pu,kc=[],zc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),Ee(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Ee(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Ee(e,n)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=ru,r=Bc):r=vu,e.setTexture2D(t||r,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yu,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mu,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xu,s)}function Vm(i){switch(i){case 5126:return bm;case 35664:return wm;case 35665:return Tm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Dm;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Om;case 36295:return Fm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){const e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){const e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){const e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){const e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Qm(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vu,r[o])}function og(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yu,r[o])}function ag(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mu,r[o])}function cg(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xu,r[o])}function lg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return jm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return cg}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lg(e.type)}}class dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),o=Mo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wc(e,l===void 0?new ug(a,i,t):new hg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new dg(a),Wc(e,f)),e=f}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function _g(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Ar&&e===Tr?n="LinearDisplayP3ToLinearSRGB":t===Tr&&e===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case Br:return[n,"LinearTransferOETF"];case un:case qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),o)}else return s}function vg(i,t){const e=_g(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xg(i,t){let e;switch(t){case xh:e="Linear";break;case yh:e="Reinhard";break;case Mh:e="Cineon";break;case Sh:e="ACESFilmic";break;case bh:e="AgX";break;case wh:e="Neutral";break;case Eh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new P;function yg(){se.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(bg,Tg)}const wg=new Map;function Tg(i,t){let e=jt[t];if(e===void 0){const n=wg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pa(e)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(Ag,Rg)}function Rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case $i:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case _h:t="ENVMAP_BLENDING_MIX";break;case vh:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Cg(e),l=Pg(e),u=Dg(e),f=Lg(e),h=Ig(e),d=Mg(e),g=Sg(r),M=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`)):(p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=Pa(o),o=Yc(o,e),o=Kc(o,e),a=Pa(a),a=Yc(a,e),a=Kc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=b+p+o,y=b+m+a,I=Xc(s,s.VERTEX_SHADER,v),E=Xc(s,s.FRAGMENT_SHADER,y);s.attachShader(M,I),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(x){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(M).trim(),U=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(E).trim();let F=!0,L=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,I,E);else{const Q=qc(s,I,"vertex"),q=qc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+D+`
`+Q+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(L=!1);L&&(x.diagnostics={runnable:F,programLog:D,vertexShader:{log:U,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(I),s.deleteShader(E),C=new Sr(s,M),W=Eg(s,M)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let W;this.getAttributes=function(){return W===void 0&&w(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,pg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=E,this}let Ng=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fg(t),e.set(t,n)),n}}class Fg{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,r,o){const a=new Ka,c=new Og,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,x,D,U,N){const F=U.fog,L=N.geometry,Q=_.isMeshStandardMaterial?U.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||Q),st=q&&q.mapping===Fr?q.image.height:null,ut=M[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const pt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ft=pt!==void 0?pt.length:0;let Gt=0;L.morphAttributes.position!==void 0&&(Gt=1),L.morphAttributes.normal!==void 0&&(Gt=2),L.morphAttributes.color!==void 0&&(Gt=3);let X,ot,ht,Y;if(ut){const he=hn[ut];X=he.vertexShader,ot=he.fragmentShader}else X=_.vertexShader,ot=_.fragmentShader,c.update(_),ht=c.getVertexShaderID(_),Y=c.getFragmentShaderID(_);const mt=i.getRenderTarget(),dt=N.isInstancedMesh===!0,gt=N.isBatchedMesh===!0,wt=!!_.map,z=!!_.matcap,T=!!q,K=!!_.aoMap,Z=!!_.lightMap,B=!!_.bumpMap,j=!!_.normalMap,at=!!_.displacementMap,ct=!!_.emissiveMap,R=!!_.metalnessMap,S=!!_.roughnessMap,O=_.anisotropy>0,$=_.clearcoat>0,rt=_.dispersion>0,et=_.iridescence>0,vt=_.sheen>0,ft=_.transmission>0,yt=O&&!!_.anisotropyMap,kt=$&&!!_.clearcoatMap,nt=$&&!!_.clearcoatNormalMap,Tt=$&&!!_.clearcoatRoughnessMap,Nt=et&&!!_.iridescenceMap,Et=et&&!!_.iridescenceThicknessMap,Rt=vt&&!!_.sheenColorMap,qt=vt&&!!_.sheenRoughnessMap,Dt=!!_.specularMap,Kt=!!_.specularColorMap,k=!!_.specularIntensityMap,At=ft&&!!_.transmissionMap,it=ft&&!!_.thicknessMap,lt=!!_.gradientMap,Pt=!!_.alphaMap,Lt=_.alphaTest>0,$t=!!_.alphaHash,ue=!!_.extensions;let Jt=Hn;_.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const Bt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:ot,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:gt,batchingColor:gt&&N._colorsTexture!==null,instancing:dt,instancingColor:dt&&N.instanceColor!==null,instancingMorph:dt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Xn,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:z,envMap:T,envMapMode:T&&q.mapping,envMapCubeUVHeight:st,aoMap:K,lightMap:Z,bumpMap:B,normalMap:j,displacementMap:d&&at,emissiveMap:ct,normalMapObjectSpace:j&&_.normalMapType===Ch,normalMapTangentSpace:j&&_.normalMapType===su,metalnessMap:R,roughnessMap:S,anisotropy:O,anisotropyMap:yt,clearcoat:$,clearcoatMap:kt,clearcoatNormalMap:nt,clearcoatRoughnessMap:Tt,dispersion:rt,iridescence:et,iridescenceMap:Nt,iridescenceThicknessMap:Et,sheen:vt,sheenColorMap:Rt,sheenRoughnessMap:qt,specularMap:Dt,specularColorMap:Kt,specularIntensityMap:k,transmission:ft,transmissionMap:At,thicknessMap:it,gradientMap:lt,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Lt,alphaHash:$t,combine:_.combine,mapUv:wt&&p(_.map.channel),aoMapUv:K&&p(_.aoMap.channel),lightMapUv:Z&&p(_.lightMap.channel),bumpMapUv:B&&p(_.bumpMap.channel),normalMapUv:j&&p(_.normalMap.channel),displacementMapUv:at&&p(_.displacementMap.channel),emissiveMapUv:ct&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:yt&&p(_.anisotropyMap.channel),clearcoatMapUv:kt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:qt&&p(_.sheenRoughnessMap.channel),specularMapUv:Dt&&p(_.specularMap.channel),specularColorMapUv:Kt&&p(_.specularColorMap.channel),specularIntensityMapUv:k&&p(_.specularIntensityMap.channel),transmissionMapUv:At&&p(_.transmissionMap.channel),thicknessMapUv:it&&p(_.thicknessMap.channel),alphaMapUv:Pt&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(j||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(wt||Pt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function b(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)x.push(D),x.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(x,_),y(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function v(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function y(_,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){const x=M[_.type];let D;if(x){const U=hn[x];D=yd.clone(U.uniforms)}else D=_.uniforms;return D}function E(_,x){let D;for(let U=0,N=u.length;U<N;U++){const F=u[U];if(F.cacheKey===x){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Ug(i,x,_,r),u.push(D)),D}function w(_){if(--_.usedTimes===0){const x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function C(_){c.remove(_)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:I,acquireProgram:E,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:W}}function kg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,M,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:M,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=M,m.group=p),t++,m}function a(f,h,d,g,M,p){const m=o(f,h,d,g,M,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(f,h,d,g,M,p){const m=o(f,h,d,g,M,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,h){e.length>1&&e.sort(f||zg),n.length>1&&n.sort(h||$c),s.length>1&&s.sort(h||$c)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jc,i.set(n,[o])):s>=r.length?(o=new Jc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Wt};break;case"SpotLight":e={position:new P,direction:new P,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){const t=new Gg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ce,o=new ce;function a(l){let u=0,f=0,h=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,b=0,v=0,y=0,I=0,E=0,w=0;l.sort(Xg);for(let W=0,_=l.length;W<_;W++){const x=l[W],D=x.color,U=x.intensity,N=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(x.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(x.sh.coefficients[L],U);w++}else if(x.isDirectionalLight){const L=t.get(x);if(L.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const Q=x.shadow,q=e.get(x);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=x.shadow.matrix,b++}n.directional[d]=L,d++}else if(x.isSpotLight){const L=t.get(x);L.position.setFromMatrixPosition(x.matrixWorld),L.color.copy(D).multiplyScalar(U),L.distance=N,L.coneCos=Math.cos(x.angle),L.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),L.decay=x.decay,n.spot[M]=L;const Q=x.shadow;if(x.map&&(n.spotLightMap[I]=x.map,I++,Q.updateMatrices(x),x.castShadow&&E++),n.spotLightMatrix[M]=Q.matrix,x.castShadow){const q=e.get(x);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=F,y++}M++}else if(x.isRectAreaLight){const L=t.get(x);L.color.copy(D).multiplyScalar(U),L.halfWidth.set(x.width*.5,0,0),L.halfHeight.set(0,x.height*.5,0),n.rectArea[p]=L,p++}else if(x.isPointLight){const L=t.get(x);if(L.color.copy(x.color).multiplyScalar(x.intensity),L.distance=x.distance,L.decay=x.decay,x.castShadow){const Q=x.shadow,q=e.get(x);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=x.shadow.matrix,v++}n.point[g]=L,g++}else if(x.isHemisphereLight){const L=t.get(x);L.skyColor.copy(x.color).multiplyScalar(U),L.groundColor.copy(x.groundColor).multiplyScalar(U),n.hemi[m]=L,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==I||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=M,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=I,C.numLightProbes=w,n.version=Wg++)}function c(l,u){let f=0,h=0,d=0,g=0,M=0;const p=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const v=l[m];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function Qc(i){const t=new qg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Yg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qc(i),t.set(s,[a])):r>=o.length?(a=new Qc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Kg extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jg extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Jg(i,t,e){let n=new ja;const s=new _t,r=new _t,o=new ae,a=new Kg({depthPacking:Rh}),c=new jg,l={},u=e.maxTextureSize,f={[Vn]:He,[He]:Vn,[dn]:dn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Zg,fragmentShader:$g}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Re(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let m=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),D=i.state;D.setBlending(zn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=m!==En&&this.type===En,N=m===En&&this.type!==En;for(let F=0,L=E.length;F<L;F++){const Q=E[F],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const st=q.getFrameExtents();if(s.multiply(st),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||U===!0||N===!0){const pt=this.type!==En?{minFilter:Qe,magFilter:Qe}:{};q.map!==null&&q.map.dispose(),q.map=new fi(s.x,s.y,pt),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ut=q.getViewportCount();for(let pt=0;pt<ut;pt++){const Ft=q.getViewport(pt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),D.viewport(o),q.updateMatrices(Q,pt),n=q.getFrustum(),y(w,C,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===En&&b(q,C),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(W,_,x)};function b(E,w){const C=t.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fi(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,h,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,d,M,null)}function v(E,w,C,W){let _=null;const x=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(x!==void 0)_=x;else if(_=C.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=_.uuid,U=w.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let F=N[U];F===void 0&&(F=_.clone(),N[U]=F,w.addEventListener("dispose",I)),_=F}if(_.visible=w.visible,_.wireframe=w.wireframe,W===En?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:f[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=C}return _}function y(E,w,C,W,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===En)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const U=t.update(E),N=E.material;if(Array.isArray(N)){const F=U.groups;for(let L=0,Q=F.length;L<Q;L++){const q=F[L],st=N[q.materialIndex];if(st&&st.visible){const ut=v(E,st,W,_);E.onBeforeShadow(i,E,w,C,U,ut,q),i.renderBufferDirect(C,null,U,ut,E,q),E.onAfterShadow(i,E,w,C,U,ut,q)}}}else if(N.visible){const F=v(E,N,W,_);E.onBeforeShadow(i,E,w,C,U,F,null),i.renderBufferDirect(C,null,U,F,E,null),E.onAfterShadow(i,E,w,C,U,F,null)}}const D=E.children;for(let U=0,N=D.length;U<N;U++)y(D[U],w,C,W,_)}function I(E){E.target.removeEventListener("dispose",I);for(const C in l){const W=l[C],_=E.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const Qg={[Yo]:Ko,[jo]:Jo,[Zo]:Qo,[ji]:$o,[Ko]:Yo,[Jo]:jo,[Qo]:Zo,[$o]:ji};function t_(i){function t(){let k=!1;const At=new ae;let it=null;const lt=new ae(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!k&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,Lt,$t,ue,Jt){Jt===!0&&(Pt*=ue,Lt*=ue,$t*=ue),At.set(Pt,Lt,$t,ue),lt.equals(At)===!1&&(i.clearColor(Pt,Lt,$t,ue),lt.copy(At))},reset:function(){k=!1,it=null,lt.set(-1,0,0,0)}}}function e(){let k=!1,At=!1,it=null,lt=null,Pt=null;return{setReversed:function(Lt){At=Lt},setTest:function(Lt){Lt?ht(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Lt){it!==Lt&&!k&&(i.depthMask(Lt),it=Lt)},setFunc:function(Lt){if(At&&(Lt=Qg[Lt]),lt!==Lt){switch(Lt){case Yo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Pt!==Lt&&(i.clearDepth(Lt),Pt=Lt)},reset:function(){k=!1,it=null,lt=null,Pt=null}}}function n(){let k=!1,At=null,it=null,lt=null,Pt=null,Lt=null,$t=null,ue=null,Jt=null;return{setTest:function(Bt){k||(Bt?ht(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Bt){At!==Bt&&!k&&(i.stencilMask(Bt),At=Bt)},setFunc:function(Bt,he,ie){(it!==Bt||lt!==he||Pt!==ie)&&(i.stencilFunc(Bt,he,ie),it=Bt,lt=he,Pt=ie)},setOp:function(Bt,he,ie){(Lt!==Bt||$t!==he||ue!==ie)&&(i.stencilOp(Bt,he,ie),Lt=Bt,$t=he,ue=ie)},setLocked:function(Bt){k=Bt},setClear:function(Bt){Jt!==Bt&&(i.clearStencil(Bt),Jt=Bt)},reset:function(){k=!1,At=null,it=null,lt=null,Pt=null,Lt=null,$t=null,ue=null,Jt=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],d=null,g=!1,M=null,p=null,m=null,b=null,v=null,y=null,I=null,E=new Wt(0,0,0),w=0,C=!1,W=null,_=null,x=null,D=null,U=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,L=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=L>=1):Q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=L>=2);let q=null,st={};const ut=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Ft=new ae().fromArray(ut),Gt=new ae().fromArray(pt);function X(k,At,it,lt){const Pt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(k,Lt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<it;$t++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(At+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Lt}const ot={};ot[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),r.setFunc(ji),Z(!1),B(ac),ht(i.CULL_FACE),T(zn);function ht(k){l[k]!==!0&&(i.enable(k),l[k]=!0)}function Y(k){l[k]!==!1&&(i.disable(k),l[k]=!1)}function mt(k,At){return u[k]!==At?(i.bindFramebuffer(k,At),u[k]=At,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=At),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=At),!0):!1}function dt(k,At){let it=h,lt=!1;if(k){it=f.get(At),it===void 0&&(it=[],f.set(At,it));const Pt=k.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,$t=Pt.length;Lt<$t;Lt++)it[Lt]=i.COLOR_ATTACHMENT0+Lt;it.length=Pt.length,lt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,lt=!0);lt&&i.drawBuffers(it)}function gt(k){return d!==k?(i.useProgram(k),d=k,!0):!1}const wt={[oi]:i.FUNC_ADD,[th]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};wt[nh]=i.MIN,wt[ih]=i.MAX;const z={[sh]:i.ZERO,[rh]:i.ONE,[oh]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[dh]:i.SRC_ALPHA_SATURATE,[uh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[ah]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[fh]:i.CONSTANT_COLOR,[ph]:i.ONE_MINUS_CONSTANT_COLOR,[mh]:i.CONSTANT_ALPHA,[gh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(k,At,it,lt,Pt,Lt,$t,ue,Jt,Bt){if(k===zn){g===!0&&(Y(i.BLEND),g=!1);return}if(g===!1&&(ht(i.BLEND),g=!0),k!==Qu){if(k!==M||Bt!==C){if((p!==oi||v!==oi)&&(i.blendEquation(i.FUNC_ADD),p=oi,v=oi),Bt)switch(k){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,b=null,y=null,I=null,E.set(0,0,0),w=0,M=k,C=Bt}return}Pt=Pt||At,Lt=Lt||it,$t=$t||lt,(At!==p||Pt!==v)&&(i.blendEquationSeparate(wt[At],wt[Pt]),p=At,v=Pt),(it!==m||lt!==b||Lt!==y||$t!==I)&&(i.blendFuncSeparate(z[it],z[lt],z[Lt],z[$t]),m=it,b=lt,y=Lt,I=$t),(ue.equals(E)===!1||Jt!==w)&&(i.blendColor(ue.r,ue.g,ue.b,Jt),E.copy(ue),w=Jt),M=k,C=!1}function K(k,At){k.side===dn?Y(i.CULL_FACE):ht(i.CULL_FACE);let it=k.side===He;At&&(it=!it),Z(it),k.blending===qi&&k.transparent===!1?T(zn):T(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const lt=k.stencilWrite;o.setTest(lt),lt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),at(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(k){W!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),W=k)}function B(k){k!==Zu?(ht(i.CULL_FACE),k!==_&&(k===ac?i.cullFace(i.BACK):k===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),_=k}function j(k){k!==x&&(F&&i.lineWidth(k),x=k)}function at(k,At,it){k?(ht(i.POLYGON_OFFSET_FILL),(D!==At||U!==it)&&(i.polygonOffset(At,it),D=At,U=it)):Y(i.POLYGON_OFFSET_FILL)}function ct(k){k?ht(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+N-1),q!==k&&(i.activeTexture(k),q=k)}function S(k,At,it){it===void 0&&(q===null?it=i.TEXTURE0+N-1:it=q);let lt=st[it];lt===void 0&&(lt={type:void 0,texture:void 0},st[it]=lt),(lt.type!==k||lt.texture!==At)&&(q!==it&&(i.activeTexture(it),q=it),i.bindTexture(k,At||ot[k]),lt.type=k,lt.texture=At)}function O(){const k=st[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(k){Ft.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ft.copy(k))}function Rt(k){Gt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Gt.copy(k))}function qt(k,At){let it=c.get(At);it===void 0&&(it=new WeakMap,c.set(At,it));let lt=it.get(k);lt===void 0&&(lt=i.getUniformBlockIndex(At,k.name),it.set(k,lt))}function Dt(k,At){const lt=c.get(At).get(k);a.get(At)!==lt&&(i.uniformBlockBinding(At,lt,k.__bindingPointIndex),a.set(At,lt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},q=null,st={},u={},f=new WeakMap,h=[],d=null,g=!1,M=null,p=null,m=null,b=null,v=null,y=null,I=null,E=new Wt(0,0,0),w=0,C=!1,W=null,_=null,x=null,D=null,U=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:Y,bindFramebuffer:mt,drawBuffers:dt,useProgram:gt,setBlending:T,setMaterial:K,setFlipSided:Z,setCullFace:B,setLineWidth:j,setPolygonOffset:at,setScissorTest:ct,activeTexture:R,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:qt,uniformBlockBinding:Dt,texStorage2D:kt,texStorage3D:nt,texSubImage2D:et,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Et,viewport:Rt,reset:Kt}}function tl(i,t,e,n){const s=e_(n);switch(e){case $l:return i*t;case Ql:return i*t;case tu:return i*t*2;case eu:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case nu:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:case aa:return Math.max(i,16)*Math.max(t,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(t,8)/2;case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case wa:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case iu:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(i){switch(i){case An:case Kl:return{byteLength:1,components:1};case Es:case jl:case Ds:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case di:case za:case wn:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):Cr("canvas")}function M(R,S,O){let $=1;const rt=ct(R);if((rt.width>O||rt.height>O)&&($=O/Math.max(rt.width,rt.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor($*rt.width),vt=Math.floor($*rt.height);f===void 0&&(f=g(et,vt));const ft=S?g(et,vt):f;return ft.width=et,ft.height=vt,ft.getContext("2d").drawImage(R,0,0,et,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+vt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Qe&&R.minFilter!==rn}function m(R){i.generateMipmap(R)}function b(R,S,O,$,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=S;if(S===i.RED&&(O===i.FLOAT&&(et=i.R32F),O===i.HALF_FLOAT&&(et=i.R16F),O===i.UNSIGNED_BYTE&&(et=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.R8UI),O===i.UNSIGNED_SHORT&&(et=i.R16UI),O===i.UNSIGNED_INT&&(et=i.R32UI),O===i.BYTE&&(et=i.R8I),O===i.SHORT&&(et=i.R16I),O===i.INT&&(et=i.R32I)),S===i.RG&&(O===i.FLOAT&&(et=i.RG32F),O===i.HALF_FLOAT&&(et=i.RG16F),O===i.UNSIGNED_BYTE&&(et=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RG8UI),O===i.UNSIGNED_SHORT&&(et=i.RG16UI),O===i.UNSIGNED_INT&&(et=i.RG32UI),O===i.BYTE&&(et=i.RG8I),O===i.SHORT&&(et=i.RG16I),O===i.INT&&(et=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RGB8UI),O===i.UNSIGNED_SHORT&&(et=i.RGB16UI),O===i.UNSIGNED_INT&&(et=i.RGB32UI),O===i.BYTE&&(et=i.RGB8I),O===i.SHORT&&(et=i.RGB16I),O===i.INT&&(et=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),O===i.UNSIGNED_INT&&(et=i.RGBA32UI),O===i.BYTE&&(et=i.RGBA8I),O===i.SHORT&&(et=i.RGBA16I),O===i.INT&&(et=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),S===i.RGBA){const vt=rt?wr:se.getTransfer($);O===i.FLOAT&&(et=i.RGBA32F),O===i.HALF_FLOAT&&(et=i.RGBA16F),O===i.UNSIGNED_BYTE&&(et=vt===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(R,S){let O;return R?S===null||S===di||S===Ji?O=i.DEPTH24_STENCIL8:S===wn?O=i.DEPTH32F_STENCIL8:S===Es&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===Ji?O=i.DEPTH_COMPONENT24:S===wn?O=i.DEPTH_COMPONENT32F:S===Es&&(O=i.DEPTH_COMPONENT16),O}function y(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qe&&R.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){const S=R.target;S.removeEventListener("dispose",I),w(S),S.isVideoTexture&&u.delete(S)}function E(R){const S=R.target;S.removeEventListener("dispose",E),W(S)}function w(R){const S=n.get(R);if(S.__webglInit===void 0)return;const O=R.source,$=h.get(O);if($){const rt=$[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&C(R),Object.keys($).length===0&&h.delete(O)}n.remove(R)}function C(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const O=R.source,$=h.get(O);delete $[S.__cacheKey],o.memory.textures--}function W(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let rt=0;rt<S.__webglFramebuffer[$].length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[$][rt]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,rt=O.length;$<rt;$++){const et=n.get(O[$]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(R)}let _=0;function x(){_=0}function D(){const R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function U(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){const O=n.get(R);if(R.isVideoTexture&&j(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(O,R,S);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function F(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Gt(O,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function L(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Gt(O,R,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function Q(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){X(O,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const q={[na]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},st={[Qe]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ut={[Ph]:i.NEVER,[Oh]:i.ALWAYS,[Dh]:i.LESS,[ru]:i.LEQUAL,[Lh]:i.EQUAL,[Nh]:i.GEQUAL,[Ih]:i.GREATER,[Uh]:i.NOTEQUAL};function pt(R,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Yr||S.magFilter===Fs||S.magFilter===li||S.minFilter===rn||S.minFilter===Yr||S.minFilter===Fs||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,q[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==Fs&&S.minFilter!==li||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ft(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",I));const $=S.source;let rt=h.get($);rt===void 0&&(rt={},h.set($,rt));const et=U(S);if(et!==R.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),rt[et].usedTimes++;const vt=rt[R.__cacheKey];vt!==void 0&&(rt[R.__cacheKey].usedTimes--,vt.usedTimes===0&&C(S)),R.__cacheKey=et,R.__webglTexture=rt[et].texture}return O}function Gt(R,S,O){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const rt=Ft(R,S),et=S.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+O);const vt=n.get(et);if(et.version!==vt.__version||rt===!0){e.activeTexture(i.TEXTURE0+O);const ft=se.getPrimaries(se.workingColorSpace),yt=S.colorSpace===Fn?null:se.getPrimaries(S.colorSpace),kt=S.colorSpace===Fn||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let nt=M(S.image,!1,s.maxTextureSize);nt=at(S,nt);const Tt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type);let Et=b(S.internalFormat,Tt,Nt,S.colorSpace,S.isVideoTexture);pt($,S);let Rt;const qt=S.mipmaps,Dt=S.isVideoTexture!==!0,Kt=vt.__version===void 0||rt===!0,k=et.dataReady,At=y(S,nt);if(S.isDepthTexture)Et=v(S.format===Qi,S.type),Kt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,Tt,Nt,null));else if(S.isDataTexture)if(qt.length>0){Dt&&Kt&&e.texStorage2D(i.TEXTURE_2D,At,Et,qt[0].width,qt[0].height);for(let it=0,lt=qt.length;it<lt;it++)Rt=qt[it],Dt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Rt.width,Rt.height,Tt,Nt,Rt.data):e.texImage2D(i.TEXTURE_2D,it,Et,Rt.width,Rt.height,0,Tt,Nt,Rt.data);S.generateMipmaps=!1}else Dt?(Kt&&e.texStorage2D(i.TEXTURE_2D,At,Et,nt.width,nt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,Tt,Nt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,Tt,Nt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Dt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Et,qt[0].width,qt[0].height,nt.depth);for(let it=0,lt=qt.length;it<lt;it++)if(Rt=qt[it],S.format!==an)if(Tt!==null)if(Dt){if(k)if(S.layerUpdates.size>0){const Pt=tl(Rt.width,Rt.height,S.format,S.type);for(const Lt of S.layerUpdates){const $t=Rt.data.subarray(Lt*Pt/Rt.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Lt,Rt.width,Rt.height,1,Tt,$t,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Rt.width,Rt.height,nt.depth,Tt,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Et,Rt.width,Rt.height,nt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Rt.width,Rt.height,nt.depth,Tt,Nt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Et,Rt.width,Rt.height,nt.depth,0,Tt,Nt,Rt.data)}else{Dt&&Kt&&e.texStorage2D(i.TEXTURE_2D,At,Et,qt[0].width,qt[0].height);for(let it=0,lt=qt.length;it<lt;it++)Rt=qt[it],S.format!==an?Tt!==null?Dt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Rt.width,Rt.height,Tt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Et,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Rt.width,Rt.height,Tt,Nt,Rt.data):e.texImage2D(i.TEXTURE_2D,it,Et,Rt.width,Rt.height,0,Tt,Nt,Rt.data)}else if(S.isDataArrayTexture)if(Dt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Et,nt.width,nt.height,nt.depth),k)if(S.layerUpdates.size>0){const it=tl(nt.width,nt.height,S.format,S.type);for(const lt of S.layerUpdates){const Pt=nt.data.subarray(lt*it/nt.data.BYTES_PER_ELEMENT,(lt+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,nt.width,nt.height,1,Tt,Nt,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Tt,Nt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,Tt,Nt,nt.data);else if(S.isData3DTexture)Dt?(Kt&&e.texStorage3D(i.TEXTURE_3D,At,Et,nt.width,nt.height,nt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Tt,Nt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,Tt,Nt,nt.data);else if(S.isFramebufferTexture){if(Kt)if(Dt)e.texStorage2D(i.TEXTURE_2D,At,Et,nt.width,nt.height);else{let it=nt.width,lt=nt.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Et,it,lt,0,Tt,Nt,null),it>>=1,lt>>=1}}else if(qt.length>0){if(Dt&&Kt){const it=ct(qt[0]);e.texStorage2D(i.TEXTURE_2D,At,Et,it.width,it.height)}for(let it=0,lt=qt.length;it<lt;it++)Rt=qt[it],Dt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Tt,Nt,Rt):e.texImage2D(i.TEXTURE_2D,it,Et,Tt,Nt,Rt);S.generateMipmaps=!1}else if(Dt){if(Kt){const it=ct(nt);e.texStorage2D(i.TEXTURE_2D,At,Et,it.width,it.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Nt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Tt,Nt,nt);p(S)&&m($),vt.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function X(R,S,O){if(S.image.length!==6)return;const $=Ft(R,S),rt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const et=n.get(rt);if(rt.version!==et.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const vt=se.getPrimaries(se.workingColorSpace),ft=S.colorSpace===Fn?null:se.getPrimaries(S.colorSpace),yt=S.colorSpace===Fn||vt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const kt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,Tt=[];for(let lt=0;lt<6;lt++)!kt&&!nt?Tt[lt]=M(S.image[lt],!0,s.maxCubemapSize):Tt[lt]=nt?S.image[lt].image:S.image[lt],Tt[lt]=at(S,Tt[lt]);const Nt=Tt[0],Et=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),qt=b(S.internalFormat,Et,Rt,S.colorSpace),Dt=S.isVideoTexture!==!0,Kt=et.__version===void 0||$===!0,k=rt.dataReady;let At=y(S,Nt);pt(i.TEXTURE_CUBE_MAP,S);let it;if(kt){Dt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,qt,Nt.width,Nt.height);for(let lt=0;lt<6;lt++){it=Tt[lt].mipmaps;for(let Pt=0;Pt<it.length;Pt++){const Lt=it[Pt];S.format!==an?Et!==null?Dt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,Lt.width,Lt.height,Et,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,Lt.width,Lt.height,Et,Rt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,qt,Lt.width,Lt.height,0,Et,Rt,Lt.data)}}}else{if(it=S.mipmaps,Dt&&Kt){it.length>0&&At++;const lt=ct(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(nt){Dt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt[lt].width,Tt[lt].height,Et,Rt,Tt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Tt[lt].width,Tt[lt].height,0,Et,Rt,Tt[lt].data);for(let Pt=0;Pt<it.length;Pt++){const $t=it[Pt].image[lt].image;Dt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,$t.width,$t.height,Et,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,qt,$t.width,$t.height,0,Et,Rt,$t.data)}}else{Dt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Et,Rt,Tt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Et,Rt,Tt[lt]);for(let Pt=0;Pt<it.length;Pt++){const Lt=it[Pt];Dt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,Et,Rt,Lt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,qt,Et,Rt,Lt.image[lt])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),et.__version=rt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ot(R,S,O,$,rt,et){const vt=r.convert(O.format,O.colorSpace),ft=r.convert(O.type),yt=b(O.internalFormat,vt,ft,O.colorSpace);if(!n.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>et),Tt=Math.max(1,S.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,yt,nt,Tt,S.depth,0,vt,ft,null):e.texImage2D(rt,et,yt,nt,Tt,0,vt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),B(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,rt,n.get(O).__webglTexture,0,Z(S)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,rt,n.get(O).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,rt=$&&$.isDepthTexture?$.type:null,et=v(S.stencilBuffer,rt),vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Z(S);B(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,et,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,et,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{const $=S.textures;for(let rt=0;rt<$.length;rt++){const et=$[rt],vt=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),yt=b(et.internalFormat,vt,ft,et.colorSpace),kt=Z(S);O&&B(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,S.width,S.height):B(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,yt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,yt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,rt=Z(S);if(S.depthTexture.format===Yi)B(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===Qi)B(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function mt(R){const S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",rt)};$.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Y(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[$],R,!1);else{const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,S,O){const $=n.get(R);S!==void 0&&ot($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&mt(R)}function gt(R){const S=R.texture,O=n.get(R),$=n.get(S);R.addEventListener("dispose",E);const rt=R.textures,et=R.isWebGLCubeRenderTarget===!0,vt=rt.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),et){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let yt=0;yt<S.mipmaps.length;yt++)O.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else O.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)O.__webglFramebuffer[ft]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ft=0,yt=rt.length;ft<yt;ft++){const kt=n.get(rt[ft]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&B(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<rt.length;ft++){const yt=rt[ft];O.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);const kt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),Tt=b(yt.internalFormat,kt,nt,yt.colorSpace,R.isXRRenderTarget===!0),Nt=Z(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)ot(O.__webglFramebuffer[ft][yt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else ot(O.__webglFramebuffer[ft],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ft=0,yt=rt.length;ft<yt;ft++){const kt=rt[ft],nt=n.get(kt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),pt(i.TEXTURE_2D,kt),ot(O.__webglFramebuffer,R,kt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),pt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)ot(O.__webglFramebuffer[yt],R,S,i.COLOR_ATTACHMENT0,ft,yt);else ot(O.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ft,0);p(S)&&m(ft),e.unbindTexture()}R.depthBuffer&&mt(R)}function wt(R){const S=R.textures;for(let O=0,$=S.length;O<$;O++){const rt=S[O];if(p(rt)){const et=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(rt).__webglTexture;e.bindTexture(et,vt),m(et),e.unbindTexture()}}}const z=[],T=[];function K(R){if(R.samples>0){if(B(R)===!1){const S=R.textures,O=R.width,$=R.height;let rt=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),ft=S.length>1;if(ft)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const kt=n.get(S[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,rt,i.NEAREST),c===!0&&(z.length=0,T.length=0,z.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(z.push(et),T.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const kt=n.get(S[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Z(R){return Math.min(s.maxSamples,R.samples)}function B(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function at(R,S){const O=R.colorSpace,$=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Xn&&O!==Fn&&(se.getTransfer(O)===de?($!==an||rt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=L,this.setTextureCube=Q,this.rebindTextures=dt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=B}function i_(i,t){function e(n,s=Fn){let r;const o=se.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.BYTE;if(n===jl)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Jl)return i.RGB;if(n===an)return i.RGBA;if(n===Ql)return i.LUMINANCE;if(n===tu)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===nu)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===gr||n===_r||n===vr||n===xr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===la)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===wa||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===Aa||n===Ra||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class s_ extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r_={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class c_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:o_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l_ extends _i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const M=new c_,p=e.getContextAttributes();let m=null,b=null;const v=[],y=[],I=new _t;let E=null;const w=new Fe;w.layers.enable(1),w.viewport=new ae;const C=new Fe;C.layers.enable(2),C.viewport=new ae;const W=[w,C],_=new s_;_.layers.enable(1),_.layers.enable(2);let x=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=v[X];return ot===void 0&&(ot=new So,v[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=v[X];return ot===void 0&&(ot=new So,v[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=v[X];return ot===void 0&&(ot=new So,v[X]=ot),ot.getHandSpace()};function U(X){const ot=y.indexOf(X.inputSource);if(ot===-1)return;const ht=v[ot];ht!==void 0&&(ht.update(X.inputSource,X.frame,l||o),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let X=0;X<v.length;X++){const ot=y[X];ot!==null&&(y[X]=null,v[X].disconnect(ot))}x=null,D=null,M.reset(),t.setRenderTarget(m),d=null,h=null,f=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new fi(d.framebufferWidth,d.framebufferHeight,{format:an,type:An,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,ht=null,Y=null;p.depth&&(Y=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?Qi:Yi,ht=p.stencil?Ji:di);const mt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new fi(h.textureWidth,h.textureHeight,{format:an,type:An,depthTexture:new _u(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(X){for(let ot=0;ot<X.removed.length;ot++){const ht=X.removed[ot],Y=y.indexOf(ht);Y>=0&&(y[Y]=null,v[Y].disconnect(ht))}for(let ot=0;ot<X.added.length;ot++){const ht=X.added[ot];let Y=y.indexOf(ht);if(Y===-1){for(let dt=0;dt<v.length;dt++)if(dt>=y.length){y.push(ht),Y=dt;break}else if(y[dt]===null){y[dt]=ht,Y=dt;break}if(Y===-1)break}const mt=v[Y];mt&&mt.connect(ht)}}const L=new P,Q=new P;function q(X,ot,ht){L.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(ht.matrixWorld);const Y=L.distanceTo(Q),mt=ot.projectionMatrix.elements,dt=ht.projectionMatrix.elements,gt=mt[14]/(mt[10]-1),wt=mt[14]/(mt[10]+1),z=(mt[9]+1)/mt[5],T=(mt[9]-1)/mt[5],K=(mt[8]-1)/mt[0],Z=(dt[8]+1)/dt[0],B=gt*K,j=gt*Z,at=Y/(-K+Z),ct=at*-K;if(ot.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),mt[10]===-1)X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const R=gt+at,S=wt+at,O=B-ct,$=j+(Y-ct),rt=z*wt/S*R,et=T*wt/S*R;X.projectionMatrix.makePerspective(O,$,rt,et,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ot=X.near,ht=X.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(ht=M.depthFar)),_.near=C.near=w.near=ot,_.far=C.far=w.far=ht,(x!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,D=_.far);const Y=X.parent,mt=_.cameras;st(_,Y);for(let dt=0;dt<mt.length;dt++)st(mt[dt],Y);mt.length===2?q(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),ut(X,_,Y)};function ut(X,ot,ht){ht===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let pt=null;function Ft(X,ot){if(u=ot.getViewerPose(l||o),g=ot,u!==null){const ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Y=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,Y=!0);for(let dt=0;dt<ht.length;dt++){const gt=ht[dt];let wt=null;if(d!==null)wt=d.getViewport(gt);else{const T=f.getViewSubImage(h,gt);wt=T.viewport,dt===0&&(t.setRenderTargetTextures(b,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(b))}let z=W[dt];z===void 0&&(z=new Fe,z.layers.enable(dt),z.viewport=new ae,W[dt]=z),z.matrix.fromArray(gt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(gt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(wt.x,wt.y,wt.width,wt.height),dt===0&&(_.matrix.copy(z.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Y===!0&&_.cameras.push(z)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const dt=f.getDepthInformation(ht[0]);dt&&dt.isValid&&dt.texture&&M.init(t,dt,s.renderState)}}for(let ht=0;ht<v.length;ht++){const Y=y[ht],mt=v[ht];Y!==null&&mt!==void 0&&mt.update(Y,ot,l||o)}pt&&pt(X,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Gt=new mu;Gt.setAnimationLoop(Ft),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const ei=new pn,u_=new ce;function h_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,du(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),v=b.envMap,y=b.envMapRotation;v&&(p.envMap.value=v,ei.copy(y),ei.x*=-1,ei.y*=-1,ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),p.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(ei)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function l(b,v){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",p));const I=v.program;n.updateUBOMapping(b,I);const E=t.render.frame;r[b.id]!==E&&(h(b),r[b.id]=E)}function u(b){const v=f();b.__bindingPointIndex=v;const y=i.createBuffer(),I=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=s[b.id],y=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let W=0,_=C.length;W<_;W++){const x=C[W];if(d(x,E,W,I)===!0){const D=x.__offset,U=Array.isArray(x.value)?x.value:[x.value];let N=0;for(let F=0;F<U.length;F++){const L=U[F],Q=M(L);typeof L=="number"||typeof L=="boolean"?(x.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,D+N,x.__data)):L.isMatrix3?(x.__data[0]=L.elements[0],x.__data[1]=L.elements[1],x.__data[2]=L.elements[2],x.__data[3]=0,x.__data[4]=L.elements[3],x.__data[5]=L.elements[4],x.__data[6]=L.elements[5],x.__data[7]=0,x.__data[8]=L.elements[6],x.__data[9]=L.elements[7],x.__data[10]=L.elements[8],x.__data[11]=0):(L.toArray(x.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,v,y,I){const E=b.value,w=v+"_"+y;if(I[w]===void 0)return typeof E=="number"||typeof E=="boolean"?I[w]=E:I[w]=E.clone(),!0;{const C=I[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(b){const v=b.uniforms;let y=0;const I=16;for(let w=0,C=v.length;w<C;w++){const W=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,x=W.length;_<x;_++){const D=W[_],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,F=U.length;N<F;N++){const L=U[N],Q=M(L),q=y%I,st=q%Q.boundary,ut=q+st;y+=st,ut!==0&&I-ut<Q.storage&&(y+=I-ut),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Q.storage}}}const E=y%I;return E>0&&(y+=I-E),b.__size=y,b.__cache={},this}function M(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class $a{constructor(t={}){const{canvas:e=Qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Hn,this.toneMappingExposure=1;const v=this;let y=!1,I=0,E=0,w=null,C=-1,W=null;const _=new ae,x=new ae;let D=null;const U=new Wt(0);let N=0,F=e.width,L=e.height,Q=1,q=null,st=null;const ut=new ae(0,0,F,L),pt=new ae(0,0,F,L);let Ft=!1;const Gt=new ja;let X=!1,ot=!1;const ht=new ce,Y=new ce,mt=new P,dt=new ae,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function z(){return w===null?Q:1}let T=n;function K(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),T===null){const G="webgl2";if(T=K(G,A),T===null)throw K(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,B,j,at,ct,R,S,O,$,rt,et,vt,ft,yt,kt,nt,Tt,Nt,Et,Rt,qt,Dt,Kt,k;function At(){Z=new vm(T),Z.init(),Dt=new i_(T,Z),B=new dm(T,Z,t,Dt),j=new t_(T),B.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),at=new Mm(T),ct=new kg,R=new n_(T,Z,j,ct,B,Dt,at),S=new pm(v),O=new _m(v),$=new Ad(T),Kt=new um(T,$),rt=new xm(T,$,at,Kt),et=new Em(T,rt,$,at),Et=new Sm(T,B,R),nt=new fm(ct),vt=new Bg(v,S,O,Z,B,Kt,nt),ft=new h_(v,ct),yt=new Hg,kt=new Yg(Z),Nt=new lm(v,S,O,j,et,h,c),Tt=new Jg(v,et,B),k=new d_(T,at,B,j),Rt=new hm(T,Z,at),qt=new ym(T,Z,at),at.programs=vt.programs,v.capabilities=B,v.extensions=Z,v.properties=ct,v.renderLists=yt,v.shadowMap=Tt,v.state=j,v.info=at}At();const it=new l_(v,T);this.xr=it,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(F,L,!1))},this.getSize=function(A){return A.set(F,L)},this.setSize=function(A,G,J=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,L=G,e.width=Math.floor(A*Q),e.height=Math.floor(G*Q),J===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(F*Q,L*Q).floor()},this.setDrawingBufferSize=function(A,G,J){F=A,L=G,Q=J,e.width=Math.floor(A*J),e.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(ut)},this.setViewport=function(A,G,J,tt){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,G,J,tt),j.viewport(_.copy(ut).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,G,J,tt){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,G,J,tt),j.scissor(x.copy(pt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){j.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,G=!0,J=!0){let tt=0;if(A){let H=!1;if(w!==null){const Mt=w.texture.format;H=Mt===Xa||Mt===Wa||Mt===Va}if(H){const Mt=w.texture.type,It=Mt===An||Mt===di||Mt===Es||Mt===Ji||Mt===Ha||Mt===Ga,Ot=Nt.getClearColor(),V=Nt.getClearAlpha(),St=Ot.r,bt=Ot.g,xt=Ot.b;It?(d[0]=St,d[1]=bt,d[2]=xt,d[3]=V,T.clearBufferuiv(T.COLOR,0,d)):(g[0]=St,g[1]=bt,g[2]=xt,g[3]=V,T.clearBufferiv(T.COLOR,0,g))}else tt|=T.COLOR_BUFFER_BIT}G&&(tt|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(tt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),yt.dispose(),kt.dispose(),ct.dispose(),S.dispose(),O.dispose(),et.dispose(),Kt.dispose(),k.dispose(),vt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Yn),it.removeEventListener("sessionend",ns),ln.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=at.autoReset,G=Tt.enabled,J=Tt.autoUpdate,tt=Tt.needsUpdate,H=Tt.type;At(),at.autoReset=A,Tt.enabled=G,Tt.autoUpdate=J,Tt.needsUpdate=tt,Tt.type=H}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const G=A.target;G.removeEventListener("dispose",$t),ue(G)}function ue(A){Jt(A),ct.remove(A)}function Jt(A){const G=ct.get(A).programs;G!==void 0&&(G.forEach(function(J){vt.releaseProgram(J)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,tt,H,Mt){G===null&&(G=gt);const It=H.isMesh&&H.matrixWorld.determinant()<0,Ot=Ns(A,G,J,tt,H);j.setMaterial(tt,It);let V=J.index,St=1;if(tt.wireframe===!0){if(V=rt.getWireframeAttribute(J),V===void 0)return;St=2}const bt=J.drawRange,xt=J.attributes.position;let zt=bt.start*St,Vt=(bt.start+bt.count)*St;Mt!==null&&(zt=Math.max(zt,Mt.start*St),Vt=Math.min(Vt,(Mt.start+Mt.count)*St)),V!==null?(zt=Math.max(zt,0),Vt=Math.min(Vt,V.count)):xt!=null&&(zt=Math.max(zt,0),Vt=Math.min(Vt,xt.count));const Xt=Vt-zt;if(Xt<0||Xt===1/0)return;Kt.setup(H,tt,Ot,J,V);let ee,Ht=Rt;if(V!==null&&(ee=$.get(V),Ht=qt,Ht.setIndex(ee)),H.isMesh)tt.wireframe===!0?(j.setLineWidth(tt.wireframeLinewidth*z()),Ht.setMode(T.LINES)):Ht.setMode(T.TRIANGLES);else if(H.isLine){let Ut=tt.linewidth;Ut===void 0&&(Ut=1),j.setLineWidth(Ut*z()),H.isLineSegments?Ht.setMode(T.LINES):H.isLineLoop?Ht.setMode(T.LINE_LOOP):Ht.setMode(T.LINE_STRIP)}else H.isPoints?Ht.setMode(T.POINTS):H.isSprite&&Ht.setMode(T.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,te=H._multiDrawCounts,Yt=H._multiDrawCount,be=V?$.get(V).bytesPerElement:1,ge=ct.get(tt).currentProgram.getUniforms();for(let we=0;we<Yt;we++)ge.setValue(T,"_gl_DrawID",we),Ht.render(Ut[we]/be,te[we])}else if(H.isInstancedMesh)Ht.renderInstances(zt,Xt,H.count);else if(J.isInstancedBufferGeometry){const Ut=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,te=Math.min(J.instanceCount,Ut);Ht.renderInstances(zt,Xt,te)}else Ht.render(zt,Xt)};function Bt(A,G,J){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,Si(A,G,J),A.side=Vn,A.needsUpdate=!0,Si(A,G,J),A.side=dn):Si(A,G,J)}this.compile=function(A,G,J=null){J===null&&(J=A),p=kt.get(J),p.init(G),b.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==J&&A.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const tt=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){const Ot=Mt[It];Bt(Ot,J,H),tt.add(Ot)}else Bt(Mt,J,H),tt.add(Mt)}),b.pop(),p=null,tt},this.compileAsync=function(A,G,J=null){const tt=this.compile(A,G,J);return new Promise(H=>{function Mt(){if(tt.forEach(function(It){ct.get(It).currentProgram.isReady()&&tt.delete(It)}),tt.size===0){H(A);return}setTimeout(Mt,10)}Z.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let he=null;function ie(A){he&&he(A)}function Yn(){ln.stop()}function ns(){ln.start()}const ln=new mu;ln.setAnimationLoop(ie),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(A){he=A,it.setAnimationLoop(A),A===null?ln.stop():ln.start()},it.addEventListener("sessionstart",Yn),it.addEventListener("sessionend",ns),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,w),p=kt.get(A,b.length),p.init(G),b.push(p),Y.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Gt.setFromProjectionMatrix(Y),ot=this.localClippingEnabled,X=nt.init(this.clippingPlanes,ot),M=yt.get(A,m.length),M.init(),m.push(M),it.enabled===!0&&it.isPresenting===!0){const Mt=v.xr.getDepthSensingMesh();Mt!==null&&Mi(Mt,G,-1/0,v.sortObjects)}Mi(A,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(q,st),wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,wt&&Nt.addToRenderList(M,A),this.info.render.frame++,X===!0&&nt.beginShadows();const J=p.state.shadowsArray;Tt.render(J,A,G),X===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=M.opaque,H=M.transmissive;if(p.setupLights(),G.isArrayCamera){const Mt=G.cameras;if(H.length>0)for(let It=0,Ot=Mt.length;It<Ot;It++){const V=Mt[It];ss(tt,H,A,V)}wt&&Nt.render(A);for(let It=0,Ot=Mt.length;It<Ot;It++){const V=Mt[It];is(M,A,V,V.viewport)}}else H.length>0&&ss(tt,H,A,G),wt&&Nt.render(A),is(M,A,G);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,G),Kt.resetDefaultState(),C=-1,W=null,b.pop(),b.length>0?(p=b[b.length-1],X===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Mi(A,G,J,tt){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){tt&&dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);const It=et.update(A),Ot=A.material;Ot.visible&&M.push(A,It,Ot,J,dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){const It=et.update(A),Ot=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),dt.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),dt.copy(It.boundingSphere.center)),dt.applyMatrix4(A.matrixWorld).applyMatrix4(Y)),Array.isArray(Ot)){const V=It.groups;for(let St=0,bt=V.length;St<bt;St++){const xt=V[St],zt=Ot[xt.materialIndex];zt&&zt.visible&&M.push(A,It,zt,J,dt.z,xt)}}else Ot.visible&&M.push(A,It,Ot,J,dt.z,null)}}const Mt=A.children;for(let It=0,Ot=Mt.length;It<Ot;It++)Mi(Mt[It],G,J,tt)}function is(A,G,J,tt){const H=A.opaque,Mt=A.transmissive,It=A.transparent;p.setupLightsView(J),X===!0&&nt.setGlobalState(v.clippingPlanes,J),tt&&j.viewport(_.copy(tt)),H.length>0&&Kn(H,G,J),Mt.length>0&&Kn(Mt,G,J),It.length>0&&Kn(It,G,J),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ss(A,G,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new fi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ds:An,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[tt.id],It=tt.viewport||_;Mt.setSize(It.z,It.w);const Ot=v.getRenderTarget();v.setRenderTarget(Mt),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),wt&&Nt.render(J);const V=v.toneMapping;v.toneMapping=Hn;const St=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),X===!0&&nt.setGlobalState(v.clippingPlanes,tt),Kn(A,J,tt),R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let xt=0,zt=G.length;xt<zt;xt++){const Vt=G[xt],Xt=Vt.object,ee=Vt.geometry,Ht=Vt.material,Ut=Vt.group;if(Ht.side===dn&&Xt.layers.test(tt.layers)){const te=Ht.side;Ht.side=He,Ht.needsUpdate=!0,rs(Xt,J,tt,ee,Ht,Ut),Ht.side=te,Ht.needsUpdate=!0,bt=!0}}bt===!0&&(R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt))}v.setRenderTarget(Ot),v.setClearColor(U,N),St!==void 0&&(tt.viewport=St),v.toneMapping=V}function Kn(A,G,J){const tt=G.isScene===!0?G.overrideMaterial:null;for(let H=0,Mt=A.length;H<Mt;H++){const It=A[H],Ot=It.object,V=It.geometry,St=tt===null?It.material:tt,bt=It.group;Ot.layers.test(J.layers)&&rs(Ot,G,J,V,St,bt)}}function rs(A,G,J,tt,H,Mt){A.onBeforeRender(v,G,J,tt,H,Mt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,G,J,tt,A,Mt),H.transparent===!0&&H.side===dn&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,v.renderBufferDirect(J,G,tt,H,A,Mt),H.side=Vn,H.needsUpdate=!0,v.renderBufferDirect(J,G,tt,H,A,Mt),H.side=dn):v.renderBufferDirect(J,G,tt,H,A,Mt),A.onAfterRender(v,G,J,tt,H,Mt)}function Si(A,G,J){G.isScene!==!0&&(G=gt);const tt=ct.get(A),H=p.state.lights,Mt=p.state.shadowsArray,It=H.state.version,Ot=vt.getParameters(A,H.state,Mt,G,J),V=vt.getProgramCacheKey(Ot);let St=tt.programs;tt.environment=A.isMeshStandardMaterial?G.environment:null,tt.fog=G.fog,tt.envMap=(A.isMeshStandardMaterial?O:S).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,St===void 0&&(A.addEventListener("dispose",$t),St=new Map,tt.programs=St);let bt=St.get(V);if(bt!==void 0){if(tt.currentProgram===bt&&tt.lightsStateVersion===It)return Us(A,Ot),bt}else Ot.uniforms=vt.getUniforms(A),A.onBeforeCompile(Ot,v),bt=vt.acquireProgram(Ot,V),St.set(V,bt),tt.uniforms=Ot.uniforms;const xt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(xt.clippingPlanes=nt.uniform),Us(A,Ot),tt.needsLights=Xr(A),tt.lightsStateVersion=It,tt.needsLights&&(xt.ambientLightColor.value=H.state.ambient,xt.lightProbe.value=H.state.probe,xt.directionalLights.value=H.state.directional,xt.directionalLightShadows.value=H.state.directionalShadow,xt.spotLights.value=H.state.spot,xt.spotLightShadows.value=H.state.spotShadow,xt.rectAreaLights.value=H.state.rectArea,xt.ltc_1.value=H.state.rectAreaLTC1,xt.ltc_2.value=H.state.rectAreaLTC2,xt.pointLights.value=H.state.point,xt.pointLightShadows.value=H.state.pointShadow,xt.hemisphereLights.value=H.state.hemi,xt.directionalShadowMap.value=H.state.directionalShadowMap,xt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,xt.spotShadowMap.value=H.state.spotShadowMap,xt.spotLightMatrix.value=H.state.spotLightMatrix,xt.spotLightMap.value=H.state.spotLightMap,xt.pointShadowMap.value=H.state.pointShadowMap,xt.pointShadowMatrix.value=H.state.pointShadowMatrix),tt.currentProgram=bt,tt.uniformsList=null,bt}function Ei(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Sr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Us(A,G){const J=ct.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ns(A,G,J,tt,H){G.isScene!==!0&&(G=gt),R.resetTextureUnits();const Mt=G.fog,It=tt.isMeshStandardMaterial?G.environment:null,Ot=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,V=(tt.isMeshStandardMaterial?O:S).get(tt.envMap||It),St=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,bt=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),xt=!!J.morphAttributes.position,zt=!!J.morphAttributes.normal,Vt=!!J.morphAttributes.color;let Xt=Hn;tt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Xt=v.toneMapping);const ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ht=ee!==void 0?ee.length:0,Ut=ct.get(tt),te=p.state.lights;if(X===!0&&(ot===!0||A!==W)){const Ie=A===W&&tt.id===C;nt.setState(tt,A,Ie)}let Yt=!1;tt.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==te.state.version||Ut.outputColorSpace!==Ot||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==V||tt.fog===!0&&Ut.fog!==Mt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==nt.numPlanes||Ut.numIntersection!==nt.numIntersection)||Ut.vertexAlphas!==St||Ut.vertexTangents!==bt||Ut.morphTargets!==xt||Ut.morphNormals!==zt||Ut.morphColors!==Vt||Ut.toneMapping!==Xt||Ut.morphTargetsCount!==Ht)&&(Yt=!0):(Yt=!0,Ut.__version=tt.version);let be=Ut.currentProgram;Yt===!0&&(be=Si(tt,G,H));let ge=!1,we=!1,Rn=!1;const re=be.getUniforms(),Ve=Ut.uniforms;if(j.useProgram(be.program)&&(ge=!0,we=!0,Rn=!0),tt.id!==C&&(C=tt.id,we=!0),ge||W!==A){B.reverseDepthBuffer?(ht.copy(A.projectionMatrix),ed(ht),nd(ht),re.setValue(T,"projectionMatrix",ht)):re.setValue(T,"projectionMatrix",A.projectionMatrix),re.setValue(T,"viewMatrix",A.matrixWorldInverse);const Ie=re.map.cameraPosition;Ie!==void 0&&Ie.setValue(T,mt.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&re.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&re.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,we=!0,Rn=!0)}if(H.isSkinnedMesh){re.setOptional(T,H,"bindMatrix"),re.setOptional(T,H,"bindMatrixInverse");const Ie=H.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),re.setValue(T,"boneTexture",Ie.boneTexture,R))}H.isBatchedMesh&&(re.setOptional(T,H,"batchingTexture"),re.setValue(T,"batchingTexture",H._matricesTexture,R),re.setOptional(T,H,"batchingIdTexture"),re.setValue(T,"batchingIdTexture",H._indirectTexture,R),re.setOptional(T,H,"batchingColorTexture"),H._colorsTexture!==null&&re.setValue(T,"batchingColorTexture",H._colorsTexture,R));const os=J.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Et.update(H,J,be),(we||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,re.setValue(T,"receiveShadow",H.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Ve.envMap.value=V,Ve.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&G.environment!==null&&(Ve.envMapIntensity.value=G.environmentIntensity),we&&(re.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Wr(Ve,Rn),Mt&&tt.fog===!0&&ft.refreshFogUniforms(Ve,Mt),ft.refreshMaterialUniforms(Ve,tt,Q,L,p.state.transmissionRenderTarget[A.id]),Sr.upload(T,Ei(Ut),Ve,R)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Sr.upload(T,Ei(Ut),Ve,R),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&re.setValue(T,"center",H.center),re.setValue(T,"modelViewMatrix",H.modelViewMatrix),re.setValue(T,"normalMatrix",H.normalMatrix),re.setValue(T,"modelMatrix",H.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ie=tt.uniformsGroups;for(let jn=0,as=Ie.length;jn<as;jn++){const qr=Ie[jn];k.update(qr,be),k.bind(qr,be)}}return be}function Wr(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Xr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,J){ct.get(A.texture).__webglTexture=G,ct.get(A.depthTexture).__webglTexture=J;const tt=ct.get(A);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=J===void 0,tt.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const J=ct.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,J=0){w=A,I=G,E=J;let tt=!0,H=null,Mt=!1,It=!1;if(A){const V=ct.get(A);if(V.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(T.FRAMEBUFFER,null),tt=!1;else if(V.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(V.__hasExternalTextures)R.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const xt=A.depthTexture;if(V.__boundDepthTexture!==xt){if(xt!==null&&ct.has(xt)&&(A.width!==xt.image.width||A.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const St=A.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(It=!0);const bt=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(bt[G])?H=bt[G][J]:H=bt[G],Mt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?H=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(bt)?H=bt[J]:H=bt,_.copy(A.viewport),x.copy(A.scissor),D=A.scissorTest}else _.copy(ut).multiplyScalar(Q).floor(),x.copy(pt).multiplyScalar(Q).floor(),D=Ft;if(j.bindFramebuffer(T.FRAMEBUFFER,H)&&tt&&j.drawBuffers(A,H),j.viewport(_),j.scissor(x),j.setScissorTest(D),Mt){const V=ct.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,V.__webglTexture,J)}else if(It){const V=ct.get(A.texture),St=G||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.__webglTexture,J||0,St)}C=-1},this.readRenderTargetPixels=function(A,G,J,tt,H,Mt,It){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){j.bindFramebuffer(T.FRAMEBUFFER,Ot);try{const V=A.texture,St=V.format,bt=V.type;if(!B.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-tt&&J>=0&&J<=A.height-H&&T.readPixels(G,J,tt,H,Dt.convert(St),Dt.convert(bt),Mt)}finally{const V=w!==null?ct.get(w).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(A,G,J,tt,H,Mt,It){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){const V=A.texture,St=V.format,bt=V.type;if(!B.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-tt&&J>=0&&J<=A.height-H){j.bindFramebuffer(T.FRAMEBUFFER,Ot);const xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.bufferData(T.PIXEL_PACK_BUFFER,Mt.byteLength,T.STREAM_READ),T.readPixels(G,J,tt,H,Dt.convert(St),Dt.convert(bt),0);const zt=w!==null?ct.get(w).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,zt);const Vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await td(T,Vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Mt),T.deleteBuffer(xt),T.deleteSync(Vt),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,J=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const tt=Math.pow(2,-J),H=Math.floor(A.image.width*tt),Mt=Math.floor(A.image.height*tt),It=G!==null?G.x:0,Ot=G!==null?G.y:0;R.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,It,Ot,H,Mt),j.unbindTexture()},this.copyTextureToTexture=function(A,G,J=null,tt=null,H=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,A=arguments[1],G=arguments[2],H=arguments[3]||0,J=null);let Mt,It,Ot,V,St,bt;J!==null?(Mt=J.max.x-J.min.x,It=J.max.y-J.min.y,Ot=J.min.x,V=J.min.y):(Mt=A.image.width,It=A.image.height,Ot=0,V=0),tt!==null?(St=tt.x,bt=tt.y):(St=0,bt=0);const xt=Dt.convert(G.format),zt=Dt.convert(G.type);R.setTexture2D(G,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const Vt=T.getParameter(T.UNPACK_ROW_LENGTH),Xt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ee=T.getParameter(T.UNPACK_SKIP_PIXELS),Ht=T.getParameter(T.UNPACK_SKIP_ROWS),Ut=T.getParameter(T.UNPACK_SKIP_IMAGES),te=A.isCompressedTexture?A.mipmaps[H]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,te.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,te.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ot),T.pixelStorei(T.UNPACK_SKIP_ROWS,V),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,H,St,bt,Mt,It,xt,zt,te.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,H,St,bt,te.width,te.height,xt,te.data):T.texSubImage2D(T.TEXTURE_2D,H,St,bt,Mt,It,xt,zt,te),T.pixelStorei(T.UNPACK_ROW_LENGTH,Vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ee),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ut),H===0&&G.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(A,G,J=null,tt=null,H=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,tt=arguments[1]||null,A=arguments[2],G=arguments[3],H=arguments[4]||0);let Mt,It,Ot,V,St,bt,xt,zt,Vt;const Xt=A.isCompressedTexture?A.mipmaps[H]:A.image;J!==null?(Mt=J.max.x-J.min.x,It=J.max.y-J.min.y,Ot=J.max.z-J.min.z,V=J.min.x,St=J.min.y,bt=J.min.z):(Mt=Xt.width,It=Xt.height,Ot=Xt.depth,V=0,St=0,bt=0),tt!==null?(xt=tt.x,zt=tt.y,Vt=tt.z):(xt=0,zt=0,Vt=0);const ee=Dt.convert(G.format),Ht=Dt.convert(G.type);let Ut;if(G.isData3DTexture)R.setTexture3D(G,0),Ut=T.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)R.setTexture2DArray(G,0),Ut=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const te=T.getParameter(T.UNPACK_ROW_LENGTH),Yt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),be=T.getParameter(T.UNPACK_SKIP_PIXELS),ge=T.getParameter(T.UNPACK_SKIP_ROWS),we=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Xt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,V),T.pixelStorei(T.UNPACK_SKIP_ROWS,St),T.pixelStorei(T.UNPACK_SKIP_IMAGES,bt),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Ut,H,xt,zt,Vt,Mt,It,Ot,ee,Ht,Xt.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(Ut,H,xt,zt,Vt,Mt,It,Ot,ee,Xt.data):T.texSubImage3D(Ut,H,xt,zt,Vt,Mt,It,Ot,ee,Ht,Xt),T.pixelStorei(T.UNPACK_ROW_LENGTH,te),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Yt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,be),T.pixelStorei(T.UNPACK_SKIP_ROWS,ge),T.pixelStorei(T.UNPACK_SKIP_IMAGES,we),H===0&&G.generateMipmaps&&T.generateMipmap(Ut),j.unbindTexture()},this.initRenderTarget=function(A){ct.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){I=0,E=0,w=null,j.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qa?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Br?"display-p3":"srgb"}}class Ja{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qa extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Su extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pr=new P,Dr=new P,el=new ce,fs=new Ls,sr=new xi,Eo=new P,nl=new P;class f_ extends Me{constructor(t=new ve,e=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Dr);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;el.copy(s).invert(),fs.copy(t.ray).applyMatrix4(el);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=d,p=g-1;M<p;M+=l){const m=u.getX(M),b=u.getX(M+1),v=rr(this,t,fs,c,m,b);v&&e.push(v)}if(this.isLineLoop){const M=u.getX(g-1),p=u.getX(d),m=rr(this,t,fs,c,M,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=d,p=g-1;M<p;M+=l){const m=rr(this,t,fs,c,M,M+1);m&&e.push(m)}if(this.isLineLoop){const M=rr(this,t,fs,c,g-1,d);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Pr.fromBufferAttribute(o,s),Dr.fromBufferAttribute(o,r),e.distanceSqToSegment(Pr,Dr,Eo,nl)>n)return;Eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Eo);if(!(c<t.near||c>t.far))return{distance:c,point:nl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const il=new P,sl=new P;class p_ extends f_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)il.fromBufferAttribute(e,s),sl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+il.distanceTo(sl);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ws extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new ce,Da=new Ls,or=new xi,ar=new P;class Lr extends Me{constructor(t=new ve,e=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;rl.copy(s).invert(),Da.copy(t.ray).applyMatrix4(rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,M=d;g<M;g++){const p=l.getX(g);ar.fromBufferAttribute(f,p),ol(ar,p,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,M=d;g<M;g++)ar.fromBufferAttribute(f,g),ol(ar,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ol(i,t,e,n,s,r,o){const a=Da.distanceSqToPoint(i);if(a<e){const c=new P;Da.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new ce;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tc extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m_ extends tc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const cr=new P,bo=new ec,wo=new ec,To=new ec;class g_ extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(cr.subVectors(s[0],s[1]).add(s[0]),l=cr);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),bo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,M,p),wo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,M,p),To.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),wo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),To.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(bo.calc(c),wo.calc(c),To.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function al(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function __(i,t){const e=1-i;return e*e*t}function v_(i,t){return 2*(1-i)*i*t}function x_(i,t){return i*i*t}function xs(i,t,e,n){return __(i,t)+v_(i,e)+x_(i,n)}function y_(i,t){const e=1-i;return e*e*e*t}function M_(i,t){const e=1-i;return 3*e*e*i*t}function S_(i,t){return 3*(1-i)*i*i*t}function E_(i,t){return i*i*i*t}function ys(i,t,e,n,s){return y_(i,t)+M_(i,e)+S_(i,n)+E_(i,s)}class Eu extends _n{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class b_ extends _n{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y),ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bu extends _n{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w_ extends _n{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends _n{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends _n{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y),xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(al(a,c.x,l.x,u.x,f.x),al(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var La=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:g_,CubicBezierCurve:Eu,CubicBezierCurve3:b_,EllipseCurve:tc,LineCurve:bu,LineCurve3:w_,QuadraticBezierCurve:wu,QuadraticBezierCurve3:T_,SplineCurve:Tu});class A_ extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new La[s.type]().fromJSON(s))}return this}}class Ia extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bu(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new wu(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Eu(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new tc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nc extends ve{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new P,h=new _t,d=new P,g=new P,M=new P;let p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let b=0;b<=e;b++){const v=n+b*u*s,y=Math.sin(v),I=Math.cos(v);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*I,o.push(f.x,f.y,f.z),h.x=b/e,h.y=E/(t.length-1),a.push(h.x,h.y);const w=c[3*E+0]*y,C=c[3*E+1],W=c[3*E+0]*I;l.push(w,C,W)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){const y=v+b*t.length,I=y,E=y+t.length,w=y+t.length+1,C=y+1;r.push(I,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.points,t.segments,t.phiStart,t.phiLength)}}class ic extends nc{constructor(t=1,e=1,n=4,s=8){const r=new Ia;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ic(t.radius,t.length,t.capSegments,t.radialSegments)}}class fe extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],p=n/2;let m=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function b(){const y=new P,I=new P;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const W=[],_=C/r,x=_*(e-t)+t;for(let D=0;D<=s;D++){const U=D/s,N=U*c+a,F=Math.sin(N),L=Math.cos(N);I.x=x*F,I.y=-_*n+p,I.z=x*L,f.push(I.x,I.y,I.z),y.set(F,w,L).normalize(),h.push(y.x,y.y,y.z),d.push(U,1-_),W.push(g++)}M.push(W)}for(let C=0;C<s;C++)for(let W=0;W<r;W++){const _=M[W][C],x=M[W+1][C],D=M[W+1][C+1],U=M[W][C+1];t>0&&(u.push(_,x,U),E+=3),e>0&&(u.push(x,D,U),E+=3)}l.addGroup(m,E,0),m+=E}function v(y){const I=g,E=new _t,w=new P;let C=0;const W=y===!0?t:e,_=y===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*_,0),h.push(0,_,0),d.push(.5,.5),g++;const x=g;for(let D=0;D<=s;D++){const N=D/s*c+a,F=Math.cos(N),L=Math.sin(N);w.x=W*L,w.y=p*_,w.z=W*F,f.push(w.x,w.y,w.z),h.push(0,_,0),E.x=F*.5+.5,E.y=L*.5*_+.5,d.push(E.x,E.y),g++}for(let D=0;D<s;D++){const U=I+D,N=x+D;y===!0?u.push(N,N+1,U):u.push(N+1,N,U),C+=3}l.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sc extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new P,y=new P,I=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],I),c(v,y,I,b)}function c(b,v,y,I){const E=I+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const W=b.clone().lerp(y,C/E),_=v.clone().lerp(y,C/E),x=E-C;for(let D=0;D<=x;D++)D===0&&C===E?w[C][D]=W:w[C][D]=W.clone().lerp(_,D/x)}for(let C=0;C<E;C++)for(let W=0;W<2*(E-C)-1;W++){const _=Math.floor(W/2);W%2===0?(h(w[C][_+1]),h(w[C+1][_]),h(w[C][_])):(h(w[C][_+1]),h(w[C+1][_+1]),h(w[C+1][_]))}}function l(b){const v=new P;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(b),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const b=new P;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];const y=p(b)/2/Math.PI+.5,I=m(b)/Math.PI+.5;o.push(y,1-I)}g(),f()}function f(){for(let b=0;b<o.length;b+=6){const v=o[b+0],y=o[b+2],I=o[b+4],E=Math.max(v,y,I),w=Math.min(v,y,I);E>.9&&w<.1&&(v<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),I<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function d(b,v){const y=b*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const b=new P,v=new P,y=new P,I=new P,E=new _t,w=new _t,C=new _t;for(let W=0,_=0;W<r.length;W+=9,_+=6){b.set(r[W+0],r[W+1],r[W+2]),v.set(r[W+3],r[W+4],r[W+5]),y.set(r[W+6],r[W+7],r[W+8]),E.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),I.copy(b).add(v).add(y).divideScalar(3);const x=p(I);M(E,_+0,b,x),M(w,_+2,v,x),M(C,_+4,y,x)}}function M(b,v,y,I){I<0&&b.x===1&&(o[v]=b.x-1),y.x===0&&y.z===0&&(o[v]=I/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.vertices,t.indices,t.radius,t.details)}}class Au extends Ia{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ia().fromJSON(s))}return this}}const R_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ru(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(n&&(r=I_(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Ts(r,o,e,a,c,d,0),o}};function Ru(i,t,e,n,s){let r,o;if(s===W_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=cl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=cl(r,i[r],i[r+1],o);return o&&Hr(o,o.next)&&(Rs(o),o=o.next),o}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||pe(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&B_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?P_(i,n,s,r):C_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Rs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=D_(pi(i),t,e),Ts(i,t,e,n,s,r,2)):o===2&&L_(i,t,e,n,s,r):Ts(pi(i),t,e,n,s,r,1);break}}}function C_(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Vi(s,a,r,c,o,l,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,M=a>c?a>l?a:l:c>l?c:l,p=u>f?u>h?u:h:f>h?f:h,m=Ua(d,g,t,e,n),b=Ua(M,p,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=b;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Vi(a,u,c,f,l,h,v.x,v.y)&&pe(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Vi(a,u,c,f,l,h,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Vi(a,u,c,f,l,h,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Vi(a,u,c,f,l,h,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function D_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Hr(s,r)&&Cu(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rs(n),Rs(n.next),n=i=r),n=n.next}while(n!==i);return pi(n)}function L_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H_(o,a)){let c=Pu(o,a);o=pi(o,o.next),c=pi(c,c.next),Ts(o,t,e,n,s,r,0),Ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function I_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ru(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(z_(l));for(s.sort(U_),r=0;r<s.length;r++)e=N_(s[r],e);return e}function U_(i,t){return i.x-t.x}function N_(i,t){const e=O_(i,t);if(!e)return t;const n=Pu(e,i);return pi(n,n.next),pi(e,e.next)}function O_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Vi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),As(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&F_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function F_(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function B_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ua(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ua(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function H_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G_(i,t)&&(As(i,t)&&As(t,i)&&V_(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Hr(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hr(i,t){return i.x===t.x&&i.y===t.y}function Cu(i,t,e,n){const s=ur(pe(i,t,e)),r=ur(pe(i,t,n)),o=ur(pe(e,n,i)),a=ur(pe(e,n,t));return!!(s!==r&&o!==a||s===0&&lr(i,e,t)||r===0&&lr(i,n,t)||o===0&&lr(e,i,n)||a===0&&lr(e,t,n))}function lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ur(i){return i>0?1:i<0?-1:0}function G_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function V_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){const e=new Na(i.i,i.x,i.y),n=new Na(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cl(i,t,e,n){const s=new Na(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Na(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ms{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ll(t),ul(n,t);let o=t.length;e.forEach(ll);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ul(n,e[c]);const a=R_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ll(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ul(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rc extends ve{constructor(t=new Au([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:X_;let v,y=!1,I,E,w,C;m&&(v=m.getSpacedPoints(u),y=!0,h=!1,I=m.computeFrenetFrames(u,!1),E=new P,w=new P,C=new P),h||(p=0,d=0,g=0,M=0);const W=a.extractPoints(l);let _=W.shape;const x=W.holes;if(!Ms.isClockWise(_)){_=_.reverse();for(let z=0,T=x.length;z<T;z++){const K=x[z];Ms.isClockWise(K)&&(x[z]=K.reverse())}}const U=Ms.triangulateShape(_,x),N=_;for(let z=0,T=x.length;z<T;z++){const K=x[z];_=_.concat(K)}function F(z,T,K){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(T,K)}const L=_.length,Q=U.length;function q(z,T,K){let Z,B,j;const at=z.x-T.x,ct=z.y-T.y,R=K.x-z.x,S=K.y-z.y,O=at*at+ct*ct,$=at*S-ct*R;if(Math.abs($)>Number.EPSILON){const rt=Math.sqrt(O),et=Math.sqrt(R*R+S*S),vt=T.x-ct/rt,ft=T.y+at/rt,yt=K.x-S/et,kt=K.y+R/et,nt=((yt-vt)*S-(kt-ft)*R)/(at*S-ct*R);Z=vt+at*nt-z.x,B=ft+ct*nt-z.y;const Tt=Z*Z+B*B;if(Tt<=2)return new _t(Z,B);j=Math.sqrt(Tt/2)}else{let rt=!1;at>Number.EPSILON?R>Number.EPSILON&&(rt=!0):at<-Number.EPSILON?R<-Number.EPSILON&&(rt=!0):Math.sign(ct)===Math.sign(S)&&(rt=!0),rt?(Z=-ct,B=at,j=Math.sqrt(O)):(Z=at,B=ct,j=Math.sqrt(O/2))}return new _t(Z/j,B/j)}const st=[];for(let z=0,T=N.length,K=T-1,Z=z+1;z<T;z++,K++,Z++)K===T&&(K=0),Z===T&&(Z=0),st[z]=q(N[z],N[K],N[Z]);const ut=[];let pt,Ft=st.concat();for(let z=0,T=x.length;z<T;z++){const K=x[z];pt=[];for(let Z=0,B=K.length,j=B-1,at=Z+1;Z<B;Z++,j++,at++)j===B&&(j=0),at===B&&(at=0),pt[Z]=q(K[Z],K[j],K[at]);ut.push(pt),Ft=Ft.concat(pt)}for(let z=0;z<p;z++){const T=z/p,K=d*Math.cos(T*Math.PI/2),Z=g*Math.sin(T*Math.PI/2)+M;for(let B=0,j=N.length;B<j;B++){const at=F(N[B],st[B],Z);Y(at.x,at.y,-K)}for(let B=0,j=x.length;B<j;B++){const at=x[B];pt=ut[B];for(let ct=0,R=at.length;ct<R;ct++){const S=F(at[ct],pt[ct],Z);Y(S.x,S.y,-K)}}}const Gt=g+M;for(let z=0;z<L;z++){const T=h?F(_[z],Ft[z],Gt):_[z];y?(w.copy(I.normals[0]).multiplyScalar(T.x),E.copy(I.binormals[0]).multiplyScalar(T.y),C.copy(v[0]).add(w).add(E),Y(C.x,C.y,C.z)):Y(T.x,T.y,0)}for(let z=1;z<=u;z++)for(let T=0;T<L;T++){const K=h?F(_[T],Ft[T],Gt):_[T];y?(w.copy(I.normals[z]).multiplyScalar(K.x),E.copy(I.binormals[z]).multiplyScalar(K.y),C.copy(v[z]).add(w).add(E),Y(C.x,C.y,C.z)):Y(K.x,K.y,f/u*z)}for(let z=p-1;z>=0;z--){const T=z/p,K=d*Math.cos(T*Math.PI/2),Z=g*Math.sin(T*Math.PI/2)+M;for(let B=0,j=N.length;B<j;B++){const at=F(N[B],st[B],Z);Y(at.x,at.y,f+K)}for(let B=0,j=x.length;B<j;B++){const at=x[B];pt=ut[B];for(let ct=0,R=at.length;ct<R;ct++){const S=F(at[ct],pt[ct],Z);y?Y(S.x,S.y+v[u-1].y,v[u-1].x+K):Y(S.x,S.y,f+K)}}}X(),ot();function X(){const z=s.length/3;if(h){let T=0,K=L*T;for(let Z=0;Z<Q;Z++){const B=U[Z];mt(B[2]+K,B[1]+K,B[0]+K)}T=u+p*2,K=L*T;for(let Z=0;Z<Q;Z++){const B=U[Z];mt(B[0]+K,B[1]+K,B[2]+K)}}else{for(let T=0;T<Q;T++){const K=U[T];mt(K[2],K[1],K[0])}for(let T=0;T<Q;T++){const K=U[T];mt(K[0]+L*u,K[1]+L*u,K[2]+L*u)}}n.addGroup(z,s.length/3-z,0)}function ot(){const z=s.length/3;let T=0;ht(N,T),T+=N.length;for(let K=0,Z=x.length;K<Z;K++){const B=x[K];ht(B,T),T+=B.length}n.addGroup(z,s.length/3-z,1)}function ht(z,T){let K=z.length;for(;--K>=0;){const Z=K;let B=K-1;B<0&&(B=z.length-1);for(let j=0,at=u+p*2;j<at;j++){const ct=L*j,R=L*(j+1),S=T+Z+ct,O=T+B+ct,$=T+B+R,rt=T+Z+R;dt(S,O,$,rt)}}}function Y(z,T,K){c.push(z),c.push(T),c.push(K)}function mt(z,T,K){gt(z),gt(T),gt(K);const Z=s.length/3,B=b.generateTopUV(n,s,Z-3,Z-2,Z-1);wt(B[0]),wt(B[1]),wt(B[2])}function dt(z,T,K,Z){gt(z),gt(T),gt(Z),gt(T),gt(K),gt(Z);const B=s.length/3,j=b.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);wt(j[0]),wt(j[1]),wt(j[3]),wt(j[1]),wt(j[2]),wt(j[3])}function gt(z){s.push(c[z*3+0]),s.push(c[z*3+1]),s.push(c[z*3+2])}function wt(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return q_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new La[s.type]().fromJSON(s)),new rc(n,t.options)}}const X_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new _t(r,o),new _t(a,c),new _t(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new _t(o,1-c),new _t(l,1-f),new _t(h,1-g),new _t(M,1-m)]:[new _t(a,1-c),new _t(u,1-f),new _t(d,1-g),new _t(p,1-m)]}};function q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gr extends sc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class Ye extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,h=new P,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){const b=[],v=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let I=0;I<=e;I++){const E=I/e;f.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(E+y,1-v),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const v=u[m][b+1],y=u[m][b],I=u[m+1][b],E=u[m+1][b+1];(m!==0||o>0)&&d.push(v,y,E),(m!==n-1||c<Math.PI)&&d.push(y,I,E)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(M,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,f=new P,h=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const M=g/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const M=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(M,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Je extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Du extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ao=new ce,hl=new P,dl=new P;class Lu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fl=new ce,ps=new P,Ro=new P;class Y_ extends Lu{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),Ro.copy(n.position),Ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ro),n.updateMatrixWorld(),s.makeTranslation(-ps.x,-ps.y,-ps.z),fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl)}}class K_ extends Vr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class j_ extends Lu{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ir extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new j_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Iu extends Vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pl(){return performance.now()}const ml=new ce;class $_{constructor(t,e,n=0,s=1/0){this.ray=new Ls(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ml.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ml),this}intersectObject(t,e=!0,n=[]){return Oa(t,this,n,e),n.sort(gl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oa(t[s],this,n,e);return n.sort(gl),n}}function gl(i,t){return i.distance-t.distance}function Oa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Oa(r[o],t,e,!0)}}class _l{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class J_ extends p_{constructor(t=10,e=10,n=4473924,s=8947848){n=new Wt(n),s=new Wt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const M=h===r?n:s;M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3}const u=new ve;u.setAttribute("position",new le(c,3)),u.setAttribute("color",new le(l,3));const f=new Su({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q_ extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function Uu(i,t={}){const e=t.charset??" .:-=+*#%@",n=t.fontSize??12,s=t.color??"#7cfc9a",r=t.colorize??!0,o=Math.max(1,Math.round(n*.6)),a=n,c=e.length,l=document.createElement("canvas"),u=l.getContext("2d"),f=document.createElement("canvas"),h=f.getContext("2d",{willReadFrequently:!0});let d=0,g=0,M=0,p=0,m=new Float32Array(0);function b(Y,mt){d=Y,g=mt,i.setPixelRatio(1),i.setSize(Y,mt,!1),M=Math.max(1,Math.floor(Y/o)),p=Math.max(1,Math.floor(mt/a)),f.width=M,f.height=p,m=new Float32Array(M*p);const dt=Math.min(window.devicePixelRatio||1,2);l.width=Math.floor(Y*dt),l.height=Math.floor(mt*dt),l.style.width=Y+"px",l.style.height=mt+"px",u.setTransform(dt,0,0,dt,0,0),u.font=`${n}px "Courier New", monospace`,u.textBaseline="top"}function v(Y,mt){i.render(Y,mt),h.clearRect(0,0,M,p),h.drawImage(i.domElement,0,0,M,p);const dt=h.getImageData(0,0,M,p).data;u.fillStyle="#000",u.fillRect(0,0,d,g),u.fillStyle=s;for(let gt=0;gt<p;gt++)for(let wt=0;wt<M;wt++){const z=gt*M+wt,T=z*4,K=dt[T],Z=dt[T+1],B=dt[T+2],j=(.3*K+.59*Z+.11*B)/255;if(m[z]=j,j<.035)continue;let at=Math.floor(j*c);at>=c&&(at=c-1);const ct=e[at];if(ct!==" "){if(r){const S=255/(Math.max(K,Z,B)||1);u.fillStyle=`rgb(${Math.round(K*S)},${Math.round(Z*S)},${Math.round(B*S)})`}u.fillText(ct,wt*o,gt*a)}}}const y=new P,I=new ze,E=12,w=a*4,C=.5,W=260;let _=0;function x(Y,mt){const dt=Math.abs(Y),gt=Math.abs(mt);return dt>gt*2?"-":gt>dt*2?"|":Y*mt<0?"/":"\\"}function D(Y,mt){const dt=Math.floor(Y/o),gt=Math.floor(mt/a);return dt<0||dt>=M||gt<0||gt>=p?!0:m[gt*M+dt]>.06}function U(Y,mt,dt=0,gt=0){mt.getWorldQuaternion(I).invert();const wt=d*.5,z=g*.5,T=Math.hypot(wt,z)||1,K=-o*.5,Z=-a*.5,B=E*a;_=(_+dt*W*gt)%w;const j=w*C;for(let at=0;at<Y.length;at++){const ct=Y[at];if(y.copy(ct.dir).applyQuaternion(I),y.z>=0||(y.applyMatrix4(mt.projectionMatrix),y.x<-1||y.x>1||y.y<-1||y.y>1))continue;const R=(y.x*.5+.5)*d,S=(1-(y.y*.5+.5))*g;if(!D(R,S)){if(u.fillStyle=r?ct.color??s:s,dt>.01){const O=R-wt,$=S-z,rt=Math.hypot(O,$)||1,et=O/rt,vt=$/rt,ft=Math.min(1,rt/T),yt=dt*B*(.25+.75*ft),kt=x(et,vt);for(let nt=a;nt<=yt;nt+=a){const Tt=rt-nt;if(Tt<=0)break;let Nt=(Tt-_)%w;if(Nt<0&&(Nt+=w),Nt>j)continue;const Et=R-et*nt,Rt=S-vt*nt;if(D(Et,Rt))break;u.globalAlpha=1-.75*(nt/yt),u.fillText(kt,Et+K,Rt+Z)}u.globalAlpha=1}u.fillText(ct.char,R+K,S+Z)}}}const N="#ff6a2a",F="#ffd24a",L="#7ce5ff",Q="#a8efff",q="#3b82ff",st=["*","+","x",".",":"],ut=new P;let pt=0;function Ft(Y,mt){const dt=Math.abs(Y),gt=Math.abs(mt);return dt>gt*2?"=":gt>dt*2?"|":Y*mt<0?"/":"\\"}function Gt(Y,mt,dt){if(!Y||!Y.object)return;const gt=Y.phase==="salvage",wt=gt?L:N,z=gt?Q:"#ffd24a",K=!!(Y.object.userData&&Y.object.userData.parentAsteroid)?q:F;if(ut.copy(Y.object.position).project(mt),ut.z>1)return;const Z=(ut.x*.5+.5)*d,B=(1-(ut.y*.5+.5))*g,j=g*.5/Math.tan(ne.degToRad(mt.fov*.5));let ct=(Y.object.userData.viewRadius??4)*(Y.object.scale.x||1)*j/Math.max(1,Y.distance);ct=ne.clamp(ct,o*2.5,Math.min(d,g)*.42),u.fillStyle=Y.firing?wt:K;const R=Z-ct,S=Z+ct,O=B-ct,$=B+ct,rt=o,et=a;if(u.fillText("+",R,O),u.fillText("-",R+rt,O),u.fillText("|",R,O+et),u.fillText("+",S,O),u.fillText("-",S-rt,O),u.fillText("|",S,O+et),u.fillText("+",R,$),u.fillText("-",R+rt,$),u.fillText("|",R,$-et),u.fillText("+",S,$),u.fillText("-",S-rt,$),u.fillText("|",S,$-et),!Y.firing)return;pt+=dt*22,u.fillStyle=wt;const vt=[d*.14,d*.86],ft=g*.97;for(let yt=0;yt<vt.length;yt++){const kt=vt[yt],nt=Z-kt,Tt=B-ft,Nt=Math.hypot(nt,Tt)||1,Et=nt/Nt,Rt=Tt/Nt,qt=Ft(Et,Rt),Dt=Math.max(1,Math.floor(Nt/(a*.7)));for(let Kt=0;Kt<=Dt;Kt++){const k=Kt/Dt,At=kt+nt*k,it=ft+Tt*k;u.globalAlpha=.45+.55*Math.abs(Math.sin(Kt*.7-pt)),u.fillText(qt,At-o*.5,it-a*.5)}}u.fillStyle=z;for(let yt=0;yt<7;yt++){const kt=Math.random()*Math.PI*2,nt=Math.random()*a*1.8;u.globalAlpha=.4+Math.random()*.6,u.fillText(st[yt%st.length],Z+Math.cos(kt)*nt-o*.5,B+Math.sin(kt)*nt-a*.5)}u.globalAlpha=1}const X=new P,ot=["*","x","#","X","o","@"];function ht(Y,mt){if(!(!Y||!Y.length)){for(const dt of Y){if(X.copy(dt.position).project(mt),X.z>1||X.z<-1)continue;const gt=(X.x*.5+.5)*d,wt=(1-(X.y*.5+.5))*g,z=Math.floor(gt/o),T=Math.floor(wt/a);if(z<0||z>=M||T<0||T>=p||m[T*M+z]>.06)continue;const K=dt.age/dt.duration,Z=1-K,B=dt.kind==="boom",j=B?22:9,at=(B?4:2.5)+K*(B?7:4),ct=B?ot:st,R=B?"#ff8a3c":"#7ce5ff";u.fillStyle=R;for(let S=0;S<j;S++){const O=S/j*Math.PI*2+Math.random()*.6,$=at*(.4+Math.random()*.6),rt=gt+Math.cos(O)*$,et=wt+Math.sin(O)*$;u.globalAlpha=Z*(.4+Math.random()*.6),u.fillText(ct[Math.floor(Math.random()*ct.length)],rt-o*.5,et-a*.5)}if(B&&K<.45){const S=(1-K/.45)*.9;u.globalAlpha=S,u.fillStyle="#ff5050",u.font=`bold ${n*2}px "Courier New", monospace`,u.fillText("BOOM",gt-o*2,wt-a*1.2),u.font=`${n}px "Courier New", monospace`}}u.globalAlpha=1}}return{domElement:l,setSize:b,render:v,drawStars:U,drawMining:Gt,drawExplosions:ht}}const Co=4;function t0(i,t,e){const n=new P,s=new P;function r(u,f,h,d){const g=d+Co;s.subVectors(u.position,h);const M=s.lengthSq();if(M>=g*g)return 0;const p=Math.sqrt(M)||1e-4;n.copy(s).multiplyScalar(1/p),u.position.addScaledVector(n,g-p);const m=f.dot(n);return m<0?(f.addScaledVector(n,-1.72*m),-m):0}function o(u,f){let h=0;for(const d of i.asteroids){const g=r(u,f,d.position,d.userData.viewRadius*d.scale.x);g>h&&(h=g)}if(t&&t.colliders)for(const d of t.colliders){const g=r(u,f,d.center,d.radius);g>h&&(h=g)}if(e&&e.ships)for(const d of e.ships){if(!d.active)continue;const g=r(u,f,d.group.position,d.radius);g>h&&(h=g)}return{speedIn:h}}function a(u){for(const f of i.asteroids)u(f.position,f.userData.viewRadius*f.scale.x);if(t&&t.colliders)for(const f of t.colliders)u(f.center,f.radius);if(e&&e.ships)for(const f of e.ships)f.active&&u(f.group.position,f.radius)}function c(u,f,h){let d=1/0;return a((g,M)=>{s.subVectors(g,u);const p=s.dot(f);if(p<=0)return;const m=M+Co,b=p-m;b>h||s.lengthSq()-p*p>m*m||b<d&&(d=b)}),d}function l(u,f,h,d=.6){let g=!1;return a((M,p)=>{if(g)return;s.subVectors(M,u);const m=s.dot(f);if(m<=0)return;const b=s.length();b-p-Co>h||m/(b||1e-4)<d||(g=!0)}),g}return{resolve:o,forwardGap:c,forwardNear:l}}function e0(i,t,e,n,s,r,o={}){const a=n?t0(n,s,r):null,c=o.isUiOpen||(()=>!1),l=Object.create(null);let u=!1,f=!1,h=!1,d=window.innerWidth/2,g=window.innerHeight/2;const M=1.5,p=1.3,m=.05,b=1.7,v=80,y=800,I=20,E=.55,w=1.6,C=3.5,W=.7,_=.6,x=4,D=1,U=2200,N=350,F=(s==null?void 0:s.radius)+50,L=18,Q=30,q=18,st=18,ut=14,pt=1.2,Ft=.9,Gt=120,X=240,ot=14,ht=4,Y=new P(0,0,156),mt=.1,dt=1+mt,gt=-mt,wt=1,z=gt-wt,T=dt+1;let K=0,Z=!1,B=0,j=0,at=0,ct=0;const R=new P,S=new P;let O=0,$=!1,rt=!1,et=!1,vt=!1,ft=!1,yt=0,kt=null;const nt={speed:0,throttle:0,warp:0,reverse:0,headingDeg:0,pitchDeg:0,pos:{x:0,y:0,z:0},active:!1,mining:!1,thrustCmd:0,canDock:!1,tooFastToDock:!1,docking:!1,undocking:!1,docked:!1,turn:{yaw:0,pitch:0,roll:0},aimX:0,aimY:0};function Tt(){u||(u=!0,nt.active=!0,e&&(e.style.display="none"))}function Nt(){f=!1,document.body.classList.remove("dragging")}function Et(){u&&(u=!1,nt.active=!1,Nt(),nt.canDock=!1,e&&(e.style.display=""))}const Rt=new P,qt=new ze,Dt=new P,Kt=new ce,k=new ze,At=new ze,it=new P(0,0,0),lt=new P(0,1,0),Pt=new P(0,0,1),Lt=new P,$t=new P,ue=new P,Jt=new P,Bt=new P,he=new P,ie=new P;let Yn=!1;function ns(V,St){const bt=Math.abs(V.y)>.98?Pt:lt;return Kt.lookAt(it,V,bt),(St||new ze).setFromRotationMatrix(Kt)}function ln(){Yn||!s||!s.group||(s.group.updateMatrixWorld(),Rt.copy(Y).applyMatrix4(s.group.matrixWorld),s.group.getWorldQuaternion(k),Dt.set(0,0,1).applyQuaternion(k).normalize(),ns(Dt,qt),Yn=!0)}function Mi(){return!s||!s.center?!1:i.position.distanceTo(s.center)<=F}function is(){const V=[],St=ot+ht;if(s&&s.center&&V.push({c:s.center,r:s.radius+St}),n&&n.asteroids)for(const bt of n.asteroids)V.push({c:bt.position,r:(bt.userData.viewRadius??4)*bt.scale.x+St});return V}function ss(V,St,bt,xt){Jt.subVectors(V,St),Bt.subVectors(bt,St);const zt=ne.clamp(Jt.dot(Bt)/(Bt.lengthSq()||1),0,1);return xt.copy(St).addScaledVector(Bt,zt),zt}function Kn(V,St){for(let bt=0;bt<16;bt++){let xt=null,zt=.001;for(const Xt of St){const ee=Xt.r-ie.subVectors(V,Xt.c).length();ee>zt&&(zt=ee,xt=Xt)}if(!xt)break;ie.subVectors(V,xt.c);const Vt=ie.length();Vt<1e-4?ie.set(1,0,0):ie.multiplyScalar(1/Vt),V.copy(xt.c).addScaledVector(ie,xt.r*1.02)}return V}function rs(V,St,bt){const xt=[V.clone(),St.clone()];let zt=0;for(;zt++<64;){let Vt=!1;for(let Xt=0;Xt<xt.length-1;Xt++){const ee=xt[Xt],Ht=xt[Xt+1],Ut=Xt===0,te=Xt===xt.length-2;let Yt=null,be=1/0;for(const ge of bt){const we=ie.subVectors(ee,ge.c).length()<ge.r,Rn=ie.subVectors(Ht,ge.c).length()<ge.r;if(we&&Ut||Rn&&te)continue;const re=ss(ge.c,ee,Ht,he);he.distanceTo(ge.c)<ge.r&&re<be&&(be=re,Yt=ge)}if(Yt){ss(Yt.c,ee,Ht,he),ie.subVectors(he,Yt.c),ie.lengthSq()<1e-6&&(ie.subVectors(Ht,ee),ie.set(-ie.y,ie.x,0),ie.lengthSq()<1e-6&&ie.set(0,1,0)),ie.normalize();const ge=Yt.c.clone().addScaledVector(ie,Yt.r*1.08);Kn(ge,bt),xt.splice(Xt+1,0,ge),Vt=!0;break}}if(!Vt)break}return xt}function Si(V,St,bt){const xt=V.clone();Kn(xt,bt);const zt=rs(xt,St,bt);return xt.distanceToSquared(V)>1e-6&&zt.unshift(V.clone()),zt}function Ei(V,St,bt,xt,zt,Vt){const Xt=[0];for(let ee=1;ee<V.length;ee++)Xt.push(Xt[ee-1]+V[ee].distanceTo(V[ee-1]));return{kind:"fly",path:V,cum:Xt,len:Xt[Xt.length-1],faceVel:!!St,q0:bt?bt.clone():null,q1:xt?xt.clone():null,cruise:zt,s:0,v:Math.max(0,Vt||0)}}function Us(V){return{kind:"pivot",q1:V.clone()}}function Ns(V,St,bt){const{path:xt,cum:zt}=V;let Vt=1;for(;Vt<zt.length-1&&zt[Vt]<St;)Vt++;const Xt=zt[Vt]-zt[Vt-1]||1,ee=ne.clamp((St-zt[Vt-1])/Xt,0,1);return bt.copy(xt[Vt-1]).lerp(xt[Vt],ee),ue.subVectors(xt[Vt],xt[Vt-1]),ue.lengthSq()<1e-9&&ue.copy(Dt),ue.normalize()}function Wr(V,St){const bt=Math.max(0,V.len-V.s);if(bt<.4)return Ns(V,V.len,i.position),!V.faceVel&&V.q1&&i.quaternion.copy(V.q1),yt=0,!0;const xt=Math.min(V.cruise,Math.sqrt(2*ut*bt));V.v+=ne.clamp(xt-V.v,-ut*St,st*St),V.v<0&&(V.v=0),V.s=Math.min(V.len,V.s+V.v*St);const zt=Ns(V,V.s,i.position);return V.faceVel?(ns(zt,At),i.quaternion.rotateTowards(At,pt*St)):i.quaternion.copy(V.q0).slerp(V.q1,V.len>0?V.s/V.len:1),yt=V.v,!1}function Xr(){const V=is(),St=Lt.copy(Rt).addScaledVector(Dt,Gt),bt=Si(i.position,St,V);return{phases:[Ei(bt,!0,null,null,Q,Math.abs(B)),Us(qt),Ei([St.clone(),Rt.clone()],!1,qt,qt,q,0)],i:0}}function A(){const V=is(),St=$t.copy(Rt).addScaledVector(Dt,X),bt=rs(Rt,St,V);return{phases:[Ei(bt,!0,null,null,Q,0)],i:0}}function G(){var V;vt||et||ft||!Mi()||Math.abs(B)>L||(ln(),Yn&&(kt=Xr(),Z=!1,R.set(0,0,0),O=0,j=at=ct=0,Nt(),et=!0,(V=o.onDockStart)==null||V.call(o)))}function J(){var V;vt&&(ln(),Yn&&(kt=A(),Z=!1,R.set(0,0,0),O=0,j=at=ct=0,Nt(),vt=!1,ft=!0,(V=o.onUndockStart)==null||V.call(o)))}function tt(V){const St=(V.buttons&1)!==0,bt=(V.buttons&2)!==0;St&&!f?(f=!0,document.body.classList.add("dragging")):!St&&f&&Nt(),h=bt}window.addEventListener("pointermove",V=>{c()||(d=V.clientX,g=V.clientY,tt(V))}),window.addEventListener("pointerdown",V=>{c()||u&&(d=V.clientX,g=V.clientY,tt(V))}),window.addEventListener("pointerup",V=>{c()||tt(V)}),window.addEventListener("blur",()=>{Nt(),h=!1;for(const V in l)l[V]=!1}),window.addEventListener("contextmenu",V=>V.preventDefault()),window.addEventListener("keydown",V=>{if(V.code==="Escape"){Et();return}c()||(l[V.code]=!0,V.code==="KeyX"&&(Z=!0),V.code==="KeyE"&&u&&(vt?J():!et&&!ft&&G()),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(V.code)&&V.preventDefault())}),window.addEventListener("keyup",V=>{l[V.code]=!1});const H=new P;function Mt(V){const St=Math.sign(V),bt=Math.min(1,Math.abs(V));if(bt<m)return 0;const xt=(bt-m)/(1-m);return St*Math.pow(xt,1.4)}function It(V){if(V>=dt){const bt=V-dt;return v+bt*(y-v)}return V>=1?v:V>=0?V*v:V>=gt?0:-((gt-V)/wt)*I}function Ot(V){var xt,zt,Vt,Xt,ee;if(nt.turn.yaw=0,nt.turn.pitch=0,nt.turn.roll=0,yt=0,et||ft){const Ht=kt,Ut=Ht.phases[Ht.i];let te;Ut.kind==="pivot"?(i.quaternion.rotateTowards(Ut.q1,Ft*V),yt=0,nt.turn.yaw=.5,te=i.quaternion.angleTo(Ut.q1)<.001):te=Wr(Ut,V),K=0,Z=!1,O=0,$=!1,j=at=ct=0,R.set(0,0,0),te&&(Ht.i++,Ht.i>=Ht.phases.length&&(et?(et=!1,vt=!0,i.position.copy(Rt),i.quaternion.copy(qt),(xt=o.onDocked)==null||xt.call(o)):(ft=!1,(zt=o.onUndocked)==null||zt.call(o)),B=0,yt=0,kt=null))}else if(vt)K=0,B=0,Z=!1,O=0,$=!1,j=at=ct=0,R.set(0,0,0);else if(u){const Ht=c();Ht&&(Nt(),h=!1);const Ut=window.innerWidth/2,te=window.innerHeight/2,Yt=ne.clamp((d-Ut)/Ut,-1,1),be=ne.clamp((g-te)/te,-1,1);nt.aimX=Yt,nt.aimY=be;const ge=!Ht&&(h||!!l.Space);let we=0,Rn=0;f&&!ge&&(we=-Mt(Yt)*M,Rn=-Mt(be)*p,nt.turn.yaw=Mt(Yt),nt.turn.pitch=Mt(be));const re=Math.min(1,C*V);j+=(we-j)*re,at+=(Rn-at)*re,j&&i.rotateY(j*V),at&&i.rotateX(at*V);let Ve=0;!Ht&&(l.KeyA||l.ArrowLeft)&&(Ve+=1),!Ht&&(l.KeyD||l.ArrowRight)&&(Ve-=1);const os=Ve*b;ct+=(os-ct)*re;const Ie=ct*V;Ie&&i.rotateZ(Ie),nt.turn.roll=Ve;const jn=!Ht&&(l.KeyW||l.ArrowUp),as=!Ht&&(l.KeyS||l.ArrowDown);if(nt.thrustCmd=jn?1:as?-1:0,O>0)O>0&&(O=Math.max(0,O-V)),K=0,Z=!1;else if((jn||as)&&(Z=!1),jn&&(K+=E*V),as&&(K-=E*V),Z){const Os=W*V;K>Os?K-=Os:K<-Os?K+=Os:(K=0,Z=!1)}}if(K=ne.clamp(K,z,T),H.set(0,0,-1).applyQuaternion(i.quaternion),!et&&!vt&&!ft){let Ht=!1;if(a&&u&&K>dt){const te=Number.isFinite(a.forwardGap(i.position,H,U)),Yt=a.forwardNear(i.position,H,N);(te||Yt)&&(K=dt,Z=!1,Ht=!0,$||(B>v+1?(Vt=o.onWarpExit)==null||Vt.call(o):(Xt=o.onWarpInhibit)==null||Xt.call(o)))}$=Ht;const Ut=It(K);if(B+=(Ut-B)*Math.min(1,w*V),i.position.addScaledVector(H,B*V),i.position.addScaledVector(R,V),R.multiplyScalar(Math.max(0,1-_*V)),a&&u){S.copy(H).multiplyScalar(B).add(R);const te=a.resolve(i,S);te.speedIn>0?(R.copy(S),B=0,rt||(ee=o.onImpact)==null||ee.call(o,te.speedIn),rt=!0,te.speedIn>x&&(K=0,Z=!1,O=Math.max(O,ne.clamp(te.speedIn/v,.2,1)*D))):rt=!1}}nt.speed=et||ft?yt:vt?0:B+H.dot(R),nt.throttle=ne.clamp(K,0,1),nt.warp=ne.clamp((K-dt)/1,0,1),nt.reverse=ne.clamp((gt-K)/wt,0,1),nt.headingDeg=(ne.radToDeg(Math.atan2(H.x,-H.z))+360)%360,nt.pitchDeg=ne.radToDeg(Math.asin(ne.clamp(H.y,-1,1))),nt.pos.x=i.position.x,nt.pos.y=i.position.y,nt.pos.z=i.position.z,nt.mining=u&&!et&&!ft&&!vt&&(h||!!l.Space),nt.docking=et,nt.undocking=ft,nt.docked=vt;const St=!et&&!ft&&!vt&&u&&Mi(),bt=Math.abs(nt.speed)<=L;nt.canDock=St&&bt,nt.tooFastToDock=St&&!bt}return{update:Ot,state:nt,activate:Tt,deactivate:Et}}const vl=new P(-210,0,-150),xl=180,n0=80,i0=700,s0=.18,r0=6,o0=2,yl=3,a0=6,Ml=20,c0=70,Sl=5,l0=12,u0=1.8,h0=6,Po=.3,d0=.5;function Nu(i,t,e){return Math.sin(i*1.7+t*2.3)*.5+Math.sin(t*1.1+e*1.9)*.3+Math.sin(e*2.1+i*.7)*.2}function f0(i,t){const e=new Gr(i,t),n=e.attributes.position,s=new P;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);const o=1+Nu(s.x,s.y,s.z)*.3;s.multiplyScalar(o),n.setXYZ(r,s.x,s.y,s.z)}return e.computeVertexNormals(),e}function p0(i){const t=new Gr(i,0),e=t.attributes.position,n=new P;for(let s=0;s<e.count;s++){n.fromBufferAttribute(e,s);const r=1+Nu(n.x,n.y,n.z)*.4;n.multiplyScalar(r),e.setXYZ(s,n.x,n.y,n.z)}return t.computeVertexNormals(),t}function m0(i){const t=[];for(let E=0;E<i0;E++){const w=Math.random()*2-1,C=Math.random()*Math.PI*2,W=Math.sqrt(1-w*w),_=new P(Math.cos(C)*W,w,Math.sin(C)*W),x=Math.random(),D=x<.84?".":x<.96?"+":"*",U=Math.random(),N=U<.55?"#eaf2ff":U<.78?"#aac6ff":U<.92?"#fff3c9":"#ffb27a";t.push({dir:_,char:D,color:N})}const e=new P,n=new P;function s(){const E=Math.random()*2-1,w=Math.random()*Math.PI*2,C=Math.sqrt(1-E*E);return e.set(Math.cos(w)*C,E,Math.sin(w)*C)}function r(E){const w=xl*Math.cbrt(Math.random());return E.copy(vl).addScaledVector(s(),w)}const o=[];for(let E=0;E<n0;E++){const w=4+Math.random()*24,C=Math.random()<.5?0:1,W=f0(w,C);W.computeBoundingSphere();const _=.42+Math.random()*.34,D=Math.random()<.7?new Wt(_,_*.84,_*.66):new Wt(_,_*.95,_*1.02),U=new Je({color:D,roughness:1,metalness:0,flatShading:!0}),N=new Re(W,U);r(N.position),N.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),N.userData.spin=new P((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),N.userData.integrity=1,N.userData.broken=!1,N.userData.viewRadius=W.boundingSphere.radius,i.add(N),o.push(N)}const a=[],c=[];function l(E){for(const w of o)w.rotation.x+=w.userData.spin.x*E,w.rotation.y+=w.userData.spin.y*E,w.rotation.z+=w.userData.spin.z*E;for(const w of a){if(w.userData.state==="disintegrating"){w.userData.age=(w.userData.age||0)+E,w.scale.setScalar(Math.max(.01,1-w.userData.age/Po));continue}if(w.userData.state!=="free")continue;const C=w.userData.spin;w.rotation.x+=C.x*E,w.rotation.y+=C.y*E,w.rotation.z+=C.z*E}for(let w=c.length-1;w>=0;w--)c[w].age+=E,c[w].age>=c[w].duration&&c.splice(w,1)}function u(E,w){const C=Math.max(0,(E.userData.integrity??1)-w);return E.userData.integrity=C,C}function f(E){E.userData.integrity=1}function h(E){E.userData.broken=!0,E.userData.integrity=0,E.userData.brokenRadius=E.userData.viewRadius??4,E.scale.setScalar(s0),E.visible=!1;const w=E.userData.brokenRadius,C=Math.max(o0,Math.min(r0,Math.round(w/5))),W=[];for(let _=0;_<C;_++){const x=yl+Math.random()*(a0-yl),D=p0(x);D.computeBoundingSphere();const U=new Wt(16761418).multiplyScalar(.85+Math.random()*.3),N=new Je({color:U,emissive:U.clone().multiplyScalar(.55),emissiveIntensity:1,roughness:.45,metalness:.35,flatShading:!0}),F=new Re(D,N),L=s().clone(),Q=x+Math.random()*w*.3;F.position.copy(E.position).addScaledVector(L,Q),F.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),F.userData.spin=new P((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5),F.userData.weight=Ml+Math.random()*(c0-Ml),F.userData.state="free",F.userData.velocity=L.clone().multiplyScalar(Sl+Math.random()*(l0-Sl)),F.userData.viewRadius=D.boundingSphere.radius,F.userData.parentAsteroid=E,i.add(F),a.push(F),W.push(F)}return W}function d(E){const w=o.indexOf(E);w!==-1&&o.splice(w,1),i.remove(E),E.geometry.dispose(),E.material.dispose(),c.push({position:E.position.clone(),age:0,duration:d0,kind:"boom"})}function g(E){const w=o.indexOf(E);w!==-1&&o.splice(w,1),i.remove(E),E.geometry.dispose(),E.material.dispose()}function M(E){E.userData.state==="free"&&(E.userData.state="disintegrating",E.userData.age=0,E.userData.velocity.set(0,0,0),c.push({position:E.position.clone(),age:0,duration:Po,kind:"spark"}))}function p(E){const w=a[E],C=w.userData.parentAsteroid;i.remove(w),w.geometry.dispose(),w.material.dispose(),a.splice(E,1),C&&y(C).length===0&&g(C)}function m(E,w){for(let C=a.length-1;C>=0;C--){const W=a[C];if(W.userData.state==="disintegrating"){(W.userData.age||0)>=Po&&p(C);continue}W.userData.state==="free"&&(W.position.addScaledVector(W.userData.velocity,w),W.userData.velocity.multiplyScalar(Math.max(0,1-u0*w)),W.position.distanceTo(E)<h0&&p(C))}b()}function b(){for(const E of a){if(E.userData.state!=="free")continue;const w=E.userData.viewRadius??3;for(const C of o){if(C.userData.broken||!C.visible)continue;const W=(C.userData.viewRadius??4)*(C.scale.x||1);n.subVectors(E.position,C.position);const _=n.length(),x=w+W;_>1e-4&&_<x?E.position.addScaledVector(n,(x-_)/_):_<=1e-4&&(E.position.x+=x)}}for(let E=0;E<a.length;E++){const w=a[E];if(w.userData.state!=="free")continue;const C=w.userData.viewRadius??3;for(let W=E+1;W<a.length;W++){const _=a[W];if(_.userData.state!=="free")continue;const x=_.userData.viewRadius??3;n.subVectors(w.position,_.position);const D=n.length(),U=C+x;D>1e-4&&D<U?(n.multiplyScalar((U-D)*.5/D),w.position.add(n),_.position.sub(n)):D<=1e-4&&(w.position.x+=U*.5,_.position.x-=U*.5)}}}function v(){const E=[];for(const w of o)w.userData.broken||E.push(w);for(const w of a)w.userData.state==="free"&&E.push(w);return E}function y(E){return a.filter(w=>w.userData.parentAsteroid===E)}return{update:l,stars:t,asteroids:o,blocks:a,explosions:c,cluster:{center:vl,radius:xl},drainIntegrity:u,restoreIntegrity:f,completeCut:h,failCut:d,finalizeSalvage:g,disintegrateBlock:M,updateBlocks:m,targetables:v,blocksOf:y}}const El=new P(200,160,-620),Do=2,g0=195;function _0(i){const t=new Le;t.position.copy(El),t.rotation.set(.12,.7,.05),t.scale.setScalar(Do),i.add(t);const e=new Je({color:12174028,roughness:.55,metalness:.15}),n=new Je({color:7107195,roughness:.7,metalness:.2,flatShading:!0}),s=new Je({color:13216134,roughness:.6,metalness:.1}),r=new Je({color:6126788,roughness:.45,metalness:.2,emissive:1187900,emissiveIntensity:1,flatShading:!0}),o=new Je({color:9080984,roughness:.6,metalness:.2}),a=new Je({color:10475775,emissive:2911648,emissiveIntensity:1.4,roughness:.3});function c(F,L,Q=t){const q=new Re(F,L);return Q.add(q),q}const l=Math.PI/2,u=[];function f(F,L){const Q=new hi({color:F,transparent:!0,opacity:1}),q=new Re(new Ye(L,10,10),Q);return t.add(q),u.push({mat:Q,speed:2.2+u.length*.35,phase:u.length*1.3}),q}c(new fe(16,16,220,24),e).rotation.x=l;for(const F of[-72,-36,0,36,72]){const L=c(new fe(18,18,7,24),n);L.rotation.x=l,L.position.z=F}const h=new Le;h.position.z=-10,t.add(h);const d=90,g=13;c(new cn(d,g,16,64),e,h);const M=16,p=d-g,m=p-M,b=(M+p)/2;for(let F=0;F<8;F++){const L=F/8*Math.PI*2,Q=c(new fe(2.6,2.6,m,8),o,h);Q.position.set(Math.cos(L)*b,Math.sin(L)*b,0),Q.rotation.z=L-l;const q=c(new $e(13,17,15),F%2?e:s,h);q.position.set(Math.cos(L)*(d+6),Math.sin(L)*(d+6),0),q.rotation.z=L-l;const st=c(new $e(13.4,4,2),a,h);st.position.set(Math.cos(L)*(d+6),Math.sin(L)*(d+6),8),st.rotation.z=L-l}const v=c(new fe(26,18,26,24),e);v.rotation.x=l,v.position.z=122;const y=[[14,14],[-14,14],[14,-14],[-14,-14],[0,0]];for(const[F,L]of y){const q=F===0&&L===0?10:7,st=c(new fe(q,q,20,16),n);st.rotation.x=l,st.position.set(F,L,140),c(new cn(q+1,1.6,8,20),a).position.set(F,L,150)}for(let F=0;F<3;F++){const L=l+F/3*Math.PI*2,Q=c(new $e(5,5,64),o);Q.position.set(Math.cos(L)*30,Math.sin(L)*30,150),Q.rotation.z=L-l,c(new cn(13,2.6,8,18),o).position.set(Math.cos(L)*30,Math.sin(L)*30,182),f(16764490,2.4).position.set(Math.cos(L)*30,Math.sin(L)*30,184)}for(let F=0;F<3;F++){const L=l+F/3*Math.PI*2,Q=c(new fe(11,11,56,16),e);Q.rotation.x=l,Q.position.set(Math.cos(L)*22,Math.sin(L)*22,-82)}const I=c(new fe(22,22,10,24),n);I.rotation.x=l,I.position.z=-116;for(let F=0;F<3;F++){const L=l+F/3*Math.PI*2,Q=c(new fe(6,10,18,16,1,!0),n);Q.rotation.x=l,Q.position.set(Math.cos(L)*11,Math.sin(L)*11,-128)}for(const F of[-1,1]){const L=c(new fe(2.6,2.6,120,10),o);L.rotation.z=l,L.position.set(F*70,0,-50);for(const q of[55,105]){const st=F*q,ut=-50;c(new $e(46,1,34),r).position.set(st,0,ut);for(const Ft of[-16,0,16])c(new $e(48,1.6,1.6),o).position.set(st,0,ut+Ft);for(const Ft of[-23,0,23])c(new $e(1.6,1.6,36),o).position.set(st+Ft,0,ut)}f(F<0?16726832:3800938,2.6).position.set(F*132,0,-50)}c(new fe(1.6,1.6,46,8),o).position.set(0,41,30);const w=c(new fe(17,4,9,24,1,!0),o);w.position.set(0,66,30),w.rotation.set(-.5,0,0),f(16726832,2.8).position.set(0,70,30);const W=new K_(16767400,.6,320,2);W.position.set(0,0,90),t.add(W);const _=[],x=(F,L,Q,q)=>_.push({p:new P(F,L,Q),r:q});for(const F of[-100,-66,-33,0,33,66,100])x(0,0,F,18);x(0,0,125,28),x(0,0,150,22);for(let F=0;F<12;F++){const L=F/12*Math.PI*2;x(Math.cos(L)*90,Math.sin(L)*90,-10,16)}for(let F=0;F<3;F++){const L=l+F/3*Math.PI*2;x(Math.cos(L)*22,Math.sin(L)*22,-82,14)}x(0,0,-118,24);for(const F of[-1,1])for(const L of[40,70,100,130])x(F*L,0,-50,20);x(0,45,30,14),x(0,66,30,16),t.updateMatrixWorld(!0);const D=_.map(F=>({center:F.p.clone().applyMatrix4(t.matrixWorld),radius:F.r*Do}));let U=0;function N(F){U+=F,h.rotation.z+=.07*F;for(const L of u){const Q=Math.sin(U*L.speed+L.phase);L.mat.opacity=Q>.55?1:.12}}return{update:N,group:t,center:El,radius:g0*Do,colliders:D}}const me=Math.PI/2;function Qt(i,t,e){const n=new Re(t,e);return i.add(n),n}function bl(i,t,e,n=!1){return new Je({color:i,roughness:t,metalness:e,flatShading:n})}function Ou(){const i=.55+Math.random()*.3,t=Math.random()<.5;return{hull:bl(new Wt(i,i,i*1.02),.55,.25),hullDark:bl(new Wt(i*.5,i*.52,i*.58),.7,.3,!0),accent:new Je({color:t?new Wt(.82,.46,.2):new Wt(.3,.5,.86),roughness:.5,metalness:.3,flatShading:!0,side:dn}),glow:new Je({color:10475775,emissive:2911648,emissiveIntensity:1.3,roughness:.3}),engine:new Je({color:3346688,emissive:16738858,emissiveIntensity:1.6,roughness:.4})}}function Cs(i,t,e,n,s=14){const r=Qt(i,new ic(e,n,6,s),t);return r.rotation.x=me,r}function Ss(i,t,e,n,s){const r=new Au;r.moveTo(0,0),r.lineTo(i,-n),r.lineTo(i,-n-e),r.lineTo(0,-t),r.closePath();const o=new rc(r,{depth:s,bevelEnabled:!1,steps:1});return o.translate(0,0,-s/2),o.rotateX(me),o}function Fa(i,t,e,n,s,r,o=0){for(const a of[-1,1]){const c=Qt(i,e,t);c.scale.x=a,c.position.set(n*a,s,r),o&&(c.rotation.z=-a*o)}}function Ke(i,t,e,n,s,r,o,a){const c=Qt(i,new $e(e,n,s),t);return c.position.set(r,o,a),c}function v0(i,t,e,n,s,r,o,a){for(let c=0;c<e;c++){const l=me+c/e*Math.PI*2,u=Math.cos(l)*n,f=Math.sin(l)*n,h=Qt(i,new fe(s*.8,s,5,12,1,!0),t.hullDark);h.rotation.x=me,h.position.set(u,f,o);const d=Qt(i,new mn(r,7,12),t.engine);d.rotation.x=me,d.position.set(u,f,a)}}function x0(i){const t=new Le,e=72;Cs(t,i.hull,8,e,20);for(const l of[-22,-7,8,23])Qt(t,new cn(8.6,1.1,8,20),i.hullDark).position.z=l;for(let l=0;l<4;l++){const u=-e*.28+l*16;for(const[f,h]of[[-1,1],[1,1],[-1,-1],[1,-1]])Ke(t,(l+(f+h))%2?i.accent:i.hullDark,11,9,13,f*8,h*7,u)}const n=Qt(t,new Ye(7,16,14),i.hull);n.scale.set(1,1,1.25),n.position.z=e*.5-4,Qt(t,new cn(6.6,1.1,8,20),i.glow).position.z=e*.5+3,Ke(t,i.glow,6,2,1,0,4,e*.5+1),Qt(t,new fe(.5,.5,9,6),i.hullDark).position.set(0,11,6);const r=Qt(t,new fe(3.2,.6,2.2,14,1,!0),i.hull);r.position.set(0,15,6),r.rotation.set(-.5,0,0);for(const l of[-1,1]){const u=Qt(t,new fe(.8,.8,16,6),i.hullDark);u.rotation.z=me,u.position.set(l*12,0,-16),Ke(t,i.accent,14,.8,18,l*19,0,-16)}const o=Qt(t,new fe(8.5,8.5,6,16),i.hullDark);o.rotation.x=me,o.position.z=-e*.5+1;const a=Qt(t,new fe(7,10,9,20,1,!0),i.hullDark);a.rotation.x=me,a.position.z=-e*.5-6;const c=Qt(t,new mn(7,12,18),i.engine);return c.rotation.x=me,c.position.z=-e*.5-11,t}const y0={name:"Freighter",build:x0};function M0(i){const t=new Le,e=20;Cs(t,i.hull,3.2,e,16);const n=Qt(t,new mn(3.3,9,16),i.hull);n.rotation.x=me,n.position.z=e*.5+6.5;const s=Qt(t,new fe(.25,.25,5,5),i.hullDark);s.rotation.x=me,s.position.z=e*.5+13;const r=Qt(t,new Ye(2.6,14,12),i.glow);r.scale.set(1,.72,1.5),r.position.set(0,1.7,e*.28),Fa(t,i.accent,Ss(10,8,2.5,5,.7),2.6,-.6,-1.5,.12);const o=Qt(t,Ss(6,6,1.6,4,.7),i.accent);o.rotation.z=me,o.position.set(0,2,-e*.42),Ke(t,i.hullDark,5,2.2,6,0,-2.4,-2);for(const a of[-1,1]){Cs(t,i.hullDark,1.8,6,12).position.set(a*3.2,0,-e*.5-2);const c=Qt(t,new mn(1.9,4.5,12),i.engine);c.rotation.x=me,c.position.set(a*3.2,0,-e*.5-7)}return t}const S0={name:"Shuttle",build:M0};function E0(i){const t=new Le,e=64;Ke(t,i.hullDark,4,4,e,0,0,0);for(const r of[-22,-8,6,20])Ke(t,i.hullDark,22,1.4,1.4,0,0,r);for(let r=0;r<3;r++){const o=me+r/3*Math.PI*2,a=Math.cos(o)*11,c=Math.sin(o)*11;Cs(t,i.hull,7,30,16).position.set(a,c,-2),Qt(t,new cn(7,.9,6,16),i.accent).position.set(a,c,-2);const l=Qt(t,new fe(.7,.7,30,6),i.hullDark);l.rotation.x=me,l.position.set(a*.55,c*.55,-2)}const n=Qt(t,new Ye(6,16,14),i.accent);n.scale.set(1,1,1.2),n.position.z=e*.5-2,Ke(t,i.hull,7,7,6,0,0,e*.5-9),Qt(t,new cn(5.2,1,8,18),i.glow).position.z=e*.5+3;const s=Qt(t,new fe(6,9,8,18,1,!0),i.hullDark);return s.rotation.x=me,s.position.z=-e*.5-3,v0(t,i,3,3.8,3,3,-e*.5-2,-e*.5-8),t}const b0={name:"Tanker",build:E0};function w0(i){const t=new Le,e=30;Cs(t,i.hull,2.6,e,14);const n=Qt(t,new mn(2.6,11,14),i.hull);n.rotation.x=me,n.position.z=e*.5+7.5;const s=Qt(t,new Ye(2.1,14,12),i.glow);s.scale.set(1,.7,1.8),s.position.set(0,1.4,e*.12),Fa(t,i.accent,Ss(12,11,1.5,8,.8),2,-.5,-e*.12,.1),Fa(t,i.accent,Ss(4.5,4,1,3,.6),2.2,.4,e*.32,.05);const r=Qt(t,Ss(7,7,1.5,5,.8),i.accent);r.rotation.z=me,r.position.set(0,2,-e*.34);for(const c of[-1,1])Ke(t,i.hullDark,2.5,3,8,c*2.8,-.6,e*.02);const o=Qt(t,new fe(3,4.6,7,16,1,!0),i.hullDark);o.rotation.x=me,o.position.z=-e*.5-3;const a=Qt(t,new mn(4,8,16),i.engine);a.rotation.x=me,a.position.z=-e*.5-8;for(let c=0;c<4;c++){const l=c/4*Math.PI*2;Ke(t,i.hullDark,1,1,5,Math.cos(l)*4,Math.sin(l)*4,-e*.5-5)}return t}const T0={name:"Interceptor",build:w0};function A0(i){const t=new Le,e=34;Qt(t,new Ye(12,18,16),i.hull).scale.set(1,.85,1.5);for(const s of[-9,2,12]){const r=Qt(t,new cn(12,1.5,8,24),i.hullDark);r.scale.set(1,.85,1),r.position.z=s}for(const s of[-1,1])Ke(t,i.accent,5,8,14,s*11,0,-2);Ke(t,i.hullDark,12,4,16,0,9,-4);for(const s of[-1,1])Ke(t,i.hullDark,3,3,20,s*10,-1,e*.45),Ke(t,i.accent,5,7,5,s*10,-1,e*.5+9),Qt(t,new Ye(2.2,10,8),i.hull).position.set(s*10,-1,e*.5+13);Qt(t,new Ye(5,14,12,0,Math.PI*2,0,Math.PI*.6),i.accent).position.set(0,8,e*.18);const n=Qt(t,new Ye(2.4,12,10),i.glow);n.scale.set(1.6,.8,.6),n.position.set(0,4.5,e*.55);for(const[s,r]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const o=Qt(t,new fe(2.6,3.4,5,12,1,!0),i.hullDark);o.rotation.x=me,o.position.set(s*6,r*5,-e*.5-2);const a=Qt(t,new mn(3,7,12),i.engine);a.rotation.x=me,a.position.set(s*6,r*5,-e*.5-6)}return t}const R0={name:"Mining Barge",build:A0},Er=[y0,S0,b0,T0,R0],Lo=950,C0=280,P0=700,hr=540,D0=52,L0=108,I0=760,U0=1180,N0=4.5,O0=3,F0=18,B0=.6,Nn=44,Io=24,ms=(i,t)=>i+Math.random()*(t-i),bn=ne.clamp,wl=i=>i*i*(3-2*i);function k0(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return new P(Math.cos(t)*e,i,Math.sin(t)*e)}const Tl=Er.map(i=>i.build),Al=["KLV","NRX","VSG","ORB","TYC","ZEN","AXM","HLO","DRV","PXR"];function Ur(){const i=Al[Math.floor(Math.random()*Al.length)],t=String(Math.floor(100+Math.random()*900));return`${i}-${t}`}function z0(i,t){i.updateMatrixWorld(!0);const e=new qn().setFromObject(i),n=e.getSize(new P),s=e.getCenter(new P),r=bn(n.length()*.018,.7,2.2),o=e.max.z-n.z*.18,a=[[16726832,s.x-n.x*.5,s.y,o,"nav"],[3800938,s.x+n.x*.5,s.y,o,"nav"],[16777215,s.x,e.max.y,e.min.z+n.z*.2,"strobe"],[16738890,s.x,s.y,e.min.z,"strobe"]];for(let c=0;c<a.length;c++){const[l,u,f,h,d]=a[c],g=new hi({color:l,transparent:!0,opacity:1,fog:!1});Qt(i,new Ye(r,8,8),g).position.set(u,f,h),t.push({mat:g,kind:d,speed:2.4+c*.7,phase:c*1.7})}}function H0(i,t,e,n={}){const s=n.count??6,r=t.center,o=[],a=(t.colliders||[]).map(X=>({c:X.center,r:X.radius})),c=(e==null?void 0:e.asteroids)||[],l=(e==null?void 0:e.cluster)||null,u=16,f=24,h=1.15,d=130,g=2.6,M=1.3,p=new P,m=new P,b=new P(0,1,0),v=new P(0,0,1),y=new P,I=new P,E=new P,w=new P,C=new P,W=new P,_=new P,x=new P,D=new P;function U(X){const ot=Math.random()*Math.PI*2,ht=(Math.random()*2-1)*B0,Y=Math.cos(ht);return X.set(Math.cos(ot)*Y,Math.sin(ht),Math.sin(ot)*Y).normalize()}function N(X,ot){return m.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),ot.crossVectors(X,m),ot.lengthSq()<1e-4&&ot.crossVectors(X,b),ot.normalize()}function F(X,ot,ht,Y,mt,dt,gt){y.copy(X).sub(ht);const wt=y.length(),z=ot+mt+u,T=wt-z;if(T>dt||wt<1e-4)return 0;const K=bn(1-T/dt,0,1),Z=K*K,B=y.dot(Y);I.copy(y).addScaledVector(Y,-B);const j=I.length();return B>0&&(j>.001?gt.addScaledVector(I,-(Z*g)/j):(E.crossVectors(Y,b),E.lengthSq()<1e-4&&E.crossVectors(Y,v),gt.addScaledVector(E.normalize(),Z*g))),gt.addScaledVector(y.multiplyScalar(-1/wt),Z*M),B>0&&j<z?K*bn(1-j/z,0,1):0}function L(X,ot,ht,Y,mt){y.copy(X).sub(ot);const dt=y.length(),gt=ht+Y;dt<gt&&dt>1e-4&&X.addScaledVector(y.multiplyScalar(1/dt),(gt-dt)*mt)}function Q(X,ot){const ht=X.group.position,Y=X.heading,mt=X.radius,dt=60+X.speed*1.2;let gt=0;for(const wt of a)gt=Math.max(gt,F(wt.c,wt.r,ht,Y,mt,dt,ot));if(l&&ht.distanceTo(l.center)<l.radius+dt+80)for(const wt of c)gt=Math.max(gt,F(wt.position,(wt.userData.viewRadius||10)*wt.scale.x,ht,Y,mt,dt,ot));for(const wt of o)wt===X||!wt.active||(gt=Math.max(gt,F(wt.group.position,wt.radius,ht,Y,mt,dt,ot)));return gt}function q(X){const ot=X.group.position,ht=X.radius;for(const Y of a)L(ot,Y.c,Y.r,ht,1);if(l&&ot.distanceTo(l.center)<l.radius+80)for(const Y of c)L(ot,Y.position,(Y.userData.viewRadius||10)*Y.scale.x,ht,1);for(const Y of o)Y===X||!Y.active||L(ot,Y.group.position,Y.radius,ht,.5)}function st(X,ot,ht){x.subVectors(ot,X);const Y=x.lengthSq(),mt=Y>1e-6?bn(D.subVectors(ht,X).dot(x)/Y,0,1):0;return D.copy(X).addScaledVector(x,mt),D.distanceToSquared(ht)}function ut(X,ot,ht){for(const Y of a){const mt=Y.r+ht+f;if(st(X,ot,Y.c)<mt*mt)return!1}if(l){const Y=l.radius+ht+f;if(st(X,ot,l.center)<Y*Y)return!1}return!0}function pt(X,ot){const ht=new Le;ht.visible=!1,i.add(ht);const Y=X(Ou());ht.add(Y);const mt=[];z0(Y,mt);const dt=new qn().setFromObject(Y),gt=dt.getSize(new P),wt=gt.z,z=Math.max(gt.x,gt.y),T=dt.getBoundingSphere(new xi).radius,K=wt*N0,Z=Math.max(1.5,z*.4),B=new Float32Array(Nn*3),j=new Float32Array(Nn*3),at=new Float32Array(Nn),ct=new Float32Array(Nn);for(let Dt=0;Dt<Nn;Dt++){const Kt=Dt/(Nn-1);at[Dt]=Math.random()*2-1,ct[Dt]=Math.random()*2-1;const k=1-Kt*.85;j[Dt*3]=.72*k,j[Dt*3+1]=.9*k,j[Dt*3+2]=k}const R=new ve;R.setAttribute("position",new Be(B,3)),R.setAttribute("color",new Be(j,3));const S=new ws({size:bn(z*.35,3,9),sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,fog:!1,blending:br,depthWrite:!1}),O=new Lr(R,S);O.visible=!1,O.frustumCulled=!1,ht.add(O);const $=[],rt=new Float32Array(Io*3);for(let Dt=0;Dt<Io;Dt++)$.push(k0());const et=new ve;et.setAttribute("position",new Be(rt,3));const vt=new ws({color:14546687,size:bn(z*.4,3,10),sizeAttenuation:!0,transparent:!0,opacity:0,fog:!1,blending:br,depthWrite:!1}),ft=new Lr(et,vt);ft.visible=!1,ft.frustumCulled=!1;const yt=Math.max(z,wt*.22);ht.add(ft);const kt=new P,nt=new P,Tt=new P,Nt=new P,Et={group:ht,active:!1,radius:T,heading:nt,speed:0,laneLen:0,warpOutStart:0,cruiseSpeed:0,peakSpeed:0,respawn:ms(0,7)+ot*.9,callsign:Ur()};function Rt(){for(let Dt=0;Dt<16;Dt++){U(kt),N(kt,m);const Kt=p.copy(r).addScaledVector(m,ms(C0,P0));if(Tt.copy(Kt).addScaledVector(kt,-Lo),Nt.copy(Kt).addScaledVector(kt,Lo),ut(Tt,Nt,T))break}Et.laneLen=Lo*2,Et.warpOutStart=Et.laneLen-hr*.4,Et.cruiseSpeed=ms(D0,L0),Et.peakSpeed=ms(I0,U0),Et.speed=Et.peakSpeed,Et.callsign=Ur(),nt.copy(kt),Et.active=!0,ht.position.copy(Tt),ht.up.copy(b),ht.lookAt(p.copy(Tt).add(nt)),ht.visible=!0}function qt(){Et.active=!1,ht.visible=!1,O.visible=!1,ft.visible=!1,Et.respawn=ms(O0,F0)}return Et.update=function(Dt,Kt){if(!Et.active){Et.respawn-=Dt,Et.respawn<=0&&Rt();return}const k=W.copy(ht.position).sub(Tt).dot(kt);let At,it=0,lt=0;if(k<hr){const Jt=bn(k/hr,0,1);At=ne.lerp(Et.peakSpeed,Et.cruiseSpeed,wl(Jt)),it=1-Jt,lt=Math.max(0,1-Jt/.22)}else if(k<Et.warpOutStart)At=Et.cruiseSpeed;else{const Jt=Et.laneLen+hr-Et.warpOutStart,Bt=(k-Et.warpOutStart)/Jt;if(At=ne.lerp(Et.cruiseSpeed,Et.peakSpeed,wl(Bt)),it=bn(Bt,0,1),lt=Math.max(0,(Bt-.78)/.22),Bt>=1){qt();return}}const Pt=it<.05;w.copy(Nt).sub(ht.position).normalize(),_.set(0,0,0);let Lt=0;Pt&&(Lt=Q(Et,_)),C.copy(w).add(_),C.lengthSq()<1e-6?C.copy(nt):C.normalize();const $t=nt.angleTo(C);if($t>1e-4&&nt.lerp(C,Math.min(1,h*Dt/$t)).normalize(),it>.02)Et.speed=At;else{const Jt=At*(1-.7*Lt);Et.speed+=bn(Jt-Et.speed,-d*Dt,d*Dt)}if(ht.position.addScaledVector(nt,Et.speed*Dt),q(Et),ht.lookAt(p.copy(ht.position).add(nt)),it>.02){const Jt=K*it;for(let Bt=0;Bt<Nn;Bt++){const he=Bt/(Nn-1),ie=Z*(.25+.9*he);B[Bt*3]=at[Bt]*ie,B[Bt*3+1]=ct[Bt]*ie,B[Bt*3+2]=-(he*Jt+wt*.3)}R.attributes.position.needsUpdate=!0,S.opacity=Math.min(1,it*1.25),O.visible=!0}else O.visible=!1;if(lt>.001){const Jt=yt*(.3+lt*2.5);for(let Bt=0;Bt<Io;Bt++){const he=$[Bt];rt[Bt*3]=he.x*Jt,rt[Bt*3+1]=he.y*Jt,rt[Bt*3+2]=he.z*Jt}et.attributes.position.needsUpdate=!0,vt.opacity=lt,ft.visible=!0}else ft.visible=!1;const ue=it>.05;for(const Jt of mt){if(ue){Jt.mat.opacity=1;continue}const Bt=Math.sin(Kt*Jt.speed+Jt.phase);Jt.mat.opacity=Jt.kind==="strobe"?Bt>.86?1:.06:.5+.5*Math.max(0,Bt)}},Et}for(let X=0;X<s;X++)o.push(pt(Tl[X%Tl.length],X));let Ft=0;function Gt(X){Ft+=X;for(const ot of o)ot.update(X,Ft)}return{update:Gt,ships:o}}const Uo=130,G0=.14,V0=ne.degToRad(6),W0=.28,X0=1,q0=16,Rl=.08,Y0=1.2;function K0(i,t,e,n={}){const s=new $_;s.far=Uo;const r=new _t(0,0),o=new P,a=new P,c=new P,l=new ze,u=new P,f=new P;let h=null,d=null;const g={phase:"idle",object:null,inRange:!1,firing:!1,distance:0,integrity:1,gauge:0,gaugeDriftDir:0,targetBlock:null};function M(){d&&!d.userData.broken&&(e.restoreIntegrity(d),d.userData.basePos&&d.position.copy(d.userData.basePos)),d=null,g.gauge=0}function p(){M(),h=null,g.phase="idle",g.object=null,g.inRange=!1,g.firing=!1,g.distance=0,g.integrity=1,g.gaugeDriftDir=0,g.targetBlock=null}function m(y){if(!y||!y.parent)return!1;t.getWorldPosition(o),a.subVectors(y.position,o);const I=a.length();if(I>Uo)return!1;a.divideScalar(I),t.getWorldQuaternion(l),c.set(0,0,-1).applyQuaternion(l);const E=Math.acos(ne.clamp(c.dot(a),-1,1)),w=Math.atan2((y.userData.viewRadius??4)*(y.scale.x||1),I);return E<=w+V0}function b(){s.setFromCamera(r,t),s.far=Uo;const y=e.targetables();if(!y.length)return null;const I=s.intersectObjects(y,!1);return I.length?I[0].object:null}function v(y,I){var D,U;i.updateMatrixWorld(!0);const E=!!(y&&y.mining),w=y&&y.aimX||0;let C=null;const W=h&&!h.userData.broken&&(h.userData.parentAsteroid?h.userData.state==="free":!0);E&&W&&m(h)?C=h:(C=b(),h=C);const _=!!(C&&C.userData.parentAsteroid),x=!!(C&&!C.userData.parentAsteroid);if(d&&C!==d&&M(),t.getWorldPosition(o),E&&x){d!==C&&(d=C,g.gauge=0,g.gaugeDriftDir=Math.random()<.5?-1:1,C.userData.basePos?C.userData.basePos.copy(C.position):C.userData.basePos=C.position.clone()),g.phase="cutting",g.object=C,g.inRange=!0,g.firing=!0,g.distance=o.distanceTo(C.position);const N=e.drainIntegrity(C,G0*I);g.integrity=N,g.gauge+=(g.gaugeDriftDir*W0+w*X0)*I,g.gauge=ne.clamp(g.gauge,-1,1);const F=Rl+Math.abs(g.gauge)*(Y0-Rl);if(f.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).multiplyScalar(F),C.position.copy(C.userData.basePos).add(f),Math.abs(g.gauge)>=1){(D=n.onBoom)==null||D.call(n,C.userData.basePos.clone()),e.failCut(C),d=null,h=null,p();return}N<=0&&(C.position.copy(C.userData.basePos),e.completeCut(C),(U=n.onCut)==null||U.call(n,C.position.clone()),d=null,h=null,g.phase="idle",g.firing=!1,g.object=null,g.gauge=0);return}if(E&&_){g.phase="salvage",g.object=C,g.targetBlock=C,g.inRange=!0,g.firing=!0,g.integrity=0,g.distance=o.distanceTo(C.position),u.subVectors(o,C.position),u.lengthSq()>1e-6&&(u.normalize(),C.userData.velocity.copy(u).multiplyScalar(q0));return}d&&M(),g.phase="idle",g.firing=!1,g.object=C||null,g.inRange=!!C,g.targetBlock=null,C?(g.distance=o.distanceTo(C.position),g.integrity=x?C.userData.integrity??1:0):(g.distance=0,g.integrity=1)}return{update:v,reset:p,state:g}}function Ue(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function No(i,t=12){const e=Math.max(0,Math.min(t,Math.round(i*t)));return"["+"#".repeat(e)+".".repeat(t-e)+"]"}function Oo(i){return(i<0?"-":"+")+String(Math.abs(Math.round(i))).padStart(5,"0")}function j0(i){const n=Math.max(0,Math.min(20,10+Math.round(i*10))),s=Math.abs(i),r=s<.4?"safe":s<.7?"warn":"danger",o=r==="safe"?"STABLE":r==="warn"?"WARN":"DANGER";let a='<span class="bar">';for(let c=0;c<21;c++)if(c===n)a+=`<span class="cursor ${r}">■</span>`;else if(c===10)a+='<span class="tick">|</span>';else{const l=Math.abs(c-10),u=l>6?"bg-danger":l>3?"bg-warn":"bg-safe";a+=`<span class="${u}">·</span>`}return a+="</span>",{html:a,label:o,zone:r}}function Z0(){const i=document.getElementById("hud"),t=Ue("div",null,"");t.id="reticle";for(const b of["up","down","left","right","dot"])t.appendChild(Ue("span",b,""));const e=Ue("pre","readout left",""),n=Ue("pre","readout low",""),s=Ue("div",null,"");s.id="dash";const r=Ue("div","rule",""),o=Ue("div","row",""),a=Ue("span",null,""),c=Ue("span",null,"");o.append(a,Ue("span","sep","|"),c),s.append(r,o);const l=Ue("pre",null,"");l.id="mining",l.style.display="none";const u=Ue("pre",null,"");u.id="stability",u.style.display="none";const f=Ue("pre",null,"");f.id="tractor",f.style.display="none";const h=Ue("div",null,"");h.id="dock-prompt",h.style.display="none";const d=Ue("div",null,"");d.id="sys-msg",d.style.display="none";let g=null;i.append(t,e,n,s,l,u,f,h,d);function M(){}function p(b,v=3800){d.textContent=b,d.style.display="",g&&clearTimeout(g),g=setTimeout(()=>{d.style.display="none",g=null},v)}function m(b,v){const y=b.throttle,I=b.warp,E=b.reverse??0,w=E>0?E:y,C=E>0?-Math.round(E*100):Math.round(y*100);e.textContent=`SPD  ${String(Math.round(b.speed)).padStart(4)} u/s
THR  ${No(w)} ${String(C).padStart(4)}%${E>0?" << REV":""}
WRP  ${No(I)} ${String(Math.round(I*100)).padStart(4)}%${I>0?"  >> WARP":""}`,n.textContent=`HDG  ${String(Math.round(b.headingDeg)).padStart(4)} deg
PIT  ${String(Math.round(b.pitchDeg)).padStart(4)} deg`,a.textContent=`POS  X ${Oo(b.pos.x)}  Y ${Oo(b.pos.y)}  Z ${Oo(b.pos.z)}`,c.textContent=`VEL ${String(Math.round(b.speed)).padStart(3)}`;const W=v?v.phase:"idle";if((W==="cutting"||W==="salvage")&&v&&v.object)if(l.style.display="",W==="cutting"){const x=v.integrity??1,D=Math.round(x*100);l.classList.add("firing"),l.innerHTML=`<span class="line">${v.firing?">> CUTTING <<":"-- CUT PAUSED --"}   DST ${String(Math.round(v.distance)).padStart(3)}u   INTEG ${No(x)} ${String(D).padStart(3)}%</span>`}else l.classList.add("firing"),l.innerHTML=`<span class="line">>> TRACTOR <<   DST ${String(Math.round(v.distance)).padStart(3)}u   HOLD R-CLICK TO REEL IN</span>`;else l.style.display="none";if(W==="cutting"){u.style.display="";const{html:x,label:D}=j0(v.gauge),U=v.gauge!=null&&Math.abs(v.gauge)<.4?"safe":v.gauge!=null&&Math.abs(v.gauge)<.7?"warn":"danger";u.innerHTML=`<span class="line">STAB ${x}  <span class="cursor ${U}">${D}</span></span>`}else u.style.display="none";f.style.display="none",b.docked?(h.style.display="",h.classList.add("docked"),h.classList.remove("docking"),h.textContent="[ DOCKED ]   PRESS  E  TO UNDOCK"):b.docking||b.undocking?(h.style.display="",h.classList.add("docking"),h.classList.remove("docked"),h.textContent=b.docking?">> DOCKING <<   AUTOPILOT":">> DEPARTING <<   AUTOPILOT"):b.canDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="PRESS  E  TO DOCK"):b.tooFastToDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="SLOW DOWN TO DOCK"):h.style.display="none"}return{update:m,resize:M,systemMessage:p}}function ni(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}const Cl=100;function $0(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Pl(i){return String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function J0(){const i=document.getElementById("hud"),t=ni("div",null,"");t.id="journal";const e=ni("div",null,"");e.id="journal-full";const n=ni("div","jrn-panel",""),s=ni("div","jrn-head",""),r=ni("span","jrn-title","SHIP LOG"),o=ni("div","jrn-close","");s.append(r,o);const a=ni("div","jrn-list","");n.append(s,a),e.append(n),e.style.display="none";for(const v of["pointerdown","pointermove","pointerup","wheel","contextmenu"])n.addEventListener(v,y=>y.stopPropagation());t.addEventListener("pointerdown",v=>{v.stopPropagation(),p(!0)}),o.addEventListener("pointerdown",v=>{v.stopPropagation(),p(!1)});for(const v of["pointermove","pointerup","wheel"])t.addEventListener(v,y=>y.stopPropagation());i.append(t,e);const c=[];let l=0,u=!1;function f(v,y){const I=v.kind==="radio"?"&gt;&gt;":"&middot;";let E=`<span class="jrn-time">T+${$0(v.t)}</span><span class="jrn-tag">${I}</span><span class="jrn-msg">${Pl(v.short)}</span>`;return y&&v.text&&v.text!==v.short&&(E+=`<div class="jrn-detail">${Pl(v.text)}</div>`),E}function h(){const v=c.slice(-10);t.innerHTML=v.map(y=>`<div class="jrn-entry jrn-${y.kind}">${f(y,!1)}</div>`).join("")}function d(v=!1){const y=v||a.scrollHeight-a.scrollTop-a.clientHeight<4;a.innerHTML=c.length?c.map(I=>`<div class="jrn-entry jrn-${I.kind}">${f(I,!0)}</div>`).join(""):'<div class="jrn-empty">— no entries —</div>',y&&(a.scrollTop=a.scrollHeight)}function g(v,y){const I=typeof v=="string"?{short:v,text:null,kind:y||"info",code:null}:{short:v.short,text:v.text||null,kind:v.kind||y||"info",code:v.code||null};I.t=l,c.push(I),c.length>Cl&&c.shift(),h(),u&&d()}function M(v,y=Cl){const I=Math.max(0,c.length-y);for(let E=I;E<c.length;E++)if(c[E].code===v)return!0;return!1}function p(v){u!==v&&(u=v,e.style.display=v?"":"none",v&&d(!0))}function m(){p(!u)}window.addEventListener("keydown",v=>{v.key&&v.key.toLowerCase()==="j"?(v.preventDefault(),m()):v.code==="Escape"&&u&&p(!1)});function b(v){l+=v}return h(),{log:g,toggle:m,update:b,hasRecent:M,isOpen:()=>u}}const qe=i=>i[Math.floor(Math.random()*i.length)],ii=(i,t)=>i+Math.floor(Math.random()*(t-i+1)),Dl=["ore","raw ore","refined ore","iron ore","nickel-iron","copper ore","titanium ore","platinum ore","gold ore","silver ore","uranium ore","thorium ore","cobalt","tungsten","palladium","iridium","osmium","rhodium","bauxite","silicate sand","water ice","water","deuterium","helium-3","tritium","liquid hydrogen","liquid oxygen","liquid nitrogen","methane ice","ammonia","argon","xenon","neon","frozen volatiles","fuel cells","reactor cores","antimatter pods","fusion pellets","plasma capacitors","power cells","isotope batteries","solar film","scrap metal","alloy plating","hull plating","structural beams","sheet metal","composite panels","ceramic tiles","heat tiles","superalloy ingots","foamed aluminum","carbon fiber spools","machine parts","spare thrusters","drive couplings","pump assemblies","servo motors","heat exchangers","circuit boards","sensor modules","comm relays","nav beacons","survey drones","mining charges","cutting lasers","grapple arms","docking collars","airlock seals","pressure valves","superconductors","data cores","memory lattices","quantum chips","optical fiber","holo emitters","AI substrates","encrypted drives","navigation charts","foodstuffs","nutrient paste","grain","seed stock","hydroponics","fresh produce","algae blocks","protein vats","synth-meat","coffee beans","spices","dried rations","livestock embryos","frozen embryos","plant cuttings","fungal cultures","bee colonies","medical supplies","vaccines","antibiotics","blood plasma","organ cultures","gene therapies","surgical kits","stim packs","cryo-meds","passengers","colonists","tourists","contract laborers","refugees","a survey team","a relief crew","luxury goods","textiles","rare earths","gemstones","art (sealed crates)","antiques","vintage liquor","perfume base","silk","jewelry","coolant","lubricants","solvents","industrial acids","sealant foam","polymers","resins","ceramics","glass billets","fertilizer","rated explosives","propellant","oxygen candles","CO2 scrubbers","air filters","water reclaimers","ration bars","terraforming gear","atmosphere processors","soil bacteria","construction mechs","habitat modules","prefab shelters","solar arrays","wind turbines","salvage","derelict parts","scrapped drones","recovered black boxes","sealed crates","classified cargo","diplomatic pouches","unmarked containers","live specimens","seized contraband","quarantined goods"],Fo=["Tycho Relay","Kepler Station","Drift-Nine","the inner yards","the outer marker","Halcyon Dock","Meridian Platform","the refinery","Cold Harbor","Gantry Seven","Lagrange Hub","New Sutter","the foundry","Ostrava Ring","the deep field","Cradle Station","Pellucid Yards","the scrap line","Vesper Outpost","the jump gate","Beacon Echo","Far Dock","Ironside","the lower bays","the belt","Quayside","Helios Station","Perdition Reach","Anvil Yards","the Saltworks","Caldera Dock","Stillwater Ring","the Verge","Mariner Hub","Talon Outpost","the Bastion","Ember Platform","Hollow Point","the Spindle","Gossamer Dock","Karst Station","the Reliquary","Bishop Relay","the Maw","Tannhauser Gate","Solace Ring","the Drydocks","Caravan Point","Wreck Alley","the Sprawl","Lantern Station","Obsidian Yards","the Threshold","Pilgrim Dock","Harrow Ring","the Junkfields","Aurora Platform","Daedalus Hub","the Causeway","Greywater Station","Tarsus Relay","the Picket Line","Sable Dock","Verdant Ring","the Smelters","Highgate","Nyx Outpost","the Long Dark","Castellan Station","the Anchorage","Ridgeline Yards","Pell Station","the Freeport","Goliath Dock","the Reaches","Kessler Ring","the Boneyard","Mistral Platform","New Antioch","the Tessellate","Wayfarer Hub","the Cinder Belt","Ourania Station","the Trench","Provender Dock","Ashfall Ring","the Watchpost","Garrison Nine","the Sieve","Helion Yards","the Far Reaches","Selene Dock","the Quarantine Ring","Mercer Station","the Driftway","Cobalt Harbor","the Verdigris","Tycho Lower","Kepler High","the Gantries","Redoubt Station","the Marshalling Yards","Concord Dock","the Bight","Halberd Ring","the Spillway","Junctor Hub","the Outworks","Sentinel Platform","the Hollows","Calder Station","the Stacks","Wend Outpost","the Reef","Pannier Dock","the Lattice","Voss Relay","the Deadlanes","Hesperus Ring","the Coalsack","Branner Yards","the Estuary","Foundry Six","the Approaches","Marrow Dock","the Causey","Tindall Station"],Ll=["main drive","coolant loop","reactor","RCS thrusters","nav computer","life support","shield emitter","sensor array","comm array","gyros","fuel pump","heat sinks","port nacelle","starboard nacelle","inertial dampers","jump drive","docking clamps","gravity plating","primary capacitor","secondary capacitor","plasma injector","fuel mixer","reaction wheel","attitude jets","thermal regulator","radiator fins","oxygen recycler","CO2 scrubber","water reclaimer","power bus","backup battery","main bus","transformer coil","field generator","deflector dish","particle sink","warp coil","warp manifold","flux capacitor","magnetic bottle","containment field","antimatter trap","ion thruster","main injector","turbopump","heat pipe","cryo pump","condenser","sensor mast","lidar array","radar dish","optical scope","spectrometer","transponder","beacon transmitter","autopilot","flight computer","star tracker","horizon sensor","docking laser","grapple winch","cargo crane","airlock","pressure hull","blast door","escape pod bay","medbay","galley","crew quarters","observation deck","landing gear","undercarriage","keel","spine truss","solar wing","battery array","heat shield","ablative plating","point defense","tractor emitter","stabilizer fin","trim tab","ballast tank","distress beacon","gimbal mount","fuel scrubber","plasma vent","arc suppressor"],Q0=["bearing two-seven-zero","bearing one-eight-zero","bearing zero-niner-zero","bearing three-three-zero","high to port","low to starboard","dead ahead","off the stern","up-spin","down-spin","coreward","rimward","bearing nil","bearing zero-four-five","bearing one-three-five","bearing two-two-five","bearing three-one-five","bearing zero-one-zero","bearing zero-six-zero","bearing one-two-zero","bearing one-five-zero","bearing two-one-zero","bearing two-four-zero","bearing three-zero-zero","bearing zero-three-zero","high to starboard","low to port","off the bow","off the port quarter","off the starboard quarter","directly above","directly below","astern","to port","to starboard","high overhead","below the keel","two points off the bow","three points to port","off the nose","trailing aft","crossing left to right","crossing right to left","closing fast","holding station","drifting astern","spinward","antispinward","sunward","shadowside","toward the cluster","toward the station","out past the marker","near the jump gate","along the belt plane","above the ecliptic","below the ecliptic","inbound","outbound","on an intercept line","low and closing","high and slow","fading on the scope"];function tv(i,t){const e={cs:()=>t,cs2:Ur,cs3:Ur,cargo:()=>qe(Dl),cargo2:()=>qe(Dl),dest:()=>qe(Fo),dest2:()=>qe(Fo),origin:()=>qe(Fo),system:()=>qe(Ll),system2:()=>qe(Ll),bearing:()=>qe(Q0),lane:()=>ii(1,9),corridor:()=>ii(1,6),bay:()=>ii(1,24),min:()=>ii(2,45),queue:()=>ii(2,9),count:()=>ii(2,9),hops:()=>ii(2,6)};return i.replace(/\{(\w+)\}/g,(n,s)=>e[s]?String(e[s]()):n)}const ev=["Long haul. Could use a real cup of coffee out here.","{cs2}, you copy? Been dead quiet on this band.","Third run this cycle. Eyes are starting to cross.","Anybody got the scores from the inner yards?","Tell {cs2} they still owe me a drink at {dest}.","Beautiful view of the cluster from up here, I'll give it that.","Halfway through the shift and nothing but static.","{cs2}, nice burn on that exit. Showing off again?","Remind me why I took the night rotation.","Somebody left the galley a mess. Again.","Same rock, same run, same paycheck.","You hear they're rerouting traffic past {dest}?","Sensors are picking up a whole lot of nothing.","Forty cycles to retirement. Not that I'm counting.","{cs2}, save me a docking slot, would you?","My nav says {dest}. My gut says lunch.","Quiet out here tonight. I like it that way.","Whoever calibrated these gyros owes me an apology.","Counting asteroids to pass the time. Lost track at four hundred.","New kid keeps calling it 'up'. There's no up out here.","Coffee machine's down. This is a genuine emergency.","Long way from home, this run.","{cs2}, that you on my scope or just more debris?","Another day, another belt. Same as the last.","Tell control the corridor markers are drifting again.","If I see one more cargo manifest I'm spacing myself.","Music's the only thing keeping me awake out here.","Pretty sure my co-pilot's asleep. Lucky him.","{cs2}, you still on for cards when we dock at {dest}?","Sun's coming up over the cluster. Worth the trip alone.","Stars look different from out past the marker. Colder, somehow.","Forgot my lucky wrench at {dest}. Whole run feels off now.","Three weeks on this tub and the recycler still smells like feet.","Anyone else's nav humming a B-flat, or is it just mine?","I swear this corridor's longer than it was yesterday.","Caught a meteor shower {bearing}. Free fireworks.","Tell the kids I'll be home by the next resupply. Probably.","Forty thousand klicks of nothing and a great playlist.","{cs2}, your strobes are out. Just so you know.","Logged my ten-thousandth hour today. Nobody clapped.","Coffee, course, cargo. The three Cs. In that order.","Drifting through the quiet part of the run. Love it.","Somebody's playing opera on the open channel again.","My back's been telling me to retire for six years now.","Cluster's pretty this time of cycle. Don't tell anyone I said so.","{cs2}, did you ever get that rattle in your nacelle fixed?","Hauling for {dest} again. Place never changes.","Out here long enough, you start naming the asteroids.","This far out, even the static sounds friendly.","Saw a long-hauler that must've been two klicks bow to stern.","Co-pilot bet me we'd beat schedule. Co-pilot's broke now.","Nothing on the scope but us and the dark. Suits me.","Tell {cs2} the customs line at {dest} is a nightmare today.","Eighteen hours in and the only excitement was a sneeze.","Whoever designed these seats never sat in one.","Burned past {dest} once without stopping. Best day of my career.","If the reactor hums any louder I'll have to charge it rent.","Spotted an old wreck {bearing}. Gave it a respectful nod.","Same three songs for two thousand klicks. Send help.","{cs2}, you awake over there? Your transponder's the only thing talking.","Cargo's quiet, drive's smooth, life is good. For now.","Going to miss this view when they automate us all.","Heard {dest} finally fixed their gravity ring. Believe it when I dock.","My nav computer and I are no longer on speaking terms.","Out here you learn to like your own company.","Passed a tourist liner. They waved. I waved back.","Twelve more runs and I'm buying a little ice moon somewhere quiet.","Somebody on this band's chewing way too close to their mic.","Clearest sky I've seen all cycle. Not a speck of dust.","{cs2}, race you to the marker. Loser buys at {dest}.","Reactor's purring like it actually likes me today.","Been talking to my plants again. They're better listeners than control.","Cargo bay's colder than my ex. And just as empty.","Logged a perfect burn. Nobody saw it. Story of my life.","Out past the belt the silence has a sound to it.","Tell {dest} to keep the lights on, I'm running late.","Spent the last hour watching dust glitter in the running lights.","If I had a credit for every klick, I'd still be out here.","Half the fun of this job is the half there isn't any.","{cs2}, your wake's all over my approach. Tidy up.","Recycler's making that noise again. The ominous one.","Going to name this stretch of nothing after myself.","Slow run today. I've reorganized the toolkit twice.","You can almost hear the cluster turning out here.","Picked the scenic route. Regret nothing.","Captain's asleep, so technically I'm in charge. Don't tell.","Another sunrise over {dest}. They never get old.","Twenty years out here and the dark still gets me sometimes.","Just me, the hum, and a thermos of something resembling coffee.","{cs2}, that was a clean dock. Buying you a round at {dest}.","Lost a glove to the airlock. Floating out there forever now.","If this run gets any quieter I'll start talking to the cargo.","Best part of the job? Nobody up here to tell me I'm wrong.","Worst part? Nobody up here at all, some nights.","Trimmed a full minute off my usual. Small victories.","Cluster's throwing shadows like a clock today.","Tell the relief crew the heater in bunk two is a liar.","Drive's smooth, scope's clear, and the coffee's almost warm. Perfect.","{cs2}, you ever just cut the lights and drift a while?","Heard a long-hauler sing to themselves on the dead channel. Beautiful, actually.","Six souls aboard, five asleep, one talking to strangers on the radio.","Spotted the station lights from way out. Feels like coming home.","Marking another quiet shift in the log. The good kind.","Dust on the canopy again. Out here it's basically weather.","If you're listening, {cs2}, you snore on an open channel."],nv=["Control, requesting departure clearance, lane {lane}.","Ops, requesting vector to {dest}.","Holding short of the corridor, awaiting clearance.","Requesting priority docking, running behind schedule.","{cs2}, hold your position, I've got crossing traffic.","{cs2}, you are drifting into my lane, come starboard.","Control, confirm I am cleared through corridor {corridor}.","Stacking up out here, request a hold vector.","Traffic, wide load on approach, give me room.","Requesting handoff to station approach.","{cs2}, after you on the corridor, I'll follow you in.","Control, my transponder's glitching, advise.","Lane {lane} is backed up, requesting reroute.","On final, gear warm, clamps ready.","Breaking off approach, going around.","Squawking ident, confirm you have me.","Control, requesting a slot at {dest}, ETA {min} minutes.","Request permission to cross corridor {corridor} outbound.","Ops, am I cleared to spin down in the dock perimeter?","Requesting a tug, my clamps are sluggish.","Control, traffic {bearing}, request advisory.","{cs2}, reduce your closure, you're inside my bubble.","Requesting fuel reservation at the ring, low on reserves.","Control, declaring minimum fuel, request direct routing.","Holding at the marker, request sequencing number.","Ops, my nav's reading two corridors, which is live?","Request a wider berth on approach, hauling overlength.","Control, lost the localizer, request vectors to {dest}.","{cs2}, confirm you see me, closing {bearing}.","Requesting clearance to test thrusters in the safe lane.","Ops, requesting hold until that debris {bearing} clears.","Control, request expedited departure, time-critical cargo.","Requesting handoff, leaving your airspace {bearing}.","{cs2}, slow your roll, the clamps aren't going anywhere.","Control, I'm number how-many for the dock?","Request altitude... well, you know what I mean. Going up-spin.","Ops, confirm corridor {corridor} markers are lit, I've got nothing.","Requesting clearance to jettison empty pods in the safe zone.","Control, my squawk's intermittent, paint me on radar?","Requesting straight-in approach, no time for the pattern.","{cs2}, you're cleared ahead of me, I'll hold.","Ops, request a hold, sorting a cargo shift before approach.","Control, declaring a soft alert, requesting a clear lane.","Requesting clearance to {dest}, manifest filed.","{cs2}, give way, I'm constrained by my draft on this vector.","Control, confirm the queue, I've been holding {min} minutes.","Requesting a quieter band, this one's jammed with chatter.","Ops, am I cleared to drop the grapple and take that salvage?","Control, request a flash of the approach lights, I'm half blind out here.","Requesting permission to shadow {cs2} through the corridor."],iv=["Hauling {cargo} to {dest}, ETA {min} mikes.","Outbound from {origin} with a hold full of {cargo}.","Light load this run, just {cargo} for {dest}.","Manifest says {cargo}. Smells more like {cargo2}.","Passing the outer marker, {cargo} aboard, all green.","Heavy with {cargo}, watch my wake on the corridor.","{cargo} delivery for {dest}, who is signing for it?","Running {cargo} to the deep field, back in {min}.","Cargo is shifting in the hold, slowing to secure it.","Empty run home, dropped the {cargo} at {dest}.","Carrying {cargo}, handle with care on the clamps.","Inbound, {cargo} for the refinery, ETA {min} minutes.","Picked up {cargo} from {origin}, bound for {dest}.","Overweight on {cargo} again, the yard will love that.","This {cargo} run doesn't pay enough, I'll tell you that.","Sealed manifest. Don't ask, I'm not telling.","Time-sensitive {cargo}, requesting the fast lane.","Two pallets of {cargo} short. Someone's getting a call.","{cargo} secured, all green, proceeding to {dest}.","Hot cargo, {cargo}, keep your distance on approach.","Full hold of {cargo}, riding low and slow to {dest}.","Manifest got swapped, I'm carrying {cargo}, not {cargo2}. Again.","Dropping {cargo} at {dest}, then deadheading to {dest2}.","Fragile load, {cargo}, no fast burns this trip.","{cargo} for the colony at {dest}. They've been waiting weeks.","Customs flagged my {cargo}. This is going to take a while.","Hauling {cargo} one way, {cargo2} back. Never an empty leg.","{cargo} aboard, transponder logged, clean run so far.","Diverting to {dest2}, the {cargo} buyer changed their mind.","Refrigerated load of {cargo}, can't afford a power blip.","Bulk {cargo}, low margin, high mileage. The usual.","Carrying {cargo} for {dest}. Don't love what's in the back, honestly.","Manifest reads {cargo}. Weight says otherwise. Not my problem.","Loaded {cargo} at {origin}, scales were generous. Lucky me.","Priority {cargo}, jumping the queue if they'll let me.","{cargo} run to {dest}, then I'm off rotation for a cycle.","Hold's pressurized, {cargo} stable, all readings nominal.","Picked up extra {cargo} at {origin}. Tight squeeze in the bay.","Spilled a crate of {cargo} in the hold. Cleaning that up for hours.","Live cargo this run, easy on the gees for the {cargo}.","{cargo} for {dest}, insured to the rivets. Wonder why.","Three pallets of {cargo}, one's leaking. Wonderful.","Hauling {cargo}, but the real money's the {cargo2} underneath.","Clean manifest, {cargo} to {dest}, nothing to declare.","{cargo} bound for {dest}. Slower than I'd like with this load.","Topped off with {cargo} at {origin}, hold's at capacity.","Carrying {cargo}. If it ticks, that's normal. Probably.","Diverted my {cargo} run through {dest2}, adds an hour.","Hold full of {cargo}, and the buyer's already haggling over the channel.","{cargo} delivered, signed off, deadheading home empty and happy."],sv=["Reporting a {system} fault, dropping to half burn.","{system} is acting up, nursing it to {dest}.","Reactor running hot, requesting priority docking.","Lost the {system}, switching to backups.","{system} pressure in the yellow, keeping an eye on it.","Got a flutter in the {system}, anyone heard that before?","Venting heat, give me a wide berth.","{system} recalibrating, my heading may wander, sorry.","Down a thruster, handling is sloppy, watch out.","{system} failure, soft alert, no assist needed yet.","Coolant is low, throttling back before something melts.","My {system} is held together with tape and prayers.","Patched the {system} mid-burn. Don't recommend it.","Sensor ghosting again, my scope is half junk.","Gyros tumbling, stand by while I sort this out.","Fuel tighter than I'd like, going easy on the burn.","{system} threw a fault code I've never seen. Love that.","Lost pressure in the {system}, isolating it now.","My {system}'s been groaning since {origin}. Today might be the day.","Cycling the {system}, expect my lights to flicker.","{system} overheating, popping the radiators, mind the glare.","Backup {system} engaged, primary's cooked.","Took a micrometeorite to the {system}. Could be worse.","{system}'s drawing too much power, shedding nonessentials.","Rerouting around a dead {system}, performance is going to suffer.","My {system} and my {system2} are both complaining. Great.","Hairline crack in the {system}, watching it like a hawk.","{system} keeps tripping the breakers. Third time this hour.","Drive's surging, suspect the {system}, throttling back.","{system} maintenance overdue by a thousand hours. Don't judge me.","Limping in on a bad {system}, request a gentle approach.","{system} froze up, literally, condensation got in.","Smelled something burning near the {system}. That's never good.","Lost telemetry on the {system}, flying it by feel.","{system} recalibrated, back to full performance, sorry for the chatter.","Vibration in the {system} I can feel in my teeth.","{system} alarm went off, turned out to be a loose sensor. Heart attack averted.","Manually overriding the {system}, autopilot's confused.","My {system}'s running on a part I printed myself. Wish me luck.","{system} degraded, declaring reduced maneuverability.","Reactor scram on the {system} fault, restarting now, stand clear.","{system}'s fine, it's the warning light that's broken. I think.","Bled the {system}, should ride smoother now.","Lost half my {system} output, still flyable, just slow.","{system}'s been stable for an hour. Watch me jinx it.","Coolant leak near the {system}, sealing the bulkhead.","{system} acting possessed, power-cycling the whole rack.","Replaced the {system} at {origin} and it's already whining.","Running the {system} cold to save it. Long, careful burn.","{system} back online. Crisis averted. Mostly."],rv=["All traffic, debris {bearing}, advise you divert.","Heads up, rock drift {bearing}, and it's moving.","Micrometeorite stream {bearing}, shields up.","Solar activity climbing, recommend topping your shielding.","Watch the slag cloud off the refinery, scopes don't love it.","Radiation spike {bearing}, button up your hulls.","Debris from an old wreck {bearing}, give it room.","Dust is thick {bearing}, visuals are useless out there.","Caution, tumbling container adrift {bearing}.","Gravimetric shear near the cluster, mind your trim.","Flare warning from the deep field, batten down.","Something big and unlit {bearing}, all traffic stay sharp.","Ice fragments {bearing} peppered my hull, watch yourselves.","Charged dust {bearing}, comms crackling, expect noise.","Frozen propellant cloud {bearing}, kills your sensors, route around.","Magnetic anomaly {bearing}, my compass is spinning, heads up.","Unlogged ship {bearing}, no transponder, keep your distance.","Sensor blind spot {bearing} where the dust's thickest.","Hot debris field {bearing}, still glowing, do not transit.","Slow tumbler {bearing}, looks like a shed cargo pod.","Watch for backscatter {bearing}, the cluster's lighting up the dust.","Loose mining charge adrift {bearing}. Do not, repeat, do not nudge it.","Heavy traffic stacking {bearing}, expect erratic vectors.","Wreckage spreading {bearing}, somebody lost a load.","Static storm rolling in {bearing}, comms about to get rough.","Plasma wash from a warp exit {bearing}, give it a minute to clear.","Drifting fuel bladder {bearing}, ruptured, slick on the sensors.","Caution, derelict tumbling {bearing}, no lights, no squawk.","Particle density rising {bearing}, throttle back through it.","Sharp debris {bearing}, took a scratch myself, slow down.","Solar wind gusting {bearing}, trim for it or you'll yaw.","Unsecured cargo crane swinging on a derelict {bearing}.","Cold cloud {bearing} eating my thermal sensors, fly visual.","Rock the size of a tug {bearing}, slow roll, plenty of warning.","Comms shadow {bearing} behind the big asteroid, you'll drop out.","Glittering debris {bearing}, pretty, but it'll pit your canopy.","Venting wreck {bearing}, pushing itself around unpredictably.","Dense pack of pebbles {bearing}, too small to dodge, just slow down.","Heat bloom {bearing}, possible reactor breach on a derelict, avoid.","Whole corridor's hazy {bearing}, somebody kicked up the dust."],ov=["Mayday, mayday, {system} failure, requesting immediate assist.","Pan-pan, pan-pan, lost main drive, drifting {bearing}.","Declaring an emergency, fire in the {system} bay.","Hull breach, sealing compartments, requesting rescue.","Losing life support, anyone in range, please respond.","Mayday, collision with debris, venting atmosphere.","Engines dead, drifting toward the cluster, need a tow now.","Mayday, {system} explosion, casualties aboard, need medical.","Pan-pan, reactor scrammed, on batteries, time critical.","Lost all thrust, tumbling {bearing}, can't stabilize.","Cabin pressure dropping, on suits, requesting urgent docking.","Mayday, struck an unlit object {bearing}, hull compromised.","Power's failing across the board, sending position now.","Pan-pan, {system} and {system2} both down, limited control.","Fire suppression failed, evacuating to the {system} bay.","Mayday, fuel breach, isolating, request foam on the pad.","Drifting powerless {bearing}, any vessel, please acknowledge.","Declaring emergency, navigation lost, flying blind.","Hull integrity at minimum, requesting nearest dock, any port.","Pan-pan, jammed clamps mid-undock, hanging off the ring.","Mayday, runaway burn, can't cut the {system}, clear my vector.","Coolant gone, reactor climbing, abandoning if it doesn't hold.","Lost the {system}, can't slow for approach, request a clear lane.","Crew member down, requesting a medical bay on arrival.","Mayday, micrometeorite swarm, multiple breaches, mapping damage.","Stuck in a flat spin {bearing}, RCS unresponsive, need talk-down.","Pan-pan, lost cabin heat, temperature dropping fast.","Emergency, cargo of {cargo} unstable, considering jettison.","Mayday, structural failure at the {system}, hull flexing.","Adrift and dark {bearing}, conserving power, monitoring this channel."],av=["Anyone else getting that signal {bearing}? ...Probably nothing.","Picking up a transponder that's been dead for twenty years.","Ghost contact {bearing}, gone before I could lock it.","Old beacon out here still transmitting. Nobody knows why.","Cold spot {bearing} my sensors won't explain.","Heard a voice on the dead channel again. I keep that to myself.","Same derelict drifts past every cycle. Never the same heading twice.","Something past the deep field is answering my pings.","Got a navigation chart with a station marked that doesn't exist.","The cluster shadow moved wrong just now. Trick of the light. Has to be.","Picked up a distress call dated next week. Filed it. Said nothing.","There's a hull out here older than the colony. Nobody salvages it.","My star tracker locked onto a star that isn't on any map.","Heard the long-haulers won't transit {bearing} after dark. Now I get it.","Found a logbook floating {bearing}. Last entry's just one word, repeated.","Signal's counting down in a language the computer won't translate.","Same coordinates keep showing up in my nav cache. I never entered them.","There's a derelict that hails YOU first. Don't answer it.","Old timers call this stretch the Quiet. Now nobody's talking.","My reflection in the canopy waved a half-second late just now.","Beacon Echo's been answering pings it shouldn't be able to hear.","The dust out here remembers shapes. Saw a face in it for a second.","Caught a broadcast of my own callsign. I never sent it.","There's a wreck {bearing} with its lights still on. No power source.","Compass points to nothing in particular and holds there. Always the same nothing.","Heard singing on the carrier wave. Crew says it's interference. Crew's wrong.","An empty escape pod's been shadowing me for three runs. Door's open.","The jump gate hummed when nothing went through it.","Found a manifest for a ship that was never built. Cargo: us.","Out past the marker, the stars blink in order. Like a code. Like a count.","My grandfather flew this route. Says the Quiet's been getting closer.","Picked up a lullaby on a frequency that doesn't carry sound.","There's a station on the old charts called Home. No coordinates. Just Home.","Saw my own running lights {bearing}, ahead of me, on my exact heading.","The derelict's name plate keeps changing. Photographed it twice. Two names.","Something out here keeps the marker buoys warm. They should be ice cold.","Got a reply to a message I haven't decided to send yet.","The cluster's count of asteroids went up by one. There's no new one. I checked.","They decommissioned Beacon Echo a decade ago. It just wished me safe travels.","Every cycle, {bearing}, for one second, the radio plays the sound of a door closing."],cv=["All inbound traffic, hold for sequencing.","Docking queue is {queue} deep, expect delays.","Bay {bay} is now open for approach.","Bay {bay} closed for maintenance, reroute.","Refueling operations nominal at the ring.","Customs inspection in progress, bay {bay}.","Corridor {corridor} is now the active approach lane.","All vessels, reduce speed within the dock perimeter.","Quarantine protocol active on bay {bay}.","Tug services delayed, manual docking advised.","Cargo backlog at the yards, deliveries holding.","Approach lights lit, corridor {corridor} cleared for sequencing.","Shift rotation underway, expect brief comm gaps.","Power conservation in effect, non-essential systems offline.","Free berth open at bay {bay}, first come first served.","Outbound traffic, hold at the marker until corridor {corridor} clears.","Bay {bay} reserved for priority cargo, all others stand by.","Ring rotation adjusting, expect minor gravity fluctuations.","Fuel reserves low, rationing burns to essential traffic.","All traffic, transponders mandatory inside the perimeter.","Sequencing inbound flights, average wait {min} minutes.","Bay {bay} cleared, next in queue you are go for approach.","Maintenance crew on the hull, all docking holds at corridor {corridor}.","Customs sweep complete, normal operations resuming.","Dock master reports {queue} vessels in the pattern.","All vessels maintain station-keeping, traffic is heavy.","Lighting reduced on the upper ring, conserve and dock by instruments.","New arrivals, squawk ident and hold for a slot.","Bay {bay} flooding for pressure test, keep clear.","Corridor {corridor} markers recalibrating, fly the beacons not the chart.","Tug {cs2} dispatched to assist inbound traffic.","All clamps cycling for inspection, brief docking pause.","Cargo handlers on shift change, loading resumes shortly.","Priority lane open corridor {corridor} for medical traffic only.","Ring power on backup, expect flicker, docking unaffected.","Inbound flights, slow to perimeter speed or be held.","Bay {bay} occupant overstaying, dispatching a notice.","Approach radar degraded, pilots maintain visual separation.","All traffic, hold the chatter, emergency channel must stay clear.","Docking fees updated, see the bulletin before departure.","Sequencing reset, all inbound re-squawk for new numbers.","Bay {bay} now serving overlength vessels, others use {corridor}.","Gravity ring at reduced spin for repairs, watch your footing on arrival.","Outbound corridor {corridor} clear, departures are go.","Resupply barge docking, all traffic give the freight lane a wide margin.","Pressure doors on bay {bay} sticking, crews advised, allow extra time.","All vessels, the perimeter speed limit is enforced today, no exceptions.","Holding pattern is full, new arrivals divert and re-approach in {min}.","Night cycle lighting active, approach lights at full for your benefit.","Dock control rotating to the relief team, expect a brief handover."],lv=["Traffic advisory: debris {bearing}, divert as needed.","Solar weather advisory in effect, shields up on approach.","Beacon alignment in progress, navigation may degrade.","Unscheduled vessel logged {bearing}, monitoring.","Long-range scan complete, sector nominal.","Emergency channel test, disregard.","Gravimetric anomaly logged near the cluster, advise caution.","Lost contact with an outbound hauler {bearing}, investigating.","Radiation advisory: levels elevated {bearing}, limit exposure.","All traffic, a flare is forecast within the hour, plan accordingly.","Advisory: dust density rising {bearing}, expect reduced sensor range.","Unidentified contact {bearing}, vessels report any visual.","Navigation advisory: corridor {corridor} markers offline, fly with care.","Weather: charged particle storm {bearing}, comms may degrade.","Advisory, derelict adrift {bearing}, salvage crews notified, keep clear.","Search and rescue active {bearing}, all traffic yield to SAR vessels.","Advisory: micrometeorite activity up {bearing}, shields recommended.","Sector patrol passing through {bearing}, expect scanning sweeps.","Advisory, a vessel is declaring emergency {bearing}, clear the lanes.","Notice: jump gate cycling {bearing}, expect transient interference.","Advisory: temperature anomaly {bearing}, sensors may misread.","All traffic, comms relay {bearing} is down, expect dead zones.","Advisory: cargo spill reported {bearing}, navigate around the field.","Notice: a long-hauler reports a ghost contact {bearing}. Logged for review.","Advisory, the belt plane is congested today, transit with caution.","Weather update: solar activity easing, advisory lifted shortly.","Advisory: unregistered beacon transmitting {bearing}, do not rely on it.","All vessels, a quarantine vessel is inbound, expect a holding pattern.","Advisory: sensor mirage reported {bearing}, confirm contacts visually.","Notice: routine patrol requests all transponders remain active.","Advisory, debris reentry into the cluster {bearing}, expect bright flashes.","Long-range advisory: traffic surge expected from {dest}, plan holds.","Advisory: a tug has gone silent {bearing}, last seen towing salvage.","Notice: navigation database update available, sync before departure.","Advisory, gravitational lensing {bearing} may distort star fixes.","All traffic, an old distress beacon is looping {bearing}. Source confirmed derelict.","Advisory: thermal bloom {bearing}, possible reactor venting, stay clear.","Notice: the outer marker buoy is drifting, recalibrating its position.","Advisory, pirate activity rumored {bearing}, keep transponders honest.","Final advisory of the cycle: sector quiet, safe travels, all vessels."],uv=["Shuttle, you are coming in too fast. Reduce speed in the station zone.","Inbound shuttle, slow down. You're over the perimeter speed limit.","Ease off the throttle, shuttle, you're approaching far too quickly.","Shuttle, check your speed. This is a controlled zone, not a racetrack.","Reduce velocity immediately, you're entering the dock perimeter too hot.","Slow it down, shuttle. We'd like the station to stay in one piece.","Shuttle, your closure rate is excessive. Bleed off some speed.","Throttle back, shuttle. You're well above safe approach speed.","Control to shuttle, you are too fast for this proximity. Decelerate now.","Shuttle, kill your speed before you reach the ring. Last warning.","Cut your velocity, shuttle, you're a hazard at that pace.","Shuttle, the perimeter has a speed limit and you're shredding it. Slow down."],hv=["Shuttle, you just struck the station. What in the void are you doing?","That was a collision, shuttle. Watch where you're flying!","You hit us, shuttle. Pull back before you do more damage.","Control to shuttle, you've made contact with the structure. Knock it off.","Are you trying to dock or demolish us? Back off, shuttle.","Shuttle, that's a hull strike on the station. Get clear, now.","You scraped the ring, shuttle. There's paperwork for this, you know.","Collision alert, the shuttle made contact. Steady your approach!","Shuttle, hands off the station! Maintain your distance.","That impact is going on your record, shuttle. Fly straight.","You clipped us, shuttle. The dock crew is not amused.","Shuttle, cease ramming the station. This is not a drill."];function dv(){return qe(uv)}function fv(){return qe(hv)}const pv=[{hud:"WARP INHIBITED — OBSTACLE AHEAD",voice:"Warp inhibited. Obstacle ahead."},{hud:"WARP LOCKED — OBSTACLE IN PATH",voice:"Cannot engage warp. Object in our path."},{hud:"WARP BLOCKED — CLEAR THE HEADING",voice:"Warp blocked. Clear the heading first."}],mv=[{hud:"DROPPING OUT OF WARP — PROXIMITY",voice:"Proximity alert. Dropping out of warp."},{hud:"WARP ABORTED — OBSTACLE NEAR",voice:"Obstacle nearby. Aborting warp."},{hud:"WARP DISENGAGED — OBJECT CLOSE",voice:"Disengaging warp. Object too close."}];function gv(){return qe(pv)}function _v(){return qe(mv)}const vv=[{w:30,t:ev},{w:16,t:nv},{w:18,t:iv},{w:12,t:sv},{w:10,t:rv},{w:3,t:ov},{w:4,t:av}],xv=[{w:60,t:cv},{w:40,t:lv}];function yv(i){let t=0;for(const n of i)t+=n.w;let e=Math.random()*t;for(const n of i)if((e-=n.w)<=0)return n;return i[i.length-1]}function Mv(i){const t=i.station?xv:vv,e=qe(yv(t).t);return`${i.callsign}: ${tv(e,i.callsign)}`}const Il={type:"change"},oc={type:"start"},Fu={type:"end"},dr=new Ls,Ul=new On,Sv=Math.cos(70*ne.DEG2RAD),xe=new P,ke=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bo=1e-6;class Bu extends Q_{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ze,this._lastTargetPosition=new P,this._quat=new ze().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _l,this._sphericalDelta=new _l,this._scale=1,this._panOffset=new P,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new P,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bv.bind(this),this._onPointerDown=Ev.bind(this),this._onPointerUp=wv.bind(this),this._onContextMenu=Lv.bind(this),this._onMouseWheel=Rv.bind(this),this._onKeyDown=Cv.bind(this),this._onTouchStart=Pv.bind(this),this._onTouchMove=Dv.bind(this),this._onMouseDown=Tv.bind(this),this._onMouseMove=Av.bind(this),this._interceptControlDown=Iv.bind(this),this._interceptControlUp=Uv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Il),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ke:n>Math.PI&&(n-=ke),s<-Math.PI?s+=ke:s>Math.PI&&(s-=ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<Sv?this.object.lookAt(this.target):(Ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(Ul,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bo||this._lastTargetPosition.distanceToSquared(this.target)>Bo?(this.dispatchEvent(Il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ev(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function wv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fu),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(oc)}function Av(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Rv(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fu))}function Cv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Pv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(oc)}function Dv(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function Lv(i){this.enabled!==!1&&i.preventDefault()}function Iv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nv=8191130,Ov=10479871,Nl=3108420,Ol=16757322,Fv=16739029,fr=188,si=1e7;function Bv(i,t,e,n,s=()=>!1,r=()=>{}){const o=document.getElementById("hud"),a=Math.min(window.devicePixelRatio||1,2),c=i.cluster,l=i.asteroids,u=document.createElement("div");u.id="minimap";const f=document.createElement("div");f.className="mini-label",f.textContent="NAV";const h=document.createElement("div");h.id="mini-close",h.textContent="×",u.append(f,h),o.append(u);const d=new $a({antialias:!0,alpha:!0});d.setPixelRatio(a);const g=d.domElement;u.appendChild(g);const M=new Qa,p=new Fe(45,1,1,2e5),m=ne.degToRad(p.fov),b=c.radius*80,v=80,y=b/2,I=new Le;function E(B,j){const at=new J_(b,v,Nl,Nl);at.material.transparent=!0,at.material.opacity=.05,B==="x"?(at.rotation.z=Math.PI/2,at.position.x=j*y):B==="z"?(at.rotation.x=Math.PI/2,at.position.z=j*y):at.position.y=j*y,I.add(at)}for(const B of["x","y","z"])E(B,-1),E(B,1);M.add(I);const w=new Float32Array(l.length*3),C=new ve;C.setAttribute("position",new Be(w,3));const W=new ws({color:Nv,size:Math.max(8,c.radius*.06),sizeAttenuation:!0,transparent:!0,opacity:.95}),_=new Lr(C,W);_.frustumCulled=!1,M.add(_);const x=new Le,D=Math.max(16,c.radius*.09),U=new Re(new mn(D*.42,D,12),new hi({color:Ov}));U.rotation.x=-Math.PI/2,x.add(U),M.add(x);let N=null;if(e){N=new Le;const B=e.radius*.55,j=new Re(new cn(B,B*.1,8,24),new hi({color:Ol})),at=new Re(new Ye(B*.28,12,12),new hi({color:Ol}));N.add(j,at),N.position.copy(e.center),N.frustumCulled=!1,M.add(N)}let F=null,L=null;if(n&&n.ships.length){L=new Float32Array(n.ships.length*3).fill(si);const B=new ve;B.setAttribute("position",new Be(L,3));const j=new ws({color:Fv,size:Math.max(10,c.radius*.07),sizeAttenuation:!0,transparent:!0,opacity:.95});F=new Lr(B,j),F.frustumCulled=!1,M.add(F)}const Q=new Bu(p,g);Q.enableDamping=!0,Q.dampingFactor=.08,Q.enablePan=!1,Q.rotateSpeed=.9,Q.zoomSpeed=.9,Q.enabled=!1;const q=new P(0,1,0);function st(B){p.up.copy(B),Q._quat.setFromUnitVectors(B,q),Q._quatInverse.copy(Q._quat).invert()}let ut=!1,pt=fr,Ft=fr;const Gt=new P,X=new P,ot=new P,ht=new ze,Y=new P;function mt(B){return Y.copy(B).sub(t.position).applyQuaternion(ht),Math.abs(Y.x)<=y&&Math.abs(Y.y)<=y&&Math.abs(Y.z)<=y}function dt(){ut?(pt=window.innerWidth,Ft=window.innerHeight):(pt=fr,Ft=fr),d.setSize(pt,Ft,!1),g.style.width=pt+"px",g.style.height=Ft+"px",p.aspect=pt/Ft,p.updateProjectionMatrix(),d.setClearColor(132620,ut?1:.5)}dt();function gt(){let B=t.position.distanceTo(c.center)*.6+c.radius;return e&&(B=Math.max(B,t.position.distanceTo(e.center)*.6+e.radius)),B/Math.sin(m*.5)}function wt(){const B=p.position.distanceTo(t.position);x.scale.setScalar(ne.clamp(B*.003,.5,5))}function z(){Gt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),X.set(0,1,0).applyQuaternion(t.quaternion),p.up.copy(X),p.position.copy(t.position).addScaledVector(Gt,gt()),p.lookAt(t.position)}function T(B){ut=B,u.classList.toggle("expanded",B),r(B),dt(),B?(Q.target.copy(t.position),Gt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),ot.set(0,1,0).applyQuaternion(t.quaternion),st(ot),p.position.copy(t.position).addScaledVector(Gt,gt()),Q.enabled=!0,Q.update()):Q.enabled=!1}u.addEventListener("pointerdown",B=>{B.stopPropagation(),!s()&&(ut||T(!0))}),h.addEventListener("pointerdown",B=>{B.stopPropagation(),!s()&&T(!1)}),window.addEventListener("keydown",B=>{if(B.code==="Escape"&&ut){T(!1);return}if(B.key&&B.key.toLowerCase()==="m"){if(s())return;T(!ut)}});function K(){ht.copy(t.quaternion).invert();for(let B=0;B<l.length;B++){const j=l[B].position;mt(j)?(w[B*3]=j.x,w[B*3+1]=j.y,w[B*3+2]=j.z):(w[B*3]=si,w[B*3+1]=si,w[B*3+2]=si)}if(C.attributes.position.needsUpdate=!0,F){const B=n.ships;for(let j=0;j<B.length;j++)if(B[j].active&&mt(B[j].group.position)){const at=B[j].group.position;L[j*3]=at.x,L[j*3+1]=at.y,L[j*3+2]=at.z}else L[j*3]=si,L[j*3+1]=si,L[j*3+2]=si;F.geometry.attributes.position.needsUpdate=!0}N&&(N.visible=mt(e.center)),x.position.copy(t.position),x.quaternion.copy(t.quaternion),I.position.copy(t.position),I.quaternion.copy(t.quaternion),ut?(f.textContent="NAVIGATION — DRAG rotate · WHEEL zoom",p.up.copy(ot),Q.target.copy(t.position),Q.update()):(f.textContent="NAV",z()),wt(),d.render(M,p)}function Z(){dt()}return{update:K,resize:Z}}function kv(){const i=document.createElement("div");i.id="cursor",i.innerHTML='<svg width="27" height="27" viewBox="0 0 30 30" aria-hidden="true"><path d="M2 2 L3 25 Q 8 18 19 18 Z" fill="rgba(124,252,154,0.22)" stroke="#7cfc9a" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',document.body.appendChild(i);function t(n){i.style.transform=`translate(${n.clientX-1.8}px, ${n.clientY-1.8}px)`,i.style.opacity="1"}window.addEventListener("pointermove",t,{passive:!0,capture:!0});function e(){i.style.opacity="0"}return document.addEventListener("mouseleave",e),window.addEventListener("blur",e),{}}function zv(){const i=document.createElement("div");return i.id="crt",i.setAttribute("aria-hidden","true"),document.body.appendChild(i),document.body.classList.add("crt"),{}}const Hv=[["L-CLICK + MOVE","steer"],["W / S","thrust (0-200%)"],["A / D","roll"],["X","cut engines"],["R-CLICK / SPACE","mine / tractor (hold)"],["MOUSE-X (cutting)","stability gauge"],["E","dock / undock"],["M","nav map"],["J","ship log"]],Fl=[{h:"PHASE 1 · CUT",lines:["Aim at an asteroid and HOLD right-click to cut.","Keep the stability gauge centered (see below).","Hit an edge -> BOOM. Let go -> progress resets.","Cut fully -> it bursts into ore fragments."]},{h:"PHASE 2 · TRACTOR",lines:["Aim at a glowing ore fragment, HOLD right-click.","It is reeled in and collected automatically.","Fly freely — leave fragments and they stay put."]}];function Bl(i){const t=document.createElement("div");t.className="mg-section";const e=document.createElement("div");e.className="mg-h",e.textContent=i.h,t.append(e);for(const n of i.lines){const s=document.createElement("div");s.className="mg-line",s.textContent=n,t.append(s)}return t}function Gv(){const i=document.createElement("div");i.className="mg-demo";const t=document.createElement("div");t.className="mg-gauge";const e=document.createElement("div");e.className="mg-cursor",t.append(e);const n=document.createElement("div");n.className="mg-mouse";const s=document.createElement("div");return s.className="mg-demo-cap",s.textContent="move the MOUSE sideways to keep the gauge centered",i.append(t,n,s),i}function Vv({onComplete:i}={}){const t=document.createElement("div");t.className="mining-guide";const e=document.createElement("div");e.className="mg-body";const n=document.createElement("div");n.className="mg-page",n.append(Bl(Fl[0]),Gv());const s=document.createElement("div");s.className="mg-page",s.append(Bl(Fl[1])),e.append(n,s);const r=document.createElement("button");r.className="menu-btn mg-back",r.type="button",r.textContent="‹  PHASE 1";const o=document.createElement("button");o.className="menu-btn mg-next",o.type="button";let a=0;function c(){n.hidden=a!==0,s.hidden=a!==1,r.hidden=a!==1,o.textContent=a===0?"PHASE 2  ›":"GOT IT"}o.addEventListener("click",()=>{a===0?(a=1,c()):i==null||i()}),r.addEventListener("click",()=>{a=0,c()});function l(){a=0,c()}return l(),t.append(e,r,o),{el:t,reset:l}}function Wv(i,{onPlay:t,onToggleMute:e,isMuted:n,onOpenMining:s}={}){const r=I=>{const E=document.createElement("button");return E.className="menu-btn",E.type="button",E.textContent=I,E};i.innerHTML="";const o=document.createElement("div");o.className="menu-panel";const a=document.createElement("h1");a.className="menu-title",a.textContent="Spascii";const c=document.createElement("div");c.className="menu-nav";const l=r("Play"),u=r("Commands"),f=r("Help"),h=r(n&&n()?"Unmute":"Mute");c.append(l,u,f,h);const d=document.createElement("div");d.className="menu-nav",d.hidden=!0;const g=r("< Back");d.append(g);const M=document.createElement("div");M.className="menu-commands";for(const[I,E]of Hv){const w=document.createElement("div");w.className="menu-cmd-row";const C=document.createElement("span");C.className="menu-cmd-key",C.textContent=I;const W=document.createElement("span");W.className="menu-cmd-desc",W.textContent=E,w.append(C,W),M.append(w)}d.append(M);const p=document.createElement("div");p.className="menu-nav",p.hidden=!0;const m=r("< Back"),b=r("Mining");p.append(m,b),o.append(a,c,d,p),i.append(o);const v={main:c,commands:d,help:p},y=I=>{for(const E in v)v[E].hidden=E!==I};return l.addEventListener("click",()=>{t==null||t()}),u.addEventListener("click",()=>y("commands")),g.addEventListener("click",()=>y("main")),f.addEventListener("click",()=>y("help")),m.addEventListener("click",()=>y("main")),b.addEventListener("click",()=>s==null?void 0:s()),h.addEventListener("click",()=>{const I=e?e():!1;h.textContent=I?"Unmute":"Mute",h.classList.toggle("active",I)}),{reset:()=>y("main")}}const Ba="spascii.miningIntroSeen";function Xv(){try{localStorage.removeItem(Ba)}catch{}}function qv({onOpen:i,onClose:t,onFirstDismiss:e}={}){let n=null,s=null,r=!1,o=!1;function a(){n=document.createElement("div"),n.className="intro-overlay";const h=document.createElement("div");h.className="intro-panel";const d=document.createElement("h2");d.className="intro-title",d.textContent="MINING — 2 PHASES",s=Vv({onComplete:f}),h.append(d,s.el),n.append(h),document.body.append(n)}function c(){n||a(),s.reset(),n.style.display="flex",r=!0,i==null||i()}function l(){if(!r){try{if(localStorage.getItem(Ba))return}catch{}o=!1,c()}}function u(){r||(o=!0,c())}function f(){if(r){if(r=!1,n&&(n.style.display="none"),!o){try{localStorage.setItem(Ba,"1")}catch{}e==null||e()}t==null||t()}}return{maybeShow:l,show:u,close:f,isOpen:()=>r}}function Yv({onOpen:i,onClose:t}={}){const e=document.body,n=document.createElement("div");n.id="shipdbg",n.innerHTML=`
    <div class="dbg-topbar">
      <div class="dbg-tabs">
        <div class="dbg-tab active" data-tab="ships">SHIPS</div>
        <div class="dbg-tab" data-tab="debug">DEBUG</div>
      </div>
      <div class="dbg-close" title="close"></div>
    </div>
    <div class="dbg-main">
      <div class="dbg-list"></div>
      <div class="dbg-view"><div class="dbg-vlabel"></div></div>
    </div>
    <div class="dbg-debug" hidden>
      <div class="dbg-section">
        <div class="dbg-row">
          <span class="dbg-rlabel">Mining tutorial</span>
          <button class="dbg-btn" type="button" data-act="reset-mining">Reset</button>
        </div>
        <div class="dbg-hint">Re-affiche l'encart explicatif des 2 phases au prochain 1er minage (pas besoin de recharger).</div>
      </div>
    </div>`,e.appendChild(n);const s=n.querySelector(".dbg-list"),r=n.querySelector(".dbg-view"),o=n.querySelector(".dbg-vlabel"),a=n.querySelector(".dbg-close"),c=n.querySelector(".dbg-main"),l=n.querySelector(".dbg-debug"),u=n.querySelectorAll(".dbg-tab");function f(st){u.forEach(ut=>ut.classList.toggle("active",ut.dataset.tab===st)),c.hidden=st!=="ships",l.hidden=st!=="debug"}u.forEach(st=>st.addEventListener("click",()=>f(st.dataset.tab)));const h=n.querySelector('[data-act="reset-mining"]');h.addEventListener("click",()=>{Xv(),h.textContent="Done ✓",h.classList.add("active"),setTimeout(()=>{h.textContent="Reset",h.classList.remove("active")},1400)});const d=Er.map((st,ut)=>{const pt=document.createElement("div");return pt.className="dbg-item",pt.textContent=st.name,pt.addEventListener("click",()=>D(ut)),s.appendChild(pt),pt}),g=new $a({antialias:!0}),M=Uu(g,{charset:" .:-=+*#%@",fontSize:11,color:"#7cfc9a"});r.appendChild(M.domElement);const p=new Qa;p.background=new Wt(0),p.add(new Iu(16777215,.5)),p.add(new Du(11191551,2107440,.5));const m=new Ir(16777215,1.1);m.position.set(1,1.2,1.4),p.add(m);const b=new Ir(8956671,.4);b.position.set(-1,-.4,-.8),p.add(b);const v=new Fe(45,1,.1,5e3);v.position.set(60,35,90);const y=new Bu(v,M.domElement);y.enableDamping=!0,y.dampingFactor=.08,y.enablePan=!1,y.autoRotate=!0,y.autoRotateSpeed=1.1,y.addEventListener("start",()=>{y.autoRotate=!1}),y.addEventListener("end",()=>{y.autoRotate=!0});const I=new P(.7,.45,1).normalize();let E=null,w=!1,C=0;function W(st){st.traverse(ut=>{ut.geometry&&ut.geometry.dispose(),ut.material&&(Array.isArray(ut.material)?ut.material:[ut.material]).forEach(pt=>pt.dispose())})}function _(st){const pt=new qn().setFromObject(st).getBoundingSphere(new xi),Ft=Math.max(1,pt.radius);y.target.copy(pt.center);const Gt=Ft/Math.sin(ne.degToRad(v.fov*.5))*1.35;v.position.copy(pt.center).addScaledVector(I,Gt),v.near=Math.max(.05,Ft*.02),v.far=Ft*60,v.updateProjectionMatrix(),y.minDistance=Ft*.5,y.maxDistance=Ft*14,y.update()}let x=-1;function D(st){E&&(p.remove(E),W(E),E=null),x=st,E=Er[st].build(Ou()),p.add(E),_(E),d.forEach((ut,pt)=>ut.classList.toggle("active",pt===st)),o.textContent=`${Er[st].name}  —  DRAG rotate · WHEEL zoom`}function U(){const st=r.getBoundingClientRect(),ut=Math.max(1,Math.floor(st.width)),pt=Math.max(1,Math.floor(st.height));M.setSize(ut,pt),v.aspect=ut/pt,v.updateProjectionMatrix()}function N(){w&&(C=requestAnimationFrame(N),y.update(),M.render(p,v))}function F(){w||(w=!0,i==null||i(),n.classList.add("open"),U(),x<0&&D(0),cancelAnimationFrame(C),C=requestAnimationFrame(N))}function L(){w&&(w=!1,n.classList.remove("open"),cancelAnimationFrame(C),t==null||t())}function Q(){w?L():F()}const q=st=>st.stopPropagation();for(const st of["pointerdown","pointermove","pointerup","wheel"])n.addEventListener(st,q);return n.addEventListener("contextmenu",st=>{st.preventDefault(),st.stopPropagation()}),a.addEventListener("click",L),window.addEventListener("keydown",st=>{if(st.key===","||st.code==="Comma"){st.preventDefault(),st.stopPropagation(),Q();return}if(w){if(st.code==="Escape"){st.preventDefault(),st.stopPropagation(),L();return}st.stopPropagation()}},!0),window.addEventListener("resize",()=>{w&&U()}),{open:F,close:L,toggle:Q,get isOpen(){return w}}}const ko=80,Kv=800,kl=.6;function jv(i={}){const t=i.engineUrl??null,e=i.warpUrl??null,n=i.miningUrl??null,s=i.impactUrl??null,r=i.explosionUrl??null,o=i.splitUrl??null,a=window.AudioContext||window.webkitAudioContext;let c=null,l=null,u=0,f=null,h=1,d=!1,g=null,M=0,p=0,m=null,b=0,v=0,y=null,I=0,E=0;function w(){const z=c.createBuffer(1,c.sampleRate*2,c.sampleRate),T=z.getChannelData(0);for(let K=0;K<T.length;K++)T[K]=Math.random()*2-1;return z}function C(z){return new Promise((T,K)=>{const Z=c.decodeAudioData(z,T,K);Z&&typeof Z.then=="function"&&Z.then(T,K)})}function W(z){const T=z.length,K=[];for(let ct=0;ct<z.numberOfChannels;ct++)K.push(z.getChannelData(ct));const Z=.004,B=ct=>{let R=0;for(const S of K){const O=Math.abs(S[ct]);O>R&&(R=O)}return R};let j=0;for(;j<T&&B(j)<Z;)j++;let at=T-1;for(;at>j&&B(at)<Z;)at--;return at<=j?{start:0,end:z.duration}:{start:j/z.sampleRate,end:(at+1)/z.sampleRate}}function _(z,T,K){const Z=c.createGain();Z.gain.value=T,Z.connect(K);const B={gain:Z,src:null,rate:1};return fetch(z).then(j=>j.arrayBuffer()).then(C).then(j=>{const at=c.createBufferSource();at.buffer=j,at.loop=!0;const ct=W(j);at.loopStart=ct.start,at.loopEnd=ct.end,at.playbackRate.value=B.rate,at.connect(Z),at.start(0,ct.start),B.src=at}).catch(()=>{}),B}function x(){c=new a;const z=w(),T=c.createGain();T.gain.value=d?0:kl;const K=c.createDynamicsCompressor();K.threshold.value=-18,K.knee.value=24,K.ratio.value=3,K.attack.value=.01,K.release.value=.25,T.connect(K).connect(c.destination);const Z=t?_(t,0,T):null,B=e?_(e,0,T):null,j=n?_(n,0,T):null;s&&fetch(s).then(O=>O.arrayBuffer()).then(C).then(O=>{const $=W(O);g=O,M=$.start,p=Math.max(0,$.end-$.start)}).catch(()=>{}),r&&fetch(r).then(O=>O.arrayBuffer()).then(C).then(O=>{const $=W(O);m=O,b=$.start,v=Math.max(0,$.end-$.start)}).catch(()=>{}),o&&fetch(o).then(O=>O.arrayBuffer()).then(C).then(O=>{const $=W(O);y=O,I=$.start,E=Math.max(0,$.end-$.start)}).catch(()=>{});const at=c.createBufferSource();at.buffer=z,at.loop=!0;const ct=c.createBiquadFilter();ct.type="bandpass",ct.frequency.value=1600,ct.Q.value=.9;const R=c.createGain();R.gain.value=0;const S=c.createStereoPanner();S.pan.value=0,at.connect(ct).connect(R).connect(S).connect(T),at.start(),l={master:T,engine:Z,warp:B,mining:j,rcsGain:R,rcsBP:ct,rcsPan:S}}function D(){c||x(),c.state==="suspended"&&c.resume()}window.addEventListener("pointerdown",D),window.addEventListener("keydown",D);const U=.1,N=.04,F=.07,L=.025,Q=.6,q=.06,st=.55;function ut(z,T,K){if(!l)return;const Z=c.currentTime,B=z.active?1:0,j=K||.016,at=Math.abs(z.speed),ct=Math.min(at/ko,1),R=ne.clamp((at-ko)/(Kv-ko),0,1);if(l.engine){l.engine.gain.gain.setTargetAtTime(B*.67*ct*h,Z,U);const vt=.95+.1*ct+.1*R;l.engine.rate=vt,l.engine.src&&l.engine.src.playbackRate.setTargetAtTime(vt,Z,U)}if(l.warp){l.warp.gain.gain.setTargetAtTime(B*.9*R*h,Z,U);const vt=1+.15*R;l.warp.rate=vt,l.warp.src&&l.warp.src.playbackRate.setTargetAtTime(vt,Z,U)}if(l.mining){const vt=B&&T&&T.firing?1:0;l.mining.gain.gain.setTargetAtTime(vt*.8*h,Z,.04)}const S=z.turn.yaw,O=z.turn.pitch,$=z.turn.roll,rt=Math.hypot(S,O,$);if(!z.active)u=0,f=null;else{if(rt<q)f=null;else{const vt=S/rt,ft=O/rt,yt=$/rt;f&&vt*f.y+ft*f.p+yt*f.r>=st||(u=1,f={y:vt,p:ft,r:yt})}u*=Math.exp(-j/Q)}l.rcsGain.gain.setTargetAtTime(B*L*u,Z,F);const et=ne.clamp(S-.6*$,-1,1);l.rcsPan.pan.setTargetAtTime(et,Z,N)}function pt(){return c}function Ft(){return l?l.master:null}function Gt(z=.3){h=ne.clamp(z,0,1)}function X(){h=1}function ot(z){d=!!z,c&&l&&l.master&&l.master.gain.setTargetAtTime(d?0:kl,c.currentTime,.02)}function ht(){return ot(!d),d}function Y(){return d}function mt(z=1){if(!c||!l||!g)return;const T=ne.clamp(z,0,1.3),K=c.createGain();K.gain.value=T;const Z=c.createBufferSource();Z.buffer=g,Z.playbackRate.value=1.08-.18*Math.min(T,1),Z.connect(K).connect(l.master),Z.start(0,M,p||void 0),Z.onended=()=>{try{Z.disconnect(),K.disconnect()}catch{}}}function dt(){if(!c||!l||!y)return;const z=c.createGain();z.gain.value=.45*h;const T=c.createBufferSource();T.buffer=y,T.connect(z).connect(l.master),T.start(0,I,E||void 0),T.onended=()=>{try{T.disconnect(),z.disconnect()}catch{}}}function gt(){if(!c||!l)return;const z=c.currentTime,T=c.createOscillator();T.type="sawtooth",T.frequency.setValueAtTime(800,z),T.frequency.exponentialRampToValueAtTime(180,z+.2);const K=c.createGain();K.gain.setValueAtTime(0,z),K.gain.linearRampToValueAtTime(.14*h,z+.01),K.gain.exponentialRampToValueAtTime(.001,z+.25),T.connect(K).connect(l.master),T.start(z),T.stop(z+.3),T.onended=()=>{try{T.disconnect(),K.disconnect()}catch{}}}function wt(){if(!c||!l)return;if(m){const j=c.createGain();j.gain.value=.9*h;const at=c.createBufferSource();at.buffer=m,at.connect(j).connect(l.master),at.start(0,b,v||void 0),at.onended=()=>{try{at.disconnect(),j.disconnect()}catch{}};return}const z=c.currentTime,T=c.createOscillator();T.type="sine",T.frequency.setValueAtTime(60,z),T.frequency.exponentialRampToValueAtTime(25,z+.5);const K=c.createGain();K.gain.setValueAtTime(0,z),K.gain.linearRampToValueAtTime(.16*h,z+.02),K.gain.exponentialRampToValueAtTime(.001,z+.55),T.connect(K).connect(l.master),T.start(z),T.stop(z+.6),T.onended=()=>{try{T.disconnect(),K.disconnect()}catch{}};const Z=c.createOscillator();Z.type="square",Z.frequency.setValueAtTime(4e3,z),Z.frequency.exponentialRampToValueAtTime(150,z+.08);const B=c.createGain();B.gain.setValueAtTime(0,z),B.gain.linearRampToValueAtTime(.08*h,z+.005),B.gain.exponentialRampToValueAtTime(.001,z+.12),Z.connect(B).connect(l.master),Z.start(z),Z.stop(z+.15),Z.onended=()=>{try{Z.disconnect(),B.disconnect()}catch{}}}return{update:ut,resume:D,getContext:pt,getMaster:Ft,duck:Gt,unduck:X,playImpact:mt,playCrunch:gt,playBoom:wt,playSplit:dt,toggleMute:ht,isMuted:Y}}const zo="/",Zv=24e3,$v={configUrl:`${zo}tts/config.json`,modelUrl:`${zo}tts/kitten_tts_nano_v0_8.onnx`,voicesUrl:`${zo}tts/nano_voices.npz`},Jv="Bruno",Qv="Jasper",tx="en-us",ex=1,nx=1,ix=1.6,zl=.3,Hl=220,sx=300,rx=3200,pr=i=>new Promise(t=>setTimeout(t,i));function ox(i){const e=new Float32Array(256);for(let n=0;n<256;n++){const s=n/255*2-1;e[n]=Math.tanh(s*i)}return e}function ax(i){let t=null,e=1;const n=new Map;function s(){t||(t=new Worker(new URL("/assets/tts.worker-CulL91bv.js",import.meta.url),{type:"module"}),t.onmessage=_=>{const x=_.data,D=n.get(x.id);D&&(n.delete(x.id),x.type==="error"?D.reject(new Error(x.error)):D.resolve(x))},t.onerror=_=>{console.warn("[radio] erreur du worker TTS :",_.message||_);for(const x of n.values())x.reject(new Error("worker TTS en erreur"));n.clear()})}function r(_,x){s();const D=e++;return new Promise((U,N)=>{n.set(D,{resolve:U,reject:N}),t.postMessage({type:_,id:D,urls:$v,...x})})}let o=null,a=null,c=null,l=!1,u=null,f=!1,h=Promise.resolve();function d(){return o||(o=r("load",{}).catch(_=>{throw o=null,console.warn("[radio] echec du chargement du modele TTS :",_),_})),o}function g(){if(l)return!0;i.resume();const _=i.getContext(),x=i.getMaster();if(!_||!x)return!1;a=_;const D=_.createBiquadFilter();D.type="highpass",D.frequency.value=sx,D.Q.value=.7;const U=_.createBiquadFilter();U.type="lowpass",U.frequency.value=rx,U.Q.value=.7;const N=_.createWaveShaper();N.curve=ox(2.2),N.oversample="2x";const F=_.createGain();return F.gain.value=ix,c=_.createGain(),c.gain.value=1,c.connect(D),D.connect(U),U.connect(N),N.connect(F),F.connect(x),l=!0,!0}function M(){if(f)return!0;i.resume();const _=i.getContext(),x=i.getMaster();if(!_||!x)return!1;a=_,u=_.createGain(),u.gain.value=1;const D=_.createBiquadFilter();D.type="highpass",D.frequency.value=180,D.Q.value=.7;const U=_.createBiquadFilter();U.type="lowpass",U.frequency.value=5200,U.Q.value=.7;const N=_.createGain();return N.gain.value=nx,u.connect(D),D.connect(U),U.connect(N),N.connect(x),f=!0,!0}function p(_){for(let x=0;x<2;x++){const D=a.createOscillator();D.type="square",D.frequency.value=x?990:740;const U=a.createGain(),N=_+x*.13;U.gain.setValueAtTime(0,N),U.gain.linearRampToValueAtTime(.13,N+.01),U.gain.setValueAtTime(.13,N+.08),U.gain.linearRampToValueAtTime(0,N+.1),D.connect(U).connect(u),D.start(N),D.stop(N+.12)}}function m(_,x,D){const U=Math.floor(a.sampleRate*x),N=a.createBuffer(1,U,a.sampleRate),F=N.getChannelData(0);for(let q=0;q<U;q++)F[q]=Math.random()*2-1;const L=a.createBufferSource();L.buffer=N;const Q=a.createGain();Q.gain.setValueAtTime(0,_),Q.gain.linearRampToValueAtTime(D,_+.008),Q.gain.linearRampToValueAtTime(0,_+x),L.connect(Q).connect(c),L.start(_),L.stop(_+x+.02)}function b(_,x,D,U){const N=a.createOscillator();N.type="sine",N.frequency.value=x;const F=a.createGain();F.gain.setValueAtTime(0,_),F.gain.linearRampToValueAtTime(U,_+.012),F.gain.setValueAtTime(U,_+D-.02),F.gain.linearRampToValueAtTime(0,_+D),N.connect(F).connect(c),N.start(_),N.stop(_+D+.02)}function v(_,x=Jv){return r("synth",{text:_,opts:{voice:x,speed:ex,language:tx}}).then(D=>D.audio).catch(D=>(console.warn("[radio] echec de synthese pour :",_,D),null))}function y(_,x=c){return!_||!_.length||!a||!x?Promise.resolve():new Promise(D=>{const U=a.createBuffer(1,_.length,Zv);U.getChannelData(0).set(_);const N=a.createBufferSource();N.buffer=U,N.connect(x),N.onended=()=>{N.disconnect(),D()},N.start()})}async function I(_,x={}){if(!_.length||!g())return;i.duck(zl),m(a.currentTime,.09,.1);let D=Promise.resolve();for(let U=0;U<_.length;U++){const N=await v(_[U]),F=U===0;D=D.then(async()=>{if(await pr(F?130:Hl),F&&x.onPlay)try{x.onPlay()}catch{}await y(N)})}await D,b(a.currentTime+.05,1200,.09,.12),await pr(220),i.unduck()}async function E(_,x={}){if(!_.length||!M())return;i.duck(zl),p(a.currentTime+.02);let D=Promise.resolve();for(let U=0;U<_.length;U++){const N=await v(_[U],Qv),F=U===0;D=D.then(async()=>{if(await pr(F?320:Hl),F&&x.onPlay)try{x.onPlay()}catch{}await y(N,u)})}await D,await pr(150),i.unduck()}function w(_,x={}){const D=(_||[]).filter(Boolean),U=h.then(()=>d()).then(()=>I(D,x)).catch(N=>{console.warn("[radio] message ignore :",N)});return h=U.catch(()=>{}),U}function C(_,x){return w([_],x)}function W(_,x={}){const D=h.then(()=>d()).then(()=>E([_],x)).catch(U=>{console.warn("[radio] message systeme ignore :",U)});return h=D.catch(()=>{}),D}return{preload:d,speak:C,speakSequence:w,speakSystem:W}}const ku=document.getElementById("app"),zu=document.getElementById("menu"),Ae={clearance:"Station control to shuttle. You are cleared for docking, approach corridor three.",autopilot:"Autopilot engaged. Hands off the controls.",docked:"Docking complete. You are secured to the station. Welcome aboard.",undock:"Undocking sequence in progress.",resume:"You have control. Safe flight, shuttle."},tn=new Qa;tn.background=new Wt(0);tn.fog=new Ja(0,7e-4);const fn=new Fe(72,window.innerWidth/window.innerHeight,.1,6e3),gn=new Le;gn.add(fn);tn.add(gn);tn.add(new Iu(16777215,.32));tn.add(new Du(11191551,2766144,.6));const Hu=new Ir(16777215,1.2);Hu.position.set(1,.75,.5);tn.add(Hu);const Gu=new Ir(8956671,.3);Gu.position.set(-.6,-.3,-.8);tn.add(Gu);const cx=new $a({antialias:!0}),ui=Uu(cx,{charset:" .:-=+*#%@",fontSize:12,color:"#7cfc9a"});ui.setSize(window.innerWidth,window.innerHeight);ku.appendChild(ui.domElement);const Bn=m0(tn),Ce=_0(tn),Is=H0(tn,Ce,Bn),Ps=Z0(),Bi=K0(tn,fn,Bn,{onBoom:()=>{gi.playBoom(),Ps.systemMessage("ORE LOST  ·  ASTEROID DESTROYED",4e3)},onCut:()=>{gi.playSplit(),Ps.systemMessage("ASTEROID FRACTURED  ·  SALVAGE BLOCKS",2500)}}),Gn={mapExpanded:!1,debugOpen:!1,miningIntro:!1},Vu=()=>Gn.mapExpanded||Gn.debugOpen||Gn.miningIntro,mi=J0(),lx={[Ae.clearance]:"CLEARED TO DOCK · CORRIDOR 3",[Ae.autopilot]:"AUTOPILOT ENGAGED",[Ae.docked]:"DOCKING COMPLETE",[Ae.undock]:"UNDOCK SEQUENCE",[Ae.resume]:"MANUAL CONTROL RESTORED"},ki=i=>mi.log({short:lx[i]||i,text:i,kind:"radio"}),gi=jv({engineUrl:"/engine-loop.mp3",warpUrl:"/warp-loop.mp3",miningUrl:"/mining-loop.mp3",impactUrl:"/impact.mp3",explosionUrl:"/explosion.mp3",splitUrl:"/rock-split.mp3"}),kn=ax(gi);kn.preload();let Wi=0;function ux(i){return ne.clamp(i/500,0,.5)}function hx(i){return ne.clamp(i/90,.35,1.6)}const Ze=e0(gn,ku,zu,Bn,Ce,Is,{onImpact:i=>{gi.playImpact(ux(i)),Wi=Math.max(Wi,hx(i))},onWarpInhibit:()=>Gl(gv()),onWarpExit:()=>Gl(_v()),onDockStart:()=>{kn.speakSequence([Ae.clearance,Ae.autopilot]),ki(Ae.clearance),ki(Ae.autopilot)},onDocked:()=>{kn.speak(Ae.docked),ki(Ae.docked)},onUndockStart:()=>{kn.speakSequence([Ae.undock,Ae.autopilot]),ki(Ae.undock),ki(Ae.autopilot)},onUndocked:()=>{kn.speak(Ae.resume),ki(Ae.resume)},isUiOpen:Vu}),Wu=qv({onOpen:()=>{Gn.miningIntro=!0},onClose:()=>{Gn.miningIntro=!1},onFirstDismiss:()=>Ps.systemMessage("MINING GUIDE  ·  MENU (ESC) > HELP > MINING",6e3)}),Xu=Wv(zu,{onPlay:()=>Ze.activate(),onToggleMute:()=>gi.toggleMute(),isMuted:()=>gi.isMuted(),onOpenMining:()=>Wu.show()});window.addEventListener("keydown",i=>{i.code==="Escape"&&Xu.reset()});window.addEventListener("keydown",i=>{i.code==="Escape"&&Xu.reset()});const qu=Bv(Bn,gn,Ce,Is,()=>!Ze.state.active,i=>{Gn.mapExpanded=i});kv();Yv({onOpen:()=>{Gn.debugOpen=!0,Ze.deactivate()},onClose:()=>{Gn.debugOpen=!1}});zv();const Yu=700;function dx(){for(const i of Is.ships){if(!i.active){i._inZone=!1;continue}const t=gn.position.distanceTo(i.group.position)<=Yu;t&&!i._inZone&&mi.log({short:`${i.callsign} ENTERING SECTOR`,kind:"info"}),i._inZone=t}}const Nr=15,Ku=30,fx=Yu,px=(Ce==null?void 0:Ce.radius)+900;let Ho=Nr+Math.random()*(Ku-Nr);function mx(i){if(Ho-=i,Ho>0)return;Ho=Nr+Math.random()*(Ku-Nr);const t=[];for(const n of Is.ships)n.active&&gn.position.distanceTo(n.group.position)<=fx&&t.push({callsign:n.callsign,station:!1});if(Ce&&gn.position.distanceTo(Ce.center)<=px&&t.push({callsign:"CONTROL",station:!0}),!t.length)return;const e=t[Math.floor(Math.random()*t.length)];mi.log({short:Mv(e),kind:"chatter"})}const gx=(Ce==null?void 0:Ce.radius)+220,_x=45;let Go=!1;function vx(){if(!Ce||Go)return;const i=Ze.state;if(i.docking||i.undocking||i.docked||!(gn.position.distanceTo(Ce.center)<=gx)||Math.abs(i.speed)<=_x||mi.hasRecent("slow-down",50))return;Go=!0;const e=dv();kn.speak(e,{onPlay:()=>mi.log({short:"REDUCE SPEED — TOO FAST",text:e,kind:"radio",code:"slow-down"})}).finally(()=>{Go=!1})}const xx=4,yx=8;let Vo=!1,Wo=!1,mr=0;function Mx(i){if(!Ce||!Ce.colliders)return;mr>0&&(mr-=i);const t=Ze.state;if(t.docking||t.undocking||t.docked){Vo=!1;return}let e=!1;for(const n of Ce.colliders)if(gn.position.distanceTo(n.center)<=n.radius+xx){e=!0;break}if(e&&!Vo&&!Wo&&mr<=0){Wo=!0;const n=fv();kn.speak(n,{onPlay:()=>mi.log({short:"STATION COLLISION",text:n,kind:"radio",code:"collision"})}).finally(()=>{Wo=!1,mr=yx})}Vo=e}const Sx=30;let Or=0;function Gl(i){Ps.systemMessage(i.hud),!(Or>0)&&(Or=Sx,kn.speakSystem(i.voice))}const Vl=.8,Ex=.25;let Wl=0;function bx(i,t){Wl+=t;const e=Wl;let n=0,s=0,r=0,o=0,a=0;const c=ne.clamp((i-Vl)/(1-Vl),0,1);if(c>0){const l=Math.pow(c,1.6);r+=(Math.sin(e*84.3)*.6+Math.sin(e*137)*.4)*.018*l,n+=(Math.sin(e*96.7)*.6+Math.sin(e*151)*.4)*.011*l,s+=(Math.sin(e*73.1)*.6+Math.sin(e*121)*.4)*.011*l,o+=(Math.random()-.5)*.05*l,a+=(Math.random()-.5)*.05*l}if(Wi>.001){const l=Wi;r+=(Math.sin(e*120)*.5+(Math.random()-.5))*.12*l,n+=(Math.sin(e*97)*.5+(Math.random()-.5))*.1*l,s+=(Math.sin(e*138)*.5+(Math.random()-.5))*.1*l,o+=(Math.random()-.5)*1.4*l,a+=(Math.random()-.5)*1.4*l,Wi*=Math.exp(-t/Ex)}else Wi=0;fn.rotation.set(n,s,r),fn.position.set(o,a,0)}const wx=new Z_;function ju(){requestAnimationFrame(ju);const i=Math.min(wx.getDelta(),.05);Ze.state.active?(Ze.update(i),Bn.update(i),Ce.update(i),Is.update(i),dx(),mx(i),vx(),Mx(i),Or>0&&(Or-=i),Bi.update(Ze.state,i),Bn.updateBlocks(gn.position,i),!Vu()&&Bi.state.phase==="cutting"&&Wu.maybeShow()):Bi.reset(),bx(Ze.state.warp,i),mi.update(i),Ps.update(Ze.state,Bi.state),qu.update(i),gi.update(Ze.state,Bi.state,i),ui.render(tn,fn),ui.drawStars(Bn.stars,fn,Ze.state.warp,i),ui.drawMining(Bi.state,fn,i),ui.drawExplosions(Bn.explosions,fn)}ju();window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;fn.aspect=i/t,fn.updateProjectionMatrix(),ui.setSize(i,t),qu.resize()});
