(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="169",Zi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,gc=1,lh=2,tu=1,uh=2,An=3,jn=0,qe=1,_n=2,Yn=0,$i=1,Pr=2,_c=3,vc=4,hh=5,mi=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,jo=204,Zo=205,yh=206,Mh=207,Sh=208,Eh=209,bh=210,wh=211,Th=212,Ah=213,Rh=214,$o=0,Jo=1,Qo=2,ts=3,ta=4,ea=5,na=6,ia=7,eu=0,Ch=1,Ph=2,Kn=0,Dh=1,Lh=2,Ih=3,Nh=4,Uh=5,Oh=6,Fh=7,nu=300,es=301,ns=302,sa=303,ra=304,Wr=306,oa=1e3,_i=1001,aa=1002,sn=1003,kh=1004,Gs=1005,ln=1006,Jr=1007,vi=1008,In=1009,iu=1010,su=1011,As=1012,Ya=1013,yi=1014,Pn=1015,Ns=1016,Ka=1017,ja=1018,is=1020,ru=35902,ou=1021,au=1022,dn=1023,cu=1024,lu=1025,Ji=1026,ss=1027,uu=1028,Za=1029,hu=1030,$a=1031,Ja=1033,Sr=33776,Er=33777,br=33778,wr=33779,ca=35840,la=35841,ua=35842,ha=35843,da=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,ya=37813,Ma=37814,Sa=37815,Ea=37816,ba=37817,wa=37818,Ta=37819,Aa=37820,Ra=37821,Tr=36492,Ca=36494,Pa=36495,du=36283,Da=36284,La=36285,Ia=36286,Bh=3200,zh=3201,fu=0,Hh=1,Xn="",mn="srgb",$n="srgb-linear",Qa="display-p3",Xr="display-p3-linear",Dr="linear",pe="srgb",Lr="rec709",Ir="p3",Ci=7680,xc=519,Gh=512,Vh=513,Wh=514,pu=515,Xh=516,qh=517,Yh=518,Kh=519,yc=35044,Mc="300 es",Dn=2e3,Nr=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Ms=Math.PI/180,Rs=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ss(i,t,e){return(1-e)*i+e*t}function $h(i,t,e,n){return Ss(i,t,1-Math.exp(-e*n))}function Jh(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function Qh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nd(i,t){return i+Math.random()*(t-i)}function id(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(Sc=i);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(i){return i*Ms}function od(i){return i*Rs}function ad(i){return(i&i-1)===0&&i!==0}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ud(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),p=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*p,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*p,a*l);break;case"ZXZ":i.set(c*p,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:Ms,RAD2DEG:Rs,generateUUID:Ti,clamp:be,euclideanModulo:tc,mapLinear:jh,inverseLerp:Zh,lerp:Ss,damp:$h,pingpong:Jh,smoothstep:Qh,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:ad,ceilPowerOfTwo:cd,floorPowerOfTwo:ld,setQuaternionFromProperEuler:ud,normalize:Be,denormalize:Xi};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],d=n[5],g=n[8],E=s[0],m=s[3],f=s[6],w=s[1],_=s[4],x=s[7],D=s[2],R=s[5],S=s[8];return r[0]=o*E+a*w+c*D,r[3]=o*m+a*_+c*R,r[6]=o*f+a*x+c*S,r[1]=l*E+u*w+p*D,r[4]=l*m+u*_+p*R,r[7]=l*f+u*x+p*S,r[2]=h*E+d*w+g*D,r[5]=h*m+d*_+g*R,r[8]=h*f+d*x+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],p=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*p+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return t[0]=p*E,t[1]=(s*l-u*n)*E,t[2]=(a*n-s*o)*E,t[3]=h*E,t[4]=(u*e-s*c)*E,t[5]=(s*r-a*e)*E,t[6]=d*E,t[7]=(n*c-l*e)*E,t[8]=(o*e-n*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new $t;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=Ur("canvas");return i.style.display="block",i}const Ec={};function Ar(i){i in Ec||(Ec[i]=!0,console.warn(i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bc=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[$n]:{transfer:Dr,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[mn]:{transfer:pe,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xr]:{transfer:Dr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(wc),fromReference:i=>i.applyMatrix3(bc)},[Qa]:{transfer:pe,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(wc),fromReference:i=>i.applyMatrix3(bc).convertLinearToSRGB()}},md=new Set([$n,Xr]),re={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!md.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=hs[t].toReference,s=hs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return hs[i].primaries},getTransfer:function(i){return i===Xn?Dr:hs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(hs[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ur("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _d=0;class gu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eo(s[o].image)):r.push(eo(s[o]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class Ye extends wi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=_i,s=_i,r=ln,o=vi,a=dn,c=In,l=Ye.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ti(),this.name="",this.source=new gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=nu;Ye.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],p=c[8],h=c[1],d=c[5],g=c[9],E=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+E)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(d+1)/2,D=(f+1)/2,R=(u+h)/4,S=(p+E)/4,b=(g+m)/4;return _>x&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=S/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=b/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=S/r,s=b/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(p-E)*(p-E)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(p-E)/w,this.z=(h-u)/w,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _u extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],E=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=E;return}if(p!==E||c!==h||l!==d||u!==g){let m=1-a;const f=c*h+l*d+u*g+p*E,w=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const D=Math.sqrt(_),R=Math.atan2(D,f*w);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const x=a*w;if(c=c*m+h*x,l=l*m+d*x,u=u*m+g*x,p=p*m+E*x,m===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=D,l*=D,u*=D,p*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*p+c*d-l*h,t[e+1]=c*g+u*h+l*p-a*d,t[e+2]=l*g+u*d+a*h-c*p,t[e+3]=u*g-a*p-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),p=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"YZX":this._x=h*u*p+l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p-h*d*g;break;case"XZY":this._x=h*u*p-l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],p=e[10],h=n+a+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>p){const d=2*Math.sqrt(1+n-a-p);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>p){const d=2*Math.sqrt(1+a-n-p);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+p-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),p=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=s*p+this._y*h,this._z=r*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*u,this.y=n+c*u+a*l-r*p,this.z=s+c*p+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new P,Tc=new Xe;class Jn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Ws.subVectors(this.max,ds),Di.subVectors(t.a,ds),Li.subVectors(t.b,ds),Ii.subVectors(t.c,ds),Fn.subVectors(Li,Di),kn.subVectors(Ii,Li),ri.subVectors(Di,Ii);let e=[0,-Fn.z,Fn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,Fn.z,0,-Fn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-Fn.y,Fn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!io(e,Di,Li,Ii,Ws)||(e=[1,0,0,0,1,0,0,0,1],!io(e,Di,Li,Ii,Ws))?!1:(Xs.crossVectors(Fn,kn),e=[Xs.x,Xs.y,Xs.z],io(e,Di,Li,Ii,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,Vs=new Jn,Di=new P,Li=new P,Ii=new P,Fn=new P,kn=new P,ri=new P,ds=new P,Ws=new P,Xs=new P,oi=new P;function io(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Md=new Jn,fs=new P,so=new P;class Ai{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(so)),this.expandByPoint(fs.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new P,ro=new P,qs=new P,Bn=new P,oo=new P,Ys=new P,ao=new P;class Us{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(ro);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qs),a=Bn.dot(this.direction),c=-Bn.dot(qs),l=Bn.lengthSq(),u=Math.abs(1-o*o);let p,h,d,g;if(u>0)if(p=o*c-a,h=o*a-c,g=r*u,p>=0)if(h>=-g)if(h<=g){const E=1/u;p*=E,h*=E,d=p*(p+o*h+2*a)+h*(o*p+h+2*c)+l}else h=r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ro).addScaledVector(qs,h),d}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(a=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),Ys.subVectors(n,t),ao.crossVectors(oo,Ys);let o=this.direction.dot(ao),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const c=a*this.direction.dot(Ys.crossVectors(Bn,Ys));if(c<0)return null;const l=a*this.direction.dot(oo.cross(Bn));if(l<0||c+l>o)return null;const u=-a*Bn.dot(ao);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,u,p,h,d,g,E,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,p,h,d,g,E,m)}set(t,e,n,s,r,o,a,c,l,u,p,h,d,g,E,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*p,g=a*u,E=a*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=d+g*l,e[5]=h-E*l,e[9]=-a*c,e[2]=E-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*p,g=l*u,E=l*p;e[0]=h+E*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=E+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*p,g=l*u,E=l*p;e[0]=h-E*a,e[4]=-o*p,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=E-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*p,g=a*u,E=a*p;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+E,e[1]=c*p,e[5]=E*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,E=a*l;e[0]=c*u,e[4]=E-h*p,e[8]=g*p+d,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*p+g,e[10]=h-E*p}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,E=a*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=h*p+E,e[5]=o*u,e[9]=d*p-g,e[2]=g*p-d,e[6]=a*u,e[10]=E*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,Ed)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),zn.crossVectors(n,Ke),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),zn.crossVectors(n,Ke)),zn.normalize(),Ks.crossVectors(Ke,zn),s[0]=zn.x,s[4]=Ks.x,s[8]=Ke.x,s[1]=zn.y,s[5]=Ks.y,s[9]=Ke.y,s[2]=zn.z,s[6]=Ks.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],d=n[13],g=n[2],E=n[6],m=n[10],f=n[14],w=n[3],_=n[7],x=n[11],D=n[15],R=s[0],S=s[4],b=s[8],B=s[12],v=s[1],M=s[5],G=s[9],H=s[13],L=s[2],z=s[6],N=s[10],U=s[14],I=s[3],q=s[7],ot=s[11],ht=s[15];return r[0]=o*R+a*v+c*L+l*I,r[4]=o*S+a*M+c*z+l*q,r[8]=o*b+a*G+c*N+l*ot,r[12]=o*B+a*H+c*U+l*ht,r[1]=u*R+p*v+h*L+d*I,r[5]=u*S+p*M+h*z+d*q,r[9]=u*b+p*G+h*N+d*ot,r[13]=u*B+p*H+h*U+d*ht,r[2]=g*R+E*v+m*L+f*I,r[6]=g*S+E*M+m*z+f*q,r[10]=g*b+E*G+m*N+f*ot,r[14]=g*B+E*H+m*U+f*ht,r[3]=w*R+_*v+x*L+D*I,r[7]=w*S+_*M+x*z+D*q,r[11]=w*b+_*G+x*N+D*ot,r[15]=w*B+_*H+x*U+D*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],p=t[6],h=t[10],d=t[14],g=t[3],E=t[7],m=t[11],f=t[15];return g*(+r*c*p-s*l*p-r*a*h+n*l*h+s*a*d-n*c*d)+E*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+e*l*p-e*a*d-r*o*p+n*o*d+r*a*u-n*l*u)+f*(-s*a*u-e*c*p+e*a*h+s*o*p-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],p=t[9],h=t[10],d=t[11],g=t[12],E=t[13],m=t[14],f=t[15],w=p*m*l-E*h*l+E*c*d-a*m*d-p*c*f+a*h*f,_=g*h*l-u*m*l-g*c*d+o*m*d+u*c*f-o*h*f,x=u*E*l-g*p*l+g*a*d-o*E*d-u*a*f+o*p*f,D=g*p*c-u*E*c-g*a*h+o*E*h+u*a*m-o*p*m,R=e*w+n*_+s*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/R;return t[0]=w*S,t[1]=(E*h*r-p*m*r-E*s*d+n*m*d+p*s*f-n*h*f)*S,t[2]=(a*m*r-E*c*r+E*s*l-n*m*l-a*s*f+n*c*f)*S,t[3]=(p*c*r-a*h*r-p*s*l+n*h*l+a*s*d-n*c*d)*S,t[4]=_*S,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*f+e*h*f)*S,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*S,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*S,t[8]=x*S,t[9]=(g*p*r-u*E*r-g*n*d+e*E*d+u*n*f-e*p*f)*S,t[10]=(o*E*r-g*a*r+g*n*l-e*E*l-o*n*f+e*a*f)*S,t[11]=(u*a*r-o*p*r-u*n*l+e*p*l+o*n*d-e*a*d)*S,t[12]=D*S,t[13]=(u*E*s-g*p*s+g*n*h-e*E*h-u*n*m+e*p*m)*S,t[14]=(g*a*s-o*E*s-g*n*c+e*E*c+o*n*m-e*a*m)*S,t[15]=(o*p*s-u*a*s+u*n*c-e*p*c-o*n*h+e*a*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,p=a+a,h=r*l,d=r*u,g=r*p,E=o*u,m=o*p,f=a*p,w=c*l,_=c*u,x=c*p,D=n.x,R=n.y,S=n.z;return s[0]=(1-(E+f))*D,s[1]=(d+x)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(d-x)*R,s[5]=(1-(h+f))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+_)*S,s[9]=(m-w)*S,s[10]=(1-(h+E))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const l=1/r,u=1/o,p=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=p,an.elements[9]*=p,an.elements[10]*=p,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===Dn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Nr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const c=this.elements,l=1/(e-t),u=1/(n-s),p=1/(o-r),h=(e+t)*l,d=(n+s)*u;let g,E;if(a===Dn)g=(o+r)*p,E=-2*p;else if(a===Nr)g=r*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=E,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new P,an=new le,Sd=new P(0,0,0),Ed=new P(1,1,1),zn=new P,Ks=new P,Ke=new P,Ac=new le,Rc=new Xe;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const Cc=new P,Ui=new Xe,bn=new le,js=new P,ps=new P,wd=new P,Td=new Xe,Pc=new P(1,0,0),Dc=new P(0,1,0),Lc=new P(0,0,1),Ic={type:"added"},Ad={type:"removed"},Oi={type:"childadded",child:null},co={type:"childremoved",child:null};class we extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new P,e=new vn,n=new Xe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new $t}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Cc.copy(t).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ps,js,this.up):bn.lookAt(js,ps,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(bn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),p=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new P,wn=new P,lo=new P,Tn=new P,Fi=new P,ki=new P,Nc=new P,uo=new P,ho=new P,fo=new P,po=new ce,mo=new ce,go=new ce;class un{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),wn.subVectors(n,e),lo.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(wn),c=cn.dot(lo),l=wn.dot(wn),u=wn.dot(lo),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(po,r.x),o.addScaledVector(mo,r.y),o.addScaledVector(go,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),wn.subVectors(t,e),cn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Fi.subVectors(s,n),ki.subVectors(r,n),uo.subVectors(t,n);const c=Fi.dot(uo),l=ki.dot(uo);if(c<=0&&l<=0)return e.copy(n);ho.subVectors(t,s);const u=Fi.dot(ho),p=ki.dot(ho);if(u>=0&&p<=u)return e.copy(s);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Fi,o);fo.subVectors(t,r);const d=Fi.dot(fo),g=ki.dot(fo);if(g>=0&&d<=g)return e.copy(r);const E=d*l-c*g;if(E<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ki,a);const m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return Nc.subVectors(r,s),a=(p-u)/(p-u+(d-g)),e.copy(s).addScaledVector(Nc,a);const f=1/(m+E+h);return o=E*f,a=h*f,e.copy(n).addScaledVector(Fi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function _o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=tc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_o(o,r,t+1/3),this.g=_o(o,r,t),this.b=_o(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return re.fromWorkingColorSpace(Ue.copy(this),t),Math.round(be(Ue.r*255,0,255))*65536+Math.round(be(Ue.g*255,0,255))*256+Math.round(be(Ue.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=u<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=mn){re.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Zs);const n=Ss(Hn.h,Zs.h,e),s=Ss(Hn.s,Zs.s,e),r=Ss(Hn.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Yt;Yt.NAMES=vu;let Rd=0;class Ri extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=$i,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Zo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xi extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,$s=new xt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class xu extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yu extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cd=0;const tn=new le,vo=new we,Bi=new P,je=new Jn,ms=new Jn,Re=new P;class Me extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?yu:xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(je.min,ms.min),je.expandByPoint(Re),Re.addVectors(je.max,ms.max),je.expandByPoint(Re)):(je.expandByPoint(ms.min),je.expandByPoint(ms.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(t,l),Re.add(Bi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new P,c[b]=new P;const l=new P,u=new P,p=new P,h=new xt,d=new xt,g=new xt,E=new P,m=new P;function f(b,B,v){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,B),p.fromBufferAttribute(n,v),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,B),g.fromBufferAttribute(r,v),u.sub(l),p.sub(l),d.sub(h),g.sub(h);const M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(M),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(M),a[b].add(E),a[B].add(E),a[v].add(E),c[b].add(m),c[B].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,B=w.length;b<B;++b){const v=w[b],M=v.start,G=v.count;for(let H=M,L=M+G;H<L;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const _=new P,x=new P,D=new P,R=new P;function S(b){D.fromBufferAttribute(s,b),R.copy(D);const B=a[b];_.copy(B),_.sub(D.multiplyScalar(D.dot(B))).normalize(),x.crossVectors(R,B);const M=x.dot(c[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,M)}for(let b=0,B=w.length;b<B;++b){const v=w[b],M=v.start,G=v.count;for(let H=M,L=M+G;H<L;H+=3)S(t.getX(H+0)),S(t.getX(H+1)),S(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,p=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),E=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,m),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,p=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let E=0,m=c.length;E<m;E++){a.isInterleavedBufferAttribute?d=c[E]*a.data.stride+a.offset:d=c[E]*u;for(let f=0;f<u;f++)h[g++]=l[d++]}return new Ge(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,p=l.length;u<p;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const d=l[p];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],p=r[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new le,ai=new Us,Js=new Ai,Oc=new P,Qs=new P,tr=new P,er=new P,xo=new P,nr=new P,Fc=new P,ir=new P;class Ie extends we{constructor(t=new Me,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],p=r[c];u!==0&&(xo.fromBufferAttribute(p,t),o?nr.addScaledVector(xo,u):nr.addScaledVector(xo.sub(e),u))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Js.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Js,Oc)===null||ai.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const m=h[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,D=_;x<D;x+=3){const R=a.getX(x),S=a.getX(x+1),b=a.getX(x+2);s=sr(this,f,t,n,l,u,p,R,S,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),E=Math.min(a.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){const w=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=sr(this,o,t,n,l,u,p,w,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const m=h[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,D=_;x<D;x+=3){const R=x,S=x+1,b=x+2;s=sr(this,f,t,n,l,u,p,R,S,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){const w=m,_=m+1,x=m+2;s=sr(this,o,t,n,l,u,p,w,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pd(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===jn,a),c===null)return null;ir.copy(a),ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ir);return l<e.near||l>e.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Qs),i.getVertexPosition(c,tr),i.getVertexPosition(l,er);const u=Pd(i,t,e,n,Qs,tr,er,Fc);if(u){const p=new P;un.getBarycoord(Fc,Qs,tr,er,p),s&&(u.uv=un.getInterpolatedAttribute(s,a,c,l,p,new xt)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,c,l,p,new xt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,c,l,p,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};un.getNormal(Qs,tr,er,h.normal),u.face=h,u.barycoord=p}return u}class en extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],p=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function g(E,m,f,w,_,x,D,R,S,b,B){const v=x/S,M=D/b,G=x/2,H=D/2,L=R/2,z=S+1,N=b+1;let U=0,I=0;const q=new P;for(let ot=0;ot<N;ot++){const ht=ot*M-H;for(let Nt=0;Nt<z;Nt++){const qt=Nt*v-G;q[E]=qt*w,q[m]=ht*_,q[f]=L,l.push(q.x,q.y,q.z),q[E]=0,q[m]=0,q[f]=R>0?1:-1,u.push(q.x,q.y,q.z),p.push(Nt/S),p.push(1-ot/b),U+=1}}for(let ot=0;ot<b;ot++)for(let ht=0;ht<S;ht++){const Nt=h+ht+z*ot,qt=h+ht+z*(ot+1),Y=h+(ht+1)+z*(ot+1),st=h+(ht+1)+z*ot;c.push(Nt,qt,st),c.push(qt,Y,st),I+=6}a.addGroup(d,I,B),d+=I,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ld={clone:rs,merge:ze};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new P,kc=new xt,Bc=new xt;class He extends Su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Bc),e.subVectors(Bc,kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Hi=1;class Ud extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(zi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new He(zi,Hi,t,e);r.layers=this.layers,this.add(r);const o=new He(zi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new He(zi,Hi,t,e);a.layers=this.layers,this.add(a);const c=new He(zi,Hi,t,e);c.layers=this.layers,this.add(c);const l=new He(zi,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(p,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Ye{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Yn});r.uniforms.tEquirect.value=e;const o=new Ie(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=ln),new Ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yo=new P,Fd=new P,kd=new $t;class Wn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Ai,rr=new P;class nc{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],p=s[6],h=s[7],d=s[8],g=s[9],E=s[10],m=s[11],f=s[12],w=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,h-l,m-d,x-f).normalize(),n[1].setComponents(c+r,h+l,m+d,x+f).normalize(),n[2].setComponents(c+o,h+u,m+g,x+w).normalize(),n[3].setComponents(c-o,h-u,m-g,x-w).normalize(),n[4].setComponents(c-a,h-p,m-E,x-_).normalize(),e===Dn)n[5].setComponents(c+a,h+p,m+E,x+_).normalize();else if(e===Nr)n[5].setComponents(a,p,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bd(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){const g=p[h],E=p[d];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++h,p[h]=E)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){const E=p[d];i.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class qr extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,p=t/a,h=e/c,d=[],g=[],E=[],m=[];for(let f=0;f<u;f++){const w=f*h-o;for(let _=0;_<l;_++){const x=_*p-r;g.push(x,-w,0),E.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const _=w+l*f,x=w+l*(f+1),D=w+1+l*(f+1),R=w+1+l*f;d.push(_,x,R),d.push(x,D,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
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
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Bf=`struct PhysicalMaterial {
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
}`,zf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wp=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:zd,alphahash_pars_fragment:Hd,alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Zd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:of,color_pars_fragment:af,color_pars_vertex:cf,color_vertex:lf,common:uf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:If,envmap_vertex:Ef,fog_vertex:bf,fog_pars_vertex:wf,fog_fragment:Tf,fog_pars_fragment:Af,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Df,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Of,lights_phong_pars_fragment:Ff,lights_physical_fragment:kf,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Qf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:op,normal_pars_vertex:ap,normal_vertex:cp,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:vp,dithering_pars_fragment:xp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:bp,shadowmask_pars_fragment:wp,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Dp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Np,transmission_pars_fragment:Up,uv_pars_fragment:Op,uv_pars_vertex:Fp,uv_vertex:kp,worldpos_vertex:Bp,background_vert:zp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:Kp,distanceRGBA_frag:jp,equirect_vert:Zp,equirect_frag:$p,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:cm,meshphong_frag:lm,meshphysical_vert:um,meshphysical_frag:hm,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:vm,sprite_frag:xm},Ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},gn={basic:{uniforms:ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ze([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ze([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ze([Ct.points,Ct.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ze([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ze([Ct.common,Ct.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ze([Ct.sprite,Ct.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ze([Ct.common,Ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ze([Ct.lights,Ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};gn.physical={uniforms:ze([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const or={r:0,b:0,g:0},li=new vn,ym=new le;function Mm(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,u,p=null,h=0,d=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function E(w){let _=!1;const x=g(w);x===null?f(a,c):x&&x.isColor&&(f(x,1),_=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Wr)?(u===void 0&&(u=new Ie(new en(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:rs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(_.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(li)),u.material.toneMapped=re.getTransfer(x.colorSpace)!==pe,(p!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ie(new qr(2,2),new Zn({name:"BackgroundMaterial",uniforms:rs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,p=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,_){w.getRGB(or,Mu(i)),n.buffers.color.setClear(or.r,or.g,or.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:E,addToRenderList:m}}function Sm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,M,G,H,L){let z=!1;const N=p(H,G,M);r!==N&&(r=N,l(r.object)),z=d(v,H,G,L),z&&g(v,H,G,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(v,M,G,H),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function p(v,M,G){const H=G.wireframe===!0;let L=n[v.id];L===void 0&&(L={},n[v.id]=L);let z=L[M.id];z===void 0&&(z={},L[M.id]=z);let N=z[H];return N===void 0&&(N=h(c()),z[H]=N),N}function h(v){const M=[],G=[],H=[];for(let L=0;L<e;L++)M[L]=0,G[L]=0,H[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:H,object:v,attributes:{},index:null}}function d(v,M,G,H){const L=r.attributes,z=M.attributes;let N=0;const U=G.getAttributes();for(const I in U)if(U[I].location>=0){const ot=L[I];let ht=z[I];if(ht===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ot===void 0||ot.attribute!==ht||ht&&ot.data!==ht.data)return!0;N++}return r.attributesNum!==N||r.index!==H}function g(v,M,G,H){const L={},z=M.attributes;let N=0;const U=G.getAttributes();for(const I in U)if(U[I].location>=0){let ot=z[I];ot===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor));const ht={};ht.attribute=ot,ot&&ot.data&&(ht.data=ot.data),L[I]=ht,N++}r.attributes=L,r.attributesNum=N,r.index=H}function E(){const v=r.newAttributes;for(let M=0,G=v.length;M<G;M++)v[M]=0}function m(v){f(v,0)}function f(v,M){const G=r.newAttributes,H=r.enabledAttributes,L=r.attributeDivisors;G[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),L[v]!==M&&(i.vertexAttribDivisor(v,M),L[v]=M)}function w(){const v=r.newAttributes,M=r.enabledAttributes;for(let G=0,H=M.length;G<H;G++)M[G]!==v[G]&&(i.disableVertexAttribArray(G),M[G]=0)}function _(v,M,G,H,L,z,N){N===!0?i.vertexAttribIPointer(v,M,G,L,z):i.vertexAttribPointer(v,M,G,H,L,z)}function x(v,M,G,H){E();const L=H.attributes,z=G.getAttributes(),N=M.defaultAttributeValues;for(const U in z){const I=z[U];if(I.location>=0){let q=L[U];if(q===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(q=v.instanceColor)),q!==void 0){const ot=q.normalized,ht=q.itemSize,Nt=t.get(q);if(Nt===void 0)continue;const qt=Nt.buffer,Y=Nt.type,st=Nt.bytesPerElement,ft=Y===i.INT||Y===i.UNSIGNED_INT||q.gpuType===Ya;if(q.isInterleavedBufferAttribute){const at=q.data,Pt=at.stride,Dt=q.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<I.locationSize;It++)f(I.location+It,at.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<I.locationSize;It++)m(I.location+It);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let It=0;It<I.locationSize;It++)_(I.location+It,ht/I.locationSize,Y,ot,Pt*st,(Dt+ht/I.locationSize*It)*st,ft)}else{if(q.isInstancedBufferAttribute){for(let at=0;at<I.locationSize;at++)f(I.location+at,q.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let at=0;at<I.locationSize;at++)m(I.location+at);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let at=0;at<I.locationSize;at++)_(I.location+at,ht/I.locationSize,Y,ot,ht*st,ht/I.locationSize*at*st,ft)}}else if(N!==void 0){const ot=N[U];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(I.location,ot);break;case 3:i.vertexAttrib3fv(I.location,ot);break;case 4:i.vertexAttrib4fv(I.location,ot);break;default:i.vertexAttrib1fv(I.location,ot)}}}}w()}function D(){b();for(const v in n){const M=n[v];for(const G in M){const H=M[G];for(const L in H)u(H[L].object),delete H[L];delete M[G]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const M=n[v.id];for(const G in M){const H=M[G];for(const L in H)u(H[L].object),delete H[L];delete M[G]}delete n[v.id]}function S(v){for(const M in n){const G=n[M];if(G[v.id]===void 0)continue;const H=G[v.id];for(const L in H)u(H[L].object),delete H[L];delete G[v.id]}}function b(){B(),o=!0,r!==s&&(r=s,l(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:B,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:S,initAttributes:E,enableAttribute:m,disableUnusedAttributes:w}}function Em(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,p){p!==0&&(i.drawArraysInstanced(n,l,u,p),e.update(u,n,p))}function a(l,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,p);let d=0;for(let g=0;g<p;g++)d+=u[g];e.update(d,n,1)}function c(l,u,p,h){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,p);let g=0;for(let E=0;E<p;E++)g+=u[E];for(let E=0;E<h.length;E++)e.update(g,n,h[E])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==dn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const b=S===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==In&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Pn&&!b)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function wm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Wn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||n!==0||s;return s=h,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,d){const g=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,_=w*4;let x=f.clippingState||null;c.value=x,x=u(g,h,_,d);for(let D=0;D!==_;++D)x[D]=e[D];f.clippingState=x,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,d,g){const E=p!==null?p.length:0;let m=null;if(E!==0){if(m=c.value,g!==!0||m===null){const f=d+E*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=d;_!==E;++_,x+=4)o.copy(p[_]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function Tm(i){let t=new WeakMap;function e(o,a){return a===sa?o.mapping=es:a===ra&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sa||a===ra)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wu extends Su{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,zc=[.125,.215,.35,.446,.526,.582],gi=20,Mo=new wu,Hc=new Yt;let So=null,Eo=0,bo=0,wo=!1;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,Gc=[new P(-pi,Gi,0),new P(pi,Gi,0),new P(-Gi,0,pi),new P(Gi,0,pi),new P(0,pi,-Gi),new P(0,pi,Gi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,Eo,bo),this._renderer.xr.enabled=wo,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ns,format:dn,colorSpace:$n,depthBuffer:!1},s=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(Hc),u.toneMapping=Kn,u.autoClear=!1;const d=new xi({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Ie(new en,d);let E=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,E=!0):(d.color.copy(Hc),E=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const _=this._cubeSize;ar(s,w*_,f>2?_:0,_,_),u.setRenderTarget(s),E&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=p,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gc[(s-r-1)%Gc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Ie(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gi-1),E=r/g,m=isFinite(r)?1+Math.floor(u*E):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let w=0;for(let S=0;S<gi;++S){const b=S/E,B=Math.exp(-b*b/2);f.push(B),S===0?w+=B:S<m&&(w+=2*B)}for(let S=0;S<f.length;S++)f[S]=f[S]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const x=this._sizeLods[s],D=3*x*(s>_-Yi?s-_+Yi:0),R=4*(this._cubeSize-x);ar(e,D,R,3*x,2*x),c.setRenderTarget(e),c.render(p,Mo)}}function Am(i){const t=[],e=[],n=[];let s=i;const r=i-Yi+1+zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Yi?c=zc[o-i+Yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,g=6,E=3,m=2,f=1,w=new Float32Array(E*g*d),_=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let R=0;R<d;R++){const S=R%3*2/3-1,b=R>2?0:-1,B=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];w.set(B,E*g*R),_.set(h,m*g*R);const v=[R,R,R,R,R,R];x.set(v,f*g*R)}const D=new Me;D.setAttribute("position",new Ge(w,E)),D.setAttribute("uv",new Ge(_,m)),D.setAttribute("faceIndex",new Ge(x,f)),t.push(D),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wc(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){const n=new Float32Array(gi),s=new P(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function qc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===sa||c===ra,u=c===es||c===ns;if(l||u){let p=t.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Vc(i)),p=l?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Vc(i)),p=l?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dm(i,t,e,n){const s={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const E=h.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)t.remove(E[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=p.morphAttributes;for(const g in d){const E=d[g];for(let m=0,f=E.length;m<f;m++)t.update(E[m],i.ARRAY_BUFFER)}}function l(p){const h=[],d=p.index,g=p.attributes.position;let E=0;if(d!==null){const w=d.array;E=d.version;for(let _=0,x=w.length;_<x;_+=3){const D=w[_+0],R=w[_+1],S=w[_+2];h.push(D,R,R,S,S,D)}}else if(g!==void 0){const w=g.array;E=g.version;for(let _=0,x=w.length/3-1;_<x;_+=3){const D=_+0,R=_+1,S=_+2;h.push(D,R,R,S,S,D)}}else return;const m=new(mu(h)?yu:xu)(h,1);m.version=E;const f=r.get(p);f&&t.remove(f),r.set(p,m)}function u(p){const h=r.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:u}}function Lm(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function p(h,d,g,E){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,d[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,E,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w];for(let w=0;w<E.length;w++)e.update(f,n,E[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function Im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==p){let B=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let x=a.attributes.position.count*_,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*D*4*p),S=new _u(R,x,D,p);S.type=Pn,S.needsUpdate=!0;const b=_*4;for(let v=0;v<p;v++){const M=m[v],G=f[v],H=w[v],L=x*D*4*v;for(let z=0;z<M.count;z++){const N=z*b;d===!0&&(s.fromBufferAttribute(M,z),R[L+N+0]=s.x,R[L+N+1]=s.y,R[L+N+2]=s.z,R[L+N+3]=0),g===!0&&(s.fromBufferAttribute(G,z),R[L+N+4]=s.x,R[L+N+5]=s.y,R[L+N+6]=s.z,R[L+N+7]=0),E===!0&&(s.fromBufferAttribute(H,z),R[L+N+8]=s.x,R[L+N+9]=s.y,R[L+N+10]=s.z,R[L+N+11]=H.itemSize===4?s.w:1)}}h={count:p,texture:S,size:new xt(x,D)},n.set(a,h),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let E=0;E<l.length;E++)d+=l[E];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Um(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,p=t.get(c,u);if(s.get(p)!==l&&(t.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return p}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Tu extends Ye{constructor(t,e,n,s,r,o,a,c,l,u=Ji){if(u!==Ji&&u!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ji&&(n=yi),n===void 0&&u===ss&&(n=is),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Au=new Ye,Yc=new Tu(1,1),Ru=new _u,Cu=new yd,Pu=new Eu,Kc=[],jc=[],Zc=new Float32Array(16),$c=new Float32Array(9),Jc=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Ae(e,n)}}function Hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),Ae(e,n)}}function Gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Ae(e,n)}}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=pu,r=Yc):r=Au,e.setTexture2D(t||r,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cu,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pu,s)}function tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ru,s)}function eg(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return km;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Km;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ag(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cg(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lg(i,t){i.uniform1iv(this.addr,t)}function ug(i,t){i.uniform2iv(this.addr,t)}function hg(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Au,r[o])}function vg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cu,r[o])}function xg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pu,r[o])}function yg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ru,r[o])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}}class bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function wg(i,t,e){const n=i.name,s=n.length;for(To.lastIndex=0;;){const r=To.exec(n),o=To.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qc(e,l===void 0?new Sg(a,i,t):new Eg(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new bg(a),Qc(e,p)),e=p}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);wg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tg=37297;let Ag=0;function Rg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Cg(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===Ir&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Ir&&(n="LinearSRGBToLinearDisplayP3"),i){case $n:case Xr:return[n,"LinearTransferOETF"];case mn:case Qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function el(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(t),o)}else return s}function Pg(i,t){const e=Cg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dg(i,t){let e;switch(t){case Dh:e="Linear";break;case Lh:e="Reinhard";break;case Ih:e="Cineon";break;case Nh:e="ACESFilmic";break;case Oh:e="AgX";break;case Fh:e="Neutral";break;case Uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new P;function Lg(){re.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ys(i){return i!==""}function nl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(Og,kg)}const Fg=new Map;function kg(i,t){let e=Jt[t];if(e===void 0){const n=Fg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(Bg,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case eu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Ph:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hg(e),l=Gg(e),u=Vg(e),p=Wg(e),h=Xg(e),d=Ig(e),g=Ng(r),E=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(m=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=Na(o),o=nl(o,e),o=il(o,e),a=Na(a),a=nl(a,e),a=il(a,e),o=sl(o),a=sl(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=w+m+o,x=w+f+a,D=tl(s,s.VERTEX_SHADER,_),R=tl(s,s.FRAGMENT_SHADER,x);s.attachShader(E,D),s.attachShader(E,R),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function S(M){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(E).trim(),H=s.getShaderInfoLog(D).trim(),L=s.getShaderInfoLog(R).trim();let z=!0,N=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,D,R);else{const U=el(s,D,"vertex"),I=el(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+U+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||L==="")&&(N=!1);N&&(M.diagnostics={runnable:z,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:L,prefix:f}})}s.deleteShader(D),s.deleteShader(R),b=new Rr(s,E),B=Ug(s,E)}let b;this.getUniforms=function(){return b===void 0&&S(this),b};let B;this.getAttributes=function(){return B===void 0&&S(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(E,Tg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=R,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jg(t),e.set(t,n)),n}}class jg{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}}function Zg(i,t,e,n,s,r,o){const a=new ec,c=new Kg,l=new Set,u=[],p=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,G,H,L){const z=H.fog,N=L.geometry,U=v.isMeshStandardMaterial?H.environment:null,I=(v.isMeshStandardMaterial?e:t).get(v.envMap||U),q=I&&I.mapping===Wr?I.image.height:null,ot=E[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Nt=ht!==void 0?ht.length:0;let qt=0;N.morphAttributes.position!==void 0&&(qt=1),N.morphAttributes.normal!==void 0&&(qt=2),N.morphAttributes.color!==void 0&&(qt=3);let Y,st,ft,at;if(ot){const de=gn[ot];Y=de.vertexShader,st=de.fragmentShader}else Y=v.vertexShader,st=v.fragmentShader,c.update(v),ft=c.getVertexShaderID(v),at=c.getFragmentShaderID(v);const Pt=i.getRenderTarget(),Dt=L.isInstancedMesh===!0,It=L.isBatchedMesh===!0,Rt=!!v.map,W=!!v.matcap,A=!!I,rt=!!v.aoMap,it=!!v.lightMap,k=!!v.bumpMap,et=!!v.normalMap,ut=!!v.displacementMap,J=!!v.emissiveMap,T=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,K=v.clearcoat>0,nt=v.dispersion>0,Z=v.iridescence>0,vt=v.sheen>0,pt=v.transmission>0,mt=O&&!!v.anisotropyMap,bt=K&&!!v.clearcoatMap,ct=K&&!!v.clearcoatNormalMap,gt=K&&!!v.clearcoatRoughnessMap,At=Z&&!!v.iridescenceMap,_t=Z&&!!v.iridescenceThicknessMap,dt=vt&&!!v.sheenColorMap,Wt=vt&&!!v.sheenRoughnessMap,Et=!!v.specularMap,Kt=!!v.specularColorMap,F=!!v.specularIntensityMap,St=pt&&!!v.transmissionMap,j=pt&&!!v.thicknessMap,lt=!!v.gradientMap,yt=!!v.alphaMap,wt=v.alphaTest>0,jt=!!v.alphaHash,oe=!!v.extensions;let Zt=Kn;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const Bt={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:st,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:It,batchingColor:It&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:$n,alphaToCoverage:!!v.alphaToCoverage,map:Rt,matcap:W,envMap:A,envMapMode:A&&I.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:it,bumpMap:k,normalMap:et,displacementMap:d&&ut,emissiveMap:J,normalMapObjectSpace:et&&v.normalMapType===Hh,normalMapTangentSpace:et&&v.normalMapType===fu,metalnessMap:T,roughnessMap:y,anisotropy:O,anisotropyMap:mt,clearcoat:K,clearcoatMap:bt,clearcoatNormalMap:ct,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:Z,iridescenceMap:At,iridescenceThicknessMap:_t,sheen:vt,sheenColorMap:dt,sheenRoughnessMap:Wt,specularMap:Et,specularColorMap:Kt,specularIntensityMap:F,transmission:pt,transmissionMap:St,thicknessMap:j,gradientMap:lt,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:yt,alphaTest:wt,alphaHash:jt,combine:v.combine,mapUv:Rt&&m(v.map.channel),aoMapUv:rt&&m(v.aoMap.channel),lightMapUv:it&&m(v.lightMap.channel),bumpMapUv:k&&m(v.bumpMap.channel),normalMapUv:et&&m(v.normalMap.channel),displacementMapUv:ut&&m(v.displacementMap.channel),emissiveMapUv:J&&m(v.emissiveMap.channel),metalnessMapUv:T&&m(v.metalnessMap.channel),roughnessMapUv:y&&m(v.roughnessMap.channel),anisotropyMapUv:mt&&m(v.anisotropyMap.channel),clearcoatMapUv:bt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(v.sheenRoughnessMap.channel),specularMapUv:Et&&m(v.specularMap.channel),specularColorMapUv:Kt&&m(v.specularColorMap.channel),specularIntensityMapUv:F&&m(v.specularIntensityMap.channel),transmissionMapUv:St&&m(v.transmissionMap.channel),thicknessMapUv:j&&m(v.thicknessMap.channel),alphaMapUv:yt&&m(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(et||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Rt||yt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function w(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)M.push(G),M.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(_(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),v.push(a.mask)}function D(v){const M=E[v.type];let G;if(M){const H=gn[M];G=Ld.clone(H.uniforms)}else G=v.uniforms;return G}function R(v,M){let G;for(let H=0,L=u.length;H<L;H++){const z=u[H];if(z.cacheKey===M){G=z,++G.usedTimes;break}}return G===void 0&&(G=new qg(i,M,v,r),u.push(G)),G}function S(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function b(v){c.remove(v)}function B(){c.dispose()}return{getParameters:f,getProgramCacheKey:w,getUniforms:D,acquireProgram:R,releaseProgram:S,releaseShaderCache:b,programs:u,dispose:B}}function $g(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,h,d,g,E,m){let f=i[t];return f===void 0?(f={id:p.id,object:p,geometry:h,material:d,groupOrder:g,renderOrder:p.renderOrder,z:E,group:m},i[t]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=d,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=E,f.group=m),t++,f}function a(p,h,d,g,E,m){const f=o(p,h,d,g,E,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function c(p,h,d,g,E,m){const f=o(p,h,d,g,E,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function l(p,h){e.length>1&&e.sort(p||Jg),n.length>1&&n.sort(h||ol),s.length>1&&s.sort(h||ol)}function u(){for(let p=t,h=i.length;p<h;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Qg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new al,i.set(n,[o])):s>=r.length?(o=new al,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function t_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Yt};break;case"SpotLight":e={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let n_=0;function i_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s_(i){const t=new t_,e=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new le,o=new le;function a(l){let u=0,p=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,E=0,m=0,f=0,w=0,_=0,x=0,D=0,R=0,S=0;l.sort(i_);for(let B=0,v=l.length;B<v;B++){const M=l[B],G=M.color,H=M.intensity,L=M.distance,z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=G.r*H,p+=G.g*H,h+=G.b*H;else if(M.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(M.sh.coefficients[N],H);S++}else if(M.isDirectionalLight){const N=t.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const U=M.shadow,I=e.get(M);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=M.shadow.matrix,w++}n.directional[d]=N,d++}else if(M.isSpotLight){const N=t.get(M);N.position.setFromMatrixPosition(M.matrixWorld),N.color.copy(G).multiplyScalar(H),N.distance=L,N.coneCos=Math.cos(M.angle),N.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),N.decay=M.decay,n.spot[E]=N;const U=M.shadow;if(M.map&&(n.spotLightMap[D]=M.map,D++,U.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[E]=U.matrix,M.castShadow){const I=e.get(M);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,n.spotShadow[E]=I,n.spotShadowMap[E]=z,x++}E++}else if(M.isRectAreaLight){const N=t.get(M);N.color.copy(G).multiplyScalar(H),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=N,m++}else if(M.isPointLight){const N=t.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity),N.distance=M.distance,N.decay=M.decay,M.castShadow){const U=M.shadow,I=e.get(M);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,I.shadowCameraNear=U.camera.near,I.shadowCameraFar=U.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=M.shadow.matrix,_++}n.point[g]=N,g++}else if(M.isHemisphereLight){const N=t.get(M);N.skyColor.copy(M.color).multiplyScalar(H),N.groundColor.copy(M.groundColor).multiplyScalar(H),n.hemi[f]=N,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const b=n.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==E||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==w||b.numPointShadows!==_||b.numSpotShadows!==x||b.numSpotMaps!==D||b.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=E,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,b.directionalLength=d,b.pointLength=g,b.spotLength=E,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=w,b.numPointShadows=_,b.numSpotShadows=x,b.numSpotMaps=D,b.numLightProbes=S,n.version=n_++)}function c(l,u){let p=0,h=0,d=0,g=0,E=0;const m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const _=l[f];if(_.isDirectionalLight){const x=n.directional[p];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(_.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=n.hemi[E];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),E++}}}return{setup:a,setupView:c,state:n}}function cl(i){const t=new s_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function r_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cl(i),t.set(s,[a])):r>=o.length?(a=new cl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class o_ extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a_ extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`;function u_(i,t,e){let n=new nc;const s=new xt,r=new xt,o=new ce,a=new o_({depthPacking:zh}),c=new a_,l={},u=e.maxTextureSize,p={[jn]:qe,[qe]:jn,[_n]:_n},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:c_,fragmentShader:l_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let f=this.type;this.render=function(R,S,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const B=i.getRenderTarget(),v=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Yn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=f!==An&&this.type===An,L=f===An&&this.type!==An;for(let z=0,N=R.length;z<N;z++){const U=R[z],I=U.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const q=I.getFrameExtents();if(s.multiply(q),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,I.mapSize.y=r.y)),I.map===null||H===!0||L===!0){const ht=this.type!==An?{minFilter:sn,magFilter:sn}:{};I.map!==null&&I.map.dispose(),I.map=new Mi(s.x,s.y,ht),I.map.texture.name=U.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ot=I.getViewportCount();for(let ht=0;ht<ot;ht++){const Nt=I.getViewport(ht);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),G.viewport(o),I.updateMatrices(U,ht),n=I.getFrustum(),x(S,b,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===An&&w(I,b),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(B,v,M)};function w(R,S){const b=t.update(E);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mi(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(S,null,b,h,E,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(S,null,b,d,E,null)}function _(R,S,b,B){let v=null;const M=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)v=M;else if(v=b.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=v.uuid,H=S.uuid;let L=l[G];L===void 0&&(L={},l[G]=L);let z=L[H];z===void 0&&(z=v.clone(),L[H]=z,S.addEventListener("dispose",D)),v=z}if(v.visible=S.visible,v.wireframe=S.wireframe,B===An?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:p[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=i.properties.get(v);G.light=b}return v}function x(R,S,b,B,v){if(R.visible===!1)return;if(R.layers.test(S.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const H=t.update(R),L=R.material;if(Array.isArray(L)){const z=H.groups;for(let N=0,U=z.length;N<U;N++){const I=z[N],q=L[I.materialIndex];if(q&&q.visible){const ot=_(R,q,B,v);R.onBeforeShadow(i,R,S,b,H,ot,I),i.renderBufferDirect(b,null,H,ot,R,I),R.onAfterShadow(i,R,S,b,H,ot,I)}}}else if(L.visible){const z=_(R,L,B,v);R.onBeforeShadow(i,R,S,b,H,z,null),i.renderBufferDirect(b,null,H,z,R,null),R.onAfterShadow(i,R,S,b,H,z,null)}}const G=R.children;for(let H=0,L=G.length;H<L;H++)x(G[H],S,b,B,v)}function D(R){R.target.removeEventListener("dispose",D);for(const b in l){const B=l[b],v=R.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const h_={[$o]:Jo,[Qo]:na,[ta]:ia,[ts]:ea,[Jo]:$o,[na]:Qo,[ia]:ta,[ea]:ts};function d_(i){function t(){let F=!1;const St=new ce;let j=null;const lt=new ce(0,0,0,0);return{setMask:function(yt){j!==yt&&!F&&(i.colorMask(yt,yt,yt,yt),j=yt)},setLocked:function(yt){F=yt},setClear:function(yt,wt,jt,oe,Zt){Zt===!0&&(yt*=oe,wt*=oe,jt*=oe),St.set(yt,wt,jt,oe),lt.equals(St)===!1&&(i.clearColor(yt,wt,jt,oe),lt.copy(St))},reset:function(){F=!1,j=null,lt.set(-1,0,0,0)}}}function e(){let F=!1,St=!1,j=null,lt=null,yt=null;return{setReversed:function(wt){St=wt},setTest:function(wt){wt?ft(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(wt){j!==wt&&!F&&(i.depthMask(wt),j=wt)},setFunc:function(wt){if(St&&(wt=h_[wt]),lt!==wt){switch(wt){case $o:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=wt}},setLocked:function(wt){F=wt},setClear:function(wt){yt!==wt&&(i.clearDepth(wt),yt=wt)},reset:function(){F=!1,j=null,lt=null,yt=null}}}function n(){let F=!1,St=null,j=null,lt=null,yt=null,wt=null,jt=null,oe=null,Zt=null;return{setTest:function(Bt){F||(Bt?ft(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Bt){St!==Bt&&!F&&(i.stencilMask(Bt),St=Bt)},setFunc:function(Bt,de,_e){(j!==Bt||lt!==de||yt!==_e)&&(i.stencilFunc(Bt,de,_e),j=Bt,lt=de,yt=_e)},setOp:function(Bt,de,_e){(wt!==Bt||jt!==de||oe!==_e)&&(i.stencilOp(Bt,de,_e),wt=Bt,jt=de,oe=_e)},setLocked:function(Bt){F=Bt},setClear:function(Bt){Zt!==Bt&&(i.clearStencil(Bt),Zt=Bt)},reset:function(){F=!1,St=null,j=null,lt=null,yt=null,wt=null,jt=null,oe=null,Zt=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},p=new WeakMap,h=[],d=null,g=!1,E=null,m=null,f=null,w=null,_=null,x=null,D=null,R=new Yt(0,0,0),S=0,b=!1,B=null,v=null,M=null,G=null,H=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=N>=2);let I=null,q={};const ot=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Nt=new ce().fromArray(ot),qt=new ce().fromArray(ht);function Y(F,St,j,lt){const yt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(F,wt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<j;jt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(St+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return wt}const st={};st[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),r.setFunc(ts),it(!1),k(gc),ft(i.CULL_FACE),A(Yn);function ft(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function at(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function Pt(F,St){return u[F]!==St?(i.bindFramebuffer(F,St),u[F]=St,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Dt(F,St){let j=h,lt=!1;if(F){j=p.get(St),j===void 0&&(j=[],p.set(St,j));const yt=F.textures;if(j.length!==yt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,jt=yt.length;wt<jt;wt++)j[wt]=i.COLOR_ATTACHMENT0+wt;j.length=yt.length,lt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,lt=!0);lt&&i.drawBuffers(j)}function It(F){return d!==F?(i.useProgram(F),d=F,!0):!1}const Rt={[mi]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};Rt[ph]=i.MIN,Rt[mh]=i.MAX;const W={[gh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[yh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Th]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function A(F,St,j,lt,yt,wt,jt,oe,Zt,Bt){if(F===Yn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),F!==hh){if(F!==E||Bt!==b){if((m!==mi||_!==mi)&&(i.blendEquation(i.FUNC_ADD),m=mi,_=mi),Bt)switch(F){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,w=null,x=null,D=null,R.set(0,0,0),S=0,E=F,b=Bt}return}yt=yt||St,wt=wt||j,jt=jt||lt,(St!==m||yt!==_)&&(i.blendEquationSeparate(Rt[St],Rt[yt]),m=St,_=yt),(j!==f||lt!==w||wt!==x||jt!==D)&&(i.blendFuncSeparate(W[j],W[lt],W[wt],W[jt]),f=j,w=lt,x=wt,D=jt),(oe.equals(R)===!1||Zt!==S)&&(i.blendColor(oe.r,oe.g,oe.b,Zt),R.copy(oe),S=Zt),E=F,b=!1}function rt(F,St){F.side===_n?at(i.CULL_FACE):ft(i.CULL_FACE);let j=F.side===qe;St&&(j=!j),it(j),F.blending===$i&&F.transparent===!1?A(Yn):A(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const lt=F.stencilWrite;o.setTest(lt),lt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(F){B!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),B=F)}function k(F){F!==ch?(ft(i.CULL_FACE),F!==v&&(F===gc?i.cullFace(i.BACK):F===lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),v=F}function et(F){F!==M&&(z&&i.lineWidth(F),M=F)}function ut(F,St,j){F?(ft(i.POLYGON_OFFSET_FILL),(G!==St||H!==j)&&(i.polygonOffset(St,j),G=St,H=j)):at(i.POLYGON_OFFSET_FILL)}function J(F){F?ft(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+L-1),I!==F&&(i.activeTexture(F),I=F)}function y(F,St,j){j===void 0&&(I===null?j=i.TEXTURE0+L-1:j=I);let lt=q[j];lt===void 0&&(lt={type:void 0,texture:void 0},q[j]=lt),(lt.type!==F||lt.texture!==St)&&(I!==j&&(i.activeTexture(j),I=j),i.bindTexture(F,St||st[F]),lt.type=F,lt.texture=St)}function O(){const F=q[I];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(F){Nt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Nt.copy(F))}function dt(F){qt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),qt.copy(F))}function Wt(F,St){let j=c.get(St);j===void 0&&(j=new WeakMap,c.set(St,j));let lt=j.get(F);lt===void 0&&(lt=i.getUniformBlockIndex(St,F.name),j.set(F,lt))}function Et(F,St){const lt=c.get(St).get(F);a.get(St)!==lt&&(i.uniformBlockBinding(St,lt,F.__bindingPointIndex),a.set(St,lt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,q={},u={},p=new WeakMap,h=[],d=null,g=!1,E=null,m=null,f=null,w=null,_=null,x=null,D=null,R=new Yt(0,0,0),S=0,b=!1,B=null,v=null,M=null,G=null,H=null,Nt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ft,disable:at,bindFramebuffer:Pt,drawBuffers:Dt,useProgram:It,setBlending:A,setMaterial:rt,setFlipSided:it,setCullFace:k,setLineWidth:et,setPolygonOffset:ut,setScissorTest:J,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:gt,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:Et,texStorage2D:bt,texStorage3D:ct,texSubImage2D:Z,texSubImage3D:vt,compressedTexSubImage2D:pt,compressedTexSubImage3D:mt,scissor:_t,viewport:dt,reset:Kt}}function ll(i,t,e,n){const s=f_(n);switch(e){case ou:return i*t;case cu:return i*t;case lu:return i*t*2;case uu:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case au:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ja:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:case ha:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case du:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f_(i){switch(i){case In:case iu:return{byteLength:1,components:1};case As:case su:case Ns:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case yi:case Ya:case Pn:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function p_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap;let p;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Ur("canvas")}function E(T,y,O){let K=1;const nt=J(T);if((nt.width>O||nt.height>O)&&(K=O/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(K*nt.width),vt=Math.floor(K*nt.height);p===void 0&&(p=g(Z,vt));const pt=y?g(Z,vt):p;return pt.width=Z,pt.height=vt,pt.getContext("2d").drawImage(T,0,0,Z,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+vt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==sn&&T.minFilter!==ln}function f(T){i.generateMipmap(T)}function w(T,y,O,K,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const vt=nt?Dr:re.getTransfer(K);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=vt===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,y){let O;return T?y===null||y===yi||y===is?O=i.DEPTH24_STENCIL8:y===Pn?O=i.DEPTH32F_STENCIL8:y===As&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===is?O=i.DEPTH_COMPONENT24:y===Pn?O=i.DEPTH_COMPONENT32F:y===As&&(O=i.DEPTH_COMPONENT16),O}function x(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function D(T){const y=T.target;y.removeEventListener("dispose",D),S(y),y.isVideoTexture&&u.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),B(y)}function S(T){const y=n.get(T);if(y.__webglInit===void 0)return;const O=T.source,K=h.get(O);if(K){const nt=K[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(T),Object.keys(K).length===0&&h.delete(O)}n.remove(T)}function b(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const O=T.source,K=h.get(O);delete K[y.__cacheKey],o.memory.textures--}function B(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let nt=0;nt<y.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,nt=O.length;K<nt;K++){const Z=n.get(O[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(T)}let v=0;function M(){v=0}function G(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function H(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function L(T,y){const O=n.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(O,T,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function z(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){qt(O,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function N(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){qt(O,T,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function U(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const I={[oa]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},q={[sn]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ot={[Gh]:i.NEVER,[Kh]:i.ALWAYS,[Vh]:i.LESS,[pu]:i.LEQUAL,[Wh]:i.EQUAL,[Yh]:i.GEQUAL,[Xh]:i.GREATER,[qh]:i.NOTEQUAL};function ht(T,y){if(y.type===Pn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===Jr||y.magFilter===Gs||y.magFilter===vi||y.minFilter===ln||y.minFilter===Jr||y.minFilter===Gs||y.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,I[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,I[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,I[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,q[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==Gs&&y.minFilter!==vi||y.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Nt(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",D));const K=y.source;let nt=h.get(K);nt===void 0&&(nt={},h.set(K,nt));const Z=H(y);if(Z!==T.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[Z].usedTimes++;const vt=nt[T.__cacheKey];vt!==void 0&&(nt[T.__cacheKey].usedTimes--,vt.usedTimes===0&&b(y)),T.__cacheKey=Z,T.__webglTexture=nt[Z].texture}return O}function qt(T,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const nt=Nt(T,y),Z=y.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+O);const vt=n.get(Z);if(Z.version!==vt.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);const pt=re.getPrimaries(re.workingColorSpace),mt=y.colorSpace===Xn?null:re.getPrimaries(y.colorSpace),bt=y.colorSpace===Xn||pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ct=E(y.image,!1,s.maxTextureSize);ct=ut(y,ct);const gt=r.convert(y.format,y.colorSpace),At=r.convert(y.type);let _t=w(y.internalFormat,gt,At,y.colorSpace,y.isVideoTexture);ht(K,y);let dt;const Wt=y.mipmaps,Et=y.isVideoTexture!==!0,Kt=vt.__version===void 0||nt===!0,F=Z.dataReady,St=x(y,ct);if(y.isDepthTexture)_t=_(y.format===ss,y.type),Kt&&(Et?e.texStorage2D(i.TEXTURE_2D,1,_t,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,gt,At,null));else if(y.isDataTexture)if(Wt.length>0){Et&&Kt&&e.texStorage2D(i.TEXTURE_2D,St,_t,Wt[0].width,Wt[0].height);for(let j=0,lt=Wt.length;j<lt;j++)dt=Wt[j],Et?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,gt,At,dt.data):e.texImage2D(i.TEXTURE_2D,j,_t,dt.width,dt.height,0,gt,At,dt.data);y.generateMipmaps=!1}else Et?(Kt&&e.texStorage2D(i.TEXTURE_2D,St,_t,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,gt,At,ct.data)):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,gt,At,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Et&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,_t,Wt[0].width,Wt[0].height,ct.depth);for(let j=0,lt=Wt.length;j<lt;j++)if(dt=Wt[j],y.format!==dn)if(gt!==null)if(Et){if(F)if(y.layerUpdates.size>0){const yt=ll(dt.width,dt.height,y.format,y.type);for(const wt of y.layerUpdates){const jt=dt.data.subarray(wt*yt/dt.data.BYTES_PER_ELEMENT,(wt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,wt,dt.width,dt.height,1,gt,jt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,ct.depth,gt,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,_t,dt.width,dt.height,ct.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,ct.depth,gt,At,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,_t,dt.width,dt.height,ct.depth,0,gt,At,dt.data)}else{Et&&Kt&&e.texStorage2D(i.TEXTURE_2D,St,_t,Wt[0].width,Wt[0].height);for(let j=0,lt=Wt.length;j<lt;j++)dt=Wt[j],y.format!==dn?gt!==null?Et?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,gt,At,dt.data):e.texImage2D(i.TEXTURE_2D,j,_t,dt.width,dt.height,0,gt,At,dt.data)}else if(y.isDataArrayTexture)if(Et){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,_t,ct.width,ct.height,ct.depth),F)if(y.layerUpdates.size>0){const j=ll(ct.width,ct.height,y.format,y.type);for(const lt of y.layerUpdates){const yt=ct.data.subarray(lt*j/ct.data.BYTES_PER_ELEMENT,(lt+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ct.width,ct.height,1,gt,At,yt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,At,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,ct.width,ct.height,ct.depth,0,gt,At,ct.data);else if(y.isData3DTexture)Et?(Kt&&e.texStorage3D(i.TEXTURE_3D,St,_t,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,At,ct.data)):e.texImage3D(i.TEXTURE_3D,0,_t,ct.width,ct.height,ct.depth,0,gt,At,ct.data);else if(y.isFramebufferTexture){if(Kt)if(Et)e.texStorage2D(i.TEXTURE_2D,St,_t,ct.width,ct.height);else{let j=ct.width,lt=ct.height;for(let yt=0;yt<St;yt++)e.texImage2D(i.TEXTURE_2D,yt,_t,j,lt,0,gt,At,null),j>>=1,lt>>=1}}else if(Wt.length>0){if(Et&&Kt){const j=J(Wt[0]);e.texStorage2D(i.TEXTURE_2D,St,_t,j.width,j.height)}for(let j=0,lt=Wt.length;j<lt;j++)dt=Wt[j],Et?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt,At,dt):e.texImage2D(i.TEXTURE_2D,j,_t,gt,At,dt);y.generateMipmaps=!1}else if(Et){if(Kt){const j=J(ct);e.texStorage2D(i.TEXTURE_2D,St,_t,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,ct)}else e.texImage2D(i.TEXTURE_2D,0,_t,gt,At,ct);m(y)&&f(K),vt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Y(T,y,O){if(y.image.length!==6)return;const K=Nt(T,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const Z=n.get(nt);if(nt.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const vt=re.getPrimaries(re.workingColorSpace),pt=y.colorSpace===Xn?null:re.getPrimaries(y.colorSpace),mt=y.colorSpace===Xn||vt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const bt=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let lt=0;lt<6;lt++)!bt&&!ct?gt[lt]=E(y.image[lt],!0,s.maxCubemapSize):gt[lt]=ct?y.image[lt].image:y.image[lt],gt[lt]=ut(y,gt[lt]);const At=gt[0],_t=r.convert(y.format,y.colorSpace),dt=r.convert(y.type),Wt=w(y.internalFormat,_t,dt,y.colorSpace),Et=y.isVideoTexture!==!0,Kt=Z.__version===void 0||K===!0,F=nt.dataReady;let St=x(y,At);ht(i.TEXTURE_CUBE_MAP,y);let j;if(bt){Et&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Wt,At.width,At.height);for(let lt=0;lt<6;lt++){j=gt[lt].mipmaps;for(let yt=0;yt<j.length;yt++){const wt=j[yt];y.format!==dn?_t!==null?Et?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt,0,0,wt.width,wt.height,_t,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt,Wt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt,0,0,wt.width,wt.height,_t,dt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt,Wt,wt.width,wt.height,0,_t,dt,wt.data)}}}else{if(j=y.mipmaps,Et&&Kt){j.length>0&&St++;const lt=J(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Wt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ct){Et?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,gt[lt].width,gt[lt].height,_t,dt,gt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,gt[lt].width,gt[lt].height,0,_t,dt,gt[lt].data);for(let yt=0;yt<j.length;yt++){const jt=j[yt].image[lt].image;Et?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt+1,0,0,jt.width,jt.height,_t,dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt+1,Wt,jt.width,jt.height,0,_t,dt,jt.data)}}else{Et?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,_t,dt,gt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,_t,dt,gt[lt]);for(let yt=0;yt<j.length;yt++){const wt=j[yt];Et?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt+1,0,0,_t,dt,wt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt+1,Wt,_t,dt,wt.image[lt])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function st(T,y,O,K,nt,Z){const vt=r.convert(O.format,O.colorSpace),pt=r.convert(O.type),mt=w(O.internalFormat,vt,pt,O.colorSpace);if(!n.get(y).__hasExternalTextures){const ct=Math.max(1,y.width>>Z),gt=Math.max(1,y.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,mt,ct,gt,y.depth,0,vt,pt,null):e.texImage2D(nt,Z,mt,ct,gt,0,vt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),k(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,n.get(O).__webglTexture,0,it(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,n.get(O).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(T,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const K=y.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Z=_(y.stencilBuffer,nt),vt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=it(y);k(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,T)}else{const K=y.textures;for(let nt=0;nt<K.length;nt++){const Z=K[nt],vt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),mt=w(Z.internalFormat,vt,pt,Z.colorSpace),bt=it(y);O&&k(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,mt,y.width,y.height):k(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),L(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,nt=it(y);if(y.depthTexture.format===Ji)k(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===ss)k(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),ft(y.__webglDepthbuffer[K],T,!1);else{const nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ft(y.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,y,O){const K=n.get(T);y!==void 0&&st(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pt(T)}function It(T){const y=T.texture,O=n.get(T),K=n.get(y);T.addEventListener("dispose",R);const nt=T.textures,Z=T.isWebGLCubeRenderTarget===!0,vt=nt.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[pt]=[];for(let mt=0;mt<y.mipmaps.length;mt++)O.__webglFramebuffer[pt][mt]=i.createFramebuffer()}else O.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)O.__webglFramebuffer[pt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let pt=0,mt=nt.length;pt<mt;pt++){const bt=n.get(nt[pt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&k(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const mt=nt[pt];O.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);const bt=r.convert(mt.format,mt.colorSpace),ct=r.convert(mt.type),gt=w(mt.internalFormat,bt,ct,mt.colorSpace,T.isXRRenderTarget===!0),At=it(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ht(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)st(O.__webglFramebuffer[pt][mt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,mt);else st(O.__webglFramebuffer[pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let pt=0,mt=nt.length;pt<mt;pt++){const bt=nt[pt],ct=n.get(bt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),ht(i.TEXTURE_2D,bt),st(O.__webglFramebuffer,T,bt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(bt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),ht(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)st(O.__webglFramebuffer[mt],T,y,i.COLOR_ATTACHMENT0,pt,mt);else st(O.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,pt,0);m(y)&&f(pt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Rt(T){const y=T.textures;for(let O=0,K=y.length;O<K;O++){const nt=y[O];if(m(nt)){const Z=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(nt).__webglTexture;e.bindTexture(Z,vt),f(Z),e.unbindTexture()}}}const W=[],A=[];function rt(T){if(T.samples>0){if(k(T)===!1){const y=T.textures,O=T.width,K=T.height;let nt=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(T),pt=y.length>1;if(pt)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const bt=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,nt,i.NEAREST),c===!0&&(W.length=0,A.length=0,W.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(W.push(Z),A.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const bt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(T){return Math.min(s.maxSamples,T.samples)}function k(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function ut(T,y){const O=T.colorSpace,K=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==$n&&O!==Xn&&(re.getTransfer(O)===pe?(K!==dn||nt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function J(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=Dt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=k}function m_(i,t){function e(n,s=Xn){let r;const o=re.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===dn)return i.RGBA;if(n===cu)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===uu)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===br||n===wr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===la||n===ua||n===ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===fa)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea||n===ba||n===wa||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===Da||n===La||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class g_ extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oe extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const __={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const E of t.hand.values()){const m=e.getJointPose(E,n),f=this._getHandJoint(l,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:v_,fragmentShader:x_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,g=null;const E=new y_,m=e.getContextAttributes();let f=null,w=null;const _=[],x=[],D=new xt;let R=null;const S=new He;S.layers.enable(1),S.viewport=new ce;const b=new He;b.layers.enable(2),b.viewport=new ce;const B=[S,b],v=new g_;v.layers.enable(1),v.layers.enable(2);let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=_[Y];return st===void 0&&(st=new Ao,_[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=_[Y];return st===void 0&&(st=new Ao,_[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=_[Y];return st===void 0&&(st=new Ao,_[Y]=st),st.getHandSpace()};function H(Y){const st=x.indexOf(Y.inputSource);if(st===-1)return;const ft=_[st];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<_.length;Y++){const st=x[Y];st!==null&&(x[Y]=null,_[Y].disconnect(st))}M=null,G=null,E.reset(),t.setRenderTarget(f),d=null,h=null,p=null,s=null,w=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",L),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Mi(d.framebufferWidth,d.framebufferHeight,{format:dn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,ft=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ss:Ji,ft=m.stencil?is:yi);const Pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};p=new XRWebGLBinding(s,e),h=p.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new Mi(h.textureWidth,h.textureHeight,{format:dn,type:In,depthTexture:new Tu(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function z(Y){for(let st=0;st<Y.removed.length;st++){const ft=Y.removed[st],at=x.indexOf(ft);at>=0&&(x[at]=null,_[at].disconnect(ft))}for(let st=0;st<Y.added.length;st++){const ft=Y.added[st];let at=x.indexOf(ft);if(at===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=x.length){x.push(ft),at=Dt;break}else if(x[Dt]===null){x[Dt]=ft,at=Dt;break}if(at===-1)break}const Pt=_[at];Pt&&Pt.connect(ft)}}const N=new P,U=new P;function I(Y,st,ft){N.setFromMatrixPosition(st.matrixWorld),U.setFromMatrixPosition(ft.matrixWorld);const at=N.distanceTo(U),Pt=st.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,It=Pt[14]/(Pt[10]-1),Rt=Pt[14]/(Pt[10]+1),W=(Pt[9]+1)/Pt[5],A=(Pt[9]-1)/Pt[5],rt=(Pt[8]-1)/Pt[0],it=(Dt[8]+1)/Dt[0],k=It*rt,et=It*it,ut=at/(-rt+it),J=ut*-rt;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(J),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const T=It+ut,y=Rt+ut,O=k-J,K=et+(at-J),nt=W*Rt/y*T,Z=A*Rt/y*T;Y.projectionMatrix.makePerspective(O,K,nt,Z,T,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,ft=Y.far;E.texture!==null&&(E.depthNear>0&&(st=E.depthNear),E.depthFar>0&&(ft=E.depthFar)),v.near=b.near=S.near=st,v.far=b.far=S.far=ft,(M!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,G=v.far);const at=Y.parent,Pt=v.cameras;q(v,at);for(let Dt=0;Dt<Pt.length;Dt++)q(Pt[Dt],at);Pt.length===2?I(v,S,b):v.projectionMatrix.copy(S.projectionMatrix),ot(Y,v,at)};function ot(Y,st,ft){ft===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let ht=null;function Nt(Y,st){if(u=st.getViewerPose(l||o),g=st,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let at=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Dt=0;Dt<ft.length;Dt++){const It=ft[Dt];let Rt=null;if(d!==null)Rt=d.getViewport(It);else{const A=p.getViewSubImage(h,It);Rt=A.viewport,Dt===0&&(t.setRenderTargetTextures(w,A.colorTexture,h.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(w))}let W=B[Dt];W===void 0&&(W=new He,W.layers.enable(Dt),W.viewport=new ce,B[Dt]=W),W.matrix.fromArray(It.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(It.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Dt===0&&(v.matrix.copy(W.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(W)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Dt=p.getDepthInformation(ft[0]);Dt&&Dt.isValid&&Dt.texture&&E.init(t,Dt,s.renderState)}}for(let ft=0;ft<_.length;ft++){const at=x[ft],Pt=_[ft];at!==null&&Pt!==void 0&&Pt.update(at,st,l||o)}ht&&ht(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const qt=new bu;qt.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const ui=new vn,S_=new le;function E_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Mu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),_=w.envMap,x=w.envMapRotation;_&&(m.envMap.value=_,ui.copy(x),ui.x*=-1,ui.y*=-1,ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(ui)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){const x=_.program;n.uniformBlockBinding(w,x)}function l(w,_){let x=s[w.id];x===void 0&&(g(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",m));const D=_.program;n.updateUBOMapping(w,D);const R=t.render.frame;r[w.id]!==R&&(h(w),r[w.id]=R)}function u(w){const _=p();w.__bindingPointIndex=_;const x=i.createBuffer(),D=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function p(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=s[w.id],x=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,S=x.length;R<S;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let B=0,v=b.length;B<v;B++){const M=b[B];if(d(M,R,B,D)===!0){const G=M.__offset,H=Array.isArray(M.value)?M.value:[M.value];let L=0;for(let z=0;z<H.length;z++){const N=H[z],U=E(N);typeof N=="number"||typeof N=="boolean"?(M.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,G+L,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=0,M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=0,M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=0):(N.toArray(M.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,_,x,D){const R=w.value,S=_+"_"+x;if(D[S]===void 0)return typeof R=="number"||typeof R=="boolean"?D[S]=R:D[S]=R.clone(),!0;{const b=D[S];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return D[S]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function g(w){const _=w.uniforms;let x=0;const D=16;for(let S=0,b=_.length;S<b;S++){const B=Array.isArray(_[S])?_[S]:[_[S]];for(let v=0,M=B.length;v<M;v++){const G=B[v],H=Array.isArray(G.value)?G.value:[G.value];for(let L=0,z=H.length;L<z;L++){const N=H[L],U=E(N),I=x%D,q=I%U.boundary,ot=I+q;x+=q,ot!==0&&D-ot<U.storage&&(x+=D-ot),G.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=U.storage}}}const R=x%D;return R>0&&(x+=D-R),w.__size=x,w.__cache={},this}function E(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){const _=w.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class sc{constructor(t={}){const{canvas:e=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let E=null,m=null;const f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let x=!1,D=0,R=0,S=null,b=-1,B=null;const v=new ce,M=new ce;let G=null;const H=new Yt(0);let L=0,z=e.width,N=e.height,U=1,I=null,q=null;const ot=new ce(0,0,z,N),ht=new ce(0,0,z,N);let Nt=!1;const qt=new nc;let Y=!1,st=!1;const ft=new le,at=new le,Pt=new P,Dt=new ce,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function W(){return S===null?U:1}let A=n;function rt(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),A===null){const V="webgl2";if(A=rt(V,C),A===null)throw rt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,k,et,ut,J,T,y,O,K,nt,Z,vt,pt,mt,bt,ct,gt,At,_t,dt,Wt,Et,Kt,F;function St(){it=new Pm(A),it.init(),Et=new m_(A,it),k=new bm(A,it,t,Et),et=new d_(A),k.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),ut=new Im(A),J=new $g,T=new p_(A,it,et,J,k,Et,ut),y=new Tm(_),O=new Cm(_),K=new Bd(A),Kt=new Sm(A,K),nt=new Dm(A,K,ut,Kt),Z=new Um(A,nt,K,ut),_t=new Nm(A,k,T),ct=new wm(J),vt=new Zg(_,y,O,it,k,Kt,ct),pt=new E_(_,J),mt=new Qg,bt=new r_(it),At=new Mm(_,y,O,et,Z,h,c),gt=new u_(_,Z,k),F=new b_(A,ut,k,et),dt=new Em(A,it,ut),Wt=new Lm(A,it,ut),ut.programs=vt.programs,_.capabilities=k,_.extensions=it,_.properties=J,_.renderLists=mt,_.shadowMap=gt,_.state=et,_.info=ut}St();const j=new M_(_,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(z,N,!1))},this.getSize=function(C){return C.set(z,N)},this.setSize=function(C,V,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,N=V,e.width=Math.floor(C*U),e.height=Math.floor(V*U),$===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(z*U,N*U).floor()},this.setDrawingBufferSize=function(C,V,$){z=C,N=V,U=$,e.width=Math.floor(C*$),e.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,V,$,Q){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,V,$,Q),et.viewport(v.copy(ot).multiplyScalar(U).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,V,$,Q){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,V,$,Q),et.scissor(M.copy(ht).multiplyScalar(U).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){et.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(C=!0,V=!0,$=!0){let Q=0;if(C){let X=!1;if(S!==null){const Mt=S.texture.format;X=Mt===Ja||Mt===$a||Mt===Za}if(X){const Mt=S.texture.type,Lt=Mt===In||Mt===yi||Mt===As||Mt===is||Mt===Ka||Mt===ja,Ot=At.getClearColor(),Ft=At.getClearAlpha(),Ht=Ot.r,Xt=Ot.g,zt=Ot.b;Lt?(d[0]=Ht,d[1]=Xt,d[2]=zt,d[3]=Ft,A.clearBufferuiv(A.COLOR,0,d)):(g[0]=Ht,g[1]=Xt,g[2]=zt,g[3]=Ft,A.clearBufferiv(A.COLOR,0,g))}else Q|=A.COLOR_BUFFER_BIT}V&&(Q|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),mt.dispose(),bt.dispose(),J.dispose(),y.dispose(),O.dispose(),Z.dispose(),Kt.dispose(),F.dispose(),vt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Qn),j.removeEventListener("sessionend",ti),Ve.stop()};function lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=ut.autoReset,V=gt.enabled,$=gt.autoUpdate,Q=gt.needsUpdate,X=gt.type;St(),ut.autoReset=C,gt.enabled=V,gt.autoUpdate=$,gt.needsUpdate=Q,gt.type=X}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function jt(C){const V=C.target;V.removeEventListener("dispose",jt),oe(V)}function oe(C){Zt(C),J.remove(C)}function Zt(C){const V=J.get(C).programs;V!==void 0&&(V.forEach(function($){vt.releaseProgram($)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,Q,X,Mt){V===null&&(V=It);const Lt=X.isMesh&&X.matrixWorld.determinant()<0,Ot=Fs(C,V,$,Q,X);et.setMaterial(Q,Lt);let Ft=$.index,Ht=1;if(Q.wireframe===!0){if(Ft=nt.getWireframeAttribute($),Ft===void 0)return;Ht=2}const Xt=$.drawRange,zt=$.attributes.position;let ie=Xt.start*Ht,tt=(Xt.start+Xt.count)*Ht;Mt!==null&&(ie=Math.max(ie,Mt.start*Ht),tt=Math.min(tt,(Mt.start+Mt.count)*Ht)),Ft!==null?(ie=Math.max(ie,0),tt=Math.min(tt,Ft.count)):zt!=null&&(ie=Math.max(ie,0),tt=Math.min(tt,zt.count));const kt=tt-ie;if(kt<0||kt===1/0)return;Kt.setup(X,Q,Ot,$,Ft);let Vt,Ut=dt;if(Ft!==null&&(Vt=K.get(Ft),Ut=Wt,Ut.setIndex(Vt)),X.isMesh)Q.wireframe===!0?(et.setLineWidth(Q.wireframeLinewidth*W()),Ut.setMode(A.LINES)):Ut.setMode(A.TRIANGLES);else if(X.isLine){let Tt=Q.linewidth;Tt===void 0&&(Tt=1),et.setLineWidth(Tt*W()),X.isLineSegments?Ut.setMode(A.LINES):X.isLineLoop?Ut.setMode(A.LINE_LOOP):Ut.setMode(A.LINE_STRIP)}else X.isPoints?Ut.setMode(A.POINTS):X.isSprite&&Ut.setMode(A.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Tt=X._multiDrawStarts,Qt=X._multiDrawCounts,Gt=X._multiDrawCount,se=Ft?K.get(Ft).bytesPerElement:1,he=J.get(Q).currentProgram.getUniforms();for(let fe=0;fe<Gt;fe++)he.setValue(A,"_gl_DrawID",fe),Ut.render(Tt[fe]/se,Qt[fe])}else if(X.isInstancedMesh)Ut.renderInstances(ie,kt,X.count);else if($.isInstancedBufferGeometry){const Tt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qt=Math.min($.instanceCount,Tt);Ut.renderInstances(ie,kt,Qt)}else Ut.render(ie,kt)};function Bt(C,V,$){C.transparent===!0&&C.side===_n&&C.forceSinglePass===!1?(C.side=qe,C.needsUpdate=!0,ii(C,V,$),C.side=jn,C.needsUpdate=!0,ii(C,V,$),C.side=_n):ii(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),m=bt.get($),m.init(V),w.push(m),$.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==$&&C.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Lt=0;Lt<Mt.length;Lt++){const Ot=Mt[Lt];Bt(Ot,$,X),Q.add(Ot)}else Bt(Mt,$,X),Q.add(Mt)}),w.pop(),m=null,Q},this.compileAsync=function(C,V,$=null){const Q=this.compile(C,V,$);return new Promise(X=>{function Mt(){if(Q.forEach(function(Lt){J.get(Lt).currentProgram.isReady()&&Q.delete(Lt)}),Q.size===0){X(C);return}setTimeout(Mt,10)}it.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let de=null;function _e(C){de&&de(C)}function Qn(){Ve.stop()}function ti(){Ve.start()}const Ve=new bu;Ve.setAnimationLoop(_e),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(C){de=C,j.setAnimationLoop(C),C===null?Ve.stop():Ve.start()},j.addEventListener("sessionstart",Qn),j.addEventListener("sessionend",ti),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,V,S),m=bt.get(C,w.length),m.init(V),w.push(m),at.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),qt.setFromProjectionMatrix(at),st=this.localClippingEnabled,Y=ct.init(this.clippingPlanes,st),E=mt.get(C,f.length),E.init(),f.push(E),j.enabled===!0&&j.isPresenting===!0){const Mt=_.xr.getDepthSensingMesh();Mt!==null&&Nn(Mt,V,-1/0,_.sortObjects)}Nn(C,V,0,_.sortObjects),E.finish(),_.sortObjects===!0&&E.sort(I,q),Rt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Rt&&At.addToRenderList(E,C),this.info.render.frame++,Y===!0&&ct.beginShadows();const $=m.state.shadowsArray;gt.render($,C,V),Y===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=E.opaque,X=E.transmissive;if(m.setupLights(),V.isArrayCamera){const Mt=V.cameras;if(X.length>0)for(let Lt=0,Ot=Mt.length;Lt<Ot;Lt++){const Ft=Mt[Lt];ei(Q,X,C,Ft)}Rt&&At.render(C);for(let Lt=0,Ot=Mt.length;Lt<Ot;Lt++){const Ft=Mt[Lt];xe(E,C,Ft,Ft.viewport)}}else X.length>0&&ei(Q,X,C,V),Rt&&At.render(C),xe(E,C,V);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(_,C,V),Kt.resetDefaultState(),b=-1,B=null,w.pop(),w.length>0?(m=w[w.length-1],Y===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?E=f[f.length-1]:E=null};function Nn(C,V,$,Q){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||qt.intersectsSprite(C)){Q&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(at);const Lt=Z.update(C),Ot=C.material;Ot.visible&&E.push(C,Lt,Ot,$,Dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||qt.intersectsObject(C))){const Lt=Z.update(C),Ot=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Dt.copy(Lt.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(at)),Array.isArray(Ot)){const Ft=Lt.groups;for(let Ht=0,Xt=Ft.length;Ht<Xt;Ht++){const zt=Ft[Ht],ie=Ot[zt.materialIndex];ie&&ie.visible&&E.push(C,Lt,ie,$,Dt.z,zt)}}else Ot.visible&&E.push(C,Lt,Ot,$,Dt.z,null)}}const Mt=C.children;for(let Lt=0,Ot=Mt.length;Lt<Ot;Lt++)Nn(Mt[Lt],V,$,Q)}function xe(C,V,$,Q){const X=C.opaque,Mt=C.transmissive,Lt=C.transparent;m.setupLightsView($),Y===!0&&ct.setGlobalState(_.clippingPlanes,$),Q&&et.viewport(v.copy(Q)),X.length>0&&ni(X,V,$),Mt.length>0&&ni(Mt,V,$),Lt.length>0&&ni(Lt,V,$),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ei(C,V,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Mi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ns:In,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const Mt=m.state.transmissionRenderTarget[Q.id],Lt=Q.viewport||v;Mt.setSize(Lt.z,Lt.w);const Ot=_.getRenderTarget();_.setRenderTarget(Mt),_.getClearColor(H),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear(),Rt&&At.render($);const Ft=_.toneMapping;_.toneMapping=Kn;const Ht=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),Y===!0&&ct.setGlobalState(_.clippingPlanes,Q),ni(C,$,Q),T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let zt=0,ie=V.length;zt<ie;zt++){const tt=V[zt],kt=tt.object,Vt=tt.geometry,Ut=tt.material,Tt=tt.group;if(Ut.side===_n&&kt.layers.test(Q.layers)){const Qt=Ut.side;Ut.side=qe,Ut.needsUpdate=!0,cs(kt,$,Q,Vt,Ut,Tt),Ut.side=Qt,Ut.needsUpdate=!0,Xt=!0}}Xt===!0&&(T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt))}_.setRenderTarget(Ot),_.setClearColor(H,L),Ht!==void 0&&(Q.viewport=Ht),_.toneMapping=Ft}function ni(C,V,$){const Q=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Mt=C.length;X<Mt;X++){const Lt=C[X],Ot=Lt.object,Ft=Lt.geometry,Ht=Q===null?Lt.material:Q,Xt=Lt.group;Ot.layers.test($.layers)&&cs(Ot,V,$,Ft,Ht,Xt)}}function cs(C,V,$,Q,X,Mt){C.onBeforeRender(_,V,$,Q,X,Mt),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(_,V,$,Q,C,Mt),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=qe,X.needsUpdate=!0,_.renderBufferDirect($,V,Q,X,C,Mt),X.side=jn,X.needsUpdate=!0,_.renderBufferDirect($,V,Q,X,C,Mt),X.side=_n):_.renderBufferDirect($,V,Q,X,C,Mt),C.onAfterRender(_,V,$,Q,X,Mt)}function ii(C,V,$){V.isScene!==!0&&(V=It);const Q=J.get(C),X=m.state.lights,Mt=m.state.shadowsArray,Lt=X.state.version,Ot=vt.getParameters(C,X.state,Mt,V,$),Ft=vt.getProgramCacheKey(Ot);let Ht=Q.programs;Q.environment=C.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(C.isMeshStandardMaterial?O:y).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",jt),Ht=new Map,Q.programs=Ht);let Xt=Ht.get(Ft);if(Xt!==void 0){if(Q.currentProgram===Xt&&Q.lightsStateVersion===Lt)return us(C,Ot),Xt}else Ot.uniforms=vt.getUniforms(C),C.onBeforeCompile(Ot,_),Xt=vt.acquireProgram(Ot,Ft),Ht.set(Ft,Xt),Q.uniforms=Ot.uniforms;const zt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=ct.uniform),us(C,Ot),Q.needsLights=$r(C),Q.lightsStateVersion=Lt,Q.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Xt,Q.uniformsList=null,Xt}function ls(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Rr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function us(C,V){const $=J.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Fs(C,V,$,Q,X){V.isScene!==!0&&(V=It),T.resetTextureUnits();const Mt=V.fog,Lt=Q.isMeshStandardMaterial?V.environment:null,Ot=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:$n,Ft=(Q.isMeshStandardMaterial?O:y).get(Q.envMap||Lt),Ht=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),zt=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,tt=!!$.morphAttributes.color;let kt=Kn;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(kt=_.toneMapping);const Vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ut=Vt!==void 0?Vt.length:0,Tt=J.get(Q),Qt=m.state.lights;if(Y===!0&&(st===!0||C!==B)){const De=C===B&&Q.id===b;ct.setState(Q,C,De)}let Gt=!1;Q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Qt.state.version||Tt.outputColorSpace!==Ot||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==Ft||Q.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ct.numPlanes||Tt.numIntersection!==ct.numIntersection)||Tt.vertexAlphas!==Ht||Tt.vertexTangents!==Xt||Tt.morphTargets!==zt||Tt.morphNormals!==ie||Tt.morphColors!==tt||Tt.toneMapping!==kt||Tt.morphTargetsCount!==Ut)&&(Gt=!0):(Gt=!0,Tt.__version=Q.version);let se=Tt.currentProgram;Gt===!0&&(se=ii(Q,V,X));let he=!1,fe=!1,Se=!1;const ne=se.getUniforms(),Fe=Tt.uniforms;if(et.useProgram(se.program)&&(he=!0,fe=!0,Se=!0),Q.id!==b&&(b=Q.id,fe=!0),he||B!==C){k.reverseDepthBuffer?(ft.copy(C.projectionMatrix),fd(ft),pd(ft),ne.setValue(A,"projectionMatrix",ft)):ne.setValue(A,"projectionMatrix",C.projectionMatrix),ne.setValue(A,"viewMatrix",C.matrixWorldInverse);const De=ne.map.cameraPosition;De!==void 0&&De.setValue(A,Pt.setFromMatrixPosition(C.matrixWorld)),k.logarithmicDepthBuffer&&ne.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ne.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,fe=!0,Se=!0)}if(X.isSkinnedMesh){ne.setOptional(A,X,"bindMatrix"),ne.setOptional(A,X,"bindMatrixInverse");const De=X.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ne.setValue(A,"boneTexture",De.boneTexture,T))}X.isBatchedMesh&&(ne.setOptional(A,X,"batchingTexture"),ne.setValue(A,"batchingTexture",X._matricesTexture,T),ne.setOptional(A,X,"batchingIdTexture"),ne.setValue(A,"batchingIdTexture",X._indirectTexture,T),ne.setOptional(A,X,"batchingColorTexture"),X._colorsTexture!==null&&ne.setValue(A,"batchingColorTexture",X._colorsTexture,T));const Pe=$.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0)&&_t.update(X,$,se),(fe||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,ne.setValue(A,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fe.envMap.value=Ft,Fe.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Fe.envMapIntensity.value=V.environmentIntensity),fe&&(ne.setValue(A,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&ks(Fe,Se),Mt&&Q.fog===!0&&pt.refreshFogUniforms(Fe,Mt),pt.refreshMaterialUniforms(Fe,Q,U,N,m.state.transmissionRenderTarget[C.id]),Rr.upload(A,ls(Tt),Fe,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Rr.upload(A,ls(Tt),Fe,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ne.setValue(A,"center",X.center),ne.setValue(A,"modelViewMatrix",X.modelViewMatrix),ne.setValue(A,"normalMatrix",X.normalMatrix),ne.setValue(A,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const De=Q.uniformsGroups;for(let Un=0,On=De.length;Un<On;Un++){const si=De[Un];F.update(si,se),F.bind(si,se)}}return se}function ks(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function $r(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,V,$){J.get(C.texture).__webglTexture=V,J.get(C.depthTexture).__webglTexture=$;const Q=J.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const $=J.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){S=C,D=V,R=$;let Q=!0,X=null,Mt=!1,Lt=!1;if(C){const Ft=J.get(C);if(Ft.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(A.FRAMEBUFFER,null),Q=!1;else if(Ft.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(Ft.__hasExternalTextures)T.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const zt=C.depthTexture;if(Ft.__boundDepthTexture!==zt){if(zt!==null&&J.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Lt=!0);const Xt=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?X=Xt[V][$]:X=Xt[V],Mt=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?X=J.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[$]:X=Xt,v.copy(C.viewport),M.copy(C.scissor),G=C.scissorTest}else v.copy(ot).multiplyScalar(U).floor(),M.copy(ht).multiplyScalar(U).floor(),G=Nt;if(et.bindFramebuffer(A.FRAMEBUFFER,X)&&Q&&et.drawBuffers(C,X),et.viewport(v),et.scissor(M),et.setScissorTest(G),Mt){const Ft=J.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ft.__webglTexture,$)}else if(Lt){const Ft=J.get(C.texture),Ht=V||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ft.__webglTexture,$||0,Ht)}b=-1},this.readRenderTargetPixels=function(C,V,$,Q,X,Mt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){et.bindFramebuffer(A.FRAMEBUFFER,Ot);try{const Ft=C.texture,Ht=Ft.format,Xt=Ft.type;if(!k.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Q&&$>=0&&$<=C.height-X&&A.readPixels(V,$,Q,X,Et.convert(Ht),Et.convert(Xt),Mt)}finally{const Ft=S!==null?J.get(S).__webglFramebuffer:null;et.bindFramebuffer(A.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,V,$,Q,X,Mt,Lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){const Ft=C.texture,Ht=Ft.format,Xt=Ft.type;if(!k.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-Q&&$>=0&&$<=C.height-X){et.bindFramebuffer(A.FRAMEBUFFER,Ot);const zt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,zt),A.bufferData(A.PIXEL_PACK_BUFFER,Mt.byteLength,A.STREAM_READ),A.readPixels(V,$,Q,X,Et.convert(Ht),Et.convert(Xt),0);const ie=S!==null?J.get(S).__webglFramebuffer:null;et.bindFramebuffer(A.FRAMEBUFFER,ie);const tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await dd(A,tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,zt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Mt),A.deleteBuffer(zt),A.deleteSync(tt),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,$=0){C.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-$),X=Math.floor(C.image.width*Q),Mt=Math.floor(C.image.height*Q),Lt=V!==null?V.x:0,Ot=V!==null?V.y:0;T.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,Lt,Ot,X,Mt),et.unbindTexture()},this.copyTextureToTexture=function(C,V,$=null,Q=null,X=0){C.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],V=arguments[2],X=arguments[3]||0,$=null);let Mt,Lt,Ot,Ft,Ht,Xt;$!==null?(Mt=$.max.x-$.min.x,Lt=$.max.y-$.min.y,Ot=$.min.x,Ft=$.min.y):(Mt=C.image.width,Lt=C.image.height,Ot=0,Ft=0),Q!==null?(Ht=Q.x,Xt=Q.y):(Ht=0,Xt=0);const zt=Et.convert(V.format),ie=Et.convert(V.type);T.setTexture2D(V,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const tt=A.getParameter(A.UNPACK_ROW_LENGTH),kt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Vt=A.getParameter(A.UNPACK_SKIP_PIXELS),Ut=A.getParameter(A.UNPACK_SKIP_ROWS),Tt=A.getParameter(A.UNPACK_SKIP_IMAGES),Qt=C.isCompressedTexture?C.mipmaps[X]:C.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Qt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ot),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,X,Ht,Xt,Mt,Lt,zt,ie,Qt.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,X,Ht,Xt,Qt.width,Qt.height,zt,Qt.data):A.texSubImage2D(A.TEXTURE_2D,X,Ht,Xt,Mt,Lt,zt,ie,Qt),A.pixelStorei(A.UNPACK_ROW_LENGTH,tt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,kt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Vt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Tt),X===0&&V.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$=null,Q=null,X=0){C.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],V=arguments[3],X=arguments[4]||0);let Mt,Lt,Ot,Ft,Ht,Xt,zt,ie,tt;const kt=C.isCompressedTexture?C.mipmaps[X]:C.image;$!==null?(Mt=$.max.x-$.min.x,Lt=$.max.y-$.min.y,Ot=$.max.z-$.min.z,Ft=$.min.x,Ht=$.min.y,Xt=$.min.z):(Mt=kt.width,Lt=kt.height,Ot=kt.depth,Ft=0,Ht=0,Xt=0),Q!==null?(zt=Q.x,ie=Q.y,tt=Q.z):(zt=0,ie=0,tt=0);const Vt=Et.convert(V.format),Ut=Et.convert(V.type);let Tt;if(V.isData3DTexture)T.setTexture3D(V,0),Tt=A.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Tt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const Qt=A.getParameter(A.UNPACK_ROW_LENGTH),Gt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),se=A.getParameter(A.UNPACK_SKIP_PIXELS),he=A.getParameter(A.UNPACK_SKIP_ROWS),fe=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,kt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,kt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ft),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ht),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xt),C.isDataTexture||C.isData3DTexture?A.texSubImage3D(Tt,X,zt,ie,tt,Mt,Lt,Ot,Vt,Ut,kt.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Tt,X,zt,ie,tt,Mt,Lt,Ot,Vt,kt.data):A.texSubImage3D(Tt,X,zt,ie,tt,Mt,Lt,Ot,Vt,Ut,kt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Qt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Gt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,se),A.pixelStorei(A.UNPACK_SKIP_ROWS,he),A.pixelStorei(A.UNPACK_SKIP_IMAGES,fe),X===0&&V.generateMipmaps&&A.generateMipmap(Tt),et.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){D=0,R=0,S=null,et.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qa?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Xr?"display-p3":"srgb"}}class rc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oc extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Du extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new P,Fr=new P,ul=new le,gs=new Us,lr=new Ai,Ro=new P,hl=new P;class w_ extends we{constructor(t=new Me,e=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Fr);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;ul.copy(s).invert(),gs.copy(t.ray).applyMatrix4(ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let E=d,m=g-1;E<m;E+=l){const f=u.getX(E),w=u.getX(E+1),_=ur(this,t,gs,c,f,w);_&&e.push(_)}if(this.isLineLoop){const E=u.getX(g-1),m=u.getX(d),f=ur(this,t,gs,c,E,m);f&&e.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let E=d,m=g-1;E<m;E+=l){const f=ur(this,t,gs,c,E,E+1);f&&e.push(f)}if(this.isLineLoop){const E=ur(this,t,gs,c,g-1,d);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ur(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Or.fromBufferAttribute(o,s),Fr.fromBufferAttribute(o,r),e.distanceSqToSegment(Or,Fr,Ro,hl)>n)return;Ro.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ro);if(!(c<t.near||c>t.far))return{distance:c,point:hl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const dl=new P,fl=new P;class T_ extends w_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)dl.fromBufferAttribute(e,s),fl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dl.distanceTo(fl);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cs extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pl=new le,Ua=new Us,hr=new Ai,dr=new P;class kr extends we{constructor(t=new Me,e=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;pl.copy(s).invert(),Ua.copy(t.ray).applyMatrix4(pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,p=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,E=d;g<E;g++){const m=l.getX(g);dr.fromBufferAttribute(p,m),ml(dr,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(p.count,o.start+o.count);for(let g=h,E=d;g<E;g++)dr.fromBufferAttribute(p,g),ml(dr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ml(i,t,e,n,s,r,o){const a=Ua.distanceSqToPoint(i);if(a<e){const c=new P;Ua.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ac extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*p+this.aX,l=h*p+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class A_ extends ac{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,p){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+p)+(c-a)/p;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const fr=new P,Co=new cc,Po=new cc,Do=new cc;class R_ extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),l=fr);const p=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(p),d),E=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Co.initNonuniformCatmullRom(l.x,p.x,h.x,u.x,g,E,m),Po.initNonuniformCatmullRom(l.y,p.y,h.y,u.y,g,E,m),Do.initNonuniformCatmullRom(l.z,p.z,h.z,u.z,g,E,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(l.x,p.x,h.x,u.x,this.tension),Po.initCatmullRom(l.y,p.y,h.y,u.y,this.tension),Do.initCatmullRom(l.z,p.z,h.z,u.z,this.tension));return n.set(Co.calc(c),Po.calc(c),Do.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function C_(i,t){const e=1-i;return e*e*t}function P_(i,t){return 2*(1-i)*i*t}function D_(i,t){return i*i*t}function Es(i,t,e,n){return C_(i,t)+P_(i,e)+D_(i,n)}function L_(i,t){const e=1-i;return e*e*e*t}function I_(i,t){const e=1-i;return 3*e*e*i*t}function N_(i,t){return 3*(1-i)*i*i*t}function U_(i,t){return i*i*i*t}function bs(i,t,e,n,s){return L_(i,t)+I_(i,e)+N_(i,n)+U_(i,s)}class Lu extends Mn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O_ extends Mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y),bs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends Mn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F_ extends Mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Mn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Es(t,s.x,r.x,o.x),Es(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k_ extends Mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Es(t,s.x,r.x,o.x),Es(t,s.y,r.y,o.y),Es(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(gl(a,c.x,l.x,u.x,p.x),gl(a,c.y,l.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var Oa=Object.freeze({__proto__:null,ArcCurve:A_,CatmullRomCurve3:R_,CubicBezierCurve:Lu,CubicBezierCurve3:O_,EllipseCurve:ac,LineCurve:Iu,LineCurve3:F_,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:k_,SplineCurve:Uu});class B_ extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Oa[s.type]().fromJSON(s))}return this}}class Fa extends B_{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Iu(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nu(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Lu(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ac(t,e,n,s,r,o,a,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lc extends Me{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,p=new P,h=new xt,d=new P,g=new P,E=new P;let m=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,E.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(E.x,E.y,E.z);break;default:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=E.x,d.y+=E.y,d.z+=E.z,d.normalize(),c.push(d.x,d.y,d.z),E.copy(g)}for(let w=0;w<=e;w++){const _=n+w*u*s,x=Math.sin(_),D=Math.cos(_);for(let R=0;R<=t.length-1;R++){p.x=t[R].x*x,p.y=t[R].y,p.z=t[R].x*D,o.push(p.x,p.y,p.z),h.x=w/e,h.y=R/(t.length-1),a.push(h.x,h.y);const S=c[3*R+0]*x,b=c[3*R+1],B=c[3*R+0]*D;l.push(S,b,B)}}for(let w=0;w<e;w++)for(let _=0;_<t.length-1;_++){const x=_+w*t.length,D=x,R=x+t.length,S=x+t.length+1,b=x+1;r.push(D,R,b),r.push(S,b,R)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.points,t.segments,t.phiStart,t.phiLength)}}class uc extends lc{constructor(t=1,e=1,n=4,s=8){const r=new Fa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new uc(t.radius,t.length,t.capSegments,t.radialSegments)}}class me extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],d=[];let g=0;const E=[],m=n/2;let f=0;w(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function w(){const x=new P,D=new P;let R=0;const S=(e-t)/n;for(let b=0;b<=r;b++){const B=[],v=b/r,M=v*(e-t)+t;for(let G=0;G<=s;G++){const H=G/s,L=H*c+a,z=Math.sin(L),N=Math.cos(L);D.x=M*z,D.y=-v*n+m,D.z=M*N,p.push(D.x,D.y,D.z),x.set(z,S,N).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-v),B.push(g++)}E.push(B)}for(let b=0;b<s;b++)for(let B=0;B<r;B++){const v=E[B][b],M=E[B+1][b],G=E[B+1][b+1],H=E[B][b+1];t>0&&(u.push(v,M,H),R+=3),e>0&&(u.push(M,G,H),R+=3)}l.addGroup(f,R,0),f+=R}function _(x){const D=g,R=new xt,S=new P;let b=0;const B=x===!0?t:e,v=x===!0?1:-1;for(let G=1;G<=s;G++)p.push(0,m*v,0),h.push(0,v,0),d.push(.5,.5),g++;const M=g;for(let G=0;G<=s;G++){const L=G/s*c+a,z=Math.cos(L),N=Math.sin(L);S.x=B*N,S.y=m*v,S.z=B*z,p.push(S.x,S.y,S.z),h.push(0,v,0),R.x=z*.5+.5,R.y=N*.5*v+.5,d.push(R.x,R.y),g++}for(let G=0;G<s;G++){const H=D+G,L=M+G;x===!0?u.push(L,L+1,H):u.push(L+1,L,H),b+=3}l.addGroup(f,b,x===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xn extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new xn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hc extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new P,x=new P,D=new P;for(let R=0;R<e.length;R+=3)d(e[R+0],_),d(e[R+1],x),d(e[R+2],D),c(_,x,D,w)}function c(w,_,x,D){const R=D+1,S=[];for(let b=0;b<=R;b++){S[b]=[];const B=w.clone().lerp(x,b/R),v=_.clone().lerp(x,b/R),M=R-b;for(let G=0;G<=M;G++)G===0&&b===R?S[b][G]=B:S[b][G]=B.clone().lerp(v,G/M)}for(let b=0;b<R;b++)for(let B=0;B<2*(R-b)-1;B++){const v=Math.floor(B/2);B%2===0?(h(S[b][v+1]),h(S[b+1][v]),h(S[b][v])):(h(S[b][v+1]),h(S[b+1][v+1]),h(S[b+1][v]))}}function l(w){const _=new P;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(w),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function u(){const w=new P;for(let _=0;_<r.length;_+=3){w.x=r[_+0],w.y=r[_+1],w.z=r[_+2];const x=m(w)/2/Math.PI+.5,D=f(w)/Math.PI+.5;o.push(x,1-D)}g(),p()}function p(){for(let w=0;w<o.length;w+=6){const _=o[w+0],x=o[w+2],D=o[w+4],R=Math.max(_,x,D),S=Math.min(_,x,D);R>.9&&S<.1&&(_<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),D<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function d(w,_){const x=w*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const w=new P,_=new P,x=new P,D=new P,R=new xt,S=new xt,b=new xt;for(let B=0,v=0;B<r.length;B+=9,v+=6){w.set(r[B+0],r[B+1],r[B+2]),_.set(r[B+3],r[B+4],r[B+5]),x.set(r[B+6],r[B+7],r[B+8]),R.set(o[v+0],o[v+1]),S.set(o[v+2],o[v+3]),b.set(o[v+4],o[v+5]),D.copy(w).add(_).add(x).divideScalar(3);const M=m(D);E(R,v+0,w,M),E(S,v+2,_,M),E(b,v+4,x,M)}}function E(w,_,x,D){D<0&&w.x===1&&(o[_]=w.x-1),x.x===0&&x.z===0&&(o[_]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.vertices,t.indices,t.radius,t.details)}}class Ou extends Fa{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fa().fromJSON(s))}return this}}const z_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Fu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,p,h,d;if(n&&(r=X_(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)p=i[g],h=i[g+1],p<a&&(a=p),h<c&&(c=h),p>l&&(l=p),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Ps(r,o,e,a,c,d,0),o}};function Fu(i,t,e,n,s){let r,o;if(s===n0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_l(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_l(r,i[r],i[r+1],o);return o&&Kr(o,o.next)&&(Ls(o),o=o.next),o}function Si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Z_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?G_(i,n,s,r):H_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=V_(Si(i),t,e),Ps(i,t,e,n,s,r,2)):o===2&&W_(i,t,e,n,s,r):Ps(Si(i),t,e,n,s,r,1);break}}}function H_(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,p=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=p&&g.y<=d&&Ki(s,a,r,c,o,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,p=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<p?u<h?u:h:p<h?p:h,E=a>c?a>l?a:l:c>l?c:l,m=u>p?u>h?u:h:p>h?p:h,f=ka(d,g,t,e,n),w=ka(E,m,t,e,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=f&&x&&x.z<=w;){if(_.x>=d&&_.x<=E&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ki(a,u,c,p,l,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=E&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,u,c,p,l,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=d&&_.x<=E&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ki(a,u,c,p,l,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=E&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,u,c,p,l,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function V_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Kr(s,r)&&ku(s,n,n.next,r)&&Ds(s,r)&&Ds(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ls(n),Ls(n.next),n=i=r),n=n.next}while(n!==i);return Si(n)}function W_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q_(o,a)){let c=Bu(o,a);o=Si(o,o.next),c=Si(c,c.next),Ps(o,t,e,n,s,r,0),Ps(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function X_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Fu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(J_(l));for(s.sort(q_),r=0;r<s.length;r++)e=Y_(s[r],e);return e}function q_(i,t){return i.x-t.x}function Y_(i,t){const e=K_(i,t);if(!e)return t;const n=Bu(e,i);return Si(n,n.next),Si(e,e.next)}function K_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,p;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ki(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),Ds(e,i)&&(p<u||p===u&&(e.x>s.x||e.x===s.x&&j_(s,e)))&&(s=e,u=p)),e=e.next;while(e!==a);return s}function j_(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Z_(i,t,e,n){let s=i;do s.z===0&&(s.z=ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$_(s)}function $_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Q_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t0(i,t)&&(Ds(i,t)&&Ds(t,i)&&e0(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Kr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function ku(i,t,e,n){const s=mr(ge(i,t,e)),r=mr(ge(i,t,n)),o=mr(ge(e,n,i)),a=mr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&pr(i,e,t)||r===0&&pr(i,n,t)||o===0&&pr(e,i,n)||a===0&&pr(e,t,n))}function pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mr(i){return i>0?1:i<0?-1:0}function t0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ds(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function e0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bu(i,t){const e=new Ba(i.i,i.x,i.y),n=new Ba(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _l(i,t,e,n){const s=new Ba(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ba(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ws{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ws.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];vl(t),xl(n,t);let o=t.length;e.forEach(vl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xl(n,e[c]);const a=z_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function vl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class dc extends Me{constructor(t=new Ou([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:i0;let _,x=!1,D,R,S,b;f&&(_=f.getSpacedPoints(u),x=!0,h=!1,D=f.computeFrenetFrames(u,!1),R=new P,S=new P,b=new P),h||(m=0,d=0,g=0,E=0);const B=a.extractPoints(l);let v=B.shape;const M=B.holes;if(!ws.isClockWise(v)){v=v.reverse();for(let W=0,A=M.length;W<A;W++){const rt=M[W];ws.isClockWise(rt)&&(M[W]=rt.reverse())}}const H=ws.triangulateShape(v,M),L=v;for(let W=0,A=M.length;W<A;W++){const rt=M[W];v=v.concat(rt)}function z(W,A,rt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(A,rt)}const N=v.length,U=H.length;function I(W,A,rt){let it,k,et;const ut=W.x-A.x,J=W.y-A.y,T=rt.x-W.x,y=rt.y-W.y,O=ut*ut+J*J,K=ut*y-J*T;if(Math.abs(K)>Number.EPSILON){const nt=Math.sqrt(O),Z=Math.sqrt(T*T+y*y),vt=A.x-J/nt,pt=A.y+ut/nt,mt=rt.x-y/Z,bt=rt.y+T/Z,ct=((mt-vt)*y-(bt-pt)*T)/(ut*y-J*T);it=vt+ut*ct-W.x,k=pt+J*ct-W.y;const gt=it*it+k*k;if(gt<=2)return new xt(it,k);et=Math.sqrt(gt/2)}else{let nt=!1;ut>Number.EPSILON?T>Number.EPSILON&&(nt=!0):ut<-Number.EPSILON?T<-Number.EPSILON&&(nt=!0):Math.sign(J)===Math.sign(y)&&(nt=!0),nt?(it=-J,k=ut,et=Math.sqrt(O)):(it=ut,k=J,et=Math.sqrt(O/2))}return new xt(it/et,k/et)}const q=[];for(let W=0,A=L.length,rt=A-1,it=W+1;W<A;W++,rt++,it++)rt===A&&(rt=0),it===A&&(it=0),q[W]=I(L[W],L[rt],L[it]);const ot=[];let ht,Nt=q.concat();for(let W=0,A=M.length;W<A;W++){const rt=M[W];ht=[];for(let it=0,k=rt.length,et=k-1,ut=it+1;it<k;it++,et++,ut++)et===k&&(et=0),ut===k&&(ut=0),ht[it]=I(rt[it],rt[et],rt[ut]);ot.push(ht),Nt=Nt.concat(ht)}for(let W=0;W<m;W++){const A=W/m,rt=d*Math.cos(A*Math.PI/2),it=g*Math.sin(A*Math.PI/2)+E;for(let k=0,et=L.length;k<et;k++){const ut=z(L[k],q[k],it);at(ut.x,ut.y,-rt)}for(let k=0,et=M.length;k<et;k++){const ut=M[k];ht=ot[k];for(let J=0,T=ut.length;J<T;J++){const y=z(ut[J],ht[J],it);at(y.x,y.y,-rt)}}}const qt=g+E;for(let W=0;W<N;W++){const A=h?z(v[W],Nt[W],qt):v[W];x?(S.copy(D.normals[0]).multiplyScalar(A.x),R.copy(D.binormals[0]).multiplyScalar(A.y),b.copy(_[0]).add(S).add(R),at(b.x,b.y,b.z)):at(A.x,A.y,0)}for(let W=1;W<=u;W++)for(let A=0;A<N;A++){const rt=h?z(v[A],Nt[A],qt):v[A];x?(S.copy(D.normals[W]).multiplyScalar(rt.x),R.copy(D.binormals[W]).multiplyScalar(rt.y),b.copy(_[W]).add(S).add(R),at(b.x,b.y,b.z)):at(rt.x,rt.y,p/u*W)}for(let W=m-1;W>=0;W--){const A=W/m,rt=d*Math.cos(A*Math.PI/2),it=g*Math.sin(A*Math.PI/2)+E;for(let k=0,et=L.length;k<et;k++){const ut=z(L[k],q[k],it);at(ut.x,ut.y,p+rt)}for(let k=0,et=M.length;k<et;k++){const ut=M[k];ht=ot[k];for(let J=0,T=ut.length;J<T;J++){const y=z(ut[J],ht[J],it);x?at(y.x,y.y+_[u-1].y,_[u-1].x+rt):at(y.x,y.y,p+rt)}}}Y(),st();function Y(){const W=s.length/3;if(h){let A=0,rt=N*A;for(let it=0;it<U;it++){const k=H[it];Pt(k[2]+rt,k[1]+rt,k[0]+rt)}A=u+m*2,rt=N*A;for(let it=0;it<U;it++){const k=H[it];Pt(k[0]+rt,k[1]+rt,k[2]+rt)}}else{for(let A=0;A<U;A++){const rt=H[A];Pt(rt[2],rt[1],rt[0])}for(let A=0;A<U;A++){const rt=H[A];Pt(rt[0]+N*u,rt[1]+N*u,rt[2]+N*u)}}n.addGroup(W,s.length/3-W,0)}function st(){const W=s.length/3;let A=0;ft(L,A),A+=L.length;for(let rt=0,it=M.length;rt<it;rt++){const k=M[rt];ft(k,A),A+=k.length}n.addGroup(W,s.length/3-W,1)}function ft(W,A){let rt=W.length;for(;--rt>=0;){const it=rt;let k=rt-1;k<0&&(k=W.length-1);for(let et=0,ut=u+m*2;et<ut;et++){const J=N*et,T=N*(et+1),y=A+it+J,O=A+k+J,K=A+k+T,nt=A+it+T;Dt(y,O,K,nt)}}}function at(W,A,rt){c.push(W),c.push(A),c.push(rt)}function Pt(W,A,rt){It(W),It(A),It(rt);const it=s.length/3,k=w.generateTopUV(n,s,it-3,it-2,it-1);Rt(k[0]),Rt(k[1]),Rt(k[2])}function Dt(W,A,rt,it){It(W),It(A),It(it),It(A),It(rt),It(it);const k=s.length/3,et=w.generateSideWallUV(n,s,k-6,k-3,k-2,k-1);Rt(et[0]),Rt(et[1]),Rt(et[3]),Rt(et[1]),Rt(et[2]),Rt(et[3])}function It(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function Rt(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return s0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oa[s.type]().fromJSON(s)),new dc(n,t.options)}}const i0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new xt(r,o),new xt(a,c),new xt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],p=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],E=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-p),new xt(h,1-g),new xt(E,1-f)]:[new xt(a,1-c),new xt(u,1-p),new xt(d,1-g),new xt(m,1-f)]}};function s0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jr extends hc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jr(t.radius,t.detail)}}class Je extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],p=new P,h=new P,d=[],g=[],E=[],m=[];for(let f=0;f<=n;f++){const w=[],_=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const R=D/e;p.x=-t*Math.cos(s+R*r)*Math.sin(o+_*a),p.y=t*Math.cos(o+_*a),p.z=t*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(p.x,p.y,p.z),h.copy(p).normalize(),E.push(h.x,h.y,h.z),m.push(R+x,1-_),w.push(l++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const _=u[f][w+1],x=u[f][w],D=u[f+1][w],R=u[f+1][w+1];(f!==0||o>0)&&d.push(_,x,R),(f!==n-1||c<Math.PI)&&d.push(x,D,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pn extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,p=new P,h=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const E=g/s*r,m=d/n*Math.PI*2;p.x=(t+e*Math.cos(m))*Math.cos(E),p.y=(t+e*Math.cos(m))*Math.sin(E),p.z=e*Math.sin(m),a.push(p.x,p.y,p.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),h.subVectors(p,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const E=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(E,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nn extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zr extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zu extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lo=new le,yl=new P,Ml=new P;class Hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sl=new le,_s=new P,Io=new P;class r0 extends Hu{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),Io.copy(n.position),Io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Io),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class o0 extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class a0 extends Hu{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Br extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new a0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gu extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class c0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function El(){return performance.now()}const bl=new le;class Vu{constructor(t,e,n=0,s=1/0){this.ray=new Us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(wl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,n,e);return n.sort(wl),n}}function wl(i,t){return i.distance-t.distance}function za(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)za(r[o],t,e,!0)}}class Tl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l0 extends T_{constructor(t=10,e=10,n=4473924,s=8947848){n=new Yt(n),s=new Yt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const E=h===r?n:s;E.toArray(l,d),d+=3,E.toArray(l,d),d+=3,E.toArray(l,d),d+=3,E.toArray(l,d),d+=3}const u=new Me;u.setAttribute("position",new ue(c,3)),u.setAttribute("color",new ue(l,3));const p=new Du({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class u0 extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function Wu(i,t={}){const e=t.charset??" .:-=+*#%@",n=t.fontSize??12,s=t.color??"#7cfc9a",r=t.colorize??!0,o=t.shadowNear??48,a=t.shadowFar??14,c=t.shadowMin??2,l=t.shadowOpacity??.55,u=t.shadowChar??"#",p=t.shadowNearR??1.6,h=t.shadowFarR??3.2,d=Math.max(1,Math.round(n*.6)),g=n,E=e.length,m=document.createElement("canvas"),f=m.getContext("2d"),w=document.createElement("canvas"),_=w.getContext("2d",{willReadFrequently:!0});let x=0,D=0,R=0,S=0,b=new Float32Array(0);function B(J,T){x=J,D=T,i.setPixelRatio(1),i.setSize(J,T,!1),R=Math.max(1,Math.floor(J/d)),S=Math.max(1,Math.floor(T/g)),w.width=R,w.height=S,b=new Float32Array(R*S);const y=Math.min(window.devicePixelRatio||1,2);m.width=Math.floor(J*y),m.height=Math.floor(T*y),m.style.width=J+"px",m.style.height=T+"px",f.setTransform(y,0,0,y,0,0),f.font=`${n}px "Courier New", monospace`,f.textBaseline="top"}function v(J,T){i.render(J,T),_.clearRect(0,0,R,S),_.drawImage(i.domElement,0,0,R,S);const y=_.getImageData(0,0,R,S).data;f.fillStyle="#000",f.fillRect(0,0,x,D),f.fillStyle=s;for(let O=0;O<S;O++)for(let K=0;K<R;K++){const nt=O*R+K,Z=nt*4,vt=y[Z],pt=y[Z+1],mt=y[Z+2],bt=(.3*vt+.59*pt+.11*mt)/255;if(b[nt]=bt,bt<.035)continue;let ct=Math.floor(bt*E);ct>=E&&(ct=E-1);const gt=e[ct];if(gt!==" "){if(r){const _t=255/(Math.max(vt,pt,mt)||1);f.fillStyle=`rgb(${Math.round(vt*_t)},${Math.round(pt*_t)},${Math.round(mt*_t)})`}f.fillText(gt,K*d,O*g)}}}const M=new P,G=new Xe,H=12,L=g*4,z=.5,N=260;let U=0;function I(J,T){const y=Math.abs(J),O=Math.abs(T);return y>O*2?"-":O>y*2?"|":J*T<0?"/":"\\"}function q(J,T){const y=Math.floor(J/d),O=Math.floor(T/g);return y<0||y>=R||O<0||O>=S?!0:b[O*R+y]>.06}function ot(J,T,y=0,O=0){T.getWorldQuaternion(G).invert();const K=x*.5,nt=D*.5,Z=Math.hypot(K,nt)||1,vt=-d*.5,pt=-g*.5,mt=H*g;U=(U+y*N*O)%L;const bt=L*z;for(let ct=0;ct<J.length;ct++){const gt=J[ct];if(M.copy(gt.dir).applyQuaternion(G),M.z>=0||(M.applyMatrix4(T.projectionMatrix),M.x<-1||M.x>1||M.y<-1||M.y>1))continue;const At=(M.x*.5+.5)*x,_t=(1-(M.y*.5+.5))*D;if(!q(At,_t)){if(f.fillStyle=r?gt.color??s:s,y>.01){const dt=At-K,Wt=_t-nt,Et=Math.hypot(dt,Wt)||1,Kt=dt/Et,F=Wt/Et,St=Math.min(1,Et/Z),j=y*mt*(.25+.75*St),lt=I(Kt,F);for(let yt=g;yt<=j;yt+=g){const wt=Et-yt;if(wt<=0)break;let jt=(wt-U)%L;if(jt<0&&(jt+=L),jt>bt)continue;const oe=At-Kt*yt,Zt=_t-F*yt;if(q(oe,Zt))break;f.globalAlpha=1-.75*(yt/j),f.fillText(lt,oe+vt,Zt+pt)}f.globalAlpha=1}f.fillText(gt.char,At+vt,_t+pt)}}}const ht="#ff6a2a",Nt="#ffd24a",qt="#7ce5ff",Y="#a8efff",st="#3b82ff",ft=["*","+","x",".",":"],at=new P;let Pt=0;function Dt(J,T){const y=Math.abs(J),O=Math.abs(T);return y>O*2?"=":O>y*2?"|":J*T<0?"/":"\\"}function It(J,T,y){if(!J||!J.object)return;const O=J.phase==="salvage",K=O?qt:ht,nt=O?Y:"#ffd24a",vt=!!(J.object.userData&&J.object.userData.parentAsteroid)?st:Nt;if(at.copy(J.object.position).project(T),at.z>1)return;const pt=(at.x*.5+.5)*x,mt=(1-(at.y*.5+.5))*D,bt=D*.5/Math.tan(ee.degToRad(T.fov*.5));let gt=(J.object.userData.viewRadius??4)*(J.object.scale.x||1)*bt/Math.max(1,J.distance);gt=ee.clamp(gt,d*2.5,Math.min(x,D)*.42),f.fillStyle=J.firing?K:vt;const At=pt-gt,_t=pt+gt,dt=mt-gt,Wt=mt+gt,Et=d,Kt=g;if(f.fillText("+",At,dt),f.fillText("-",At+Et,dt),f.fillText("|",At,dt+Kt),f.fillText("+",_t,dt),f.fillText("-",_t-Et,dt),f.fillText("|",_t,dt+Kt),f.fillText("+",At,Wt),f.fillText("-",At+Et,Wt),f.fillText("|",At,Wt-Kt),f.fillText("+",_t,Wt),f.fillText("-",_t-Et,Wt),f.fillText("|",_t,Wt-Kt),!J.firing)return;Pt+=y*22,f.fillStyle=K;const F=[x*.14,x*.86],St=D*.97;for(let j=0;j<F.length;j++){const lt=F[j],yt=pt-lt,wt=mt-St,jt=Math.hypot(yt,wt)||1,oe=yt/jt,Zt=wt/jt,Bt=Dt(oe,Zt),de=Math.max(1,Math.floor(jt/(g*.7)));for(let _e=0;_e<=de;_e++){const Qn=_e/de,ti=lt+yt*Qn,Ve=St+wt*Qn;f.globalAlpha=.45+.55*Math.abs(Math.sin(_e*.7-Pt)),f.fillText(Bt,ti-d*.5,Ve-g*.5)}}f.fillStyle=nt;for(let j=0;j<7;j++){const lt=Math.random()*Math.PI*2,yt=Math.random()*g*1.8;f.globalAlpha=.4+Math.random()*.6,f.fillText(ft[j%ft.length],pt+Math.cos(lt)*yt-d*.5,mt+Math.sin(lt)*yt-g*.5)}f.globalAlpha=1}const Rt=new P,W=["*","x","#","X","o","@"];function A(J,T){if(!(!J||!J.length)){for(const y of J){if(Rt.copy(y.position).project(T),Rt.z>1||Rt.z<-1)continue;const O=(Rt.x*.5+.5)*x,K=(1-(Rt.y*.5+.5))*D,nt=Math.floor(O/d),Z=Math.floor(K/g);if(nt<0||nt>=R||Z<0||Z>=S||b[Z*R+nt]>.06)continue;const vt=y.age/y.duration,pt=1-vt,mt=y.kind==="boom",bt=mt?22:9,ct=(mt?4:2.5)+vt*(mt?7:4),gt=mt?W:ft,At=mt?"#ff8a3c":"#7ce5ff";f.fillStyle=At;for(let _t=0;_t<bt;_t++){const dt=_t/bt*Math.PI*2+Math.random()*.6,Wt=ct*(.4+Math.random()*.6),Et=O+Math.cos(dt)*Wt,Kt=K+Math.sin(dt)*Wt;f.globalAlpha=pt*(.4+Math.random()*.6),f.fillText(gt[Math.floor(Math.random()*gt.length)],Et-d*.5,Kt-g*.5)}if(mt&&vt<.45){const _t=(1-vt/.45)*.9;f.globalAlpha=_t,f.fillStyle="#ff5050",f.font=`bold ${n*2}px "Courier New", monospace`,f.fillText("BOOM",O-d*2,K-g*1.2),f.font=`${n}px "Courier New", monospace`}}f.globalAlpha=1}}const rt=new P,it=new P;function k(J,T,y,O,K){f.fillStyle=K,f.globalAlpha=O;const nt=y*y,Z=Math.max(0,Math.floor((J-y)/d)),vt=Math.min(R-1,Math.floor((J+y)/d)),pt=Math.max(0,Math.floor((T-y)/g)),mt=Math.min(S-1,Math.floor((T+y)/g));for(let bt=pt;bt<=mt;bt++){const gt=bt*g+g*.5-T;for(let At=Z;At<=vt;At++){const dt=At*d+d*.5-J;dt*dt+gt*gt>nt||b[bt*R+At]>.06||f.fillText(u,At*d,bt*g)}}}function et(J,T,y,O,K,nt){if(rt.copy(J).project(O),rt.z>1)return;const Z=J.distanceTo(it);if(Z<.001)return;const vt=T*K/Z;if(vt<c||vt>=o)return;let pt=l*nt;if(vt>a&&(pt*=(o-vt)/(o-a)),pt<=.01)return;const mt=(rt.x*.5+.5)*x,bt=(1-(rt.y*.5+.5))*D,gt=255/(Math.max(y.r,y.g,y.b)||1),At=r?`rgb(${Math.round(y.r*gt)},${Math.round(y.g*gt)},${Math.round(y.b*gt)})`:y;k(mt,bt,vt,pt,At)}function ut(J,T){const y=D*.5/Math.tan(ee.degToRad(T.fov*.5));T.getWorldPosition(it);const O=h-p||1e-6,K=(nt,Z,vt,pt)=>{const mt=nt.distanceTo(it);if(mt<.001)return;let bt=(mt/Z-p)/O;if(bt=bt<=0?0:bt>=1?1:bt,!(bt<=.01))if(pt)for(const ct of pt)et(ct.center,ct.radius,ct.color??vt,T,y,bt);else et(nt,Z,vt,T,y,bt)};for(const nt of J)nt&&nt.castShadows&&nt.castShadows(K);f.globalAlpha=1}return{domElement:m,setSize:B,render:v,drawShadows:ut,drawStars:ot,drawMining:It,drawExplosions:A}}const vs=4,Al=60;function h0(i,t,e){const n=new P,s=new P,r=new Vu,o=new P;let a=!1;const c=new P,l=new P,u=new $t,p=[];t&&t.group&&p.push({root:t.group,center:t.center,radius:t.radius});function h(_,x,D){p.push({root:_,center:x,radius:D})}function d(_,x,D,R){const S=R+vs;s.subVectors(_.position,D);const b=s.lengthSq();if(b>=S*S)return 0;const B=Math.sqrt(b)||1e-4;n.copy(s).multiplyScalar(1/B),_.position.addScaledVector(n,S-B);const v=x.dot(n);return v<0?(x.addScaledVector(n,-1.72*v),-v):0}function g(_,x,D,R,S){if(!a)return 0;c.subVectors(_.position,o);const b=c.length();if(b<1e-6||b>Al||R&&R.distanceTo(_.position)>S+Al)return 0;c.multiplyScalar(1/b),r.set(o,c),r.far=b+vs;const B=r.intersectObject(D,!0);if(!B.length||!B[0].face)return 0;const v=B[0];u.getNormalMatrix(v.object.matrixWorld),l.copy(v.face.normal).applyMatrix3(u).normalize(),l.dot(c)>0&&l.negate(),_.position.copy(v.point).addScaledVector(l,vs);const M=x.dot(l);return M<0?(x.addScaledVector(l,-1.72*M),-M):0}function E(_,x){let D=0;for(const R of i.asteroids){const S=d(_,x,R.position,R.userData.viewRadius*R.scale.x);S>D&&(D=S)}for(const R of p){const S=g(_,x,R.root,R.center,R.radius);S>D&&(D=S)}if(e&&e.ships)for(const R of e.ships){if(!R.active)continue;const S=d(_,x,R.group.position,R.radius);S>D&&(D=S)}return o.copy(_.position),a=!0,{speedIn:D}}function m(_){for(const x of i.asteroids)_(x.position,x.userData.viewRadius*x.scale.x);if(t&&t.colliders)for(const x of t.colliders)_(x.center,x.radius);if(e&&e.ships)for(const x of e.ships)x.active&&_(x.group.position,x.radius)}function f(_,x,D){let R=1/0;return m((S,b)=>{s.subVectors(S,_);const B=s.dot(x);if(B<=0)return;const v=b+vs,M=B-v;M>D||s.lengthSq()-B*B>v*v||M<R&&(R=M)}),R}function w(_,x,D,R=.6){let S=!1;return m((b,B)=>{if(S)return;s.subVectors(b,_);const v=s.dot(x);if(v<=0)return;const M=s.length();M-B-vs>D||v/(M||1e-4)<R||(S=!0)}),S}return{resolve:E,forwardGap:f,forwardNear:w,addMeshObstacle:h}}function d0(i,t,e,n,s,r,o={}){const a=n?h0(n,s,r):null,c=o.isUiOpen||(()=>!1),l=Object.create(null);let u=!1,p=!1,h=!1,d=window.innerWidth/2,g=window.innerHeight/2;const E=1.5,m=1.3,f=.05,w=1.7,_=80,x=800,D=20,R=.55,S=.3,b=1.6,B=3.5,v=.7,M=.28,G=.6,H=4,L=1,z=2200,N=350,U=((s==null?void 0:s.radius)??0)+50,I=18,q=30,ot=18,ht=18,Nt=14,qt=1.2,Y=.9,st=120,ft=240,at=14,Pt=4,Dt=new P(0,0,156),Rt=1+.35,W=-.1,A=1,rt=W-A,it=Rt+1;let k=0,et=!1,ut=!1,J=0,T=0,y=0,O=0;const K=new P,nt=new P;let Z=0,vt=!1,pt=!1,mt=!1,bt=!1,ct=!1,gt=0,At=!1,_t=null;const dt={speed:0,throttle:0,warp:0,reverse:0,lock:!1,headingDeg:0,pitchDeg:0,pos:{x:0,y:0,z:0},active:!1,mining:!1,thrustCmd:0,canDock:!1,tooFastToDock:!1,docking:!1,undocking:!1,docked:!1,turn:{yaw:0,pitch:0,roll:0},aimX:0,aimY:0};function Wt(){u||(u=!0,dt.active=!0,e&&(e.style.display="none"))}function Et(){p=!1,document.body.classList.remove("dragging")}function Kt(){u&&(u=!1,dt.active=!1,Et(),dt.canDock=!1,e&&(e.style.display=""))}const F=new P,St=new Xe,j=new P,lt=new le,yt=new Xe,wt=new Xe,jt=new P(0,0,0),oe=new P(0,1,0),Zt=new P(0,0,1),Bt=new P,de=new P,_e=new P,Qn=new P,ti=new P,Ve=new P,Nn=new P,xe=new P;let ei=!1;function ni(tt,kt){const Vt=Math.abs(tt.y)>.98?Zt:oe;return lt.lookAt(jt,tt,Vt),(kt||new Xe).setFromRotationMatrix(lt)}function cs(){ei||!s||!s.group||(s.group.updateMatrixWorld(),F.copy(Dt).applyMatrix4(s.group.matrixWorld),s.group.getWorldQuaternion(yt),j.set(0,0,1).applyQuaternion(yt).normalize(),ni(j,St),ei=!0)}function ii(){return!s||!s.center?!1:i.position.distanceTo(s.center)<=U}function ls(){const tt=[],kt=at+Pt;if(s&&s.center&&tt.push({c:s.center,r:(s.radius??0)+kt}),n&&n.asteroids)for(const Vt of n.asteroids)tt.push({c:Vt.position,r:(Vt.userData.viewRadius??4)*Vt.scale.x+kt});return tt}function us(tt,kt,Vt,Ut){ti.subVectors(tt,kt),Ve.subVectors(Vt,kt);const Tt=ee.clamp(ti.dot(Ve)/(Ve.lengthSq()||1),0,1);return Ut.copy(kt).addScaledVector(Ve,Tt),Tt}function Fs(tt,kt){for(let Vt=0;Vt<16;Vt++){let Ut=null,Tt=.001;for(const Gt of kt){const se=Gt.r-xe.subVectors(tt,Gt.c).length();se>Tt&&(Tt=se,Ut=Gt)}if(!Ut)break;xe.subVectors(tt,Ut.c);const Qt=xe.length();Qt<1e-4?xe.set(1,0,0):xe.multiplyScalar(1/Qt),tt.copy(Ut.c).addScaledVector(xe,Ut.r*1.02)}return tt}function ks(tt,kt,Vt){const Ut=[tt.clone(),kt.clone()];let Tt=0;for(;Tt++<64;){let Qt=!1;for(let Gt=0;Gt<Ut.length-1;Gt++){const se=Ut[Gt],he=Ut[Gt+1],fe=Gt===0,Se=Gt===Ut.length-2;let ne=null,Fe=1/0;for(const Pe of Vt){const De=xe.subVectors(se,Pe.c).length()<Pe.r,Un=xe.subVectors(he,Pe.c).length()<Pe.r;if(De&&fe||Un&&Se)continue;const On=us(Pe.c,se,he,Nn);Nn.distanceTo(Pe.c)<Pe.r&&On<Fe&&(Fe=On,ne=Pe)}if(ne){us(ne.c,se,he,Nn),xe.subVectors(Nn,ne.c),xe.lengthSq()<1e-6&&(xe.subVectors(he,se),xe.set(-xe.y,xe.x,0),xe.lengthSq()<1e-6&&xe.set(0,1,0)),xe.normalize();const Pe=ne.c.clone().addScaledVector(xe,ne.r*1.08);Fs(Pe,Vt),Ut.splice(Gt+1,0,Pe),Qt=!0;break}}if(!Qt)break}return Ut}function $r(tt,kt,Vt){const Ut=tt.clone();Fs(Ut,Vt);const Tt=ks(Ut,kt,Vt);return Ut.distanceToSquared(tt)>1e-6&&Tt.unshift(tt.clone()),Tt}function C(tt,kt,Vt,Ut,Tt,Qt){const Gt=[0];for(let se=1;se<tt.length;se++)Gt.push(Gt[se-1]+tt[se].distanceTo(tt[se-1]));return{kind:"fly",path:tt,cum:Gt,len:Gt[Gt.length-1],faceVel:!!kt,q0:Vt?Vt.clone():null,q1:Ut?Ut.clone():null,cruise:Tt,s:0,v:Math.max(0,Qt||0)}}function V(tt){return{kind:"pivot",q1:tt.clone()}}function $(tt,kt,Vt){const{path:Ut,cum:Tt}=tt;let Qt=1;for(;Qt<Tt.length-1&&Tt[Qt]<kt;)Qt++;const Gt=Tt[Qt]-Tt[Qt-1]||1,se=ee.clamp((kt-Tt[Qt-1])/Gt,0,1);return Vt.copy(Ut[Qt-1]).lerp(Ut[Qt],se),_e.subVectors(Ut[Qt],Ut[Qt-1]),_e.lengthSq()<1e-9&&_e.copy(j),_e.normalize()}function Q(tt,kt){const Vt=Math.max(0,tt.len-tt.s);if(Vt<.4)return $(tt,tt.len,i.position),!tt.faceVel&&tt.q1&&i.quaternion.copy(tt.q1),gt=0,!0;const Ut=Math.min(tt.cruise,Math.sqrt(2*Nt*Vt));tt.v+=ee.clamp(Ut-tt.v,-Nt*kt,ht*kt),tt.v<0&&(tt.v=0),tt.s=Math.min(tt.len,tt.s+tt.v*kt);const Tt=$(tt,tt.s,i.position);return tt.faceVel?(ni(Tt,wt),i.quaternion.rotateTowards(wt,qt*kt)):i.quaternion.copy(tt.q0).slerp(tt.q1,tt.len>0?tt.s/tt.len:1),gt=tt.v,At=Tt.dot(Qn.set(0,0,-1).applyQuaternion(i.quaternion))<0,!1}function X(){const tt=ls(),kt=Bt.copy(F).addScaledVector(j,st),Vt=$r(i.position,kt,tt);return{phases:[C(Vt,!0,null,null,q,Math.abs(J)),V(St),C([kt.clone(),F.clone()],!1,St,St,ot,0)],i:0}}function Mt(){const tt=ls(),kt=de.copy(F).addScaledVector(j,ft),Vt=ks(F,kt,tt);return{phases:[C(Vt,!0,null,null,q,0)],i:0}}function Lt(){var tt;bt||mt||ct||!ii()||Math.abs(J)>I||(cs(),ei&&(_t=X(),ut=!1,K.set(0,0,0),Z=0,T=y=O=0,Et(),mt=!0,(tt=o.onDockStart)==null||tt.call(o)))}function Ot(){var tt;bt&&(cs(),ei&&(_t=Mt(),ut=!1,K.set(0,0,0),Z=0,T=y=O=0,Et(),bt=!1,ct=!0,(tt=o.onUndockStart)==null||tt.call(o)))}function Ft(tt){const kt=(tt.buttons&1)!==0,Vt=(tt.buttons&2)!==0;kt&&!p?(p=!0,document.body.classList.add("dragging")):!kt&&p&&Et(),h=Vt}window.addEventListener("pointermove",tt=>{c()||(d=tt.clientX,g=tt.clientY,Ft(tt))}),window.addEventListener("pointerdown",tt=>{c()||u&&(d=tt.clientX,g=tt.clientY,Ft(tt))}),window.addEventListener("pointerup",tt=>{c()||Ft(tt)}),window.addEventListener("blur",()=>{Et(),h=!1;for(const tt in l)l[tt]=!1}),window.addEventListener("contextmenu",tt=>tt.preventDefault()),window.addEventListener("keydown",tt=>{if(tt.code==="Escape"){Kt();return}c()||(l[tt.code]=!0,tt.code==="KeyX"&&(ut=!0),tt.code==="ShiftLeft"&&(et=!et),tt.code==="KeyE"&&u&&(bt?Ot():!mt&&!ct&&Lt()),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(tt.code)&&tt.preventDefault())}),window.addEventListener("keyup",tt=>{l[tt.code]=!1});const Ht=new P;function Xt(tt){const kt=Math.sign(tt),Vt=Math.min(1,Math.abs(tt));if(Vt<f)return 0;const Ut=(Vt-f)/(1-f);return kt*Math.pow(Ut,1.4)}function zt(tt){if(tt>=Rt){const Vt=tt-Rt;return _+Vt*(x-_)}return tt>=1?_:tt>=0?tt*_:tt>=W?0:-((W-tt)/A)*D}function ie(tt){var Ut,Tt,Qt,Gt,se;if(dt.turn.yaw=0,dt.turn.pitch=0,dt.turn.roll=0,gt=0,At=!1,mt||ct){const he=_t,fe=he.phases[he.i];let Se;fe.kind==="pivot"?(i.quaternion.rotateTowards(fe.q1,Y*tt),gt=0,dt.turn.yaw=.5,Se=i.quaternion.angleTo(fe.q1)<.001):Se=Q(fe,tt),k=0,ut=!1,Z=0,vt=!1,T=y=O=0,K.set(0,0,0),Se&&(he.i++,he.i>=he.phases.length&&(mt?(mt=!1,bt=!0,i.position.copy(F),i.quaternion.copy(St),(Ut=o.onDocked)==null||Ut.call(o)):(ct=!1,(Tt=o.onUndocked)==null||Tt.call(o)),J=0,gt=0,_t=null))}else if(bt)k=0,J=0,ut=!1,Z=0,vt=!1,T=y=O=0,K.set(0,0,0);else if(u){const he=c();he&&(Et(),h=!1);const fe=window.innerWidth/2,Se=window.innerHeight/2,ne=ee.clamp((d-fe)/fe,-1,1),Fe=ee.clamp((g-Se)/Se,-1,1);dt.aimX=ne,dt.aimY=Fe;const Pe=!he&&(h||!!l.Space);let De=0,Un=0;p&&!Pe&&(De=-Xt(ne)*E,Un=-Xt(Fe)*m,dt.turn.yaw=Xt(ne),dt.turn.pitch=Xt(Fe));const On=Math.min(1,B*tt);T+=(De-T)*On,y+=(Un-y)*On,T&&i.rotateY(T*tt),y&&i.rotateX(y*tt);let si=0;!he&&(l.KeyA||l.ArrowLeft)&&(si+=1),!he&&(l.KeyD||l.ArrowRight)&&(si-=1);const rh=si*w;O+=(rh-O)*On;const pc=O*tt;pc&&i.rotateZ(pc),dt.turn.roll=si;const Bs=!he&&(l.KeyW||l.ArrowUp),zs=!he&&(l.KeyS||l.ArrowDown);if(dt.thrustCmd=Bs?1:zs?-1:0,Z>0)Z>0&&(Z=Math.max(0,Z-tt)),k=0,ut=!1;else{(Bs||zs)&&(ut=!1);const mc=et?R:S;Bs&&(k+=mc*tt),zs&&(k>1&&k<Rt&&(k=1),k-=mc*tt);const oh=Bs||zs,ah=k>=1||k<=rt+.001;if(ut||!oh&&!et&&!ah&&!ut){const Hs=(ut?v:M)*tt;k>Hs?k-=Hs:k<-Hs?k+=Hs:(k=0,ut=!1)}}}if(k=ee.clamp(k,rt,it),Ht.set(0,0,-1).applyQuaternion(i.quaternion),!mt&&!bt&&!ct){let he=!1;if(a&&u&&k>Rt){const Se=Number.isFinite(a.forwardGap(i.position,Ht,z)),ne=a.forwardNear(i.position,Ht,N);(Se||ne)&&(k=Rt,ut=!1,he=!0,vt||(J>_+1?(Qt=o.onWarpExit)==null||Qt.call(o):(Gt=o.onWarpInhibit)==null||Gt.call(o)))}vt=he;const fe=zt(k);if(J+=(fe-J)*Math.min(1,b*tt),i.position.addScaledVector(Ht,J*tt),i.position.addScaledVector(K,tt),K.multiplyScalar(Math.max(0,1-G*tt)),a&&u){nt.copy(Ht).multiplyScalar(J).add(K);const Se=a.resolve(i,nt);Se.speedIn>0?(K.copy(nt),J=0,pt||(se=o.onImpact)==null||se.call(o,Se.speedIn),pt=!0,Se.speedIn>H&&(k=0,ut=!1,Z=Math.max(Z,ee.clamp(Se.speedIn/_,.2,1)*L))):pt=!1}}dt.speed=mt||ct?gt:bt?0:J+Ht.dot(K),dt.warp=ee.clamp((k-Rt)/1,0,1),dt.lock=et,mt||ct?(dt.throttle=At?0:ee.clamp(gt/_,0,1),dt.reverse=At?ee.clamp(gt/D,0,1):0):(dt.throttle=ee.clamp(k,0,1),dt.reverse=ee.clamp((W-k)/A,0,1)),dt.headingDeg=(ee.radToDeg(Math.atan2(Ht.x,-Ht.z))+360)%360,dt.pitchDeg=ee.radToDeg(Math.asin(ee.clamp(Ht.y,-1,1))),dt.pos.x=i.position.x,dt.pos.y=i.position.y,dt.pos.z=i.position.z,dt.mining=u&&!mt&&!ct&&!bt&&(h||!!l.Space),dt.docking=mt,dt.undocking=ct,dt.docked=bt;const kt=!mt&&!ct&&!bt&&u&&ii(),Vt=Math.abs(dt.speed)<=I;dt.canDock=kt&&Vt,dt.tooFastToDock=kt&&!Vt}return{update:ie,state:dt,activate:Wt,deactivate:Kt}}const Rl=new P(-210,0,-150),Cl=180,f0=80,p0=700,m0=.18,g0=6,_0=2,Pl=3,v0=6,Dl=20,x0=70,Ll=5,y0=12,M0=1.8,S0=6,No=.3,E0=.5;function Xu(i,t,e){return Math.sin(i*1.7+t*2.3)*.5+Math.sin(t*1.1+e*1.9)*.3+Math.sin(e*2.1+i*.7)*.2}function b0(i,t){const e=new jr(i,t),n=e.attributes.position,s=new P;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);const o=1+Xu(s.x,s.y,s.z)*.3;s.multiplyScalar(o),n.setXYZ(r,s.x,s.y,s.z)}return e.computeVertexNormals(),e}function w0(i){const t=new jr(i,0),e=t.attributes.position,n=new P;for(let s=0;s<e.count;s++){n.fromBufferAttribute(e,s);const r=1+Xu(n.x,n.y,n.z)*.4;n.multiplyScalar(r),e.setXYZ(s,n.x,n.y,n.z)}return t.computeVertexNormals(),t}function T0(i){const t=[];for(let S=0;S<p0;S++){const b=Math.random()*2-1,B=Math.random()*Math.PI*2,v=Math.sqrt(1-b*b),M=new P(Math.cos(B)*v,b,Math.sin(B)*v),G=Math.random(),H=G<.84?".":G<.96?"+":"*",L=Math.random(),z=L<.55?"#eaf2ff":L<.78?"#aac6ff":L<.92?"#fff3c9":"#ffb27a";t.push({dir:M,char:H,color:z})}const e=new P,n=new P;function s(){const S=Math.random()*2-1,b=Math.random()*Math.PI*2,B=Math.sqrt(1-S*S);return e.set(Math.cos(b)*B,S,Math.sin(b)*B)}function r(S){const b=Cl*Math.cbrt(Math.random());return S.copy(Rl).addScaledVector(s(),b)}const o=[];for(let S=0;S<f0;S++){const b=4+Math.random()*24,B=Math.random()<.5?0:1,v=b0(b,B);v.computeBoundingSphere();const M=.42+Math.random()*.34,H=Math.random()<.7?new Yt(M,M*.84,M*.66):new Yt(M,M*.95,M*1.02),L=new nn({color:H,roughness:1,metalness:0,flatShading:!0}),z=new Ie(v,L);r(z.position),z.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),z.userData.spin=new P((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),z.userData.integrity=1,z.userData.broken=!1,z.userData.viewRadius=v.boundingSphere.radius,i.add(z),o.push(z)}const a=[],c=[];function l(S){for(const b of o)b.rotation.x+=b.userData.spin.x*S,b.rotation.y+=b.userData.spin.y*S,b.rotation.z+=b.userData.spin.z*S;for(const b of a){if(b.userData.state==="disintegrating"){b.userData.age=(b.userData.age||0)+S,b.scale.setScalar(Math.max(.01,1-b.userData.age/No));continue}if(b.userData.state!=="free")continue;const B=b.userData.spin;b.rotation.x+=B.x*S,b.rotation.y+=B.y*S,b.rotation.z+=B.z*S}for(let b=c.length-1;b>=0;b--)c[b].age+=S,c[b].age>=c[b].duration&&c.splice(b,1)}function u(S,b){const B=Math.max(0,(S.userData.integrity??1)-b);return S.userData.integrity=B,B}function p(S){S.userData.integrity=1}function h(S){S.userData.broken=!0,S.userData.integrity=0,S.userData.brokenRadius=S.userData.viewRadius??4,S.scale.setScalar(m0),S.visible=!1;const b=S.userData.brokenRadius,B=Math.max(_0,Math.min(g0,Math.round(b/5))),v=[];for(let M=0;M<B;M++){const G=Pl+Math.random()*(v0-Pl),H=w0(G);H.computeBoundingSphere();const L=new Yt(16761418).multiplyScalar(.85+Math.random()*.3),z=new nn({color:L,emissive:L.clone().multiplyScalar(.55),emissiveIntensity:1,roughness:.45,metalness:.35,flatShading:!0}),N=new Ie(H,z),U=s().clone(),I=G+Math.random()*b*.3;N.position.copy(S.position).addScaledVector(U,I),N.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),N.userData.spin=new P((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5),N.userData.weight=Dl+Math.random()*(x0-Dl),N.userData.state="free",N.userData.velocity=U.clone().multiplyScalar(Ll+Math.random()*(y0-Ll)),N.userData.viewRadius=H.boundingSphere.radius,N.userData.parentAsteroid=S,i.add(N),a.push(N),v.push(N)}return v}function d(S){const b=o.indexOf(S);b!==-1&&o.splice(b,1),i.remove(S),S.geometry.dispose(),S.material.dispose(),c.push({position:S.position.clone(),age:0,duration:E0,kind:"boom"})}function g(S){const b=o.indexOf(S);b!==-1&&o.splice(b,1),i.remove(S),S.geometry.dispose(),S.material.dispose()}function E(S){S.userData.state==="free"&&(S.userData.state="disintegrating",S.userData.age=0,S.userData.velocity.set(0,0,0),c.push({position:S.position.clone(),age:0,duration:No,kind:"spark"}))}function m(S){const b=a[S],B=b.userData.parentAsteroid;i.remove(b),b.geometry.dispose(),b.material.dispose(),a.splice(S,1),B&&x(B).length===0&&g(B)}function f(S,b){for(let B=a.length-1;B>=0;B--){const v=a[B];if(v.userData.state==="disintegrating"){(v.userData.age||0)>=No&&m(B);continue}v.userData.state==="free"&&(v.position.addScaledVector(v.userData.velocity,b),v.userData.velocity.multiplyScalar(Math.max(0,1-M0*b)),v.userData.tractored&&v.position.distanceTo(S)<S0&&m(B))}w()}function w(){for(const S of a){if(S.userData.state!=="free")continue;const b=S.userData.viewRadius??3;for(const B of o){if(B.userData.broken||!B.visible)continue;const v=(B.userData.viewRadius??4)*(B.scale.x||1);n.subVectors(S.position,B.position);const M=n.length(),G=b+v;M>1e-4&&M<G?S.position.addScaledVector(n,(G-M)/M):M<=1e-4&&(S.position.x+=G)}}for(let S=0;S<a.length;S++){const b=a[S];if(b.userData.state!=="free")continue;const B=b.userData.viewRadius??3;for(let v=S+1;v<a.length;v++){const M=a[v];if(M.userData.state!=="free")continue;const G=M.userData.viewRadius??3;n.subVectors(b.position,M.position);const H=n.length(),L=B+G;H>1e-4&&H<L?(n.multiplyScalar((L-H)*.5/H),b.position.add(n),M.position.sub(n)):H<=1e-4&&(b.position.x+=L*.5,M.position.x-=L*.5)}}}function _(){const S=[];for(const b of o)b.userData.broken||S.push(b);for(const b of a)b.userData.state==="free"&&S.push(b);return S}function x(S){return a.filter(b=>b.userData.parentAsteroid===S)}const D={center:Rl,radius:Cl};function R(S){for(const b of o)!b.visible||b.userData.broken||S(b.position,(b.userData.viewRadius??4)*(b.scale.x||1),b.material.color);for(const b of a)b.userData.state==="free"&&S(b.position,b.userData.viewRadius??3,b.material.color)}return{update:l,stars:t,asteroids:o,blocks:a,explosions:c,cluster:D,castShadows:R,drainIntegrity:u,restoreIntegrity:p,completeCut:h,failCut:d,finalizeSalvage:g,disintegrateBlock:E,updateBlocks:f,targetables:_,blocksOf:x}}const Uo=new P(200,160,-620),gr=2,Il=195;function A0(i){const t=new Oe;t.position.copy(Uo),t.rotation.set(.12,.7,.05),t.scale.setScalar(gr),i.add(t);const e=new nn({color:12174028,roughness:.55,metalness:.15}),n=new nn({color:7107195,roughness:.7,metalness:.2,flatShading:!0}),s=new nn({color:13216134,roughness:.6,metalness:.1}),r=new nn({color:6126788,roughness:.45,metalness:.2,emissive:1187900,emissiveIntensity:1,flatShading:!0}),o=new nn({color:9080984,roughness:.6,metalness:.2}),a=new nn({color:10475775,emissive:2911648,emissiveIntensity:1.4,roughness:.3});function c(U,I,q=t){const ot=new Ie(U,I);return q.add(ot),ot}const l=Math.PI/2,u=[];function p(U,I){const q=new xi({color:U,transparent:!0,opacity:1}),ot=new Ie(new Je(I,10,10),q);return t.add(ot),u.push({mat:q,speed:2.2+u.length*.35,phase:u.length*1.3}),ot}c(new me(16,16,220,24),e).rotation.x=l;for(const U of[-72,-36,0,36,72]){const I=c(new me(18,18,7,24),n);I.rotation.x=l,I.position.z=U}const h=new Oe;h.position.z=-10,t.add(h);const d=90,g=13;c(new pn(d,g,16,64),e,h);const E=16,m=d-g,f=m-E,w=(E+m)/2;for(let U=0;U<8;U++){const I=U/8*Math.PI*2,q=c(new me(2.6,2.6,f,8),o,h);q.position.set(Math.cos(I)*w,Math.sin(I)*w,0),q.rotation.z=I-l;const ot=c(new en(13,17,15),U%2?e:s,h);ot.position.set(Math.cos(I)*(d+6),Math.sin(I)*(d+6),0),ot.rotation.z=I-l;const ht=c(new en(13.4,4,2),a,h);ht.position.set(Math.cos(I)*(d+6),Math.sin(I)*(d+6),8),ht.rotation.z=I-l}const _=c(new me(26,18,26,24),e);_.rotation.x=l,_.position.z=122;const x=[[14,14],[-14,14],[14,-14],[-14,-14],[0,0]];for(const[U,I]of x){const ot=U===0&&I===0?10:7,ht=c(new me(ot,ot,20,16),n);ht.rotation.x=l,ht.position.set(U,I,140),c(new pn(ot+1,1.6,8,20),a).position.set(U,I,150)}for(let U=0;U<3;U++){const I=l+U/3*Math.PI*2,q=c(new en(5,5,64),o);q.position.set(Math.cos(I)*30,Math.sin(I)*30,150),q.rotation.z=I-l,c(new pn(13,2.6,8,18),o).position.set(Math.cos(I)*30,Math.sin(I)*30,182),p(16764490,2.4).position.set(Math.cos(I)*30,Math.sin(I)*30,184)}for(let U=0;U<3;U++){const I=l+U/3*Math.PI*2,q=c(new me(11,11,56,16),e);q.rotation.x=l,q.position.set(Math.cos(I)*22,Math.sin(I)*22,-82)}const D=c(new me(22,22,10,24),n);D.rotation.x=l,D.position.z=-116;for(let U=0;U<3;U++){const I=l+U/3*Math.PI*2,q=c(new me(6,10,18,16,1,!0),n);q.rotation.x=l,q.position.set(Math.cos(I)*11,Math.sin(I)*11,-128)}for(const U of[-1,1]){const I=c(new me(2.6,2.6,120,10),o);I.rotation.z=l,I.position.set(U*70,0,-50);for(const ot of[55,105]){const ht=U*ot,Nt=-50;c(new en(46,1,34),r).position.set(ht,0,Nt);for(const Y of[-16,0,16])c(new en(48,1.6,1.6),o).position.set(ht,0,Nt+Y);for(const Y of[-23,0,23])c(new en(1.6,1.6,36),o).position.set(ht+Y,0,Nt)}p(U<0?16726832:3800938,2.6).position.set(U*132,0,-50)}c(new me(1.6,1.6,46,8),o).position.set(0,41,30);const S=c(new me(17,4,9,24,1,!0),o);S.position.set(0,66,30),S.rotation.set(-.5,0,0),p(16726832,2.8).position.set(0,70,30);const B=new o0(16767400,.6,320,2);B.position.set(0,0,90),t.add(B);const v=[],M=(U,I,q,ot)=>v.push({p:new P(U,I,q),r:ot});for(const U of[-100,-66,-33,0,33,66,100])M(0,0,U,18);M(0,0,125,28),M(0,0,150,22);for(let U=0;U<3;U++){const I=l+U/3*Math.PI*2;for(const q of[135,165,182])M(Math.cos(I)*30,Math.sin(I)*30,q,12)}for(let U=0;U<24;U++){const I=U/24*Math.PI*2;M(Math.cos(I)*90,Math.sin(I)*90,-10,16)}for(let U=0;U<3;U++){const I=l+U/3*Math.PI*2;M(Math.cos(I)*22,Math.sin(I)*22,-82,14)}M(0,0,-118,24);for(const U of[-1,1])for(const I of[40,70,100,130])M(U*I,0,-50,20);M(0,45,30,14),M(0,66,30,16),t.updateMatrixWorld(!0);const G=v.map(U=>({center:U.p.clone().applyMatrix4(t.matrixWorld),radius:U.r*gr})),H=new Yt(.62,.68,.78);function L(U){U(Uo,Il*gr,H,G)}let z=0;function N(U){z+=U,h.rotation.z+=.07*U;for(const I of u){const q=Math.sin(z*I.speed+I.phase);I.mat.opacity=q>.55?1:.12}}return{update:N,group:t,center:Uo,radius:Il*gr,colliders:G,castShadows:L}}const ve=Math.PI/2;function te(i,t,e){const n=new Ie(t,e);return i.add(n),n}function Nl(i,t,e,n=!1){return new nn({color:i,roughness:t,metalness:e,flatShading:n})}function qu(){const i=.55+Math.random()*.3,t=Math.random()<.5;return{hull:Nl(new Yt(i,i,i*1.02),.55,.25),hullDark:Nl(new Yt(i*.5,i*.52,i*.58),.7,.3,!0),accent:new nn({color:t?new Yt(.82,.46,.2):new Yt(.3,.5,.86),roughness:.5,metalness:.3,flatShading:!0,side:_n}),glow:new nn({color:10475775,emissive:2911648,emissiveIntensity:1.3,roughness:.3}),engine:new nn({color:3346688,emissive:16738858,emissiveIntensity:1.6,roughness:.4})}}function Is(i,t,e,n,s=14){const r=te(i,new uc(e,n,6,s),t);return r.rotation.x=ve,r}function Ts(i,t,e,n,s){const r=new Ou;r.moveTo(0,0),r.lineTo(i,-n),r.lineTo(i,-n-e),r.lineTo(0,-t),r.closePath();const o=new dc(r,{depth:s,bevelEnabled:!1,steps:1});return o.translate(0,0,-s/2),o.rotateX(ve),o}function Ha(i,t,e,n,s,r,o=0){for(const a of[-1,1]){const c=te(i,e,t);c.scale.x=a,c.position.set(n*a,s,r),o&&(c.rotation.z=-a*o)}}function Qe(i,t,e,n,s,r,o,a){const c=te(i,new en(e,n,s),t);return c.position.set(r,o,a),c}function R0(i,t,e,n,s,r,o,a){for(let c=0;c<e;c++){const l=ve+c/e*Math.PI*2,u=Math.cos(l)*n,p=Math.sin(l)*n,h=te(i,new me(s*.8,s,5,12,1,!0),t.hullDark);h.rotation.x=ve,h.position.set(u,p,o);const d=te(i,new xn(r,7,12),t.engine);d.rotation.x=ve,d.position.set(u,p,a)}}function C0(i){const t=new Oe,e=72;Is(t,i.hull,8,e,20);for(const l of[-22,-7,8,23])te(t,new pn(8.6,1.1,8,20),i.hullDark).position.z=l;for(let l=0;l<4;l++){const u=-e*.28+l*16;for(const[p,h]of[[-1,1],[1,1],[-1,-1],[1,-1]])Qe(t,(l+(p+h))%2?i.accent:i.hullDark,11,9,13,p*8,h*7,u)}const n=te(t,new Je(7,16,14),i.hull);n.scale.set(1,1,1.25),n.position.z=e*.5-4,te(t,new pn(6.6,1.1,8,20),i.glow).position.z=e*.5+3,Qe(t,i.glow,6,2,1,0,4,e*.5+1),te(t,new me(.5,.5,9,6),i.hullDark).position.set(0,11,6);const r=te(t,new me(3.2,.6,2.2,14,1,!0),i.hull);r.position.set(0,15,6),r.rotation.set(-.5,0,0);for(const l of[-1,1]){const u=te(t,new me(.8,.8,16,6),i.hullDark);u.rotation.z=ve,u.position.set(l*12,0,-16),Qe(t,i.accent,14,.8,18,l*19,0,-16)}const o=te(t,new me(8.5,8.5,6,16),i.hullDark);o.rotation.x=ve,o.position.z=-e*.5+1;const a=te(t,new me(7,10,9,20,1,!0),i.hullDark);a.rotation.x=ve,a.position.z=-e*.5-6;const c=te(t,new xn(7,12,18),i.engine);return c.rotation.x=ve,c.position.z=-e*.5-11,t}const P0={name:"Freighter",build:C0};function D0(i){const t=new Oe,e=20;Is(t,i.hull,4,e,16);const n=te(t,new xn(4.1,9,16),i.hull);n.rotation.x=ve,n.position.z=e*.5+6.5;const s=te(t,new me(.25,.25,5,5),i.hullDark);s.rotation.x=ve,s.position.z=e*.5+13;const r=te(t,new Je(2.6,14,12),i.glow);r.scale.set(1,.72,1.5),r.position.set(0,1.7,e*.28),Ha(t,i.accent,Ts(10,8,2.5,5,.7),2.6,-.6,-1.5,.12);const o=te(t,Ts(6,6,1.6,4,.7),i.accent);o.rotation.z=ve,o.position.set(0,2,-e*.42),Qe(t,i.hullDark,5,2.2,6,0,-2.4,-2);for(const a of[-1,1]){Is(t,i.hullDark,1.8,6,12).position.set(a*3.2,0,-e*.5-2);const c=te(t,new xn(1.9,4.5,12),i.engine);c.rotation.x=ve,c.position.set(a*3.2,0,-e*.5-7)}return t}const L0={name:"Shuttle",build:D0};function I0(i){const t=new Oe,e=64;Qe(t,i.hullDark,4,4,e,0,0,0);for(const r of[-22,-8,6,20])Qe(t,i.hullDark,22,1.4,1.4,0,0,r);for(let r=0;r<3;r++){const o=ve+r/3*Math.PI*2,a=Math.cos(o)*11,c=Math.sin(o)*11;Is(t,i.hull,7,30,16).position.set(a,c,-2),te(t,new pn(7,.9,6,16),i.accent).position.set(a,c,-2);const l=te(t,new me(.7,.7,30,6),i.hullDark);l.rotation.x=ve,l.position.set(a*.55,c*.55,-2)}const n=te(t,new Je(6,16,14),i.accent);n.scale.set(1,1,1.2),n.position.z=e*.5-2,Qe(t,i.hull,7,7,6,0,0,e*.5-9),te(t,new pn(5.2,1,8,18),i.glow).position.z=e*.5+3;const s=te(t,new me(6,9,8,18,1,!0),i.hullDark);return s.rotation.x=ve,s.position.z=-e*.5-3,R0(t,i,3,3.8,3,3,-e*.5-2,-e*.5-8),t}const N0={name:"Tanker",build:I0};function U0(i){const t=new Oe,e=30;Is(t,i.hull,3.4,e,14);const n=te(t,new xn(3.4,11,14),i.hull);n.rotation.x=ve,n.position.z=e*.5+7.5;const s=te(t,new Je(2.1,14,12),i.glow);s.scale.set(1,.7,1.8),s.position.set(0,1.4,e*.12),Ha(t,i.accent,Ts(12,11,1.5,8,.8),2,-.5,-e*.12,.1),Ha(t,i.accent,Ts(4.5,4,1,3,.6),2.2,.4,e*.32,.05);const r=te(t,Ts(7,7,1.5,5,.8),i.accent);r.rotation.z=ve,r.position.set(0,2,-e*.34);for(const c of[-1,1])Qe(t,i.hullDark,2.5,3,8,c*2.8,-.6,e*.02);const o=te(t,new me(3,4.6,7,16,1,!0),i.hullDark);o.rotation.x=ve,o.position.z=-e*.5-3;const a=te(t,new xn(4,8,16),i.engine);a.rotation.x=ve,a.position.z=-e*.5-8;for(let c=0;c<4;c++){const l=c/4*Math.PI*2;Qe(t,i.hullDark,1,1,5,Math.cos(l)*4,Math.sin(l)*4,-e*.5-5)}return t}const O0={name:"Interceptor",build:U0};function F0(i){const t=new Oe,e=34;te(t,new Je(12,18,16),i.hull).scale.set(1,.85,1.5);for(const s of[-9,2,12]){const r=te(t,new pn(12,1.5,8,24),i.hullDark);r.scale.set(1,.85,1),r.position.z=s}for(const s of[-1,1])Qe(t,i.accent,5,8,14,s*11,0,-2);Qe(t,i.hullDark,12,4,16,0,9,-4);for(const s of[-1,1])Qe(t,i.hullDark,3,3,20,s*10,-1,e*.45),Qe(t,i.accent,5,7,5,s*10,-1,e*.5+9),te(t,new Je(2.2,10,8),i.hull).position.set(s*10,-1,e*.5+13);te(t,new Je(5,14,12,0,Math.PI*2,0,Math.PI*.6),i.accent).position.set(0,8,e*.18);const n=te(t,new Je(2.4,12,10),i.glow);n.scale.set(1.6,.8,.6),n.position.set(0,4.5,e*.55);for(const[s,r]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const o=te(t,new me(2.6,3.4,5,12,1,!0),i.hullDark);o.rotation.x=ve,o.position.set(s*6,r*5,-e*.5-2);const a=te(t,new xn(3,7,12),i.engine);a.rotation.x=ve,a.position.set(s*6,r*5,-e*.5-6)}return t}const k0={name:"Mining Barge",build:F0},Cr=[P0,L0,N0,O0,k0],Oo=950,B0=280,z0=700,_r=540,H0=52,G0=108,V0=760,W0=1180,X0=4.5,q0=3,Y0=18,K0=.6,Vn=44,Fo=24,xs=(i,t)=>i+Math.random()*(t-i),Rn=ee.clamp,Ul=i=>i*i*(3-2*i);function j0(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return new P(Math.cos(t)*e,i,Math.sin(t)*e)}const Ol=Cr.map(i=>i.build),Fl=["KLV","NRX","VSG","ORB","TYC","ZEN","AXM","HLO","DRV","PXR"];function zr(){const i=Fl[Math.floor(Math.random()*Fl.length)],t=String(Math.floor(100+Math.random()*900));return`${i}-${t}`}function Z0(i,t){i.updateMatrixWorld(!0);const e=new Jn().setFromObject(i),n=e.getSize(new P),s=e.getCenter(new P),r=Rn(n.length()*.018,.7,2.2),o=e.max.z-n.z*.18,a=[[16726832,s.x-n.x*.5,s.y,o,"nav"],[3800938,s.x+n.x*.5,s.y,o,"nav"],[16777215,s.x,e.max.y,e.min.z+n.z*.2,"strobe"],[16738890,s.x,s.y,e.min.z,"strobe"]];for(let c=0;c<a.length;c++){const[l,u,p,h,d]=a[c],g=new xi({color:l,transparent:!0,opacity:1,fog:!1});te(i,new Je(r,8,8),g).position.set(u,p,h),t.push({mat:g,kind:d,speed:2.4+c*.7,phase:c*1.7})}}function $0(i,t,e,n={}){const s=n.count??6,r=t.center,o=[],a=(t.colliders||[]).map(Y=>({c:Y.center,r:Y.radius})),c=(e==null?void 0:e.asteroids)||[],l=(e==null?void 0:e.cluster)||null,u=16,p=24,h=1.15,d=130,g=2.6,E=1.3,m=new P,f=new P,w=new P(0,1,0),_=new P(0,0,1),x=new P,D=new P,R=new P,S=new P,b=new P,B=new P,v=new P,M=new P,G=new P;function H(Y){const st=Math.random()*Math.PI*2,ft=(Math.random()*2-1)*K0,at=Math.cos(ft);return Y.set(Math.cos(st)*at,Math.sin(ft),Math.sin(st)*at).normalize()}function L(Y,st){return f.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),st.crossVectors(Y,f),st.lengthSq()<1e-4&&st.crossVectors(Y,w),st.normalize()}function z(Y,st,ft,at,Pt,Dt,It){x.copy(Y).sub(ft);const Rt=x.length(),W=st+Pt+u,A=Rt-W;if(A>Dt||Rt<1e-4)return 0;const rt=Rn(1-A/Dt,0,1),it=rt*rt,k=x.dot(at);D.copy(x).addScaledVector(at,-k);const et=D.length();return k>0&&(et>.001?It.addScaledVector(D,-(it*g)/et):(R.crossVectors(at,w),R.lengthSq()<1e-4&&R.crossVectors(at,_),It.addScaledVector(R.normalize(),it*g))),It.addScaledVector(x.multiplyScalar(-1/Rt),it*E),k>0&&et<W?rt*Rn(1-et/W,0,1):0}function N(Y,st,ft,at,Pt){x.copy(Y).sub(st);const Dt=x.length(),It=ft+at;Dt<It&&Dt>1e-4&&Y.addScaledVector(x.multiplyScalar(1/Dt),(It-Dt)*Pt)}function U(Y,st){const ft=Y.group.position,at=Y.heading,Pt=Y.radius,Dt=60+Y.speed*1.2;let It=0;for(const Rt of a)It=Math.max(It,z(Rt.c,Rt.r,ft,at,Pt,Dt,st));if(l&&ft.distanceTo(l.center)<l.radius+Dt+80)for(const Rt of c)It=Math.max(It,z(Rt.position,(Rt.userData.viewRadius||10)*Rt.scale.x,ft,at,Pt,Dt,st));for(const Rt of o)Rt===Y||!Rt.active||(It=Math.max(It,z(Rt.group.position,Rt.radius,ft,at,Pt,Dt,st)));return It}function I(Y){const st=Y.group.position,ft=Y.radius;for(const at of a)N(st,at.c,at.r,ft,1);if(l&&st.distanceTo(l.center)<l.radius+80)for(const at of c)N(st,at.position,(at.userData.viewRadius||10)*at.scale.x,ft,1);for(const at of o)at===Y||!at.active||N(st,at.group.position,at.radius,ft,.5)}function q(Y,st,ft){M.subVectors(st,Y);const at=M.lengthSq(),Pt=at>1e-6?Rn(G.subVectors(ft,Y).dot(M)/at,0,1):0;return G.copy(Y).addScaledVector(M,Pt),G.distanceToSquared(ft)}function ot(Y,st,ft){for(const at of a){const Pt=at.r+ft+p;if(q(Y,st,at.c)<Pt*Pt)return!1}if(l){const at=l.radius+ft+p;if(q(Y,st,l.center)<at*at)return!1}return!0}function ht(Y,st){const ft=new Oe;ft.visible=!1,i.add(ft);const at=Y(qu());ft.add(at);const Pt=[];Z0(at,Pt);const Dt=new Jn().setFromObject(at),It=Dt.getSize(new P),Rt=It.z,W=Math.max(It.x,It.y),A=Dt.getBoundingSphere(new Ai).radius,rt=Rt*X0,it=Math.max(1.5,W*.4),k=new Float32Array(Vn*3),et=new Float32Array(Vn*3),ut=new Float32Array(Vn),J=new Float32Array(Vn);for(let Et=0;Et<Vn;Et++){const Kt=Et/(Vn-1);ut[Et]=Math.random()*2-1,J[Et]=Math.random()*2-1;const F=1-Kt*.85;et[Et*3]=.72*F,et[Et*3+1]=.9*F,et[Et*3+2]=F}const T=new Me;T.setAttribute("position",new Ge(k,3)),T.setAttribute("color",new Ge(et,3));const y=new Cs({size:Rn(W*.35,3,9),sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,fog:!1,blending:Pr,depthWrite:!1}),O=new kr(T,y);O.visible=!1,O.frustumCulled=!1,ft.add(O);const K=[],nt=new Float32Array(Fo*3);for(let Et=0;Et<Fo;Et++)K.push(j0());const Z=new Me;Z.setAttribute("position",new Ge(nt,3));const vt=new Cs({color:14546687,size:Rn(W*.4,3,10),sizeAttenuation:!0,transparent:!0,opacity:0,fog:!1,blending:Pr,depthWrite:!1}),pt=new kr(Z,vt);pt.visible=!1,pt.frustumCulled=!1;const mt=Math.max(W,Rt*.22);ft.add(pt);const bt=new P,ct=new P,gt=new P,At=new P,_t={group:ft,active:!1,radius:A,heading:ct,speed:0,laneLen:0,warpOutStart:0,cruiseSpeed:0,peakSpeed:0,respawn:xs(0,7)+st*.9,callsign:zr()};function dt(){for(let Et=0;Et<16;Et++){H(bt),L(bt,f);const Kt=m.copy(r).addScaledVector(f,xs(B0,z0));if(gt.copy(Kt).addScaledVector(bt,-Oo),At.copy(Kt).addScaledVector(bt,Oo),ot(gt,At,A))break}_t.laneLen=Oo*2,_t.warpOutStart=_t.laneLen-_r*.4,_t.cruiseSpeed=xs(H0,G0),_t.peakSpeed=xs(V0,W0),_t.speed=_t.peakSpeed,_t.callsign=zr(),ct.copy(bt),_t.active=!0,ft.position.copy(gt),ft.up.copy(w),ft.lookAt(m.copy(gt).add(ct)),ft.visible=!0}function Wt(){_t.active=!1,ft.visible=!1,O.visible=!1,pt.visible=!1,_t.respawn=xs(q0,Y0)}return _t.update=function(Et,Kt){if(!_t.active){_t.respawn-=Et,_t.respawn<=0&&dt();return}const F=B.copy(ft.position).sub(gt).dot(bt);let St,j=0,lt=0;if(F<_r){const Zt=Rn(F/_r,0,1);St=ee.lerp(_t.peakSpeed,_t.cruiseSpeed,Ul(Zt)),j=1-Zt,lt=Math.max(0,1-Zt/.22)}else if(F<_t.warpOutStart)St=_t.cruiseSpeed;else{const Zt=_t.laneLen+_r-_t.warpOutStart,Bt=(F-_t.warpOutStart)/Zt;if(St=ee.lerp(_t.cruiseSpeed,_t.peakSpeed,Ul(Bt)),j=Rn(Bt,0,1),lt=Math.max(0,(Bt-.78)/.22),Bt>=1){Wt();return}}const yt=j<.05;S.copy(At).sub(ft.position).normalize(),v.set(0,0,0);let wt=0;yt&&(wt=U(_t,v)),b.copy(S).add(v),b.lengthSq()<1e-6?b.copy(ct):b.normalize();const jt=ct.angleTo(b);if(jt>1e-4&&ct.lerp(b,Math.min(1,h*Et/jt)).normalize(),j>.02)_t.speed=St;else{const Zt=St*(1-.7*wt);_t.speed+=Rn(Zt-_t.speed,-d*Et,d*Et)}if(ft.position.addScaledVector(ct,_t.speed*Et),I(_t),ft.lookAt(m.copy(ft.position).add(ct)),j>.02){const Zt=rt*j;for(let Bt=0;Bt<Vn;Bt++){const de=Bt/(Vn-1),_e=it*(.25+.9*de);k[Bt*3]=ut[Bt]*_e,k[Bt*3+1]=J[Bt]*_e,k[Bt*3+2]=-(de*Zt+Rt*.3)}T.attributes.position.needsUpdate=!0,y.opacity=Math.min(1,j*1.25),O.visible=!0}else O.visible=!1;if(lt>.001){const Zt=mt*(.3+lt*2.5);for(let Bt=0;Bt<Fo;Bt++){const de=K[Bt];nt[Bt*3]=de.x*Zt,nt[Bt*3+1]=de.y*Zt,nt[Bt*3+2]=de.z*Zt}Z.attributes.position.needsUpdate=!0,vt.opacity=lt,pt.visible=!0}else pt.visible=!1;const oe=j>.05;for(const Zt of Pt){if(oe){Zt.mat.opacity=1;continue}const Bt=Math.sin(Kt*Zt.speed+Zt.phase);Zt.mat.opacity=Zt.kind==="strobe"?Bt>.86?1:.06:.5+.5*Math.max(0,Bt)}},_t}for(let Y=0;Y<s;Y++)o.push(ht(Ol[Y%Ol.length],Y));let Nt=0;function qt(Y){Nt+=Y;for(const st of o)st.update(Y,Nt)}return{update:qt,ships:o}}const ko=130,J0=.14,Q0=ee.degToRad(6),tv=.28,ev=1,nv=16,kl=.08,iv=1.2;function sv(i,t,e,n={}){const s=new Vu;s.far=ko;const r=new xt(0,0),o=new P,a=new P,c=new P,l=new Xe,u=new P,p=new P;let h=null,d=null;const g={phase:"idle",object:null,inRange:!1,firing:!1,distance:0,integrity:1,gauge:0,gaugeDriftDir:0,targetBlock:null};function E(){d&&!d.userData.broken&&(e.restoreIntegrity(d),d.userData.basePos&&d.position.copy(d.userData.basePos)),d=null,g.gauge=0}function m(){E(),h=null,g.phase="idle",g.object=null,g.inRange=!1,g.firing=!1,g.distance=0,g.integrity=1,g.gaugeDriftDir=0,g.targetBlock=null}function f(x){if(!x||!x.parent)return!1;t.getWorldPosition(o),a.subVectors(x.position,o);const D=a.length();if(D>ko)return!1;a.divideScalar(D),t.getWorldQuaternion(l),c.set(0,0,-1).applyQuaternion(l);const R=Math.acos(ee.clamp(c.dot(a),-1,1)),S=Math.atan2((x.userData.viewRadius??4)*(x.scale.x||1),D);return R<=S+Q0}function w(){s.setFromCamera(r,t),s.far=ko;const x=e.targetables();if(!x.length)return null;const D=s.intersectObjects(x,!1);return D.length?D[0].object:null}function _(x,D){var G,H;i.updateMatrixWorld(!0);const R=!!(x&&x.mining),S=x&&x.aimX||0;let b=null;const B=h&&!h.userData.broken&&(h.userData.parentAsteroid?h.userData.state==="free":!0);R&&B&&f(h)?b=h:(b=w(),h=b);const v=!!(b&&b.userData.parentAsteroid),M=!!(b&&!b.userData.parentAsteroid);if(d&&b!==d&&E(),t.getWorldPosition(o),R&&M){d!==b&&(d=b,g.gauge=0,g.gaugeDriftDir=Math.random()<.5?-1:1,b.userData.basePos?b.userData.basePos.copy(b.position):b.userData.basePos=b.position.clone()),g.phase="cutting",g.object=b,g.inRange=!0,g.firing=!0,g.distance=o.distanceTo(b.position);const L=e.drainIntegrity(b,J0*D);g.integrity=L,g.gauge+=(g.gaugeDriftDir*tv+S*ev)*D,g.gauge=ee.clamp(g.gauge,-1,1);const z=kl+Math.abs(g.gauge)*(iv-kl);if(p.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).multiplyScalar(z),b.position.copy(b.userData.basePos).add(p),Math.abs(g.gauge)>=1){(G=n.onBoom)==null||G.call(n,b.userData.basePos.clone()),e.failCut(b),d=null,h=null,m();return}L<=0&&(b.position.copy(b.userData.basePos),e.completeCut(b),(H=n.onCut)==null||H.call(n,b.position.clone()),d=null,h=null,g.phase="idle",g.firing=!1,g.object=null,g.gauge=0);return}if(R&&v){g.phase="salvage",g.object=b,g.targetBlock=b,g.inRange=!0,g.firing=!0,g.integrity=0,g.distance=o.distanceTo(b.position),b.userData.tractored=!0,u.subVectors(o,b.position),u.lengthSq()>1e-6&&(u.normalize(),b.userData.velocity.copy(u).multiplyScalar(nv));return}d&&E(),g.phase="idle",g.firing=!1,g.object=b||null,g.inRange=!!b,g.targetBlock=null,b?(g.distance=o.distanceTo(b.position),g.integrity=M?b.userData.integrity??1:0):(g.distance=0,g.integrity=1)}return{update:_,reset:m,state:g}}function ke(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function Bo(i,t=12){const e=Math.max(0,Math.min(t,Math.round(i*t)));return"["+"#".repeat(e)+".".repeat(t-e)+"]"}const rv=' <svg class="thr-lock" viewBox="0 0 7 8" shape-rendering="crispEdges" aria-hidden="true"><rect x="2" y="0" width="3" height="1"/><rect x="2" y="1" width="1" height="2"/><rect x="4" y="1" width="1" height="2"/><rect x="0" y="3" width="7" height="5"/><rect x="3" y="4" width="1" height="2" fill="#000"/></svg>';function zo(i){return(i<0?"-":"+")+String(Math.abs(Math.round(i))).padStart(5,"0")}function ov(i){const n=Math.max(0,Math.min(20,10+Math.round(i*10))),s=Math.abs(i),r=s<.4?"safe":s<.7?"warn":"danger",o=r==="safe"?"STABLE":r==="warn"?"WARN":"DANGER";let a='<span class="bar">';for(let c=0;c<21;c++)if(c===n)a+=`<span class="cursor ${r}">■</span>`;else if(c===10)a+='<span class="tick">|</span>';else{const l=Math.abs(c-10),u=l>6?"bg-danger":l>3?"bg-warn":"bg-safe";a+=`<span class="${u}">·</span>`}return a+="</span>",{html:a,label:o,zone:r}}function av(){const i=document.getElementById("hud"),t=ke("div",null,"");t.id="reticle";for(const _ of["up","down","left","right","dot"])t.appendChild(ke("span",_,""));const e=ke("pre","readout left",""),n=ke("pre","readout low",""),s=ke("div",null,"");s.id="dash";const r=ke("div","rule",""),o=ke("div","row",""),a=ke("span",null,""),c=ke("span",null,"");o.append(a,ke("span","sep","|"),c),s.append(r,o);const l=ke("pre",null,"");l.id="mining",l.style.display="none";const u=ke("pre",null,"");u.id="stability",u.style.display="none";const p=ke("pre",null,"");p.id="tractor",p.style.display="none";const h=ke("div",null,"");h.id="dock-prompt",h.style.display="none";const d=ke("div",null,"");d.id="sys-msg",d.style.display="none";let g=null;i.append(t,e,n,s,l,u,p,h,d);function E(){}function m(_,x=3800){d.textContent=_,d.style.display="",g&&clearTimeout(g),g=setTimeout(()=>{d.style.display="none",g=null},x)}function f(){g&&(clearTimeout(g),g=null),d.style.display="none"}function w(_,x){const D=_.throttle,R=_.warp,S=_.reverse??0,b=S>0?S:D,B=S>0?-Math.round(S*100):Math.round(D*100),v=_.lock?rv:"";e.innerHTML=`SPD  ${String(Math.round(_.speed)).padStart(4)} u/s
THR  ${Bo(b)} ${String(B).padStart(4)}%${S>0?" &lt;&lt; REV":""}${v}
WRP  ${Bo(R)} ${String(Math.round(R*100)).padStart(4)}%${R>0?"  &gt;&gt; WARP":""}`,n.textContent=`HDG  ${String(Math.round(_.headingDeg)).padStart(4)} deg
PIT  ${String(Math.round(_.pitchDeg)).padStart(4)} deg`,a.textContent=`POS  X ${zo(_.pos.x)}  Y ${zo(_.pos.y)}  Z ${zo(_.pos.z)}`,c.textContent=`VEL ${String(Math.round(_.speed)).padStart(3)}`;const M=x?x.phase:"idle";if((M==="cutting"||M==="salvage")&&x&&x.object)if(l.style.display="",M==="cutting"){const H=x.integrity??1,L=Math.round(H*100);l.classList.add("firing"),l.innerHTML=`<span class="line">${x.firing?">> CUTTING <<":"-- CUT PAUSED --"}   DST ${String(Math.round(x.distance)).padStart(3)}u   INTEG ${Bo(H)} ${String(L).padStart(3)}%</span>`}else l.classList.add("firing"),l.innerHTML=`<span class="line">>> TRACTOR <<   DST ${String(Math.round(x.distance)).padStart(3)}u   HOLD R-CLICK TO REEL IN</span>`;else l.style.display="none";if(M==="cutting"){u.style.display="";const{html:H,label:L}=ov(x.gauge),z=x.gauge!=null&&Math.abs(x.gauge)<.4?"safe":x.gauge!=null&&Math.abs(x.gauge)<.7?"warn":"danger";u.innerHTML=`<span class="line">STAB ${H}  <span class="cursor ${z}">${L}</span></span>`}else u.style.display="none";p.style.display="none",_.docked?(h.style.display="",h.classList.add("docked"),h.classList.remove("docking"),h.textContent="[ DOCKED ]   PRESS  E  TO UNDOCK"):_.docking||_.undocking?(h.style.display="",h.classList.add("docking"),h.classList.remove("docked"),h.textContent=_.docking?">> DOCKING <<   AUTOPILOT":">> DEPARTING <<   AUTOPILOT"):_.canDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="PRESS  E  TO DOCK"):_.tooFastToDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="SLOW DOWN TO DOCK"):h.style.display="none"}return{update:w,resize:E,systemMessage:m,clearSystemMessage:f}}function hi(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}const Bl=100;function cv(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function zl(i){return String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function lv(){const i=document.getElementById("hud"),t=hi("div",null,"");t.id="journal";const e=hi("div",null,"");e.id="journal-full";const n=hi("div","jrn-panel",""),s=hi("div","jrn-head",""),r=hi("span","jrn-title","SHIP LOG"),o=hi("div","jrn-close","");s.append(r,o);const a=hi("div","jrn-list","");n.append(s,a),e.append(n),e.style.display="none";for(const _ of["pointerdown","pointermove","pointerup","wheel","contextmenu"])n.addEventListener(_,x=>x.stopPropagation());t.addEventListener("pointerdown",_=>{_.stopPropagation(),m(!0)}),o.addEventListener("pointerdown",_=>{_.stopPropagation(),m(!1)});for(const _ of["pointermove","pointerup","wheel"])t.addEventListener(_,x=>x.stopPropagation());i.append(t,e);const c=[];let l=0,u=!1;function p(_,x){const D=_.kind==="radio"?"&gt;&gt;":"&middot;";let R=`<span class="jrn-time">T+${cv(_.t)}</span><span class="jrn-tag">${D}</span><span class="jrn-msg">${zl(_.short)}</span>`;return x&&_.text&&_.text!==_.short&&(R+=`<div class="jrn-detail">${zl(_.text)}</div>`),R}function h(){const _=c.slice(-10);t.innerHTML=_.map(x=>`<div class="jrn-entry jrn-${x.kind}">${p(x,!1)}</div>`).join("")}function d(_=!1){const x=_||a.scrollHeight-a.scrollTop-a.clientHeight<4;a.innerHTML=c.length?c.map(D=>`<div class="jrn-entry jrn-${D.kind}">${p(D,!0)}</div>`).join(""):'<div class="jrn-empty">— no entries —</div>',x&&(a.scrollTop=a.scrollHeight)}function g(_,x){const D=typeof _=="string"?{short:_,text:null,kind:x||"info",code:null}:{short:_.short,text:_.text||null,kind:_.kind||x||"info",code:_.code||null};D.t=l,c.push(D),c.length>Bl&&c.shift(),h(),u&&d()}function E(_,x=Bl){const D=Math.max(0,c.length-x);for(let R=D;R<c.length;R++)if(c[R].code===_)return!0;return!1}function m(_){u!==_&&(u=_,e.style.display=_?"":"none",_&&d(!0))}function f(){m(!u)}window.addEventListener("keydown",_=>{_.key&&_.key.toLowerCase()==="j"?(_.preventDefault(),f()):_.code==="Escape"&&u&&m(!1)});function w(_){l+=_}return h(),{log:g,toggle:f,update:w,hasRecent:E,isOpen:()=>u}}const Ze=i=>i[Math.floor(Math.random()*i.length)],di=(i,t)=>i+Math.floor(Math.random()*(t-i+1)),Hl=["ore","raw ore","refined ore","iron ore","nickel-iron","copper ore","titanium ore","platinum ore","gold ore","silver ore","uranium ore","thorium ore","cobalt","tungsten","palladium","iridium","osmium","rhodium","bauxite","silicate sand","water ice","water","deuterium","helium-3","tritium","liquid hydrogen","liquid oxygen","liquid nitrogen","methane ice","ammonia","argon","xenon","neon","frozen volatiles","fuel cells","reactor cores","antimatter pods","fusion pellets","plasma capacitors","power cells","isotope batteries","solar film","scrap metal","alloy plating","hull plating","structural beams","sheet metal","composite panels","ceramic tiles","heat tiles","superalloy ingots","foamed aluminum","carbon fiber spools","machine parts","spare thrusters","drive couplings","pump assemblies","servo motors","heat exchangers","circuit boards","sensor modules","comm relays","nav beacons","survey drones","mining charges","cutting lasers","grapple arms","docking collars","airlock seals","pressure valves","superconductors","data cores","memory lattices","quantum chips","optical fiber","holo emitters","AI substrates","encrypted drives","navigation charts","foodstuffs","nutrient paste","grain","seed stock","hydroponics","fresh produce","algae blocks","protein vats","synth-meat","coffee beans","spices","dried rations","livestock embryos","frozen embryos","plant cuttings","fungal cultures","bee colonies","medical supplies","vaccines","antibiotics","blood plasma","organ cultures","gene therapies","surgical kits","stim packs","cryo-meds","passengers","colonists","tourists","contract laborers","refugees","a survey team","a relief crew","luxury goods","textiles","rare earths","gemstones","art (sealed crates)","antiques","vintage liquor","perfume base","silk","jewelry","coolant","lubricants","solvents","industrial acids","sealant foam","polymers","resins","ceramics","glass billets","fertilizer","rated explosives","propellant","oxygen candles","CO2 scrubbers","air filters","water reclaimers","ration bars","terraforming gear","atmosphere processors","soil bacteria","construction mechs","habitat modules","prefab shelters","solar arrays","wind turbines","salvage","derelict parts","scrapped drones","recovered black boxes","sealed crates","classified cargo","diplomatic pouches","unmarked containers","live specimens","seized contraband","quarantined goods"],Ho=["Tycho Relay","Kepler Station","Drift-Nine","the inner yards","the outer marker","Halcyon Dock","Meridian Platform","the refinery","Cold Harbor","Gantry Seven","Lagrange Hub","New Sutter","the foundry","Ostrava Ring","the deep field","Cradle Station","Pellucid Yards","the scrap line","Vesper Outpost","the jump gate","Beacon Echo","Far Dock","Ironside","the lower bays","the belt","Quayside","Helios Station","Perdition Reach","Anvil Yards","the Saltworks","Caldera Dock","Stillwater Ring","the Verge","Mariner Hub","Talon Outpost","the Bastion","Ember Platform","Hollow Point","the Spindle","Gossamer Dock","Karst Station","the Reliquary","Bishop Relay","the Maw","Tannhauser Gate","Solace Ring","the Drydocks","Caravan Point","Wreck Alley","the Sprawl","Lantern Station","Obsidian Yards","the Threshold","Pilgrim Dock","Harrow Ring","the Junkfields","Aurora Platform","Daedalus Hub","the Causeway","Greywater Station","Tarsus Relay","the Picket Line","Sable Dock","Verdant Ring","the Smelters","Highgate","Nyx Outpost","the Long Dark","Castellan Station","the Anchorage","Ridgeline Yards","Pell Station","the Freeport","Goliath Dock","the Reaches","Kessler Ring","the Boneyard","Mistral Platform","New Antioch","the Tessellate","Wayfarer Hub","the Cinder Belt","Ourania Station","the Trench","Provender Dock","Ashfall Ring","the Watchpost","Garrison Nine","the Sieve","Helion Yards","the Far Reaches","Selene Dock","the Quarantine Ring","Mercer Station","the Driftway","Cobalt Harbor","the Verdigris","Tycho Lower","Kepler High","the Gantries","Redoubt Station","the Marshalling Yards","Concord Dock","the Bight","Halberd Ring","the Spillway","Junctor Hub","the Outworks","Sentinel Platform","the Hollows","Calder Station","the Stacks","Wend Outpost","the Reef","Pannier Dock","the Lattice","Voss Relay","the Deadlanes","Hesperus Ring","the Coalsack","Branner Yards","the Estuary","Foundry Six","the Approaches","Marrow Dock","the Causey","Tindall Station"],Gl=["main drive","coolant loop","reactor","RCS thrusters","nav computer","life support","shield emitter","sensor array","comm array","gyros","fuel pump","heat sinks","port nacelle","starboard nacelle","inertial dampers","jump drive","docking clamps","gravity plating","primary capacitor","secondary capacitor","plasma injector","fuel mixer","reaction wheel","attitude jets","thermal regulator","radiator fins","oxygen recycler","CO2 scrubber","water reclaimer","power bus","backup battery","main bus","transformer coil","field generator","deflector dish","particle sink","warp coil","warp manifold","flux capacitor","magnetic bottle","containment field","antimatter trap","ion thruster","main injector","turbopump","heat pipe","cryo pump","condenser","sensor mast","lidar array","radar dish","optical scope","spectrometer","transponder","beacon transmitter","autopilot","flight computer","star tracker","horizon sensor","docking laser","grapple winch","cargo crane","airlock","pressure hull","blast door","escape pod bay","medbay","galley","crew quarters","observation deck","landing gear","undercarriage","keel","spine truss","solar wing","battery array","heat shield","ablative plating","point defense","tractor emitter","stabilizer fin","trim tab","ballast tank","distress beacon","gimbal mount","fuel scrubber","plasma vent","arc suppressor"],uv=["bearing two-seven-zero","bearing one-eight-zero","bearing zero-niner-zero","bearing three-three-zero","high to port","low to starboard","dead ahead","off the stern","up-spin","down-spin","coreward","rimward","bearing nil","bearing zero-four-five","bearing one-three-five","bearing two-two-five","bearing three-one-five","bearing zero-one-zero","bearing zero-six-zero","bearing one-two-zero","bearing one-five-zero","bearing two-one-zero","bearing two-four-zero","bearing three-zero-zero","bearing zero-three-zero","high to starboard","low to port","off the bow","off the port quarter","off the starboard quarter","directly above","directly below","astern","to port","to starboard","high overhead","below the keel","two points off the bow","three points to port","off the nose","trailing aft","crossing left to right","crossing right to left","closing fast","holding station","drifting astern","spinward","antispinward","sunward","shadowside","toward the cluster","toward the station","out past the marker","near the jump gate","along the belt plane","above the ecliptic","below the ecliptic","inbound","outbound","on an intercept line","low and closing","high and slow","fading on the scope"];function hv(i,t){const e={cs:()=>t,cs2:zr,cs3:zr,cargo:()=>Ze(Hl),cargo2:()=>Ze(Hl),dest:()=>Ze(Ho),dest2:()=>Ze(Ho),origin:()=>Ze(Ho),system:()=>Ze(Gl),system2:()=>Ze(Gl),bearing:()=>Ze(uv),lane:()=>di(1,9),corridor:()=>di(1,6),bay:()=>di(1,24),min:()=>di(2,45),queue:()=>di(2,9),count:()=>di(2,9),hops:()=>di(2,6)};return i.replace(/\{(\w+)\}/g,(n,s)=>e[s]?String(e[s]()):n)}const dv=["Long haul. Could use a real cup of coffee out here.","{cs2}, you copy? Been dead quiet on this band.","Third run this cycle. Eyes are starting to cross.","Anybody got the scores from the inner yards?","Tell {cs2} they still owe me a drink at {dest}.","Beautiful view of the cluster from up here, I'll give it that.","Halfway through the shift and nothing but static.","{cs2}, nice burn on that exit. Showing off again?","Remind me why I took the night rotation.","Somebody left the galley a mess. Again.","Same rock, same run, same paycheck.","You hear they're rerouting traffic past {dest}?","Sensors are picking up a whole lot of nothing.","Forty cycles to retirement. Not that I'm counting.","{cs2}, save me a docking slot, would you?","My nav says {dest}. My gut says lunch.","Quiet out here tonight. I like it that way.","Whoever calibrated these gyros owes me an apology.","Counting asteroids to pass the time. Lost track at four hundred.","New kid keeps calling it 'up'. There's no up out here.","Coffee machine's down. This is a genuine emergency.","Long way from home, this run.","{cs2}, that you on my scope or just more debris?","Another day, another belt. Same as the last.","Tell control the corridor markers are drifting again.","If I see one more cargo manifest I'm spacing myself.","Music's the only thing keeping me awake out here.","Pretty sure my co-pilot's asleep. Lucky him.","{cs2}, you still on for cards when we dock at {dest}?","Sun's coming up over the cluster. Worth the trip alone.","Stars look different from out past the marker. Colder, somehow.","Forgot my lucky wrench at {dest}. Whole run feels off now.","Three weeks on this tub and the recycler still smells like feet.","Anyone else's nav humming a B-flat, or is it just mine?","I swear this corridor's longer than it was yesterday.","Caught a meteor shower {bearing}. Free fireworks.","Tell the kids I'll be home by the next resupply. Probably.","Forty thousand klicks of nothing and a great playlist.","{cs2}, your strobes are out. Just so you know.","Logged my ten-thousandth hour today. Nobody clapped.","Coffee, course, cargo. The three Cs. In that order.","Drifting through the quiet part of the run. Love it.","Somebody's playing opera on the open channel again.","My back's been telling me to retire for six years now.","Cluster's pretty this time of cycle. Don't tell anyone I said so.","{cs2}, did you ever get that rattle in your nacelle fixed?","Hauling for {dest} again. Place never changes.","Out here long enough, you start naming the asteroids.","This far out, even the static sounds friendly.","Saw a long-hauler that must've been two klicks bow to stern.","Co-pilot bet me we'd beat schedule. Co-pilot's broke now.","Nothing on the scope but us and the dark. Suits me.","Tell {cs2} the customs line at {dest} is a nightmare today.","Eighteen hours in and the only excitement was a sneeze.","Whoever designed these seats never sat in one.","Burned past {dest} once without stopping. Best day of my career.","If the reactor hums any louder I'll have to charge it rent.","Spotted an old wreck {bearing}. Gave it a respectful nod.","Same three songs for two thousand klicks. Send help.","{cs2}, you awake over there? Your transponder's the only thing talking.","Cargo's quiet, drive's smooth, life is good. For now.","Going to miss this view when they automate us all.","Heard {dest} finally fixed their gravity ring. Believe it when I dock.","My nav computer and I are no longer on speaking terms.","Out here you learn to like your own company.","Passed a tourist liner. They waved. I waved back.","Twelve more runs and I'm buying a little ice moon somewhere quiet.","Somebody on this band's chewing way too close to their mic.","Clearest sky I've seen all cycle. Not a speck of dust.","{cs2}, race you to the marker. Loser buys at {dest}.","Reactor's purring like it actually likes me today.","Been talking to my plants again. They're better listeners than control.","Cargo bay's colder than my ex. And just as empty.","Logged a perfect burn. Nobody saw it. Story of my life.","Out past the belt the silence has a sound to it.","Tell {dest} to keep the lights on, I'm running late.","Spent the last hour watching dust glitter in the running lights.","If I had a credit for every klick, I'd still be out here.","Half the fun of this job is the half there isn't any.","{cs2}, your wake's all over my approach. Tidy up.","Recycler's making that noise again. The ominous one.","Going to name this stretch of nothing after myself.","Slow run today. I've reorganized the toolkit twice.","You can almost hear the cluster turning out here.","Picked the scenic route. Regret nothing.","Captain's asleep, so technically I'm in charge. Don't tell.","Another sunrise over {dest}. They never get old.","Twenty years out here and the dark still gets me sometimes.","Just me, the hum, and a thermos of something resembling coffee.","{cs2}, that was a clean dock. Buying you a round at {dest}.","Lost a glove to the airlock. Floating out there forever now.","If this run gets any quieter I'll start talking to the cargo.","Best part of the job? Nobody up here to tell me I'm wrong.","Worst part? Nobody up here at all, some nights.","Trimmed a full minute off my usual. Small victories.","Cluster's throwing shadows like a clock today.","Tell the relief crew the heater in bunk two is a liar.","Drive's smooth, scope's clear, and the coffee's almost warm. Perfect.","{cs2}, you ever just cut the lights and drift a while?","Heard a long-hauler sing to themselves on the dead channel. Beautiful, actually.","Six souls aboard, five asleep, one talking to strangers on the radio.","Spotted the station lights from way out. Feels like coming home.","Marking another quiet shift in the log. The good kind.","Dust on the canopy again. Out here it's basically weather.","If you're listening, {cs2}, you snore on an open channel."],fv=["Control, requesting departure clearance, lane {lane}.","Ops, requesting vector to {dest}.","Holding short of the corridor, awaiting clearance.","Requesting priority docking, running behind schedule.","{cs2}, hold your position, I've got crossing traffic.","{cs2}, you are drifting into my lane, come starboard.","Control, confirm I am cleared through corridor {corridor}.","Stacking up out here, request a hold vector.","Traffic, wide load on approach, give me room.","Requesting handoff to station approach.","{cs2}, after you on the corridor, I'll follow you in.","Control, my transponder's glitching, advise.","Lane {lane} is backed up, requesting reroute.","On final, gear warm, clamps ready.","Breaking off approach, going around.","Squawking ident, confirm you have me.","Control, requesting a slot at {dest}, ETA {min} minutes.","Request permission to cross corridor {corridor} outbound.","Ops, am I cleared to spin down in the dock perimeter?","Requesting a tug, my clamps are sluggish.","Control, traffic {bearing}, request advisory.","{cs2}, reduce your closure, you're inside my bubble.","Requesting fuel reservation at the ring, low on reserves.","Control, declaring minimum fuel, request direct routing.","Holding at the marker, request sequencing number.","Ops, my nav's reading two corridors, which is live?","Request a wider berth on approach, hauling overlength.","Control, lost the localizer, request vectors to {dest}.","{cs2}, confirm you see me, closing {bearing}.","Requesting clearance to test thrusters in the safe lane.","Ops, requesting hold until that debris {bearing} clears.","Control, request expedited departure, time-critical cargo.","Requesting handoff, leaving your airspace {bearing}.","{cs2}, slow your roll, the clamps aren't going anywhere.","Control, I'm number how-many for the dock?","Request altitude... well, you know what I mean. Going up-spin.","Ops, confirm corridor {corridor} markers are lit, I've got nothing.","Requesting clearance to jettison empty pods in the safe zone.","Control, my squawk's intermittent, paint me on radar?","Requesting straight-in approach, no time for the pattern.","{cs2}, you're cleared ahead of me, I'll hold.","Ops, request a hold, sorting a cargo shift before approach.","Control, declaring a soft alert, requesting a clear lane.","Requesting clearance to {dest}, manifest filed.","{cs2}, give way, I'm constrained by my draft on this vector.","Control, confirm the queue, I've been holding {min} minutes.","Requesting a quieter band, this one's jammed with chatter.","Ops, am I cleared to drop the grapple and take that salvage?","Control, request a flash of the approach lights, I'm half blind out here.","Requesting permission to shadow {cs2} through the corridor."],pv=["Hauling {cargo} to {dest}, ETA {min} mikes.","Outbound from {origin} with a hold full of {cargo}.","Light load this run, just {cargo} for {dest}.","Manifest says {cargo}. Smells more like {cargo2}.","Passing the outer marker, {cargo} aboard, all green.","Heavy with {cargo}, watch my wake on the corridor.","{cargo} delivery for {dest}, who is signing for it?","Running {cargo} to the deep field, back in {min}.","Cargo is shifting in the hold, slowing to secure it.","Empty run home, dropped the {cargo} at {dest}.","Carrying {cargo}, handle with care on the clamps.","Inbound, {cargo} for the refinery, ETA {min} minutes.","Picked up {cargo} from {origin}, bound for {dest}.","Overweight on {cargo} again, the yard will love that.","This {cargo} run doesn't pay enough, I'll tell you that.","Sealed manifest. Don't ask, I'm not telling.","Time-sensitive {cargo}, requesting the fast lane.","Two pallets of {cargo} short. Someone's getting a call.","{cargo} secured, all green, proceeding to {dest}.","Hot cargo, {cargo}, keep your distance on approach.","Full hold of {cargo}, riding low and slow to {dest}.","Manifest got swapped, I'm carrying {cargo}, not {cargo2}. Again.","Dropping {cargo} at {dest}, then deadheading to {dest2}.","Fragile load, {cargo}, no fast burns this trip.","{cargo} for the colony at {dest}. They've been waiting weeks.","Customs flagged my {cargo}. This is going to take a while.","Hauling {cargo} one way, {cargo2} back. Never an empty leg.","{cargo} aboard, transponder logged, clean run so far.","Diverting to {dest2}, the {cargo} buyer changed their mind.","Refrigerated load of {cargo}, can't afford a power blip.","Bulk {cargo}, low margin, high mileage. The usual.","Carrying {cargo} for {dest}. Don't love what's in the back, honestly.","Manifest reads {cargo}. Weight says otherwise. Not my problem.","Loaded {cargo} at {origin}, scales were generous. Lucky me.","Priority {cargo}, jumping the queue if they'll let me.","{cargo} run to {dest}, then I'm off rotation for a cycle.","Hold's pressurized, {cargo} stable, all readings nominal.","Picked up extra {cargo} at {origin}. Tight squeeze in the bay.","Spilled a crate of {cargo} in the hold. Cleaning that up for hours.","Live cargo this run, easy on the gees for the {cargo}.","{cargo} for {dest}, insured to the rivets. Wonder why.","Three pallets of {cargo}, one's leaking. Wonderful.","Hauling {cargo}, but the real money's the {cargo2} underneath.","Clean manifest, {cargo} to {dest}, nothing to declare.","{cargo} bound for {dest}. Slower than I'd like with this load.","Topped off with {cargo} at {origin}, hold's at capacity.","Carrying {cargo}. If it ticks, that's normal. Probably.","Diverted my {cargo} run through {dest2}, adds an hour.","Hold full of {cargo}, and the buyer's already haggling over the channel.","{cargo} delivered, signed off, deadheading home empty and happy."],mv=["Reporting a {system} fault, dropping to half burn.","{system} is acting up, nursing it to {dest}.","Reactor running hot, requesting priority docking.","Lost the {system}, switching to backups.","{system} pressure in the yellow, keeping an eye on it.","Got a flutter in the {system}, anyone heard that before?","Venting heat, give me a wide berth.","{system} recalibrating, my heading may wander, sorry.","Down a thruster, handling is sloppy, watch out.","{system} failure, soft alert, no assist needed yet.","Coolant is low, throttling back before something melts.","My {system} is held together with tape and prayers.","Patched the {system} mid-burn. Don't recommend it.","Sensor ghosting again, my scope is half junk.","Gyros tumbling, stand by while I sort this out.","Fuel tighter than I'd like, going easy on the burn.","{system} threw a fault code I've never seen. Love that.","Lost pressure in the {system}, isolating it now.","My {system}'s been groaning since {origin}. Today might be the day.","Cycling the {system}, expect my lights to flicker.","{system} overheating, popping the radiators, mind the glare.","Backup {system} engaged, primary's cooked.","Took a micrometeorite to the {system}. Could be worse.","{system}'s drawing too much power, shedding nonessentials.","Rerouting around a dead {system}, performance is going to suffer.","My {system} and my {system2} are both complaining. Great.","Hairline crack in the {system}, watching it like a hawk.","{system} keeps tripping the breakers. Third time this hour.","Drive's surging, suspect the {system}, throttling back.","{system} maintenance overdue by a thousand hours. Don't judge me.","Limping in on a bad {system}, request a gentle approach.","{system} froze up, literally, condensation got in.","Smelled something burning near the {system}. That's never good.","Lost telemetry on the {system}, flying it by feel.","{system} recalibrated, back to full performance, sorry for the chatter.","Vibration in the {system} I can feel in my teeth.","{system} alarm went off, turned out to be a loose sensor. Heart attack averted.","Manually overriding the {system}, autopilot's confused.","My {system}'s running on a part I printed myself. Wish me luck.","{system} degraded, declaring reduced maneuverability.","Reactor scram on the {system} fault, restarting now, stand clear.","{system}'s fine, it's the warning light that's broken. I think.","Bled the {system}, should ride smoother now.","Lost half my {system} output, still flyable, just slow.","{system}'s been stable for an hour. Watch me jinx it.","Coolant leak near the {system}, sealing the bulkhead.","{system} acting possessed, power-cycling the whole rack.","Replaced the {system} at {origin} and it's already whining.","Running the {system} cold to save it. Long, careful burn.","{system} back online. Crisis averted. Mostly."],gv=["All traffic, debris {bearing}, advise you divert.","Heads up, rock drift {bearing}, and it's moving.","Micrometeorite stream {bearing}, shields up.","Solar activity climbing, recommend topping your shielding.","Watch the slag cloud off the refinery, scopes don't love it.","Radiation spike {bearing}, button up your hulls.","Debris from an old wreck {bearing}, give it room.","Dust is thick {bearing}, visuals are useless out there.","Caution, tumbling container adrift {bearing}.","Gravimetric shear near the cluster, mind your trim.","Flare warning from the deep field, batten down.","Something big and unlit {bearing}, all traffic stay sharp.","Ice fragments {bearing} peppered my hull, watch yourselves.","Charged dust {bearing}, comms crackling, expect noise.","Frozen propellant cloud {bearing}, kills your sensors, route around.","Magnetic anomaly {bearing}, my compass is spinning, heads up.","Unlogged ship {bearing}, no transponder, keep your distance.","Sensor blind spot {bearing} where the dust's thickest.","Hot debris field {bearing}, still glowing, do not transit.","Slow tumbler {bearing}, looks like a shed cargo pod.","Watch for backscatter {bearing}, the cluster's lighting up the dust.","Loose mining charge adrift {bearing}. Do not, repeat, do not nudge it.","Heavy traffic stacking {bearing}, expect erratic vectors.","Wreckage spreading {bearing}, somebody lost a load.","Static storm rolling in {bearing}, comms about to get rough.","Plasma wash from a warp exit {bearing}, give it a minute to clear.","Drifting fuel bladder {bearing}, ruptured, slick on the sensors.","Caution, derelict tumbling {bearing}, no lights, no squawk.","Particle density rising {bearing}, throttle back through it.","Sharp debris {bearing}, took a scratch myself, slow down.","Solar wind gusting {bearing}, trim for it or you'll yaw.","Unsecured cargo crane swinging on a derelict {bearing}.","Cold cloud {bearing} eating my thermal sensors, fly visual.","Rock the size of a tug {bearing}, slow roll, plenty of warning.","Comms shadow {bearing} behind the big asteroid, you'll drop out.","Glittering debris {bearing}, pretty, but it'll pit your canopy.","Venting wreck {bearing}, pushing itself around unpredictably.","Dense pack of pebbles {bearing}, too small to dodge, just slow down.","Heat bloom {bearing}, possible reactor breach on a derelict, avoid.","Whole corridor's hazy {bearing}, somebody kicked up the dust."],_v=["Mayday, mayday, {system} failure, requesting immediate assist.","Pan-pan, pan-pan, lost main drive, drifting {bearing}.","Declaring an emergency, fire in the {system} bay.","Hull breach, sealing compartments, requesting rescue.","Losing life support, anyone in range, please respond.","Mayday, collision with debris, venting atmosphere.","Engines dead, drifting toward the cluster, need a tow now.","Mayday, {system} explosion, casualties aboard, need medical.","Pan-pan, reactor scrammed, on batteries, time critical.","Lost all thrust, tumbling {bearing}, can't stabilize.","Cabin pressure dropping, on suits, requesting urgent docking.","Mayday, struck an unlit object {bearing}, hull compromised.","Power's failing across the board, sending position now.","Pan-pan, {system} and {system2} both down, limited control.","Fire suppression failed, evacuating to the {system} bay.","Mayday, fuel breach, isolating, request foam on the pad.","Drifting powerless {bearing}, any vessel, please acknowledge.","Declaring emergency, navigation lost, flying blind.","Hull integrity at minimum, requesting nearest dock, any port.","Pan-pan, jammed clamps mid-undock, hanging off the ring.","Mayday, runaway burn, can't cut the {system}, clear my vector.","Coolant gone, reactor climbing, abandoning if it doesn't hold.","Lost the {system}, can't slow for approach, request a clear lane.","Crew member down, requesting a medical bay on arrival.","Mayday, micrometeorite swarm, multiple breaches, mapping damage.","Stuck in a flat spin {bearing}, RCS unresponsive, need talk-down.","Pan-pan, lost cabin heat, temperature dropping fast.","Emergency, cargo of {cargo} unstable, considering jettison.","Mayday, structural failure at the {system}, hull flexing.","Adrift and dark {bearing}, conserving power, monitoring this channel."],vv=["Anyone else getting that signal {bearing}? ...Probably nothing.","Picking up a transponder that's been dead for twenty years.","Ghost contact {bearing}, gone before I could lock it.","Old beacon out here still transmitting. Nobody knows why.","Cold spot {bearing} my sensors won't explain.","Heard a voice on the dead channel again. I keep that to myself.","Same derelict drifts past every cycle. Never the same heading twice.","Something past the deep field is answering my pings.","Got a navigation chart with a station marked that doesn't exist.","The cluster shadow moved wrong just now. Trick of the light. Has to be.","Picked up a distress call dated next week. Filed it. Said nothing.","There's a hull out here older than the colony. Nobody salvages it.","My star tracker locked onto a star that isn't on any map.","Heard the long-haulers won't transit {bearing} after dark. Now I get it.","Found a logbook floating {bearing}. Last entry's just one word, repeated.","Signal's counting down in a language the computer won't translate.","Same coordinates keep showing up in my nav cache. I never entered them.","There's a derelict that hails YOU first. Don't answer it.","Old timers call this stretch the Quiet. Now nobody's talking.","My reflection in the canopy waved a half-second late just now.","Beacon Echo's been answering pings it shouldn't be able to hear.","The dust out here remembers shapes. Saw a face in it for a second.","Caught a broadcast of my own callsign. I never sent it.","There's a wreck {bearing} with its lights still on. No power source.","Compass points to nothing in particular and holds there. Always the same nothing.","Heard singing on the carrier wave. Crew says it's interference. Crew's wrong.","An empty escape pod's been shadowing me for three runs. Door's open.","The jump gate hummed when nothing went through it.","Found a manifest for a ship that was never built. Cargo: us.","Out past the marker, the stars blink in order. Like a code. Like a count.","My grandfather flew this route. Says the Quiet's been getting closer.","Picked up a lullaby on a frequency that doesn't carry sound.","There's a station on the old charts called Home. No coordinates. Just Home.","Saw my own running lights {bearing}, ahead of me, on my exact heading.","The derelict's name plate keeps changing. Photographed it twice. Two names.","Something out here keeps the marker buoys warm. They should be ice cold.","Got a reply to a message I haven't decided to send yet.","The cluster's count of asteroids went up by one. There's no new one. I checked.","They decommissioned Beacon Echo a decade ago. It just wished me safe travels.","Every cycle, {bearing}, for one second, the radio plays the sound of a door closing."],xv=["All inbound traffic, hold for sequencing.","Docking queue is {queue} deep, expect delays.","Bay {bay} is now open for approach.","Bay {bay} closed for maintenance, reroute.","Refueling operations nominal at the ring.","Customs inspection in progress, bay {bay}.","Corridor {corridor} is now the active approach lane.","All vessels, reduce speed within the dock perimeter.","Quarantine protocol active on bay {bay}.","Tug services delayed, manual docking advised.","Cargo backlog at the yards, deliveries holding.","Approach lights lit, corridor {corridor} cleared for sequencing.","Shift rotation underway, expect brief comm gaps.","Power conservation in effect, non-essential systems offline.","Free berth open at bay {bay}, first come first served.","Outbound traffic, hold at the marker until corridor {corridor} clears.","Bay {bay} reserved for priority cargo, all others stand by.","Ring rotation adjusting, expect minor gravity fluctuations.","Fuel reserves low, rationing burns to essential traffic.","All traffic, transponders mandatory inside the perimeter.","Sequencing inbound flights, average wait {min} minutes.","Bay {bay} cleared, next in queue you are go for approach.","Maintenance crew on the hull, all docking holds at corridor {corridor}.","Customs sweep complete, normal operations resuming.","Dock master reports {queue} vessels in the pattern.","All vessels maintain station-keeping, traffic is heavy.","Lighting reduced on the upper ring, conserve and dock by instruments.","New arrivals, squawk ident and hold for a slot.","Bay {bay} flooding for pressure test, keep clear.","Corridor {corridor} markers recalibrating, fly the beacons not the chart.","Tug {cs2} dispatched to assist inbound traffic.","All clamps cycling for inspection, brief docking pause.","Cargo handlers on shift change, loading resumes shortly.","Priority lane open corridor {corridor} for medical traffic only.","Ring power on backup, expect flicker, docking unaffected.","Inbound flights, slow to perimeter speed or be held.","Bay {bay} occupant overstaying, dispatching a notice.","Approach radar degraded, pilots maintain visual separation.","All traffic, hold the chatter, emergency channel must stay clear.","Docking fees updated, see the bulletin before departure.","Sequencing reset, all inbound re-squawk for new numbers.","Bay {bay} now serving overlength vessels, others use {corridor}.","Gravity ring at reduced spin for repairs, watch your footing on arrival.","Outbound corridor {corridor} clear, departures are go.","Resupply barge docking, all traffic give the freight lane a wide margin.","Pressure doors on bay {bay} sticking, crews advised, allow extra time.","All vessels, the perimeter speed limit is enforced today, no exceptions.","Holding pattern is full, new arrivals divert and re-approach in {min}.","Night cycle lighting active, approach lights at full for your benefit.","Dock control rotating to the relief team, expect a brief handover."],yv=["Traffic advisory: debris {bearing}, divert as needed.","Solar weather advisory in effect, shields up on approach.","Beacon alignment in progress, navigation may degrade.","Unscheduled vessel logged {bearing}, monitoring.","Long-range scan complete, sector nominal.","Emergency channel test, disregard.","Gravimetric anomaly logged near the cluster, advise caution.","Lost contact with an outbound hauler {bearing}, investigating.","Radiation advisory: levels elevated {bearing}, limit exposure.","All traffic, a flare is forecast within the hour, plan accordingly.","Advisory: dust density rising {bearing}, expect reduced sensor range.","Unidentified contact {bearing}, vessels report any visual.","Navigation advisory: corridor {corridor} markers offline, fly with care.","Weather: charged particle storm {bearing}, comms may degrade.","Advisory, derelict adrift {bearing}, salvage crews notified, keep clear.","Search and rescue active {bearing}, all traffic yield to SAR vessels.","Advisory: micrometeorite activity up {bearing}, shields recommended.","Sector patrol passing through {bearing}, expect scanning sweeps.","Advisory, a vessel is declaring emergency {bearing}, clear the lanes.","Notice: jump gate cycling {bearing}, expect transient interference.","Advisory: temperature anomaly {bearing}, sensors may misread.","All traffic, comms relay {bearing} is down, expect dead zones.","Advisory: cargo spill reported {bearing}, navigate around the field.","Notice: a long-hauler reports a ghost contact {bearing}. Logged for review.","Advisory, the belt plane is congested today, transit with caution.","Weather update: solar activity easing, advisory lifted shortly.","Advisory: unregistered beacon transmitting {bearing}, do not rely on it.","All vessels, a quarantine vessel is inbound, expect a holding pattern.","Advisory: sensor mirage reported {bearing}, confirm contacts visually.","Notice: routine patrol requests all transponders remain active.","Advisory, debris reentry into the cluster {bearing}, expect bright flashes.","Long-range advisory: traffic surge expected from {dest}, plan holds.","Advisory: a tug has gone silent {bearing}, last seen towing salvage.","Notice: navigation database update available, sync before departure.","Advisory, gravitational lensing {bearing} may distort star fixes.","All traffic, an old distress beacon is looping {bearing}. Source confirmed derelict.","Advisory: thermal bloom {bearing}, possible reactor venting, stay clear.","Notice: the outer marker buoy is drifting, recalibrating its position.","Advisory, pirate activity rumored {bearing}, keep transponders honest.","Final advisory of the cycle: sector quiet, safe travels, all vessels."],Mv=["Shuttle, you are coming in too fast. Reduce speed in the station zone.","Inbound shuttle, slow down. You're over the perimeter speed limit.","Ease off the throttle, shuttle, you're approaching far too quickly.","Shuttle, check your speed. This is a controlled zone, not a racetrack.","Reduce velocity immediately, you're entering the dock perimeter too hot.","Slow it down, shuttle. We'd like the station to stay in one piece.","Shuttle, your closure rate is excessive. Bleed off some speed.","Throttle back, shuttle. You're well above safe approach speed.","Control to shuttle, you are too fast for this proximity. Decelerate now.","Shuttle, kill your speed before you reach the ring. Last warning.","Cut your velocity, shuttle, you're a hazard at that pace.","Shuttle, the perimeter has a speed limit and you're shredding it. Slow down."],Sv=["Shuttle, you just struck the station. What in the void are you doing?","That was a collision, shuttle. Watch where you're flying!","You hit us, shuttle. Pull back before you do more damage.","Control to shuttle, you've made contact with the structure. Knock it off.","Are you trying to dock or demolish us? Back off, shuttle.","Shuttle, that's a hull strike on the station. Get clear, now.","You scraped the ring, shuttle. There's paperwork for this, you know.","Collision alert, the shuttle made contact. Steady your approach!","Shuttle, hands off the station! Maintain your distance.","That impact is going on your record, shuttle. Fly straight.","You clipped us, shuttle. The dock crew is not amused.","Shuttle, cease ramming the station. This is not a drill."];function Ev(){return Ze(Mv)}function bv(){return Ze(Sv)}const wv=[{hud:"WARP INHIBITED — OBSTACLE AHEAD",voice:"Warp inhibited. Obstacle ahead."},{hud:"WARP LOCKED — OBSTACLE IN PATH",voice:"Cannot engage warp. Object in our path."},{hud:"WARP BLOCKED — CLEAR THE HEADING",voice:"Warp blocked. Clear the heading first."}],Tv=[{hud:"DROPPING OUT OF WARP — PROXIMITY",voice:"Proximity alert. Dropping out of warp."},{hud:"WARP ABORTED — OBSTACLE NEAR",voice:"Obstacle nearby. Aborting warp."},{hud:"WARP DISENGAGED — OBJECT CLOSE",voice:"Disengaging warp. Object too close."}];function Av(){return Ze(wv)}function Rv(){return Ze(Tv)}const Cv=[{w:30,t:dv},{w:16,t:fv},{w:18,t:pv},{w:12,t:mv},{w:10,t:gv},{w:3,t:_v},{w:4,t:vv}],Pv=[{w:60,t:xv},{w:40,t:yv}];function Dv(i){let t=0;for(const n of i)t+=n.w;let e=Math.random()*t;for(const n of i)if((e-=n.w)<=0)return n;return i[i.length-1]}function Lv(i){const t=i.station?Pv:Cv,e=Ze(Dv(t).t);return`${i.callsign}: ${hv(e,i.callsign)}`}const Vl={type:"change"},fc={type:"start"},Yu={type:"end"},vr=new Us,Wl=new Wn,Iv=Math.cos(70*ee.DEG2RAD),Ee=new P,We=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class Ku extends u0{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Xe,this._lastTargetPosition=new P,this._quat=new Xe().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tl,this._sphericalDelta=new Tl,this._scale=1,this._panOffset=new P,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new P,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uv.bind(this),this._onPointerDown=Nv.bind(this),this._onPointerUp=Ov.bind(this),this._onContextMenu=Vv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=Hv.bind(this),this._onTouchMove=Gv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=kv.bind(this),this._interceptControlDown=Wv.bind(this),this._interceptControlUp=Xv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vl),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ee.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Iv?this.object.lookAt(this.target):(Wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(Wl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(Vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Uv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ov(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yu),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Fv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(fc)}function kv(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(fc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yu))}function zv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Hv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(fc)}function Gv(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function Vv(i){this.enabled!==!1&&i.preventDefault()}function Wv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qv=8191130,Yv=10479871,Xl=3108420,ql=16757322,Kv=16739029,xr=188,fi=1e7;function jv(i,t,e,n,s=()=>!1,r=()=>{}){const o=document.getElementById("hud"),a=Math.min(window.devicePixelRatio||1,2),c=i.cluster,l=i.asteroids,u=document.createElement("div");u.id="minimap";const p=document.createElement("div");p.className="mini-label",p.textContent="NAV";const h=document.createElement("div");h.id="mini-close",h.textContent="×",u.append(p,h),o.append(u);const d=new sc({antialias:!0,alpha:!0});d.setPixelRatio(a);const g=d.domElement;u.appendChild(g);const E=new oc,m=new He(45,1,1,2e5),f=ee.degToRad(m.fov),w=c.radius*80,_=80,x=w/2,D=new Oe;function R(k,et){const ut=new l0(w,_,Xl,Xl);ut.material.transparent=!0,ut.material.opacity=.05,k==="x"?(ut.rotation.z=Math.PI/2,ut.position.x=et*x):k==="z"?(ut.rotation.x=Math.PI/2,ut.position.z=et*x):ut.position.y=et*x,D.add(ut)}for(const k of["x","y","z"])R(k,-1),R(k,1);E.add(D);const S=new Float32Array(l.length*3),b=new Me;b.setAttribute("position",new Ge(S,3));const B=new Cs({color:qv,size:Math.max(8,c.radius*.06),sizeAttenuation:!0,transparent:!0,opacity:.95}),v=new kr(b,B);v.frustumCulled=!1,E.add(v);const M=new Oe,G=Math.max(16,c.radius*.09),H=new Ie(new xn(G*.42,G,12),new xi({color:Yv}));H.rotation.x=-Math.PI/2,M.add(H),E.add(M);let L=null;if(e){L=new Oe;const k=e.radius*.55,et=new Ie(new pn(k,k*.1,8,24),new xi({color:ql})),ut=new Ie(new Je(k*.28,12,12),new xi({color:ql}));L.add(et,ut),L.position.copy(e.center),L.frustumCulled=!1,E.add(L)}let z=null,N=null;if(n&&n.ships.length){N=new Float32Array(n.ships.length*3).fill(fi);const k=new Me;k.setAttribute("position",new Ge(N,3));const et=new Cs({color:Kv,size:Math.max(10,c.radius*.07),sizeAttenuation:!0,transparent:!0,opacity:.95});z=new kr(k,et),z.frustumCulled=!1,E.add(z)}const U=new Ku(m,g);U.enableDamping=!0,U.dampingFactor=.08,U.enablePan=!1,U.rotateSpeed=.9,U.zoomSpeed=.9,U.enabled=!1;const I=new P(0,1,0);function q(k){m.up.copy(k),U._quat.setFromUnitVectors(k,I),U._quatInverse.copy(U._quat).invert()}let ot=!1,ht=xr,Nt=xr;const qt=new P,Y=new P,st=new P,ft=new Xe,at=new P;function Pt(k){return at.copy(k).sub(t.position).applyQuaternion(ft),Math.abs(at.x)<=x&&Math.abs(at.y)<=x&&Math.abs(at.z)<=x}function Dt(){ot?(ht=window.innerWidth,Nt=window.innerHeight):(ht=xr,Nt=xr),d.setSize(ht,Nt,!1),g.style.width=ht+"px",g.style.height=Nt+"px",m.aspect=ht/Nt,m.updateProjectionMatrix(),d.setClearColor(132620,ot?1:.5)}Dt();function It(){let k=t.position.distanceTo(c.center)*.6+c.radius;return e&&(k=Math.max(k,t.position.distanceTo(e.center)*.6+e.radius)),k/Math.sin(f*.5)}function Rt(){const k=m.position.distanceTo(t.position);M.scale.setScalar(ee.clamp(k*.003,.5,5))}function W(){qt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),Y.set(0,1,0).applyQuaternion(t.quaternion),m.up.copy(Y),m.position.copy(t.position).addScaledVector(qt,It()),m.lookAt(t.position)}function A(k){ot=k,u.classList.toggle("expanded",k),r(k),Dt(),k?(U.target.copy(t.position),qt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),st.set(0,1,0).applyQuaternion(t.quaternion),q(st),m.position.copy(t.position).addScaledVector(qt,It()),U.enabled=!0,U.update()):U.enabled=!1}u.addEventListener("pointerdown",k=>{k.stopPropagation(),!s()&&(ot||A(!0))}),h.addEventListener("pointerdown",k=>{k.stopPropagation(),!s()&&A(!1)}),window.addEventListener("keydown",k=>{if(k.code==="Escape"&&ot){A(!1);return}if(k.key&&k.key.toLowerCase()==="m"){if(s())return;A(!ot)}});function rt(){ft.copy(t.quaternion).invert();for(let k=0;k<l.length;k++){const et=l[k].position;Pt(et)?(S[k*3]=et.x,S[k*3+1]=et.y,S[k*3+2]=et.z):(S[k*3]=fi,S[k*3+1]=fi,S[k*3+2]=fi)}if(b.attributes.position.needsUpdate=!0,z){const k=n.ships;for(let et=0;et<k.length;et++)if(k[et].active&&Pt(k[et].group.position)){const ut=k[et].group.position;N[et*3]=ut.x,N[et*3+1]=ut.y,N[et*3+2]=ut.z}else N[et*3]=fi,N[et*3+1]=fi,N[et*3+2]=fi;z.geometry.attributes.position.needsUpdate=!0}L&&(L.visible=Pt(e.center)),M.position.copy(t.position),M.quaternion.copy(t.quaternion),D.position.copy(t.position),D.quaternion.copy(t.quaternion),ot?(p.textContent="NAVIGATION — DRAG rotate · WHEEL zoom",m.up.copy(st),U.target.copy(t.position),U.update()):(p.textContent="NAV",W()),Rt(),d.render(E,m)}function it(){Dt()}return{update:rt,resize:it}}function Zv(){const i=document.createElement("div");i.id="cursor",i.innerHTML='<svg width="27" height="27" viewBox="0 0 30 30" aria-hidden="true"><path d="M2 2 L3 25 Q 8 18 19 18 Z" fill="rgba(124,252,154,0.22)" stroke="#7cfc9a" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',document.body.appendChild(i);let t=!1;function e(){i.style.opacity=t&&!document.body.classList.contains("dragging")?"1":"0"}function n(o){i.style.transform=`translate(${o.clientX-1.8}px, ${o.clientY-1.8}px)`,t=!0,e()}window.addEventListener("pointermove",n,{passive:!0,capture:!0});function s(){t=!1,e()}return document.addEventListener("mouseleave",s),window.addEventListener("blur",s),new MutationObserver(e).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{}}function $v(){const i=document.createElement("div");return i.id="crt",i.setAttribute("aria-hidden","true"),document.body.appendChild(i),document.body.classList.add("crt"),{}}const Jv=[["L-CLICK + MOVE","steer"],["W / S","thrust fwd / rev (release = ease back to 0)"],["L-SHIFT","toggle throttle LOCK (hold speed on release)"],["A / D","roll"],["X","cut engines"],["R-CLICK / SPACE","mine / tractor (hold)"],["MOUSE-X (cutting)","stability gauge"],["E","dock / undock"],["M","nav map"],["J","ship log"]],Yl=[{h:"PHASE 1 · CUT",lines:["Aim at an asteroid and HOLD right-click to cut.","Keep the stability gauge centered (see below).","Hit an edge -> BOOM. Let go -> progress resets.","Cut fully -> it bursts into ore fragments."]},{h:"PHASE 2 · TRACTOR",lines:["Aim at a glowing ore fragment, HOLD right-click.","It is reeled in and collected automatically.","Fly freely — leave fragments and they stay put."]}],Qv=[{h:"STEERING",lines:["Hold left-click and move the mouse to steer her, like a flight stick — push further out to bank harder.","Release and she eases back to neutral.","A / D rolls the ship."]},{h:"THROTTLE",lines:["W / S thrusts forward / reverse; release and the throttle eases back down to zero.","Reach 100% (or full reverse) and it holds there.","Left-Shift toggles a throttle LOCK: locked, it keeps its position on release (a padlock shows by THR).","X cuts the engines — you coast on inertia."]},{h:"WARP",lines:["Hold W past 100%, through the dead-zone, to engage warp; once reached it stays locked in.","An obstacle dead ahead inhibits or drops warp.","Hold S to resorb warp back down to cruise."]}];function Ga(i){const t=document.createElement("div");t.className="mg-section";const e=document.createElement("div");e.className="mg-h",e.textContent=i.h,t.append(e);for(const n of i.lines){const s=document.createElement("div");s.className="mg-line",s.textContent=n,t.append(s)}return t}function tx(){const i=document.createElement("div");i.className="mg-demo";const t=document.createElement("div");t.className="mg-gauge";const e=document.createElement("div");e.className="mg-cursor",t.append(e);const n=document.createElement("div");n.className="mg-mouse";const s=document.createElement("div");return s.className="mg-demo-cap",s.textContent="move the MOUSE sideways to keep the gauge centered",i.append(t,n,s),i}function ex({onComplete:i}={}){const t=document.createElement("div");t.className="mining-guide";const e=document.createElement("div");e.className="mg-body";const n=document.createElement("div");n.className="mg-page",n.append(Ga(Yl[0]),tx());const s=document.createElement("div");s.className="mg-page",s.append(Ga(Yl[1])),e.append(n,s);const r=document.createElement("button");r.className="menu-btn mg-back",r.type="button",r.textContent="‹  PHASE 1";const o=document.createElement("button");o.className="menu-btn mg-next",o.type="button";let a=0;function c(){n.hidden=a!==0,s.hidden=a!==1,r.hidden=a!==1,o.textContent=a===0?"PHASE 2  ›":"GOT IT"}o.addEventListener("click",()=>{a===0?(a=1,c()):i==null||i()}),r.addEventListener("click",()=>{a=0,c()});function l(){a=0,c()}return l(),t.append(e,r,o),{el:t,reset:l}}function nx({onComplete:i}={}){const t=document.createElement("div");t.className="mining-guide";const e=document.createElement("div");e.className="mg-body";const n=Qv.map(u=>{const p=document.createElement("div");return p.className="mg-page",p.append(Ga(u)),p});e.append(...n);const s=document.createElement("button");s.className="menu-btn mg-back",s.type="button",s.textContent="‹  BACK";const r=document.createElement("button");r.className="menu-btn mg-next",r.type="button";let o=0;const a=n.length-1;function c(){n.forEach((u,p)=>{u.hidden=p!==o}),s.hidden=o===0,r.textContent=o<a?"NEXT  ›":"GOT IT"}r.addEventListener("click",()=>{o<a?(o++,c()):i==null||i()}),s.addEventListener("click",()=>{o>0&&(o--,c())});function l(){o=0,c()}return l(),t.append(e,s,r),{el:t,reset:l}}function ix(i,{onPlay:t,onToggleMute:e,isMuted:n,onOpenMining:s,onOpenNav:r}={}){const o=S=>{const b=document.createElement("button");return b.className="menu-btn",b.type="button",b.textContent=S,b};i.innerHTML="";const a=document.createElement("div");a.className="menu-panel";const c=document.createElement("h1");c.className="menu-title",c.textContent="Spascii";const l=document.createElement("div");l.className="menu-nav";const u=o("Play"),p=o("Commands"),h=o("Help"),d=o(n&&n()?"Unmute":"Mute");l.append(u,p,h,d);const g=document.createElement("div");g.className="menu-nav",g.hidden=!0;const E=o("< Back");g.append(E);const m=document.createElement("div");m.className="menu-commands";for(const[S,b]of Jv){const B=document.createElement("div");B.className="menu-cmd-row";const v=document.createElement("span");v.className="menu-cmd-key",v.textContent=S;const M=document.createElement("span");M.className="menu-cmd-desc",M.textContent=b,B.append(v,M),m.append(B)}g.append(m);const f=document.createElement("div");f.className="menu-nav",f.hidden=!0;const w=o("< Back"),_=o("Navigation"),x=o("Mining");f.append(w,_,x),a.append(c,l,g,f),i.append(a);const D={main:l,commands:g,help:f},R=S=>{for(const b in D)D[b].hidden=b!==S};return u.addEventListener("click",()=>{t==null||t()}),p.addEventListener("click",()=>R("commands")),E.addEventListener("click",()=>R("main")),h.addEventListener("click",()=>R("help")),w.addEventListener("click",()=>R("main")),_.addEventListener("click",()=>r==null?void 0:r()),x.addEventListener("click",()=>s==null?void 0:s()),d.addEventListener("click",()=>{const S=e?e():!1;d.textContent=S?"Unmute":"Mute",d.classList.toggle("active",S)}),{reset:()=>R("main")}}const Va="spascii.miningIntroSeen";function sx(){try{localStorage.removeItem(Va)}catch{}}function rx({onOpen:i,onClose:t,onFirstDismiss:e}={}){let n=null,s=null,r=!1,o=!1;function a(){n=document.createElement("div"),n.className="intro-overlay";const h=document.createElement("div");h.className="intro-panel";const d=document.createElement("h2");d.className="intro-title",d.textContent="MINING — 2 PHASES",s=ex({onComplete:p}),h.append(d,s.el),n.append(h),document.body.append(n)}function c(){n||a(),s.reset(),n.style.display="flex",r=!0,i==null||i()}function l(){if(!r){try{if(localStorage.getItem(Va))return}catch{}o=!1,c()}}function u(){r||(o=!0,c())}function p(){if(r){if(r=!1,n&&(n.style.display="none"),!o){try{localStorage.setItem(Va,"1")}catch{}e==null||e()}t==null||t()}}return{maybeShow:l,show:u,close:p,isOpen:()=>r}}function ox({onOpen:i,onClose:t}={}){const e=document.body,n=document.createElement("div");n.id="shipdbg",n.innerHTML=`
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
    </div>`,e.appendChild(n);const s=n.querySelector(".dbg-list"),r=n.querySelector(".dbg-view"),o=n.querySelector(".dbg-vlabel"),a=n.querySelector(".dbg-close"),c=n.querySelector(".dbg-main"),l=n.querySelector(".dbg-debug"),u=n.querySelectorAll(".dbg-tab");function p(q){u.forEach(ot=>ot.classList.toggle("active",ot.dataset.tab===q)),c.hidden=q!=="ships",l.hidden=q!=="debug"}u.forEach(q=>q.addEventListener("click",()=>p(q.dataset.tab)));const h=n.querySelector('[data-act="reset-mining"]');h.addEventListener("click",()=>{sx(),h.textContent="Done ✓",h.classList.add("active"),setTimeout(()=>{h.textContent="Reset",h.classList.remove("active")},1400)});const d=Cr.map((q,ot)=>{const ht=document.createElement("div");return ht.className="dbg-item",ht.textContent=q.name,ht.addEventListener("click",()=>G(ot)),s.appendChild(ht),ht}),g=new sc({antialias:!0}),E=Wu(g,{charset:" .:-=+*#%@",fontSize:11,color:"#7cfc9a"});r.appendChild(E.domElement);const m=new oc;m.background=new Yt(0),m.add(new Gu(16777215,.5)),m.add(new zu(11191551,2107440,.5));const f=new Br(16777215,1.1);f.position.set(1,1.2,1.4),m.add(f);const w=new Br(8956671,.4);w.position.set(-1,-.4,-.8),m.add(w);const _=new He(45,1,.1,5e3);_.position.set(60,35,90);const x=new Ku(_,E.domElement);x.enableDamping=!0,x.dampingFactor=.08,x.enablePan=!1,x.autoRotate=!0,x.autoRotateSpeed=1.1,x.addEventListener("start",()=>{x.autoRotate=!1}),x.addEventListener("end",()=>{x.autoRotate=!0});const D=new P(.7,.45,1).normalize();let R=null,S=!1,b=0;function B(q){q.traverse(ot=>{ot.geometry&&ot.geometry.dispose(),ot.material&&(Array.isArray(ot.material)?ot.material:[ot.material]).forEach(ht=>ht.dispose())})}function v(q){const ht=new Jn().setFromObject(q).getBoundingSphere(new Ai),Nt=Math.max(1,ht.radius);x.target.copy(ht.center);const qt=Nt/Math.sin(ee.degToRad(_.fov*.5))*1.35;_.position.copy(ht.center).addScaledVector(D,qt),_.near=Math.max(.05,Nt*.02),_.far=Nt*60,_.updateProjectionMatrix(),x.minDistance=Nt*.5,x.maxDistance=Nt*14,x.update()}let M=-1;function G(q){R&&(m.remove(R),B(R),R=null),M=q,R=Cr[q].build(qu()),m.add(R),v(R),d.forEach((ot,ht)=>ot.classList.toggle("active",ht===q)),o.textContent=`${Cr[q].name}  —  DRAG rotate · WHEEL zoom`}function H(){const q=r.getBoundingClientRect(),ot=Math.max(1,Math.floor(q.width)),ht=Math.max(1,Math.floor(q.height));E.setSize(ot,ht),_.aspect=ot/ht,_.updateProjectionMatrix()}function L(){S&&(b=requestAnimationFrame(L),x.update(),E.render(m,_))}function z(){S||(S=!0,i==null||i(),n.classList.add("open"),H(),M<0&&G(0),cancelAnimationFrame(b),b=requestAnimationFrame(L))}function N(){S&&(S=!1,n.classList.remove("open"),cancelAnimationFrame(b),t==null||t())}function U(){S?N():z()}const I=q=>q.stopPropagation();for(const q of["pointerdown","pointermove","pointerup","wheel"])n.addEventListener(q,I);return n.addEventListener("contextmenu",q=>{q.preventDefault(),q.stopPropagation()}),a.addEventListener("click",N),window.addEventListener("keydown",q=>{if(q.key===","||q.code==="Comma"){q.preventDefault(),q.stopPropagation(),U();return}if(S){if(q.code==="Escape"){q.preventDefault(),q.stopPropagation(),N();return}q.stopPropagation()}},!0),window.addEventListener("resize",()=>{S&&H()}),{open:z,close:N,toggle:U,get isOpen(){return S}}}const Vo=80,ax=800,Kl=.6;function cx(i={}){const t=i.engineUrl??null,e=i.warpUrl??null,n=i.miningUrl??null,s=i.impactUrl??null,r=i.explosionUrl??null,o=i.splitUrl??null,a=window.AudioContext||window.webkitAudioContext;let c=null,l=null,u=0,p=null,h=1,d=!1,g=null,E=0,m=0,f=null,w=0,_=0,x=null,D=0,R=0;function S(){const W=c.createBuffer(1,c.sampleRate*2,c.sampleRate),A=W.getChannelData(0);for(let rt=0;rt<A.length;rt++)A[rt]=Math.random()*2-1;return W}function b(W){return new Promise((A,rt)=>{const it=c.decodeAudioData(W,A,rt);it&&typeof it.then=="function"&&it.then(A,rt)})}function B(W){const A=W.length,rt=[];for(let J=0;J<W.numberOfChannels;J++)rt.push(W.getChannelData(J));const it=.004,k=J=>{let T=0;for(const y of rt){const O=Math.abs(y[J]);O>T&&(T=O)}return T};let et=0;for(;et<A&&k(et)<it;)et++;let ut=A-1;for(;ut>et&&k(ut)<it;)ut--;return ut<=et?{start:0,end:W.duration}:{start:et/W.sampleRate,end:(ut+1)/W.sampleRate}}function v(W,A,rt){const it=c.createGain();it.gain.value=A,it.connect(rt);const k={gain:it,src:null,rate:1};return fetch(W).then(et=>et.arrayBuffer()).then(b).then(et=>{const ut=c.createBufferSource();ut.buffer=et,ut.loop=!0;const J=B(et);ut.loopStart=J.start,ut.loopEnd=J.end,ut.playbackRate.value=k.rate,ut.connect(it),ut.start(0,J.start),k.src=ut}).catch(()=>{}),k}function M(){c=new a;const W=S(),A=c.createGain();A.gain.value=d?0:Kl;const rt=c.createDynamicsCompressor();rt.threshold.value=-18,rt.knee.value=24,rt.ratio.value=3,rt.attack.value=.01,rt.release.value=.25,A.connect(rt).connect(c.destination);const it=t?v(t,0,A):null,k=e?v(e,0,A):null,et=n?v(n,0,A):null;s&&fetch(s).then(O=>O.arrayBuffer()).then(b).then(O=>{const K=B(O);g=O,E=K.start,m=Math.max(0,K.end-K.start)}).catch(()=>{}),r&&fetch(r).then(O=>O.arrayBuffer()).then(b).then(O=>{const K=B(O);f=O,w=K.start,_=Math.max(0,K.end-K.start)}).catch(()=>{}),o&&fetch(o).then(O=>O.arrayBuffer()).then(b).then(O=>{const K=B(O);x=O,D=K.start,R=Math.max(0,K.end-K.start)}).catch(()=>{});const ut=c.createBufferSource();ut.buffer=W,ut.loop=!0;const J=c.createBiquadFilter();J.type="bandpass",J.frequency.value=1600,J.Q.value=.9;const T=c.createGain();T.gain.value=0;const y=c.createStereoPanner();y.pan.value=0,ut.connect(J).connect(T).connect(y).connect(A),ut.start(),l={master:A,engine:it,warp:k,mining:et,rcsGain:T,rcsBP:J,rcsPan:y}}function G(){c||M(),c.state==="suspended"&&c.resume()}window.addEventListener("pointerdown",G),window.addEventListener("keydown",G);const H=.1,L=.04,z=.07,N=.025,U=.6,I=.06,q=.55;function ot(W,A,rt){if(!l)return;const it=c.currentTime,k=W.active?1:0,et=rt||.016,ut=Math.abs(W.speed),J=Math.min(ut/Vo,1),T=ee.clamp((ut-Vo)/(ax-Vo),0,1);if(l.engine){l.engine.gain.gain.setTargetAtTime(k*.67*J*h,it,H);const vt=.95+.1*J+.1*T;l.engine.rate=vt,l.engine.src&&l.engine.src.playbackRate.setTargetAtTime(vt,it,H)}if(l.warp){l.warp.gain.gain.setTargetAtTime(k*.9*T*h,it,H);const vt=1+.15*T;l.warp.rate=vt,l.warp.src&&l.warp.src.playbackRate.setTargetAtTime(vt,it,H)}if(l.mining){const vt=k&&A&&A.firing?1:0;l.mining.gain.gain.setTargetAtTime(vt*.8*h,it,.04)}const y=W.turn.yaw,O=W.turn.pitch,K=W.turn.roll,nt=Math.hypot(y,O,K);if(!W.active)u=0,p=null;else{if(nt<I)p=null;else{const vt=y/nt,pt=O/nt,mt=K/nt;p&&vt*p.y+pt*p.p+mt*p.r>=q||(u=1,p={y:vt,p:pt,r:mt})}u*=Math.exp(-et/U)}l.rcsGain.gain.setTargetAtTime(k*N*u,it,z);const Z=ee.clamp(y-.6*K,-1,1);l.rcsPan.pan.setTargetAtTime(Z,it,L)}function ht(){return c}function Nt(){return l?l.master:null}function qt(W=.3){h=ee.clamp(W,0,1)}function Y(){h=1}function st(W){d=!!W,c&&l&&l.master&&l.master.gain.setTargetAtTime(d?0:Kl,c.currentTime,.02)}function ft(){return st(!d),d}function at(){return d}function Pt(W=1){if(!c||!l||!g)return;const A=ee.clamp(W,0,1.3),rt=c.createGain();rt.gain.value=A;const it=c.createBufferSource();it.buffer=g,it.playbackRate.value=1.08-.18*Math.min(A,1),it.connect(rt).connect(l.master),it.start(0,E,m||void 0),it.onended=()=>{try{it.disconnect(),rt.disconnect()}catch{}}}function Dt(){if(!c||!l||!x)return;const W=c.createGain();W.gain.value=.45*h;const A=c.createBufferSource();A.buffer=x,A.connect(W).connect(l.master),A.start(0,D,R||void 0),A.onended=()=>{try{A.disconnect(),W.disconnect()}catch{}}}function It(){if(!c||!l)return;const W=c.currentTime,A=c.createOscillator();A.type="sawtooth",A.frequency.setValueAtTime(800,W),A.frequency.exponentialRampToValueAtTime(180,W+.2);const rt=c.createGain();rt.gain.setValueAtTime(0,W),rt.gain.linearRampToValueAtTime(.14*h,W+.01),rt.gain.exponentialRampToValueAtTime(.001,W+.25),A.connect(rt).connect(l.master),A.start(W),A.stop(W+.3),A.onended=()=>{try{A.disconnect(),rt.disconnect()}catch{}}}function Rt(){if(!c||!l)return;if(f){const et=c.createGain();et.gain.value=.9*h;const ut=c.createBufferSource();ut.buffer=f,ut.connect(et).connect(l.master),ut.start(0,w,_||void 0),ut.onended=()=>{try{ut.disconnect(),et.disconnect()}catch{}};return}const W=c.currentTime,A=c.createOscillator();A.type="sine",A.frequency.setValueAtTime(60,W),A.frequency.exponentialRampToValueAtTime(25,W+.5);const rt=c.createGain();rt.gain.setValueAtTime(0,W),rt.gain.linearRampToValueAtTime(.16*h,W+.02),rt.gain.exponentialRampToValueAtTime(.001,W+.55),A.connect(rt).connect(l.master),A.start(W),A.stop(W+.6),A.onended=()=>{try{A.disconnect(),rt.disconnect()}catch{}};const it=c.createOscillator();it.type="square",it.frequency.setValueAtTime(4e3,W),it.frequency.exponentialRampToValueAtTime(150,W+.08);const k=c.createGain();k.gain.setValueAtTime(0,W),k.gain.linearRampToValueAtTime(.08*h,W+.005),k.gain.exponentialRampToValueAtTime(.001,W+.12),it.connect(k).connect(l.master),it.start(W),it.stop(W+.15),it.onended=()=>{try{it.disconnect(),k.disconnect()}catch{}}}return{update:ot,resume:G,getContext:ht,getMaster:Nt,duck:qt,unduck:Y,playImpact:Pt,playCrunch:It,playBoom:Rt,playSplit:Dt,toggleMute:ft,isMuted:at}}const Wo="/",lx=24e3,ux={configUrl:`${Wo}tts/config.json`,modelUrl:`${Wo}tts/kitten_tts_nano_v0_8.onnx`,voicesUrl:`${Wo}tts/nano_voices.npz`},hx="Bruno",dx="Jasper",fx="en-us",px=1,mx=1,gx=1.6,jl=.3,Zl=220,_x=300,vx=3200,yr=i=>new Promise(t=>setTimeout(t,i));function xx(i){const e=new Float32Array(256);for(let n=0;n<256;n++){const s=n/255*2-1;e[n]=Math.tanh(s*i)}return e}function yx(i){let t=null,e=1;const n=new Map;function s(){t||(t=new Worker(new URL("/assets/tts.worker-CulL91bv.js",import.meta.url),{type:"module"}),t.onmessage=L=>{const z=L.data,N=n.get(z.id);N&&(n.delete(z.id),z.type==="error"?N.reject(new Error(z.error)):N.resolve(z))},t.onerror=L=>{console.warn("[radio] erreur du worker TTS :",L.message||L);for(const z of n.values())z.reject(new Error("worker TTS en erreur"));n.clear()})}function r(L,z){s();const N=e++;return new Promise((U,I)=>{n.set(N,{resolve:U,reject:I}),t.postMessage({type:L,id:N,urls:ux,...z})})}let o=null,a=null,c=null,l=!1,u=null,p=!1,h=Promise.resolve();function d(){return o||(o=r("load",{}).catch(L=>{throw o=null,console.warn("[radio] echec du chargement du modele TTS :",L),L})),o}function g(){if(l)return!0;i.resume();const L=i.getContext(),z=i.getMaster();if(!L||!z)return!1;a=L;const N=L.createBiquadFilter();N.type="highpass",N.frequency.value=_x,N.Q.value=.7;const U=L.createBiquadFilter();U.type="lowpass",U.frequency.value=vx,U.Q.value=.7;const I=L.createWaveShaper();I.curve=xx(2.2),I.oversample="2x";const q=L.createGain();return q.gain.value=gx,c=L.createGain(),c.gain.value=1,c.connect(N),N.connect(U),U.connect(I),I.connect(q),q.connect(z),l=!0,!0}function E(){if(p)return!0;i.resume();const L=i.getContext(),z=i.getMaster();if(!L||!z)return!1;a=L,u=L.createGain(),u.gain.value=1;const N=L.createBiquadFilter();N.type="highpass",N.frequency.value=180,N.Q.value=.7;const U=L.createBiquadFilter();U.type="lowpass",U.frequency.value=5200,U.Q.value=.7;const I=L.createGain();return I.gain.value=mx,u.connect(N),N.connect(U),U.connect(I),I.connect(z),p=!0,!0}function m(L){for(let z=0;z<2;z++){const N=a.createOscillator();N.type="square",N.frequency.value=z?990:740;const U=a.createGain(),I=L+z*.13;U.gain.setValueAtTime(0,I),U.gain.linearRampToValueAtTime(.13,I+.01),U.gain.setValueAtTime(.13,I+.08),U.gain.linearRampToValueAtTime(0,I+.1),N.connect(U).connect(u),N.start(I),N.stop(I+.12)}}function f(L,z,N){const U=Math.floor(a.sampleRate*z),I=a.createBuffer(1,U,a.sampleRate),q=I.getChannelData(0);for(let Nt=0;Nt<U;Nt++)q[Nt]=Math.random()*2-1;const ot=a.createBufferSource();ot.buffer=I;const ht=a.createGain();ht.gain.setValueAtTime(0,L),ht.gain.linearRampToValueAtTime(N,L+.008),ht.gain.linearRampToValueAtTime(0,L+z),ot.connect(ht).connect(c),ot.start(L),ot.stop(L+z+.02)}function w(L,z,N,U){const I=a.createOscillator();I.type="sine",I.frequency.value=z;const q=a.createGain();q.gain.setValueAtTime(0,L),q.gain.linearRampToValueAtTime(U,L+.012),q.gain.setValueAtTime(U,L+N-.02),q.gain.linearRampToValueAtTime(0,L+N),I.connect(q).connect(c),I.start(L),I.stop(L+N+.02)}function _(L,z=hx){return r("synth",{text:L,opts:{voice:z,speed:px,language:fx}}).then(N=>N.audio).catch(N=>(console.warn("[radio] echec de synthese pour :",L,N),null))}function x(L,z=c,N=!1){return!L||!L.length||!a||!z?Promise.resolve():new Promise(U=>{const I=a.createBuffer(1,L.length,lx);I.getChannelData(0).set(L);const q=a.createBufferSource();q.buffer=I,q.connect(z),q.onended=()=>{q.disconnect(),D===q&&(D=null),U()},N&&(D=q),q.start()})}let D=null,R=0,S=0;function b(){if(S=R,D){try{D.stop()}catch{}D=null}}async function B(L,z={}){if(!L.length||!g())return;i.duck(jl),f(a.currentTime,.09,.1);let N=Promise.resolve();for(let U=0;U<L.length;U++){const I=await _(L[U]),q=U===0;N=N.then(async()=>{if(await yr(q?130:Zl),q&&z.onPlay)try{z.onPlay()}catch{}await x(I)})}await N,w(a.currentTime+.05,1200,.09,.12),await yr(220),i.unduck()}async function v(L,z,N={}){if(!L.length||z<=S||!E())return;i.duck(jl),m(a.currentTime+.02);let U=Promise.resolve();for(let I=0;I<L.length;I++){const q=await _(L[I],dx),ot=I===0;U=U.then(async()=>{if(!(z<=S)&&(await yr(ot?320:Zl),!(z<=S))){if(ot&&N.onPlay)try{N.onPlay()}catch{}await x(q,u,!0)}})}await U,await yr(150),i.unduck()}function M(L,z={}){const N=(L||[]).filter(Boolean),U=h.then(()=>d()).then(()=>B(N,z)).catch(I=>{console.warn("[radio] message ignore :",I)});return h=U.catch(()=>{}),U}function G(L,z){return M([L],z)}function H(L,z={}){const N=++R,U=h.then(()=>d()).then(()=>v([L],N,z)).catch(I=>{console.warn("[radio] message systeme ignore :",I)});return h=U.catch(()=>{}),U}return{preload:d,speak:G,speakSequence:M,speakSystem:H,cancelSystem:b}}function Mx({onOpen:i,onClose:t}={}){let e=null,n=null,s=!1;function r(){e=document.createElement("div"),e.className="intro-overlay";const c=document.createElement("div");c.className="intro-panel";const l=document.createElement("h2");l.className="intro-title",l.textContent="NAVIGATION",n=nx({onComplete:a}),c.append(l,n.el),e.append(c),document.body.append(e)}function o(){s||(e||r(),n.reset(),e.style.display="flex",s=!0,i==null||i())}function a(){s&&(s=!1,e&&(e.style.display="none"),t==null||t())}return{show:o,close:a,isOpen:()=>s}}const ju=document.getElementById("app"),Zu=document.getElementById("menu"),Le={clearance:"Station control to shuttle. You are cleared for docking, approach corridor three.",autopilot:"Autopilot engaged. Hands off the controls.",docked:"Docking complete. You are secured to the station. Welcome aboard.",undock:"Undocking sequence in progress.",resume:"You have control. Safe flight, shuttle."},rn=new oc;rn.background=new Yt(0);rn.fog=new rc(0,7e-4);const hn=new He(72,window.innerWidth/window.innerHeight,.1,6e3),yn=new Oe;yn.add(hn);rn.add(yn);rn.add(new Gu(16777215,.32));rn.add(new zu(11191551,2766144,.6));const $u=new Br(16777215,1.2);$u.position.set(1,.75,.5);rn.add($u);const Ju=new Br(8956671,.3);Ju.position.set(-.6,-.3,-.8);rn.add(Ju);const Sx=new sc({antialias:!0}),qn=Wu(Sx,{charset:" .:-=+*#%@",fontSize:12,color:"#7cfc9a"});qn.setSize(window.innerWidth,window.innerHeight);ju.appendChild(qn.domElement);const Cn=T0(rn),Ce=A0(rn),Os=$0(rn,Ce,Cn),os=av(),Vi=sv(rn,hn,Cn,{onBoom:()=>{bi.playBoom(),os.systemMessage("ORE LOST  ·  ASTEROID DESTROYED",4e3)},onCut:()=>{bi.playSplit(),os.systemMessage("ASTEROID FRACTURED  ·  SALVAGE BLOCKS",2500)}}),fn={mapExpanded:!1,debugOpen:!1,miningIntro:!1,navIntro:!1},Qu=()=>fn.mapExpanded||fn.debugOpen||fn.miningIntro||fn.navIntro,Ei=lv(),Ex={[Le.clearance]:"CLEARED TO DOCK · CORRIDOR 3",[Le.autopilot]:"AUTOPILOT ENGAGED",[Le.docked]:"DOCKING COMPLETE",[Le.undock]:"UNDOCK SEQUENCE",[Le.resume]:"MANUAL CONTROL RESTORED"},Wi=i=>Ei.log({short:Ex[i]||i,text:i,kind:"radio"}),bi=cx({engineUrl:"/engine-loop.mp3",warpUrl:"/warp-loop.mp3",miningUrl:"/mining-loop.mp3",impactUrl:"/impact.mp3",explosionUrl:"/explosion.mp3",splitUrl:"/rock-split.mp3"}),Ln=yx(bi);Ln.preload();let ji=0;function bx(i){return ee.clamp(i/500,0,.5)}function wx(i){return ee.clamp(i/90,.35,1.6)}const $e=d0(yn,ju,Zu,Cn,Ce,Os,{onImpact:i=>{bi.playImpact(bx(i)),ji=Math.max(ji,wx(i))},onWarpInhibit:()=>$l(Av()),onWarpExit:()=>$l(Rv()),onDockStart:()=>{Ln.speakSequence([Le.clearance,Le.autopilot]),Wi(Le.clearance),Wi(Le.autopilot)},onDocked:()=>{Ln.speak(Le.docked),Wi(Le.docked)},onUndockStart:()=>{Ln.speakSequence([Le.undock,Le.autopilot]),Wi(Le.undock),Wi(Le.autopilot)},onUndocked:()=>{Ln.speak(Le.resume),Wi(Le.resume)},isUiOpen:Qu}),Hr=rx({onOpen:()=>{fn.miningIntro=!0},onClose:()=>{fn.miningIntro=!1},onFirstDismiss:()=>os.systemMessage("MINING GUIDE  ·  MENU (ESC) > HELP > MINING",6e3)}),Wa=Mx({onOpen:()=>{fn.navIntro=!0},onClose:()=>{fn.navIntro=!1}}),th=ix(Zu,{onPlay:()=>$e.activate(),onToggleMute:()=>bi.toggleMute(),isMuted:()=>bi.isMuted(),onOpenNav:()=>Wa.show(),onOpenMining:()=>Hr.show()});window.addEventListener("keydown",i=>{i.code==="Escape"&&(Wa.isOpen()?(Wa.close(),i.stopImmediatePropagation(),i.preventDefault()):Hr.isOpen()&&(Hr.close(),i.stopImmediatePropagation(),i.preventDefault()))},{capture:!0});window.addEventListener("keydown",i=>{i.code==="Escape"&&th.reset()});window.addEventListener("keydown",i=>{i.code==="Escape"&&th.reset()});const eh=jv(Cn,yn,Ce,Os,()=>!$e.state.active,i=>{fn.mapExpanded=i});Zv();ox({onOpen:()=>{fn.debugOpen=!0,$e.deactivate()},onClose:()=>{fn.debugOpen=!1}});$v();const nh=700;function Tx(){for(const i of Os.ships){if(!i.active){i._inZone=!1;continue}const t=yn.position.distanceTo(i.group.position)<=nh;t&&!i._inZone&&Ei.log({short:`${i.callsign} ENTERING SECTOR`,kind:"info"}),i._inZone=t}}const Gr=15,ih=30,Ax=nh,Rx=((Ce==null?void 0:Ce.radius)??0)+900;let Xo=Gr+Math.random()*(ih-Gr);function Cx(i){if(Xo-=i,Xo>0)return;Xo=Gr+Math.random()*(ih-Gr);const t=[];for(const n of Os.ships)n.active&&yn.position.distanceTo(n.group.position)<=Ax&&t.push({callsign:n.callsign,station:!1});if(Ce&&yn.position.distanceTo(Ce.center)<=Rx&&t.push({callsign:"CONTROL",station:!0}),!t.length)return;const e=t[Math.floor(Math.random()*t.length)];Ei.log({short:Lv(e),kind:"chatter"})}const Px=((Ce==null?void 0:Ce.radius)??0)+220,Dx=45;let qo=!1;function Lx(){if(!Ce||qo)return;const i=$e.state;if(i.docking||i.undocking||i.docked||!(yn.position.distanceTo(Ce.center)<=Px)||Math.abs(i.speed)<=Dx||Ei.hasRecent("slow-down",50))return;qo=!0;const e=Ev();Ln.speak(e,{onPlay:()=>Ei.log({short:"REDUCE SPEED — TOO FAST",text:e,kind:"radio",code:"slow-down"})}).finally(()=>{qo=!1})}const Ix=4,Nx=8;let Yo=!1,Ko=!1,Mr=0;function Ux(i){if(!Ce||!Ce.colliders)return;Mr>0&&(Mr-=i);const t=$e.state;if(t.docking||t.undocking||t.docked){Yo=!1;return}let e=!1;for(const n of Ce.colliders)if(yn.position.distanceTo(n.center)<=n.radius+Ix){e=!0;break}if(e&&!Yo&&!Ko&&Mr<=0){Ko=!0;const n=bv();Ln.speak(n,{onPlay:()=>Ei.log({short:"STATION COLLISION",text:n,kind:"radio",code:"collision"})}).finally(()=>{Ko=!1,Mr=Nx})}Yo=e}const Ox=30;let Vr=0,Xa=!1;function $l(i){os.systemMessage(i.hud),Xa=!0,!(Vr>0)&&(Vr=Ox,Ln.speakSystem(i.voice))}function Fx(){Xa&&(Xa=!1,os.clearSystemMessage(),Ln.cancelSystem())}const Jl=.8,kx=.25;let Ql=0;function Bx(i,t){Ql+=t;const e=Ql;let n=0,s=0,r=0,o=0,a=0;const c=ee.clamp((i-Jl)/(1-Jl),0,1);if(c>0){const l=Math.pow(c,1.6);r+=(Math.sin(e*84.3)*.6+Math.sin(e*137)*.4)*.018*l,n+=(Math.sin(e*96.7)*.6+Math.sin(e*151)*.4)*.011*l,s+=(Math.sin(e*73.1)*.6+Math.sin(e*121)*.4)*.011*l,o+=(Math.random()-.5)*.05*l,a+=(Math.random()-.5)*.05*l}if(ji>.001){const l=ji;r+=(Math.sin(e*120)*.5+(Math.random()-.5))*.12*l,n+=(Math.sin(e*97)*.5+(Math.random()-.5))*.1*l,s+=(Math.sin(e*138)*.5+(Math.random()-.5))*.1*l,o+=(Math.random()-.5)*1.4*l,a+=(Math.random()-.5)*1.4*l,ji*=Math.exp(-t/kx)}else ji=0;hn.rotation.set(n,s,r),hn.position.set(o,a,0)}const zx=new c0;function sh(){requestAnimationFrame(sh);const i=Math.min(zx.getDelta(),.05);$e.state.active?($e.update(i),Cn.update(i),Ce.update(i),Os.update(i),Tx(),Cx(i),Lx(),Ux(i),Vr>0&&(Vr-=i),$e.state.warp>0&&Fx(),Vi.update($e.state,i),Cn.updateBlocks(yn.position,i),!Qu()&&Vi.state.phase==="cutting"&&Hr.maybeShow()):Vi.reset(),Bx($e.state.warp,i),Ei.update(i),os.update($e.state,Vi.state),eh.update(i),bi.update($e.state,Vi.state,i),qn.render(rn,hn),qn.drawStars(Cn.stars,hn,$e.state.warp,i),qn.drawShadows([Cn,Ce],hn),qn.drawMining(Vi.state,hn,i),qn.drawExplosions(Cn.explosions,hn)}sh();window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;hn.aspect=i/t,hn.updateProjectionMatrix(),qn.setSize(i,t),eh.resize()});
