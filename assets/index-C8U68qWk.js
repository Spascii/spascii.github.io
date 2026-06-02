(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="169",qi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ih=0,pc=1,sh=2,$l=1,rh=2,wn=3,qn=0,Ge=1,pn=2,Wn=0,Yi=1,Tr=2,mc=3,gc=4,oh=5,ui=100,ah=101,ch=102,lh=103,uh=104,hh=200,dh=201,fh=202,ph=203,Ko=204,jo=205,mh=206,gh=207,_h=208,vh=209,xh=210,yh=211,Mh=212,Sh=213,Eh=214,Zo=0,$o=1,Jo=2,Zi=3,Qo=4,ta=5,ea=6,na=7,Jl=0,bh=1,wh=2,Xn=0,Th=1,Ah=2,Rh=3,Ch=4,Ph=5,Lh=6,Dh=7,Ql=300,$i=301,Ji=302,ia=303,sa=304,zr=306,ra=1e3,di=1001,oa=1002,tn=1003,Ih=1004,Bs=1005,on=1006,Zr=1007,fi=1008,Pn=1009,tu=1010,eu=1011,Ts=1012,qa=1013,gi=1014,An=1015,Is=1016,Ya=1017,Ka=1018,Qi=1020,nu=35902,iu=1021,su=1022,cn=1023,ru=1024,ou=1025,Ki=1026,ts=1027,au=1028,ja=1029,cu=1030,Za=1031,$a=1033,vr=33776,xr=33777,yr=33778,Mr=33779,aa=35840,ca=35841,la=35842,ua=35843,ha=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,_a=37811,va=37812,xa=37813,ya=37814,Ma=37815,Sa=37816,Ea=37817,ba=37818,wa=37819,Ta=37820,Aa=37821,Sr=36492,Ra=36494,Ca=36495,lu=36283,Pa=36284,La=36285,Da=36286,Uh=3200,Nh=3201,uu=0,Oh=1,Gn="",dn="srgb",Kn="srgb-linear",Ja="display-p3",Hr="display-p3-linear",Ar="linear",de="srgb",Rr="rec709",Cr="p3",wi=7680,_c=519,Fh=512,kh=513,Bh=514,hu=515,zh=516,Hh=517,Gh=518,Vh=519,vc=35044,xc="300 es",Rn=2e3,Pr=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const ys=Math.PI/180,As=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Qa(i,t){return(i%t+t)%t}function Wh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ms(i,t,e){return(1-e)*i+e*t}function qh(i,t,e,n){return Ms(i,t,1-Math.exp(-e*n))}function Yh(i,t=1){return t-Math.abs(Qa(i,t*2)-t)}function Kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $h(i,t){return i+Math.random()*(t-i)}function Jh(i){return i*(.5-Math.random())}function Qh(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(i){return i*ys}function ed(i){return i*As}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ie={DEG2RAD:ys,RAD2DEG:As,generateUUID:Si,clamp:Ee,euclideanModulo:Qa,mapLinear:Wh,inverseLerp:Xh,lerp:Ms,damp:qh,pingpong:Yh,smoothstep:Kh,smootherstep:jh,randInt:Zh,randFloat:$h,randFloatSpread:Jh,seededRandom:Qh,degToRad:td,radToDeg:ed,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:Oe,denormalize:Hi};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],M=s[0],p=s[3],m=s[6],w=s[1],v=s[4],x=s[7],U=s[2],b=s[5],E=s[8];return r[0]=o*M+a*w+c*U,r[3]=o*p+a*v+c*b,r[6]=o*m+a*x+c*E,r[1]=l*M+u*w+f*U,r[4]=l*p+u*v+f*b,r[7]=l*m+u*x+f*E,r[2]=h*M+d*w+g*U,r[5]=h*p+d*v+g*b,r[8]=h*m+d*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Zt;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){const i=Lr("canvas");return i.style.display="block",i}const Mc={};function Er(i){i in Mc||(Mc[i]=!0,console.warn(i))}function ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ld(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Sc=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ec=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[Kn]:{transfer:Ar,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[dn]:{transfer:de,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Hr]:{transfer:Ar,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(Sc)},[Ja]:{transfer:de,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(Sc).convertLinearToSRGB()}},ud=new Set([Kn,Hr]),se={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ud.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=hs[t].toReference,s=hs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return hs[i].primaries},getTransfer:function(i){return i===Gn?Ar:hs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(hs[t].luminanceCoefficients)}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class hd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Lr("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class Ve extends Mi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=di,s=di,r=on,o=fi,a=cn,c=Pn,l=Ve.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Si(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Ql;Ve.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(d+1)/2,U=(m+1)/2,b=(u+h)/4,E=(f+M)/4,C=(g+p)/4;return v>x&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=E/n):x>U?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=C/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=E/r,s=C/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-M)/w,this.z=(h-u)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==h||l!==d||u!==g){let p=1-a;const m=c*h+l*d+u*g+f*M,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const U=Math.sqrt(v),b=Math.atan2(U,m*w);p=Math.sin(p*b)/U,a=Math.sin(a*b)/U}const x=a*w;if(c=c*p+h*x,l=l*p+d*x,u=u*p+g*x,f=f*p+M*x,p===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=U,l*=U,u*=U,f*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new P,bc=new He;class jn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Hs.subVectors(this.max,ds),Ai.subVectors(t.a,ds),Ri.subVectors(t.b,ds),Ci.subVectors(t.c,ds),Un.subVectors(Ri,Ai),Nn.subVectors(Ci,Ri),ti.subVectors(Ai,Ci);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-ti.z,ti.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,ti.z,0,-ti.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-ti.y,ti.x,0];return!eo(e,Ai,Ri,Ci,Hs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Ai,Ri,Ci,Hs))?!1:(Gs.crossVectors(Un,Nn),e=[Gs.x,Gs.y,Gs.z],eo(e,Ai,Ri,Ci,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,zs=new jn,Ai=new P,Ri=new P,Ci=new P,Un=new P,Nn=new P,ti=new P,ds=new P,Hs=new P,Gs=new P,ei=new P;function eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);const a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const gd=new jn,fs=new P,no=new P;class Ei{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(no)),this.expandByPoint(fs.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new P,io=new P,Vs=new P,On=new P,so=new P,Ws=new P,ro=new P;class Us{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){io.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=On.dot(this.direction),c=-On.dot(Vs),l=On.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(io).addScaledVector(Vs,h),d}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){so.subVectors(e,t),Ws.subVectors(n,t),ro.crossVectors(so,Ws);let o=this.direction.dot(ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const c=a*this.direction.dot(Ws.crossVectors(On,Ws));if(c<0)return null;const l=a*this.direction.dot(so.cross(On));if(l<0||c+l>o)return null;const u=-a*On.dot(ro);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,M=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-M*l,e[9]=-a*c,e[2]=M-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,M=l*f;e[0]=h+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=M+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,M=l*f;e[0]=h-M*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,M=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+M,e[1]=c*f,e[5]=M*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=M-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-M*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+M,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,vd)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Fn.crossVectors(n,Xe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Fn.crossVectors(n,Xe)),Fn.normalize(),Xs.crossVectors(Xe,Fn),s[0]=Fn.x,s[4]=Xs.x,s[8]=Xe.x,s[1]=Fn.y,s[5]=Xs.y,s[9]=Xe.y,s[2]=Fn.z,s[6]=Xs.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],w=n[3],v=n[7],x=n[11],U=n[15],b=s[0],E=s[4],C=s[8],q=s[12],_=s[1],S=s[5],G=s[9],z=s[13],D=s[2],I=s[6],L=s[10],H=s[14],k=s[3],j=s[7],ct=s[11],ft=s[15];return r[0]=o*b+a*_+c*D+l*k,r[4]=o*E+a*S+c*I+l*j,r[8]=o*C+a*G+c*L+l*ct,r[12]=o*q+a*z+c*H+l*ft,r[1]=u*b+f*_+h*D+d*k,r[5]=u*E+f*S+h*I+d*j,r[9]=u*C+f*G+h*L+d*ct,r[13]=u*q+f*z+h*H+d*ft,r[2]=g*b+M*_+p*D+m*k,r[6]=g*E+M*S+p*I+m*j,r[10]=g*C+M*G+p*L+m*ct,r[14]=g*q+M*z+p*H+m*ft,r[3]=w*b+v*_+x*D+U*k,r[7]=w*E+v*S+x*I+U*j,r[11]=w*C+v*G+x*L+U*ct,r[15]=w*q+v*z+x*H+U*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15];return g*(+r*c*f-s*l*f-r*a*h+n*l*h+s*a*d-n*c*d)+M*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+p*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+m*(-s*a*u-e*c*f+e*a*h+s*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],w=f*p*l-M*h*l+M*c*d-a*p*d-f*c*m+a*h*m,v=g*h*l-u*p*l-g*c*d+o*p*d+u*c*m-o*h*m,x=u*M*l-g*f*l+g*a*d-o*M*d-u*a*m+o*f*m,U=g*f*c-u*M*c-g*a*h+o*M*h+u*a*p-o*f*p,b=e*w+n*v+s*x+r*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=w*E,t[1]=(M*h*r-f*p*r-M*s*d+n*p*d+f*s*m-n*h*m)*E,t[2]=(a*p*r-M*c*r+M*s*l-n*p*l-a*s*m+n*c*m)*E,t[3]=(f*c*r-a*h*r-f*s*l+n*h*l+a*s*d-n*c*d)*E,t[4]=v*E,t[5]=(u*p*r-g*h*r+g*s*d-e*p*d-u*s*m+e*h*m)*E,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*E,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*E,t[8]=x*E,t[9]=(g*f*r-u*M*r-g*n*d+e*M*d+u*n*m-e*f*m)*E,t[10]=(o*M*r-g*a*r+g*n*l-e*M*l-o*n*m+e*a*m)*E,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*d-e*a*d)*E,t[12]=U*E,t[13]=(u*M*s-g*f*s+g*n*h-e*M*h-u*n*p+e*f*p)*E,t[14]=(g*a*s-o*M*s-g*n*c+e*M*c+o*n*p-e*a*p)*E,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,M=o*u,p=o*f,m=a*f,w=c*l,v=c*u,x=c*f,U=n.x,b=n.y,E=n.z;return s[0]=(1-(M+m))*U,s[1]=(d+x)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+m))*b,s[6]=(p+w)*b,s[7]=0,s[8]=(g+v)*E,s[9]=(p-w)*E,s[10]=(1-(h+M))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const l=1/r,u=1/o,f=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===Rn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*l,d=(n+s)*u;let g,M;if(a===Rn)g=(o+r)*f,M=-2*f;else if(a===Pr)g=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new P,sn=new ae,_d=new P(0,0,0),vd=new P(1,1,1),Fn=new P,Xs=new P,Xe=new P,wc=new ae,Tc=new He;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const Ac=new P,Li=new He,Sn=new ae,qs=new P,ps=new P,yd=new P,Md=new He,Rc=new P(1,0,0),Cc=new P(0,1,0),Pc=new P(0,0,1),Lc={type:"added"},Sd={type:"removed"},Di={type:"childadded",child:null},oo={type:"childremoved",child:null};class be extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new P,e=new gn,n=new He,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ps,qs,this.up):Sn.lookAt(qs,ps,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Sn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new P,En=new P,ao=new P,bn=new P,Ii=new P,Ui=new P,Dc=new P,co=new P,lo=new P,uo=new P,ho=new oe,fo=new oe,po=new oe;class an{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),En.subVectors(n,e),ao.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(En),c=rn.dot(ao),l=En.dot(En),u=En.dot(ao),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ho.setScalar(0),fo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(t,e),fo.fromBufferAttribute(t,n),po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ho,r.x),o.addScaledVector(fo,r.y),o.addScaledVector(po,r.z),o}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),En.subVectors(t,e),rn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ui.subVectors(r,n),co.subVectors(t,n);const c=Ii.dot(co),l=Ui.dot(co);if(c<=0&&l<=0)return e.copy(n);lo.subVectors(t,s);const u=Ii.dot(lo),f=Ui.dot(lo);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ii,o);uo.subVectors(t,r);const d=Ii.dot(uo),g=Ui.dot(uo);if(g>=0&&d<=g)return e.copy(r);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ui,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Dc.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Dc,a);const m=1/(p+M+h);return o=M*m,a=h*m,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Qa(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mo(o,r,t+1/3),this.g=mo(o,r,t),this.b=mo(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return se.fromWorkingColorSpace(De.copy(this),t),Math.round(Ee(De.r*255,0,255))*65536+Math.round(Ee(De.g*255,0,255))*256+Math.round(Ee(De.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=dn){se.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Ys);const n=Ms(kn.h,Ys.h,e),s=Ms(kn.s,Ys.s,e),r=Ms(kn.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new qt;qt.NAMES=mu;let Ed=0;class bi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Yi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mi extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new P,Ks=new xt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class gu extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bd=0;const $e=new ae,go=new be,Ni=new P,qe=new jn,ms=new jn,Ae=new P;class ye extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:gu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(qe.min,ms.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,ms.max),qe.expandByPoint(Ae)):(qe.expandByPoint(ms.min),qe.expandByPoint(ms.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ae.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(t,l),Ae.add(Ni)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new P,c[C]=new P;const l=new P,u=new P,f=new P,h=new xt,d=new xt,g=new xt,M=new P,p=new P;function m(C,q,_){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,q),f.fromBufferAttribute(n,_),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,q),g.fromBufferAttribute(r,_),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(S),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(S),a[C].add(M),a[q].add(M),a[_].add(M),c[C].add(p),c[q].add(p),c[_].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,q=w.length;C<q;++C){const _=w[C],S=_.start,G=_.count;for(let z=S,D=S+G;z<D;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new P,x=new P,U=new P,b=new P;function E(C){U.fromBufferAttribute(s,C),b.copy(U);const q=a[C];v.copy(q),v.sub(U.multiplyScalar(U.dot(q))).normalize(),x.crossVectors(b,q);const S=x.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,S)}for(let C=0,q=w.length;C<q;++C){const _=w[C],S=_.start,G=_.count;for(let z=S,D=S+G;z<D;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new Be(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new ae,ni=new Us,js=new Ei,Uc=new P,Zs=new P,$s=new P,Js=new P,_o=new P,Qs=new P,Nc=new P,tr=new P;class Ce extends be{constructor(t=new ye,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(_o.fromBufferAttribute(f,t),o?Qs.addScaledVector(_o,u):Qs.addScaledVector(_o.sub(e),u))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(js.containsPoint(ni.origin)===!1&&(ni.intersectSphere(js,Uc)===null||ni.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=w,U=v;x<U;x+=3){const b=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);s=er(this,m,t,n,l,u,f,b,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const w=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);s=er(this,o,t,n,l,u,f,w,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=w,U=v;x<U;x+=3){const b=x,E=x+1,C=x+2;s=er(this,m,t,n,l,u,f,b,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const w=p,v=p+1,x=p+2;s=er(this,o,t,n,l,u,f,w,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function wd(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===qn,a),c===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(tr);return l<e.near||l>e.far?null:{distance:l,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Zs),i.getVertexPosition(c,$s),i.getVertexPosition(l,Js);const u=wd(i,t,e,n,Zs,$s,Js,Nc);if(u){const f=new P;an.getBarycoord(Nc,Zs,$s,Js,f),s&&(u.uv=an.getInterpolatedAttribute(s,a,c,l,f,new xt)),r&&(u.uv1=an.getInterpolatedAttribute(r,a,c,l,f,new xt)),o&&(u.normal=an.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};an.getNormal(Zs,$s,Js,h.normal),u.face=h,u.barycoord=f}return u}class Je extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function g(M,p,m,w,v,x,U,b,E,C,q){const _=x/E,S=U/C,G=x/2,z=U/2,D=b/2,I=E+1,L=C+1;let H=0,k=0;const j=new P;for(let ct=0;ct<L;ct++){const ft=ct*S-z;for(let Ut=0;Ut<I;Ut++){const Vt=Ut*_-G;j[M]=Vt*w,j[p]=ft*v,j[m]=D,l.push(j.x,j.y,j.z),j[M]=0,j[p]=0,j[m]=b>0?1:-1,u.push(j.x,j.y,j.z),f.push(Ut/E),f.push(1-ct/C),H+=1}}for(let ct=0;ct<C;ct++)for(let ft=0;ft<E;ft++){const Ut=h+ft+I*ct,Vt=h+ft+I*(ct+1),Y=h+(ft+1)+I*(ct+1),rt=h+(ft+1)+I*ct;c.push(Ut,Vt,rt),c.push(Vt,Y,rt),k+=6}a.addGroup(d,k,q),d+=k,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const s in n)t[s]=n[s]}return t}function Td(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Ad={clone:es,merge:Fe};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new P,Oc=new xt,Fc=new xt;class ke extends xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Fc),e.subVectors(Fc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Fi=1;class Pd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Oi,Fi,t,e);s.layers=this.layers,this.add(s);const r=new ke(Oi,Fi,t,e);r.layers=this.layers,this.add(r);const o=new ke(Oi,Fi,t,e);o.layers=this.layers,this.add(o);const a=new ke(Oi,Fi,t,e);a.layers=this.layers,this.add(a);const c=new ke(Oi,Fi,t,e);c.layers=this.layers,this.add(c);const l=new ke(Oi,Fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yu extends Ve{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Wn});r.uniforms.tEquirect.value=e;const o=new Ce(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=on),new Pd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const vo=new P,Dd=new P,Id=new Zt;class Hn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vo.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Id.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Ei,nr=new P;class ec{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],M=s[10],p=s[11],m=s[12],w=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,h-l,p-d,x-m).normalize(),n[1].setComponents(c+r,h+l,p+d,x+m).normalize(),n[2].setComponents(c+o,h+u,p+g,x+w).normalize(),n[3].setComponents(c-o,h-u,p-g,x-w).normalize(),n[4].setComponents(c-a,h-f,p-M,x-v).normalize(),e===Rn)n[5].setComponents(c+a,h+f,p+M,x+v).normalize();else if(e===Pr)n[5].setComponents(a,f,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ud(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Gr extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],M=[],p=[];for(let m=0;m<u;m++){const w=m*h-o;for(let v=0;v<l;v++){const x=v*f-r;g.push(x,-w,0),M.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const v=w+l*m,x=w+l*(m+1),U=w+1+l*(m+1),b=w+1+l*m;d.push(v,x,b),d.push(x,U,b)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`
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
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Uf=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,sm=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,am=`#define TOON
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
}`,cm=`#define TOON
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
}`,lm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,fm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Nd,alphahash_pars_fragment:Od,alphamap_fragment:Fd,alphamap_pars_fragment:kd,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:Hd,aomap_pars_fragment:Gd,batching_pars_vertex:Vd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:Kd,bumpmap_pars_fragment:jd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Qd,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:af,displacementmap_pars_vertex:cf,displacementmap_vertex:lf,emissivemap_fragment:uf,emissivemap_pars_fragment:hf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Rf,envmap_vertex:vf,fog_vertex:xf,fog_pars_vertex:yf,fog_fragment:Mf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:bf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Lf,lights_phong_pars_fragment:Df,lights_physical_fragment:If,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:Of,lights_fragment_end:Ff,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Hf,map_fragment:Gf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Kf,morphcolor_vertex:jf,morphnormal_vertex:Zf,morphtarget_pars_vertex:$f,morphtarget_vertex:Jf,normal_fragment_begin:Qf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:ap,iridescence_pars_fragment:cp,opaque_fragment:lp,packing:up,premultiplied_alpha_fragment:hp,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:vp,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:Ep,skinnormal_vertex:bp,specularmap_fragment:wp,specularmap_pars_fragment:Tp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Pp,uv_pars_fragment:Lp,uv_pars_vertex:Dp,uv_vertex:Ip,worldpos_vertex:Up,background_vert:Np,background_frag:Op,backgroundCube_vert:Fp,backgroundCube_frag:kp,cube_vert:Bp,cube_frag:zp,depth_vert:Hp,depth_frag:Gp,distanceRGBA_vert:Vp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Kp,meshbasic_vert:jp,meshbasic_frag:Zp,meshlambert_vert:$p,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:cm,points_vert:lm,points_frag:um,shadow_vert:hm,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},Tt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},fn={basic:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Fe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Fe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Fe([Tt.points,Tt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Fe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Fe([Tt.common,Tt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Fe([Tt.sprite,Tt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Fe([Tt.common,Tt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Fe([Tt.lights,Tt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};fn.physical={uniforms:Fe([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ir={r:0,b:0,g:0},si=new gn,mm=new ae;function gm(i,t,e,n,s,r,o){const a=new qt(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function M(w){let v=!1;const x=g(w);x===null?m(a,c):x&&x.isColor&&(m(x,1),v=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===zr)?(u===void 0&&(u=new Ce(new Je(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:es(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),si.copy(v.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(si)),u.material.toneMapped=se.getTransfer(x.colorSpace)!==de,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ce(new Gr(2,2),new Yn({name:"BackgroundMaterial",uniforms:es(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,v){w.getRGB(ir,vu(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:M,addToRenderList:p}}function _m(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(_,S,G,z,D){let I=!1;const L=f(z,G,S);r!==L&&(r=L,l(r.object)),I=d(_,z,G,D),I&&g(_,z,G,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(_,S,G,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function f(_,S,G){const z=G.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let I=D[S.id];I===void 0&&(I={},D[S.id]=I);let L=I[z];return L===void 0&&(L=h(c()),I[z]=L),L}function h(_){const S=[],G=[],z=[];for(let D=0;D<e;D++)S[D]=0,G[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:z,object:_,attributes:{},index:null}}function d(_,S,G,z){const D=r.attributes,I=S.attributes;let L=0;const H=G.getAttributes();for(const k in H)if(H[k].location>=0){const ct=D[k];let ft=I[k];if(ft===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;L++}return r.attributesNum!==L||r.index!==z}function g(_,S,G,z){const D={},I=S.attributes;let L=0;const H=G.getAttributes();for(const k in H)if(H[k].location>=0){let ct=I[k];ct===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),D[k]=ft,L++}r.attributes=D,r.attributesNum=L,r.index=z}function M(){const _=r.newAttributes;for(let S=0,G=_.length;S<G;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){const G=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;G[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),D[_]!==S&&(i.vertexAttribDivisor(_,S),D[_]=S)}function w(){const _=r.newAttributes,S=r.enabledAttributes;for(let G=0,z=S.length;G<z;G++)S[G]!==_[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function v(_,S,G,z,D,I,L){L===!0?i.vertexAttribIPointer(_,S,G,D,I):i.vertexAttribPointer(_,S,G,z,D,I)}function x(_,S,G,z){M();const D=z.attributes,I=G.getAttributes(),L=S.defaultAttributeValues;for(const H in I){const k=I[H];if(k.location>=0){let j=D[H];if(j===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const ct=j.normalized,ft=j.itemSize,Ut=t.get(j);if(Ut===void 0)continue;const Vt=Ut.buffer,Y=Ut.type,rt=Ut.bytesPerElement,dt=Y===i.INT||Y===i.UNSIGNED_INT||j.gpuType===qa;if(j.isInterleavedBufferAttribute){const K=j.data,mt=K.stride,pt=j.offset;if(K.isInstancedInterleavedBuffer){for(let vt=0;vt<k.locationSize;vt++)m(k.location+vt,K.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let vt=0;vt<k.locationSize;vt++)p(k.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let vt=0;vt<k.locationSize;vt++)v(k.location+vt,ft/k.locationSize,Y,ct,mt*rt,(pt+ft/k.locationSize*vt)*rt,dt)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)m(k.location+K,j.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<k.locationSize;K++)p(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let K=0;K<k.locationSize;K++)v(k.location+K,ft/k.locationSize,Y,ct,ft*rt,ft/k.locationSize*K*rt,dt)}}else if(L!==void 0){const ct=L[H];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}w()}function U(){C();for(const _ in n){const S=n[_];for(const G in S){const z=S[G];for(const D in z)u(z[D].object),delete z[D];delete S[G]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const G in S){const z=S[G];for(const D in z)u(z[D].object),delete z[D];delete S[G]}delete n[_.id]}function E(_){for(const S in n){const G=n[S];if(G[_.id]===void 0)continue;const z=G[_.id];for(const D in z)u(z[D].object),delete z[D];delete G[_.id]}}function C(){q(),o=!0,r!==s&&(r=s,l(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:q,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:p,disableUnusedAttributes:w}}function vm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let M=0;M<f;M++)g+=u[M];for(let M=0;M<h.length;M++)e.update(g,n,h[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==An&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:U,maxSamples:b}}function ym(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const w=r?0:n,v=w*4;let x=m.clippingState||null;c.value=x,x=u(g,h,v,d);for(let U=0;U!==v;++U)x[U]=e[U];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const m=d+M*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==M;++v,x+=4)o.copy(f[v]).applyMatrix4(w,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Mm(i){let t=new WeakMap;function e(o,a){return a===ia?o.mapping=$i:a===sa&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===sa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ld(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Su extends xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,kc=[.125,.215,.35,.446,.526,.582],hi=20,xo=new Su,Bc=new qt;let yo=null,Mo=0,So=0,Eo=!1;const li=(1+Math.sqrt(5))/2,ki=1/li,zc=[new P(-li,ki,0),new P(li,ki,0),new P(-ki,0,li),new P(ki,0,li),new P(0,li,-ki),new P(0,li,ki),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,Mo,So),this._renderer.xr.enabled=Eo,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Is,format:cn,colorSpace:Kn,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=Em(r,t,e)}return s}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Bc),u.toneMapping=Xn,u.autoClear=!1;const d=new mi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Ce(new Je,d);let M=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,M=!0):(d.color.copy(Bc),M=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;sr(s,w*v,m>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$i||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zc[(s-r-1)%zc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ce(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hi-1),M=r/g,p=isFinite(r)?1+Math.floor(u*M):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const m=[];let w=0;for(let E=0;E<hi;++E){const C=E/M,q=Math.exp(-C*C/2);m.push(q),E===0?w+=q:E<p&&(w+=2*q)}for(let E=0;E<m.length;E++)m[E]=m[E]/w;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const x=this._sizeLods[s],U=3*x*(s>v-Vi?s-v+Vi:0),b=4*(this._cubeSize-x);sr(e,U,b,3*x,2*x),c.setRenderTarget(e),c.render(f,xo)}}function Sm(i){const t=[],e=[],n=[];let s=i;const r=i-Vi+1+kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Vi?c=kc[o-i+Vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,M=3,p=2,m=1,w=new Float32Array(M*g*d),v=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,C=b>2?0:-1,q=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];w.set(q,M*g*b),v.set(h,p*g*b);const _=[b,b,b,b,b,b];x.set(_,m*g*b)}const U=new ye;U.setAttribute("position",new Be(w,M)),U.setAttribute("uv",new Be(v,p)),U.setAttribute("faceIndex",new Be(x,m)),t.push(U),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Em(i,t,e){const n=new Float32Array(hi),s=new P(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Vc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Wc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function bm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ia||c===sa,u=c===$i||c===Ji;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Hc(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Hc(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const M=h.morphAttributes[g];for(let p=0,m=M.length;p<m;p++)t.remove(M[p])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const M=d[g];for(let p=0,m=M.length;p<m;p++)t.update(M[p],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(d!==null){const w=d.array;M=d.version;for(let v=0,x=w.length;v<x;v+=3){const U=w[v+0],b=w[v+1],E=w[v+2];h.push(U,b,b,E,E,U)}}else if(g!==void 0){const w=g.array;M=g.version;for(let v=0,x=w.length/3-1;v<x;v+=3){const U=v+0,b=v+1,E=v+2;h.push(U,b,b,E,E,U)}}else return;const p=new(du(h)?_u:gu)(h,1);p.version=M;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Am(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/o,d[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,M,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<M.length;w++)e.update(m,n,M[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Rm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let q=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",q)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let x=a.attributes.position.count*v,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*U*4*f),E=new pu(b,x,U,f);E.type=An,E.needsUpdate=!0;const C=v*4;for(let _=0;_<f;_++){const S=p[_],G=m[_],z=w[_],D=x*U*4*_;for(let I=0;I<S.count;I++){const L=I*C;d===!0&&(s.fromBufferAttribute(S,I),b[D+L+0]=s.x,b[D+L+1]=s.y,b[D+L+2]=s.z,b[D+L+3]=0),g===!0&&(s.fromBufferAttribute(G,I),b[D+L+4]=s.x,b[D+L+5]=s.y,b[D+L+6]=s.z,b[D+L+7]=0),M===!0&&(s.fromBufferAttribute(z,I),b[D+L+8]=s.x,b[D+L+9]=s.y,b[D+L+10]=s.z,b[D+L+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new xt(x,U)},n.set(a,h),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Pm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Eu extends Ve{constructor(t,e,n,s,r,o,a,c,l,u=Ki){if(u!==Ki&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=gi),n===void 0&&u===ts&&(n=Qi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bu=new Ve,Xc=new Eu(1,1),wu=new pu,Tu=new md,Au=new yu,qc=[],Yc=[],Kc=new Float32Array(16),jc=new Float32Array(9),Zc=new Float32Array(4);function is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vr(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),Te(e,n)}}function Om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),Te(e,n)}}function Fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Te(e,n)}}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=hu,r=Xc):r=bu,e.setTexture2D(t||r,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tu,s)}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Au,s)}function jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wu,s)}function Zm(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return Fm;case 5124:case 35670:return km;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function $m(i,t){i.uniform1fv(this.addr,t)}function Jm(i,t){const e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function Qm(i,t){const e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){const e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){const e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){const e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){const e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function ag(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function ug(i,t){i.uniform3uiv(this.addr,t)}function hg(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bu,r[o])}function fg(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tu,r[o])}function pg(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Au,r[o])}function mg(i,t,e){const n=this.cache,s=t.length,r=Vr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wu,r[o])}function gg(i){switch(i){case 5126:return $m;case 35664:return Jm;case 35665:return Qm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return cg;case 36294:return lg;case 36295:return ug;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class _g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}}class vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function yg(i,t,e){const n=i.name,s=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),o=bo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$c(e,l===void 0?new _g(a,i,t):new vg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new xg(a),$c(e,f)),e=f}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Mg=37297;let Sg=0;function Eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function bg(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Cr&&e===Rr?n="LinearDisplayP3ToLinearSRGB":t===Rr&&e===Cr&&(n="LinearSRGBToLinearDisplayP3"),i){case Kn:case Hr:return[n,"LinearTransferOETF"];case dn:case Ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Eg(i.getShaderSource(t),o)}else return s}function wg(i,t){const e=bg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tg(i,t){let e;switch(t){case Th:e="Linear";break;case Ah:e="Reinhard";break;case Rh:e="Cineon";break;case Ch:e="ACESFilmic";break;case Lh:e="AgX";break;case Dh:e="Neutral";break;case Ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new P;function Ag(){se.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Cg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xs(i){return i!==""}function tl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(Lg,Ig)}const Dg=new Map;function Ig(i,t){let e=jt[t];if(e===void 0){const n=Dg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Ug,Ng)}function Ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Bg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case wh:t="ENVMAP_BLENDING_ADD";break}return t}function zg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Og(e),l=Fg(e),u=kg(e),f=Bg(e),h=zg(e),d=Rg(e),g=Cg(r),M=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`)):(p=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),m=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Ia(o),o=tl(o,e),o=el(o,e),a=Ia(a),a=tl(a,e),a=el(a,e),o=nl(o),a=nl(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=w+p+o,x=w+m+a,U=Jc(s,s.VERTEX_SHADER,v),b=Jc(s,s.FRAGMENT_SHADER,x);s.attachShader(M,U),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(S){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(U).trim(),D=s.getShaderInfoLog(b).trim();let I=!0,L=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,U,b);else{const H=Qc(s,U,"vertex"),k=Qc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+H+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||D==="")&&(L=!1);L&&(S.diagnostics={runnable:I,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:D,prefix:m}})}s.deleteShader(U),s.deleteShader(b),C=new br(s,M),q=Pg(s,M)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let q;this.getAttributes=function(){return q===void 0&&E(this),q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,Mg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=b,this}let Gg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wg(t),e.set(t,n)),n}}class Wg{constructor(t){this.id=Gg++,this.code=t,this.usedTimes=0}}function Xg(i,t,e,n,s,r,o){const a=new tc,c=new Vg,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,G,z,D){const I=z.fog,L=D.geometry,H=_.isMeshStandardMaterial?z.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||H),j=k&&k.mapping===zr?k.image.height:null,ct=M[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ft=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ut=ft!==void 0?ft.length:0;let Vt=0;L.morphAttributes.position!==void 0&&(Vt=1),L.morphAttributes.normal!==void 0&&(Vt=2),L.morphAttributes.color!==void 0&&(Vt=3);let Y,rt,dt,K;if(ct){const le=fn[ct];Y=le.vertexShader,rt=le.fragmentShader}else Y=_.vertexShader,rt=_.fragmentShader,c.update(_),dt=c.getVertexShaderID(_),K=c.getFragmentShaderID(_);const mt=i.getRenderTarget(),pt=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,St=!!_.map,B=!!_.matcap,T=!!k,it=!!_.aoMap,tt=!!_.lightMap,N=!!_.bumpMap,$=!!_.normalMap,ot=!!_.displacementMap,lt=!!_.emissiveMap,R=!!_.metalnessMap,y=!!_.roughnessMap,O=_.anisotropy>0,Z=_.clearcoat>0,st=_.dispersion>0,et=_.iridescence>0,Et=_.sheen>0,gt=_.transmission>0,_t=O&&!!_.anisotropyMap,Ft=Z&&!!_.clearcoatMap,at=Z&&!!_.clearcoatNormalMap,yt=Z&&!!_.clearcoatRoughnessMap,kt=et&&!!_.iridescenceMap,ut=et&&!!_.iridescenceThicknessMap,Ct=Et&&!!_.sheenColorMap,Yt=Et&&!!_.sheenRoughnessMap,Dt=!!_.specularMap,Kt=!!_.specularColorMap,F=!!_.specularIntensityMap,bt=gt&&!!_.transmissionMap,nt=gt&&!!_.thicknessMap,ht=!!_.gradientMap,At=!!_.alphaMap,Pt=_.alphaTest>0,$t=!!_.alphaHash,pe=!!_.extensions;let te=Xn;_.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(te=i.toneMapping);const Bt={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:rt,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:pt,instancingColor:pt&&D.instanceColor!==null,instancingMorph:pt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Kn,alphaToCoverage:!!_.alphaToCoverage,map:St,matcap:B,envMap:T,envMapMode:T&&k.mapping,envMapCubeUVHeight:j,aoMap:it,lightMap:tt,bumpMap:N,normalMap:$,displacementMap:d&&ot,emissiveMap:lt,normalMapObjectSpace:$&&_.normalMapType===Oh,normalMapTangentSpace:$&&_.normalMapType===uu,metalnessMap:R,roughnessMap:y,anisotropy:O,anisotropyMap:_t,clearcoat:Z,clearcoatMap:Ft,clearcoatNormalMap:at,clearcoatRoughnessMap:yt,dispersion:st,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:ut,sheen:Et,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:Dt,specularColorMap:Kt,specularIntensityMap:F,transmission:gt,transmissionMap:bt,thicknessMap:nt,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:At,alphaTest:Pt,alphaHash:$t,combine:_.combine,mapUv:St&&p(_.map.channel),aoMapUv:it&&p(_.aoMap.channel),lightMapUv:tt&&p(_.lightMap.channel),bumpMapUv:N&&p(_.bumpMap.channel),normalMapUv:$&&p(_.normalMap.channel),displacementMapUv:ot&&p(_.displacementMap.channel),emissiveMapUv:lt&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:_t&&p(_.anisotropyMap.channel),clearcoatMapUv:Ft&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(_.sheenRoughnessMap.channel),specularMapUv:Dt&&p(_.specularMap.channel),specularColorMapUv:Kt&&p(_.specularColorMap.channel),specularIntensityMapUv:F&&p(_.specularIntensityMap.channel),transmissionMapUv:bt&&p(_.transmissionMap.channel),thicknessMapUv:nt&&p(_.thicknessMap.channel),alphaMapUv:At&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(St||At),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:St&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function w(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)S.push(G),S.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(v(S,_),x(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function U(_){const S=M[_.type];let G;if(S){const z=fn[S];G=Ad.clone(z.uniforms)}else G=_.uniforms;return G}function b(_,S){let G;for(let z=0,D=u.length;z<D;z++){const I=u[z];if(I.cacheKey===S){G=I,++G.usedTimes;break}}return G===void 0&&(G=new Hg(i,S,_,r),u.push(G)),G}function E(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function C(_){c.remove(_)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:U,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:q}}function qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,M,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:M,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=M,m.group=p),t++,m}function a(f,h,d,g,M,p){const m=o(f,h,d,g,M,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(f,h,d,g,M,p){const m=o(f,h,d,g,M,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,h){e.length>1&&e.sort(f||Yg),n.length>1&&n.sort(h||sl),s.length>1&&s.sort(h||sl)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Kg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new rl,i.set(n,[o])):s>=r.length?(o=new rl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new qt};break;case"SpotLight":e={position:new P,direction:new P,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function Jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qg(i){const t=new jg,e=Zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ae,o=new ae;function a(l){let u=0,f=0,h=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,w=0,v=0,x=0,U=0,b=0,E=0;l.sort(Jg);for(let q=0,_=l.length;q<_;q++){const S=l[q],G=S.color,z=S.intensity,D=S.distance,I=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=G.r*z,f+=G.g*z,h+=G.b*z;else if(S.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(S.sh.coefficients[L],z);E++}else if(S.isDirectionalLight){const L=t.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const H=S.shadow,k=e.get(S);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=S.shadow.matrix,w++}n.directional[d]=L,d++}else if(S.isSpotLight){const L=t.get(S);L.position.setFromMatrixPosition(S.matrixWorld),L.color.copy(G).multiplyScalar(z),L.distance=D,L.coneCos=Math.cos(S.angle),L.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),L.decay=S.decay,n.spot[M]=L;const H=S.shadow;if(S.map&&(n.spotLightMap[U]=S.map,U++,H.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[M]=H.matrix,S.castShadow){const k=e.get(S);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=I,x++}M++}else if(S.isRectAreaLight){const L=t.get(S);L.color.copy(G).multiplyScalar(z),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=L,p++}else if(S.isPointLight){const L=t.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),L.distance=S.distance,L.decay=S.decay,S.castShadow){const H=S.shadow,k=e.get(S);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=L,g++}else if(S.isHemisphereLight){const L=t.get(S);L.skyColor.copy(S.color).multiplyScalar(z),L.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[m]=L,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==w||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==U||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+U-b,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=M,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=w,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=U,C.numLightProbes=E,n.version=$g++)}function c(l,u){let f=0,h=0,d=0,g=0,M=0;const p=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const v=l[m];if(v.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function ol(i){const t=new Qg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function t_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ol(i),t.set(s,[a])):r>=o.length?(a=new ol(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class e_ extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n_ extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(i,t,e){let n=new ec;const s=new xt,r=new xt,o=new oe,a=new e_({depthPacking:Nh}),c=new n_,l={},u=e.maxTextureSize,f={[qn]:Ge,[Ge]:qn,[pn]:pn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ce(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let m=this.type;this.render=function(b,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const q=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=m!==wn&&this.type===wn,D=m===wn&&this.type!==wn;for(let I=0,L=b.length;I<L;I++){const H=b[I],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const j=k.getFrameExtents();if(s.multiply(j),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,k.mapSize.y=r.y)),k.map===null||z===!0||D===!0){const ft=this.type!==wn?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new _i(s.x,s.y,ft),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ct=k.getViewportCount();for(let ft=0;ft<ct;ft++){const Ut=k.getViewport(ft);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),G.viewport(o),k.updateMatrices(H,ft),n=k.getFrustum(),x(E,C,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&w(k,C),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(q,_,S)};function w(b,E){const C=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _i(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,C,h,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,C,d,M,null)}function v(b,E,C,q){let _=null;const S=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)_=S;else if(_=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=_.uuid,z=E.uuid;let D=l[G];D===void 0&&(D={},l[G]=D);let I=D[z];I===void 0&&(I=_.clone(),D[z]=I,E.addEventListener("dispose",U)),_=I}if(_.visible=E.visible,_.wireframe=E.wireframe,q===wn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:f[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=C}return _}function x(b,E,C,q,_){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const z=t.update(b),D=b.material;if(Array.isArray(D)){const I=z.groups;for(let L=0,H=I.length;L<H;L++){const k=I[L],j=D[k.materialIndex];if(j&&j.visible){const ct=v(b,j,q,_);b.onBeforeShadow(i,b,E,C,z,ct,k),i.renderBufferDirect(C,null,z,ct,b,k),b.onAfterShadow(i,b,E,C,z,ct,k)}}}else if(D.visible){const I=v(b,D,q,_);b.onBeforeShadow(i,b,E,C,z,I,null),i.renderBufferDirect(C,null,z,I,b,null),b.onAfterShadow(i,b,E,C,z,I,null)}}const G=b.children;for(let z=0,D=G.length;z<D;z++)x(G[z],E,C,q,_)}function U(b){b.target.removeEventListener("dispose",U);for(const C in l){const q=l[C],_=b.target.uuid;_ in q&&(q[_].dispose(),delete q[_])}}}const o_={[Zo]:$o,[Jo]:ea,[Qo]:na,[Zi]:ta,[$o]:Zo,[ea]:Jo,[na]:Qo,[ta]:Zi};function a_(i){function t(){let F=!1;const bt=new oe;let nt=null;const ht=new oe(0,0,0,0);return{setMask:function(At){nt!==At&&!F&&(i.colorMask(At,At,At,At),nt=At)},setLocked:function(At){F=At},setClear:function(At,Pt,$t,pe,te){te===!0&&(At*=pe,Pt*=pe,$t*=pe),bt.set(At,Pt,$t,pe),ht.equals(bt)===!1&&(i.clearColor(At,Pt,$t,pe),ht.copy(bt))},reset:function(){F=!1,nt=null,ht.set(-1,0,0,0)}}}function e(){let F=!1,bt=!1,nt=null,ht=null,At=null;return{setReversed:function(Pt){bt=Pt},setTest:function(Pt){Pt?dt(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(Pt){nt!==Pt&&!F&&(i.depthMask(Pt),nt=Pt)},setFunc:function(Pt){if(bt&&(Pt=o_[Pt]),ht!==Pt){switch(Pt){case Zo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Pt}},setLocked:function(Pt){F=Pt},setClear:function(Pt){At!==Pt&&(i.clearDepth(Pt),At=Pt)},reset:function(){F=!1,nt=null,ht=null,At=null}}}function n(){let F=!1,bt=null,nt=null,ht=null,At=null,Pt=null,$t=null,pe=null,te=null;return{setTest:function(Bt){F||(Bt?dt(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(Bt){bt!==Bt&&!F&&(i.stencilMask(Bt),bt=Bt)},setFunc:function(Bt,le,Ue){(nt!==Bt||ht!==le||At!==Ue)&&(i.stencilFunc(Bt,le,Ue),nt=Bt,ht=le,At=Ue)},setOp:function(Bt,le,Ue){(Pt!==Bt||$t!==le||pe!==Ue)&&(i.stencilOp(Bt,le,Ue),Pt=Bt,$t=le,pe=Ue)},setLocked:function(Bt){F=Bt},setClear:function(Bt){te!==Bt&&(i.clearStencil(Bt),te=Bt)},reset:function(){F=!1,bt=null,nt=null,ht=null,At=null,Pt=null,$t=null,pe=null,te=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],d=null,g=!1,M=null,p=null,m=null,w=null,v=null,x=null,U=null,b=new qt(0,0,0),E=0,C=!1,q=null,_=null,S=null,G=null,z=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,L=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=L>=1):H.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=L>=2);let k=null,j={};const ct=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Ut=new oe().fromArray(ct),Vt=new oe().fromArray(ft);function Y(F,bt,nt,ht){const At=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(F,Pt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<nt;$t++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(bt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Pt}const rt={};rt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Zi),tt(!1),N(pc),dt(i.CULL_FACE),T(Wn);function dt(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function K(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function mt(F,bt){return u[F]!==bt?(i.bindFramebuffer(F,bt),u[F]=bt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function pt(F,bt){let nt=h,ht=!1;if(F){nt=f.get(bt),nt===void 0&&(nt=[],f.set(bt,nt));const At=F.textures;if(nt.length!==At.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,$t=At.length;Pt<$t;Pt++)nt[Pt]=i.COLOR_ATTACHMENT0+Pt;nt.length=At.length,ht=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(nt)}function vt(F){return d!==F?(i.useProgram(F),d=F,!0):!1}const St={[ui]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};St[lh]=i.MIN,St[uh]=i.MAX;const B={[hh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(F,bt,nt,ht,At,Pt,$t,pe,te,Bt){if(F===Wn){g===!0&&(K(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),F!==oh){if(F!==M||Bt!==C){if((p!==ui||v!==ui)&&(i.blendEquation(i.FUNC_ADD),p=ui,v=ui),Bt)switch(F){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,w=null,x=null,U=null,b.set(0,0,0),E=0,M=F,C=Bt}return}At=At||bt,Pt=Pt||nt,$t=$t||ht,(bt!==p||At!==v)&&(i.blendEquationSeparate(St[bt],St[At]),p=bt,v=At),(nt!==m||ht!==w||Pt!==x||$t!==U)&&(i.blendFuncSeparate(B[nt],B[ht],B[Pt],B[$t]),m=nt,w=ht,x=Pt,U=$t),(pe.equals(b)===!1||te!==E)&&(i.blendColor(pe.r,pe.g,pe.b,te),b.copy(pe),E=te),M=F,C=!1}function it(F,bt){F.side===pn?K(i.CULL_FACE):dt(i.CULL_FACE);let nt=F.side===Ge;bt&&(nt=!nt),tt(nt),F.blending===Yi&&F.transparent===!1?T(Wn):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const ht=F.stencilWrite;o.setTest(ht),ht&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){q!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),q=F)}function N(F){F!==ih?(dt(i.CULL_FACE),F!==_&&(F===pc?i.cullFace(i.BACK):F===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),_=F}function $(F){F!==S&&(I&&i.lineWidth(F),S=F)}function ot(F,bt,nt){F?(dt(i.POLYGON_OFFSET_FILL),(G!==bt||z!==nt)&&(i.polygonOffset(bt,nt),G=bt,z=nt)):K(i.POLYGON_OFFSET_FILL)}function lt(F){F?dt(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+D-1),k!==F&&(i.activeTexture(F),k=F)}function y(F,bt,nt){nt===void 0&&(k===null?nt=i.TEXTURE0+D-1:nt=k);let ht=j[nt];ht===void 0&&(ht={type:void 0,texture:void 0},j[nt]=ht),(ht.type!==F||ht.texture!==bt)&&(k!==nt&&(i.activeTexture(nt),k=nt),i.bindTexture(F,bt||rt[F]),ht.type=F,ht.texture=bt)}function O(){const F=j[k];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(F){Ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function Ct(F){Vt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Vt.copy(F))}function Yt(F,bt){let nt=c.get(bt);nt===void 0&&(nt=new WeakMap,c.set(bt,nt));let ht=nt.get(F);ht===void 0&&(ht=i.getUniformBlockIndex(bt,F.name),nt.set(F,ht))}function Dt(F,bt){const ht=c.get(bt).get(F);a.get(bt)!==ht&&(i.uniformBlockBinding(bt,ht,F.__bindingPointIndex),a.set(bt,ht))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,j={},u={},f=new WeakMap,h=[],d=null,g=!1,M=null,p=null,m=null,w=null,v=null,x=null,U=null,b=new qt(0,0,0),E=0,C=!1,q=null,_=null,S=null,G=null,z=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:dt,disable:K,bindFramebuffer:mt,drawBuffers:pt,useProgram:vt,setBlending:T,setMaterial:it,setFlipSided:tt,setCullFace:N,setLineWidth:$,setPolygonOffset:ot,setScissorTest:lt,activeTexture:R,bindTexture:y,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:st,texImage2D:yt,texImage3D:kt,updateUBOMapping:Yt,uniformBlockBinding:Dt,texStorage2D:Ft,texStorage3D:at,texSubImage2D:et,texSubImage3D:Et,compressedTexSubImage2D:gt,compressedTexSubImage3D:_t,scissor:ut,viewport:Ct,reset:Kt}}function al(i,t,e,n){const s=c_(n);switch(e){case iu:return i*t;case ru:return i*t;case ou:return i*t*2;case au:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case Za:return i*t*2/s.components*s.byteLength;case su:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(i,16)*Math.max(t,8)/4;case aa:case la:return Math.max(i,8)*Math.max(t,8)/2;case ha:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lu:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c_(i){switch(i){case Pn:case tu:return{byteLength:1,components:1};case Ts:case eu:case Is:return{byteLength:2,components:1};case Ya:case Ka:return{byteLength:2,components:4};case gi:case qa:case An:return{byteLength:4,components:1};case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):Lr("canvas")}function M(R,y,O){let Z=1;const st=lt(R);if((st.width>O||st.height>O)&&(Z=O/Math.max(st.width,st.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(Z*st.width),Et=Math.floor(Z*st.height);f===void 0&&(f=g(et,Et));const gt=y?g(et,Et):f;return gt.width=et,gt.height=Et,gt.getContext("2d").drawImage(R,0,0,et,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Et+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==on}function m(R){i.generateMipmap(R)}function w(R,y,O,Z,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=y;if(y===i.RED&&(O===i.FLOAT&&(et=i.R32F),O===i.HALF_FLOAT&&(et=i.R16F),O===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.R8UI),O===i.UNSIGNED_SHORT&&(et=i.R16UI),O===i.UNSIGNED_INT&&(et=i.R32UI),O===i.BYTE&&(et=i.R8I),O===i.SHORT&&(et=i.R16I),O===i.INT&&(et=i.R32I)),y===i.RG&&(O===i.FLOAT&&(et=i.RG32F),O===i.HALF_FLOAT&&(et=i.RG16F),O===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RG8UI),O===i.UNSIGNED_SHORT&&(et=i.RG16UI),O===i.UNSIGNED_INT&&(et=i.RG32UI),O===i.BYTE&&(et=i.RG8I),O===i.SHORT&&(et=i.RG16I),O===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RGB8UI),O===i.UNSIGNED_SHORT&&(et=i.RGB16UI),O===i.UNSIGNED_INT&&(et=i.RGB32UI),O===i.BYTE&&(et=i.RGB8I),O===i.SHORT&&(et=i.RGB16I),O===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),O===i.UNSIGNED_INT&&(et=i.RGBA32UI),O===i.BYTE&&(et=i.RGBA8I),O===i.SHORT&&(et=i.RGBA16I),O===i.INT&&(et=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),y===i.RGBA){const Et=st?Ar:se.getTransfer(Z);O===i.FLOAT&&(et=i.RGBA32F),O===i.HALF_FLOAT&&(et=i.RGBA16F),O===i.UNSIGNED_BYTE&&(et=Et===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(R,y){let O;return R?y===null||y===gi||y===Qi?O=i.DEPTH24_STENCIL8:y===An?O=i.DEPTH32F_STENCIL8:y===Ts&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gi||y===Qi?O=i.DEPTH_COMPONENT24:y===An?O=i.DEPTH_COMPONENT32F:y===Ts&&(O=i.DEPTH_COMPONENT16),O}function x(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function U(R){const y=R.target;y.removeEventListener("dispose",U),E(y),y.isVideoTexture&&u.delete(y)}function b(R){const y=R.target;y.removeEventListener("dispose",b),q(y)}function E(R){const y=n.get(R);if(y.__webglInit===void 0)return;const O=R.source,Z=h.get(O);if(Z){const st=Z[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(R),Object.keys(Z).length===0&&h.delete(O)}n.remove(R)}function C(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const O=R.source,Z=h.get(O);delete Z[y.__cacheKey],o.memory.textures--}function q(R){const y=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let st=0;st<y.__webglFramebuffer[Z].length;st++)i.deleteFramebuffer(y.__webglFramebuffer[Z][st]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=R.textures;for(let Z=0,st=O.length;Z<st;Z++){const et=n.get(O[Z]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(R)}let _=0;function S(){_=0}function G(){const R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function D(R,y){const O=n.get(R);if(R.isVideoTexture&&$(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(O,R,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function I(R,y){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Vt(O,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function L(R,y){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Vt(O,R,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function H(R,y){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const k={[ra]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},j={[tn]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ct={[Fh]:i.NEVER,[Vh]:i.ALWAYS,[kh]:i.LESS,[hu]:i.LEQUAL,[Bh]:i.EQUAL,[Gh]:i.GEQUAL,[zh]:i.GREATER,[Hh]:i.NOTEQUAL};function ft(R,y){if(y.type===An&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Zr||y.magFilter===Bs||y.magFilter===fi||y.minFilter===on||y.minFilter===Zr||y.minFilter===Bs||y.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,k[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,k[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,k[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,j[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Bs&&y.minFilter!==fi||y.type===An&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ut(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",U));const Z=y.source;let st=h.get(Z);st===void 0&&(st={},h.set(Z,st));const et=z(y);if(et!==R.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),st[et].usedTimes++;const Et=st[R.__cacheKey];Et!==void 0&&(st[R.__cacheKey].usedTimes--,Et.usedTimes===0&&C(y)),R.__cacheKey=et,R.__webglTexture=st[et].texture}return O}function Vt(R,y,O){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const st=Ut(R,y),et=y.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+O);const Et=n.get(et);if(et.version!==Et.__version||st===!0){e.activeTexture(i.TEXTURE0+O);const gt=se.getPrimaries(se.workingColorSpace),_t=y.colorSpace===Gn?null:se.getPrimaries(y.colorSpace),Ft=y.colorSpace===Gn||gt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let at=M(y.image,!1,s.maxTextureSize);at=ot(y,at);const yt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let ut=w(y.internalFormat,yt,kt,y.colorSpace,y.isVideoTexture);ft(Z,y);let Ct;const Yt=y.mipmaps,Dt=y.isVideoTexture!==!0,Kt=Et.__version===void 0||st===!0,F=et.dataReady,bt=x(y,at);if(y.isDepthTexture)ut=v(y.format===ts,y.type),Kt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ut,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,ut,at.width,at.height,0,yt,kt,null));else if(y.isDataTexture)if(Yt.length>0){Dt&&Kt&&e.texStorage2D(i.TEXTURE_2D,bt,ut,Yt[0].width,Yt[0].height);for(let nt=0,ht=Yt.length;nt<ht;nt++)Ct=Yt[nt],Dt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,yt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,nt,ut,Ct.width,Ct.height,0,yt,kt,Ct.data);y.generateMipmaps=!1}else Dt?(Kt&&e.texStorage2D(i.TEXTURE_2D,bt,ut,at.width,at.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,yt,kt,at.data)):e.texImage2D(i.TEXTURE_2D,0,ut,at.width,at.height,0,yt,kt,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,ut,Yt[0].width,Yt[0].height,at.depth);for(let nt=0,ht=Yt.length;nt<ht;nt++)if(Ct=Yt[nt],y.format!==cn)if(yt!==null)if(Dt){if(F)if(y.layerUpdates.size>0){const At=al(Ct.width,Ct.height,y.format,y.type);for(const Pt of y.layerUpdates){const $t=Ct.data.subarray(Pt*At/Ct.data.BYTES_PER_ELEMENT,(Pt+1)*At/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Pt,Ct.width,Ct.height,1,yt,$t,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Ct.width,Ct.height,at.depth,yt,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,ut,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Ct.width,Ct.height,at.depth,yt,kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,ut,Ct.width,Ct.height,at.depth,0,yt,kt,Ct.data)}else{Dt&&Kt&&e.texStorage2D(i.TEXTURE_2D,bt,ut,Yt[0].width,Yt[0].height);for(let nt=0,ht=Yt.length;nt<ht;nt++)Ct=Yt[nt],y.format!==cn?yt!==null?Dt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,yt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,ut,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,yt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,nt,ut,Ct.width,Ct.height,0,yt,kt,Ct.data)}else if(y.isDataArrayTexture)if(Dt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,ut,at.width,at.height,at.depth),F)if(y.layerUpdates.size>0){const nt=al(at.width,at.height,y.format,y.type);for(const ht of y.layerUpdates){const At=at.data.subarray(ht*nt/at.data.BYTES_PER_ELEMENT,(ht+1)*nt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,at.width,at.height,1,yt,kt,At)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,at.width,at.height,at.depth,0,yt,kt,at.data);else if(y.isData3DTexture)Dt?(Kt&&e.texStorage3D(i.TEXTURE_3D,bt,ut,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,ut,at.width,at.height,at.depth,0,yt,kt,at.data);else if(y.isFramebufferTexture){if(Kt)if(Dt)e.texStorage2D(i.TEXTURE_2D,bt,ut,at.width,at.height);else{let nt=at.width,ht=at.height;for(let At=0;At<bt;At++)e.texImage2D(i.TEXTURE_2D,At,ut,nt,ht,0,yt,kt,null),nt>>=1,ht>>=1}}else if(Yt.length>0){if(Dt&&Kt){const nt=lt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,bt,ut,nt.width,nt.height)}for(let nt=0,ht=Yt.length;nt<ht;nt++)Ct=Yt[nt],Dt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt,kt,Ct):e.texImage2D(i.TEXTURE_2D,nt,ut,yt,kt,Ct);y.generateMipmaps=!1}else if(Dt){if(Kt){const nt=lt(at);e.texStorage2D(i.TEXTURE_2D,bt,ut,nt.width,nt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,kt,at)}else e.texImage2D(i.TEXTURE_2D,0,ut,yt,kt,at);p(y)&&m(Z),Et.__version=et.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Y(R,y,O){if(y.image.length!==6)return;const Z=Ut(R,y),st=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const et=n.get(st);if(st.version!==et.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const Et=se.getPrimaries(se.workingColorSpace),gt=y.colorSpace===Gn?null:se.getPrimaries(y.colorSpace),_t=y.colorSpace===Gn||Et===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ft=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let ht=0;ht<6;ht++)!Ft&&!at?yt[ht]=M(y.image[ht],!0,s.maxCubemapSize):yt[ht]=at?y.image[ht].image:y.image[ht],yt[ht]=ot(y,yt[ht]);const kt=yt[0],ut=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type),Yt=w(y.internalFormat,ut,Ct,y.colorSpace),Dt=y.isVideoTexture!==!0,Kt=et.__version===void 0||Z===!0,F=st.dataReady;let bt=x(y,kt);ft(i.TEXTURE_CUBE_MAP,y);let nt;if(Ft){Dt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,kt.width,kt.height);for(let ht=0;ht<6;ht++){nt=yt[ht].mipmaps;for(let At=0;At<nt.length;At++){const Pt=nt[At];y.format!==cn?ut!==null?Dt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At,0,0,Pt.width,Pt.height,ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At,0,0,Pt.width,Pt.height,ut,Ct,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At,Yt,Pt.width,Pt.height,0,ut,Ct,Pt.data)}}}else{if(nt=y.mipmaps,Dt&&Kt){nt.length>0&&bt++;const ht=lt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(at){Dt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,yt[ht].width,yt[ht].height,ut,Ct,yt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,yt[ht].width,yt[ht].height,0,ut,Ct,yt[ht].data);for(let At=0;At<nt.length;At++){const $t=nt[At].image[ht].image;Dt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At+1,0,0,$t.width,$t.height,ut,Ct,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At+1,Yt,$t.width,$t.height,0,ut,Ct,$t.data)}}else{Dt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ut,Ct,yt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Yt,ut,Ct,yt[ht]);for(let At=0;At<nt.length;At++){const Pt=nt[At];Dt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At+1,0,0,ut,Ct,Pt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,At+1,Yt,ut,Ct,Pt.image[ht])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),et.__version=st.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function rt(R,y,O,Z,st,et){const Et=r.convert(O.format,O.colorSpace),gt=r.convert(O.type),_t=w(O.internalFormat,Et,gt,O.colorSpace);if(!n.get(y).__hasExternalTextures){const at=Math.max(1,y.width>>et),yt=Math.max(1,y.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,_t,at,yt,y.depth,0,Et,gt,null):e.texImage2D(st,et,_t,at,yt,0,Et,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,st,n.get(O).__webglTexture,0,tt(y)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,st,n.get(O).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,st=Z&&Z.isDepthTexture?Z.type:null,et=v(y.stencilBuffer,st),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=tt(y);N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,et,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const Z=y.textures;for(let st=0;st<Z.length;st++){const et=Z[st],Et=r.convert(et.format,et.colorSpace),gt=r.convert(et.type),_t=w(et.internalFormat,Et,gt,et.colorSpace),Ft=tt(y);O&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,_t,y.width,y.height):N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,st=tt(y);if(y.depthTexture.format===Ki)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(y.depthTexture.format===ts)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function mt(R){const y=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",st)};Z.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");K(y.__webglFramebuffer,R)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),dt(y.__webglDepthbuffer[Z],R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),dt(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,y,O){const Z=n.get(R);y!==void 0&&rt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&mt(R)}function vt(R){const y=R.texture,O=n.get(R),Z=n.get(y);R.addEventListener("dispose",b);const st=R.textures,et=R.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),et){O.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[gt]=[];for(let _t=0;_t<y.mipmaps.length;_t++)O.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else O.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)O.__webglFramebuffer[gt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let gt=0,_t=st.length;gt<_t;gt++){const Ft=n.get(st[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&N(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){const _t=st[gt];O.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);const Ft=r.convert(_t.format,_t.colorSpace),at=r.convert(_t.type),yt=w(_t.internalFormat,Ft,at,_t.colorSpace,R.isXRRenderTarget===!0),kt=tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ft(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)rt(O.__webglFramebuffer[gt][_t],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else rt(O.__webglFramebuffer[gt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let gt=0,_t=st.length;gt<_t;gt++){const Ft=st[gt],at=n.get(Ft);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ft(i.TEXTURE_2D,Ft),rt(O.__webglFramebuffer,R,Ft,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),p(Ft)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Z.__webglTexture),ft(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)rt(O.__webglFramebuffer[_t],R,y,i.COLOR_ATTACHMENT0,gt,_t);else rt(O.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,gt,0);p(y)&&m(gt),e.unbindTexture()}R.depthBuffer&&mt(R)}function St(R){const y=R.textures;for(let O=0,Z=y.length;O<Z;O++){const st=y[O];if(p(st)){const et=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(st).__webglTexture;e.bindTexture(et,Et),m(et),e.unbindTexture()}}}const B=[],T=[];function it(R){if(R.samples>0){if(N(R)===!1){const y=R.textures,O=R.width,Z=R.height;let st=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),gt=y.length>1;if(gt)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Ft=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,st,i.NEAREST),c===!0&&(B.length=0,T.length=0,B.push(i.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(B.push(et),T.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Ft=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function tt(R){return Math.min(s.maxSamples,R.samples)}function N(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function ot(R,y){const O=R.colorSpace,Z=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Kn&&O!==Gn&&(se.getTransfer(O)===de?(Z!==cn||st!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=D,this.setTexture2DArray=I,this.setTexture3D=L,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=N}function u_(i,t){function e(n,s=Gn){let r;const o=se.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===cn)return i.RGBA;if(n===ru)return i.LUMINANCE;if(n===ou)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===vr||n===xr||n===yr||n===Mr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===ca||n===la||n===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===da)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea||n===ba||n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===Ra||n===Ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===Pa||n===La||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class h_ extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ie extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const M=new m_,p=e.getContextAttributes();let m=null,w=null;const v=[],x=[],U=new xt;let b=null;const E=new ke;E.layers.enable(1),E.viewport=new oe;const C=new ke;C.layers.enable(2),C.viewport=new oe;const q=[E,C],_=new h_;_.layers.enable(1),_.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=v[Y];return rt===void 0&&(rt=new wo,v[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=v[Y];return rt===void 0&&(rt=new wo,v[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=v[Y];return rt===void 0&&(rt=new wo,v[Y]=rt),rt.getHandSpace()};function z(Y){const rt=x.indexOf(Y.inputSource);if(rt===-1)return;const dt=v[rt];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,l||o),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",I);for(let Y=0;Y<v.length;Y++){const rt=x[Y];rt!==null&&(x[Y]=null,v[Y].disconnect(rt))}S=null,G=null,M.reset(),t.setRenderTarget(m),d=null,h=null,f=null,s=null,w=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",D),s.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const rt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new _i(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let rt=null,dt=null,K=null;p.depth&&(K=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=p.stencil?ts:Ki,dt=p.stencil?Qi:gi);const mt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new _i(h.textureWidth,h.textureHeight,{format:cn,type:Pn,depthTexture:new Eu(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(Y){for(let rt=0;rt<Y.removed.length;rt++){const dt=Y.removed[rt],K=x.indexOf(dt);K>=0&&(x[K]=null,v[K].disconnect(dt))}for(let rt=0;rt<Y.added.length;rt++){const dt=Y.added[rt];let K=x.indexOf(dt);if(K===-1){for(let pt=0;pt<v.length;pt++)if(pt>=x.length){x.push(dt),K=pt;break}else if(x[pt]===null){x[pt]=dt,K=pt;break}if(K===-1)break}const mt=v[K];mt&&mt.connect(dt)}}const L=new P,H=new P;function k(Y,rt,dt){L.setFromMatrixPosition(rt.matrixWorld),H.setFromMatrixPosition(dt.matrixWorld);const K=L.distanceTo(H),mt=rt.projectionMatrix.elements,pt=dt.projectionMatrix.elements,vt=mt[14]/(mt[10]-1),St=mt[14]/(mt[10]+1),B=(mt[9]+1)/mt[5],T=(mt[9]-1)/mt[5],it=(mt[8]-1)/mt[0],tt=(pt[8]+1)/pt[0],N=vt*it,$=vt*tt,ot=K/(-it+tt),lt=ot*-it;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const R=vt+ot,y=St+ot,O=N-lt,Z=$+(K-lt),st=B*St/y*R,et=T*St/y*R;Y.projectionMatrix.makePerspective(O,Z,st,et,R,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let rt=Y.near,dt=Y.far;M.texture!==null&&(M.depthNear>0&&(rt=M.depthNear),M.depthFar>0&&(dt=M.depthFar)),_.near=C.near=E.near=rt,_.far=C.far=E.far=dt,(S!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,G=_.far);const K=Y.parent,mt=_.cameras;j(_,K);for(let pt=0;pt<mt.length;pt++)j(mt[pt],K);mt.length===2?k(_,E,C):_.projectionMatrix.copy(E.projectionMatrix),ct(Y,_,K)};function ct(Y,rt,dt){dt===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=As*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let ft=null;function Ut(Y,rt){if(u=rt.getViewerPose(l||o),g=rt,u!==null){const dt=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let K=!1;dt.length!==_.cameras.length&&(_.cameras.length=0,K=!0);for(let pt=0;pt<dt.length;pt++){const vt=dt[pt];let St=null;if(d!==null)St=d.getViewport(vt);else{const T=f.getViewSubImage(h,vt);St=T.viewport,pt===0&&(t.setRenderTargetTextures(w,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(w))}let B=q[pt];B===void 0&&(B=new ke,B.layers.enable(pt),B.viewport=new oe,q[pt]=B),B.matrix.fromArray(vt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(vt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(St.x,St.y,St.width,St.height),pt===0&&(_.matrix.copy(B.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),K===!0&&_.cameras.push(B)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const pt=f.getDepthInformation(dt[0]);pt&&pt.isValid&&pt.texture&&M.init(t,pt,s.renderState)}}for(let dt=0;dt<v.length;dt++){const K=x[dt],mt=v[dt];K!==null&&mt!==void 0&&mt.update(K,rt,l||o)}ft&&ft(Y,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Vt=new Mu;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){ft=Y},this.dispose=function(){}}}const ri=new gn,__=new ae;function v_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),v=w.envMap,x=w.envMapRotation;v&&(p.envMap.value=v,ri.copy(x),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),p.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(ri)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const x=v.program;n.uniformBlockBinding(w,x)}function l(w,v){let x=s[w.id];x===void 0&&(g(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",p));const U=v.program;n.updateUBOMapping(w,U);const b=t.render.frame;r[w.id]!==b&&(h(w),r[w.id]=b)}function u(w){const v=f();w.__bindingPointIndex=v;const x=i.createBuffer(),U=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const v=s[w.id],x=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,E=x.length;b<E;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let q=0,_=C.length;q<_;q++){const S=C[q];if(d(S,b,q,U)===!0){const G=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let D=0;for(let I=0;I<z.length;I++){const L=z[I],H=M(L);typeof L=="number"||typeof L=="boolean"?(S.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,G+D,S.__data)):L.isMatrix3?(S.__data[0]=L.elements[0],S.__data[1]=L.elements[1],S.__data[2]=L.elements[2],S.__data[3]=0,S.__data[4]=L.elements[3],S.__data[5]=L.elements[4],S.__data[6]=L.elements[5],S.__data[7]=0,S.__data[8]=L.elements[6],S.__data[9]=L.elements[7],S.__data[10]=L.elements[8],S.__data[11]=0):(L.toArray(S.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,v,x,U){const b=w.value,E=v+"_"+x;if(U[E]===void 0)return typeof b=="number"||typeof b=="boolean"?U[E]=b:U[E]=b.clone(),!0;{const C=U[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return U[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(w){const v=w.uniforms;let x=0;const U=16;for(let E=0,C=v.length;E<C;E++){const q=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,S=q.length;_<S;_++){const G=q[_],z=Array.isArray(G.value)?G.value:[G.value];for(let D=0,I=z.length;D<I;D++){const L=z[D],H=M(L),k=x%U,j=k%H.boundary,ct=k+j;x+=j,ct!==0&&U-ct<H.storage&&(x+=U-ct),G.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=H.storage}}}const b=x%U;return b>0&&(x+=U-b),w.__size=x,w.__cache={},this}function M(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function p(w){const v=w.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class ic{constructor(t={}){const{canvas:e=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let x=!1,U=0,b=0,E=null,C=-1,q=null;const _=new oe,S=new oe;let G=null;const z=new qt(0);let D=0,I=e.width,L=e.height,H=1,k=null,j=null;const ct=new oe(0,0,I,L),ft=new oe(0,0,I,L);let Ut=!1;const Vt=new ec;let Y=!1,rt=!1;const dt=new ae,K=new ae,mt=new P,pt=new oe,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function B(){return E===null?H:1}let T=n;function it(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),T===null){const V="webgl2";if(T=it(V,A),T===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,N,$,ot,lt,R,y,O,Z,st,et,Et,gt,_t,Ft,at,yt,kt,ut,Ct,Yt,Dt,Kt,F;function bt(){tt=new wm(T),tt.init(),Dt=new u_(T,tt),N=new xm(T,tt,t,Dt),$=new a_(T),N.reverseDepthBuffer&&$.buffers.depth.setReversed(!0),ot=new Rm(T),lt=new qg,R=new l_(T,tt,$,lt,N,Dt,ot),y=new Mm(v),O=new bm(v),Z=new Ud(T),Kt=new _m(T,Z),st=new Tm(T,Z,ot,Kt),et=new Pm(T,st,Z,ot),ut=new Cm(T,N,R),at=new ym(lt),Et=new Xg(v,y,O,tt,N,Kt,at),gt=new v_(v,lt),_t=new Kg,Ft=new t_(tt),kt=new gm(v,y,O,$,et,h,c),yt=new r_(v,et,N),F=new x_(T,ot,N,$),Ct=new vm(T,tt,ot),Yt=new Am(T,tt,ot),ot.programs=Et.programs,v.capabilities=N,v.extensions=tt,v.properties=lt,v.renderLists=_t,v.shadowMap=yt,v.state=$,v.info=ot}bt();const nt=new g_(v,T);this.xr=nt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(I,L,!1))},this.getSize=function(A){return A.set(I,L)},this.setSize=function(A,V,J=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,L=V,e.width=Math.floor(A*H),e.height=Math.floor(V*H),J===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(I*H,L*H).floor()},this.setDrawingBufferSize=function(A,V,J){I=A,L=V,H=J,e.width=Math.floor(A*J),e.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,V,J,Q){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,V,J,Q),$.viewport(_.copy(ct).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,V,J,Q){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,V,J,Q),$.scissor(S.copy(ft).multiplyScalar(H).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){$.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(A=!0,V=!0,J=!0){let Q=0;if(A){let W=!1;if(E!==null){const Mt=E.texture.format;W=Mt===$a||Mt===Za||Mt===ja}if(W){const Mt=E.texture.type,Rt=Mt===Pn||Mt===gi||Mt===Ts||Mt===Qi||Mt===Ya||Mt===Ka,Lt=kt.getClearColor(),Nt=kt.getClearAlpha(),Wt=Lt.r,Xt=Lt.g,X=Lt.b;Rt?(d[0]=Wt,d[1]=Xt,d[2]=X,d[3]=Nt,T.clearBufferuiv(T.COLOR,0,d)):(g[0]=Wt,g[1]=Xt,g[2]=X,g[3]=Nt,T.clearBufferiv(T.COLOR,0,g))}else Q|=T.COLOR_BUFFER_BIT}V&&(Q|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),_t.dispose(),Ft.dispose(),lt.dispose(),y.dispose(),O.dispose(),et.dispose(),Kt.dispose(),F.dispose(),Et.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Zn),nt.removeEventListener("sessionend",$n),ue.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=ot.autoReset,V=yt.enabled,J=yt.autoUpdate,Q=yt.needsUpdate,W=yt.type;bt(),ot.autoReset=A,yt.enabled=V,yt.autoUpdate=J,yt.needsUpdate=Q,yt.type=W}function Pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const V=A.target;V.removeEventListener("dispose",$t),pe(V)}function pe(A){te(A),lt.remove(A)}function te(A){const V=lt.get(A).programs;V!==void 0&&(V.forEach(function(J){Et.releaseProgram(J)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,Q,W,Mt){V===null&&(V=vt);const Rt=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Yr(A,V,J,Q,W);$.setMaterial(Q,Rt);let Nt=J.index,Wt=1;if(Q.wireframe===!0){if(Nt=st.getWireframeAttribute(J),Nt===void 0)return;Wt=2}const Xt=J.drawRange,X=J.attributes.position;let It=Xt.start*Wt,Ot=(Xt.start+Xt.count)*Wt;Mt!==null&&(It=Math.max(It,Mt.start*Wt),Ot=Math.min(Ot,(Mt.start+Mt.count)*Wt)),Nt!==null?(It=Math.max(It,0),Ot=Math.min(Ot,Nt.count)):X!=null&&(It=Math.max(It,0),Ot=Math.min(Ot,X.count));const zt=Ot-It;if(zt<0||zt===1/0)return;Kt.setup(W,Q,Lt,J,Nt);let Jt,Ht=Ct;if(Nt!==null&&(Jt=Z.get(Nt),Ht=Yt,Ht.setIndex(Jt)),W.isMesh)Q.wireframe===!0?($.setLineWidth(Q.wireframeLinewidth*B()),Ht.setMode(T.LINES)):Ht.setMode(T.TRIANGLES);else if(W.isLine){let wt=Q.linewidth;wt===void 0&&(wt=1),$.setLineWidth(wt*B()),W.isLineSegments?Ht.setMode(T.LINES):W.isLineLoop?Ht.setMode(T.LINE_LOOP):Ht.setMode(T.LINE_STRIP)}else W.isPoints?Ht.setMode(T.POINTS):W.isSprite&&Ht.setMode(T.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const wt=W._multiDrawStarts,ee=W._multiDrawCounts,Gt=W._multiDrawCount,me=Nt?Z.get(Nt).bytesPerElement:1,_e=lt.get(Q).currentProgram.getUniforms();for(let he=0;he<Gt;he++)_e.setValue(T,"_gl_DrawID",he),Ht.render(wt[he]/me,ee[he])}else if(W.isInstancedMesh)Ht.renderInstances(It,zt,W.count);else if(J.isInstancedBufferGeometry){const wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ee=Math.min(J.instanceCount,wt);Ht.renderInstances(It,zt,ee)}else Ht.render(It,zt)};function Bt(A,V,J){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,Qn(A,V,J),A.side=qn,A.needsUpdate=!0,Qn(A,V,J),A.side=pn):Qn(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),p=Ft.get(J),p.init(V),w.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==J&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const Lt=Mt[Rt];Bt(Lt,J,W),Q.add(Lt)}else Bt(Mt,J,W),Q.add(Mt)}),w.pop(),p=null,Q},this.compileAsync=function(A,V,J=null){const Q=this.compile(A,V,J);return new Promise(W=>{function Mt(){if(Q.forEach(function(Rt){lt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){W(A);return}setTimeout(Mt,10)}tt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let le=null;function Ue(A){le&&le(A)}function Zn(){ue.stop()}function $n(){ue.start()}const ue=new Mu;ue.setAnimationLoop(Ue),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(A){le=A,nt.setAnimationLoop(A),A===null?ue.stop():ue.start()},nt.addEventListener("sessionstart",Zn),nt.addEventListener("sessionend",$n),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(V),V=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,E),p=Ft.get(A,w.length),p.init(V),w.push(p),K.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Vt.setFromProjectionMatrix(K),rt=this.localClippingEnabled,Y=at.init(this.clippingPlanes,rt),M=_t.get(A,m.length),M.init(),m.push(M),nt.enabled===!0&&nt.isPresenting===!0){const Mt=v.xr.getDepthSensingMesh();Mt!==null&&Ln(Mt,V,-1/0,v.sortObjects)}Ln(A,V,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(k,j),St=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,St&&kt.addToRenderList(M,A),this.info.render.frame++,Y===!0&&at.beginShadows();const J=p.state.shadowsArray;yt.render(J,A,V),Y===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,W=M.transmissive;if(p.setupLights(),V.isArrayCamera){const Mt=V.cameras;if(W.length>0)for(let Rt=0,Lt=Mt.length;Rt<Lt;Rt++){const Nt=Mt[Rt];rs(Q,W,A,Nt)}St&&kt.render(A);for(let Rt=0,Lt=Mt.length;Rt<Lt;Rt++){const Nt=Mt[Rt];ss(M,A,Nt,Nt.viewport)}}else W.length>0&&rs(Q,W,A,V),St&&kt.render(A),ss(M,A,V);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,V),Kt.resetDefaultState(),C=-1,q=null,w.pop(),w.length>0?(p=w[w.length-1],Y===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Ln(A,V,J,Q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Vt.intersectsSprite(A)){Q&&pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);const Rt=et.update(A),Lt=A.material;Lt.visible&&M.push(A,Rt,Lt,J,pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Vt.intersectsObject(A))){const Rt=et.update(A),Lt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),pt.copy(Rt.boundingSphere.center)),pt.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Lt)){const Nt=Rt.groups;for(let Wt=0,Xt=Nt.length;Wt<Xt;Wt++){const X=Nt[Wt],It=Lt[X.materialIndex];It&&It.visible&&M.push(A,Rt,It,J,pt.z,X)}}else Lt.visible&&M.push(A,Rt,Lt,J,pt.z,null)}}const Mt=A.children;for(let Rt=0,Lt=Mt.length;Rt<Lt;Rt++)Ln(Mt[Rt],V,J,Q)}function ss(A,V,J,Q){const W=A.opaque,Mt=A.transmissive,Rt=A.transparent;p.setupLightsView(J),Y===!0&&at.setGlobalState(v.clippingPlanes,J),Q&&$.viewport(_.copy(Q)),W.length>0&&Jn(W,V,J),Mt.length>0&&Jn(Mt,V,J),Rt.length>0&&Jn(Rt,V,J),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function rs(A,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new _i(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Is:Pn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||_;Mt.setSize(Rt.z,Rt.w);const Lt=v.getRenderTarget();v.setRenderTarget(Mt),v.getClearColor(z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),St&&kt.render(J);const Nt=v.toneMapping;v.toneMapping=Xn;const Wt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Y===!0&&at.setGlobalState(v.clippingPlanes,Q),Jn(A,J,Q),R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let X=0,It=V.length;X<It;X++){const Ot=V[X],zt=Ot.object,Jt=Ot.geometry,Ht=Ot.material,wt=Ot.group;if(Ht.side===pn&&zt.layers.test(Q.layers)){const ee=Ht.side;Ht.side=Ge,Ht.needsUpdate=!0,os(zt,J,Q,Jt,Ht,wt),Ht.side=ee,Ht.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt))}v.setRenderTarget(Lt),v.setClearColor(z,D),Wt!==void 0&&(Q.viewport=Wt),v.toneMapping=Nt}function Jn(A,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Mt=A.length;W<Mt;W++){const Rt=A[W],Lt=Rt.object,Nt=Rt.geometry,Wt=Q===null?Rt.material:Q,Xt=Rt.group;Lt.layers.test(J.layers)&&os(Lt,V,J,Nt,Wt,Xt)}}function os(A,V,J,Q,W,Mt){A.onBeforeRender(v,V,J,Q,W,Mt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,V,J,Q,A,Mt),W.transparent===!0&&W.side===pn&&W.forceSinglePass===!1?(W.side=Ge,W.needsUpdate=!0,v.renderBufferDirect(J,V,Q,W,A,Mt),W.side=qn,W.needsUpdate=!0,v.renderBufferDirect(J,V,Q,W,A,Mt),W.side=pn):v.renderBufferDirect(J,V,Q,W,A,Mt),A.onAfterRender(v,V,J,Q,W,Mt)}function Qn(A,V,J){V.isScene!==!0&&(V=vt);const Q=lt.get(A),W=p.state.lights,Mt=p.state.shadowsArray,Rt=W.state.version,Lt=Et.getParameters(A,W.state,Mt,V,J),Nt=Et.getProgramCacheKey(Lt);let Wt=Q.programs;Q.environment=A.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(A.isMeshStandardMaterial?O:y).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",$t),Wt=new Map,Q.programs=Wt);let Xt=Wt.get(Nt);if(Xt!==void 0){if(Q.currentProgram===Xt&&Q.lightsStateVersion===Rt)return cs(A,Lt),Xt}else Lt.uniforms=Et.getUniforms(A),A.onBeforeCompile(Lt,v),Xt=Et.acquireProgram(Lt,Nt),Wt.set(Nt,Xt),Q.uniforms=Lt.uniforms;const X=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(X.clippingPlanes=at.uniform),cs(A,Lt),Q.needsLights=Kr(A),Q.lightsStateVersion=Rt,Q.needsLights&&(X.ambientLightColor.value=W.state.ambient,X.lightProbe.value=W.state.probe,X.directionalLights.value=W.state.directional,X.directionalLightShadows.value=W.state.directionalShadow,X.spotLights.value=W.state.spot,X.spotLightShadows.value=W.state.spotShadow,X.rectAreaLights.value=W.state.rectArea,X.ltc_1.value=W.state.rectAreaLTC1,X.ltc_2.value=W.state.rectAreaLTC2,X.pointLights.value=W.state.point,X.pointLightShadows.value=W.state.pointShadow,X.hemisphereLights.value=W.state.hemi,X.directionalShadowMap.value=W.state.directionalShadowMap,X.directionalShadowMatrix.value=W.state.directionalShadowMatrix,X.spotShadowMap.value=W.state.spotShadowMap,X.spotLightMatrix.value=W.state.spotLightMatrix,X.spotLightMap.value=W.state.spotLightMap,X.pointShadowMap.value=W.state.pointShadowMap,X.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Xt,Q.uniformsList=null,Xt}function as(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=br.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function cs(A,V){const J=lt.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Yr(A,V,J,Q,W){V.isScene!==!0&&(V=vt),R.resetTextureUnits();const Mt=V.fog,Rt=Q.isMeshStandardMaterial?V.environment:null,Lt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Kn,Nt=(Q.isMeshStandardMaterial?O:y).get(Q.envMap||Rt),Wt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),X=!!J.morphAttributes.position,It=!!J.morphAttributes.normal,Ot=!!J.morphAttributes.color;let zt=Xn;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(zt=v.toneMapping);const Jt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ht=Jt!==void 0?Jt.length:0,wt=lt.get(Q),ee=p.state.lights;if(Y===!0&&(rt===!0||A!==q)){const Me=A===q&&Q.id===C;at.setState(Q,A,Me)}let Gt=!1;Q.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ee.state.version||wt.outputColorSpace!==Lt||W.isBatchedMesh&&wt.batching===!1||!W.isBatchedMesh&&wt.batching===!0||W.isBatchedMesh&&wt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&wt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&wt.instancing===!1||!W.isInstancedMesh&&wt.instancing===!0||W.isSkinnedMesh&&wt.skinning===!1||!W.isSkinnedMesh&&wt.skinning===!0||W.isInstancedMesh&&wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&wt.instancingMorph===!1&&W.morphTexture!==null||wt.envMap!==Nt||Q.fog===!0&&wt.fog!==Mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==at.numPlanes||wt.numIntersection!==at.numIntersection)||wt.vertexAlphas!==Wt||wt.vertexTangents!==Xt||wt.morphTargets!==X||wt.morphNormals!==It||wt.morphColors!==Ot||wt.toneMapping!==zt||wt.morphTargetsCount!==Ht)&&(Gt=!0):(Gt=!0,wt.__version=Q.version);let me=wt.currentProgram;Gt===!0&&(me=Qn(Q,V,W));let _e=!1,he=!1,hn=!1;const ne=me.getUniforms(),We=wt.uniforms;if($.useProgram(me.program)&&(_e=!0,he=!0,hn=!0),Q.id!==C&&(C=Q.id,he=!0),_e||q!==A){N.reverseDepthBuffer?(dt.copy(A.projectionMatrix),cd(dt),ld(dt),ne.setValue(T,"projectionMatrix",dt)):ne.setValue(T,"projectionMatrix",A.projectionMatrix),ne.setValue(T,"viewMatrix",A.matrixWorldInverse);const Me=ne.map.cameraPosition;Me!==void 0&&Me.setValue(T,mt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&ne.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ne.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,he=!0,hn=!0)}if(W.isSkinnedMesh){ne.setOptional(T,W,"bindMatrix"),ne.setOptional(T,W,"bindMatrixInverse");const Me=W.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ne.setValue(T,"boneTexture",Me.boneTexture,R))}W.isBatchedMesh&&(ne.setOptional(T,W,"batchingTexture"),ne.setValue(T,"batchingTexture",W._matricesTexture,R),ne.setOptional(T,W,"batchingIdTexture"),ne.setValue(T,"batchingIdTexture",W._indirectTexture,R),ne.setOptional(T,W,"batchingColorTexture"),W._colorsTexture!==null&&ne.setValue(T,"batchingColorTexture",W._colorsTexture,R));const Dn=J.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ut.update(W,J,me),(he||wt.receiveShadow!==W.receiveShadow)&&(wt.receiveShadow=W.receiveShadow,ne.setValue(T,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(We.envMap.value=Nt,We.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(We.envMapIntensity.value=V.environmentIntensity),he&&(ne.setValue(T,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&ls(We,hn),Mt&&Q.fog===!0&&gt.refreshFogUniforms(We,Mt),gt.refreshMaterialUniforms(We,Q,H,L,p.state.transmissionRenderTarget[A.id]),br.upload(T,as(wt),We,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(br.upload(T,as(wt),We,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ne.setValue(T,"center",W.center),ne.setValue(T,"modelViewMatrix",W.modelViewMatrix),ne.setValue(T,"normalMatrix",W.normalMatrix),ne.setValue(T,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Me=Q.uniformsGroups;for(let In=0,jr=Me.length;In<jr;In++){const us=Me[In];F.update(us,me),F.bind(us,me)}}return me}function ls(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Kr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,V,J){lt.get(A.texture).__webglTexture=V,lt.get(A.depthTexture).__webglTexture=J;const Q=lt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const J=lt.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){E=A,U=V,b=J;let Q=!0,W=null,Mt=!1,Rt=!1;if(A){const Nt=lt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Nt.__hasExternalTextures)R.rebindTextures(A,lt.get(A.texture).__webglTexture,lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const X=A.depthTexture;if(Nt.__boundDepthTexture!==X){if(X!==null&&lt.has(X)&&(A.width!==X.image.width||A.height!==X.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Rt=!0);const Xt=lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?W=Xt[V][J]:W=Xt[V],Mt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?W=lt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[J]:W=Xt,_.copy(A.viewport),S.copy(A.scissor),G=A.scissorTest}else _.copy(ct).multiplyScalar(H).floor(),S.copy(ft).multiplyScalar(H).floor(),G=Ut;if($.bindFramebuffer(T.FRAMEBUFFER,W)&&Q&&$.drawBuffers(A,W),$.viewport(_),$.scissor(S),$.setScissorTest(G),Mt){const Nt=lt.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Nt.__webglTexture,J)}else if(Rt){const Nt=lt.get(A.texture),Wt=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,J||0,Wt)}C=-1},this.readRenderTargetPixels=function(A,V,J,Q,W,Mt,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){$.bindFramebuffer(T.FRAMEBUFFER,Lt);try{const Nt=A.texture,Wt=Nt.format,Xt=Nt.type;if(!N.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-W&&T.readPixels(V,J,Q,W,Dt.convert(Wt),Dt.convert(Xt),Mt)}finally{const Nt=E!==null?lt.get(E).__webglFramebuffer:null;$.bindFramebuffer(T.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,Q,W,Mt,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){const Nt=A.texture,Wt=Nt.format,Xt=Nt.type;if(!N.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-W){$.bindFramebuffer(T.FRAMEBUFFER,Lt);const X=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,X),T.bufferData(T.PIXEL_PACK_BUFFER,Mt.byteLength,T.STREAM_READ),T.readPixels(V,J,Q,W,Dt.convert(Wt),Dt.convert(Xt),0);const It=E!==null?lt.get(E).__webglFramebuffer:null;$.bindFramebuffer(T.FRAMEBUFFER,It);const Ot=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ad(T,Ot,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,X),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Mt),T.deleteBuffer(X),T.deleteSync(Ot),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,J=0){A.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-J),W=Math.floor(A.image.width*Q),Mt=Math.floor(A.image.height*Q),Rt=V!==null?V.x:0,Lt=V!==null?V.y:0;R.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,Rt,Lt,W,Mt),$.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,Q=null,W=0){A.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,J=null);let Mt,Rt,Lt,Nt,Wt,Xt;J!==null?(Mt=J.max.x-J.min.x,Rt=J.max.y-J.min.y,Lt=J.min.x,Nt=J.min.y):(Mt=A.image.width,Rt=A.image.height,Lt=0,Nt=0),Q!==null?(Wt=Q.x,Xt=Q.y):(Wt=0,Xt=0);const X=Dt.convert(V.format),It=Dt.convert(V.type);R.setTexture2D(V,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const Ot=T.getParameter(T.UNPACK_ROW_LENGTH),zt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Jt=T.getParameter(T.UNPACK_SKIP_PIXELS),Ht=T.getParameter(T.UNPACK_SKIP_ROWS),wt=T.getParameter(T.UNPACK_SKIP_IMAGES),ee=A.isCompressedTexture?A.mipmaps[W]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ee.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ee.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,W,Wt,Xt,Mt,Rt,X,It,ee.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,W,Wt,Xt,ee.width,ee.height,X,ee.data):T.texSubImage2D(T.TEXTURE_2D,W,Wt,Xt,Mt,Rt,X,It,ee),T.pixelStorei(T.UNPACK_ROW_LENGTH,Ot),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,zt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Jt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt),W===0&&V.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J=null,Q=null,W=0){A.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0);let Mt,Rt,Lt,Nt,Wt,Xt,X,It,Ot;const zt=A.isCompressedTexture?A.mipmaps[W]:A.image;J!==null?(Mt=J.max.x-J.min.x,Rt=J.max.y-J.min.y,Lt=J.max.z-J.min.z,Nt=J.min.x,Wt=J.min.y,Xt=J.min.z):(Mt=zt.width,Rt=zt.height,Lt=zt.depth,Nt=0,Wt=0,Xt=0),Q!==null?(X=Q.x,It=Q.y,Ot=Q.z):(X=0,It=0,Ot=0);const Jt=Dt.convert(V.format),Ht=Dt.convert(V.type);let wt;if(V.isData3DTexture)R.setTexture3D(V,0),wt=T.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)R.setTexture2DArray(V,0),wt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const ee=T.getParameter(T.UNPACK_ROW_LENGTH),Gt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),me=T.getParameter(T.UNPACK_SKIP_PIXELS),_e=T.getParameter(T.UNPACK_SKIP_ROWS),he=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,zt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,zt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Nt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(wt,W,X,It,Ot,Mt,Rt,Lt,Jt,Ht,zt.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(wt,W,X,It,Ot,Mt,Rt,Lt,Jt,zt.data):T.texSubImage3D(wt,W,X,It,Ot,Mt,Rt,Lt,Jt,Ht,zt),T.pixelStorei(T.UNPACK_ROW_LENGTH,ee),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Gt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,me),T.pixelStorei(T.UNPACK_SKIP_ROWS,_e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,he),W===0&&V.generateMipmaps&&T.generateMipmap(wt),$.unbindTexture()},this.initRenderTarget=function(A){lt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){U=0,b=0,E=null,$.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ja?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Hr?"display-p3":"srgb"}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rc extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ru extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dr=new P,Ir=new P,cl=new ae,gs=new Us,or=new Ei,To=new P,ll=new P;class y_ extends be{constructor(t=new ye,e=new Ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ir);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;cl.copy(s).invert(),gs.copy(t.ray).applyMatrix4(cl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=d,p=g-1;M<p;M+=l){const m=u.getX(M),w=u.getX(M+1),v=ar(this,t,gs,c,m,w);v&&e.push(v)}if(this.isLineLoop){const M=u.getX(g-1),p=u.getX(d),m=ar(this,t,gs,c,M,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=d,p=g-1;M<p;M+=l){const m=ar(this,t,gs,c,M,M+1);m&&e.push(m)}if(this.isLineLoop){const M=ar(this,t,gs,c,g-1,d);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ar(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ir,To,ll)>n)return;To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);if(!(c<t.near||c>t.far))return{distance:c,point:ll.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ul=new P,hl=new P;class M_ extends y_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ul.fromBufferAttribute(e,s),hl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ul.distanceTo(hl);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rs extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dl=new ae,Ua=new Us,cr=new Ei,lr=new P;class Ur extends be{constructor(t=new ye,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;dl.copy(s).invert(),Ua.copy(t.ray).applyMatrix4(dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,M=d;g<M;g++){const p=l.getX(g);lr.fromBufferAttribute(f,p),fl(lr,p,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,M=d;g<M;g++)lr.fromBufferAttribute(f,g),fl(lr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fl(i,t,e,n,s,r,o){const a=Ua.distanceSqToPoint(i);if(a<e){const c=new P;Ua.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oc extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class S_ extends oc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ur=new P,Ao=new ac,Ro=new ac,Co=new ac;class E_ extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),l=ur);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Ao.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,M,p),Ro.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,M,p),Co.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ro.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Co.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ao.calc(c),Ro.calc(c),Co.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function b_(i,t){const e=1-i;return e*e*t}function w_(i,t){return 2*(1-i)*i*t}function T_(i,t){return i*i*t}function Ss(i,t,e,n){return b_(i,t)+w_(i,e)+T_(i,n)}function A_(i,t){const e=1-i;return e*e*e*t}function R_(i,t){const e=1-i;return 3*e*e*i*t}function C_(i,t){return 3*(1-i)*i*i*t}function P_(i,t){return i*i*i*t}function Es(i,t,e,n,s){return A_(i,t)+R_(i,e)+C_(i,n)+P_(i,s)}class Cu extends xn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,s.x,r.x,o.x,a.x),Es(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L_ extends xn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,s.x,r.x,o.x,a.x),Es(t,s.y,r.y,o.y,a.y),Es(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pu extends xn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D_ extends xn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends xn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I_ extends xn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y),Ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(pl(a,c.x,l.x,u.x,f.x),pl(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:S_,CatmullRomCurve3:E_,CubicBezierCurve:Cu,CubicBezierCurve3:L_,EllipseCurve:oc,LineCurve:Pu,LineCurve3:D_,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:I_,SplineCurve:Du});class U_ extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Na[s.type]().fromJSON(s))}return this}}class Oa extends U_{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pu(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Lu(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Cu(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new oc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cc extends ye{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new P,h=new xt,d=new P,g=new P,M=new P;let p=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let w=0;w<=e;w++){const v=n+w*u*s,x=Math.sin(v),U=Math.cos(v);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*x,f.y=t[b].y,f.z=t[b].x*U,o.push(f.x,f.y,f.z),h.x=w/e,h.y=b/(t.length-1),a.push(h.x,h.y);const E=c[3*b+0]*x,C=c[3*b+1],q=c[3*b+0]*U;l.push(E,C,q)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){const x=v+w*t.length,U=x,b=x+t.length,E=x+t.length+1,C=x+1;r.push(U,b,C),r.push(E,C,b)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.points,t.segments,t.phiStart,t.phiLength)}}class lc extends cc{constructor(t=1,e=1,n=4,s=8){const r=new Oa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new lc(t.radius,t.length,t.capSegments,t.radialSegments)}}class fe extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],p=n/2;let m=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function w(){const x=new P,U=new P;let b=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const q=[],_=C/r,S=_*(e-t)+t;for(let G=0;G<=s;G++){const z=G/s,D=z*c+a,I=Math.sin(D),L=Math.cos(D);U.x=S*I,U.y=-_*n+p,U.z=S*L,f.push(U.x,U.y,U.z),x.set(I,E,L).normalize(),h.push(x.x,x.y,x.z),d.push(z,1-_),q.push(g++)}M.push(q)}for(let C=0;C<s;C++)for(let q=0;q<r;q++){const _=M[q][C],S=M[q+1][C],G=M[q+1][C+1],z=M[q][C+1];t>0&&(u.push(_,S,z),b+=3),e>0&&(u.push(S,G,z),b+=3)}l.addGroup(m,b,0),m+=b}function v(x){const U=g,b=new xt,E=new P;let C=0;const q=x===!0?t:e,_=x===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,p*_,0),h.push(0,_,0),d.push(.5,.5),g++;const S=g;for(let G=0;G<=s;G++){const D=G/s*c+a,I=Math.cos(D),L=Math.sin(D);E.x=q*L,E.y=p*_,E.z=q*I,f.push(E.x,E.y,E.z),h.push(0,_,0),b.x=I*.5+.5,b.y=L*.5*_+.5,d.push(b.x,b.y),g++}for(let G=0;G<s;G++){const z=U+G,D=S+G;x===!0?u.push(D,D+1,z):u.push(D+1,D,z),C+=3}l.addGroup(m,C,x===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _n extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uc extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const v=new P,x=new P,U=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],x),d(e[b+2],U),c(v,x,U,w)}function c(w,v,x,U){const b=U+1,E=[];for(let C=0;C<=b;C++){E[C]=[];const q=w.clone().lerp(x,C/b),_=v.clone().lerp(x,C/b),S=b-C;for(let G=0;G<=S;G++)G===0&&C===b?E[C][G]=q:E[C][G]=q.clone().lerp(_,G/S)}for(let C=0;C<b;C++)for(let q=0;q<2*(b-C)-1;q++){const _=Math.floor(q/2);q%2===0?(h(E[C][_+1]),h(E[C+1][_]),h(E[C][_])):(h(E[C][_+1]),h(E[C+1][_+1]),h(E[C+1][_]))}}function l(w){const v=new P;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(w),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function u(){const w=new P;for(let v=0;v<r.length;v+=3){w.x=r[v+0],w.y=r[v+1],w.z=r[v+2];const x=p(w)/2/Math.PI+.5,U=m(w)/Math.PI+.5;o.push(x,1-U)}g(),f()}function f(){for(let w=0;w<o.length;w+=6){const v=o[w+0],x=o[w+2],U=o[w+4],b=Math.max(v,x,U),E=Math.min(v,x,U);b>.9&&E<.1&&(v<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),U<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function d(w,v){const x=w*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const w=new P,v=new P,x=new P,U=new P,b=new xt,E=new xt,C=new xt;for(let q=0,_=0;q<r.length;q+=9,_+=6){w.set(r[q+0],r[q+1],r[q+2]),v.set(r[q+3],r[q+4],r[q+5]),x.set(r[q+6],r[q+7],r[q+8]),b.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),U.copy(w).add(v).add(x).divideScalar(3);const S=p(U);M(b,_+0,w,S),M(E,_+2,v,S),M(C,_+4,x,S)}}function M(w,v,x,U){U<0&&w.x===1&&(o[v]=w.x-1),x.x===0&&x.z===0&&(o[v]=U/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.vertices,t.indices,t.radius,t.details)}}class Iu extends Oa{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Oa().fromJSON(s))}return this}}const N_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Uu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(n&&(r=z_(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Cs(r,o,e,a,c,d,0),o}};function Uu(i,t,e,n,s){let r,o;if(s===$_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ml(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ml(r,i[r],i[r+1],o);return o&&Wr(o,o.next)&&(Ls(o),o=o.next),o}function vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&X_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?F_(i,n,s,r):O_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=k_(vi(i),t,e),Cs(i,t,e,n,s,r,2)):o===2&&B_(i,t,e,n,s,r):Cs(vi(i),t,e,n,s,r,1);break}}}function O_(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Wi(s,a,r,c,o,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,M=a>c?a>l?a:l:c>l?c:l,p=u>f?u>h?u:h:f>h?f:h,m=Fa(d,g,t,e,n),w=Fa(M,p,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=m&&x&&x.z<=w;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Wi(a,u,c,f,l,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Wi(a,u,c,f,l,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Wi(a,u,c,f,l,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Wi(a,u,c,f,l,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function k_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Wr(s,r)&&Nu(s,n,n.next,r)&&Ps(s,r)&&Ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ls(n),Ls(n.next),n=i=r),n=n.next}while(n!==i);return vi(n)}function B_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let c=Ou(o,a);o=vi(o,o.next),c=vi(c,c.next),Cs(o,t,e,n,s,r,0),Cs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function z_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Uu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Y_(l));for(s.sort(H_),r=0;r<s.length;r++)e=G_(s[r],e);return e}function H_(i,t){return i.x-t.x}function G_(i,t){const e=V_(i,t);if(!e)return t;const n=Ou(e,i);return vi(n,n.next),vi(e,e.next)}function V_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Wi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Ps(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&W_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function W_(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function X_(i,t,e,n){let s=i;do s.z===0&&(s.z=Fa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q_(s)}function q_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Fa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Y_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function K_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!j_(i,t)&&(Ps(i,t)&&Ps(t,i)&&Z_(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Wr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wr(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){const s=dr(ge(i,t,e)),r=dr(ge(i,t,n)),o=dr(ge(e,n,i)),a=dr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&hr(i,e,t)||r===0&&hr(i,n,t)||o===0&&hr(e,i,n)||a===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function dr(i){return i>0?1:i<0?-1:0}function j_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Z_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ou(i,t){const e=new ka(i.i,i.x,i.y),n=new ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ml(i,t,e,n){const s=new ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ka(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class bs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];gl(t),_l(n,t);let o=t.length;e.forEach(gl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,_l(n,e[c]);const a=N_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function gl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _l(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class hc extends ye{constructor(t=new Iu([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:J_;let v,x=!1,U,b,E,C;m&&(v=m.getSpacedPoints(u),x=!0,h=!1,U=m.computeFrenetFrames(u,!1),b=new P,E=new P,C=new P),h||(p=0,d=0,g=0,M=0);const q=a.extractPoints(l);let _=q.shape;const S=q.holes;if(!bs.isClockWise(_)){_=_.reverse();for(let B=0,T=S.length;B<T;B++){const it=S[B];bs.isClockWise(it)&&(S[B]=it.reverse())}}const z=bs.triangulateShape(_,S),D=_;for(let B=0,T=S.length;B<T;B++){const it=S[B];_=_.concat(it)}function I(B,T,it){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(T,it)}const L=_.length,H=z.length;function k(B,T,it){let tt,N,$;const ot=B.x-T.x,lt=B.y-T.y,R=it.x-B.x,y=it.y-B.y,O=ot*ot+lt*lt,Z=ot*y-lt*R;if(Math.abs(Z)>Number.EPSILON){const st=Math.sqrt(O),et=Math.sqrt(R*R+y*y),Et=T.x-lt/st,gt=T.y+ot/st,_t=it.x-y/et,Ft=it.y+R/et,at=((_t-Et)*y-(Ft-gt)*R)/(ot*y-lt*R);tt=Et+ot*at-B.x,N=gt+lt*at-B.y;const yt=tt*tt+N*N;if(yt<=2)return new xt(tt,N);$=Math.sqrt(yt/2)}else{let st=!1;ot>Number.EPSILON?R>Number.EPSILON&&(st=!0):ot<-Number.EPSILON?R<-Number.EPSILON&&(st=!0):Math.sign(lt)===Math.sign(y)&&(st=!0),st?(tt=-lt,N=ot,$=Math.sqrt(O)):(tt=ot,N=lt,$=Math.sqrt(O/2))}return new xt(tt/$,N/$)}const j=[];for(let B=0,T=D.length,it=T-1,tt=B+1;B<T;B++,it++,tt++)it===T&&(it=0),tt===T&&(tt=0),j[B]=k(D[B],D[it],D[tt]);const ct=[];let ft,Ut=j.concat();for(let B=0,T=S.length;B<T;B++){const it=S[B];ft=[];for(let tt=0,N=it.length,$=N-1,ot=tt+1;tt<N;tt++,$++,ot++)$===N&&($=0),ot===N&&(ot=0),ft[tt]=k(it[tt],it[$],it[ot]);ct.push(ft),Ut=Ut.concat(ft)}for(let B=0;B<p;B++){const T=B/p,it=d*Math.cos(T*Math.PI/2),tt=g*Math.sin(T*Math.PI/2)+M;for(let N=0,$=D.length;N<$;N++){const ot=I(D[N],j[N],tt);K(ot.x,ot.y,-it)}for(let N=0,$=S.length;N<$;N++){const ot=S[N];ft=ct[N];for(let lt=0,R=ot.length;lt<R;lt++){const y=I(ot[lt],ft[lt],tt);K(y.x,y.y,-it)}}}const Vt=g+M;for(let B=0;B<L;B++){const T=h?I(_[B],Ut[B],Vt):_[B];x?(E.copy(U.normals[0]).multiplyScalar(T.x),b.copy(U.binormals[0]).multiplyScalar(T.y),C.copy(v[0]).add(E).add(b),K(C.x,C.y,C.z)):K(T.x,T.y,0)}for(let B=1;B<=u;B++)for(let T=0;T<L;T++){const it=h?I(_[T],Ut[T],Vt):_[T];x?(E.copy(U.normals[B]).multiplyScalar(it.x),b.copy(U.binormals[B]).multiplyScalar(it.y),C.copy(v[B]).add(E).add(b),K(C.x,C.y,C.z)):K(it.x,it.y,f/u*B)}for(let B=p-1;B>=0;B--){const T=B/p,it=d*Math.cos(T*Math.PI/2),tt=g*Math.sin(T*Math.PI/2)+M;for(let N=0,$=D.length;N<$;N++){const ot=I(D[N],j[N],tt);K(ot.x,ot.y,f+it)}for(let N=0,$=S.length;N<$;N++){const ot=S[N];ft=ct[N];for(let lt=0,R=ot.length;lt<R;lt++){const y=I(ot[lt],ft[lt],tt);x?K(y.x,y.y+v[u-1].y,v[u-1].x+it):K(y.x,y.y,f+it)}}}Y(),rt();function Y(){const B=s.length/3;if(h){let T=0,it=L*T;for(let tt=0;tt<H;tt++){const N=z[tt];mt(N[2]+it,N[1]+it,N[0]+it)}T=u+p*2,it=L*T;for(let tt=0;tt<H;tt++){const N=z[tt];mt(N[0]+it,N[1]+it,N[2]+it)}}else{for(let T=0;T<H;T++){const it=z[T];mt(it[2],it[1],it[0])}for(let T=0;T<H;T++){const it=z[T];mt(it[0]+L*u,it[1]+L*u,it[2]+L*u)}}n.addGroup(B,s.length/3-B,0)}function rt(){const B=s.length/3;let T=0;dt(D,T),T+=D.length;for(let it=0,tt=S.length;it<tt;it++){const N=S[it];dt(N,T),T+=N.length}n.addGroup(B,s.length/3-B,1)}function dt(B,T){let it=B.length;for(;--it>=0;){const tt=it;let N=it-1;N<0&&(N=B.length-1);for(let $=0,ot=u+p*2;$<ot;$++){const lt=L*$,R=L*($+1),y=T+tt+lt,O=T+N+lt,Z=T+N+R,st=T+tt+R;pt(y,O,Z,st)}}}function K(B,T,it){c.push(B),c.push(T),c.push(it)}function mt(B,T,it){vt(B),vt(T),vt(it);const tt=s.length/3,N=w.generateTopUV(n,s,tt-3,tt-2,tt-1);St(N[0]),St(N[1]),St(N[2])}function pt(B,T,it,tt){vt(B),vt(T),vt(tt),vt(T),vt(it),vt(tt);const N=s.length/3,$=w.generateSideWallUV(n,s,N-6,N-3,N-2,N-1);St($[0]),St($[1]),St($[3]),St($[1]),St($[2]),St($[3])}function vt(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function St(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Q_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Na[s.type]().fromJSON(s)),new hc(n,t.options)}}const J_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new xt(r,o),new xt(a,c),new xt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-f),new xt(h,1-g),new xt(M,1-m)]:[new xt(a,1-c),new xt(u,1-f),new xt(d,1-g),new xt(p,1-m)]}};function Q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xr extends uc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class je extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,h=new P,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){const w=[],v=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){const b=U/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(b+x,1-v),w.push(l++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const v=u[m][w+1],x=u[m][w],U=u[m+1][w],b=u[m+1][w+1];(m!==0||o>0)&&d.push(v,x,b),(m!==n-1||c<Math.PI)&&d.push(x,U,b)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,f=new P,h=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const M=g/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const M=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(M,p,w),o.push(p,m,w)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qe extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qr extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fu extends qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Po=new ae,vl=new P,xl=new P;class ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(vl),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new ae,_s=new P,Lo=new P;class t0 extends ku{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),Lo.copy(n.position),Lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lo),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class e0 extends qr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n0 extends ku{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nr extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bu extends qr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class i0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ml();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ml(){return performance.now()}const Sl=new ae;class s0{constructor(t,e,n=0,s=1/0){this.ray=new Us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sl),this}intersectObject(t,e=!0,n=[]){return Ba(t,this,n,e),n.sort(El),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ba(t[s],this,n,e);return n.sort(El),n}}function El(i,t){return i.distance-t.distance}function Ba(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ba(r[o],t,e,!0)}}class bl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r0 extends M_{constructor(t=10,e=10,n=4473924,s=8947848){n=new qt(n),s=new qt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const M=h===r?n:s;M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3,M.toArray(l,d),d+=3}const u=new ye;u.setAttribute("position",new ce(c,3)),u.setAttribute("color",new ce(l,3));const f=new Ru({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class o0 extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);function zu(i,t={}){const e=t.charset??" .:-=+*#%@",n=t.fontSize??12,s=t.color??"#7cfc9a",r=t.colorize??!0,o=Math.max(1,Math.round(n*.6)),a=n,c=e.length,l=document.createElement("canvas"),u=l.getContext("2d"),f=document.createElement("canvas"),h=f.getContext("2d",{willReadFrequently:!0});let d=0,g=0,M=0,p=0,m=new Float32Array(0);function w(K,mt){d=K,g=mt,i.setPixelRatio(1),i.setSize(K,mt,!1),M=Math.max(1,Math.floor(K/o)),p=Math.max(1,Math.floor(mt/a)),f.width=M,f.height=p,m=new Float32Array(M*p);const pt=Math.min(window.devicePixelRatio||1,2);l.width=Math.floor(K*pt),l.height=Math.floor(mt*pt),l.style.width=K+"px",l.style.height=mt+"px",u.setTransform(pt,0,0,pt,0,0),u.font=`${n}px "Courier New", monospace`,u.textBaseline="top"}function v(K,mt){i.render(K,mt),h.clearRect(0,0,M,p),h.drawImage(i.domElement,0,0,M,p);const pt=h.getImageData(0,0,M,p).data;u.fillStyle="#000",u.fillRect(0,0,d,g),u.fillStyle=s;for(let vt=0;vt<p;vt++)for(let St=0;St<M;St++){const B=vt*M+St,T=B*4,it=pt[T],tt=pt[T+1],N=pt[T+2],$=(.3*it+.59*tt+.11*N)/255;if(m[B]=$,$<.035)continue;let ot=Math.floor($*c);ot>=c&&(ot=c-1);const lt=e[ot];if(lt!==" "){if(r){const y=255/(Math.max(it,tt,N)||1);u.fillStyle=`rgb(${Math.round(it*y)},${Math.round(tt*y)},${Math.round(N*y)})`}u.fillText(lt,St*o,vt*a)}}}const x=new P,U=new He,b=12,E=a*4,C=.5,q=260;let _=0;function S(K,mt){const pt=Math.abs(K),vt=Math.abs(mt);return pt>vt*2?"-":vt>pt*2?"|":K*mt<0?"/":"\\"}function G(K,mt){const pt=Math.floor(K/o),vt=Math.floor(mt/a);return pt<0||pt>=M||vt<0||vt>=p?!0:m[vt*M+pt]>.06}function z(K,mt,pt=0,vt=0){mt.getWorldQuaternion(U).invert();const St=d*.5,B=g*.5,T=Math.hypot(St,B)||1,it=-o*.5,tt=-a*.5,N=b*a;_=(_+pt*q*vt)%E;const $=E*C;for(let ot=0;ot<K.length;ot++){const lt=K[ot];if(x.copy(lt.dir).applyQuaternion(U),x.z>=0||(x.applyMatrix4(mt.projectionMatrix),x.x<-1||x.x>1||x.y<-1||x.y>1))continue;const R=(x.x*.5+.5)*d,y=(1-(x.y*.5+.5))*g;if(!G(R,y)){if(u.fillStyle=r?lt.color??s:s,pt>.01){const O=R-St,Z=y-B,st=Math.hypot(O,Z)||1,et=O/st,Et=Z/st,gt=Math.min(1,st/T),_t=pt*N*(.25+.75*gt),Ft=S(et,Et);for(let at=a;at<=_t;at+=a){const yt=st-at;if(yt<=0)break;let kt=(yt-_)%E;if(kt<0&&(kt+=E),kt>$)continue;const ut=R-et*at,Ct=y-Et*at;if(G(ut,Ct))break;u.globalAlpha=1-.75*(at/_t),u.fillText(Ft,ut+it,Ct+tt)}u.globalAlpha=1}u.fillText(lt.char,R+it,y+tt)}}}const D="#ff6a2a",I="#ffd24a",L="#7ce5ff",H="#a8efff",k="#3b82ff",j=["*","+","x",".",":"],ct=new P;let ft=0;function Ut(K,mt){const pt=Math.abs(K),vt=Math.abs(mt);return pt>vt*2?"=":vt>pt*2?"|":K*mt<0?"/":"\\"}function Vt(K,mt,pt){if(!K||!K.object)return;const vt=K.phase==="salvage",St=vt?L:D,B=vt?H:"#ffd24a",it=!!(K.object.userData&&K.object.userData.parentAsteroid)?k:I;if(ct.copy(K.object.position).project(mt),ct.z>1)return;const tt=(ct.x*.5+.5)*d,N=(1-(ct.y*.5+.5))*g,$=g*.5/Math.tan(ie.degToRad(mt.fov*.5));let lt=(K.object.userData.viewRadius??4)*(K.object.scale.x||1)*$/Math.max(1,K.distance);lt=ie.clamp(lt,o*2.5,Math.min(d,g)*.42),u.fillStyle=K.firing?St:it;const R=tt-lt,y=tt+lt,O=N-lt,Z=N+lt,st=o,et=a;if(u.fillText("+",R,O),u.fillText("-",R+st,O),u.fillText("|",R,O+et),u.fillText("+",y,O),u.fillText("-",y-st,O),u.fillText("|",y,O+et),u.fillText("+",R,Z),u.fillText("-",R+st,Z),u.fillText("|",R,Z-et),u.fillText("+",y,Z),u.fillText("-",y-st,Z),u.fillText("|",y,Z-et),!K.firing)return;ft+=pt*22,u.fillStyle=St;const Et=[d*.14,d*.86],gt=g*.97;for(let _t=0;_t<Et.length;_t++){const Ft=Et[_t],at=tt-Ft,yt=N-gt,kt=Math.hypot(at,yt)||1,ut=at/kt,Ct=yt/kt,Yt=Ut(ut,Ct),Dt=Math.max(1,Math.floor(kt/(a*.7)));for(let Kt=0;Kt<=Dt;Kt++){const F=Kt/Dt,bt=Ft+at*F,nt=gt+yt*F;u.globalAlpha=.45+.55*Math.abs(Math.sin(Kt*.7-ft)),u.fillText(Yt,bt-o*.5,nt-a*.5)}}u.fillStyle=B;for(let _t=0;_t<7;_t++){const Ft=Math.random()*Math.PI*2,at=Math.random()*a*1.8;u.globalAlpha=.4+Math.random()*.6,u.fillText(j[_t%j.length],tt+Math.cos(Ft)*at-o*.5,N+Math.sin(Ft)*at-a*.5)}u.globalAlpha=1}const Y=new P,rt=["*","x","#","X","o","@"];function dt(K,mt){if(!(!K||!K.length)){for(const pt of K){if(Y.copy(pt.position).project(mt),Y.z>1||Y.z<-1)continue;const vt=(Y.x*.5+.5)*d,St=(1-(Y.y*.5+.5))*g,B=Math.floor(vt/o),T=Math.floor(St/a);if(B<0||B>=M||T<0||T>=p||m[T*M+B]>.06)continue;const it=pt.age/pt.duration,tt=1-it,N=pt.kind==="boom",$=N?22:9,ot=(N?4:2.5)+it*(N?7:4),lt=N?rt:j,R=N?"#ff8a3c":"#7ce5ff";u.fillStyle=R;for(let y=0;y<$;y++){const O=y/$*Math.PI*2+Math.random()*.6,Z=ot*(.4+Math.random()*.6),st=vt+Math.cos(O)*Z,et=St+Math.sin(O)*Z;u.globalAlpha=tt*(.4+Math.random()*.6),u.fillText(lt[Math.floor(Math.random()*lt.length)],st-o*.5,et-a*.5)}if(N&&it<.45){const y=(1-it/.45)*.9;u.globalAlpha=y,u.fillStyle="#ff5050",u.font=`bold ${n*2}px "Courier New", monospace`,u.fillText("BOOM",vt-o*2,St-a*1.2),u.font=`${n}px "Courier New", monospace`}}u.globalAlpha=1}}return{domElement:l,setSize:w,render:v,drawStars:z,drawMining:Vt,drawExplosions:dt}}const Do=4;function a0(i,t,e){const n=new P,s=new P;function r(u,f,h,d){const g=d+Do;s.subVectors(u.position,h);const M=s.lengthSq();if(M>=g*g)return 0;const p=Math.sqrt(M)||1e-4;n.copy(s).multiplyScalar(1/p),u.position.addScaledVector(n,g-p);const m=f.dot(n);return m<0?(f.addScaledVector(n,-1.72*m),-m):0}function o(u,f){let h=0;for(const d of i.asteroids){const g=r(u,f,d.position,d.userData.viewRadius*d.scale.x);g>h&&(h=g)}if(t&&t.colliders)for(const d of t.colliders){const g=r(u,f,d.center,d.radius);g>h&&(h=g)}if(e&&e.ships)for(const d of e.ships){if(!d.active)continue;const g=r(u,f,d.group.position,d.radius);g>h&&(h=g)}return{speedIn:h}}function a(u){for(const f of i.asteroids)u(f.position,f.userData.viewRadius*f.scale.x);if(t&&t.colliders)for(const f of t.colliders)u(f.center,f.radius);if(e&&e.ships)for(const f of e.ships)f.active&&u(f.group.position,f.radius)}function c(u,f,h){let d=1/0;return a((g,M)=>{s.subVectors(g,u);const p=s.dot(f);if(p<=0)return;const m=M+Do,w=p-m;w>h||s.lengthSq()-p*p>m*m||w<d&&(d=w)}),d}function l(u,f,h,d=.6){let g=!1;return a((M,p)=>{if(g)return;s.subVectors(M,u);const m=s.dot(f);if(m<=0)return;const w=s.length();w-p-Do>h||m/(w||1e-4)<d||(g=!0)}),g}return{resolve:o,forwardGap:c,forwardNear:l}}function c0(i,t,e,n,s,r,o={}){const a=n?a0(n,s,r):null,c=o.isUiOpen||(()=>!1),l=Object.create(null);let u=!1,f=!1,h=!1,d=window.innerWidth/2,g=window.innerHeight/2;const M=1.5,p=1.3,m=.05,w=1.7,v=80,x=800,U=20,b=.55,E=.3,C=1.6,q=3.5,_=.7,S=.28,G=.6,z=4,D=1,I=2200,L=350,H=(s==null?void 0:s.radius)+50,k=18,j=30,ct=18,ft=18,Ut=14,Vt=1.2,Y=.9,rt=120,dt=240,K=14,mt=4,pt=new P(0,0,156),St=1+.35,B=-.1,T=1,it=B-T,tt=St+1;let N=0,$=!1,ot=!1,lt=0,R=0,y=0,O=0;const Z=new P,st=new P;let et=0,Et=!1,gt=!1,_t=!1,Ft=!1,at=!1,yt=0,kt=null;const ut={speed:0,throttle:0,warp:0,reverse:0,lock:!1,headingDeg:0,pitchDeg:0,pos:{x:0,y:0,z:0},active:!1,mining:!1,thrustCmd:0,canDock:!1,tooFastToDock:!1,docking:!1,undocking:!1,docked:!1,turn:{yaw:0,pitch:0,roll:0},aimX:0,aimY:0};function Ct(){u||(u=!0,ut.active=!0,e&&(e.style.display="none"))}function Yt(){f=!1,document.body.classList.remove("dragging")}function Dt(){u&&(u=!1,ut.active=!1,Yt(),ut.canDock=!1,e&&(e.style.display=""))}const Kt=new P,F=new He,bt=new P,nt=new ae,ht=new He,At=new He,Pt=new P(0,0,0),$t=new P(0,1,0),pe=new P(0,0,1),te=new P,Bt=new P,le=new P,Ue=new P,Zn=new P,$n=new P,ue=new P;let Ln=!1;function ss(X,It){const Ot=Math.abs(X.y)>.98?pe:$t;return nt.lookAt(Pt,X,Ot),(It||new He).setFromRotationMatrix(nt)}function rs(){Ln||!s||!s.group||(s.group.updateMatrixWorld(),Kt.copy(pt).applyMatrix4(s.group.matrixWorld),s.group.getWorldQuaternion(ht),bt.set(0,0,1).applyQuaternion(ht).normalize(),ss(bt,F),Ln=!0)}function Jn(){return!s||!s.center?!1:i.position.distanceTo(s.center)<=H}function os(){const X=[],It=K+mt;if(s&&s.center&&X.push({c:s.center,r:s.radius+It}),n&&n.asteroids)for(const Ot of n.asteroids)X.push({c:Ot.position,r:(Ot.userData.viewRadius??4)*Ot.scale.x+It});return X}function Qn(X,It,Ot,zt){Ue.subVectors(X,It),Zn.subVectors(Ot,It);const Jt=ie.clamp(Ue.dot(Zn)/(Zn.lengthSq()||1),0,1);return zt.copy(It).addScaledVector(Zn,Jt),Jt}function as(X,It){for(let Ot=0;Ot<16;Ot++){let zt=null,Jt=.001;for(const wt of It){const ee=wt.r-ue.subVectors(X,wt.c).length();ee>Jt&&(Jt=ee,zt=wt)}if(!zt)break;ue.subVectors(X,zt.c);const Ht=ue.length();Ht<1e-4?ue.set(1,0,0):ue.multiplyScalar(1/Ht),X.copy(zt.c).addScaledVector(ue,zt.r*1.02)}return X}function cs(X,It,Ot){const zt=[X.clone(),It.clone()];let Jt=0;for(;Jt++<64;){let Ht=!1;for(let wt=0;wt<zt.length-1;wt++){const ee=zt[wt],Gt=zt[wt+1],me=wt===0,_e=wt===zt.length-2;let he=null,hn=1/0;for(const ne of Ot){const We=ue.subVectors(ee,ne.c).length()<ne.r,Dn=ue.subVectors(Gt,ne.c).length()<ne.r;if(We&&me||Dn&&_e)continue;const Me=Qn(ne.c,ee,Gt,$n);$n.distanceTo(ne.c)<ne.r&&Me<hn&&(hn=Me,he=ne)}if(he){Qn(he.c,ee,Gt,$n),ue.subVectors($n,he.c),ue.lengthSq()<1e-6&&(ue.subVectors(Gt,ee),ue.set(-ue.y,ue.x,0),ue.lengthSq()<1e-6&&ue.set(0,1,0)),ue.normalize();const ne=he.c.clone().addScaledVector(ue,he.r*1.08);as(ne,Ot),zt.splice(wt+1,0,ne),Ht=!0;break}}if(!Ht)break}return zt}function Yr(X,It,Ot){const zt=X.clone();as(zt,Ot);const Jt=cs(zt,It,Ot);return zt.distanceToSquared(X)>1e-6&&Jt.unshift(X.clone()),Jt}function ls(X,It,Ot,zt,Jt,Ht){const wt=[0];for(let ee=1;ee<X.length;ee++)wt.push(wt[ee-1]+X[ee].distanceTo(X[ee-1]));return{kind:"fly",path:X,cum:wt,len:wt[wt.length-1],faceVel:!!It,q0:Ot?Ot.clone():null,q1:zt?zt.clone():null,cruise:Jt,s:0,v:Math.max(0,Ht||0)}}function Kr(X){return{kind:"pivot",q1:X.clone()}}function A(X,It,Ot){const{path:zt,cum:Jt}=X;let Ht=1;for(;Ht<Jt.length-1&&Jt[Ht]<It;)Ht++;const wt=Jt[Ht]-Jt[Ht-1]||1,ee=ie.clamp((It-Jt[Ht-1])/wt,0,1);return Ot.copy(zt[Ht-1]).lerp(zt[Ht],ee),le.subVectors(zt[Ht],zt[Ht-1]),le.lengthSq()<1e-9&&le.copy(bt),le.normalize()}function V(X,It){const Ot=Math.max(0,X.len-X.s);if(Ot<.4)return A(X,X.len,i.position),!X.faceVel&&X.q1&&i.quaternion.copy(X.q1),yt=0,!0;const zt=Math.min(X.cruise,Math.sqrt(2*Ut*Ot));X.v+=ie.clamp(zt-X.v,-Ut*It,ft*It),X.v<0&&(X.v=0),X.s=Math.min(X.len,X.s+X.v*It);const Jt=A(X,X.s,i.position);return X.faceVel?(ss(Jt,At),i.quaternion.rotateTowards(At,Vt*It)):i.quaternion.copy(X.q0).slerp(X.q1,X.len>0?X.s/X.len:1),yt=X.v,!1}function J(){const X=os(),It=te.copy(Kt).addScaledVector(bt,rt),Ot=Yr(i.position,It,X);return{phases:[ls(Ot,!0,null,null,j,Math.abs(lt)),Kr(F),ls([It.clone(),Kt.clone()],!1,F,F,ct,0)],i:0}}function Q(){const X=os(),It=Bt.copy(Kt).addScaledVector(bt,dt),Ot=cs(Kt,It,X);return{phases:[ls(Ot,!0,null,null,j,0)],i:0}}function W(){var X;Ft||_t||at||!Jn()||Math.abs(lt)>k||(rs(),Ln&&(kt=J(),ot=!1,Z.set(0,0,0),et=0,R=y=O=0,Yt(),_t=!0,(X=o.onDockStart)==null||X.call(o)))}function Mt(){var X;Ft&&(rs(),Ln&&(kt=Q(),ot=!1,Z.set(0,0,0),et=0,R=y=O=0,Yt(),Ft=!1,at=!0,(X=o.onUndockStart)==null||X.call(o)))}function Rt(X){const It=(X.buttons&1)!==0,Ot=(X.buttons&2)!==0;It&&!f?(f=!0,document.body.classList.add("dragging")):!It&&f&&Yt(),h=Ot}window.addEventListener("pointermove",X=>{c()||(d=X.clientX,g=X.clientY,Rt(X))}),window.addEventListener("pointerdown",X=>{c()||u&&(d=X.clientX,g=X.clientY,Rt(X))}),window.addEventListener("pointerup",X=>{c()||Rt(X)}),window.addEventListener("blur",()=>{Yt(),h=!1;for(const X in l)l[X]=!1}),window.addEventListener("contextmenu",X=>X.preventDefault()),window.addEventListener("keydown",X=>{if(X.code==="Escape"){Dt();return}c()||(l[X.code]=!0,X.code==="KeyX"&&(ot=!0),X.code==="ShiftLeft"&&($=!$),X.code==="KeyE"&&u&&(Ft?Mt():!_t&&!at&&W()),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.code)&&X.preventDefault())}),window.addEventListener("keyup",X=>{l[X.code]=!1});const Lt=new P;function Nt(X){const It=Math.sign(X),Ot=Math.min(1,Math.abs(X));if(Ot<m)return 0;const zt=(Ot-m)/(1-m);return It*Math.pow(zt,1.4)}function Wt(X){if(X>=St){const Ot=X-St;return v+Ot*(x-v)}return X>=1?v:X>=0?X*v:X>=B?0:-((B-X)/T)*U}function Xt(X){var zt,Jt,Ht,wt,ee;if(ut.turn.yaw=0,ut.turn.pitch=0,ut.turn.roll=0,yt=0,_t||at){const Gt=kt,me=Gt.phases[Gt.i];let _e;me.kind==="pivot"?(i.quaternion.rotateTowards(me.q1,Y*X),yt=0,ut.turn.yaw=.5,_e=i.quaternion.angleTo(me.q1)<.001):_e=V(me,X),N=0,ot=!1,et=0,Et=!1,R=y=O=0,Z.set(0,0,0),_e&&(Gt.i++,Gt.i>=Gt.phases.length&&(_t?(_t=!1,Ft=!0,i.position.copy(Kt),i.quaternion.copy(F),(zt=o.onDocked)==null||zt.call(o)):(at=!1,(Jt=o.onUndocked)==null||Jt.call(o)),lt=0,yt=0,kt=null))}else if(Ft)N=0,lt=0,ot=!1,et=0,Et=!1,R=y=O=0,Z.set(0,0,0);else if(u){const Gt=c();Gt&&(Yt(),h=!1);const me=window.innerWidth/2,_e=window.innerHeight/2,he=ie.clamp((d-me)/me,-1,1),hn=ie.clamp((g-_e)/_e,-1,1);ut.aimX=he,ut.aimY=hn;const ne=!Gt&&(h||!!l.Space);let We=0,Dn=0;f&&!ne&&(We=-Nt(he)*M,Dn=-Nt(hn)*p,ut.turn.yaw=Nt(he),ut.turn.pitch=Nt(hn));const Me=Math.min(1,q*X);R+=(We-R)*Me,y+=(Dn-y)*Me,R&&i.rotateY(R*X),y&&i.rotateX(y*X);let In=0;!Gt&&(l.KeyA||l.ArrowLeft)&&(In+=1),!Gt&&(l.KeyD||l.ArrowRight)&&(In-=1);const jr=In*w;O+=(jr-O)*Me;const us=O*X;us&&i.rotateZ(us),ut.turn.roll=In;const Os=!Gt&&(l.KeyW||l.ArrowUp),Fs=!Gt&&(l.KeyS||l.ArrowDown);if(ut.thrustCmd=Os?1:Fs?-1:0,et>0)et>0&&(et=Math.max(0,et-X)),N=0,ot=!1;else{(Os||Fs)&&(ot=!1);const fc=$?b:E;Os&&(N+=fc*X),Fs&&(N>1&&N<St&&(N=1),N-=fc*X);const eh=Os||Fs,nh=N>=1||N<=it+.001;if(ot||!eh&&!$&&!nh&&!ot){const ks=(ot?_:S)*X;N>ks?N-=ks:N<-ks?N+=ks:(N=0,ot=!1)}}}if(N=ie.clamp(N,it,tt),Lt.set(0,0,-1).applyQuaternion(i.quaternion),!_t&&!Ft&&!at){let Gt=!1;if(a&&u&&N>St){const _e=Number.isFinite(a.forwardGap(i.position,Lt,I)),he=a.forwardNear(i.position,Lt,L);(_e||he)&&(N=St,ot=!1,Gt=!0,Et||(lt>v+1?(Ht=o.onWarpExit)==null||Ht.call(o):(wt=o.onWarpInhibit)==null||wt.call(o)))}Et=Gt;const me=Wt(N);if(lt+=(me-lt)*Math.min(1,C*X),i.position.addScaledVector(Lt,lt*X),i.position.addScaledVector(Z,X),Z.multiplyScalar(Math.max(0,1-G*X)),a&&u){st.copy(Lt).multiplyScalar(lt).add(Z);const _e=a.resolve(i,st);_e.speedIn>0?(Z.copy(st),lt=0,gt||(ee=o.onImpact)==null||ee.call(o,_e.speedIn),gt=!0,_e.speedIn>z&&(N=0,ot=!1,et=Math.max(et,ie.clamp(_e.speedIn/v,.2,1)*D))):gt=!1}}ut.speed=_t||at?yt:Ft?0:lt+Lt.dot(Z),ut.throttle=ie.clamp(N,0,1),ut.warp=ie.clamp((N-St)/1,0,1),ut.lock=$,ut.reverse=ie.clamp((B-N)/T,0,1),ut.headingDeg=(ie.radToDeg(Math.atan2(Lt.x,-Lt.z))+360)%360,ut.pitchDeg=ie.radToDeg(Math.asin(ie.clamp(Lt.y,-1,1))),ut.pos.x=i.position.x,ut.pos.y=i.position.y,ut.pos.z=i.position.z,ut.mining=u&&!_t&&!at&&!Ft&&(h||!!l.Space),ut.docking=_t,ut.undocking=at,ut.docked=Ft;const It=!_t&&!at&&!Ft&&u&&Jn(),Ot=Math.abs(ut.speed)<=k;ut.canDock=It&&Ot,ut.tooFastToDock=It&&!Ot}return{update:Xt,state:ut,activate:Ct,deactivate:Dt}}const wl=new P(-210,0,-150),Tl=180,l0=80,u0=700,h0=.18,d0=6,f0=2,Al=3,p0=6,Rl=20,m0=70,Cl=5,g0=12,_0=1.8,v0=6,Io=.3,x0=.5;function Hu(i,t,e){return Math.sin(i*1.7+t*2.3)*.5+Math.sin(t*1.1+e*1.9)*.3+Math.sin(e*2.1+i*.7)*.2}function y0(i,t){const e=new Xr(i,t),n=e.attributes.position,s=new P;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);const o=1+Hu(s.x,s.y,s.z)*.3;s.multiplyScalar(o),n.setXYZ(r,s.x,s.y,s.z)}return e.computeVertexNormals(),e}function M0(i){const t=new Xr(i,0),e=t.attributes.position,n=new P;for(let s=0;s<e.count;s++){n.fromBufferAttribute(e,s);const r=1+Hu(n.x,n.y,n.z)*.4;n.multiplyScalar(r),e.setXYZ(s,n.x,n.y,n.z)}return t.computeVertexNormals(),t}function S0(i){const t=[];for(let b=0;b<u0;b++){const E=Math.random()*2-1,C=Math.random()*Math.PI*2,q=Math.sqrt(1-E*E),_=new P(Math.cos(C)*q,E,Math.sin(C)*q),S=Math.random(),G=S<.84?".":S<.96?"+":"*",z=Math.random(),D=z<.55?"#eaf2ff":z<.78?"#aac6ff":z<.92?"#fff3c9":"#ffb27a";t.push({dir:_,char:G,color:D})}const e=new P,n=new P;function s(){const b=Math.random()*2-1,E=Math.random()*Math.PI*2,C=Math.sqrt(1-b*b);return e.set(Math.cos(E)*C,b,Math.sin(E)*C)}function r(b){const E=Tl*Math.cbrt(Math.random());return b.copy(wl).addScaledVector(s(),E)}const o=[];for(let b=0;b<l0;b++){const E=4+Math.random()*24,C=Math.random()<.5?0:1,q=y0(E,C);q.computeBoundingSphere();const _=.42+Math.random()*.34,G=Math.random()<.7?new qt(_,_*.84,_*.66):new qt(_,_*.95,_*1.02),z=new Qe({color:G,roughness:1,metalness:0,flatShading:!0}),D=new Ce(q,z);r(D.position),D.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),D.userData.spin=new P((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),D.userData.integrity=1,D.userData.broken=!1,D.userData.viewRadius=q.boundingSphere.radius,i.add(D),o.push(D)}const a=[],c=[];function l(b){for(const E of o)E.rotation.x+=E.userData.spin.x*b,E.rotation.y+=E.userData.spin.y*b,E.rotation.z+=E.userData.spin.z*b;for(const E of a){if(E.userData.state==="disintegrating"){E.userData.age=(E.userData.age||0)+b,E.scale.setScalar(Math.max(.01,1-E.userData.age/Io));continue}if(E.userData.state!=="free")continue;const C=E.userData.spin;E.rotation.x+=C.x*b,E.rotation.y+=C.y*b,E.rotation.z+=C.z*b}for(let E=c.length-1;E>=0;E--)c[E].age+=b,c[E].age>=c[E].duration&&c.splice(E,1)}function u(b,E){const C=Math.max(0,(b.userData.integrity??1)-E);return b.userData.integrity=C,C}function f(b){b.userData.integrity=1}function h(b){b.userData.broken=!0,b.userData.integrity=0,b.userData.brokenRadius=b.userData.viewRadius??4,b.scale.setScalar(h0),b.visible=!1;const E=b.userData.brokenRadius,C=Math.max(f0,Math.min(d0,Math.round(E/5))),q=[];for(let _=0;_<C;_++){const S=Al+Math.random()*(p0-Al),G=M0(S);G.computeBoundingSphere();const z=new qt(16761418).multiplyScalar(.85+Math.random()*.3),D=new Qe({color:z,emissive:z.clone().multiplyScalar(.55),emissiveIntensity:1,roughness:.45,metalness:.35,flatShading:!0}),I=new Ce(G,D),L=s().clone(),H=S+Math.random()*E*.3;I.position.copy(b.position).addScaledVector(L,H),I.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),I.userData.spin=new P((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5),I.userData.weight=Rl+Math.random()*(m0-Rl),I.userData.state="free",I.userData.velocity=L.clone().multiplyScalar(Cl+Math.random()*(g0-Cl)),I.userData.viewRadius=G.boundingSphere.radius,I.userData.parentAsteroid=b,i.add(I),a.push(I),q.push(I)}return q}function d(b){const E=o.indexOf(b);E!==-1&&o.splice(E,1),i.remove(b),b.geometry.dispose(),b.material.dispose(),c.push({position:b.position.clone(),age:0,duration:x0,kind:"boom"})}function g(b){const E=o.indexOf(b);E!==-1&&o.splice(E,1),i.remove(b),b.geometry.dispose(),b.material.dispose()}function M(b){b.userData.state==="free"&&(b.userData.state="disintegrating",b.userData.age=0,b.userData.velocity.set(0,0,0),c.push({position:b.position.clone(),age:0,duration:Io,kind:"spark"}))}function p(b){const E=a[b],C=E.userData.parentAsteroid;i.remove(E),E.geometry.dispose(),E.material.dispose(),a.splice(b,1),C&&x(C).length===0&&g(C)}function m(b,E){for(let C=a.length-1;C>=0;C--){const q=a[C];if(q.userData.state==="disintegrating"){(q.userData.age||0)>=Io&&p(C);continue}q.userData.state==="free"&&(q.position.addScaledVector(q.userData.velocity,E),q.userData.velocity.multiplyScalar(Math.max(0,1-_0*E)),q.position.distanceTo(b)<v0&&p(C))}w()}function w(){for(const b of a){if(b.userData.state!=="free")continue;const E=b.userData.viewRadius??3;for(const C of o){if(C.userData.broken||!C.visible)continue;const q=(C.userData.viewRadius??4)*(C.scale.x||1);n.subVectors(b.position,C.position);const _=n.length(),S=E+q;_>1e-4&&_<S?b.position.addScaledVector(n,(S-_)/_):_<=1e-4&&(b.position.x+=S)}}for(let b=0;b<a.length;b++){const E=a[b];if(E.userData.state!=="free")continue;const C=E.userData.viewRadius??3;for(let q=b+1;q<a.length;q++){const _=a[q];if(_.userData.state!=="free")continue;const S=_.userData.viewRadius??3;n.subVectors(E.position,_.position);const G=n.length(),z=C+S;G>1e-4&&G<z?(n.multiplyScalar((z-G)*.5/G),E.position.add(n),_.position.sub(n)):G<=1e-4&&(E.position.x+=z*.5,_.position.x-=z*.5)}}}function v(){const b=[];for(const E of o)E.userData.broken||b.push(E);for(const E of a)E.userData.state==="free"&&b.push(E);return b}function x(b){return a.filter(E=>E.userData.parentAsteroid===b)}return{update:l,stars:t,asteroids:o,blocks:a,explosions:c,cluster:{center:wl,radius:Tl},drainIntegrity:u,restoreIntegrity:f,completeCut:h,failCut:d,finalizeSalvage:g,disintegrateBlock:M,updateBlocks:m,targetables:v,blocksOf:x}}const Pl=new P(200,160,-620),Uo=2,E0=195;function b0(i){const t=new Ie;t.position.copy(Pl),t.rotation.set(.12,.7,.05),t.scale.setScalar(Uo),i.add(t);const e=new Qe({color:12174028,roughness:.55,metalness:.15}),n=new Qe({color:7107195,roughness:.7,metalness:.2,flatShading:!0}),s=new Qe({color:13216134,roughness:.6,metalness:.1}),r=new Qe({color:6126788,roughness:.45,metalness:.2,emissive:1187900,emissiveIntensity:1,flatShading:!0}),o=new Qe({color:9080984,roughness:.6,metalness:.2}),a=new Qe({color:10475775,emissive:2911648,emissiveIntensity:1.4,roughness:.3});function c(I,L,H=t){const k=new Ce(I,L);return H.add(k),k}const l=Math.PI/2,u=[];function f(I,L){const H=new mi({color:I,transparent:!0,opacity:1}),k=new Ce(new je(L,10,10),H);return t.add(k),u.push({mat:H,speed:2.2+u.length*.35,phase:u.length*1.3}),k}c(new fe(16,16,220,24),e).rotation.x=l;for(const I of[-72,-36,0,36,72]){const L=c(new fe(18,18,7,24),n);L.rotation.x=l,L.position.z=I}const h=new Ie;h.position.z=-10,t.add(h);const d=90,g=13;c(new un(d,g,16,64),e,h);const M=16,p=d-g,m=p-M,w=(M+p)/2;for(let I=0;I<8;I++){const L=I/8*Math.PI*2,H=c(new fe(2.6,2.6,m,8),o,h);H.position.set(Math.cos(L)*w,Math.sin(L)*w,0),H.rotation.z=L-l;const k=c(new Je(13,17,15),I%2?e:s,h);k.position.set(Math.cos(L)*(d+6),Math.sin(L)*(d+6),0),k.rotation.z=L-l;const j=c(new Je(13.4,4,2),a,h);j.position.set(Math.cos(L)*(d+6),Math.sin(L)*(d+6),8),j.rotation.z=L-l}const v=c(new fe(26,18,26,24),e);v.rotation.x=l,v.position.z=122;const x=[[14,14],[-14,14],[14,-14],[-14,-14],[0,0]];for(const[I,L]of x){const k=I===0&&L===0?10:7,j=c(new fe(k,k,20,16),n);j.rotation.x=l,j.position.set(I,L,140),c(new un(k+1,1.6,8,20),a).position.set(I,L,150)}for(let I=0;I<3;I++){const L=l+I/3*Math.PI*2,H=c(new Je(5,5,64),o);H.position.set(Math.cos(L)*30,Math.sin(L)*30,150),H.rotation.z=L-l,c(new un(13,2.6,8,18),o).position.set(Math.cos(L)*30,Math.sin(L)*30,182),f(16764490,2.4).position.set(Math.cos(L)*30,Math.sin(L)*30,184)}for(let I=0;I<3;I++){const L=l+I/3*Math.PI*2,H=c(new fe(11,11,56,16),e);H.rotation.x=l,H.position.set(Math.cos(L)*22,Math.sin(L)*22,-82)}const U=c(new fe(22,22,10,24),n);U.rotation.x=l,U.position.z=-116;for(let I=0;I<3;I++){const L=l+I/3*Math.PI*2,H=c(new fe(6,10,18,16,1,!0),n);H.rotation.x=l,H.position.set(Math.cos(L)*11,Math.sin(L)*11,-128)}for(const I of[-1,1]){const L=c(new fe(2.6,2.6,120,10),o);L.rotation.z=l,L.position.set(I*70,0,-50);for(const k of[55,105]){const j=I*k,ct=-50;c(new Je(46,1,34),r).position.set(j,0,ct);for(const Ut of[-16,0,16])c(new Je(48,1.6,1.6),o).position.set(j,0,ct+Ut);for(const Ut of[-23,0,23])c(new Je(1.6,1.6,36),o).position.set(j+Ut,0,ct)}f(I<0?16726832:3800938,2.6).position.set(I*132,0,-50)}c(new fe(1.6,1.6,46,8),o).position.set(0,41,30);const E=c(new fe(17,4,9,24,1,!0),o);E.position.set(0,66,30),E.rotation.set(-.5,0,0),f(16726832,2.8).position.set(0,70,30);const q=new e0(16767400,.6,320,2);q.position.set(0,0,90),t.add(q);const _=[],S=(I,L,H,k)=>_.push({p:new P(I,L,H),r:k});for(const I of[-100,-66,-33,0,33,66,100])S(0,0,I,18);S(0,0,125,28),S(0,0,150,22);for(let I=0;I<12;I++){const L=I/12*Math.PI*2;S(Math.cos(L)*90,Math.sin(L)*90,-10,16)}for(let I=0;I<3;I++){const L=l+I/3*Math.PI*2;S(Math.cos(L)*22,Math.sin(L)*22,-82,14)}S(0,0,-118,24);for(const I of[-1,1])for(const L of[40,70,100,130])S(I*L,0,-50,20);S(0,45,30,14),S(0,66,30,16),t.updateMatrixWorld(!0);const G=_.map(I=>({center:I.p.clone().applyMatrix4(t.matrixWorld),radius:I.r*Uo}));let z=0;function D(I){z+=I,h.rotation.z+=.07*I;for(const L of u){const H=Math.sin(z*L.speed+L.phase);L.mat.opacity=H>.55?1:.12}}return{update:D,group:t,center:Pl,radius:E0*Uo,colliders:G}}const ve=Math.PI/2;function Qt(i,t,e){const n=new Ce(t,e);return i.add(n),n}function Ll(i,t,e,n=!1){return new Qe({color:i,roughness:t,metalness:e,flatShading:n})}function Gu(){const i=.55+Math.random()*.3,t=Math.random()<.5;return{hull:Ll(new qt(i,i,i*1.02),.55,.25),hullDark:Ll(new qt(i*.5,i*.52,i*.58),.7,.3,!0),accent:new Qe({color:t?new qt(.82,.46,.2):new qt(.3,.5,.86),roughness:.5,metalness:.3,flatShading:!0,side:pn}),glow:new Qe({color:10475775,emissive:2911648,emissiveIntensity:1.3,roughness:.3}),engine:new Qe({color:3346688,emissive:16738858,emissiveIntensity:1.6,roughness:.4})}}function Ds(i,t,e,n,s=14){const r=Qt(i,new lc(e,n,6,s),t);return r.rotation.x=ve,r}function ws(i,t,e,n,s){const r=new Iu;r.moveTo(0,0),r.lineTo(i,-n),r.lineTo(i,-n-e),r.lineTo(0,-t),r.closePath();const o=new hc(r,{depth:s,bevelEnabled:!1,steps:1});return o.translate(0,0,-s/2),o.rotateX(ve),o}function za(i,t,e,n,s,r,o=0){for(const a of[-1,1]){const c=Qt(i,e,t);c.scale.x=a,c.position.set(n*a,s,r),o&&(c.rotation.z=-a*o)}}function Ze(i,t,e,n,s,r,o,a){const c=Qt(i,new Je(e,n,s),t);return c.position.set(r,o,a),c}function w0(i,t,e,n,s,r,o,a){for(let c=0;c<e;c++){const l=ve+c/e*Math.PI*2,u=Math.cos(l)*n,f=Math.sin(l)*n,h=Qt(i,new fe(s*.8,s,5,12,1,!0),t.hullDark);h.rotation.x=ve,h.position.set(u,f,o);const d=Qt(i,new _n(r,7,12),t.engine);d.rotation.x=ve,d.position.set(u,f,a)}}function T0(i){const t=new Ie,e=72;Ds(t,i.hull,8,e,20);for(const l of[-22,-7,8,23])Qt(t,new un(8.6,1.1,8,20),i.hullDark).position.z=l;for(let l=0;l<4;l++){const u=-e*.28+l*16;for(const[f,h]of[[-1,1],[1,1],[-1,-1],[1,-1]])Ze(t,(l+(f+h))%2?i.accent:i.hullDark,11,9,13,f*8,h*7,u)}const n=Qt(t,new je(7,16,14),i.hull);n.scale.set(1,1,1.25),n.position.z=e*.5-4,Qt(t,new un(6.6,1.1,8,20),i.glow).position.z=e*.5+3,Ze(t,i.glow,6,2,1,0,4,e*.5+1),Qt(t,new fe(.5,.5,9,6),i.hullDark).position.set(0,11,6);const r=Qt(t,new fe(3.2,.6,2.2,14,1,!0),i.hull);r.position.set(0,15,6),r.rotation.set(-.5,0,0);for(const l of[-1,1]){const u=Qt(t,new fe(.8,.8,16,6),i.hullDark);u.rotation.z=ve,u.position.set(l*12,0,-16),Ze(t,i.accent,14,.8,18,l*19,0,-16)}const o=Qt(t,new fe(8.5,8.5,6,16),i.hullDark);o.rotation.x=ve,o.position.z=-e*.5+1;const a=Qt(t,new fe(7,10,9,20,1,!0),i.hullDark);a.rotation.x=ve,a.position.z=-e*.5-6;const c=Qt(t,new _n(7,12,18),i.engine);return c.rotation.x=ve,c.position.z=-e*.5-11,t}const A0={name:"Freighter",build:T0};function R0(i){const t=new Ie,e=20;Ds(t,i.hull,4,e,16);const n=Qt(t,new _n(4.1,9,16),i.hull);n.rotation.x=ve,n.position.z=e*.5+6.5;const s=Qt(t,new fe(.25,.25,5,5),i.hullDark);s.rotation.x=ve,s.position.z=e*.5+13;const r=Qt(t,new je(2.6,14,12),i.glow);r.scale.set(1,.72,1.5),r.position.set(0,1.7,e*.28),za(t,i.accent,ws(10,8,2.5,5,.7),2.6,-.6,-1.5,.12);const o=Qt(t,ws(6,6,1.6,4,.7),i.accent);o.rotation.z=ve,o.position.set(0,2,-e*.42),Ze(t,i.hullDark,5,2.2,6,0,-2.4,-2);for(const a of[-1,1]){Ds(t,i.hullDark,1.8,6,12).position.set(a*3.2,0,-e*.5-2);const c=Qt(t,new _n(1.9,4.5,12),i.engine);c.rotation.x=ve,c.position.set(a*3.2,0,-e*.5-7)}return t}const C0={name:"Shuttle",build:R0};function P0(i){const t=new Ie,e=64;Ze(t,i.hullDark,4,4,e,0,0,0);for(const r of[-22,-8,6,20])Ze(t,i.hullDark,22,1.4,1.4,0,0,r);for(let r=0;r<3;r++){const o=ve+r/3*Math.PI*2,a=Math.cos(o)*11,c=Math.sin(o)*11;Ds(t,i.hull,7,30,16).position.set(a,c,-2),Qt(t,new un(7,.9,6,16),i.accent).position.set(a,c,-2);const l=Qt(t,new fe(.7,.7,30,6),i.hullDark);l.rotation.x=ve,l.position.set(a*.55,c*.55,-2)}const n=Qt(t,new je(6,16,14),i.accent);n.scale.set(1,1,1.2),n.position.z=e*.5-2,Ze(t,i.hull,7,7,6,0,0,e*.5-9),Qt(t,new un(5.2,1,8,18),i.glow).position.z=e*.5+3;const s=Qt(t,new fe(6,9,8,18,1,!0),i.hullDark);return s.rotation.x=ve,s.position.z=-e*.5-3,w0(t,i,3,3.8,3,3,-e*.5-2,-e*.5-8),t}const L0={name:"Tanker",build:P0};function D0(i){const t=new Ie,e=30;Ds(t,i.hull,3.4,e,14);const n=Qt(t,new _n(3.4,11,14),i.hull);n.rotation.x=ve,n.position.z=e*.5+7.5;const s=Qt(t,new je(2.1,14,12),i.glow);s.scale.set(1,.7,1.8),s.position.set(0,1.4,e*.12),za(t,i.accent,ws(12,11,1.5,8,.8),2,-.5,-e*.12,.1),za(t,i.accent,ws(4.5,4,1,3,.6),2.2,.4,e*.32,.05);const r=Qt(t,ws(7,7,1.5,5,.8),i.accent);r.rotation.z=ve,r.position.set(0,2,-e*.34);for(const c of[-1,1])Ze(t,i.hullDark,2.5,3,8,c*2.8,-.6,e*.02);const o=Qt(t,new fe(3,4.6,7,16,1,!0),i.hullDark);o.rotation.x=ve,o.position.z=-e*.5-3;const a=Qt(t,new _n(4,8,16),i.engine);a.rotation.x=ve,a.position.z=-e*.5-8;for(let c=0;c<4;c++){const l=c/4*Math.PI*2;Ze(t,i.hullDark,1,1,5,Math.cos(l)*4,Math.sin(l)*4,-e*.5-5)}return t}const I0={name:"Interceptor",build:D0};function U0(i){const t=new Ie,e=34;Qt(t,new je(12,18,16),i.hull).scale.set(1,.85,1.5);for(const s of[-9,2,12]){const r=Qt(t,new un(12,1.5,8,24),i.hullDark);r.scale.set(1,.85,1),r.position.z=s}for(const s of[-1,1])Ze(t,i.accent,5,8,14,s*11,0,-2);Ze(t,i.hullDark,12,4,16,0,9,-4);for(const s of[-1,1])Ze(t,i.hullDark,3,3,20,s*10,-1,e*.45),Ze(t,i.accent,5,7,5,s*10,-1,e*.5+9),Qt(t,new je(2.2,10,8),i.hull).position.set(s*10,-1,e*.5+13);Qt(t,new je(5,14,12,0,Math.PI*2,0,Math.PI*.6),i.accent).position.set(0,8,e*.18);const n=Qt(t,new je(2.4,12,10),i.glow);n.scale.set(1.6,.8,.6),n.position.set(0,4.5,e*.55);for(const[s,r]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const o=Qt(t,new fe(2.6,3.4,5,12,1,!0),i.hullDark);o.rotation.x=ve,o.position.set(s*6,r*5,-e*.5-2);const a=Qt(t,new _n(3,7,12),i.engine);a.rotation.x=ve,a.position.set(s*6,r*5,-e*.5-6)}return t}const N0={name:"Mining Barge",build:U0},wr=[A0,C0,L0,I0,N0],No=950,O0=280,F0=700,fr=540,k0=52,B0=108,z0=760,H0=1180,G0=4.5,V0=3,W0=18,X0=.6,zn=44,Oo=24,vs=(i,t)=>i+Math.random()*(t-i),Tn=ie.clamp,Dl=i=>i*i*(3-2*i);function q0(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return new P(Math.cos(t)*e,i,Math.sin(t)*e)}const Il=wr.map(i=>i.build),Ul=["KLV","NRX","VSG","ORB","TYC","ZEN","AXM","HLO","DRV","PXR"];function Or(){const i=Ul[Math.floor(Math.random()*Ul.length)],t=String(Math.floor(100+Math.random()*900));return`${i}-${t}`}function Y0(i,t){i.updateMatrixWorld(!0);const e=new jn().setFromObject(i),n=e.getSize(new P),s=e.getCenter(new P),r=Tn(n.length()*.018,.7,2.2),o=e.max.z-n.z*.18,a=[[16726832,s.x-n.x*.5,s.y,o,"nav"],[3800938,s.x+n.x*.5,s.y,o,"nav"],[16777215,s.x,e.max.y,e.min.z+n.z*.2,"strobe"],[16738890,s.x,s.y,e.min.z,"strobe"]];for(let c=0;c<a.length;c++){const[l,u,f,h,d]=a[c],g=new mi({color:l,transparent:!0,opacity:1,fog:!1});Qt(i,new je(r,8,8),g).position.set(u,f,h),t.push({mat:g,kind:d,speed:2.4+c*.7,phase:c*1.7})}}function K0(i,t,e,n={}){const s=n.count??6,r=t.center,o=[],a=(t.colliders||[]).map(Y=>({c:Y.center,r:Y.radius})),c=(e==null?void 0:e.asteroids)||[],l=(e==null?void 0:e.cluster)||null,u=16,f=24,h=1.15,d=130,g=2.6,M=1.3,p=new P,m=new P,w=new P(0,1,0),v=new P(0,0,1),x=new P,U=new P,b=new P,E=new P,C=new P,q=new P,_=new P,S=new P,G=new P;function z(Y){const rt=Math.random()*Math.PI*2,dt=(Math.random()*2-1)*X0,K=Math.cos(dt);return Y.set(Math.cos(rt)*K,Math.sin(dt),Math.sin(rt)*K).normalize()}function D(Y,rt){return m.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),rt.crossVectors(Y,m),rt.lengthSq()<1e-4&&rt.crossVectors(Y,w),rt.normalize()}function I(Y,rt,dt,K,mt,pt,vt){x.copy(Y).sub(dt);const St=x.length(),B=rt+mt+u,T=St-B;if(T>pt||St<1e-4)return 0;const it=Tn(1-T/pt,0,1),tt=it*it,N=x.dot(K);U.copy(x).addScaledVector(K,-N);const $=U.length();return N>0&&($>.001?vt.addScaledVector(U,-(tt*g)/$):(b.crossVectors(K,w),b.lengthSq()<1e-4&&b.crossVectors(K,v),vt.addScaledVector(b.normalize(),tt*g))),vt.addScaledVector(x.multiplyScalar(-1/St),tt*M),N>0&&$<B?it*Tn(1-$/B,0,1):0}function L(Y,rt,dt,K,mt){x.copy(Y).sub(rt);const pt=x.length(),vt=dt+K;pt<vt&&pt>1e-4&&Y.addScaledVector(x.multiplyScalar(1/pt),(vt-pt)*mt)}function H(Y,rt){const dt=Y.group.position,K=Y.heading,mt=Y.radius,pt=60+Y.speed*1.2;let vt=0;for(const St of a)vt=Math.max(vt,I(St.c,St.r,dt,K,mt,pt,rt));if(l&&dt.distanceTo(l.center)<l.radius+pt+80)for(const St of c)vt=Math.max(vt,I(St.position,(St.userData.viewRadius||10)*St.scale.x,dt,K,mt,pt,rt));for(const St of o)St===Y||!St.active||(vt=Math.max(vt,I(St.group.position,St.radius,dt,K,mt,pt,rt)));return vt}function k(Y){const rt=Y.group.position,dt=Y.radius;for(const K of a)L(rt,K.c,K.r,dt,1);if(l&&rt.distanceTo(l.center)<l.radius+80)for(const K of c)L(rt,K.position,(K.userData.viewRadius||10)*K.scale.x,dt,1);for(const K of o)K===Y||!K.active||L(rt,K.group.position,K.radius,dt,.5)}function j(Y,rt,dt){S.subVectors(rt,Y);const K=S.lengthSq(),mt=K>1e-6?Tn(G.subVectors(dt,Y).dot(S)/K,0,1):0;return G.copy(Y).addScaledVector(S,mt),G.distanceToSquared(dt)}function ct(Y,rt,dt){for(const K of a){const mt=K.r+dt+f;if(j(Y,rt,K.c)<mt*mt)return!1}if(l){const K=l.radius+dt+f;if(j(Y,rt,l.center)<K*K)return!1}return!0}function ft(Y,rt){const dt=new Ie;dt.visible=!1,i.add(dt);const K=Y(Gu());dt.add(K);const mt=[];Y0(K,mt);const pt=new jn().setFromObject(K),vt=pt.getSize(new P),St=vt.z,B=Math.max(vt.x,vt.y),T=pt.getBoundingSphere(new Ei).radius,it=St*G0,tt=Math.max(1.5,B*.4),N=new Float32Array(zn*3),$=new Float32Array(zn*3),ot=new Float32Array(zn),lt=new Float32Array(zn);for(let Dt=0;Dt<zn;Dt++){const Kt=Dt/(zn-1);ot[Dt]=Math.random()*2-1,lt[Dt]=Math.random()*2-1;const F=1-Kt*.85;$[Dt*3]=.72*F,$[Dt*3+1]=.9*F,$[Dt*3+2]=F}const R=new ye;R.setAttribute("position",new Be(N,3)),R.setAttribute("color",new Be($,3));const y=new Rs({size:Tn(B*.35,3,9),sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,fog:!1,blending:Tr,depthWrite:!1}),O=new Ur(R,y);O.visible=!1,O.frustumCulled=!1,dt.add(O);const Z=[],st=new Float32Array(Oo*3);for(let Dt=0;Dt<Oo;Dt++)Z.push(q0());const et=new ye;et.setAttribute("position",new Be(st,3));const Et=new Rs({color:14546687,size:Tn(B*.4,3,10),sizeAttenuation:!0,transparent:!0,opacity:0,fog:!1,blending:Tr,depthWrite:!1}),gt=new Ur(et,Et);gt.visible=!1,gt.frustumCulled=!1;const _t=Math.max(B,St*.22);dt.add(gt);const Ft=new P,at=new P,yt=new P,kt=new P,ut={group:dt,active:!1,radius:T,heading:at,speed:0,laneLen:0,warpOutStart:0,cruiseSpeed:0,peakSpeed:0,respawn:vs(0,7)+rt*.9,callsign:Or()};function Ct(){for(let Dt=0;Dt<16;Dt++){z(Ft),D(Ft,m);const Kt=p.copy(r).addScaledVector(m,vs(O0,F0));if(yt.copy(Kt).addScaledVector(Ft,-No),kt.copy(Kt).addScaledVector(Ft,No),ct(yt,kt,T))break}ut.laneLen=No*2,ut.warpOutStart=ut.laneLen-fr*.4,ut.cruiseSpeed=vs(k0,B0),ut.peakSpeed=vs(z0,H0),ut.speed=ut.peakSpeed,ut.callsign=Or(),at.copy(Ft),ut.active=!0,dt.position.copy(yt),dt.up.copy(w),dt.lookAt(p.copy(yt).add(at)),dt.visible=!0}function Yt(){ut.active=!1,dt.visible=!1,O.visible=!1,gt.visible=!1,ut.respawn=vs(V0,W0)}return ut.update=function(Dt,Kt){if(!ut.active){ut.respawn-=Dt,ut.respawn<=0&&Ct();return}const F=q.copy(dt.position).sub(yt).dot(Ft);let bt,nt=0,ht=0;if(F<fr){const te=Tn(F/fr,0,1);bt=ie.lerp(ut.peakSpeed,ut.cruiseSpeed,Dl(te)),nt=1-te,ht=Math.max(0,1-te/.22)}else if(F<ut.warpOutStart)bt=ut.cruiseSpeed;else{const te=ut.laneLen+fr-ut.warpOutStart,Bt=(F-ut.warpOutStart)/te;if(bt=ie.lerp(ut.cruiseSpeed,ut.peakSpeed,Dl(Bt)),nt=Tn(Bt,0,1),ht=Math.max(0,(Bt-.78)/.22),Bt>=1){Yt();return}}const At=nt<.05;E.copy(kt).sub(dt.position).normalize(),_.set(0,0,0);let Pt=0;At&&(Pt=H(ut,_)),C.copy(E).add(_),C.lengthSq()<1e-6?C.copy(at):C.normalize();const $t=at.angleTo(C);if($t>1e-4&&at.lerp(C,Math.min(1,h*Dt/$t)).normalize(),nt>.02)ut.speed=bt;else{const te=bt*(1-.7*Pt);ut.speed+=Tn(te-ut.speed,-d*Dt,d*Dt)}if(dt.position.addScaledVector(at,ut.speed*Dt),k(ut),dt.lookAt(p.copy(dt.position).add(at)),nt>.02){const te=it*nt;for(let Bt=0;Bt<zn;Bt++){const le=Bt/(zn-1),Ue=tt*(.25+.9*le);N[Bt*3]=ot[Bt]*Ue,N[Bt*3+1]=lt[Bt]*Ue,N[Bt*3+2]=-(le*te+St*.3)}R.attributes.position.needsUpdate=!0,y.opacity=Math.min(1,nt*1.25),O.visible=!0}else O.visible=!1;if(ht>.001){const te=_t*(.3+ht*2.5);for(let Bt=0;Bt<Oo;Bt++){const le=Z[Bt];st[Bt*3]=le.x*te,st[Bt*3+1]=le.y*te,st[Bt*3+2]=le.z*te}et.attributes.position.needsUpdate=!0,Et.opacity=ht,gt.visible=!0}else gt.visible=!1;const pe=nt>.05;for(const te of mt){if(pe){te.mat.opacity=1;continue}const Bt=Math.sin(Kt*te.speed+te.phase);te.mat.opacity=te.kind==="strobe"?Bt>.86?1:.06:.5+.5*Math.max(0,Bt)}},ut}for(let Y=0;Y<s;Y++)o.push(ft(Il[Y%Il.length],Y));let Ut=0;function Vt(Y){Ut+=Y;for(const rt of o)rt.update(Y,Ut)}return{update:Vt,ships:o}}const Fo=130,j0=.14,Z0=ie.degToRad(6),$0=.28,J0=1,Q0=16,Nl=.08,tv=1.2;function ev(i,t,e,n={}){const s=new s0;s.far=Fo;const r=new xt(0,0),o=new P,a=new P,c=new P,l=new He,u=new P,f=new P;let h=null,d=null;const g={phase:"idle",object:null,inRange:!1,firing:!1,distance:0,integrity:1,gauge:0,gaugeDriftDir:0,targetBlock:null};function M(){d&&!d.userData.broken&&(e.restoreIntegrity(d),d.userData.basePos&&d.position.copy(d.userData.basePos)),d=null,g.gauge=0}function p(){M(),h=null,g.phase="idle",g.object=null,g.inRange=!1,g.firing=!1,g.distance=0,g.integrity=1,g.gaugeDriftDir=0,g.targetBlock=null}function m(x){if(!x||!x.parent)return!1;t.getWorldPosition(o),a.subVectors(x.position,o);const U=a.length();if(U>Fo)return!1;a.divideScalar(U),t.getWorldQuaternion(l),c.set(0,0,-1).applyQuaternion(l);const b=Math.acos(ie.clamp(c.dot(a),-1,1)),E=Math.atan2((x.userData.viewRadius??4)*(x.scale.x||1),U);return b<=E+Z0}function w(){s.setFromCamera(r,t),s.far=Fo;const x=e.targetables();if(!x.length)return null;const U=s.intersectObjects(x,!1);return U.length?U[0].object:null}function v(x,U){var G,z;i.updateMatrixWorld(!0);const b=!!(x&&x.mining),E=x&&x.aimX||0;let C=null;const q=h&&!h.userData.broken&&(h.userData.parentAsteroid?h.userData.state==="free":!0);b&&q&&m(h)?C=h:(C=w(),h=C);const _=!!(C&&C.userData.parentAsteroid),S=!!(C&&!C.userData.parentAsteroid);if(d&&C!==d&&M(),t.getWorldPosition(o),b&&S){d!==C&&(d=C,g.gauge=0,g.gaugeDriftDir=Math.random()<.5?-1:1,C.userData.basePos?C.userData.basePos.copy(C.position):C.userData.basePos=C.position.clone()),g.phase="cutting",g.object=C,g.inRange=!0,g.firing=!0,g.distance=o.distanceTo(C.position);const D=e.drainIntegrity(C,j0*U);g.integrity=D,g.gauge+=(g.gaugeDriftDir*$0+E*J0)*U,g.gauge=ie.clamp(g.gauge,-1,1);const I=Nl+Math.abs(g.gauge)*(tv-Nl);if(f.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).multiplyScalar(I),C.position.copy(C.userData.basePos).add(f),Math.abs(g.gauge)>=1){(G=n.onBoom)==null||G.call(n,C.userData.basePos.clone()),e.failCut(C),d=null,h=null,p();return}D<=0&&(C.position.copy(C.userData.basePos),e.completeCut(C),(z=n.onCut)==null||z.call(n,C.position.clone()),d=null,h=null,g.phase="idle",g.firing=!1,g.object=null,g.gauge=0);return}if(b&&_){g.phase="salvage",g.object=C,g.targetBlock=C,g.inRange=!0,g.firing=!0,g.integrity=0,g.distance=o.distanceTo(C.position),u.subVectors(o,C.position),u.lengthSq()>1e-6&&(u.normalize(),C.userData.velocity.copy(u).multiplyScalar(Q0));return}d&&M(),g.phase="idle",g.firing=!1,g.object=C||null,g.inRange=!!C,g.targetBlock=null,C?(g.distance=o.distanceTo(C.position),g.integrity=S?C.userData.integrity??1:0):(g.distance=0,g.integrity=1)}return{update:v,reset:p,state:g}}function Ne(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function ko(i,t=12){const e=Math.max(0,Math.min(t,Math.round(i*t)));return"["+"#".repeat(e)+".".repeat(t-e)+"]"}const nv=' <svg class="thr-lock" viewBox="0 0 7 8" shape-rendering="crispEdges" aria-hidden="true"><rect x="2" y="0" width="3" height="1"/><rect x="2" y="1" width="1" height="2"/><rect x="4" y="1" width="1" height="2"/><rect x="0" y="3" width="7" height="5"/><rect x="3" y="4" width="1" height="2" fill="#000"/></svg>';function Bo(i){return(i<0?"-":"+")+String(Math.abs(Math.round(i))).padStart(5,"0")}function iv(i){const n=Math.max(0,Math.min(20,10+Math.round(i*10))),s=Math.abs(i),r=s<.4?"safe":s<.7?"warn":"danger",o=r==="safe"?"STABLE":r==="warn"?"WARN":"DANGER";let a='<span class="bar">';for(let c=0;c<21;c++)if(c===n)a+=`<span class="cursor ${r}">■</span>`;else if(c===10)a+='<span class="tick">|</span>';else{const l=Math.abs(c-10),u=l>6?"bg-danger":l>3?"bg-warn":"bg-safe";a+=`<span class="${u}">·</span>`}return a+="</span>",{html:a,label:o,zone:r}}function sv(){const i=document.getElementById("hud"),t=Ne("div",null,"");t.id="reticle";for(const v of["up","down","left","right","dot"])t.appendChild(Ne("span",v,""));const e=Ne("pre","readout left",""),n=Ne("pre","readout low",""),s=Ne("div",null,"");s.id="dash";const r=Ne("div","rule",""),o=Ne("div","row",""),a=Ne("span",null,""),c=Ne("span",null,"");o.append(a,Ne("span","sep","|"),c),s.append(r,o);const l=Ne("pre",null,"");l.id="mining",l.style.display="none";const u=Ne("pre",null,"");u.id="stability",u.style.display="none";const f=Ne("pre",null,"");f.id="tractor",f.style.display="none";const h=Ne("div",null,"");h.id="dock-prompt",h.style.display="none";const d=Ne("div",null,"");d.id="sys-msg",d.style.display="none";let g=null;i.append(t,e,n,s,l,u,f,h,d);function M(){}function p(v,x=3800){d.textContent=v,d.style.display="",g&&clearTimeout(g),g=setTimeout(()=>{d.style.display="none",g=null},x)}function m(){g&&(clearTimeout(g),g=null),d.style.display="none"}function w(v,x){const U=v.throttle,b=v.warp,E=v.reverse??0,C=E>0?E:U,q=E>0?-Math.round(E*100):Math.round(U*100),_=v.lock?nv:"";e.innerHTML=`SPD  ${String(Math.round(v.speed)).padStart(4)} u/s
THR  ${ko(C)} ${String(q).padStart(4)}%${E>0?" &lt;&lt; REV":""}${_}
WRP  ${ko(b)} ${String(Math.round(b*100)).padStart(4)}%${b>0?"  &gt;&gt; WARP":""}`,n.textContent=`HDG  ${String(Math.round(v.headingDeg)).padStart(4)} deg
PIT  ${String(Math.round(v.pitchDeg)).padStart(4)} deg`,a.textContent=`POS  X ${Bo(v.pos.x)}  Y ${Bo(v.pos.y)}  Z ${Bo(v.pos.z)}`,c.textContent=`VEL ${String(Math.round(v.speed)).padStart(3)}`;const S=x?x.phase:"idle";if((S==="cutting"||S==="salvage")&&x&&x.object)if(l.style.display="",S==="cutting"){const z=x.integrity??1,D=Math.round(z*100);l.classList.add("firing"),l.innerHTML=`<span class="line">${x.firing?">> CUTTING <<":"-- CUT PAUSED --"}   DST ${String(Math.round(x.distance)).padStart(3)}u   INTEG ${ko(z)} ${String(D).padStart(3)}%</span>`}else l.classList.add("firing"),l.innerHTML=`<span class="line">>> TRACTOR <<   DST ${String(Math.round(x.distance)).padStart(3)}u   HOLD R-CLICK TO REEL IN</span>`;else l.style.display="none";if(S==="cutting"){u.style.display="";const{html:z,label:D}=iv(x.gauge),I=x.gauge!=null&&Math.abs(x.gauge)<.4?"safe":x.gauge!=null&&Math.abs(x.gauge)<.7?"warn":"danger";u.innerHTML=`<span class="line">STAB ${z}  <span class="cursor ${I}">${D}</span></span>`}else u.style.display="none";f.style.display="none",v.docked?(h.style.display="",h.classList.add("docked"),h.classList.remove("docking"),h.textContent="[ DOCKED ]   PRESS  E  TO UNDOCK"):v.docking||v.undocking?(h.style.display="",h.classList.add("docking"),h.classList.remove("docked"),h.textContent=v.docking?">> DOCKING <<   AUTOPILOT":">> DEPARTING <<   AUTOPILOT"):v.canDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="PRESS  E  TO DOCK"):v.tooFastToDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="SLOW DOWN TO DOCK"):h.style.display="none"}return{update:w,resize:M,systemMessage:p,clearSystemMessage:m}}function oi(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}const Ol=100;function rv(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Fl(i){return String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function ov(){const i=document.getElementById("hud"),t=oi("div",null,"");t.id="journal";const e=oi("div",null,"");e.id="journal-full";const n=oi("div","jrn-panel",""),s=oi("div","jrn-head",""),r=oi("span","jrn-title","SHIP LOG"),o=oi("div","jrn-close","");s.append(r,o);const a=oi("div","jrn-list","");n.append(s,a),e.append(n),e.style.display="none";for(const v of["pointerdown","pointermove","pointerup","wheel","contextmenu"])n.addEventListener(v,x=>x.stopPropagation());t.addEventListener("pointerdown",v=>{v.stopPropagation(),p(!0)}),o.addEventListener("pointerdown",v=>{v.stopPropagation(),p(!1)});for(const v of["pointermove","pointerup","wheel"])t.addEventListener(v,x=>x.stopPropagation());i.append(t,e);const c=[];let l=0,u=!1;function f(v,x){const U=v.kind==="radio"?"&gt;&gt;":"&middot;";let b=`<span class="jrn-time">T+${rv(v.t)}</span><span class="jrn-tag">${U}</span><span class="jrn-msg">${Fl(v.short)}</span>`;return x&&v.text&&v.text!==v.short&&(b+=`<div class="jrn-detail">${Fl(v.text)}</div>`),b}function h(){const v=c.slice(-10);t.innerHTML=v.map(x=>`<div class="jrn-entry jrn-${x.kind}">${f(x,!1)}</div>`).join("")}function d(v=!1){const x=v||a.scrollHeight-a.scrollTop-a.clientHeight<4;a.innerHTML=c.length?c.map(U=>`<div class="jrn-entry jrn-${U.kind}">${f(U,!0)}</div>`).join(""):'<div class="jrn-empty">— no entries —</div>',x&&(a.scrollTop=a.scrollHeight)}function g(v,x){const U=typeof v=="string"?{short:v,text:null,kind:x||"info",code:null}:{short:v.short,text:v.text||null,kind:v.kind||x||"info",code:v.code||null};U.t=l,c.push(U),c.length>Ol&&c.shift(),h(),u&&d()}function M(v,x=Ol){const U=Math.max(0,c.length-x);for(let b=U;b<c.length;b++)if(c[b].code===v)return!0;return!1}function p(v){u!==v&&(u=v,e.style.display=v?"":"none",v&&d(!0))}function m(){p(!u)}window.addEventListener("keydown",v=>{v.key&&v.key.toLowerCase()==="j"?(v.preventDefault(),m()):v.code==="Escape"&&u&&p(!1)});function w(v){l+=v}return h(),{log:g,toggle:m,update:w,hasRecent:M,isOpen:()=>u}}const Ye=i=>i[Math.floor(Math.random()*i.length)],ai=(i,t)=>i+Math.floor(Math.random()*(t-i+1)),kl=["ore","raw ore","refined ore","iron ore","nickel-iron","copper ore","titanium ore","platinum ore","gold ore","silver ore","uranium ore","thorium ore","cobalt","tungsten","palladium","iridium","osmium","rhodium","bauxite","silicate sand","water ice","water","deuterium","helium-3","tritium","liquid hydrogen","liquid oxygen","liquid nitrogen","methane ice","ammonia","argon","xenon","neon","frozen volatiles","fuel cells","reactor cores","antimatter pods","fusion pellets","plasma capacitors","power cells","isotope batteries","solar film","scrap metal","alloy plating","hull plating","structural beams","sheet metal","composite panels","ceramic tiles","heat tiles","superalloy ingots","foamed aluminum","carbon fiber spools","machine parts","spare thrusters","drive couplings","pump assemblies","servo motors","heat exchangers","circuit boards","sensor modules","comm relays","nav beacons","survey drones","mining charges","cutting lasers","grapple arms","docking collars","airlock seals","pressure valves","superconductors","data cores","memory lattices","quantum chips","optical fiber","holo emitters","AI substrates","encrypted drives","navigation charts","foodstuffs","nutrient paste","grain","seed stock","hydroponics","fresh produce","algae blocks","protein vats","synth-meat","coffee beans","spices","dried rations","livestock embryos","frozen embryos","plant cuttings","fungal cultures","bee colonies","medical supplies","vaccines","antibiotics","blood plasma","organ cultures","gene therapies","surgical kits","stim packs","cryo-meds","passengers","colonists","tourists","contract laborers","refugees","a survey team","a relief crew","luxury goods","textiles","rare earths","gemstones","art (sealed crates)","antiques","vintage liquor","perfume base","silk","jewelry","coolant","lubricants","solvents","industrial acids","sealant foam","polymers","resins","ceramics","glass billets","fertilizer","rated explosives","propellant","oxygen candles","CO2 scrubbers","air filters","water reclaimers","ration bars","terraforming gear","atmosphere processors","soil bacteria","construction mechs","habitat modules","prefab shelters","solar arrays","wind turbines","salvage","derelict parts","scrapped drones","recovered black boxes","sealed crates","classified cargo","diplomatic pouches","unmarked containers","live specimens","seized contraband","quarantined goods"],zo=["Tycho Relay","Kepler Station","Drift-Nine","the inner yards","the outer marker","Halcyon Dock","Meridian Platform","the refinery","Cold Harbor","Gantry Seven","Lagrange Hub","New Sutter","the foundry","Ostrava Ring","the deep field","Cradle Station","Pellucid Yards","the scrap line","Vesper Outpost","the jump gate","Beacon Echo","Far Dock","Ironside","the lower bays","the belt","Quayside","Helios Station","Perdition Reach","Anvil Yards","the Saltworks","Caldera Dock","Stillwater Ring","the Verge","Mariner Hub","Talon Outpost","the Bastion","Ember Platform","Hollow Point","the Spindle","Gossamer Dock","Karst Station","the Reliquary","Bishop Relay","the Maw","Tannhauser Gate","Solace Ring","the Drydocks","Caravan Point","Wreck Alley","the Sprawl","Lantern Station","Obsidian Yards","the Threshold","Pilgrim Dock","Harrow Ring","the Junkfields","Aurora Platform","Daedalus Hub","the Causeway","Greywater Station","Tarsus Relay","the Picket Line","Sable Dock","Verdant Ring","the Smelters","Highgate","Nyx Outpost","the Long Dark","Castellan Station","the Anchorage","Ridgeline Yards","Pell Station","the Freeport","Goliath Dock","the Reaches","Kessler Ring","the Boneyard","Mistral Platform","New Antioch","the Tessellate","Wayfarer Hub","the Cinder Belt","Ourania Station","the Trench","Provender Dock","Ashfall Ring","the Watchpost","Garrison Nine","the Sieve","Helion Yards","the Far Reaches","Selene Dock","the Quarantine Ring","Mercer Station","the Driftway","Cobalt Harbor","the Verdigris","Tycho Lower","Kepler High","the Gantries","Redoubt Station","the Marshalling Yards","Concord Dock","the Bight","Halberd Ring","the Spillway","Junctor Hub","the Outworks","Sentinel Platform","the Hollows","Calder Station","the Stacks","Wend Outpost","the Reef","Pannier Dock","the Lattice","Voss Relay","the Deadlanes","Hesperus Ring","the Coalsack","Branner Yards","the Estuary","Foundry Six","the Approaches","Marrow Dock","the Causey","Tindall Station"],Bl=["main drive","coolant loop","reactor","RCS thrusters","nav computer","life support","shield emitter","sensor array","comm array","gyros","fuel pump","heat sinks","port nacelle","starboard nacelle","inertial dampers","jump drive","docking clamps","gravity plating","primary capacitor","secondary capacitor","plasma injector","fuel mixer","reaction wheel","attitude jets","thermal regulator","radiator fins","oxygen recycler","CO2 scrubber","water reclaimer","power bus","backup battery","main bus","transformer coil","field generator","deflector dish","particle sink","warp coil","warp manifold","flux capacitor","magnetic bottle","containment field","antimatter trap","ion thruster","main injector","turbopump","heat pipe","cryo pump","condenser","sensor mast","lidar array","radar dish","optical scope","spectrometer","transponder","beacon transmitter","autopilot","flight computer","star tracker","horizon sensor","docking laser","grapple winch","cargo crane","airlock","pressure hull","blast door","escape pod bay","medbay","galley","crew quarters","observation deck","landing gear","undercarriage","keel","spine truss","solar wing","battery array","heat shield","ablative plating","point defense","tractor emitter","stabilizer fin","trim tab","ballast tank","distress beacon","gimbal mount","fuel scrubber","plasma vent","arc suppressor"],av=["bearing two-seven-zero","bearing one-eight-zero","bearing zero-niner-zero","bearing three-three-zero","high to port","low to starboard","dead ahead","off the stern","up-spin","down-spin","coreward","rimward","bearing nil","bearing zero-four-five","bearing one-three-five","bearing two-two-five","bearing three-one-five","bearing zero-one-zero","bearing zero-six-zero","bearing one-two-zero","bearing one-five-zero","bearing two-one-zero","bearing two-four-zero","bearing three-zero-zero","bearing zero-three-zero","high to starboard","low to port","off the bow","off the port quarter","off the starboard quarter","directly above","directly below","astern","to port","to starboard","high overhead","below the keel","two points off the bow","three points to port","off the nose","trailing aft","crossing left to right","crossing right to left","closing fast","holding station","drifting astern","spinward","antispinward","sunward","shadowside","toward the cluster","toward the station","out past the marker","near the jump gate","along the belt plane","above the ecliptic","below the ecliptic","inbound","outbound","on an intercept line","low and closing","high and slow","fading on the scope"];function cv(i,t){const e={cs:()=>t,cs2:Or,cs3:Or,cargo:()=>Ye(kl),cargo2:()=>Ye(kl),dest:()=>Ye(zo),dest2:()=>Ye(zo),origin:()=>Ye(zo),system:()=>Ye(Bl),system2:()=>Ye(Bl),bearing:()=>Ye(av),lane:()=>ai(1,9),corridor:()=>ai(1,6),bay:()=>ai(1,24),min:()=>ai(2,45),queue:()=>ai(2,9),count:()=>ai(2,9),hops:()=>ai(2,6)};return i.replace(/\{(\w+)\}/g,(n,s)=>e[s]?String(e[s]()):n)}const lv=["Long haul. Could use a real cup of coffee out here.","{cs2}, you copy? Been dead quiet on this band.","Third run this cycle. Eyes are starting to cross.","Anybody got the scores from the inner yards?","Tell {cs2} they still owe me a drink at {dest}.","Beautiful view of the cluster from up here, I'll give it that.","Halfway through the shift and nothing but static.","{cs2}, nice burn on that exit. Showing off again?","Remind me why I took the night rotation.","Somebody left the galley a mess. Again.","Same rock, same run, same paycheck.","You hear they're rerouting traffic past {dest}?","Sensors are picking up a whole lot of nothing.","Forty cycles to retirement. Not that I'm counting.","{cs2}, save me a docking slot, would you?","My nav says {dest}. My gut says lunch.","Quiet out here tonight. I like it that way.","Whoever calibrated these gyros owes me an apology.","Counting asteroids to pass the time. Lost track at four hundred.","New kid keeps calling it 'up'. There's no up out here.","Coffee machine's down. This is a genuine emergency.","Long way from home, this run.","{cs2}, that you on my scope or just more debris?","Another day, another belt. Same as the last.","Tell control the corridor markers are drifting again.","If I see one more cargo manifest I'm spacing myself.","Music's the only thing keeping me awake out here.","Pretty sure my co-pilot's asleep. Lucky him.","{cs2}, you still on for cards when we dock at {dest}?","Sun's coming up over the cluster. Worth the trip alone.","Stars look different from out past the marker. Colder, somehow.","Forgot my lucky wrench at {dest}. Whole run feels off now.","Three weeks on this tub and the recycler still smells like feet.","Anyone else's nav humming a B-flat, or is it just mine?","I swear this corridor's longer than it was yesterday.","Caught a meteor shower {bearing}. Free fireworks.","Tell the kids I'll be home by the next resupply. Probably.","Forty thousand klicks of nothing and a great playlist.","{cs2}, your strobes are out. Just so you know.","Logged my ten-thousandth hour today. Nobody clapped.","Coffee, course, cargo. The three Cs. In that order.","Drifting through the quiet part of the run. Love it.","Somebody's playing opera on the open channel again.","My back's been telling me to retire for six years now.","Cluster's pretty this time of cycle. Don't tell anyone I said so.","{cs2}, did you ever get that rattle in your nacelle fixed?","Hauling for {dest} again. Place never changes.","Out here long enough, you start naming the asteroids.","This far out, even the static sounds friendly.","Saw a long-hauler that must've been two klicks bow to stern.","Co-pilot bet me we'd beat schedule. Co-pilot's broke now.","Nothing on the scope but us and the dark. Suits me.","Tell {cs2} the customs line at {dest} is a nightmare today.","Eighteen hours in and the only excitement was a sneeze.","Whoever designed these seats never sat in one.","Burned past {dest} once without stopping. Best day of my career.","If the reactor hums any louder I'll have to charge it rent.","Spotted an old wreck {bearing}. Gave it a respectful nod.","Same three songs for two thousand klicks. Send help.","{cs2}, you awake over there? Your transponder's the only thing talking.","Cargo's quiet, drive's smooth, life is good. For now.","Going to miss this view when they automate us all.","Heard {dest} finally fixed their gravity ring. Believe it when I dock.","My nav computer and I are no longer on speaking terms.","Out here you learn to like your own company.","Passed a tourist liner. They waved. I waved back.","Twelve more runs and I'm buying a little ice moon somewhere quiet.","Somebody on this band's chewing way too close to their mic.","Clearest sky I've seen all cycle. Not a speck of dust.","{cs2}, race you to the marker. Loser buys at {dest}.","Reactor's purring like it actually likes me today.","Been talking to my plants again. They're better listeners than control.","Cargo bay's colder than my ex. And just as empty.","Logged a perfect burn. Nobody saw it. Story of my life.","Out past the belt the silence has a sound to it.","Tell {dest} to keep the lights on, I'm running late.","Spent the last hour watching dust glitter in the running lights.","If I had a credit for every klick, I'd still be out here.","Half the fun of this job is the half there isn't any.","{cs2}, your wake's all over my approach. Tidy up.","Recycler's making that noise again. The ominous one.","Going to name this stretch of nothing after myself.","Slow run today. I've reorganized the toolkit twice.","You can almost hear the cluster turning out here.","Picked the scenic route. Regret nothing.","Captain's asleep, so technically I'm in charge. Don't tell.","Another sunrise over {dest}. They never get old.","Twenty years out here and the dark still gets me sometimes.","Just me, the hum, and a thermos of something resembling coffee.","{cs2}, that was a clean dock. Buying you a round at {dest}.","Lost a glove to the airlock. Floating out there forever now.","If this run gets any quieter I'll start talking to the cargo.","Best part of the job? Nobody up here to tell me I'm wrong.","Worst part? Nobody up here at all, some nights.","Trimmed a full minute off my usual. Small victories.","Cluster's throwing shadows like a clock today.","Tell the relief crew the heater in bunk two is a liar.","Drive's smooth, scope's clear, and the coffee's almost warm. Perfect.","{cs2}, you ever just cut the lights and drift a while?","Heard a long-hauler sing to themselves on the dead channel. Beautiful, actually.","Six souls aboard, five asleep, one talking to strangers on the radio.","Spotted the station lights from way out. Feels like coming home.","Marking another quiet shift in the log. The good kind.","Dust on the canopy again. Out here it's basically weather.","If you're listening, {cs2}, you snore on an open channel."],uv=["Control, requesting departure clearance, lane {lane}.","Ops, requesting vector to {dest}.","Holding short of the corridor, awaiting clearance.","Requesting priority docking, running behind schedule.","{cs2}, hold your position, I've got crossing traffic.","{cs2}, you are drifting into my lane, come starboard.","Control, confirm I am cleared through corridor {corridor}.","Stacking up out here, request a hold vector.","Traffic, wide load on approach, give me room.","Requesting handoff to station approach.","{cs2}, after you on the corridor, I'll follow you in.","Control, my transponder's glitching, advise.","Lane {lane} is backed up, requesting reroute.","On final, gear warm, clamps ready.","Breaking off approach, going around.","Squawking ident, confirm you have me.","Control, requesting a slot at {dest}, ETA {min} minutes.","Request permission to cross corridor {corridor} outbound.","Ops, am I cleared to spin down in the dock perimeter?","Requesting a tug, my clamps are sluggish.","Control, traffic {bearing}, request advisory.","{cs2}, reduce your closure, you're inside my bubble.","Requesting fuel reservation at the ring, low on reserves.","Control, declaring minimum fuel, request direct routing.","Holding at the marker, request sequencing number.","Ops, my nav's reading two corridors, which is live?","Request a wider berth on approach, hauling overlength.","Control, lost the localizer, request vectors to {dest}.","{cs2}, confirm you see me, closing {bearing}.","Requesting clearance to test thrusters in the safe lane.","Ops, requesting hold until that debris {bearing} clears.","Control, request expedited departure, time-critical cargo.","Requesting handoff, leaving your airspace {bearing}.","{cs2}, slow your roll, the clamps aren't going anywhere.","Control, I'm number how-many for the dock?","Request altitude... well, you know what I mean. Going up-spin.","Ops, confirm corridor {corridor} markers are lit, I've got nothing.","Requesting clearance to jettison empty pods in the safe zone.","Control, my squawk's intermittent, paint me on radar?","Requesting straight-in approach, no time for the pattern.","{cs2}, you're cleared ahead of me, I'll hold.","Ops, request a hold, sorting a cargo shift before approach.","Control, declaring a soft alert, requesting a clear lane.","Requesting clearance to {dest}, manifest filed.","{cs2}, give way, I'm constrained by my draft on this vector.","Control, confirm the queue, I've been holding {min} minutes.","Requesting a quieter band, this one's jammed with chatter.","Ops, am I cleared to drop the grapple and take that salvage?","Control, request a flash of the approach lights, I'm half blind out here.","Requesting permission to shadow {cs2} through the corridor."],hv=["Hauling {cargo} to {dest}, ETA {min} mikes.","Outbound from {origin} with a hold full of {cargo}.","Light load this run, just {cargo} for {dest}.","Manifest says {cargo}. Smells more like {cargo2}.","Passing the outer marker, {cargo} aboard, all green.","Heavy with {cargo}, watch my wake on the corridor.","{cargo} delivery for {dest}, who is signing for it?","Running {cargo} to the deep field, back in {min}.","Cargo is shifting in the hold, slowing to secure it.","Empty run home, dropped the {cargo} at {dest}.","Carrying {cargo}, handle with care on the clamps.","Inbound, {cargo} for the refinery, ETA {min} minutes.","Picked up {cargo} from {origin}, bound for {dest}.","Overweight on {cargo} again, the yard will love that.","This {cargo} run doesn't pay enough, I'll tell you that.","Sealed manifest. Don't ask, I'm not telling.","Time-sensitive {cargo}, requesting the fast lane.","Two pallets of {cargo} short. Someone's getting a call.","{cargo} secured, all green, proceeding to {dest}.","Hot cargo, {cargo}, keep your distance on approach.","Full hold of {cargo}, riding low and slow to {dest}.","Manifest got swapped, I'm carrying {cargo}, not {cargo2}. Again.","Dropping {cargo} at {dest}, then deadheading to {dest2}.","Fragile load, {cargo}, no fast burns this trip.","{cargo} for the colony at {dest}. They've been waiting weeks.","Customs flagged my {cargo}. This is going to take a while.","Hauling {cargo} one way, {cargo2} back. Never an empty leg.","{cargo} aboard, transponder logged, clean run so far.","Diverting to {dest2}, the {cargo} buyer changed their mind.","Refrigerated load of {cargo}, can't afford a power blip.","Bulk {cargo}, low margin, high mileage. The usual.","Carrying {cargo} for {dest}. Don't love what's in the back, honestly.","Manifest reads {cargo}. Weight says otherwise. Not my problem.","Loaded {cargo} at {origin}, scales were generous. Lucky me.","Priority {cargo}, jumping the queue if they'll let me.","{cargo} run to {dest}, then I'm off rotation for a cycle.","Hold's pressurized, {cargo} stable, all readings nominal.","Picked up extra {cargo} at {origin}. Tight squeeze in the bay.","Spilled a crate of {cargo} in the hold. Cleaning that up for hours.","Live cargo this run, easy on the gees for the {cargo}.","{cargo} for {dest}, insured to the rivets. Wonder why.","Three pallets of {cargo}, one's leaking. Wonderful.","Hauling {cargo}, but the real money's the {cargo2} underneath.","Clean manifest, {cargo} to {dest}, nothing to declare.","{cargo} bound for {dest}. Slower than I'd like with this load.","Topped off with {cargo} at {origin}, hold's at capacity.","Carrying {cargo}. If it ticks, that's normal. Probably.","Diverted my {cargo} run through {dest2}, adds an hour.","Hold full of {cargo}, and the buyer's already haggling over the channel.","{cargo} delivered, signed off, deadheading home empty and happy."],dv=["Reporting a {system} fault, dropping to half burn.","{system} is acting up, nursing it to {dest}.","Reactor running hot, requesting priority docking.","Lost the {system}, switching to backups.","{system} pressure in the yellow, keeping an eye on it.","Got a flutter in the {system}, anyone heard that before?","Venting heat, give me a wide berth.","{system} recalibrating, my heading may wander, sorry.","Down a thruster, handling is sloppy, watch out.","{system} failure, soft alert, no assist needed yet.","Coolant is low, throttling back before something melts.","My {system} is held together with tape and prayers.","Patched the {system} mid-burn. Don't recommend it.","Sensor ghosting again, my scope is half junk.","Gyros tumbling, stand by while I sort this out.","Fuel tighter than I'd like, going easy on the burn.","{system} threw a fault code I've never seen. Love that.","Lost pressure in the {system}, isolating it now.","My {system}'s been groaning since {origin}. Today might be the day.","Cycling the {system}, expect my lights to flicker.","{system} overheating, popping the radiators, mind the glare.","Backup {system} engaged, primary's cooked.","Took a micrometeorite to the {system}. Could be worse.","{system}'s drawing too much power, shedding nonessentials.","Rerouting around a dead {system}, performance is going to suffer.","My {system} and my {system2} are both complaining. Great.","Hairline crack in the {system}, watching it like a hawk.","{system} keeps tripping the breakers. Third time this hour.","Drive's surging, suspect the {system}, throttling back.","{system} maintenance overdue by a thousand hours. Don't judge me.","Limping in on a bad {system}, request a gentle approach.","{system} froze up, literally, condensation got in.","Smelled something burning near the {system}. That's never good.","Lost telemetry on the {system}, flying it by feel.","{system} recalibrated, back to full performance, sorry for the chatter.","Vibration in the {system} I can feel in my teeth.","{system} alarm went off, turned out to be a loose sensor. Heart attack averted.","Manually overriding the {system}, autopilot's confused.","My {system}'s running on a part I printed myself. Wish me luck.","{system} degraded, declaring reduced maneuverability.","Reactor scram on the {system} fault, restarting now, stand clear.","{system}'s fine, it's the warning light that's broken. I think.","Bled the {system}, should ride smoother now.","Lost half my {system} output, still flyable, just slow.","{system}'s been stable for an hour. Watch me jinx it.","Coolant leak near the {system}, sealing the bulkhead.","{system} acting possessed, power-cycling the whole rack.","Replaced the {system} at {origin} and it's already whining.","Running the {system} cold to save it. Long, careful burn.","{system} back online. Crisis averted. Mostly."],fv=["All traffic, debris {bearing}, advise you divert.","Heads up, rock drift {bearing}, and it's moving.","Micrometeorite stream {bearing}, shields up.","Solar activity climbing, recommend topping your shielding.","Watch the slag cloud off the refinery, scopes don't love it.","Radiation spike {bearing}, button up your hulls.","Debris from an old wreck {bearing}, give it room.","Dust is thick {bearing}, visuals are useless out there.","Caution, tumbling container adrift {bearing}.","Gravimetric shear near the cluster, mind your trim.","Flare warning from the deep field, batten down.","Something big and unlit {bearing}, all traffic stay sharp.","Ice fragments {bearing} peppered my hull, watch yourselves.","Charged dust {bearing}, comms crackling, expect noise.","Frozen propellant cloud {bearing}, kills your sensors, route around.","Magnetic anomaly {bearing}, my compass is spinning, heads up.","Unlogged ship {bearing}, no transponder, keep your distance.","Sensor blind spot {bearing} where the dust's thickest.","Hot debris field {bearing}, still glowing, do not transit.","Slow tumbler {bearing}, looks like a shed cargo pod.","Watch for backscatter {bearing}, the cluster's lighting up the dust.","Loose mining charge adrift {bearing}. Do not, repeat, do not nudge it.","Heavy traffic stacking {bearing}, expect erratic vectors.","Wreckage spreading {bearing}, somebody lost a load.","Static storm rolling in {bearing}, comms about to get rough.","Plasma wash from a warp exit {bearing}, give it a minute to clear.","Drifting fuel bladder {bearing}, ruptured, slick on the sensors.","Caution, derelict tumbling {bearing}, no lights, no squawk.","Particle density rising {bearing}, throttle back through it.","Sharp debris {bearing}, took a scratch myself, slow down.","Solar wind gusting {bearing}, trim for it or you'll yaw.","Unsecured cargo crane swinging on a derelict {bearing}.","Cold cloud {bearing} eating my thermal sensors, fly visual.","Rock the size of a tug {bearing}, slow roll, plenty of warning.","Comms shadow {bearing} behind the big asteroid, you'll drop out.","Glittering debris {bearing}, pretty, but it'll pit your canopy.","Venting wreck {bearing}, pushing itself around unpredictably.","Dense pack of pebbles {bearing}, too small to dodge, just slow down.","Heat bloom {bearing}, possible reactor breach on a derelict, avoid.","Whole corridor's hazy {bearing}, somebody kicked up the dust."],pv=["Mayday, mayday, {system} failure, requesting immediate assist.","Pan-pan, pan-pan, lost main drive, drifting {bearing}.","Declaring an emergency, fire in the {system} bay.","Hull breach, sealing compartments, requesting rescue.","Losing life support, anyone in range, please respond.","Mayday, collision with debris, venting atmosphere.","Engines dead, drifting toward the cluster, need a tow now.","Mayday, {system} explosion, casualties aboard, need medical.","Pan-pan, reactor scrammed, on batteries, time critical.","Lost all thrust, tumbling {bearing}, can't stabilize.","Cabin pressure dropping, on suits, requesting urgent docking.","Mayday, struck an unlit object {bearing}, hull compromised.","Power's failing across the board, sending position now.","Pan-pan, {system} and {system2} both down, limited control.","Fire suppression failed, evacuating to the {system} bay.","Mayday, fuel breach, isolating, request foam on the pad.","Drifting powerless {bearing}, any vessel, please acknowledge.","Declaring emergency, navigation lost, flying blind.","Hull integrity at minimum, requesting nearest dock, any port.","Pan-pan, jammed clamps mid-undock, hanging off the ring.","Mayday, runaway burn, can't cut the {system}, clear my vector.","Coolant gone, reactor climbing, abandoning if it doesn't hold.","Lost the {system}, can't slow for approach, request a clear lane.","Crew member down, requesting a medical bay on arrival.","Mayday, micrometeorite swarm, multiple breaches, mapping damage.","Stuck in a flat spin {bearing}, RCS unresponsive, need talk-down.","Pan-pan, lost cabin heat, temperature dropping fast.","Emergency, cargo of {cargo} unstable, considering jettison.","Mayday, structural failure at the {system}, hull flexing.","Adrift and dark {bearing}, conserving power, monitoring this channel."],mv=["Anyone else getting that signal {bearing}? ...Probably nothing.","Picking up a transponder that's been dead for twenty years.","Ghost contact {bearing}, gone before I could lock it.","Old beacon out here still transmitting. Nobody knows why.","Cold spot {bearing} my sensors won't explain.","Heard a voice on the dead channel again. I keep that to myself.","Same derelict drifts past every cycle. Never the same heading twice.","Something past the deep field is answering my pings.","Got a navigation chart with a station marked that doesn't exist.","The cluster shadow moved wrong just now. Trick of the light. Has to be.","Picked up a distress call dated next week. Filed it. Said nothing.","There's a hull out here older than the colony. Nobody salvages it.","My star tracker locked onto a star that isn't on any map.","Heard the long-haulers won't transit {bearing} after dark. Now I get it.","Found a logbook floating {bearing}. Last entry's just one word, repeated.","Signal's counting down in a language the computer won't translate.","Same coordinates keep showing up in my nav cache. I never entered them.","There's a derelict that hails YOU first. Don't answer it.","Old timers call this stretch the Quiet. Now nobody's talking.","My reflection in the canopy waved a half-second late just now.","Beacon Echo's been answering pings it shouldn't be able to hear.","The dust out here remembers shapes. Saw a face in it for a second.","Caught a broadcast of my own callsign. I never sent it.","There's a wreck {bearing} with its lights still on. No power source.","Compass points to nothing in particular and holds there. Always the same nothing.","Heard singing on the carrier wave. Crew says it's interference. Crew's wrong.","An empty escape pod's been shadowing me for three runs. Door's open.","The jump gate hummed when nothing went through it.","Found a manifest for a ship that was never built. Cargo: us.","Out past the marker, the stars blink in order. Like a code. Like a count.","My grandfather flew this route. Says the Quiet's been getting closer.","Picked up a lullaby on a frequency that doesn't carry sound.","There's a station on the old charts called Home. No coordinates. Just Home.","Saw my own running lights {bearing}, ahead of me, on my exact heading.","The derelict's name plate keeps changing. Photographed it twice. Two names.","Something out here keeps the marker buoys warm. They should be ice cold.","Got a reply to a message I haven't decided to send yet.","The cluster's count of asteroids went up by one. There's no new one. I checked.","They decommissioned Beacon Echo a decade ago. It just wished me safe travels.","Every cycle, {bearing}, for one second, the radio plays the sound of a door closing."],gv=["All inbound traffic, hold for sequencing.","Docking queue is {queue} deep, expect delays.","Bay {bay} is now open for approach.","Bay {bay} closed for maintenance, reroute.","Refueling operations nominal at the ring.","Customs inspection in progress, bay {bay}.","Corridor {corridor} is now the active approach lane.","All vessels, reduce speed within the dock perimeter.","Quarantine protocol active on bay {bay}.","Tug services delayed, manual docking advised.","Cargo backlog at the yards, deliveries holding.","Approach lights lit, corridor {corridor} cleared for sequencing.","Shift rotation underway, expect brief comm gaps.","Power conservation in effect, non-essential systems offline.","Free berth open at bay {bay}, first come first served.","Outbound traffic, hold at the marker until corridor {corridor} clears.","Bay {bay} reserved for priority cargo, all others stand by.","Ring rotation adjusting, expect minor gravity fluctuations.","Fuel reserves low, rationing burns to essential traffic.","All traffic, transponders mandatory inside the perimeter.","Sequencing inbound flights, average wait {min} minutes.","Bay {bay} cleared, next in queue you are go for approach.","Maintenance crew on the hull, all docking holds at corridor {corridor}.","Customs sweep complete, normal operations resuming.","Dock master reports {queue} vessels in the pattern.","All vessels maintain station-keeping, traffic is heavy.","Lighting reduced on the upper ring, conserve and dock by instruments.","New arrivals, squawk ident and hold for a slot.","Bay {bay} flooding for pressure test, keep clear.","Corridor {corridor} markers recalibrating, fly the beacons not the chart.","Tug {cs2} dispatched to assist inbound traffic.","All clamps cycling for inspection, brief docking pause.","Cargo handlers on shift change, loading resumes shortly.","Priority lane open corridor {corridor} for medical traffic only.","Ring power on backup, expect flicker, docking unaffected.","Inbound flights, slow to perimeter speed or be held.","Bay {bay} occupant overstaying, dispatching a notice.","Approach radar degraded, pilots maintain visual separation.","All traffic, hold the chatter, emergency channel must stay clear.","Docking fees updated, see the bulletin before departure.","Sequencing reset, all inbound re-squawk for new numbers.","Bay {bay} now serving overlength vessels, others use {corridor}.","Gravity ring at reduced spin for repairs, watch your footing on arrival.","Outbound corridor {corridor} clear, departures are go.","Resupply barge docking, all traffic give the freight lane a wide margin.","Pressure doors on bay {bay} sticking, crews advised, allow extra time.","All vessels, the perimeter speed limit is enforced today, no exceptions.","Holding pattern is full, new arrivals divert and re-approach in {min}.","Night cycle lighting active, approach lights at full for your benefit.","Dock control rotating to the relief team, expect a brief handover."],_v=["Traffic advisory: debris {bearing}, divert as needed.","Solar weather advisory in effect, shields up on approach.","Beacon alignment in progress, navigation may degrade.","Unscheduled vessel logged {bearing}, monitoring.","Long-range scan complete, sector nominal.","Emergency channel test, disregard.","Gravimetric anomaly logged near the cluster, advise caution.","Lost contact with an outbound hauler {bearing}, investigating.","Radiation advisory: levels elevated {bearing}, limit exposure.","All traffic, a flare is forecast within the hour, plan accordingly.","Advisory: dust density rising {bearing}, expect reduced sensor range.","Unidentified contact {bearing}, vessels report any visual.","Navigation advisory: corridor {corridor} markers offline, fly with care.","Weather: charged particle storm {bearing}, comms may degrade.","Advisory, derelict adrift {bearing}, salvage crews notified, keep clear.","Search and rescue active {bearing}, all traffic yield to SAR vessels.","Advisory: micrometeorite activity up {bearing}, shields recommended.","Sector patrol passing through {bearing}, expect scanning sweeps.","Advisory, a vessel is declaring emergency {bearing}, clear the lanes.","Notice: jump gate cycling {bearing}, expect transient interference.","Advisory: temperature anomaly {bearing}, sensors may misread.","All traffic, comms relay {bearing} is down, expect dead zones.","Advisory: cargo spill reported {bearing}, navigate around the field.","Notice: a long-hauler reports a ghost contact {bearing}. Logged for review.","Advisory, the belt plane is congested today, transit with caution.","Weather update: solar activity easing, advisory lifted shortly.","Advisory: unregistered beacon transmitting {bearing}, do not rely on it.","All vessels, a quarantine vessel is inbound, expect a holding pattern.","Advisory: sensor mirage reported {bearing}, confirm contacts visually.","Notice: routine patrol requests all transponders remain active.","Advisory, debris reentry into the cluster {bearing}, expect bright flashes.","Long-range advisory: traffic surge expected from {dest}, plan holds.","Advisory: a tug has gone silent {bearing}, last seen towing salvage.","Notice: navigation database update available, sync before departure.","Advisory, gravitational lensing {bearing} may distort star fixes.","All traffic, an old distress beacon is looping {bearing}. Source confirmed derelict.","Advisory: thermal bloom {bearing}, possible reactor venting, stay clear.","Notice: the outer marker buoy is drifting, recalibrating its position.","Advisory, pirate activity rumored {bearing}, keep transponders honest.","Final advisory of the cycle: sector quiet, safe travels, all vessels."],vv=["Shuttle, you are coming in too fast. Reduce speed in the station zone.","Inbound shuttle, slow down. You're over the perimeter speed limit.","Ease off the throttle, shuttle, you're approaching far too quickly.","Shuttle, check your speed. This is a controlled zone, not a racetrack.","Reduce velocity immediately, you're entering the dock perimeter too hot.","Slow it down, shuttle. We'd like the station to stay in one piece.","Shuttle, your closure rate is excessive. Bleed off some speed.","Throttle back, shuttle. You're well above safe approach speed.","Control to shuttle, you are too fast for this proximity. Decelerate now.","Shuttle, kill your speed before you reach the ring. Last warning.","Cut your velocity, shuttle, you're a hazard at that pace.","Shuttle, the perimeter has a speed limit and you're shredding it. Slow down."],xv=["Shuttle, you just struck the station. What in the void are you doing?","That was a collision, shuttle. Watch where you're flying!","You hit us, shuttle. Pull back before you do more damage.","Control to shuttle, you've made contact with the structure. Knock it off.","Are you trying to dock or demolish us? Back off, shuttle.","Shuttle, that's a hull strike on the station. Get clear, now.","You scraped the ring, shuttle. There's paperwork for this, you know.","Collision alert, the shuttle made contact. Steady your approach!","Shuttle, hands off the station! Maintain your distance.","That impact is going on your record, shuttle. Fly straight.","You clipped us, shuttle. The dock crew is not amused.","Shuttle, cease ramming the station. This is not a drill."];function yv(){return Ye(vv)}function Mv(){return Ye(xv)}const Sv=[{hud:"WARP INHIBITED — OBSTACLE AHEAD",voice:"Warp inhibited. Obstacle ahead."},{hud:"WARP LOCKED — OBSTACLE IN PATH",voice:"Cannot engage warp. Object in our path."},{hud:"WARP BLOCKED — CLEAR THE HEADING",voice:"Warp blocked. Clear the heading first."}],Ev=[{hud:"DROPPING OUT OF WARP — PROXIMITY",voice:"Proximity alert. Dropping out of warp."},{hud:"WARP ABORTED — OBSTACLE NEAR",voice:"Obstacle nearby. Aborting warp."},{hud:"WARP DISENGAGED — OBJECT CLOSE",voice:"Disengaging warp. Object too close."}];function bv(){return Ye(Sv)}function wv(){return Ye(Ev)}const Tv=[{w:30,t:lv},{w:16,t:uv},{w:18,t:hv},{w:12,t:dv},{w:10,t:fv},{w:3,t:pv},{w:4,t:mv}],Av=[{w:60,t:gv},{w:40,t:_v}];function Rv(i){let t=0;for(const n of i)t+=n.w;let e=Math.random()*t;for(const n of i)if((e-=n.w)<=0)return n;return i[i.length-1]}function Cv(i){const t=i.station?Av:Tv,e=Ye(Rv(t).t);return`${i.callsign}: ${cv(e,i.callsign)}`}const zl={type:"change"},dc={type:"start"},Vu={type:"end"},pr=new Us,Hl=new Hn,Pv=Math.cos(70*ie.DEG2RAD),Se=new P,ze=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class Wu extends o0{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new He,this._lastTargetPosition=new P,this._quat=new He().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bl,this._sphericalDelta=new bl,this._scale=1,this._panOffset=new P,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new P,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dv.bind(this),this._onPointerDown=Lv.bind(this),this._onPointerUp=Iv.bind(this),this._onContextMenu=zv.bind(this),this._onMouseWheel=Ov.bind(this),this._onKeyDown=Fv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Bv.bind(this),this._onMouseDown=Uv.bind(this),this._onMouseMove=Nv.bind(this),this._interceptControlDown=Hv.bind(this),this._interceptControlUp=Gv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zl),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ze:n>Math.PI&&(n-=ze),s<-Math.PI?s+=ze:s>Math.PI&&(s-=ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Se.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<Pv?this.object.lookAt(this.target):(Hl.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(Hl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(zl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Dv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Iv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vu),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Uv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(dc)}function Nv(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vu))}function Fv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function kv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(dc)}function Bv(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function zv(i){this.enabled!==!1&&i.preventDefault()}function Hv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vv=8191130,Wv=10479871,Gl=3108420,Vl=16757322,Xv=16739029,mr=188,ci=1e7;function qv(i,t,e,n,s=()=>!1,r=()=>{}){const o=document.getElementById("hud"),a=Math.min(window.devicePixelRatio||1,2),c=i.cluster,l=i.asteroids,u=document.createElement("div");u.id="minimap";const f=document.createElement("div");f.className="mini-label",f.textContent="NAV";const h=document.createElement("div");h.id="mini-close",h.textContent="×",u.append(f,h),o.append(u);const d=new ic({antialias:!0,alpha:!0});d.setPixelRatio(a);const g=d.domElement;u.appendChild(g);const M=new rc,p=new ke(45,1,1,2e5),m=ie.degToRad(p.fov),w=c.radius*80,v=80,x=w/2,U=new Ie;function b(N,$){const ot=new r0(w,v,Gl,Gl);ot.material.transparent=!0,ot.material.opacity=.05,N==="x"?(ot.rotation.z=Math.PI/2,ot.position.x=$*x):N==="z"?(ot.rotation.x=Math.PI/2,ot.position.z=$*x):ot.position.y=$*x,U.add(ot)}for(const N of["x","y","z"])b(N,-1),b(N,1);M.add(U);const E=new Float32Array(l.length*3),C=new ye;C.setAttribute("position",new Be(E,3));const q=new Rs({color:Vv,size:Math.max(8,c.radius*.06),sizeAttenuation:!0,transparent:!0,opacity:.95}),_=new Ur(C,q);_.frustumCulled=!1,M.add(_);const S=new Ie,G=Math.max(16,c.radius*.09),z=new Ce(new _n(G*.42,G,12),new mi({color:Wv}));z.rotation.x=-Math.PI/2,S.add(z),M.add(S);let D=null;if(e){D=new Ie;const N=e.radius*.55,$=new Ce(new un(N,N*.1,8,24),new mi({color:Vl})),ot=new Ce(new je(N*.28,12,12),new mi({color:Vl}));D.add($,ot),D.position.copy(e.center),D.frustumCulled=!1,M.add(D)}let I=null,L=null;if(n&&n.ships.length){L=new Float32Array(n.ships.length*3).fill(ci);const N=new ye;N.setAttribute("position",new Be(L,3));const $=new Rs({color:Xv,size:Math.max(10,c.radius*.07),sizeAttenuation:!0,transparent:!0,opacity:.95});I=new Ur(N,$),I.frustumCulled=!1,M.add(I)}const H=new Wu(p,g);H.enableDamping=!0,H.dampingFactor=.08,H.enablePan=!1,H.rotateSpeed=.9,H.zoomSpeed=.9,H.enabled=!1;const k=new P(0,1,0);function j(N){p.up.copy(N),H._quat.setFromUnitVectors(N,k),H._quatInverse.copy(H._quat).invert()}let ct=!1,ft=mr,Ut=mr;const Vt=new P,Y=new P,rt=new P,dt=new He,K=new P;function mt(N){return K.copy(N).sub(t.position).applyQuaternion(dt),Math.abs(K.x)<=x&&Math.abs(K.y)<=x&&Math.abs(K.z)<=x}function pt(){ct?(ft=window.innerWidth,Ut=window.innerHeight):(ft=mr,Ut=mr),d.setSize(ft,Ut,!1),g.style.width=ft+"px",g.style.height=Ut+"px",p.aspect=ft/Ut,p.updateProjectionMatrix(),d.setClearColor(132620,ct?1:.5)}pt();function vt(){let N=t.position.distanceTo(c.center)*.6+c.radius;return e&&(N=Math.max(N,t.position.distanceTo(e.center)*.6+e.radius)),N/Math.sin(m*.5)}function St(){const N=p.position.distanceTo(t.position);S.scale.setScalar(ie.clamp(N*.003,.5,5))}function B(){Vt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),Y.set(0,1,0).applyQuaternion(t.quaternion),p.up.copy(Y),p.position.copy(t.position).addScaledVector(Vt,vt()),p.lookAt(t.position)}function T(N){ct=N,u.classList.toggle("expanded",N),r(N),pt(),N?(H.target.copy(t.position),Vt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),rt.set(0,1,0).applyQuaternion(t.quaternion),j(rt),p.position.copy(t.position).addScaledVector(Vt,vt()),H.enabled=!0,H.update()):H.enabled=!1}u.addEventListener("pointerdown",N=>{N.stopPropagation(),!s()&&(ct||T(!0))}),h.addEventListener("pointerdown",N=>{N.stopPropagation(),!s()&&T(!1)}),window.addEventListener("keydown",N=>{if(N.code==="Escape"&&ct){T(!1);return}if(N.key&&N.key.toLowerCase()==="m"){if(s())return;T(!ct)}});function it(){dt.copy(t.quaternion).invert();for(let N=0;N<l.length;N++){const $=l[N].position;mt($)?(E[N*3]=$.x,E[N*3+1]=$.y,E[N*3+2]=$.z):(E[N*3]=ci,E[N*3+1]=ci,E[N*3+2]=ci)}if(C.attributes.position.needsUpdate=!0,I){const N=n.ships;for(let $=0;$<N.length;$++)if(N[$].active&&mt(N[$].group.position)){const ot=N[$].group.position;L[$*3]=ot.x,L[$*3+1]=ot.y,L[$*3+2]=ot.z}else L[$*3]=ci,L[$*3+1]=ci,L[$*3+2]=ci;I.geometry.attributes.position.needsUpdate=!0}D&&(D.visible=mt(e.center)),S.position.copy(t.position),S.quaternion.copy(t.quaternion),U.position.copy(t.position),U.quaternion.copy(t.quaternion),ct?(f.textContent="NAVIGATION — DRAG rotate · WHEEL zoom",p.up.copy(rt),H.target.copy(t.position),H.update()):(f.textContent="NAV",B()),St(),d.render(M,p)}function tt(){pt()}return{update:it,resize:tt}}function Yv(){const i=document.createElement("div");i.id="cursor",i.innerHTML='<svg width="27" height="27" viewBox="0 0 30 30" aria-hidden="true"><path d="M2 2 L3 25 Q 8 18 19 18 Z" fill="rgba(124,252,154,0.22)" stroke="#7cfc9a" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',document.body.appendChild(i);let t=!1;function e(){i.style.opacity=t&&!document.body.classList.contains("dragging")?"1":"0"}function n(o){i.style.transform=`translate(${o.clientX-1.8}px, ${o.clientY-1.8}px)`,t=!0,e()}window.addEventListener("pointermove",n,{passive:!0,capture:!0});function s(){t=!1,e()}return document.addEventListener("mouseleave",s),window.addEventListener("blur",s),new MutationObserver(e).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{}}function Kv(){const i=document.createElement("div");return i.id="crt",i.setAttribute("aria-hidden","true"),document.body.appendChild(i),document.body.classList.add("crt"),{}}const jv=[["L-CLICK + MOVE","steer"],["W / S","thrust fwd / rev (release = ease back to 0)"],["L-SHIFT","toggle throttle LOCK (hold speed on release)"],["A / D","roll"],["X","cut engines"],["R-CLICK / SPACE","mine / tractor (hold)"],["MOUSE-X (cutting)","stability gauge"],["E","dock / undock"],["M","nav map"],["J","ship log"]],Wl=[{h:"PHASE 1 · CUT",lines:["Aim at an asteroid and HOLD right-click to cut.","Keep the stability gauge centered (see below).","Hit an edge -> BOOM. Let go -> progress resets.","Cut fully -> it bursts into ore fragments."]},{h:"PHASE 2 · TRACTOR",lines:["Aim at a glowing ore fragment, HOLD right-click.","It is reeled in and collected automatically.","Fly freely — leave fragments and they stay put."]}],Zv=[{h:"STEERING",lines:["Hold left-click and move the mouse to steer her, like a flight stick — push further out to bank harder.","Release and she eases back to neutral.","A / D rolls the ship."]},{h:"THROTTLE",lines:["W / S thrusts forward / reverse; release and the throttle eases back down to zero.","Reach 100% (or full reverse) and it holds there.","Left-Shift toggles a throttle LOCK: locked, it keeps its position on release (a padlock shows by THR).","X cuts the engines — you coast on inertia."]},{h:"WARP",lines:["Hold W past 100%, through the dead-zone, to engage warp; once reached it stays locked in.","An obstacle dead ahead inhibits or drops warp.","Hold S to resorb warp back down to cruise."]}];function Ha(i){const t=document.createElement("div");t.className="mg-section";const e=document.createElement("div");e.className="mg-h",e.textContent=i.h,t.append(e);for(const n of i.lines){const s=document.createElement("div");s.className="mg-line",s.textContent=n,t.append(s)}return t}function $v(){const i=document.createElement("div");i.className="mg-demo";const t=document.createElement("div");t.className="mg-gauge";const e=document.createElement("div");e.className="mg-cursor",t.append(e);const n=document.createElement("div");n.className="mg-mouse";const s=document.createElement("div");return s.className="mg-demo-cap",s.textContent="move the MOUSE sideways to keep the gauge centered",i.append(t,n,s),i}function Jv({onComplete:i}={}){const t=document.createElement("div");t.className="mining-guide";const e=document.createElement("div");e.className="mg-body";const n=document.createElement("div");n.className="mg-page",n.append(Ha(Wl[0]),$v());const s=document.createElement("div");s.className="mg-page",s.append(Ha(Wl[1])),e.append(n,s);const r=document.createElement("button");r.className="menu-btn mg-back",r.type="button",r.textContent="‹  PHASE 1";const o=document.createElement("button");o.className="menu-btn mg-next",o.type="button";let a=0;function c(){n.hidden=a!==0,s.hidden=a!==1,r.hidden=a!==1,o.textContent=a===0?"PHASE 2  ›":"GOT IT"}o.addEventListener("click",()=>{a===0?(a=1,c()):i==null||i()}),r.addEventListener("click",()=>{a=0,c()});function l(){a=0,c()}return l(),t.append(e,r,o),{el:t,reset:l}}function Qv({onComplete:i}={}){const t=document.createElement("div");t.className="mining-guide";const e=document.createElement("div");e.className="mg-body";const n=Zv.map(u=>{const f=document.createElement("div");return f.className="mg-page",f.append(Ha(u)),f});e.append(...n);const s=document.createElement("button");s.className="menu-btn mg-back",s.type="button",s.textContent="‹  BACK";const r=document.createElement("button");r.className="menu-btn mg-next",r.type="button";let o=0;const a=n.length-1;function c(){n.forEach((u,f)=>{u.hidden=f!==o}),s.hidden=o===0,r.textContent=o<a?"NEXT  ›":"GOT IT"}r.addEventListener("click",()=>{o<a?(o++,c()):i==null||i()}),s.addEventListener("click",()=>{o>0&&(o--,c())});function l(){o=0,c()}return l(),t.append(e,s,r),{el:t,reset:l}}function tx(i,{onPlay:t,onToggleMute:e,isMuted:n,onOpenMining:s,onOpenNav:r}={}){const o=E=>{const C=document.createElement("button");return C.className="menu-btn",C.type="button",C.textContent=E,C};i.innerHTML="";const a=document.createElement("div");a.className="menu-panel";const c=document.createElement("h1");c.className="menu-title",c.textContent="Spascii";const l=document.createElement("div");l.className="menu-nav";const u=o("Play"),f=o("Commands"),h=o("Help"),d=o(n&&n()?"Unmute":"Mute");l.append(u,f,h,d);const g=document.createElement("div");g.className="menu-nav",g.hidden=!0;const M=o("< Back");g.append(M);const p=document.createElement("div");p.className="menu-commands";for(const[E,C]of jv){const q=document.createElement("div");q.className="menu-cmd-row";const _=document.createElement("span");_.className="menu-cmd-key",_.textContent=E;const S=document.createElement("span");S.className="menu-cmd-desc",S.textContent=C,q.append(_,S),p.append(q)}g.append(p);const m=document.createElement("div");m.className="menu-nav",m.hidden=!0;const w=o("< Back"),v=o("Navigation"),x=o("Mining");m.append(w,v,x),a.append(c,l,g,m),i.append(a);const U={main:l,commands:g,help:m},b=E=>{for(const C in U)U[C].hidden=C!==E};return u.addEventListener("click",()=>{t==null||t()}),f.addEventListener("click",()=>b("commands")),M.addEventListener("click",()=>b("main")),h.addEventListener("click",()=>b("help")),w.addEventListener("click",()=>b("main")),v.addEventListener("click",()=>r==null?void 0:r()),x.addEventListener("click",()=>s==null?void 0:s()),d.addEventListener("click",()=>{const E=e?e():!1;d.textContent=E?"Unmute":"Mute",d.classList.toggle("active",E)}),{reset:()=>b("main")}}const Ga="spascii.miningIntroSeen";function ex(){try{localStorage.removeItem(Ga)}catch{}}function nx({onOpen:i,onClose:t,onFirstDismiss:e}={}){let n=null,s=null,r=!1,o=!1;function a(){n=document.createElement("div"),n.className="intro-overlay";const h=document.createElement("div");h.className="intro-panel";const d=document.createElement("h2");d.className="intro-title",d.textContent="MINING — 2 PHASES",s=Jv({onComplete:f}),h.append(d,s.el),n.append(h),document.body.append(n)}function c(){n||a(),s.reset(),n.style.display="flex",r=!0,i==null||i()}function l(){if(!r){try{if(localStorage.getItem(Ga))return}catch{}o=!1,c()}}function u(){r||(o=!0,c())}function f(){if(r){if(r=!1,n&&(n.style.display="none"),!o){try{localStorage.setItem(Ga,"1")}catch{}e==null||e()}t==null||t()}}return{maybeShow:l,show:u,close:f,isOpen:()=>r}}function ix({onOpen:i,onClose:t}={}){const e=document.body,n=document.createElement("div");n.id="shipdbg",n.innerHTML=`
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
    </div>`,e.appendChild(n);const s=n.querySelector(".dbg-list"),r=n.querySelector(".dbg-view"),o=n.querySelector(".dbg-vlabel"),a=n.querySelector(".dbg-close"),c=n.querySelector(".dbg-main"),l=n.querySelector(".dbg-debug"),u=n.querySelectorAll(".dbg-tab");function f(j){u.forEach(ct=>ct.classList.toggle("active",ct.dataset.tab===j)),c.hidden=j!=="ships",l.hidden=j!=="debug"}u.forEach(j=>j.addEventListener("click",()=>f(j.dataset.tab)));const h=n.querySelector('[data-act="reset-mining"]');h.addEventListener("click",()=>{ex(),h.textContent="Done ✓",h.classList.add("active"),setTimeout(()=>{h.textContent="Reset",h.classList.remove("active")},1400)});const d=wr.map((j,ct)=>{const ft=document.createElement("div");return ft.className="dbg-item",ft.textContent=j.name,ft.addEventListener("click",()=>G(ct)),s.appendChild(ft),ft}),g=new ic({antialias:!0}),M=zu(g,{charset:" .:-=+*#%@",fontSize:11,color:"#7cfc9a"});r.appendChild(M.domElement);const p=new rc;p.background=new qt(0),p.add(new Bu(16777215,.5)),p.add(new Fu(11191551,2107440,.5));const m=new Nr(16777215,1.1);m.position.set(1,1.2,1.4),p.add(m);const w=new Nr(8956671,.4);w.position.set(-1,-.4,-.8),p.add(w);const v=new ke(45,1,.1,5e3);v.position.set(60,35,90);const x=new Wu(v,M.domElement);x.enableDamping=!0,x.dampingFactor=.08,x.enablePan=!1,x.autoRotate=!0,x.autoRotateSpeed=1.1,x.addEventListener("start",()=>{x.autoRotate=!1}),x.addEventListener("end",()=>{x.autoRotate=!0});const U=new P(.7,.45,1).normalize();let b=null,E=!1,C=0;function q(j){j.traverse(ct=>{ct.geometry&&ct.geometry.dispose(),ct.material&&(Array.isArray(ct.material)?ct.material:[ct.material]).forEach(ft=>ft.dispose())})}function _(j){const ft=new jn().setFromObject(j).getBoundingSphere(new Ei),Ut=Math.max(1,ft.radius);x.target.copy(ft.center);const Vt=Ut/Math.sin(ie.degToRad(v.fov*.5))*1.35;v.position.copy(ft.center).addScaledVector(U,Vt),v.near=Math.max(.05,Ut*.02),v.far=Ut*60,v.updateProjectionMatrix(),x.minDistance=Ut*.5,x.maxDistance=Ut*14,x.update()}let S=-1;function G(j){b&&(p.remove(b),q(b),b=null),S=j,b=wr[j].build(Gu()),p.add(b),_(b),d.forEach((ct,ft)=>ct.classList.toggle("active",ft===j)),o.textContent=`${wr[j].name}  —  DRAG rotate · WHEEL zoom`}function z(){const j=r.getBoundingClientRect(),ct=Math.max(1,Math.floor(j.width)),ft=Math.max(1,Math.floor(j.height));M.setSize(ct,ft),v.aspect=ct/ft,v.updateProjectionMatrix()}function D(){E&&(C=requestAnimationFrame(D),x.update(),M.render(p,v))}function I(){E||(E=!0,i==null||i(),n.classList.add("open"),z(),S<0&&G(0),cancelAnimationFrame(C),C=requestAnimationFrame(D))}function L(){E&&(E=!1,n.classList.remove("open"),cancelAnimationFrame(C),t==null||t())}function H(){E?L():I()}const k=j=>j.stopPropagation();for(const j of["pointerdown","pointermove","pointerup","wheel"])n.addEventListener(j,k);return n.addEventListener("contextmenu",j=>{j.preventDefault(),j.stopPropagation()}),a.addEventListener("click",L),window.addEventListener("keydown",j=>{if(j.key===","||j.code==="Comma"){j.preventDefault(),j.stopPropagation(),H();return}if(E){if(j.code==="Escape"){j.preventDefault(),j.stopPropagation(),L();return}j.stopPropagation()}},!0),window.addEventListener("resize",()=>{E&&z()}),{open:I,close:L,toggle:H,get isOpen(){return E}}}const Go=80,sx=800,Xl=.6;function rx(i={}){const t=i.engineUrl??null,e=i.warpUrl??null,n=i.miningUrl??null,s=i.impactUrl??null,r=i.explosionUrl??null,o=i.splitUrl??null,a=window.AudioContext||window.webkitAudioContext;let c=null,l=null,u=0,f=null,h=1,d=!1,g=null,M=0,p=0,m=null,w=0,v=0,x=null,U=0,b=0;function E(){const B=c.createBuffer(1,c.sampleRate*2,c.sampleRate),T=B.getChannelData(0);for(let it=0;it<T.length;it++)T[it]=Math.random()*2-1;return B}function C(B){return new Promise((T,it)=>{const tt=c.decodeAudioData(B,T,it);tt&&typeof tt.then=="function"&&tt.then(T,it)})}function q(B){const T=B.length,it=[];for(let lt=0;lt<B.numberOfChannels;lt++)it.push(B.getChannelData(lt));const tt=.004,N=lt=>{let R=0;for(const y of it){const O=Math.abs(y[lt]);O>R&&(R=O)}return R};let $=0;for(;$<T&&N($)<tt;)$++;let ot=T-1;for(;ot>$&&N(ot)<tt;)ot--;return ot<=$?{start:0,end:B.duration}:{start:$/B.sampleRate,end:(ot+1)/B.sampleRate}}function _(B,T,it){const tt=c.createGain();tt.gain.value=T,tt.connect(it);const N={gain:tt,src:null,rate:1};return fetch(B).then($=>$.arrayBuffer()).then(C).then($=>{const ot=c.createBufferSource();ot.buffer=$,ot.loop=!0;const lt=q($);ot.loopStart=lt.start,ot.loopEnd=lt.end,ot.playbackRate.value=N.rate,ot.connect(tt),ot.start(0,lt.start),N.src=ot}).catch(()=>{}),N}function S(){c=new a;const B=E(),T=c.createGain();T.gain.value=d?0:Xl;const it=c.createDynamicsCompressor();it.threshold.value=-18,it.knee.value=24,it.ratio.value=3,it.attack.value=.01,it.release.value=.25,T.connect(it).connect(c.destination);const tt=t?_(t,0,T):null,N=e?_(e,0,T):null,$=n?_(n,0,T):null;s&&fetch(s).then(O=>O.arrayBuffer()).then(C).then(O=>{const Z=q(O);g=O,M=Z.start,p=Math.max(0,Z.end-Z.start)}).catch(()=>{}),r&&fetch(r).then(O=>O.arrayBuffer()).then(C).then(O=>{const Z=q(O);m=O,w=Z.start,v=Math.max(0,Z.end-Z.start)}).catch(()=>{}),o&&fetch(o).then(O=>O.arrayBuffer()).then(C).then(O=>{const Z=q(O);x=O,U=Z.start,b=Math.max(0,Z.end-Z.start)}).catch(()=>{});const ot=c.createBufferSource();ot.buffer=B,ot.loop=!0;const lt=c.createBiquadFilter();lt.type="bandpass",lt.frequency.value=1600,lt.Q.value=.9;const R=c.createGain();R.gain.value=0;const y=c.createStereoPanner();y.pan.value=0,ot.connect(lt).connect(R).connect(y).connect(T),ot.start(),l={master:T,engine:tt,warp:N,mining:$,rcsGain:R,rcsBP:lt,rcsPan:y}}function G(){c||S(),c.state==="suspended"&&c.resume()}window.addEventListener("pointerdown",G),window.addEventListener("keydown",G);const z=.1,D=.04,I=.07,L=.025,H=.6,k=.06,j=.55;function ct(B,T,it){if(!l)return;const tt=c.currentTime,N=B.active?1:0,$=it||.016,ot=Math.abs(B.speed),lt=Math.min(ot/Go,1),R=ie.clamp((ot-Go)/(sx-Go),0,1);if(l.engine){l.engine.gain.gain.setTargetAtTime(N*.67*lt*h,tt,z);const Et=.95+.1*lt+.1*R;l.engine.rate=Et,l.engine.src&&l.engine.src.playbackRate.setTargetAtTime(Et,tt,z)}if(l.warp){l.warp.gain.gain.setTargetAtTime(N*.9*R*h,tt,z);const Et=1+.15*R;l.warp.rate=Et,l.warp.src&&l.warp.src.playbackRate.setTargetAtTime(Et,tt,z)}if(l.mining){const Et=N&&T&&T.firing?1:0;l.mining.gain.gain.setTargetAtTime(Et*.8*h,tt,.04)}const y=B.turn.yaw,O=B.turn.pitch,Z=B.turn.roll,st=Math.hypot(y,O,Z);if(!B.active)u=0,f=null;else{if(st<k)f=null;else{const Et=y/st,gt=O/st,_t=Z/st;f&&Et*f.y+gt*f.p+_t*f.r>=j||(u=1,f={y:Et,p:gt,r:_t})}u*=Math.exp(-$/H)}l.rcsGain.gain.setTargetAtTime(N*L*u,tt,I);const et=ie.clamp(y-.6*Z,-1,1);l.rcsPan.pan.setTargetAtTime(et,tt,D)}function ft(){return c}function Ut(){return l?l.master:null}function Vt(B=.3){h=ie.clamp(B,0,1)}function Y(){h=1}function rt(B){d=!!B,c&&l&&l.master&&l.master.gain.setTargetAtTime(d?0:Xl,c.currentTime,.02)}function dt(){return rt(!d),d}function K(){return d}function mt(B=1){if(!c||!l||!g)return;const T=ie.clamp(B,0,1.3),it=c.createGain();it.gain.value=T;const tt=c.createBufferSource();tt.buffer=g,tt.playbackRate.value=1.08-.18*Math.min(T,1),tt.connect(it).connect(l.master),tt.start(0,M,p||void 0),tt.onended=()=>{try{tt.disconnect(),it.disconnect()}catch{}}}function pt(){if(!c||!l||!x)return;const B=c.createGain();B.gain.value=.45*h;const T=c.createBufferSource();T.buffer=x,T.connect(B).connect(l.master),T.start(0,U,b||void 0),T.onended=()=>{try{T.disconnect(),B.disconnect()}catch{}}}function vt(){if(!c||!l)return;const B=c.currentTime,T=c.createOscillator();T.type="sawtooth",T.frequency.setValueAtTime(800,B),T.frequency.exponentialRampToValueAtTime(180,B+.2);const it=c.createGain();it.gain.setValueAtTime(0,B),it.gain.linearRampToValueAtTime(.14*h,B+.01),it.gain.exponentialRampToValueAtTime(.001,B+.25),T.connect(it).connect(l.master),T.start(B),T.stop(B+.3),T.onended=()=>{try{T.disconnect(),it.disconnect()}catch{}}}function St(){if(!c||!l)return;if(m){const $=c.createGain();$.gain.value=.9*h;const ot=c.createBufferSource();ot.buffer=m,ot.connect($).connect(l.master),ot.start(0,w,v||void 0),ot.onended=()=>{try{ot.disconnect(),$.disconnect()}catch{}};return}const B=c.currentTime,T=c.createOscillator();T.type="sine",T.frequency.setValueAtTime(60,B),T.frequency.exponentialRampToValueAtTime(25,B+.5);const it=c.createGain();it.gain.setValueAtTime(0,B),it.gain.linearRampToValueAtTime(.16*h,B+.02),it.gain.exponentialRampToValueAtTime(.001,B+.55),T.connect(it).connect(l.master),T.start(B),T.stop(B+.6),T.onended=()=>{try{T.disconnect(),it.disconnect()}catch{}};const tt=c.createOscillator();tt.type="square",tt.frequency.setValueAtTime(4e3,B),tt.frequency.exponentialRampToValueAtTime(150,B+.08);const N=c.createGain();N.gain.setValueAtTime(0,B),N.gain.linearRampToValueAtTime(.08*h,B+.005),N.gain.exponentialRampToValueAtTime(.001,B+.12),tt.connect(N).connect(l.master),tt.start(B),tt.stop(B+.15),tt.onended=()=>{try{tt.disconnect(),N.disconnect()}catch{}}}return{update:ct,resume:G,getContext:ft,getMaster:Ut,duck:Vt,unduck:Y,playImpact:mt,playCrunch:vt,playBoom:St,playSplit:pt,toggleMute:dt,isMuted:K}}const Vo="/",ox=24e3,ax={configUrl:`${Vo}tts/config.json`,modelUrl:`${Vo}tts/kitten_tts_nano_v0_8.onnx`,voicesUrl:`${Vo}tts/nano_voices.npz`},cx="Bruno",lx="Jasper",ux="en-us",hx=1,dx=1,fx=1.6,ql=.3,Yl=220,px=300,mx=3200,gr=i=>new Promise(t=>setTimeout(t,i));function gx(i){const e=new Float32Array(256);for(let n=0;n<256;n++){const s=n/255*2-1;e[n]=Math.tanh(s*i)}return e}function _x(i){let t=null,e=1;const n=new Map;function s(){t||(t=new Worker(new URL("/assets/tts.worker-CulL91bv.js",import.meta.url),{type:"module"}),t.onmessage=D=>{const I=D.data,L=n.get(I.id);L&&(n.delete(I.id),I.type==="error"?L.reject(new Error(I.error)):L.resolve(I))},t.onerror=D=>{console.warn("[radio] erreur du worker TTS :",D.message||D);for(const I of n.values())I.reject(new Error("worker TTS en erreur"));n.clear()})}function r(D,I){s();const L=e++;return new Promise((H,k)=>{n.set(L,{resolve:H,reject:k}),t.postMessage({type:D,id:L,urls:ax,...I})})}let o=null,a=null,c=null,l=!1,u=null,f=!1,h=Promise.resolve();function d(){return o||(o=r("load",{}).catch(D=>{throw o=null,console.warn("[radio] echec du chargement du modele TTS :",D),D})),o}function g(){if(l)return!0;i.resume();const D=i.getContext(),I=i.getMaster();if(!D||!I)return!1;a=D;const L=D.createBiquadFilter();L.type="highpass",L.frequency.value=px,L.Q.value=.7;const H=D.createBiquadFilter();H.type="lowpass",H.frequency.value=mx,H.Q.value=.7;const k=D.createWaveShaper();k.curve=gx(2.2),k.oversample="2x";const j=D.createGain();return j.gain.value=fx,c=D.createGain(),c.gain.value=1,c.connect(L),L.connect(H),H.connect(k),k.connect(j),j.connect(I),l=!0,!0}function M(){if(f)return!0;i.resume();const D=i.getContext(),I=i.getMaster();if(!D||!I)return!1;a=D,u=D.createGain(),u.gain.value=1;const L=D.createBiquadFilter();L.type="highpass",L.frequency.value=180,L.Q.value=.7;const H=D.createBiquadFilter();H.type="lowpass",H.frequency.value=5200,H.Q.value=.7;const k=D.createGain();return k.gain.value=dx,u.connect(L),L.connect(H),H.connect(k),k.connect(I),f=!0,!0}function p(D){for(let I=0;I<2;I++){const L=a.createOscillator();L.type="square",L.frequency.value=I?990:740;const H=a.createGain(),k=D+I*.13;H.gain.setValueAtTime(0,k),H.gain.linearRampToValueAtTime(.13,k+.01),H.gain.setValueAtTime(.13,k+.08),H.gain.linearRampToValueAtTime(0,k+.1),L.connect(H).connect(u),L.start(k),L.stop(k+.12)}}function m(D,I,L){const H=Math.floor(a.sampleRate*I),k=a.createBuffer(1,H,a.sampleRate),j=k.getChannelData(0);for(let Ut=0;Ut<H;Ut++)j[Ut]=Math.random()*2-1;const ct=a.createBufferSource();ct.buffer=k;const ft=a.createGain();ft.gain.setValueAtTime(0,D),ft.gain.linearRampToValueAtTime(L,D+.008),ft.gain.linearRampToValueAtTime(0,D+I),ct.connect(ft).connect(c),ct.start(D),ct.stop(D+I+.02)}function w(D,I,L,H){const k=a.createOscillator();k.type="sine",k.frequency.value=I;const j=a.createGain();j.gain.setValueAtTime(0,D),j.gain.linearRampToValueAtTime(H,D+.012),j.gain.setValueAtTime(H,D+L-.02),j.gain.linearRampToValueAtTime(0,D+L),k.connect(j).connect(c),k.start(D),k.stop(D+L+.02)}function v(D,I=cx){return r("synth",{text:D,opts:{voice:I,speed:hx,language:ux}}).then(L=>L.audio).catch(L=>(console.warn("[radio] echec de synthese pour :",D,L),null))}function x(D,I=c,L=!1){return!D||!D.length||!a||!I?Promise.resolve():new Promise(H=>{const k=a.createBuffer(1,D.length,ox);k.getChannelData(0).set(D);const j=a.createBufferSource();j.buffer=k,j.connect(I),j.onended=()=>{j.disconnect(),U===j&&(U=null),H()},L&&(U=j),j.start()})}let U=null,b=0,E=0;function C(){if(E=b,U){try{U.stop()}catch{}U=null}}async function q(D,I={}){if(!D.length||!g())return;i.duck(ql),m(a.currentTime,.09,.1);let L=Promise.resolve();for(let H=0;H<D.length;H++){const k=await v(D[H]),j=H===0;L=L.then(async()=>{if(await gr(j?130:Yl),j&&I.onPlay)try{I.onPlay()}catch{}await x(k)})}await L,w(a.currentTime+.05,1200,.09,.12),await gr(220),i.unduck()}async function _(D,I,L={}){if(!D.length||I<=E||!M())return;i.duck(ql),p(a.currentTime+.02);let H=Promise.resolve();for(let k=0;k<D.length;k++){const j=await v(D[k],lx),ct=k===0;H=H.then(async()=>{if(!(I<=E)&&(await gr(ct?320:Yl),!(I<=E))){if(ct&&L.onPlay)try{L.onPlay()}catch{}await x(j,u,!0)}})}await H,await gr(150),i.unduck()}function S(D,I={}){const L=(D||[]).filter(Boolean),H=h.then(()=>d()).then(()=>q(L,I)).catch(k=>{console.warn("[radio] message ignore :",k)});return h=H.catch(()=>{}),H}function G(D,I){return S([D],I)}function z(D,I={}){const L=++b,H=h.then(()=>d()).then(()=>_([D],L,I)).catch(k=>{console.warn("[radio] message systeme ignore :",k)});return h=H.catch(()=>{}),H}return{preload:d,speak:G,speakSequence:S,speakSystem:z,cancelSystem:C}}function vx({onOpen:i,onClose:t}={}){let e=null,n=null,s=!1;function r(){e=document.createElement("div"),e.className="intro-overlay";const c=document.createElement("div");c.className="intro-panel";const l=document.createElement("h2");l.className="intro-title",l.textContent="NAVIGATION",n=Qv({onComplete:a}),c.append(l,n.el),e.append(c),document.body.append(e)}function o(){s||(e||r(),n.reset(),e.style.display="flex",s=!0,i==null||i())}function a(){s&&(s=!1,e&&(e.style.display="none"),t==null||t())}return{show:o,close:a,isOpen:()=>s}}const Xu=document.getElementById("app"),qu=document.getElementById("menu"),Re={clearance:"Station control to shuttle. You are cleared for docking, approach corridor three.",autopilot:"Autopilot engaged. Hands off the controls.",docked:"Docking complete. You are secured to the station. Welcome aboard.",undock:"Undocking sequence in progress.",resume:"You have control. Safe flight, shuttle."},en=new rc;en.background=new qt(0);en.fog=new sc(0,7e-4);const mn=new ke(72,window.innerWidth/window.innerHeight,.1,6e3),vn=new Ie;vn.add(mn);en.add(vn);en.add(new Bu(16777215,.32));en.add(new Fu(11191551,2766144,.6));const Yu=new Nr(16777215,1.2);Yu.position.set(1,.75,.5);en.add(Yu);const Ku=new Nr(8956671,.3);Ku.position.set(-.6,-.3,-.8);en.add(Ku);const xx=new ic({antialias:!0}),pi=zu(xx,{charset:" .:-=+*#%@",fontSize:12,color:"#7cfc9a"});pi.setSize(window.innerWidth,window.innerHeight);Xu.appendChild(pi.domElement);const Vn=S0(en),Pe=b0(en),Ns=K0(en,Pe,Vn),ns=sv(),Bi=ev(en,mn,Vn,{onBoom:()=>{yi.playBoom(),ns.systemMessage("ORE LOST  ·  ASTEROID DESTROYED",4e3)},onCut:()=>{yi.playSplit(),ns.systemMessage("ASTEROID FRACTURED  ·  SALVAGE BLOCKS",2500)}}),ln={mapExpanded:!1,debugOpen:!1,miningIntro:!1,navIntro:!1},ju=()=>ln.mapExpanded||ln.debugOpen||ln.miningIntro||ln.navIntro,xi=ov(),yx={[Re.clearance]:"CLEARED TO DOCK · CORRIDOR 3",[Re.autopilot]:"AUTOPILOT ENGAGED",[Re.docked]:"DOCKING COMPLETE",[Re.undock]:"UNDOCK SEQUENCE",[Re.resume]:"MANUAL CONTROL RESTORED"},zi=i=>xi.log({short:yx[i]||i,text:i,kind:"radio"}),yi=rx({engineUrl:"/engine-loop.mp3",warpUrl:"/warp-loop.mp3",miningUrl:"/mining-loop.mp3",impactUrl:"/impact.mp3",explosionUrl:"/explosion.mp3",splitUrl:"/rock-split.mp3"}),Cn=_x(yi);Cn.preload();let Xi=0;function Mx(i){return ie.clamp(i/500,0,.5)}function Sx(i){return ie.clamp(i/90,.35,1.6)}const Ke=c0(vn,Xu,qu,Vn,Pe,Ns,{onImpact:i=>{yi.playImpact(Mx(i)),Xi=Math.max(Xi,Sx(i))},onWarpInhibit:()=>Kl(bv()),onWarpExit:()=>Kl(wv()),onDockStart:()=>{Cn.speakSequence([Re.clearance,Re.autopilot]),zi(Re.clearance),zi(Re.autopilot)},onDocked:()=>{Cn.speak(Re.docked),zi(Re.docked)},onUndockStart:()=>{Cn.speakSequence([Re.undock,Re.autopilot]),zi(Re.undock),zi(Re.autopilot)},onUndocked:()=>{Cn.speak(Re.resume),zi(Re.resume)},isUiOpen:ju}),Fr=nx({onOpen:()=>{ln.miningIntro=!0},onClose:()=>{ln.miningIntro=!1},onFirstDismiss:()=>ns.systemMessage("MINING GUIDE  ·  MENU (ESC) > HELP > MINING",6e3)}),Va=vx({onOpen:()=>{ln.navIntro=!0},onClose:()=>{ln.navIntro=!1}}),Zu=tx(qu,{onPlay:()=>Ke.activate(),onToggleMute:()=>yi.toggleMute(),isMuted:()=>yi.isMuted(),onOpenNav:()=>Va.show(),onOpenMining:()=>Fr.show()});window.addEventListener("keydown",i=>{i.code==="Escape"&&(Va.isOpen()?(Va.close(),i.stopImmediatePropagation(),i.preventDefault()):Fr.isOpen()&&(Fr.close(),i.stopImmediatePropagation(),i.preventDefault()))},{capture:!0});window.addEventListener("keydown",i=>{i.code==="Escape"&&Zu.reset()});window.addEventListener("keydown",i=>{i.code==="Escape"&&Zu.reset()});const $u=qv(Vn,vn,Pe,Ns,()=>!Ke.state.active,i=>{ln.mapExpanded=i});Yv();ix({onOpen:()=>{ln.debugOpen=!0,Ke.deactivate()},onClose:()=>{ln.debugOpen=!1}});Kv();const Ju=700;function Ex(){for(const i of Ns.ships){if(!i.active){i._inZone=!1;continue}const t=vn.position.distanceTo(i.group.position)<=Ju;t&&!i._inZone&&xi.log({short:`${i.callsign} ENTERING SECTOR`,kind:"info"}),i._inZone=t}}const kr=15,Qu=30,bx=Ju,wx=(Pe==null?void 0:Pe.radius)+900;let Wo=kr+Math.random()*(Qu-kr);function Tx(i){if(Wo-=i,Wo>0)return;Wo=kr+Math.random()*(Qu-kr);const t=[];for(const n of Ns.ships)n.active&&vn.position.distanceTo(n.group.position)<=bx&&t.push({callsign:n.callsign,station:!1});if(Pe&&vn.position.distanceTo(Pe.center)<=wx&&t.push({callsign:"CONTROL",station:!0}),!t.length)return;const e=t[Math.floor(Math.random()*t.length)];xi.log({short:Cv(e),kind:"chatter"})}const Ax=(Pe==null?void 0:Pe.radius)+220,Rx=45;let Xo=!1;function Cx(){if(!Pe||Xo)return;const i=Ke.state;if(i.docking||i.undocking||i.docked||!(vn.position.distanceTo(Pe.center)<=Ax)||Math.abs(i.speed)<=Rx||xi.hasRecent("slow-down",50))return;Xo=!0;const e=yv();Cn.speak(e,{onPlay:()=>xi.log({short:"REDUCE SPEED — TOO FAST",text:e,kind:"radio",code:"slow-down"})}).finally(()=>{Xo=!1})}const Px=4,Lx=8;let qo=!1,Yo=!1,_r=0;function Dx(i){if(!Pe||!Pe.colliders)return;_r>0&&(_r-=i);const t=Ke.state;if(t.docking||t.undocking||t.docked){qo=!1;return}let e=!1;for(const n of Pe.colliders)if(vn.position.distanceTo(n.center)<=n.radius+Px){e=!0;break}if(e&&!qo&&!Yo&&_r<=0){Yo=!0;const n=Mv();Cn.speak(n,{onPlay:()=>xi.log({short:"STATION COLLISION",text:n,kind:"radio",code:"collision"})}).finally(()=>{Yo=!1,_r=Lx})}qo=e}const Ix=30;let Br=0,Wa=!1;function Kl(i){ns.systemMessage(i.hud),Wa=!0,!(Br>0)&&(Br=Ix,Cn.speakSystem(i.voice))}function Ux(){Wa&&(Wa=!1,ns.clearSystemMessage(),Cn.cancelSystem())}const jl=.8,Nx=.25;let Zl=0;function Ox(i,t){Zl+=t;const e=Zl;let n=0,s=0,r=0,o=0,a=0;const c=ie.clamp((i-jl)/(1-jl),0,1);if(c>0){const l=Math.pow(c,1.6);r+=(Math.sin(e*84.3)*.6+Math.sin(e*137)*.4)*.018*l,n+=(Math.sin(e*96.7)*.6+Math.sin(e*151)*.4)*.011*l,s+=(Math.sin(e*73.1)*.6+Math.sin(e*121)*.4)*.011*l,o+=(Math.random()-.5)*.05*l,a+=(Math.random()-.5)*.05*l}if(Xi>.001){const l=Xi;r+=(Math.sin(e*120)*.5+(Math.random()-.5))*.12*l,n+=(Math.sin(e*97)*.5+(Math.random()-.5))*.1*l,s+=(Math.sin(e*138)*.5+(Math.random()-.5))*.1*l,o+=(Math.random()-.5)*1.4*l,a+=(Math.random()-.5)*1.4*l,Xi*=Math.exp(-t/Nx)}else Xi=0;mn.rotation.set(n,s,r),mn.position.set(o,a,0)}const Fx=new i0;function th(){requestAnimationFrame(th);const i=Math.min(Fx.getDelta(),.05);Ke.state.active?(Ke.update(i),Vn.update(i),Pe.update(i),Ns.update(i),Ex(),Tx(i),Cx(),Dx(i),Br>0&&(Br-=i),Ke.state.warp>0&&Ux(),Bi.update(Ke.state,i),Vn.updateBlocks(vn.position,i),!ju()&&Bi.state.phase==="cutting"&&Fr.maybeShow()):Bi.reset(),Ox(Ke.state.warp,i),xi.update(i),ns.update(Ke.state,Bi.state),$u.update(i),yi.update(Ke.state,Bi.state,i),pi.render(en,mn),pi.drawStars(Vn.stars,mn,Ke.state.warp,i),pi.drawMining(Bi.state,mn,i),pi.drawExplosions(Vn.explosions,mn)}th();window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;mn.aspect=i/t,mn.updateProjectionMatrix(),pi.setSize(i,t),$u.resize()});
