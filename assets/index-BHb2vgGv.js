(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="169",zi={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,nc=1,kh=2,Nl=1,zh=2,Mn=3,Hn=0,ze=1,dn=2,kn=0,Hi=1,ys=2,ic=3,rc=4,Hh=5,ii=100,Gh=101,Vh=102,Wh=103,Xh=104,qh=200,Yh=201,Kh=202,jh=203,ko=204,zo=205,Zh=206,$h=207,Jh=208,Qh=209,tu=210,eu=211,nu=212,iu=213,ru=214,Ho=0,Go=1,Vo=2,Xi=3,Wo=4,Xo=5,qo=6,Yo=7,Ol=0,su=1,ou=2,zn=0,au=1,cu=2,lu=3,hu=4,uu=5,du=6,fu=7,Fl=300,qi=301,Yi=302,Ko=303,jo=304,Is=306,Zo=1e3,si=1001,$o=1002,$e=1003,pu=1004,Ir=1005,sn=1006,Gs=1007,oi=1008,Tn=1009,Bl=1010,kl=1011,xr=1012,Ia=1013,ci=1014,En=1015,Rr=1016,Ua=1017,Na=1018,Ki=1020,zl=35902,Hl=1021,Gl=1022,an=1023,Vl=1024,Wl=1025,Gi=1026,ji=1027,Xl=1028,Oa=1029,ql=1030,Fa=1031,Ba=1033,ds=33776,fs=33777,ps=33778,ms=33779,Jo=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,ra=37496,sa=37808,oa=37809,aa=37810,ca=37811,la=37812,ha=37813,ua=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,gs=36492,xa=36494,ya=36495,Yl=36283,Ma=36284,Sa=36285,Ea=36286,mu=3200,gu=3201,Kl=0,_u=1,Fn="",hn="srgb",Vn="srgb-linear",ka="display-p3",Us="display-p3-linear",Ms="linear",de="srgb",Ss="rec709",Es="p3",yi=7680,sc=519,vu=512,xu=513,yu=514,jl=515,Mu=516,Su=517,Eu=518,bu=519,oc=35044,ac="300 es",bn=2e3,bs=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const fr=Math.PI/180,yr=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function za(i,t){return(i%t+t)%t}function wu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Tu(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function Au(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Ru(i,t=1){return t-Math.abs(za(i,t*2)-t)}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Du(i,t){return i+Math.random()*(t-i)}function Iu(i){return i*(.5-Math.random())}function Uu(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(i){return i*fr}function Ou(i){return i*yr}function Fu(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:fr,RAD2DEG:yr,generateUUID:fi,clamp:Me,euclideanModulo:za,mapLinear:wu,inverseLerp:Tu,lerp:pr,damp:Au,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Lu,randFloat:Du,randFloatSpread:Iu,seededRandom:Uu,degToRad:Nu,radToDeg:Ou,isPowerOfTwo:Fu,ceilPowerOfTwo:Bu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:zu,normalize:Ue,denormalize:Ni};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,r,s,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=r[0],f=r[3],m=r[6],E=r[1],v=r[4],S=r[7],N=r[2],C=r[5],R=r[8];return s[0]=o*x+a*E+c*N,s[3]=o*f+a*v+c*C,s[6]=o*m+a*S+c*R,s[1]=l*x+h*E+u*N,s[4]=l*f+h*v+u*C,s[7]=l*m+h*S+u*R,s[2]=d*x+p*E+g*N,s[5]=d*f+p*v+g*C,s[8]=d*m+p*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,g=e*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(r*l-h*n)*x,t[2]=(a*n-r*o)*x,t[3]=d*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new jt;function Zl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){const i=ws("canvas");return i.style.display="block",i}const lc={};function _s(i){i in lc||(lc[i]=!0,console.warn(i))}function Gu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Vu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hc=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[Vn]:{transfer:Ms,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:de,primaries:Ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Us]:{transfer:Ms,primaries:Es,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc)},[ka]:{transfer:de,primaries:Es,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc).convertLinearToSRGB()}},Xu=new Set([Vn,Us]),se={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ir[t].toReference,r=ir[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===Fn?Ms:ir[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ir[t].luminanceCoefficients)}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=ws("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class $l{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xs(r[o].image)):s.push(Xs(r[o]))}else s=Xs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class He extends di{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=si,r=si,s=sn,o=oi,a=an,c=Tn,l=He.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=fi(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Fl;He.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(p+1)/2,N=(m+1)/2,C=(h+d)/4,R=(u+x)/4,D=(g+f)/4;return v>S&&v>N?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=C/n,s=R/n):S>N?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=D/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=R/s,r=D/s),this.set(n,r,s,e),this}let E=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ju extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $l(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends ju{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let f=1-a;const m=c*d+l*p+h*g+u*x,E=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const N=Math.sqrt(v),C=Math.atan2(N,m*E);f=Math.sin(f*C)/N,a=Math.sin(a*C)/N}const S=a*E;if(c=c*f+d*S,l=l*f+p*S,h=h*f+g*S,u=u*f+x*S,f===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new A,dc=new ke;class Wn{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Nr.subVectors(this.max,rr),Si.subVectors(t.a,rr),Ei.subVectors(t.b,rr),bi.subVectors(t.c,rr),Cn.subVectors(Ei,Si),Pn.subVectors(bi,Ei),Yn.subVectors(Si,bi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!Ys(e,Si,Ei,bi,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Ys(e,Si,Ei,bi,Nr))?!1:(Or.crossVectors(Cn,Pn),e=[Or.x,Or.y,Or.z],Ys(e,Si,Ei,bi,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new A,new A,new A,new A,new A,new A,new A,new A],tn=new A,Ur=new Wn,Si=new A,Ei=new A,bi=new A,Cn=new A,Pn=new A,Yn=new A,rr=new A,Nr=new A,Or=new A,Kn=new A;function Ys(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Kn.fromArray(i,s);const a=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $u=new Wn,sr=new A,Ks=new A;class pi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Ks)),this.expandByPoint(sr.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new A,js=new A,Fr=new A,Ln=new A,Zs=new A,Br=new A,$s=new A;class Cr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){js.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(js);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=Ln.dot(this.direction),c=-Ln.dot(Fr),l=Ln.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(js).addScaledVector(Fr,d),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),r=_n.dot(_n)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,r,s){Zs.subVectors(e,t),Br.subVectors(n,t),$s.crossVectors(Zs,Br);let o=this.direction.dot($s),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const c=a*this.direction.dot(Br.crossVectors(Ln,Br));if(c<0)return null;const l=a*this.direction.dot(Zs.cross(Ln));if(l<0||c+l>o)return null;const h=-a*Ln.dot($s);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,o,a,c,l,h,u,d,p,g,x,f){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,p,g,x,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,Qu)}lookAt(t,e,n){const r=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Dn.crossVectors(n,Ge),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Dn.crossVectors(n,Ge)),Dn.normalize(),kr.crossVectors(Ge,Dn),r[0]=Dn.x,r[4]=kr.x,r[8]=Ge.x,r[1]=Dn.y,r[5]=kr.y,r[9]=Ge.y,r[2]=Dn.z,r[6]=kr.z,r[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],E=n[3],v=n[7],S=n[11],N=n[15],C=r[0],R=r[4],D=r[8],J=r[12],_=r[1],y=r[5],I=r[9],F=r[13],L=r[2],O=r[6],P=r[10],q=r[14],W=r[3],_t=r[7],vt=r[11],tt=r[15];return s[0]=o*C+a*_+c*L+l*W,s[4]=o*R+a*y+c*O+l*_t,s[8]=o*D+a*I+c*P+l*vt,s[12]=o*J+a*F+c*q+l*tt,s[1]=h*C+u*_+d*L+p*W,s[5]=h*R+u*y+d*O+p*_t,s[9]=h*D+u*I+d*P+p*vt,s[13]=h*J+u*F+d*q+p*tt,s[2]=g*C+x*_+f*L+m*W,s[6]=g*R+x*y+f*O+m*_t,s[10]=g*D+x*I+f*P+m*vt,s[14]=g*J+x*F+f*q+m*tt,s[3]=E*C+v*_+S*L+N*W,s[7]=E*R+v*y+S*O+N*_t,s[11]=E*D+v*I+S*P+N*vt,s[15]=E*J+v*F+S*q+N*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*p-n*c*p)+x*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*h-s*c*h)+f*(+e*l*u-e*a*p-s*o*u+n*o*p+s*a*h-n*l*h)+m*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],E=u*f*l-x*d*l+x*c*p-a*f*p-u*c*m+a*d*m,v=g*d*l-h*f*l-g*c*p+o*f*p+h*c*m-o*d*m,S=h*x*l-g*u*l+g*a*p-o*x*p-h*a*m+o*u*m,N=g*u*c-h*x*c-g*a*d+o*x*d+h*a*f-o*u*f,C=e*E+n*v+r*S+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=E*R,t[1]=(x*d*s-u*f*s-x*r*p+n*f*p+u*r*m-n*d*m)*R,t[2]=(a*f*s-x*c*s+x*r*l-n*f*l-a*r*m+n*c*m)*R,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*p-n*c*p)*R,t[4]=v*R,t[5]=(h*f*s-g*d*s+g*r*p-e*f*p-h*r*m+e*d*m)*R,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*m-e*c*m)*R,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*p+e*c*p)*R,t[8]=S*R,t[9]=(g*u*s-h*x*s-g*n*p+e*x*p+h*n*m-e*u*m)*R,t[10]=(o*x*s-g*a*s+g*n*l-e*x*l-o*n*m+e*a*m)*R,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*p-e*a*p)*R,t[12]=N*R,t[13]=(h*x*r-g*u*r+g*n*d-e*x*d-h*n*f+e*u*f)*R,t[14]=(g*a*r-o*x*r-g*n*c+e*x*c+o*n*f-e*a*f)*R,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,g=s*u,x=o*h,f=o*u,m=a*u,E=c*l,v=c*h,S=c*u,N=n.x,C=n.y,R=n.z;return r[0]=(1-(x+m))*N,r[1]=(p+S)*N,r[2]=(g-v)*N,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+m))*C,r[6]=(f+E)*C,r[7]=0,r[8]=(g+v)*R,r[9]=(f-E)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),a=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],en.copy(this);const l=1/s,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=bn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(a===bn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=bn){const c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,p=(n+r)*h;let g,x;if(a===bn)g=(o+s)*u,x=-2*u;else if(a===bs)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new A,en=new ce,Ju=new A(0,0,0),Qu=new A(1,1,1),Dn=new A,kr=new A,Ge=new A,fc=new ce,pc=new ke;class fn{constructor(t=0,e=0,n=0,r=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const mc=new A,Ti=new ke,vn=new ce,zr=new A,or=new A,ed=new A,nd=new ke,gc=new A(1,0,0),_c=new A(0,1,0),vc=new A(0,0,1),xc={type:"added"},id={type:"removed"},Ai={type:"childadded",child:null},Js={type:"childremoved",child:null};class Se extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new A,e=new fn,n=new ke,r=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(or,zr,this.up):vn.lookAt(zr,or,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(vn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Se.DEFAULT_UP=new A(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new A,xn=new A,Qs=new A,yn=new A,Ri=new A,Ci=new A,yc=new A,to=new A,eo=new A,no=new A,io=new ae,ro=new ae,so=new ae;class on{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),nn.subVectors(t,e),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){nn.subVectors(r,e),xn.subVectors(n,e),Qs.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(xn),c=nn.dot(Qs),l=xn.dot(xn),h=xn.dot(Qs),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return io.setScalar(0),ro.setScalar(0),so.setScalar(0),io.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,n),so.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(io,s.x),o.addScaledVector(ro,s.y),o.addScaledVector(so,s.z),o}static isFrontFacing(t,e,n,r){return nn.subVectors(n,e),xn.subVectors(t,e),nn.cross(xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),nn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,n),Ci.subVectors(s,n),to.subVectors(t,n);const c=Ri.dot(to),l=Ci.dot(to);if(c<=0&&l<=0)return e.copy(n);eo.subVectors(t,r);const h=Ri.dot(eo),u=Ci.dot(eo);if(h>=0&&u<=h)return e.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ri,o);no.subVectors(t,s);const p=Ri.dot(no),g=Ci.dot(no);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ci,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return yc.subVectors(s,r),a=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(yc,a);const m=1/(f+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=se.workingColorSpace){if(t=za(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=oo(o,s,t+1/3),this.g=oo(o,s,t),this.b=oo(o,s,t-1/3)}return se.toWorkingColorSpace(this,r),this}setStyle(t,e=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return se.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Me(Pe.r*255,0,255))*65536+Math.round(Me(Pe.g*255,0,255))*256+Math.round(Me(Pe.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=hn){se.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Hr);const n=pr(In.h,Hr.h,e),r=pr(In.s,Hr.s,e),s=pr(In.l,Hr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Xt;Xt.NAMES=Ql;let rd=0;class mi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Hi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=zo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ai extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new A,Gr=new gt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}}class th extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eh extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sd=0;const Ke=new ce,ao=new Se,Pi=new A,Ve=new Wn,ar=new Wn,Te=new A;class ve extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zl(t)?eh:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ve.min,ar.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,ar.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(ar.min),Ve.expandByPoint(ar.max))}Ve.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(t,l),Te.add(Pi)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new A,c[D]=new A;const l=new A,h=new A,u=new A,d=new gt,p=new gt,g=new gt,x=new A,f=new A;function m(D,J,_){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,J),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,J),g.fromBufferAttribute(s,_),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(y),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(y),a[D].add(x),a[J].add(x),a[_].add(x),c[D].add(f),c[J].add(f),c[_].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,J=E.length;D<J;++D){const _=E[D],y=_.start,I=_.count;for(let F=y,L=y+I;F<L;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new A,S=new A,N=new A,C=new A;function R(D){N.fromBufferAttribute(r,D),C.copy(N);const J=a[D];v.copy(J),v.sub(N.multiplyScalar(N.dot(J))).normalize(),S.crossVectors(C,J);const y=S.dot(c[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,y)}for(let D=0,J=E.length;D<J;++D){const _=E[D],y=_.start,I=_.count;for(let F=y,L=y+I;F<L;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new ce,jn=new Cr,Vr=new pi,Sc=new A,Wr=new A,Xr=new A,qr=new A,co=new A,Yr=new A,Ec=new A,Kr=new A;class Le extends Se{constructor(t=new ve,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(co.fromBufferAttribute(u,t),o?Yr.addScaledVector(co,h):Yr.addScaledVector(co.sub(e),h))}e.add(Yr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),jn.copy(t.ray).recast(t.near),!(Vr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Vr,Sc)===null||jn.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(s).invert(),jn.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=o[f.materialIndex],E=Math.max(f.start,p.start),v=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let S=E,N=v;S<N;S+=3){const C=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=jr(this,m,t,n,l,h,u,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const E=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);r=jr(this,o,t,n,l,h,u,E,v,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=o[f.materialIndex],E=Math.max(f.start,p.start),v=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let S=E,N=v;S<N;S+=3){const C=S,R=S+1,D=S+2;r=jr(this,m,t,n,l,h,u,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const E=f,v=f+1,S=f+2;r=jr(this,o,t,n,l,h,u,E,v,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function od(i,t,e,n,r,s,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Hn,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:i}}function jr(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Wr),i.getVertexPosition(c,Xr),i.getVertexPosition(l,qr);const h=od(i,t,e,n,Wr,Xr,qr,Ec);if(h){const u=new A;on.getBarycoord(Ec,Wr,Xr,qr,u),r&&(h.uv=on.getInterpolatedAttribute(r,a,c,l,u,new gt)),s&&(h.uv1=on.getInterpolatedAttribute(s,a,c,l,u,new gt)),o&&(h.normal=on.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};on.getNormal(Wr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}class Ze extends ve{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(x,f,m,E,v,S,N,C,R,D,J){const _=S/R,y=N/D,I=S/2,F=N/2,L=C/2,O=R+1,P=D+1;let q=0,W=0;const _t=new A;for(let vt=0;vt<P;vt++){const tt=vt*y-F;for(let dt=0;dt<O;dt++){const pt=dt*_-I;_t[x]=pt*E,_t[f]=tt*v,_t[m]=L,l.push(_t.x,_t.y,_t.z),_t[x]=0,_t[f]=0,_t[m]=C>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(dt/R),u.push(1-vt/D),q+=1}}for(let vt=0;vt<D;vt++)for(let tt=0;tt<R;tt++){const dt=d+tt+O*vt,pt=d+tt+O*(vt+1),U=d+(tt+1)+O*(vt+1),X=d+(tt+1)+O*vt;c.push(dt,pt,X),c.push(pt,U,X),W+=6}a.addGroup(p,W,J),p+=W,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const r in n)t[r]=n[r]}return t}function ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const cd={clone:Zi,merge:Ne};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ih extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new A,bc=new gt,wc=new gt;class Oe extends ih{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,bc,wc),e.subVectors(wc,bc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class ud extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oe(Li,Di,t,e);r.layers=this.layers,this.add(r);const s=new Oe(Li,Di,t,e);s.layers=this.layers,this.add(s);const o=new Oe(Li,Di,t,e);o.layers=this.layers,this.add(o);const a=new Oe(Li,Di,t,e);a.layers=this.layers,this.add(a);const c=new Oe(Li,Di,t,e);c.layers=this.layers,this.add(c);const l=new Oe(Li,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rh extends He{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new rh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ze(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:kn});s.uniforms.tEquirect.value=e;const o=new Le(r,s),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=sn),new ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const lo=new A,fd=new A,pd=new jt;class On{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=lo.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pd.getNormalMatrix(t),r=this.coplanarPoint(lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new pi,Zr=new A;class Ga{constructor(t=new On,e=new On,n=new On,r=new On,s=new On,o=new On){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],x=r[10],f=r[11],m=r[12],E=r[13],v=r[14],S=r[15];if(n[0].setComponents(c-s,d-l,f-p,S-m).normalize(),n[1].setComponents(c+s,d+l,f+p,S+m).normalize(),n[2].setComponents(c+o,d+h,f+g,S+E).normalize(),n[3].setComponents(c-o,d-h,f-g,S-E).normalize(),n[4].setComponents(c-a,d-u,f-x,S-v).normalize(),e===bn)n[5].setComponents(c+a,d+u,f+x,S+v).normalize();else if(e===bs)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function md(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ns extends ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){const E=m*d-o;for(let v=0;v<l;v++){const S=v*u-s;g.push(S,-E,0),x.push(0,0,1),f.push(v/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){const v=E+l*m,S=E+l*(m+1),N=E+1+l*(m+1),C=E+1+l*m;p.push(v,S,C),p.push(S,N,C)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
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
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
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
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ep=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#define LAMBERT
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define MATCAP
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
}`,Np=`#define MATCAP
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
}`,Op=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,zp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Yp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:bd,batching_vertex:wd,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Od,color_pars_vertex:Fd,color_vertex:Bd,common:kd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Vd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:Kd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Zd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:lf,envmap_vertex:Jd,fog_vertex:Qd,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:sf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:cf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:vf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Sf,map_fragment:Ef,map_pars_fragment:bf,map_particle_fragment:wf,map_particle_pars_fragment:Tf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:Df,morphtarget_vertex:If,normal_fragment_begin:Uf,normal_fragment_maps:Nf,normal_pars_fragment:Of,normal_pars_vertex:Ff,normal_vertex:Bf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Vf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:Kf,dithering_pars_fragment:jf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:tp,shadowmask_pars_fragment:ep,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:sp,specularmap_fragment:op,specularmap_pars_fragment:ap,tonemapping_fragment:cp,tonemapping_pars_fragment:lp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:yp,cube_frag:Mp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:bp,distanceRGBA_frag:wp,equirect_vert:Tp,equirect_frag:Ap,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Dp,meshlambert_frag:Ip,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Op,meshnormal_frag:Fp,meshphong_vert:Bp,meshphong_frag:kp,meshphysical_vert:zp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Vp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:Kp,sprite_frag:jp},Ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},un={basic:{uniforms:Ne([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ne([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ne([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ne([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ne([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ne([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ne([Ct.points,Ct.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ne([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ne([Ct.common,Ct.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ne([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ne([Ct.sprite,Ct.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ne([Ct.common,Ct.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ne([Ct.lights,Ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};un.physical={uniforms:Ne([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const $r={r:0,b:0,g:0},$n=new fn,Zp=new ce;function $p(i,t,e,n,r,s,o){const a=new Xt(0);let c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function x(E){let v=!1;const S=g(E);S===null?m(a,c):S&&S.isColor&&(m(S,1),v=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(E,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Is)?(h===void 0&&(h=new Le(new Ze(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),$n.copy(v.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler($n)),h.material.toneMapped=se.getTransfer(S.colorSpace)!==de,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Le(new Ns(2,2),new Gn({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,v){E.getRGB($r,nh(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:x,addToRenderList:f}}function Jp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(_,y,I,F,L){let O=!1;const P=u(F,I,y);s!==P&&(s=P,l(s.object)),O=p(_,F,I,L),O&&g(_,F,I,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,S(_,y,I,F),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,y,I){const F=I.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let O=L[y.id];O===void 0&&(O={},L[y.id]=O);let P=O[F];return P===void 0&&(P=d(c()),O[F]=P),P}function d(_){const y=[],I=[],F=[];for(let L=0;L<e;L++)y[L]=0,I[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:I,attributeDivisors:F,object:_,attributes:{},index:null}}function p(_,y,I,F){const L=s.attributes,O=y.attributes;let P=0;const q=I.getAttributes();for(const W in q)if(q[W].location>=0){const vt=L[W];let tt=O[W];if(tt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),vt===void 0||vt.attribute!==tt||tt&&vt.data!==tt.data)return!0;P++}return s.attributesNum!==P||s.index!==F}function g(_,y,I,F){const L={},O=y.attributes;let P=0;const q=I.getAttributes();for(const W in q)if(q[W].location>=0){let vt=O[W];vt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor));const tt={};tt.attribute=vt,vt&&vt.data&&(tt.data=vt.data),L[W]=tt,P++}s.attributes=L,s.attributesNum=P,s.index=F}function x(){const _=s.newAttributes;for(let y=0,I=_.length;y<I;y++)_[y]=0}function f(_){m(_,0)}function m(_,y){const I=s.newAttributes,F=s.enabledAttributes,L=s.attributeDivisors;I[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),L[_]!==y&&(i.vertexAttribDivisor(_,y),L[_]=y)}function E(){const _=s.newAttributes,y=s.enabledAttributes;for(let I=0,F=y.length;I<F;I++)y[I]!==_[I]&&(i.disableVertexAttribArray(I),y[I]=0)}function v(_,y,I,F,L,O,P){P===!0?i.vertexAttribIPointer(_,y,I,L,O):i.vertexAttribPointer(_,y,I,F,L,O)}function S(_,y,I,F){x();const L=F.attributes,O=I.getAttributes(),P=y.defaultAttributeValues;for(const q in O){const W=O[q];if(W.location>=0){let _t=L[q];if(_t===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),_t!==void 0){const vt=_t.normalized,tt=_t.itemSize,dt=t.get(_t);if(dt===void 0)continue;const pt=dt.buffer,U=dt.type,X=dt.bytesPerElement,nt=U===i.INT||U===i.UNSIGNED_INT||_t.gpuType===Ia;if(_t.isInterleavedBufferAttribute){const Y=_t.data,lt=Y.stride,ht=_t.offset;if(Y.isInstancedInterleavedBuffer){for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt,Y.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let mt=0;mt<W.locationSize;mt++)f(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let mt=0;mt<W.locationSize;mt++)v(W.location+mt,tt/W.locationSize,U,vt,lt*X,(ht+tt/W.locationSize*mt)*X,nt)}else{if(_t.isInstancedBufferAttribute){for(let Y=0;Y<W.locationSize;Y++)m(W.location+Y,_t.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Y=0;Y<W.locationSize;Y++)f(W.location+Y);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Y=0;Y<W.locationSize;Y++)v(W.location+Y,tt/W.locationSize,U,vt,tt*X,tt/W.locationSize*Y*X,nt)}}else if(P!==void 0){const vt=P[q];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(W.location,vt);break;case 3:i.vertexAttrib3fv(W.location,vt);break;case 4:i.vertexAttrib4fv(W.location,vt);break;default:i.vertexAttrib1fv(W.location,vt)}}}}E()}function N(){D();for(const _ in n){const y=n[_];for(const I in y){const F=y[I];for(const L in F)h(F[L].object),delete F[L];delete y[I]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const I in y){const F=y[I];for(const L in F)h(F[L].object),delete F[L];delete y[I]}delete n[_.id]}function R(_){for(const y in n){const I=n[y];if(I[_.id]===void 0)continue;const F=I[_.id];for(const L in F)h(F[L].object),delete F[L];delete I[_.id]}}function D(){J(),o=!0,s!==r&&(s=r,l(s.object))}function J(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:J,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:f,disableUnusedAttributes:E}}function Qp(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)e.update(g,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:N,maxSamples:C}}function em(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new On,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{const E=s?0:n,v=E*4;let S=m.clippingState||null;c.value=S,S=h(g,d,v,p);for(let N=0;N!==v;++N)S[N]=e[N];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const m=p+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(f,S),f[S+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function nm(i){let t=new WeakMap;function e(o,a){return a===Ko?o.mapping=qi:a===jo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class oh extends ih{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,Tc=[.125,.215,.35,.446,.526,.582],ri=20,ho=new oh,Ac=new Xt;let uo=null,fo=0,po=0,mo=!1;const ni=(1+Math.sqrt(5))/2,Ii=1/ni,Rc=[new A(-ni,Ii,0),new A(ni,Ii,0),new A(-Ii,0,ni),new A(Ii,0,ni),new A(0,ni,-Ii),new A(0,ni,Ii),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Rr,format:an,colorSpace:Vn,depthBuffer:!1},r=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,t,e)}return r}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,r){const a=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ac),h.toneMapping=zn,h.autoClear=!1;const p=new ai({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Le(new Ze,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(Ac),x=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Jr(r,E*v,m>2?v:0,v,v),h.setRenderTarget(r),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===qi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rc[(r-s-1)%Rc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ri-1),x=s/g,f=isFinite(s)?1+Math.floor(h*x):ri;f>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ri}`);const m=[];let E=0;for(let R=0;R<ri;++R){const D=R/x,J=Math.exp(-D*D/2);m.push(J),R===0?E+=J:R<f&&(E+=2*J)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[r],N=3*S*(r>v-Fi?r-v+Fi:0),C=4*(this._cubeSize-S);Jr(e,N,C,3*S,2*S),c.setRenderTarget(e),c.render(u,ho)}}function im(i){const t=[],e=[],n=[];let r=i;const s=i-Fi+1+Tc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Fi?c=Tc[o-i+Fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,f=2,m=1,E=new Float32Array(x*g*p),v=new Float32Array(f*g*p),S=new Float32Array(m*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,D=C>2?0:-1,J=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];E.set(J,x*g*C),v.set(d,f*g*C);const _=[C,C,C,C,C,C];S.set(_,m*g*C)}const N=new ve;N.setAttribute("position",new Fe(E,x)),N.setAttribute("uv",new Fe(v,f)),N.setAttribute("faceIndex",new Fe(S,m)),t.push(N),r>Fi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(i,t,e){const n=new li(i,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rm(i,t,e){const n=new Float32Array(ri),r=new A(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Lc(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Dc(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function sm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ko||c===jo,h=c===qi||c===Yi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Cc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function am(i,t,e,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let f=0,m=x.length;f<m;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let v=0,S=E.length;v<S;v+=3){const N=E[v+0],C=E[v+1],R=E[v+2];d.push(N,C,C,R,R,N)}}else if(g!==void 0){const E=g.array;x=g.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const N=v+0,C=v+1,R=v+2;d.push(N,C,C,R,R,N)}}else return;const f=new(Zl(d)?eh:th)(d,1);f.version=x;const m=s.get(u);m&&t.remove(m),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function cm(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function u(d,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/o,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=p[E];for(let E=0;E<x.length;E++)e.update(m,n,x[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function hm(i,t,e){const n=new WeakMap,r=new ae;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let J=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let S=a.attributes.position.count*v,N=1;S>t.maxTextureSize&&(N=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*N*4*u),R=new Jl(C,S,N,u);R.type=En,R.needsUpdate=!0;const D=v*4;for(let _=0;_<u;_++){const y=f[_],I=m[_],F=E[_],L=S*N*4*_;for(let O=0;O<y.count;O++){const P=O*D;p===!0&&(r.fromBufferAttribute(y,O),C[L+P+0]=r.x,C[L+P+1]=r.y,C[L+P+2]=r.z,C[L+P+3]=0),g===!0&&(r.fromBufferAttribute(I,O),C[L+P+4]=r.x,C[L+P+5]=r.y,C[L+P+6]=r.z,C[L+P+7]=0),x===!0&&(r.fromBufferAttribute(F,O),C[L+P+8]=r.x,C[L+P+9]=r.y,C[L+P+10]=r.z,C[L+P+11]=F.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new gt(S,N)},n.set(a,d),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function um(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class ah extends He{constructor(t,e,n,r,s,o,a,c,l,h=Gi){if(h!==Gi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=ci),n===void 0&&h===ji&&(n=Ki),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ch=new He,Ic=new ah(1,1),lh=new Jl,hh=new Zu,uh=new rh,Uc=[],Nc=[],Oc=new Float32Array(16),Fc=new Float32Array(9),Bc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Os(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),be(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),be(e,n)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),be(e,n)}}function xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Am(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=jl,s=Ic):s=ch,e.setTexture2D(t||s,r)}function Rm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hh,r)}function Cm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||uh,r)}function Pm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||lh,r)}function Lm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return bm;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(i,t){i.uniform1fv(this.addr,t)}function Im(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Um(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Nm(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Om(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fm(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bm(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function Gm(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Wm(i,t){i.uniform2uiv(this.addr,t)}function Xm(i,t){i.uniform3uiv(this.addr,t)}function qm(i,t){i.uniform4uiv(this.addr,t)}function Ym(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ch,s[o])}function Km(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hh,s[o])}function jm(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||uh,s[o])}function Zm(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||lh,s[o])}function $m(i){switch(i){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Nm;case 35674:return Om;case 35675:return Fm;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Zm}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class tg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function eg(i,t,e){const n=i.name,r=n.length;for(go.lastIndex=0;;){const s=go.exec(n),o=go.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kc(e,l===void 0?new Jm(a,i,t):new Qm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new tg(a),kc(e,u)),e=u}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);eg(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function zc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ng=37297;let ig=0;function rg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sg(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Es&&e===Ss?n="LinearDisplayP3ToLinearSRGB":t===Ss&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case Us:return[n,"LinearTransferOETF"];case hn:case ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+rg(i.getShaderSource(t),o)}else return r}function og(i,t){const e=sg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ag(i,t){let e;switch(t){case au:e="Linear";break;case cu:e="Reinhard";break;case lu:e="Cineon";break;case hu:e="ACESFilmic";break;case du:e="AgX";break;case fu:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qr=new A;function cg(){se.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function hg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(dg,pg)}const fg=new Map;function pg(i,t){let e=Kt[t];if(e===void 0){const n=fg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ba(e)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(mg,gg)}function gg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function vg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ou:t="ENVMAP_BLENDING_ADD";break}return t}function Mg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_g(e),l=vg(e),h=xg(e),u=yg(e),d=Mg(e),p=lg(e),g=hg(s),x=r.createProgram();let f,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(f=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==zn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,og("linearToOutputTexel",e.outputColorSpace),cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=ba(o),o=Gc(o,e),o=Vc(o,e),a=ba(a),a=Gc(a,e),a=Vc(a,e),o=Wc(o),a=Wc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=E+f+o,S=E+m+a,N=zc(r,r.VERTEX_SHADER,v),C=zc(r,r.FRAGMENT_SHADER,S);r.attachShader(x,N),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(y){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(N).trim(),L=r.getShaderInfoLog(C).trim();let O=!0,P=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,N,C);else{const q=Hc(r,N,"vertex"),W=Hc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+I+`
`+q+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||L==="")&&(P=!1);P&&(y.diagnostics={runnable:O,programLog:I,vertexShader:{log:F,prefix:f},fragmentShader:{log:L,prefix:m}})}r.deleteShader(N),r.deleteShader(C),D=new vs(r,x),J=ug(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let J;this.getAttributes=function(){return J===void 0&&R(this),J};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,ng)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ig++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=C,this}let Eg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wg(t),e.set(t,n)),n}}class wg{constructor(t){this.id=Eg++,this.code=t,this.usedTimes=0}}function Tg(i,t,e,n,r,s,o){const a=new Ha,c=new bg,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,I,F,L){const O=F.fog,P=L.geometry,q=_.isMeshStandardMaterial?F.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),_t=W&&W.mapping===Is?W.image.height:null,vt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,dt=tt!==void 0?tt.length:0;let pt=0;P.morphAttributes.position!==void 0&&(pt=1),P.morphAttributes.normal!==void 0&&(pt=2),P.morphAttributes.color!==void 0&&(pt=3);let U,X,nt,Y;if(vt){const ue=un[vt];U=ue.vertexShader,X=ue.fragmentShader}else U=_.vertexShader,X=_.fragmentShader,c.update(_),nt=c.getVertexShaderID(_),Y=c.getFragmentShaderID(_);const lt=i.getRenderTarget(),ht=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,St=!!_.map,Z=!!_.matcap,T=!!W,at=!!_.aoMap,st=!!_.lightMap,V=!!_.bumpMap,et=!!_.normalMap,ft=!!_.displacementMap,yt=!!_.emissiveMap,w=!!_.metalnessMap,M=!!_.roughnessMap,H=_.anisotropy>0,it=_.clearcoat>0,ot=_.dispersion>0,Q=_.iridescence>0,wt=_.sheen>0,ut=_.transmission>0,Tt=H&&!!_.anisotropyMap,Gt=it&&!!_.clearcoatMap,rt=it&&!!_.clearcoatNormalMap,Pt=it&&!!_.clearcoatRoughnessMap,kt=Q&&!!_.iridescenceMap,At=Q&&!!_.iridescenceThicknessMap,Dt=wt&&!!_.sheenColorMap,Yt=wt&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,Qt=!!_.specularColorMap,B=!!_.specularIntensityMap,Rt=ut&&!!_.transmissionMap,$=ut&&!!_.thicknessMap,ct=!!_.gradientMap,Lt=!!_.alphaMap,It=_.alphaTest>0,Zt=!!_.alphaHash,he=!!_.extensions;let $t=zn;_.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&($t=i.toneMapping);const Bt={shaderID:vt,shaderType:_.type,shaderName:_.name,vertexShader:U,fragmentShader:X,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:ht,instancingColor:ht&&L.instanceColor!==null,instancingMorph:ht&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Vn,alphaToCoverage:!!_.alphaToCoverage,map:St,matcap:Z,envMap:T,envMapMode:T&&W.mapping,envMapCubeUVHeight:_t,aoMap:at,lightMap:st,bumpMap:V,normalMap:et,displacementMap:p&&ft,emissiveMap:yt,normalMapObjectSpace:et&&_.normalMapType===_u,normalMapTangentSpace:et&&_.normalMapType===Kl,metalnessMap:w,roughnessMap:M,anisotropy:H,anisotropyMap:Tt,clearcoat:it,clearcoatMap:Gt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Pt,dispersion:ot,iridescence:Q,iridescenceMap:kt,iridescenceThicknessMap:At,sheen:wt,sheenColorMap:Dt,sheenRoughnessMap:Yt,specularMap:Nt,specularColorMap:Qt,specularIntensityMap:B,transmission:ut,transmissionMap:Rt,thicknessMap:$,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Hi&&_.alphaToCoverage===!1,alphaMap:Lt,alphaTest:It,alphaHash:Zt,combine:_.combine,mapUv:St&&f(_.map.channel),aoMapUv:at&&f(_.aoMap.channel),lightMapUv:st&&f(_.lightMap.channel),bumpMapUv:V&&f(_.bumpMap.channel),normalMapUv:et&&f(_.normalMap.channel),displacementMapUv:ft&&f(_.displacementMap.channel),emissiveMapUv:yt&&f(_.emissiveMap.channel),metalnessMapUv:w&&f(_.metalnessMap.channel),roughnessMapUv:M&&f(_.roughnessMap.channel),anisotropyMapUv:Tt&&f(_.anisotropyMap.channel),clearcoatMapUv:Gt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:At&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&f(_.sheenRoughnessMap.channel),specularMapUv:Nt&&f(_.specularMap.channel),specularColorMapUv:Qt&&f(_.specularColorMap.channel),specularIntensityMapUv:B&&f(_.specularIntensityMap.channel),transmissionMapUv:Rt&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:Lt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(et||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(St||Lt),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:St&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function E(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)y.push(I),y.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(v(y,_),S(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function v(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function N(_){const y=x[_.type];let I;if(y){const F=un[y];I=cd.clone(F.uniforms)}else I=_.uniforms;return I}function C(_,y){let I;for(let F=0,L=h.length;F<L;F++){const O=h[F];if(O.cacheKey===y){I=O,++I.usedTimes;break}}return I===void 0&&(I=new Sg(i,y,_,s),h.push(I)),I}function R(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function D(_){c.remove(_)}function J(){c.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:N,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:J}}function Ag(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,p,g,x,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=f),t++,m}function a(u,d,p,g,x,f){const m=o(u,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function c(u,d,p,g,x,f){const m=o(u,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Rg),n.length>1&&n.sort(d||qc),r.length>1&&r.sort(d||qc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Cg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Yc,i.set(n,[o])):r>=s.length?(o=new Yc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Xt};break;case"SpotLight":e={position:new A,direction:new A,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dg=0;function Ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ug(i){const t=new Pg,e=Lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const r=new A,s=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,E=0,v=0,S=0,N=0,C=0,R=0;l.sort(Ig);for(let J=0,_=l.length;J<_;J++){const y=l[J],I=y.color,F=y.intensity,L=y.distance,O=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(y.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(y.sh.coefficients[P],F);R++}else if(y.isDirectionalLight){const P=t.get(y);if(P.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const q=y.shadow,W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=y.shadow.matrix,E++}n.directional[p]=P,p++}else if(y.isSpotLight){const P=t.get(y);P.position.setFromMatrixPosition(y.matrixWorld),P.color.copy(I).multiplyScalar(F),P.distance=L,P.coneCos=Math.cos(y.angle),P.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),P.decay=y.decay,n.spot[x]=P;const q=y.shadow;if(y.map&&(n.spotLightMap[N]=y.map,N++,q.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[x]=q.matrix,y.castShadow){const W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=O,S++}x++}else if(y.isRectAreaLight){const P=t.get(y);P.color.copy(I).multiplyScalar(F),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),n.rectArea[f]=P,f++}else if(y.isPointLight){const P=t.get(y);if(P.color.copy(y.color).multiplyScalar(y.intensity),P.distance=y.distance,P.decay=y.decay,y.castShadow){const q=y.shadow,W=e.get(y);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=y.shadow.matrix,v++}n.point[g]=P,g++}else if(y.isHemisphereLight){const P=t.get(y);P.skyColor.copy(y.color).multiplyScalar(F),P.groundColor.copy(y.groundColor).multiplyScalar(F),n.hemi[m]=P,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==f||D.hemiLength!==m||D.numDirectionalShadows!==E||D.numPointShadows!==v||D.numSpotShadows!==S||D.numSpotMaps!==N||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=f,D.hemiLength=m,D.numDirectionalShadows=E,D.numPointShadows=v,D.numSpotShadows=S,D.numSpotMaps=N,D.numLightProbes=R,n.version=Dg++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0;const f=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const v=l[m];if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(v.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),p++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(v.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function Kc(i){const t=new Ug(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ng(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Kc(i),t.set(r,[a])):s>=o.length?(a=new Kc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Og extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function zg(i,t,e){let n=new Ga;const r=new gt,s=new gt,o=new ae,a=new Og({depthPacking:gu}),c=new Fg,l={},h=e.maxTextureSize,u={[Hn]:ze,[ze]:Hn,[dn]:dn},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Bg,fragmentShader:kg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Le(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let m=this.type;this.render=function(C,R,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const J=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),I=i.state;I.setBlending(kn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=m!==Mn&&this.type===Mn,L=m===Mn&&this.type!==Mn;for(let O=0,P=C.length;O<P;O++){const q=C[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const _t=W.getFrameExtents();if(r.multiply(_t),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/_t.x),r.x=s.x*_t.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/_t.y),r.y=s.y*_t.y,W.mapSize.y=s.y)),W.map===null||F===!0||L===!0){const tt=this.type!==Mn?{minFilter:$e,magFilter:$e}:{};W.map!==null&&W.map.dispose(),W.map=new li(r.x,r.y,tt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const vt=W.getViewportCount();for(let tt=0;tt<vt;tt++){const dt=W.getViewport(tt);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),I.viewport(o),W.updateMatrices(q,tt),n=W.getFrustum(),S(R,D,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Mn&&E(W,D),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(J,_,y)};function E(C,R){const D=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,D,p,x,null)}function v(C,R,D,J){let _=null;const y=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)_=y;else if(_=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=_.uuid,F=R.uuid;let L=l[I];L===void 0&&(L={},l[I]=L);let O=L[F];O===void 0&&(O=_.clone(),L[F]=O,R.addEventListener("dispose",N)),_=O}if(_.visible=R.visible,_.wireframe=R.wireframe,J===Mn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=i.properties.get(_);I.light=D}return _}function S(C,R,D,J,_){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=t.update(C),L=C.material;if(Array.isArray(L)){const O=F.groups;for(let P=0,q=O.length;P<q;P++){const W=O[P],_t=L[W.materialIndex];if(_t&&_t.visible){const vt=v(C,_t,J,_);C.onBeforeShadow(i,C,R,D,F,vt,W),i.renderBufferDirect(D,null,F,vt,C,W),C.onAfterShadow(i,C,R,D,F,vt,W)}}}else if(L.visible){const O=v(C,L,J,_);C.onBeforeShadow(i,C,R,D,F,O,null),i.renderBufferDirect(D,null,F,O,C,null),C.onAfterShadow(i,C,R,D,F,O,null)}}const I=C.children;for(let F=0,L=I.length;F<L;F++)S(I[F],R,D,J,_)}function N(C){C.target.removeEventListener("dispose",N);for(const D in l){const J=l[D],_=C.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}const Hg={[Ho]:Go,[Vo]:qo,[Wo]:Yo,[Xi]:Xo,[Go]:Ho,[qo]:Vo,[Yo]:Wo,[Xo]:Xi};function Gg(i){function t(){let B=!1;const Rt=new ae;let $=null;const ct=new ae(0,0,0,0);return{setMask:function(Lt){$!==Lt&&!B&&(i.colorMask(Lt,Lt,Lt,Lt),$=Lt)},setLocked:function(Lt){B=Lt},setClear:function(Lt,It,Zt,he,$t){$t===!0&&(Lt*=he,It*=he,Zt*=he),Rt.set(Lt,It,Zt,he),ct.equals(Rt)===!1&&(i.clearColor(Lt,It,Zt,he),ct.copy(Rt))},reset:function(){B=!1,$=null,ct.set(-1,0,0,0)}}}function e(){let B=!1,Rt=!1,$=null,ct=null,Lt=null;return{setReversed:function(It){Rt=It},setTest:function(It){It?nt(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(It){$!==It&&!B&&(i.depthMask(It),$=It)},setFunc:function(It){if(Rt&&(It=Hg[It]),ct!==It){switch(It){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=It}},setLocked:function(It){B=It},setClear:function(It){Lt!==It&&(i.clearDepth(It),Lt=It)},reset:function(){B=!1,$=null,ct=null,Lt=null}}}function n(){let B=!1,Rt=null,$=null,ct=null,Lt=null,It=null,Zt=null,he=null,$t=null;return{setTest:function(Bt){B||(Bt?nt(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Bt){Rt!==Bt&&!B&&(i.stencilMask(Bt),Rt=Bt)},setFunc:function(Bt,ue,ie){($!==Bt||ct!==ue||Lt!==ie)&&(i.stencilFunc(Bt,ue,ie),$=Bt,ct=ue,Lt=ie)},setOp:function(Bt,ue,ie){(It!==Bt||Zt!==ue||he!==ie)&&(i.stencilOp(Bt,ue,ie),It=Bt,Zt=ue,he=ie)},setLocked:function(Bt){B=Bt},setClear:function(Bt){$t!==Bt&&(i.clearStencil(Bt),$t=Bt)},reset:function(){B=!1,Rt=null,$=null,ct=null,Lt=null,It=null,Zt=null,he=null,$t=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,f=null,m=null,E=null,v=null,S=null,N=null,C=new Xt(0,0,0),R=0,D=!1,J=null,_=null,y=null,I=null,F=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,P=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=P>=1):q.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=P>=2);let W=null,_t={};const vt=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),dt=new ae().fromArray(vt),pt=new ae().fromArray(tt);function U(B,Rt,$,ct){const Lt=new Uint8Array(4),It=i.createTexture();i.bindTexture(B,It),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Rt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return It}const X={};X[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),s.setFunc(Xi),st(!1),V(nc),nt(i.CULL_FACE),T(kn);function nt(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function Y(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function lt(B,Rt){return h[B]!==Rt?(i.bindFramebuffer(B,Rt),h[B]=Rt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Rt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ht(B,Rt){let $=d,ct=!1;if(B){$=u.get(Rt),$===void 0&&($=[],u.set(Rt,$));const Lt=B.textures;if($.length!==Lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Zt=Lt.length;It<Zt;It++)$[It]=i.COLOR_ATTACHMENT0+It;$.length=Lt.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function mt(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const St={[ii]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};St[Wh]=i.MIN,St[Xh]=i.MAX;const Z={[qh]:i.ZERO,[Yh]:i.ONE,[Kh]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function T(B,Rt,$,ct,Lt,It,Zt,he,$t,Bt){if(B===kn){g===!0&&(Y(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),B!==Hh){if(B!==x||Bt!==D){if((f!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,v=ii),Bt)switch(B){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,E=null,S=null,N=null,C.set(0,0,0),R=0,x=B,D=Bt}return}Lt=Lt||Rt,It=It||$,Zt=Zt||ct,(Rt!==f||Lt!==v)&&(i.blendEquationSeparate(St[Rt],St[Lt]),f=Rt,v=Lt),($!==m||ct!==E||It!==S||Zt!==N)&&(i.blendFuncSeparate(Z[$],Z[ct],Z[It],Z[Zt]),m=$,E=ct,S=It,N=Zt),(he.equals(C)===!1||$t!==R)&&(i.blendColor(he.r,he.g,he.b,$t),C.copy(he),R=$t),x=B,D=!1}function at(B,Rt){B.side===dn?Y(i.CULL_FACE):nt(i.CULL_FACE);let $=B.side===ze;Rt&&($=!$),st($),B.blending===Hi&&B.transparent===!1?T(kn):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ct=B.stencilWrite;o.setTest(ct),ct&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ft(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(B){J!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),J=B)}function V(B){B!==Bh?(nt(i.CULL_FACE),B!==_&&(B===nc?i.cullFace(i.BACK):B===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),_=B}function et(B){B!==y&&(O&&i.lineWidth(B),y=B)}function ft(B,Rt,$){B?(nt(i.POLYGON_OFFSET_FILL),(I!==Rt||F!==$)&&(i.polygonOffset(Rt,$),I=Rt,F=$)):Y(i.POLYGON_OFFSET_FILL)}function yt(B){B?nt(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function w(B){B===void 0&&(B=i.TEXTURE0+L-1),W!==B&&(i.activeTexture(B),W=B)}function M(B,Rt,$){$===void 0&&(W===null?$=i.TEXTURE0+L-1:$=W);let ct=_t[$];ct===void 0&&(ct={type:void 0,texture:void 0},_t[$]=ct),(ct.type!==B||ct.texture!==Rt)&&(W!==$&&(i.activeTexture($),W=$),i.bindTexture(B,Rt||X[B]),ct.type=B,ct.texture=Rt)}function H(){const B=_t[W];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(B){dt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),dt.copy(B))}function Dt(B){pt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),pt.copy(B))}function Yt(B,Rt){let $=c.get(Rt);$===void 0&&($=new WeakMap,c.set(Rt,$));let ct=$.get(B);ct===void 0&&(ct=i.getUniformBlockIndex(Rt,B.name),$.set(B,ct))}function Nt(B,Rt){const ct=c.get(Rt).get(B);a.get(Rt)!==ct&&(i.uniformBlockBinding(Rt,ct,B.__bindingPointIndex),a.set(Rt,ct))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,_t={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,f=null,m=null,E=null,v=null,S=null,N=null,C=new Xt(0,0,0),R=0,D=!1,J=null,_=null,y=null,I=null,F=null,dt.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:nt,disable:Y,bindFramebuffer:lt,drawBuffers:ht,useProgram:mt,setBlending:T,setMaterial:at,setFlipSided:st,setCullFace:V,setLineWidth:et,setPolygonOffset:ft,setScissorTest:yt,activeTexture:w,bindTexture:M,unbindTexture:H,compressedTexImage2D:it,compressedTexImage3D:ot,texImage2D:Pt,texImage3D:kt,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:Gt,texStorage3D:rt,texSubImage2D:Q,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Tt,scissor:At,viewport:Dt,reset:Qt}}function jc(i,t,e,n){const r=Vg(n);switch(e){case Hl:return i*t;case Vl:return i*t;case Wl:return i*t*2;case Xl:return i*t/r.components*r.byteLength;case Oa:return i*t/r.components*r.byteLength;case ql:return i*t*2/r.components*r.byteLength;case Fa:return i*t*2/r.components*r.byteLength;case Gl:return i*t*3/r.components*r.byteLength;case an:return i*t*4/r.components*r.byteLength;case Ba:return i*t*4/r.components*r.byteLength;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gs:case xa:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yl:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vg(i){switch(i){case Tn:case Bl:return{byteLength:1,components:1};case xr:case kl:case Rr:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case ci:case Ia:case En:return{byteLength:4,components:1};case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):ws("canvas")}function x(w,M,H){let it=1;const ot=yt(w);if((ot.width>H||ot.height>H)&&(it=H/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(it*ot.width),wt=Math.floor(it*ot.height);u===void 0&&(u=g(Q,wt));const ut=M?g(Q,wt):u;return ut.width=Q,ut.height=wt,ut.getContext("2d").drawImage(w,0,0,Q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+wt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==$e&&w.minFilter!==sn}function m(w){i.generateMipmap(w)}function E(w,M,H,it,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),M===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){const wt=ot?Ms:se.getTransfer(it);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=wt===de?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(w,M){let H;return w?M===null||M===ci||M===Ki?H=i.DEPTH24_STENCIL8:M===En?H=i.DEPTH32F_STENCIL8:M===xr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ci||M===Ki?H=i.DEPTH_COMPONENT24:M===En?H=i.DEPTH_COMPONENT32F:M===xr&&(H=i.DEPTH_COMPONENT16),H}function S(w,M){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==$e&&w.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function N(w){const M=w.target;M.removeEventListener("dispose",N),R(M),M.isVideoTexture&&h.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),J(M)}function R(w){const M=n.get(w);if(M.__webglInit===void 0)return;const H=w.source,it=d.get(H);if(it){const ot=it[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&D(w),Object.keys(it).length===0&&d.delete(H)}n.remove(w)}function D(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const H=w.source,it=d.get(H);delete it[M.__cacheKey],o.memory.textures--}function J(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ot=0;ot<M.__webglFramebuffer[it].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[it][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=w.textures;for(let it=0,ot=H.length;it<ot;it++){const Q=n.get(H[it]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(H[it])}n.remove(w)}let _=0;function y(){_=0}function I(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function L(w,M){const H=n.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const it=w.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,w,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function O(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){pt(H,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function P(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){pt(H,w,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function q(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){U(H,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const W={[Zo]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},_t={[$e]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},vt={[vu]:i.NEVER,[bu]:i.ALWAYS,[xu]:i.LESS,[jl]:i.LEQUAL,[yu]:i.EQUAL,[Eu]:i.GEQUAL,[Mu]:i.GREATER,[Su]:i.NOTEQUAL};function tt(w,M){if(M.type===En&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Gs||M.magFilter===Ir||M.magFilter===oi||M.minFilter===sn||M.minFilter===Gs||M.minFilter===Ir||M.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,W[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,W[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,W[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$e||M.minFilter!==Ir&&M.minFilter!==oi||M.type===En&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function dt(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N));const it=M.source;let ot=d.get(it);ot===void 0&&(ot={},d.set(it,ot));const Q=F(M);if(Q!==w.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ot[Q].usedTimes++;const wt=ot[w.__cacheKey];wt!==void 0&&(ot[w.__cacheKey].usedTimes--,wt.usedTimes===0&&D(M)),w.__cacheKey=Q,w.__webglTexture=ot[Q].texture}return H}function pt(w,M,H){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const ot=dt(w,M),Q=M.source;e.bindTexture(it,w.__webglTexture,i.TEXTURE0+H);const wt=n.get(Q);if(Q.version!==wt.__version||ot===!0){e.activeTexture(i.TEXTURE0+H);const ut=se.getPrimaries(se.workingColorSpace),Tt=M.colorSpace===Fn?null:se.getPrimaries(M.colorSpace),Gt=M.colorSpace===Fn||ut===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let rt=x(M.image,!1,r.maxTextureSize);rt=ft(M,rt);const Pt=s.convert(M.format,M.colorSpace),kt=s.convert(M.type);let At=E(M.internalFormat,Pt,kt,M.colorSpace,M.isVideoTexture);tt(it,M);let Dt;const Yt=M.mipmaps,Nt=M.isVideoTexture!==!0,Qt=wt.__version===void 0||ot===!0,B=Q.dataReady,Rt=S(M,rt);if(M.isDepthTexture)At=v(M.format===ji,M.type),Qt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,At,rt.width,rt.height,0,Pt,kt,null));else if(M.isDataTexture)if(Yt.length>0){Nt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Rt,At,Yt[0].width,Yt[0].height);for(let $=0,ct=Yt.length;$<ct;$++)Dt=Yt[$],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Dt.width,Dt.height,Pt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,$,At,Dt.width,Dt.height,0,Pt,kt,Dt.data);M.generateMipmaps=!1}else Nt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Rt,At,rt.width,rt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Pt,kt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,At,rt.width,rt.height,0,Pt,kt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,At,Yt[0].width,Yt[0].height,rt.depth);for(let $=0,ct=Yt.length;$<ct;$++)if(Dt=Yt[$],M.format!==an)if(Pt!==null)if(Nt){if(B)if(M.layerUpdates.size>0){const Lt=jc(Dt.width,Dt.height,M.format,M.type);for(const It of M.layerUpdates){const Zt=Dt.data.subarray(It*Lt/Dt.data.BYTES_PER_ELEMENT,(It+1)*Lt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,It,Dt.width,Dt.height,1,Pt,Zt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Dt.width,Dt.height,rt.depth,Pt,Dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,At,Dt.width,Dt.height,rt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Dt.width,Dt.height,rt.depth,Pt,kt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,At,Dt.width,Dt.height,rt.depth,0,Pt,kt,Dt.data)}else{Nt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Rt,At,Yt[0].width,Yt[0].height);for(let $=0,ct=Yt.length;$<ct;$++)Dt=Yt[$],M.format!==an?Pt!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Dt.width,Dt.height,Pt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,At,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Dt.width,Dt.height,Pt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,$,At,Dt.width,Dt.height,0,Pt,kt,Dt.data)}else if(M.isDataArrayTexture)if(Nt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,At,rt.width,rt.height,rt.depth),B)if(M.layerUpdates.size>0){const $=jc(rt.width,rt.height,M.format,M.type);for(const ct of M.layerUpdates){const Lt=rt.data.subarray(ct*$/rt.data.BYTES_PER_ELEMENT,(ct+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,rt.width,rt.height,1,Pt,kt,Lt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Pt,kt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,Pt,kt,rt.data);else if(M.isData3DTexture)Nt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Rt,At,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Pt,kt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,Pt,kt,rt.data);else if(M.isFramebufferTexture){if(Qt)if(Nt)e.texStorage2D(i.TEXTURE_2D,Rt,At,rt.width,rt.height);else{let $=rt.width,ct=rt.height;for(let Lt=0;Lt<Rt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,At,$,ct,0,Pt,kt,null),$>>=1,ct>>=1}}else if(Yt.length>0){if(Nt&&Qt){const $=yt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,At,$.width,$.height)}for(let $=0,ct=Yt.length;$<ct;$++)Dt=Yt[$],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt,kt,Dt):e.texImage2D(i.TEXTURE_2D,$,At,Pt,kt,Dt);M.generateMipmaps=!1}else if(Nt){if(Qt){const $=yt(rt);e.texStorage2D(i.TEXTURE_2D,Rt,At,$.width,$.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,kt,rt)}else e.texImage2D(i.TEXTURE_2D,0,At,Pt,kt,rt);f(M)&&m(it),wt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function U(w,M,H){if(M.image.length!==6)return;const it=dt(w,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const Q=n.get(ot);if(ot.version!==Q.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const wt=se.getPrimaries(se.workingColorSpace),ut=M.colorSpace===Fn?null:se.getPrimaries(M.colorSpace),Tt=M.colorSpace===Fn||wt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Gt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,Pt=[];for(let ct=0;ct<6;ct++)!Gt&&!rt?Pt[ct]=x(M.image[ct],!0,r.maxCubemapSize):Pt[ct]=rt?M.image[ct].image:M.image[ct],Pt[ct]=ft(M,Pt[ct]);const kt=Pt[0],At=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type),Yt=E(M.internalFormat,At,Dt,M.colorSpace),Nt=M.isVideoTexture!==!0,Qt=Q.__version===void 0||it===!0,B=ot.dataReady;let Rt=S(M,kt);tt(i.TEXTURE_CUBE_MAP,M);let $;if(Gt){Nt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,kt.width,kt.height);for(let ct=0;ct<6;ct++){$=Pt[ct].mipmaps;for(let Lt=0;Lt<$.length;Lt++){const It=$[Lt];M.format!==an?At!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,It.width,It.height,At,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,Yt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,0,0,It.width,It.height,At,Dt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt,Yt,It.width,It.height,0,At,Dt,It.data)}}}else{if($=M.mipmaps,Nt&&Qt){$.length>0&&Rt++;const ct=yt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(rt){Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Pt[ct].width,Pt[ct].height,At,Dt,Pt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,Pt[ct].width,Pt[ct].height,0,At,Dt,Pt[ct].data);for(let Lt=0;Lt<$.length;Lt++){const Zt=$[Lt].image[ct].image;Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,Zt.width,Zt.height,At,Dt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,Yt,Zt.width,Zt.height,0,At,Dt,Zt.data)}}else{Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At,Dt,Pt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Yt,At,Dt,Pt[ct]);for(let Lt=0;Lt<$.length;Lt++){const It=$[Lt];Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,0,0,At,Dt,It.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Lt+1,Yt,At,Dt,It.image[ct])}}}f(M)&&m(i.TEXTURE_CUBE_MAP),Q.__version=ot.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function X(w,M,H,it,ot,Q){const wt=s.convert(H.format,H.colorSpace),ut=s.convert(H.type),Tt=E(H.internalFormat,wt,ut,H.colorSpace);if(!n.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>Q),Pt=Math.max(1,M.height>>Q);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,Tt,rt,Pt,M.depth,0,wt,ut,null):e.texImage2D(ot,Q,Tt,rt,Pt,0,wt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ot,n.get(H).__webglTexture,0,st(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ot,n.get(H).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const it=M.depthTexture,ot=it&&it.isDepthTexture?it.type:null,Q=v(M.stencilBuffer,ot),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=st(M);V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Q,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,w)}else{const it=M.textures;for(let ot=0;ot<it.length;ot++){const Q=it[ot],wt=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),Tt=E(Q.internalFormat,wt,ut,Q.colorSpace),Gt=st(M);H&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,M.width,M.height):V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Tt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const it=n.get(M.depthTexture).__webglTexture,ot=st(M);if(M.depthTexture.format===Gi)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===ji)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function lt(w){const M=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const it=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=it}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Y(M.__webglFramebuffer,w)}else if(H){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[it],w,!1);else{const ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,M,H){const it=n.get(w);M!==void 0&&X(it.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&lt(w)}function mt(w){const M=w.texture,H=n.get(w),it=n.get(M);w.addEventListener("dispose",C);const ot=w.textures,Q=w.isWebGLCubeRenderTarget===!0,wt=ot.length>1;if(wt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)H.__webglFramebuffer[ut][Tt]=i.createFramebuffer()}else H.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)H.__webglFramebuffer[ut]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ut=0,Tt=ot.length;ut<Tt;ut++){const Gt=n.get(ot[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&V(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){const Tt=ot[ut];H.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Gt=s.convert(Tt.format,Tt.colorSpace),rt=s.convert(Tt.type),Pt=E(Tt.internalFormat,Gt,rt,Tt.colorSpace,w.isXRRenderTarget===!0),kt=st(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Pt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),tt(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)X(H.__webglFramebuffer[ut][Tt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else X(H.__webglFramebuffer[ut],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,Tt=ot.length;ut<Tt;ut++){const Gt=ot[ut],rt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),tt(i.TEXTURE_2D,Gt),X(H.__webglFramebuffer,w,Gt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),f(Gt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),tt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Tt=0;Tt<M.mipmaps.length;Tt++)X(H.__webglFramebuffer[Tt],w,M,i.COLOR_ATTACHMENT0,ut,Tt);else X(H.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ut,0);f(M)&&m(ut),e.unbindTexture()}w.depthBuffer&&lt(w)}function St(w){const M=w.textures;for(let H=0,it=M.length;H<it;H++){const ot=M[H];if(f(ot)){const Q=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(ot).__webglTexture;e.bindTexture(Q,wt),m(Q),e.unbindTexture()}}}const Z=[],T=[];function at(w){if(w.samples>0){if(V(w)===!1){const M=w.textures,H=w.width,it=w.height;let ot=i.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(w),ut=M.length>1;if(ut)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const Gt=n.get(M[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,H,it,0,0,H,it,ot,i.NEAREST),c===!0&&(Z.length=0,T.length=0,Z.push(i.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Z.push(Q),T.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const Gt=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function st(w){return Math.min(r.maxSamples,w.samples)}function V(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function ft(w,M){const H=w.colorSpace,it=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Vn&&H!==Fn&&(se.getTransfer(H)===de?(it!==an||ot!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=P,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=X,this.useMultisampledRTT=V}function Xg(i,t){function e(n,r=Fn){let s;const o=se.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bl)return i.BYTE;if(n===kl)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===Hl)return i.ALPHA;if(n===Gl)return i.RGB;if(n===an)return i.RGBA;if(n===Vl)return i.LUMINANCE;if(n===Wl)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===ql)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===ds||n===fs||n===ps||n===ms)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===ta||n===ea)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gs||n===xa||n===ya)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===gs)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Ma||n===Sa||n===Ea)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===gs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qg extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new He,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Gn({vertexShader:Kg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends di{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const x=new Zg,f=e.getContextAttributes();let m=null,E=null;const v=[],S=[],N=new gt;let C=null;const R=new Oe;R.layers.enable(1),R.viewport=new ae;const D=new Oe;D.layers.enable(2),D.viewport=new ae;const J=[R,D],_=new qg;_.layers.enable(1),_.layers.enable(2);let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=v[U];return X===void 0&&(X=new _o,v[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=v[U];return X===void 0&&(X=new _o,v[U]=X),X.getGripSpace()},this.getHand=function(U){let X=v[U];return X===void 0&&(X=new _o,v[U]=X),X.getHandSpace()};function F(U){const X=S.indexOf(U.inputSource);if(X===-1)return;const nt=v[X];nt!==void 0&&(nt.update(U.inputSource,U.frame,l||o),nt.dispatchEvent({type:U.type,data:U.inputSource}))}function L(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let U=0;U<v.length;U++){const X=S[U];X!==null&&(S[U]=null,v[U].disconnect(X))}y=null,I=null,x.reset(),t.setRenderTarget(m),p=null,d=null,u=null,r=null,E=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const X={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,X),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new li(p.framebufferWidth,p.framebufferHeight,{format:an,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let X=null,nt=null,Y=null;f.depth&&(Y=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=f.stencil?ji:Gi,nt=f.stencil?Ki:ci);const lt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(lt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new li(d.textureWidth,d.textureHeight,{format:an,type:Tn,depthTexture:new ah(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),pt.setContext(r),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(U){for(let X=0;X<U.removed.length;X++){const nt=U.removed[X],Y=S.indexOf(nt);Y>=0&&(S[Y]=null,v[Y].disconnect(nt))}for(let X=0;X<U.added.length;X++){const nt=U.added[X];let Y=S.indexOf(nt);if(Y===-1){for(let ht=0;ht<v.length;ht++)if(ht>=S.length){S.push(nt),Y=ht;break}else if(S[ht]===null){S[ht]=nt,Y=ht;break}if(Y===-1)break}const lt=v[Y];lt&&lt.connect(nt)}}const P=new A,q=new A;function W(U,X,nt){P.setFromMatrixPosition(X.matrixWorld),q.setFromMatrixPosition(nt.matrixWorld);const Y=P.distanceTo(q),lt=X.projectionMatrix.elements,ht=nt.projectionMatrix.elements,mt=lt[14]/(lt[10]-1),St=lt[14]/(lt[10]+1),Z=(lt[9]+1)/lt[5],T=(lt[9]-1)/lt[5],at=(lt[8]-1)/lt[0],st=(ht[8]+1)/ht[0],V=mt*at,et=mt*st,ft=Y/(-at+st),yt=ft*-at;if(X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(yt),U.translateZ(ft),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),lt[10]===-1)U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const w=mt+ft,M=St+ft,H=V-yt,it=et+(Y-yt),ot=Z*St/M*w,Q=T*St/M*w;U.projectionMatrix.makePerspective(H,it,ot,Q,w,M),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function _t(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let X=U.near,nt=U.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),_.near=D.near=R.near=X,_.far=D.far=R.far=nt,(y!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,I=_.far);const Y=U.parent,lt=_.cameras;_t(_,Y);for(let ht=0;ht<lt.length;ht++)_t(lt[ht],Y);lt.length===2?W(_,R,D):_.projectionMatrix.copy(R.projectionMatrix),vt(U,_,Y)};function vt(U,X,nt){nt===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(nt.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=yr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let tt=null;function dt(U,X){if(h=X.getViewerPose(l||o),g=X,h!==null){const nt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Y=!1;nt.length!==_.cameras.length&&(_.cameras.length=0,Y=!0);for(let ht=0;ht<nt.length;ht++){const mt=nt[ht];let St=null;if(p!==null)St=p.getViewport(mt);else{const T=u.getViewSubImage(d,mt);St=T.viewport,ht===0&&(t.setRenderTargetTextures(E,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(E))}let Z=J[ht];Z===void 0&&(Z=new Oe,Z.layers.enable(ht),Z.viewport=new ae,J[ht]=Z),Z.matrix.fromArray(mt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(mt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(St.x,St.y,St.width,St.height),ht===0&&(_.matrix.copy(Z.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Y===!0&&_.cameras.push(Z)}const lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ht=u.getDepthInformation(nt[0]);ht&&ht.isValid&&ht.texture&&x.init(t,ht,r.renderState)}}for(let nt=0;nt<v.length;nt++){const Y=S[nt],lt=v[nt];Y!==null&&lt!==void 0&&lt.update(Y,X,l||o)}tt&&tt(U,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const pt=new sh;pt.setAnimationLoop(dt),this.setAnimationLoop=function(U){tt=U},this.dispose=function(){}}}const Jn=new fn,Jg=new ce;function Qg(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,nh(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function r(f,m,E,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),u(f,m)):m.isMeshPhongMaterial?(s(f,m),h(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,S)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),x(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,E,v):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ze&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ze&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const E=t.get(m),v=E.envMap,S=E.envMapRotation;v&&(f.envMap.value=v,Jn.copy(S),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),f.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Jn)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,E,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*E,f.scale.value=v*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,E){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const E=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t_(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,v){const S=v.program;n.uniformBlockBinding(E,S)}function l(E,v){let S=r[E.id];S===void 0&&(g(E),S=h(E),r[E.id]=S,E.addEventListener("dispose",f));const N=v.program;n.updateUBOMapping(E,N);const C=t.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function h(E){const v=u();E.__bindingPointIndex=v;const S=i.createBuffer(),N=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=r[E.id],S=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let J=0,_=D.length;J<_;J++){const y=D[J];if(p(y,C,J,N)===!0){const I=y.__offset,F=Array.isArray(y.value)?y.value:[y.value];let L=0;for(let O=0;O<F.length;O++){const P=F[O],q=x(P);typeof P=="number"||typeof P=="boolean"?(y.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,I+L,y.__data)):P.isMatrix3?(y.__data[0]=P.elements[0],y.__data[1]=P.elements[1],y.__data[2]=P.elements[2],y.__data[3]=0,y.__data[4]=P.elements[3],y.__data[5]=P.elements[4],y.__data[6]=P.elements[5],y.__data[7]=0,y.__data[8]=P.elements[6],y.__data[9]=P.elements[7],y.__data[10]=P.elements[8],y.__data[11]=0):(P.toArray(y.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,v,S,N){const C=E.value,R=v+"_"+S;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const D=N[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return N[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(E){const v=E.uniforms;let S=0;const N=16;for(let R=0,D=v.length;R<D;R++){const J=Array.isArray(v[R])?v[R]:[v[R]];for(let _=0,y=J.length;_<y;_++){const I=J[_],F=Array.isArray(I.value)?I.value:[I.value];for(let L=0,O=F.length;L<O;L++){const P=F[L],q=x(P),W=S%N,_t=W%q.boundary,vt=W+_t;S+=_t,vt!==0&&N-vt<q.storage&&(S+=N-vt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}const C=S%N;return C>0&&(S+=N-C),E.__size=S,E.__cache={},this}function x(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function f(E){const v=E.target;v.removeEventListener("dispose",f);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Wa{constructor(t={}){const{canvas:e=Hu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let S=!1,N=0,C=0,R=null,D=-1,J=null;const _=new ae,y=new ae;let I=null;const F=new Xt(0);let L=0,O=e.width,P=e.height,q=1,W=null,_t=null;const vt=new ae(0,0,O,P),tt=new ae(0,0,O,P);let dt=!1;const pt=new Ga;let U=!1,X=!1;const nt=new ce,Y=new ce,lt=new A,ht=new ae,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Z(){return R===null?q:1}let T=n;function at(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",It,!1),T===null){const z="webgl2";if(T=at(z,b),T===null)throw at(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,V,et,ft,yt,w,M,H,it,ot,Q,wt,ut,Tt,Gt,rt,Pt,kt,At,Dt,Yt,Nt,Qt,B;function Rt(){st=new om(T),st.init(),Nt=new Xg(T,st),V=new tm(T,st,t,Nt),et=new Gg(T),V.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),ft=new lm(T),yt=new Ag,w=new Wg(T,st,et,yt,V,Nt,ft),M=new nm(v),H=new sm(v),it=new md(T),Qt=new Jp(T,it),ot=new am(T,it,ft,Qt),Q=new um(T,ot,it,ft),At=new hm(T,V,w),rt=new em(yt),wt=new Tg(v,M,H,st,V,Qt,rt),ut=new Qg(v,yt),Tt=new Cg,Gt=new Ng(st),kt=new $p(v,M,H,et,Q,d,c),Pt=new zg(v,Q,V),B=new t_(T,ft,V,et),Dt=new Qp(T,st,ft),Yt=new cm(T,st,ft),ft.programs=wt.programs,v.capabilities=V,v.extensions=st,v.properties=yt,v.renderLists=Tt,v.shadowMap=Pt,v.state=et,v.info=ft}Rt();const $=new $g(v,T);this.xr=$,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(O,P,!1))},this.getSize=function(b){return b.set(O,P)},this.setSize=function(b,z,K=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,P=z,e.width=Math.floor(b*q),e.height=Math.floor(z*q),K===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(O*q,P*q).floor()},this.setDrawingBufferSize=function(b,z,K){O=b,P=z,q=K,e.width=Math.floor(b*K),e.height=Math.floor(z*K),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,z,K,j){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,z,K,j),et.viewport(_.copy(vt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,z,K,j){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,z,K,j),et.scissor(y.copy(tt).multiplyScalar(q).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){et.setScissorTest(dt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b=!0,z=!0,K=!0){let j=0;if(b){let k=!1;if(R!==null){const Mt=R.texture.format;k=Mt===Ba||Mt===Fa||Mt===Oa}if(k){const Mt=R.texture.type,Ut=Mt===Tn||Mt===ci||Mt===xr||Mt===Ki||Mt===Ua||Mt===Na,Ft=kt.getClearColor(),G=kt.getClearAlpha(),Et=Ft.r,bt=Ft.g,xt=Ft.b;Ut?(p[0]=Et,p[1]=bt,p[2]=xt,p[3]=G,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Et,g[1]=bt,g[2]=xt,g[3]=G,T.clearBufferiv(T.COLOR,0,g))}else j|=T.COLOR_BUFFER_BIT}z&&(j|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Tt.dispose(),Gt.dispose(),yt.dispose(),M.dispose(),H.dispose(),Q.dispose(),Qt.dispose(),B.dispose(),wt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Xn),$.removeEventListener("sessionend",Qi),ln.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ft.autoReset,z=Pt.enabled,K=Pt.autoUpdate,j=Pt.needsUpdate,k=Pt.type;Rt(),ft.autoReset=b,Pt.enabled=z,Pt.autoUpdate=K,Pt.needsUpdate=j,Pt.type=k}function It(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const z=b.target;z.removeEventListener("dispose",Zt),he(z)}function he(b){$t(b),yt.remove(b)}function $t(b){const z=yt.get(b).programs;z!==void 0&&(z.forEach(function(K){wt.releaseProgram(K)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,K,j,k,Mt){z===null&&(z=mt);const Ut=k.isMesh&&k.matrixWorld.determinant()<0,Ft=Dr(b,z,K,j,k);et.setMaterial(j,Ut);let G=K.index,Et=1;if(j.wireframe===!0){if(G=ot.getWireframeAttribute(K),G===void 0)return;Et=2}const bt=K.drawRange,xt=K.attributes.position;let zt=bt.start*Et,Vt=(bt.start+bt.count)*Et;Mt!==null&&(zt=Math.max(zt,Mt.start*Et),Vt=Math.min(Vt,(Mt.start+Mt.count)*Et)),G!==null?(zt=Math.max(zt,0),Vt=Math.min(Vt,G.count)):xt!=null&&(zt=Math.max(zt,0),Vt=Math.min(Vt,xt.count));const Wt=Vt-zt;if(Wt<0||Wt===1/0)return;Qt.setup(k,j,Ft,K,G);let ee,Ht=Dt;if(G!==null&&(ee=it.get(G),Ht=Yt,Ht.setIndex(ee)),k.isMesh)j.wireframe===!0?(et.setLineWidth(j.wireframeLinewidth*Z()),Ht.setMode(T.LINES)):Ht.setMode(T.TRIANGLES);else if(k.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),et.setLineWidth(Ot*Z()),k.isLineSegments?Ht.setMode(T.LINES):k.isLineLoop?Ht.setMode(T.LINE_LOOP):Ht.setMode(T.LINE_STRIP)}else k.isPoints?Ht.setMode(T.POINTS):k.isSprite&&Ht.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,te=k._multiDrawCounts,qt=k._multiDrawCount,xe=G?it.get(G).bytesPerElement:1,ge=yt.get(j).currentProgram.getUniforms();for(let we=0;we<qt;we++)ge.setValue(T,"_gl_DrawID",we),Ht.render(Ot[we]/xe,te[we])}else if(k.isInstancedMesh)Ht.renderInstances(zt,Wt,k.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,te=Math.min(K.instanceCount,Ot);Ht.renderInstances(zt,Wt,te)}else Ht.render(zt,Wt)};function Bt(b,z,K){b.transparent===!0&&b.side===dn&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,_i(b,z,K),b.side=Hn,b.needsUpdate=!0,_i(b,z,K),b.side=dn):_i(b,z,K)}this.compile=function(b,z,K=null){K===null&&(K=b),f=Gt.get(K),f.init(z),E.push(f),K.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),b!==K&&b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const j=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let Ut=0;Ut<Mt.length;Ut++){const Ft=Mt[Ut];Bt(Ft,K,k),j.add(Ft)}else Bt(Mt,K,k),j.add(Mt)}),E.pop(),f=null,j},this.compileAsync=function(b,z,K=null){const j=this.compile(b,z,K);return new Promise(k=>{function Mt(){if(j.forEach(function(Ut){yt.get(Ut).currentProgram.isReady()&&j.delete(Ut)}),j.size===0){k(b);return}setTimeout(Mt,10)}st.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ue=null;function ie(b){ue&&ue(b)}function Xn(){ln.stop()}function Qi(){ln.start()}const ln=new sh;ln.setAnimationLoop(ie),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(b){ue=b,$.setAnimationLoop(b),b===null?ln.stop():ln.start()},$.addEventListener("sessionstart",Xn),$.addEventListener("sessionend",Qi),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,R),f=Gt.get(b,E.length),f.init(z),E.push(f),Y.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),pt.setFromProjectionMatrix(Y),X=this.localClippingEnabled,U=rt.init(this.clippingPlanes,X),x=Tt.get(b,m.length),x.init(),m.push(x),$.enabled===!0&&$.isPresenting===!0){const Mt=v.xr.getDepthSensingMesh();Mt!==null&&gi(Mt,z,-1/0,v.sortObjects)}gi(b,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,_t),St=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,St&&kt.addToRenderList(x,b),this.info.render.frame++,U===!0&&rt.beginShadows();const K=f.state.shadowsArray;Pt.render(K,b,z),U===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,k=x.transmissive;if(f.setupLights(),z.isArrayCamera){const Mt=z.cameras;if(k.length>0)for(let Ut=0,Ft=Mt.length;Ut<Ft;Ut++){const G=Mt[Ut];er(j,k,b,G)}St&&kt.render(b);for(let Ut=0,Ft=Mt.length;Ut<Ft;Ut++){const G=Mt[Ut];tr(x,b,G,G.viewport)}}else k.length>0&&er(j,k,b,z),St&&kt.render(b),tr(x,b,z);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,z),Qt.resetDefaultState(),D=-1,J=null,E.pop(),E.length>0?(f=E[E.length-1],U===!0&&rt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function gi(b,z,K,j){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pt.intersectsSprite(b)){j&&ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);const Ut=Q.update(b),Ft=b.material;Ft.visible&&x.push(b,Ut,Ft,K,ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pt.intersectsObject(b))){const Ut=Q.update(b),Ft=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ht.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ht.copy(Ut.boundingSphere.center)),ht.applyMatrix4(b.matrixWorld).applyMatrix4(Y)),Array.isArray(Ft)){const G=Ut.groups;for(let Et=0,bt=G.length;Et<bt;Et++){const xt=G[Et],zt=Ft[xt.materialIndex];zt&&zt.visible&&x.push(b,Ut,zt,K,ht.z,xt)}}else Ft.visible&&x.push(b,Ut,Ft,K,ht.z,null)}}const Mt=b.children;for(let Ut=0,Ft=Mt.length;Ut<Ft;Ut++)gi(Mt[Ut],z,K,j)}function tr(b,z,K,j){const k=b.opaque,Mt=b.transmissive,Ut=b.transparent;f.setupLightsView(K),U===!0&&rt.setGlobalState(v.clippingPlanes,K),j&&et.viewport(_.copy(j)),k.length>0&&qn(k,z,K),Mt.length>0&&qn(Mt,z,K),Ut.length>0&&qn(Ut,z,K),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function er(b,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new li(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Rr:Tn,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const Mt=f.state.transmissionRenderTarget[j.id],Ut=j.viewport||_;Mt.setSize(Ut.z,Ut.w);const Ft=v.getRenderTarget();v.setRenderTarget(Mt),v.getClearColor(F),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),St&&kt.render(K);const G=v.toneMapping;v.toneMapping=zn;const Et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),U===!0&&rt.setGlobalState(v.clippingPlanes,j),qn(b,K,j),w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt),st.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let xt=0,zt=z.length;xt<zt;xt++){const Vt=z[xt],Wt=Vt.object,ee=Vt.geometry,Ht=Vt.material,Ot=Vt.group;if(Ht.side===dn&&Wt.layers.test(j.layers)){const te=Ht.side;Ht.side=ze,Ht.needsUpdate=!0,nr(Wt,K,j,ee,Ht,Ot),Ht.side=te,Ht.needsUpdate=!0,bt=!0}}bt===!0&&(w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt))}v.setRenderTarget(Ft),v.setClearColor(F,L),Et!==void 0&&(j.viewport=Et),v.toneMapping=G}function qn(b,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let k=0,Mt=b.length;k<Mt;k++){const Ut=b[k],Ft=Ut.object,G=Ut.geometry,Et=j===null?Ut.material:j,bt=Ut.group;Ft.layers.test(K.layers)&&nr(Ft,z,K,G,Et,bt)}}function nr(b,z,K,j,k,Mt){b.onBeforeRender(v,z,K,j,k,Mt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(v,z,K,j,b,Mt),k.transparent===!0&&k.side===dn&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,v.renderBufferDirect(K,z,j,k,b,Mt),k.side=Hn,k.needsUpdate=!0,v.renderBufferDirect(K,z,j,k,b,Mt),k.side=dn):v.renderBufferDirect(K,z,j,k,b,Mt),b.onAfterRender(v,z,K,j,k,Mt)}function _i(b,z,K){z.isScene!==!0&&(z=mt);const j=yt.get(b),k=f.state.lights,Mt=f.state.shadowsArray,Ut=k.state.version,Ft=wt.getParameters(b,k.state,Mt,z,K),G=wt.getProgramCacheKey(Ft);let Et=j.programs;j.environment=b.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",Zt),Et=new Map,j.programs=Et);let bt=Et.get(G);if(bt!==void 0){if(j.currentProgram===bt&&j.lightsStateVersion===Ut)return Lr(b,Ft),bt}else Ft.uniforms=wt.getUniforms(b),b.onBeforeCompile(Ft,v),bt=wt.acquireProgram(Ft,G),Et.set(G,bt),j.uniforms=Ft.uniforms;const xt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=rt.uniform),Lr(b,Ft),j.needsLights=zs(b),j.lightsStateVersion=Ut,j.needsLights&&(xt.ambientLightColor.value=k.state.ambient,xt.lightProbe.value=k.state.probe,xt.directionalLights.value=k.state.directional,xt.directionalLightShadows.value=k.state.directionalShadow,xt.spotLights.value=k.state.spot,xt.spotLightShadows.value=k.state.spotShadow,xt.rectAreaLights.value=k.state.rectArea,xt.ltc_1.value=k.state.rectAreaLTC1,xt.ltc_2.value=k.state.rectAreaLTC2,xt.pointLights.value=k.state.point,xt.pointLightShadows.value=k.state.pointShadow,xt.hemisphereLights.value=k.state.hemi,xt.directionalShadowMap.value=k.state.directionalShadowMap,xt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,xt.spotShadowMap.value=k.state.spotShadowMap,xt.spotLightMatrix.value=k.state.spotLightMatrix,xt.spotLightMap.value=k.state.spotLightMap,xt.pointShadowMap.value=k.state.pointShadowMap,xt.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=bt,j.uniformsList=null,bt}function vi(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=vs.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Lr(b,z){const K=yt.get(b);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Dr(b,z,K,j,k){z.isScene!==!0&&(z=mt),w.resetTextureUnits();const Mt=z.fog,Ut=j.isMeshStandardMaterial?z.environment:null,Ft=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vn,G=(j.isMeshStandardMaterial?H:M).get(j.envMap||Ut),Et=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,bt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),xt=!!K.morphAttributes.position,zt=!!K.morphAttributes.normal,Vt=!!K.morphAttributes.color;let Wt=zn;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=v.toneMapping);const ee=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ht=ee!==void 0?ee.length:0,Ot=yt.get(j),te=f.state.lights;if(U===!0&&(X===!0||b!==J)){const Ie=b===J&&j.id===D;rt.setState(j,b,Ie)}let qt=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==te.state.version||Ot.outputColorSpace!==Ft||k.isBatchedMesh&&Ot.batching===!1||!k.isBatchedMesh&&Ot.batching===!0||k.isBatchedMesh&&Ot.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ot.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ot.instancing===!1||!k.isInstancedMesh&&Ot.instancing===!0||k.isSkinnedMesh&&Ot.skinning===!1||!k.isSkinnedMesh&&Ot.skinning===!0||k.isInstancedMesh&&Ot.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ot.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ot.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ot.instancingMorph===!1&&k.morphTexture!==null||Ot.envMap!==G||j.fog===!0&&Ot.fog!==Mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==Et||Ot.vertexTangents!==bt||Ot.morphTargets!==xt||Ot.morphNormals!==zt||Ot.morphColors!==Vt||Ot.toneMapping!==Wt||Ot.morphTargetsCount!==Ht)&&(qt=!0):(qt=!0,Ot.__version=j.version);let xe=Ot.currentProgram;qt===!0&&(xe=_i(j,z,k));let ge=!1,we=!1,Rn=!1;const ne=xe.getUniforms(),Qe=Ot.uniforms;if(et.useProgram(xe.program)&&(ge=!0,we=!0,Rn=!0),j.id!==D&&(D=j.id,we=!0),ge||J!==b){V.reverseDepthBuffer?(nt.copy(b.projectionMatrix),Vu(nt),Wu(nt),ne.setValue(T,"projectionMatrix",nt)):ne.setValue(T,"projectionMatrix",b.projectionMatrix),ne.setValue(T,"viewMatrix",b.matrixWorldInverse);const Ie=ne.map.cameraPosition;Ie!==void 0&&Ie.setValue(T,lt.setFromMatrixPosition(b.matrixWorld)),V.logarithmicDepthBuffer&&ne.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ne.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,we=!0,Rn=!0)}if(k.isSkinnedMesh){ne.setOptional(T,k,"bindMatrix"),ne.setOptional(T,k,"bindMatrixInverse");const Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ne.setValue(T,"boneTexture",Ie.boneTexture,w))}k.isBatchedMesh&&(ne.setOptional(T,k,"batchingTexture"),ne.setValue(T,"batchingTexture",k._matricesTexture,w),ne.setOptional(T,k,"batchingIdTexture"),ne.setValue(T,"batchingIdTexture",k._indirectTexture,w),ne.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(T,"batchingColorTexture",k._colorsTexture,w));const xi=K.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&At.update(k,K,xe),(we||Ot.receiveShadow!==k.receiveShadow)&&(Ot.receiveShadow=k.receiveShadow,ne.setValue(T,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Qe.envMap.value=G,Qe.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(Qe.envMapIntensity.value=z.environmentIntensity),we&&(ne.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&ks(Qe,Rn),Mt&&j.fog===!0&&ut.refreshFogUniforms(Qe,Mt),ut.refreshMaterialUniforms(Qe,j,q,P,f.state.transmissionRenderTarget[b.id]),vs.upload(T,vi(Ot),Qe,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vs.upload(T,vi(Ot),Qe,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ne.setValue(T,"center",k.center),ne.setValue(T,"modelViewMatrix",k.modelViewMatrix),ne.setValue(T,"normalMatrix",k.normalMatrix),ne.setValue(T,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ie=j.uniformsGroups;for(let Hs=0,Fh=Ie.length;Hs<Fh;Hs++){const ec=Ie[Hs];B.update(ec,xe),B.bind(ec,xe)}}return xe}function ks(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function zs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,z,K){yt.get(b.texture).__webglTexture=z,yt.get(b.depthTexture).__webglTexture=K;const j=yt.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const K=yt.get(b);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,K=0){R=b,N=z,C=K;let j=!0,k=null,Mt=!1,Ut=!1;if(b){const G=yt.get(b);if(G.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(T.FRAMEBUFFER,null),j=!1;else if(G.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(G.__hasExternalTextures)w.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const xt=b.depthTexture;if(G.__boundDepthTexture!==xt){if(xt!==null&&yt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Ut=!0);const bt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(bt[z])?k=bt[z][K]:k=bt[z],Mt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?k=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(bt)?k=bt[K]:k=bt,_.copy(b.viewport),y.copy(b.scissor),I=b.scissorTest}else _.copy(vt).multiplyScalar(q).floor(),y.copy(tt).multiplyScalar(q).floor(),I=dt;if(et.bindFramebuffer(T.FRAMEBUFFER,k)&&j&&et.drawBuffers(b,k),et.viewport(_),et.scissor(y),et.setScissorTest(I),Mt){const G=yt.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+z,G.__webglTexture,K)}else if(Ut){const G=yt.get(b.texture),Et=z||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,G.__webglTexture,K||0,Et)}D=-1},this.readRenderTargetPixels=function(b,z,K,j,k,Mt,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){et.bindFramebuffer(T.FRAMEBUFFER,Ft);try{const G=b.texture,Et=G.format,bt=G.type;if(!V.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-j&&K>=0&&K<=b.height-k&&T.readPixels(z,K,j,k,Nt.convert(Et),Nt.convert(bt),Mt)}finally{const G=R!==null?yt.get(R).__webglFramebuffer:null;et.bindFramebuffer(T.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(b,z,K,j,k,Mt,Ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){const G=b.texture,Et=G.format,bt=G.type;if(!V.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-j&&K>=0&&K<=b.height-k){et.bindFramebuffer(T.FRAMEBUFFER,Ft);const xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.bufferData(T.PIXEL_PACK_BUFFER,Mt.byteLength,T.STREAM_READ),T.readPixels(z,K,j,k,Nt.convert(Et),Nt.convert(bt),0);const zt=R!==null?yt.get(R).__webglFramebuffer:null;et.bindFramebuffer(T.FRAMEBUFFER,zt);const Vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Gu(T,Vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Mt),T.deleteBuffer(xt),T.deleteSync(Vt),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,K=0){b.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-K),k=Math.floor(b.image.width*j),Mt=Math.floor(b.image.height*j),Ut=z!==null?z.x:0,Ft=z!==null?z.y:0;w.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,Ut,Ft,k,Mt),et.unbindTexture()},this.copyTextureToTexture=function(b,z,K=null,j=null,k=0){b.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],z=arguments[2],k=arguments[3]||0,K=null);let Mt,Ut,Ft,G,Et,bt;K!==null?(Mt=K.max.x-K.min.x,Ut=K.max.y-K.min.y,Ft=K.min.x,G=K.min.y):(Mt=b.image.width,Ut=b.image.height,Ft=0,G=0),j!==null?(Et=j.x,bt=j.y):(Et=0,bt=0);const xt=Nt.convert(z.format),zt=Nt.convert(z.type);w.setTexture2D(z,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const Vt=T.getParameter(T.UNPACK_ROW_LENGTH),Wt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ee=T.getParameter(T.UNPACK_SKIP_PIXELS),Ht=T.getParameter(T.UNPACK_SKIP_ROWS),Ot=T.getParameter(T.UNPACK_SKIP_IMAGES),te=b.isCompressedTexture?b.mipmaps[k]:b.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,te.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,te.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ft),T.pixelStorei(T.UNPACK_SKIP_ROWS,G),b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Et,bt,Mt,Ut,xt,zt,te.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Et,bt,te.width,te.height,xt,te.data):T.texSubImage2D(T.TEXTURE_2D,k,Et,bt,Mt,Ut,xt,zt,te),T.pixelStorei(T.UNPACK_ROW_LENGTH,Vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Wt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ee),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ot),k===0&&z.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(b,z,K=null,j=null,k=0){b.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,b=arguments[2],z=arguments[3],k=arguments[4]||0);let Mt,Ut,Ft,G,Et,bt,xt,zt,Vt;const Wt=b.isCompressedTexture?b.mipmaps[k]:b.image;K!==null?(Mt=K.max.x-K.min.x,Ut=K.max.y-K.min.y,Ft=K.max.z-K.min.z,G=K.min.x,Et=K.min.y,bt=K.min.z):(Mt=Wt.width,Ut=Wt.height,Ft=Wt.depth,G=0,Et=0,bt=0),j!==null?(xt=j.x,zt=j.y,Vt=j.z):(xt=0,zt=0,Vt=0);const ee=Nt.convert(z.format),Ht=Nt.convert(z.type);let Ot;if(z.isData3DTexture)w.setTexture3D(z,0),Ot=T.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)w.setTexture2DArray(z,0),Ot=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const te=T.getParameter(T.UNPACK_ROW_LENGTH),qt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xe=T.getParameter(T.UNPACK_SKIP_PIXELS),ge=T.getParameter(T.UNPACK_SKIP_ROWS),we=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Wt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Wt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,G),T.pixelStorei(T.UNPACK_SKIP_ROWS,Et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,bt),b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Ot,k,xt,zt,Vt,Mt,Ut,Ft,ee,Ht,Wt.data):z.isCompressedArrayTexture?T.compressedTexSubImage3D(Ot,k,xt,zt,Vt,Mt,Ut,Ft,ee,Wt.data):T.texSubImage3D(Ot,k,xt,zt,Vt,Mt,Ut,Ft,ee,Ht,Wt),T.pixelStorei(T.UNPACK_ROW_LENGTH,te),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,qt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xe),T.pixelStorei(T.UNPACK_SKIP_ROWS,ge),T.pixelStorei(T.UNPACK_SKIP_IMAGES,we),k===0&&z.generateMipmaps&&T.generateMipmap(Ot),et.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),et.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,et.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ka?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Us?"display-p3":"srgb"}}class Xa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qa extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dh extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new A,As=new A,Zc=new ce,cr=new Cr,ts=new pi,vo=new A,$c=new A;class e_ extends Se{constructor(t=new ve,e=new dh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ts.fromBufferAttribute(e,r-1),As.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ts.distanceTo(As);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,t.ray.intersectsSphere(ts)===!1)return;Zc.copy(r).invert(),cr.copy(t.ray).applyMatrix4(Zc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,f=g-1;x<f;x+=l){const m=h.getX(x),E=h.getX(x+1),v=es(this,t,cr,c,m,E);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(g-1),f=h.getX(p),m=es(this,t,cr,c,x,f);m&&e.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,f=g-1;x<f;x+=l){const m=es(this,t,cr,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=es(this,t,cr,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function es(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Ts.fromBufferAttribute(o,r),As.fromBufferAttribute(o,s),e.distanceSqToSegment(Ts,As,vo,$c)>n)return;vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vo);if(!(c<t.near||c>t.far))return{distance:c,point:$c.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Jc=new A,Qc=new A;class n_ extends e_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Jc.fromBufferAttribute(e,r),Qc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Jc.distanceTo(Qc);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mr extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tl=new ce,wa=new Cr,ns=new pi,is=new A;class Rs extends Se{constructor(t=new ve,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,t.ray.intersectsSphere(ns)===!1)return;tl.copy(r).invert(),wa.copy(t.ray).applyMatrix4(tl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const f=l.getX(g);is.fromBufferAttribute(u,f),el(is,f,c,r,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)is.fromBufferAttribute(u,g),el(is,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function el(i,t,e,n,r,s,o){const a=wa.distanceSqToPoint(i);if(a<e){const c=new A;wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new gt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,r=[],s=[],o=[],a=new A,c=new ce;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Me(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ya extends mn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class i_ extends Ya{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ka(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const rs=new A,xo=new Ka,yo=new Ka,Mo=new Ka;class r_ extends mn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new A){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(rs.subVectors(r[0],r[1]).add(r[0]),l=rs);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(rs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=rs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),xo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,f),yo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,f),Mo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xo.calc(c),yo.calc(c),Mo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nl(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function s_(i,t){const e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function a_(i,t){return i*i*t}function mr(i,t,e,n){return s_(i,t)+o_(i,e)+a_(i,n)}function c_(i,t){const e=1-i;return e*e*e*t}function l_(i,t){const e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function gr(i,t,e,n,r){return c_(i,t)+l_(i,e)+h_(i,n)+u_(i,r)}class fh extends mn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,r.x,s.x,o.x,a.x),gr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class d_ extends mn{constructor(t=new A,e=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new A){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,r.x,s.x,o.x,a.x),gr(t,r.y,s.y,o.y,a.y),gr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ph extends mn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends mn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mh extends mn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(mr(t,r.x,s.x,o.x),mr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p_ extends mn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(mr(t,r.x,s.x,o.x),mr(t,r.y,s.y,o.y),mr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gh extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(nl(a,c.x,l.x,h.x,u.x),nl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:i_,CatmullRomCurve3:r_,CubicBezierCurve:fh,CubicBezierCurve3:d_,EllipseCurve:Ya,LineCurve:ph,LineCurve3:f_,QuadraticBezierCurve:mh,QuadraticBezierCurve3:p_,SplineCurve:gh});class m_ extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ta[r.type]().fromJSON(r))}return this}}class Aa extends m_{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ph(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new mh(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new fh(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new Ya(t,e,n,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ja extends ve{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Me(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new gt,p=new A,g=new A,x=new A;let f=0,m=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:f=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,p.x=m*1,p.y=-f,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:f=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let E=0;E<=e;E++){const v=n+E*h*r,S=Math.sin(v),N=Math.cos(v);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*S,u.y=t[C].y,u.z=t[C].x*N,o.push(u.x,u.y,u.z),d.x=E/e,d.y=C/(t.length-1),a.push(d.x,d.y);const R=c[3*C+0]*S,D=c[3*C+1],J=c[3*C+0]*N;l.push(R,D,J)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){const S=v+E*t.length,N=S,C=S+t.length,R=S+t.length+1,D=S+1;s.push(N,C,D),s.push(R,D,C)}this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.points,t.segments,t.phiStart,t.phiLength)}}class Za extends ja{constructor(t=1,e=1,n=4,r=8){const s=new Aa;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new Za(t.radius,t.length,t.capSegments,t.radialSegments)}}class fe extends ve{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const x=[],f=n/2;let m=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function E(){const S=new A,N=new A;let C=0;const R=(e-t)/n;for(let D=0;D<=s;D++){const J=[],_=D/s,y=_*(e-t)+t;for(let I=0;I<=r;I++){const F=I/r,L=F*c+a,O=Math.sin(L),P=Math.cos(L);N.x=y*O,N.y=-_*n+f,N.z=y*P,u.push(N.x,N.y,N.z),S.set(O,R,P).normalize(),d.push(S.x,S.y,S.z),p.push(F,1-_),J.push(g++)}x.push(J)}for(let D=0;D<r;D++)for(let J=0;J<s;J++){const _=x[J][D],y=x[J+1][D],I=x[J+1][D+1],F=x[J][D+1];t>0&&(h.push(_,y,F),C+=3),e>0&&(h.push(y,I,F),C+=3)}l.addGroup(m,C,0),m+=C}function v(S){const N=g,C=new gt,R=new A;let D=0;const J=S===!0?t:e,_=S===!0?1:-1;for(let I=1;I<=r;I++)u.push(0,f*_,0),d.push(0,_,0),p.push(.5,.5),g++;const y=g;for(let I=0;I<=r;I++){const L=I/r*c+a,O=Math.cos(L),P=Math.sin(L);R.x=J*P,R.y=f*_,R.z=J*O,u.push(R.x,R.y,R.z),d.push(0,_,0),C.x=O*.5+.5,C.y=P*.5*_+.5,p.push(C.x,C.y),g++}for(let I=0;I<r;I++){const F=N+I,L=y+I;S===!0?h.push(L,L+1,F):h.push(L+1,L,F),D+=3}l.addGroup(m,D,S===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends fe{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $a extends ve{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const v=new A,S=new A,N=new A;for(let C=0;C<e.length;C+=3)p(e[C+0],v),p(e[C+1],S),p(e[C+2],N),c(v,S,N,E)}function c(E,v,S,N){const C=N+1,R=[];for(let D=0;D<=C;D++){R[D]=[];const J=E.clone().lerp(S,D/C),_=v.clone().lerp(S,D/C),y=C-D;for(let I=0;I<=y;I++)I===0&&D===C?R[D][I]=J:R[D][I]=J.clone().lerp(_,I/y)}for(let D=0;D<C;D++)for(let J=0;J<2*(C-D)-1;J++){const _=Math.floor(J/2);J%2===0?(d(R[D][_+1]),d(R[D+1][_]),d(R[D][_])):(d(R[D][_+1]),d(R[D+1][_+1]),d(R[D+1][_]))}}function l(E){const v=new A;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(E),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const E=new A;for(let v=0;v<s.length;v+=3){E.x=s[v+0],E.y=s[v+1],E.z=s[v+2];const S=f(E)/2/Math.PI+.5,N=m(E)/Math.PI+.5;o.push(S,1-N)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const v=o[E+0],S=o[E+2],N=o[E+4],C=Math.max(v,S,N),R=Math.min(v,S,N);C>.9&&R<.1&&(v<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),N<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function p(E,v){const S=E*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const E=new A,v=new A,S=new A,N=new A,C=new gt,R=new gt,D=new gt;for(let J=0,_=0;J<s.length;J+=9,_+=6){E.set(s[J+0],s[J+1],s[J+2]),v.set(s[J+3],s[J+4],s[J+5]),S.set(s[J+6],s[J+7],s[J+8]),C.set(o[_+0],o[_+1]),R.set(o[_+2],o[_+3]),D.set(o[_+4],o[_+5]),N.copy(E).add(v).add(S).divideScalar(3);const y=f(N);x(C,_+0,E,y),x(R,_+2,v,y),x(D,_+4,S,y)}}function x(E,v,S,N){N<0&&E.x===1&&(o[v]=E.x-1),S.x===0&&S.z===0&&(o[v]=N/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.vertices,t.indices,t.radius,t.details)}}class _h extends Aa{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Aa().fromJSON(r))}return this}}const g_={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=vh(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,p;if(n&&(s=M_(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Sr(s,o,e,a,c,p,0),o}};function vh(i,t,e,n,r){let s,o;if(r===D_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=il(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=il(s,i[s],i[s+1],o);return o&&Fs(o,o.next)&&(br(o),o=o.next),o}function hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fs(e,e.next)||pe(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&T_(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?v_(i,n,r,s):__(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=x_(hi(i),t,e),Sr(i,t,e,n,r,s,2)):o===2&&y_(i,t,e,n,r,s):Sr(hi(i),t,e,n,r,s,1);break}}}function __(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Bi(r,a,s,c,o,l,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(pe(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,m=Ra(p,g,t,e,n),E=Ra(x,f,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=m&&S&&S.z<=E;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=f&&v!==r&&v!==o&&Bi(a,h,c,u,l,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=f&&S!==r&&S!==o&&Bi(a,h,c,u,l,d,S.x,S.y)&&pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=f&&v!==r&&v!==o&&Bi(a,h,c,u,l,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=E;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=f&&S!==r&&S!==o&&Bi(a,h,c,u,l,d,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function x_(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Fs(r,s)&&xh(r,n,n.next,s)&&Er(r,s)&&Er(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),br(n),br(n.next),n=i=s),n=n.next}while(n!==i);return hi(n)}function y_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C_(o,a)){let c=yh(o,a);o=hi(o,o.next),c=hi(c,c.next),Sr(o,t,e,n,r,s,0),Sr(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function M_(i,t,e,n){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=vh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(R_(l));for(r.sort(S_),s=0;s<r.length;s++)e=E_(r[s],e);return e}function S_(i,t){return i.x-t.x}function E_(i,t){const e=b_(i,t);if(!e)return t;const n=yh(e,i);return hi(n,n.next),hi(e,e.next)}function b_(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Bi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Er(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&w_(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function w_(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function T_(i,t,e,n){let r=i;do r.z===0&&(r.z=Ra(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,A_(r)}function A_(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Ra(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function R_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bi(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function C_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!P_(i,t)&&(Er(i,t)&&Er(t,i)&&L_(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Fs(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fs(i,t){return i.x===t.x&&i.y===t.y}function xh(i,t,e,n){const r=os(pe(i,t,e)),s=os(pe(i,t,n)),o=os(pe(e,n,i)),a=os(pe(e,n,t));return!!(r!==s&&o!==a||r===0&&ss(i,e,t)||s===0&&ss(i,n,t)||o===0&&ss(e,i,n)||a===0&&ss(e,t,n))}function ss(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function os(i){return i>0?1:i<0?-1:0}function P_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function L_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yh(i,t){const e=new Ca(i.i,i.x,i.y),n=new Ca(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function il(i,t,e,n){const r=new Ca(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ca(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class _r{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return _r.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];rl(t),sl(n,t);let o=t.length;e.forEach(rl);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,sl(n,e[c]);const a=g_.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function rl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ja extends ve{constructor(t=new _h([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:I_;let v,S=!1,N,C,R,D;m&&(v=m.getSpacedPoints(h),S=!0,d=!1,N=m.computeFrenetFrames(h,!1),C=new A,R=new A,D=new A),d||(f=0,p=0,g=0,x=0);const J=a.extractPoints(l);let _=J.shape;const y=J.holes;if(!_r.isClockWise(_)){_=_.reverse();for(let Z=0,T=y.length;Z<T;Z++){const at=y[Z];_r.isClockWise(at)&&(y[Z]=at.reverse())}}const F=_r.triangulateShape(_,y),L=_;for(let Z=0,T=y.length;Z<T;Z++){const at=y[Z];_=_.concat(at)}function O(Z,T,at){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(T,at)}const P=_.length,q=F.length;function W(Z,T,at){let st,V,et;const ft=Z.x-T.x,yt=Z.y-T.y,w=at.x-Z.x,M=at.y-Z.y,H=ft*ft+yt*yt,it=ft*M-yt*w;if(Math.abs(it)>Number.EPSILON){const ot=Math.sqrt(H),Q=Math.sqrt(w*w+M*M),wt=T.x-yt/ot,ut=T.y+ft/ot,Tt=at.x-M/Q,Gt=at.y+w/Q,rt=((Tt-wt)*M-(Gt-ut)*w)/(ft*M-yt*w);st=wt+ft*rt-Z.x,V=ut+yt*rt-Z.y;const Pt=st*st+V*V;if(Pt<=2)return new gt(st,V);et=Math.sqrt(Pt/2)}else{let ot=!1;ft>Number.EPSILON?w>Number.EPSILON&&(ot=!0):ft<-Number.EPSILON?w<-Number.EPSILON&&(ot=!0):Math.sign(yt)===Math.sign(M)&&(ot=!0),ot?(st=-yt,V=ft,et=Math.sqrt(H)):(st=ft,V=yt,et=Math.sqrt(H/2))}return new gt(st/et,V/et)}const _t=[];for(let Z=0,T=L.length,at=T-1,st=Z+1;Z<T;Z++,at++,st++)at===T&&(at=0),st===T&&(st=0),_t[Z]=W(L[Z],L[at],L[st]);const vt=[];let tt,dt=_t.concat();for(let Z=0,T=y.length;Z<T;Z++){const at=y[Z];tt=[];for(let st=0,V=at.length,et=V-1,ft=st+1;st<V;st++,et++,ft++)et===V&&(et=0),ft===V&&(ft=0),tt[st]=W(at[st],at[et],at[ft]);vt.push(tt),dt=dt.concat(tt)}for(let Z=0;Z<f;Z++){const T=Z/f,at=p*Math.cos(T*Math.PI/2),st=g*Math.sin(T*Math.PI/2)+x;for(let V=0,et=L.length;V<et;V++){const ft=O(L[V],_t[V],st);Y(ft.x,ft.y,-at)}for(let V=0,et=y.length;V<et;V++){const ft=y[V];tt=vt[V];for(let yt=0,w=ft.length;yt<w;yt++){const M=O(ft[yt],tt[yt],st);Y(M.x,M.y,-at)}}}const pt=g+x;for(let Z=0;Z<P;Z++){const T=d?O(_[Z],dt[Z],pt):_[Z];S?(R.copy(N.normals[0]).multiplyScalar(T.x),C.copy(N.binormals[0]).multiplyScalar(T.y),D.copy(v[0]).add(R).add(C),Y(D.x,D.y,D.z)):Y(T.x,T.y,0)}for(let Z=1;Z<=h;Z++)for(let T=0;T<P;T++){const at=d?O(_[T],dt[T],pt):_[T];S?(R.copy(N.normals[Z]).multiplyScalar(at.x),C.copy(N.binormals[Z]).multiplyScalar(at.y),D.copy(v[Z]).add(R).add(C),Y(D.x,D.y,D.z)):Y(at.x,at.y,u/h*Z)}for(let Z=f-1;Z>=0;Z--){const T=Z/f,at=p*Math.cos(T*Math.PI/2),st=g*Math.sin(T*Math.PI/2)+x;for(let V=0,et=L.length;V<et;V++){const ft=O(L[V],_t[V],st);Y(ft.x,ft.y,u+at)}for(let V=0,et=y.length;V<et;V++){const ft=y[V];tt=vt[V];for(let yt=0,w=ft.length;yt<w;yt++){const M=O(ft[yt],tt[yt],st);S?Y(M.x,M.y+v[h-1].y,v[h-1].x+at):Y(M.x,M.y,u+at)}}}U(),X();function U(){const Z=r.length/3;if(d){let T=0,at=P*T;for(let st=0;st<q;st++){const V=F[st];lt(V[2]+at,V[1]+at,V[0]+at)}T=h+f*2,at=P*T;for(let st=0;st<q;st++){const V=F[st];lt(V[0]+at,V[1]+at,V[2]+at)}}else{for(let T=0;T<q;T++){const at=F[T];lt(at[2],at[1],at[0])}for(let T=0;T<q;T++){const at=F[T];lt(at[0]+P*h,at[1]+P*h,at[2]+P*h)}}n.addGroup(Z,r.length/3-Z,0)}function X(){const Z=r.length/3;let T=0;nt(L,T),T+=L.length;for(let at=0,st=y.length;at<st;at++){const V=y[at];nt(V,T),T+=V.length}n.addGroup(Z,r.length/3-Z,1)}function nt(Z,T){let at=Z.length;for(;--at>=0;){const st=at;let V=at-1;V<0&&(V=Z.length-1);for(let et=0,ft=h+f*2;et<ft;et++){const yt=P*et,w=P*(et+1),M=T+st+yt,H=T+V+yt,it=T+V+w,ot=T+st+w;ht(M,H,it,ot)}}}function Y(Z,T,at){c.push(Z),c.push(T),c.push(at)}function lt(Z,T,at){mt(Z),mt(T),mt(at);const st=r.length/3,V=E.generateTopUV(n,r,st-3,st-2,st-1);St(V[0]),St(V[1]),St(V[2])}function ht(Z,T,at,st){mt(Z),mt(T),mt(st),mt(T),mt(at),mt(st);const V=r.length/3,et=E.generateSideWallUV(n,r,V-6,V-3,V-2,V-1);St(et[0]),St(et[1]),St(et[3]),St(et[1]),St(et[2]),St(et[3])}function mt(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function St(Z){s.push(Z.x),s.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return U_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ta[r.type]().fromJSON(r)),new Ja(n,t.options)}}const I_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new gt(s,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],x=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-u),new gt(d,1-g),new gt(x,1-m)]:[new gt(a,1-c),new gt(h,1-u),new gt(p,1-g),new gt(f,1-m)]}};function U_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qa extends $a{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qa(t.radius,t.detail)}}class qe extends ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const E=[],v=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&c===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const C=N/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(C+S,1-v),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const v=h[m][E+1],S=h[m][E],N=h[m+1][E],C=h[m+1][E+1];(m!==0||o>0)&&p.push(v,S,C),(m!==n-1||c<Math.PI)&&p.push(S,N,C)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends ve{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(x),u.y=(t+e*Math.cos(f))*Math.sin(x),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,f=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,E=(r+1)*p+g;o.push(x,f,E),o.push(f,m,E)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rn extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bs extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mh extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const So=new ce,ol=new A,al=new A;class Sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cl=new ce,lr=new A,Eo=new A;class N_ extends Sh{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(lr),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),r.makeTranslation(-lr.x,-lr.y,-lr.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl)}}class O_ extends Bs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new N_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class F_ extends Sh{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cs extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eh extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class B_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ll();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ll(){return performance.now()}const hl=new ce;class k_{constructor(t,e,n=0,r=1/0){this.ray=new Cr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(ul),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Pa(t[r],this,n,e);return n.sort(ul),n}}function ul(i,t){return i.distance-t.distance}function Pa(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Pa(s[o],t,e,!0)}}class dl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z_ extends n_{constructor(t=10,e=10,n=4473924,r=8947848){n=new Xt(n),r=new Xt(r);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=d===s?n:r;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const h=new ve;h.setAttribute("position",new le(c,3)),h.setAttribute("color",new le(l,3));const u=new dh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class H_ extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);function bh(i,t={}){const e=t.charset??" .:-=+*#%@",n=t.fontSize??12,r=t.color??"#7cfc9a",s=t.colorize??!0,o=Math.max(1,Math.round(n*.6)),a=n,c=e.length,l=document.createElement("canvas"),h=l.getContext("2d"),u=document.createElement("canvas"),d=u.getContext("2d",{willReadFrequently:!0});let p=0,g=0,x=0,f=0,m=new Float32Array(0);function E(tt,dt){p=tt,g=dt,i.setPixelRatio(1),i.setSize(tt,dt,!1),x=Math.max(1,Math.floor(tt/o)),f=Math.max(1,Math.floor(dt/a)),u.width=x,u.height=f,m=new Float32Array(x*f);const pt=Math.min(window.devicePixelRatio||1,2);l.width=Math.floor(tt*pt),l.height=Math.floor(dt*pt),l.style.width=tt+"px",l.style.height=dt+"px",h.setTransform(pt,0,0,pt,0,0),h.font=`${n}px "Courier New", monospace`,h.textBaseline="top"}function v(tt,dt){i.render(tt,dt),d.clearRect(0,0,x,f),d.drawImage(i.domElement,0,0,x,f);const pt=d.getImageData(0,0,x,f).data;h.fillStyle="#000",h.fillRect(0,0,p,g),h.fillStyle=r;for(let U=0;U<f;U++)for(let X=0;X<x;X++){const nt=U*x+X,Y=nt*4,lt=pt[Y],ht=pt[Y+1],mt=pt[Y+2],St=(.3*lt+.59*ht+.11*mt)/255;if(m[nt]=St,St<.035)continue;let Z=Math.floor(St*c);Z>=c&&(Z=c-1);const T=e[Z];if(T!==" "){if(s){const st=255/(Math.max(lt,ht,mt)||1);h.fillStyle=`rgb(${Math.round(lt*st)},${Math.round(ht*st)},${Math.round(mt*st)})`}h.fillText(T,X*o,U*a)}}}const S=new A,N=new ke,C=12,R=a*4,D=.5,J=260;let _=0;function y(tt,dt){const pt=Math.abs(tt),U=Math.abs(dt);return pt>U*2?"-":U>pt*2?"|":tt*dt<0?"/":"\\"}function I(tt,dt){const pt=Math.floor(tt/o),U=Math.floor(dt/a);return pt<0||pt>=x||U<0||U>=f?!0:m[U*x+pt]>.06}function F(tt,dt,pt=0,U=0){dt.getWorldQuaternion(N).invert();const X=p*.5,nt=g*.5,Y=Math.hypot(X,nt)||1,lt=-o*.5,ht=-a*.5,mt=C*a;_=(_+pt*J*U)%R;const St=R*D;for(let Z=0;Z<tt.length;Z++){const T=tt[Z];if(S.copy(T.dir).applyQuaternion(N),S.z>=0||(S.applyMatrix4(dt.projectionMatrix),S.x<-1||S.x>1||S.y<-1||S.y>1))continue;const at=(S.x*.5+.5)*p,st=(1-(S.y*.5+.5))*g;if(!I(at,st)){if(h.fillStyle=s?T.color??r:r,pt>.01){const V=at-X,et=st-nt,ft=Math.hypot(V,et)||1,yt=V/ft,w=et/ft,M=Math.min(1,ft/Y),H=pt*mt*(.25+.75*M),it=y(yt,w);for(let ot=a;ot<=H;ot+=a){const Q=ft-ot;if(Q<=0)break;let wt=(Q-_)%R;if(wt<0&&(wt+=R),wt>St)continue;const ut=at-yt*ot,Tt=st-w*ot;if(I(ut,Tt))break;h.globalAlpha=1-.75*(ot/H),h.fillText(it,ut+lt,Tt+ht)}h.globalAlpha=1}h.fillText(T.char,at+lt,st+ht)}}}const L="#ff6a2a",O="#ffd24a",P=["*","+","x",".",":"],q=new A;let W=0;function _t(tt,dt){const pt=Math.abs(tt),U=Math.abs(dt);return pt>U*2?"=":U>pt*2?"|":tt*dt<0?"/":"\\"}function vt(tt,dt,pt){if(!tt.object||(q.copy(tt.object.position).project(dt),q.z>1))return;const U=(q.x*.5+.5)*p,X=(1-(q.y*.5+.5))*g,nt=g*.5/Math.tan(re.degToRad(dt.fov*.5));let lt=(tt.object.userData.viewRadius??10)*tt.object.scale.x*nt/Math.max(1,tt.distance);lt=re.clamp(lt,o*2.5,Math.min(p,g)*.42),h.fillStyle=tt.firing?L:O;const ht=U-lt,mt=U+lt,St=X-lt,Z=X+lt,T=o,at=a;if(h.fillText("+",ht,St),h.fillText("-",ht+T,St),h.fillText("|",ht,St+at),h.fillText("+",mt,St),h.fillText("-",mt-T,St),h.fillText("|",mt,St+at),h.fillText("+",ht,Z),h.fillText("-",ht+T,Z),h.fillText("|",ht,Z-at),h.fillText("+",mt,Z),h.fillText("-",mt-T,Z),h.fillText("|",mt,Z-at),!tt.firing)return;W+=pt*22,h.fillStyle=L;const st=[p*.14,p*.86],V=g*.97;for(let et=0;et<st.length;et++){const ft=st[et],yt=U-ft,w=X-V,M=Math.hypot(yt,w)||1,H=yt/M,it=w/M,ot=_t(H,it),Q=Math.max(1,Math.floor(M/(a*.7)));for(let wt=0;wt<=Q;wt++){const ut=wt/Q,Tt=ft+yt*ut,Gt=V+w*ut;h.globalAlpha=.45+.55*Math.abs(Math.sin(wt*.7-W)),h.fillText(ot,Tt-o*.5,Gt-a*.5)}}h.fillStyle=O;for(let et=0;et<7;et++){const ft=Math.random()*Math.PI*2,yt=Math.random()*a*1.8;h.globalAlpha=.4+Math.random()*.6,h.fillText(P[et%P.length],U+Math.cos(ft)*yt-o*.5,X+Math.sin(ft)*yt-a*.5)}h.globalAlpha=1}return{domElement:l,setSize:E,render:v,drawStars:F,drawMining:vt}}const bo=4;function G_(i,t,e){const n=new A,r=new A;function s(h,u,d,p){const g=p+bo;r.subVectors(h.position,d);const x=r.lengthSq();if(x>=g*g)return 0;const f=Math.sqrt(x)||1e-4;n.copy(r).multiplyScalar(1/f),h.position.addScaledVector(n,g-f);const m=u.dot(n);return m<0?(u.addScaledVector(n,-1.72*m),-m):0}function o(h,u){let d=0;for(const p of i.asteroids){const g=s(h,u,p.position,p.userData.viewRadius*p.scale.x);g>d&&(d=g)}if(t&&t.colliders)for(const p of t.colliders){const g=s(h,u,p.center,p.radius);g>d&&(d=g)}if(e&&e.ships)for(const p of e.ships){if(!p.active)continue;const g=s(h,u,p.group.position,p.radius);g>d&&(d=g)}return{speedIn:d}}function a(h){for(const u of i.asteroids)h(u.position,u.userData.viewRadius*u.scale.x);if(t&&t.colliders)for(const u of t.colliders)h(u.center,u.radius);if(e&&e.ships)for(const u of e.ships)u.active&&h(u.group.position,u.radius)}function c(h,u,d){let p=1/0;return a((g,x)=>{r.subVectors(g,h);const f=r.dot(u);if(f<=0)return;const m=x+bo,E=f-m;E>d||r.lengthSq()-f*f>m*m||E<p&&(p=E)}),p}function l(h,u,d,p=.6){let g=!1;return a((x,f)=>{if(g)return;r.subVectors(x,h);const m=r.dot(u);if(m<=0)return;const E=r.length();E-f-bo>d||m/(E||1e-4)<p||(g=!0)}),g}return{resolve:o,forwardGap:c,forwardNear:l}}function V_(i,t,e,n,r,s,o={}){const a=n?G_(n,r,s):null,c=o.isUiOpen||(()=>!1),l=Object.create(null);let h=!1,u=!1,d=!1,p=window.innerWidth/2,g=window.innerHeight/2;const x=1.5,f=1.3,m=.05,E=1.7,v=80,S=800,N=20,C=.55,R=1.6,D=3.5,J=.7,_=.6,y=4,I=1,F=2200,L=350,O=(r==null?void 0:r.radius)+50,P=18,q=30,W=18,_t=18,vt=14,tt=1.2,dt=.9,pt=120,U=240,X=14,nt=4,Y=new A(0,0,156),lt=.1,ht=1+lt,mt=-lt,St=1,Z=mt-St,T=ht+1;let at=0,st=!1,V=0,et=0,ft=0,yt=0;const w=new A,M=new A;let H=0,it=!1,ot=!1,Q=!1,wt=!1,ut=!1,Tt=0,Gt=null;const rt={speed:0,throttle:0,warp:0,reverse:0,headingDeg:0,pitchDeg:0,pos:{x:0,y:0,z:0},active:!1,mining:!1,canDock:!1,tooFastToDock:!1,docking:!1,undocking:!1,docked:!1,turn:{yaw:0,pitch:0,roll:0}};function Pt(){h||(h=!0,rt.active=!0,e&&(e.style.display="none"))}function kt(){u=!1,document.body.classList.remove("dragging")}function At(){h&&(h=!1,rt.active=!1,kt(),rt.canDock=!1,e&&(e.style.display=""))}const Dt=new A,Yt=new ke,Nt=new A,Qt=new ce,B=new ke,Rt=new ke,$=new A(0,0,0),ct=new A(0,1,0),Lt=new A(0,0,1),It=new A,Zt=new A,he=new A,$t=new A,Bt=new A,ue=new A,ie=new A;let Xn=!1;function Qi(G,Et){const bt=Math.abs(G.y)>.98?Lt:ct;return Qt.lookAt($,G,bt),(Et||new ke).setFromRotationMatrix(Qt)}function ln(){Xn||!r||!r.group||(r.group.updateMatrixWorld(),Dt.copy(Y).applyMatrix4(r.group.matrixWorld),r.group.getWorldQuaternion(B),Nt.set(0,0,1).applyQuaternion(B).normalize(),Qi(Nt,Yt),Xn=!0)}function gi(){return!r||!r.center?!1:i.position.distanceTo(r.center)<=O}function tr(){const G=[],Et=X+nt;if(r&&r.center&&G.push({c:r.center,r:r.radius+Et}),n&&n.asteroids)for(const bt of n.asteroids)G.push({c:bt.position,r:(bt.userData.viewRadius??4)*bt.scale.x+Et});return G}function er(G,Et,bt,xt){$t.subVectors(G,Et),Bt.subVectors(bt,Et);const zt=re.clamp($t.dot(Bt)/(Bt.lengthSq()||1),0,1);return xt.copy(Et).addScaledVector(Bt,zt),zt}function qn(G,Et){for(let bt=0;bt<16;bt++){let xt=null,zt=.001;for(const Wt of Et){const ee=Wt.r-ie.subVectors(G,Wt.c).length();ee>zt&&(zt=ee,xt=Wt)}if(!xt)break;ie.subVectors(G,xt.c);const Vt=ie.length();Vt<1e-4?ie.set(1,0,0):ie.multiplyScalar(1/Vt),G.copy(xt.c).addScaledVector(ie,xt.r*1.02)}return G}function nr(G,Et,bt){const xt=[G.clone(),Et.clone()];let zt=0;for(;zt++<64;){let Vt=!1;for(let Wt=0;Wt<xt.length-1;Wt++){const ee=xt[Wt],Ht=xt[Wt+1],Ot=Wt===0,te=Wt===xt.length-2;let qt=null,xe=1/0;for(const ge of bt){const we=ie.subVectors(ee,ge.c).length()<ge.r,Rn=ie.subVectors(Ht,ge.c).length()<ge.r;if(we&&Ot||Rn&&te)continue;const ne=er(ge.c,ee,Ht,ue);ue.distanceTo(ge.c)<ge.r&&ne<xe&&(xe=ne,qt=ge)}if(qt){er(qt.c,ee,Ht,ue),ie.subVectors(ue,qt.c),ie.lengthSq()<1e-6&&(ie.subVectors(Ht,ee),ie.set(-ie.y,ie.x,0),ie.lengthSq()<1e-6&&ie.set(0,1,0)),ie.normalize();const ge=qt.c.clone().addScaledVector(ie,qt.r*1.08);qn(ge,bt),xt.splice(Wt+1,0,ge),Vt=!0;break}}if(!Vt)break}return xt}function _i(G,Et,bt){const xt=G.clone();qn(xt,bt);const zt=nr(xt,Et,bt);return xt.distanceToSquared(G)>1e-6&&zt.unshift(G.clone()),zt}function vi(G,Et,bt,xt,zt,Vt){const Wt=[0];for(let ee=1;ee<G.length;ee++)Wt.push(Wt[ee-1]+G[ee].distanceTo(G[ee-1]));return{kind:"fly",path:G,cum:Wt,len:Wt[Wt.length-1],faceVel:!!Et,q0:bt?bt.clone():null,q1:xt?xt.clone():null,cruise:zt,s:0,v:Math.max(0,Vt||0)}}function Lr(G){return{kind:"pivot",q1:G.clone()}}function Dr(G,Et,bt){const{path:xt,cum:zt}=G;let Vt=1;for(;Vt<zt.length-1&&zt[Vt]<Et;)Vt++;const Wt=zt[Vt]-zt[Vt-1]||1,ee=re.clamp((Et-zt[Vt-1])/Wt,0,1);return bt.copy(xt[Vt-1]).lerp(xt[Vt],ee),he.subVectors(xt[Vt],xt[Vt-1]),he.lengthSq()<1e-9&&he.copy(Nt),he.normalize()}function ks(G,Et){const bt=Math.max(0,G.len-G.s);if(bt<.4)return Dr(G,G.len,i.position),!G.faceVel&&G.q1&&i.quaternion.copy(G.q1),Tt=0,!0;const xt=Math.min(G.cruise,Math.sqrt(2*vt*bt));G.v+=re.clamp(xt-G.v,-vt*Et,_t*Et),G.v<0&&(G.v=0),G.s=Math.min(G.len,G.s+G.v*Et);const zt=Dr(G,G.s,i.position);return G.faceVel?(Qi(zt,Rt),i.quaternion.rotateTowards(Rt,tt*Et)):i.quaternion.copy(G.q0).slerp(G.q1,G.len>0?G.s/G.len:1),Tt=G.v,!1}function zs(){const G=tr(),Et=It.copy(Dt).addScaledVector(Nt,pt),bt=_i(i.position,Et,G);return{phases:[vi(bt,!0,null,null,q,Math.abs(V)),Lr(Yt),vi([Et.clone(),Dt.clone()],!1,Yt,Yt,W,0)],i:0}}function b(){const G=tr(),Et=Zt.copy(Dt).addScaledVector(Nt,U),bt=nr(Dt,Et,G);return{phases:[vi(bt,!0,null,null,q,0)],i:0}}function z(){var G;wt||Q||ut||!gi()||Math.abs(V)>P||(ln(),Xn&&(Gt=zs(),st=!1,w.set(0,0,0),H=0,et=ft=yt=0,kt(),Q=!0,(G=o.onDockStart)==null||G.call(o)))}function K(){var G;wt&&(ln(),Xn&&(Gt=b(),st=!1,w.set(0,0,0),H=0,et=ft=yt=0,kt(),wt=!1,ut=!0,(G=o.onUndockStart)==null||G.call(o)))}function j(G){const Et=(G.buttons&1)!==0,bt=(G.buttons&2)!==0;Et&&!u?(u=!0,document.body.classList.add("dragging")):!Et&&u&&kt(),d=bt}window.addEventListener("pointermove",G=>{c()||(p=G.clientX,g=G.clientY,j(G))}),window.addEventListener("pointerdown",G=>{c()||h&&(p=G.clientX,g=G.clientY,j(G))}),window.addEventListener("pointerup",G=>{c()||j(G)}),window.addEventListener("blur",()=>{kt(),d=!1;for(const G in l)l[G]=!1}),window.addEventListener("contextmenu",G=>G.preventDefault()),window.addEventListener("keydown",G=>{if(G.code==="Escape"){At();return}c()||(l[G.code]=!0,G.code==="KeyX"&&(st=!0),G.code==="KeyE"&&h&&(wt?K():!Q&&!ut&&z()),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(G.code)&&G.preventDefault())}),window.addEventListener("keyup",G=>{l[G.code]=!1});const k=new A;function Mt(G){const Et=Math.sign(G),bt=Math.min(1,Math.abs(G));if(bt<m)return 0;const xt=(bt-m)/(1-m);return Et*Math.pow(xt,1.4)}function Ut(G){if(G>=ht){const bt=G-ht;return v+bt*(S-v)}return G>=1?v:G>=0?G*v:G>=mt?0:-((mt-G)/St)*N}function Ft(G){var xt,zt,Vt,Wt,ee;if(rt.turn.yaw=0,rt.turn.pitch=0,rt.turn.roll=0,Tt=0,Q||ut){const Ht=Gt,Ot=Ht.phases[Ht.i];let te;Ot.kind==="pivot"?(i.quaternion.rotateTowards(Ot.q1,dt*G),Tt=0,rt.turn.yaw=.5,te=i.quaternion.angleTo(Ot.q1)<.001):te=ks(Ot,G),at=0,st=!1,H=0,it=!1,et=ft=yt=0,w.set(0,0,0),te&&(Ht.i++,Ht.i>=Ht.phases.length&&(Q?(Q=!1,wt=!0,i.position.copy(Dt),i.quaternion.copy(Yt),(xt=o.onDocked)==null||xt.call(o)):(ut=!1,(zt=o.onUndocked)==null||zt.call(o)),V=0,Tt=0,Gt=null))}else if(wt)at=0,V=0,st=!1,H=0,it=!1,et=ft=yt=0,w.set(0,0,0);else if(h){const Ht=c();Ht&&(kt(),d=!1);let Ot=0,te=0;if(u){const ne=window.innerWidth/2,Qe=window.innerHeight/2,xi=re.clamp((p-ne)/ne,-1,1),Ie=re.clamp((g-Qe)/Qe,-1,1);Ot=-Mt(xi)*x,te=-Mt(Ie)*f,rt.turn.yaw=Mt(xi),rt.turn.pitch=Mt(Ie)}const qt=Math.min(1,D*G);et+=(Ot-et)*qt,ft+=(te-ft)*qt,et&&i.rotateY(et*G),ft&&i.rotateX(ft*G);let xe=0;!Ht&&(l.KeyA||l.ArrowLeft)&&(xe+=1),!Ht&&(l.KeyD||l.ArrowRight)&&(xe-=1);const ge=xe*E;yt+=(ge-yt)*qt,yt&&i.rotateZ(yt*G),rt.turn.roll=xe;const we=!Ht&&(l.KeyW||l.ArrowUp),Rn=!Ht&&(l.KeyS||l.ArrowDown);if(H>0)H=Math.max(0,H-G),at=0,st=!1;else if((we||Rn)&&(st=!1),we&&(at+=C*G),Rn&&(at-=C*G),st){const ne=J*G;at>ne?at-=ne:at<-ne?at+=ne:(at=0,st=!1)}}if(at=re.clamp(at,Z,T),k.set(0,0,-1).applyQuaternion(i.quaternion),!Q&&!wt&&!ut){let Ht=!1;if(a&&h&&at>ht){const te=Number.isFinite(a.forwardGap(i.position,k,F)),qt=a.forwardNear(i.position,k,L);(te||qt)&&(at=ht,st=!1,Ht=!0,it||(V>v+1?(Vt=o.onWarpExit)==null||Vt.call(o):(Wt=o.onWarpInhibit)==null||Wt.call(o)))}it=Ht;const Ot=Ut(at);if(V+=(Ot-V)*Math.min(1,R*G),i.position.addScaledVector(k,V*G),i.position.addScaledVector(w,G),w.multiplyScalar(Math.max(0,1-_*G)),a&&h){M.copy(k).multiplyScalar(V).add(w);const te=a.resolve(i,M);te.speedIn>0?(w.copy(M),V=0,ot||(ee=o.onImpact)==null||ee.call(o,te.speedIn),ot=!0,te.speedIn>y&&(at=0,st=!1,H=Math.max(H,re.clamp(te.speedIn/v,.2,1)*I))):ot=!1}}rt.speed=Q||ut?Tt:wt?0:V+k.dot(w),rt.throttle=re.clamp(at,0,1),rt.warp=re.clamp((at-ht)/1,0,1),rt.reverse=re.clamp((mt-at)/St,0,1),rt.headingDeg=(re.radToDeg(Math.atan2(k.x,-k.z))+360)%360,rt.pitchDeg=re.radToDeg(Math.asin(re.clamp(k.y,-1,1))),rt.pos.x=i.position.x,rt.pos.y=i.position.y,rt.pos.z=i.position.z,rt.mining=h&&!Q&&!ut&&!wt&&(d||!!l.Space),rt.docking=Q,rt.undocking=ut,rt.docked=wt;const Et=!Q&&!ut&&!wt&&h&&gi(),bt=Math.abs(rt.speed)<=P;rt.canDock=Et&&bt,rt.tooFastToDock=Et&&!bt}return{update:Ft,state:rt,activate:Pt,deactivate:At}}const fl=new A(-210,0,-150),pl=180,W_=80,X_=700,ml=.18;function q_(i,t,e){return Math.sin(i*1.7+t*2.3)*.5+Math.sin(t*1.1+e*1.9)*.3+Math.sin(e*2.1+i*.7)*.2}function Y_(i,t){const e=new Qa(i,t),n=e.attributes.position,r=new A;for(let s=0;s<n.count;s++){r.fromBufferAttribute(n,s);const o=1+q_(r.x,r.y,r.z)*.3;r.multiplyScalar(o),n.setXYZ(s,r.x,r.y,r.z)}return e.computeVertexNormals(),e}function K_(i){const t=[];for(let h=0;h<X_;h++){const u=Math.random()*2-1,d=Math.random()*Math.PI*2,p=Math.sqrt(1-u*u),g=new A(Math.cos(d)*p,u,Math.sin(d)*p),x=Math.random(),f=x<.84?".":x<.96?"+":"*",m=Math.random(),E=m<.55?"#eaf2ff":m<.78?"#aac6ff":m<.92?"#fff3c9":"#ffb27a";t.push({dir:g,char:f,color:E})}const e=new A;function n(){const h=Math.random()*2-1,u=Math.random()*Math.PI*2,d=Math.sqrt(1-h*h);return e.set(Math.cos(u)*d,h,Math.sin(u)*d)}function r(h){const u=pl*Math.cbrt(Math.random());return h.copy(fl).addScaledVector(n(),u)}const s=[];for(let h=0;h<W_;h++){const u=4+Math.random()*24,d=Math.random()<.5?0:1,p=Y_(u,d);p.computeBoundingSphere();const g=.42+Math.random()*.34,f=Math.random()<.7?new Xt(g,g*.84,g*.66):new Xt(g,g*.95,g*1.02),m=new rn({color:f,roughness:1,metalness:0,flatShading:!0}),E=new Le(p,m);r(E.position),E.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),E.userData.spin=new A((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3),E.userData.integrity=1,E.userData.viewRadius=p.boundingSphere.radius,i.add(E),s.push(E)}function o(h){for(const u of s)u.rotation.x+=u.userData.spin.x*h,u.rotation.y+=u.userData.spin.y*h,u.rotation.z+=u.userData.spin.z*h}function a(h){r(h.position),h.userData.integrity=1,h.scale.setScalar(1)}function c(h,u){const d=(h.userData.integrity??1)-u;return d<=0?(a(h),0):(h.userData.integrity=d,h.scale.setScalar(ml+(1-ml)*d),d)}return{update:o,stars:t,asteroids:s,mine:c,cluster:{center:fl,radius:pl}}}const gl=new A(200,160,-620),wo=2,j_=195;function Z_(i){const t=new De;t.position.copy(gl),t.rotation.set(.12,.7,.05),t.scale.setScalar(wo),i.add(t);const e=new rn({color:12174028,roughness:.55,metalness:.15}),n=new rn({color:7107195,roughness:.7,metalness:.2,flatShading:!0}),r=new rn({color:13216134,roughness:.6,metalness:.1}),s=new rn({color:6126788,roughness:.45,metalness:.2,emissive:1187900,emissiveIntensity:1,flatShading:!0}),o=new rn({color:9080984,roughness:.6,metalness:.2}),a=new rn({color:10475775,emissive:2911648,emissiveIntensity:1.4,roughness:.3});function c(O,P,q=t){const W=new Le(O,P);return q.add(W),W}const l=Math.PI/2,h=[];function u(O,P){const q=new ai({color:O,transparent:!0,opacity:1}),W=new Le(new qe(P,10,10),q);return t.add(W),h.push({mat:q,speed:2.2+h.length*.35,phase:h.length*1.3}),W}c(new fe(16,16,220,24),e).rotation.x=l;for(const O of[-72,-36,0,36,72]){const P=c(new fe(18,18,7,24),n);P.rotation.x=l,P.position.z=O}const d=new De;d.position.z=-10,t.add(d);const p=90,g=13;c(new cn(p,g,16,64),e,d);const x=16,f=p-g,m=f-x,E=(x+f)/2;for(let O=0;O<8;O++){const P=O/8*Math.PI*2,q=c(new fe(2.6,2.6,m,8),o,d);q.position.set(Math.cos(P)*E,Math.sin(P)*E,0),q.rotation.z=P-l;const W=c(new Ze(13,17,15),O%2?e:r,d);W.position.set(Math.cos(P)*(p+6),Math.sin(P)*(p+6),0),W.rotation.z=P-l;const _t=c(new Ze(13.4,4,2),a,d);_t.position.set(Math.cos(P)*(p+6),Math.sin(P)*(p+6),8),_t.rotation.z=P-l}const v=c(new fe(26,18,26,24),e);v.rotation.x=l,v.position.z=122;const S=[[14,14],[-14,14],[14,-14],[-14,-14],[0,0]];for(const[O,P]of S){const W=O===0&&P===0?10:7,_t=c(new fe(W,W,20,16),n);_t.rotation.x=l,_t.position.set(O,P,140),c(new cn(W+1,1.6,8,20),a).position.set(O,P,150)}for(let O=0;O<3;O++){const P=l+O/3*Math.PI*2,q=c(new Ze(5,5,64),o);q.position.set(Math.cos(P)*30,Math.sin(P)*30,150),q.rotation.z=P-l,c(new cn(13,2.6,8,18),o).position.set(Math.cos(P)*30,Math.sin(P)*30,182),u(16764490,2.4).position.set(Math.cos(P)*30,Math.sin(P)*30,184)}for(let O=0;O<3;O++){const P=l+O/3*Math.PI*2,q=c(new fe(11,11,56,16),e);q.rotation.x=l,q.position.set(Math.cos(P)*22,Math.sin(P)*22,-82)}const N=c(new fe(22,22,10,24),n);N.rotation.x=l,N.position.z=-116;for(let O=0;O<3;O++){const P=l+O/3*Math.PI*2,q=c(new fe(6,10,18,16,1,!0),n);q.rotation.x=l,q.position.set(Math.cos(P)*11,Math.sin(P)*11,-128)}for(const O of[-1,1]){const P=c(new fe(2.6,2.6,120,10),o);P.rotation.z=l,P.position.set(O*70,0,-50);for(const W of[55,105]){const _t=O*W,vt=-50;c(new Ze(46,1,34),s).position.set(_t,0,vt);for(const dt of[-16,0,16])c(new Ze(48,1.6,1.6),o).position.set(_t,0,vt+dt);for(const dt of[-23,0,23])c(new Ze(1.6,1.6,36),o).position.set(_t+dt,0,vt)}u(O<0?16726832:3800938,2.6).position.set(O*132,0,-50)}c(new fe(1.6,1.6,46,8),o).position.set(0,41,30);const R=c(new fe(17,4,9,24,1,!0),o);R.position.set(0,66,30),R.rotation.set(-.5,0,0),u(16726832,2.8).position.set(0,70,30);const J=new O_(16767400,.6,320,2);J.position.set(0,0,90),t.add(J);const _=[],y=(O,P,q,W)=>_.push({p:new A(O,P,q),r:W});for(const O of[-100,-66,-33,0,33,66,100])y(0,0,O,18);y(0,0,125,28),y(0,0,150,22);for(let O=0;O<12;O++){const P=O/12*Math.PI*2;y(Math.cos(P)*90,Math.sin(P)*90,-10,16)}for(let O=0;O<3;O++){const P=l+O/3*Math.PI*2;y(Math.cos(P)*22,Math.sin(P)*22,-82,14)}y(0,0,-118,24);for(const O of[-1,1])for(const P of[40,70,100,130])y(O*P,0,-50,20);y(0,45,30,14),y(0,66,30,16),t.updateMatrixWorld(!0);const I=_.map(O=>({center:O.p.clone().applyMatrix4(t.matrixWorld),radius:O.r*wo}));let F=0;function L(O){F+=O,d.rotation.z+=.07*O;for(const P of h){const q=Math.sin(F*P.speed+P.phase);P.mat.opacity=q>.55?1:.12}}return{update:L,group:t,center:gl,radius:j_*wo,colliders:I}}const me=Math.PI/2;function Jt(i,t,e){const n=new Le(t,e);return i.add(n),n}function _l(i,t,e,n=!1){return new rn({color:i,roughness:t,metalness:e,flatShading:n})}function wh(){const i=.55+Math.random()*.3,t=Math.random()<.5;return{hull:_l(new Xt(i,i,i*1.02),.55,.25),hullDark:_l(new Xt(i*.5,i*.52,i*.58),.7,.3,!0),accent:new rn({color:t?new Xt(.82,.46,.2):new Xt(.3,.5,.86),roughness:.5,metalness:.3,flatShading:!0,side:dn}),glow:new rn({color:10475775,emissive:2911648,emissiveIntensity:1.3,roughness:.3}),engine:new rn({color:3346688,emissive:16738858,emissiveIntensity:1.6,roughness:.4})}}function wr(i,t,e,n,r=14){const s=Jt(i,new Za(e,n,6,r),t);return s.rotation.x=me,s}function vr(i,t,e,n,r){const s=new _h;s.moveTo(0,0),s.lineTo(i,-n),s.lineTo(i,-n-e),s.lineTo(0,-t),s.closePath();const o=new Ja(s,{depth:r,bevelEnabled:!1,steps:1});return o.translate(0,0,-r/2),o.rotateX(me),o}function La(i,t,e,n,r,s,o=0){for(const a of[-1,1]){const c=Jt(i,e,t);c.scale.x=a,c.position.set(n*a,r,s),o&&(c.rotation.z=-a*o)}}function Ye(i,t,e,n,r,s,o,a){const c=Jt(i,new Ze(e,n,r),t);return c.position.set(s,o,a),c}function $_(i,t,e,n,r,s,o,a){for(let c=0;c<e;c++){const l=me+c/e*Math.PI*2,h=Math.cos(l)*n,u=Math.sin(l)*n,d=Jt(i,new fe(r*.8,r,5,12,1,!0),t.hullDark);d.rotation.x=me,d.position.set(h,u,o);const p=Jt(i,new pn(s,7,12),t.engine);p.rotation.x=me,p.position.set(h,u,a)}}function J_(i){const t=new De,e=72;wr(t,i.hull,8,e,20);for(const l of[-22,-7,8,23])Jt(t,new cn(8.6,1.1,8,20),i.hullDark).position.z=l;for(let l=0;l<4;l++){const h=-e*.28+l*16;for(const[u,d]of[[-1,1],[1,1],[-1,-1],[1,-1]])Ye(t,(l+(u+d))%2?i.accent:i.hullDark,11,9,13,u*8,d*7,h)}const n=Jt(t,new qe(7,16,14),i.hull);n.scale.set(1,1,1.25),n.position.z=e*.5-4,Jt(t,new cn(6.6,1.1,8,20),i.glow).position.z=e*.5+3,Ye(t,i.glow,6,2,1,0,4,e*.5+1),Jt(t,new fe(.5,.5,9,6),i.hullDark).position.set(0,11,6);const s=Jt(t,new fe(3.2,.6,2.2,14,1,!0),i.hull);s.position.set(0,15,6),s.rotation.set(-.5,0,0);for(const l of[-1,1]){const h=Jt(t,new fe(.8,.8,16,6),i.hullDark);h.rotation.z=me,h.position.set(l*12,0,-16),Ye(t,i.accent,14,.8,18,l*19,0,-16)}const o=Jt(t,new fe(8.5,8.5,6,16),i.hullDark);o.rotation.x=me,o.position.z=-e*.5+1;const a=Jt(t,new fe(7,10,9,20,1,!0),i.hullDark);a.rotation.x=me,a.position.z=-e*.5-6;const c=Jt(t,new pn(7,12,18),i.engine);return c.rotation.x=me,c.position.z=-e*.5-11,t}const Q_={name:"Freighter",build:J_};function t0(i){const t=new De,e=20;wr(t,i.hull,3.2,e,16);const n=Jt(t,new pn(3.3,9,16),i.hull);n.rotation.x=me,n.position.z=e*.5+6.5;const r=Jt(t,new fe(.25,.25,5,5),i.hullDark);r.rotation.x=me,r.position.z=e*.5+13;const s=Jt(t,new qe(2.6,14,12),i.glow);s.scale.set(1,.72,1.5),s.position.set(0,1.7,e*.28),La(t,i.accent,vr(10,8,2.5,5,.7),2.6,-.6,-1.5,.12);const o=Jt(t,vr(6,6,1.6,4,.7),i.accent);o.rotation.z=me,o.position.set(0,2,-e*.42),Ye(t,i.hullDark,5,2.2,6,0,-2.4,-2);for(const a of[-1,1]){wr(t,i.hullDark,1.8,6,12).position.set(a*3.2,0,-e*.5-2);const c=Jt(t,new pn(1.9,4.5,12),i.engine);c.rotation.x=me,c.position.set(a*3.2,0,-e*.5-7)}return t}const e0={name:"Shuttle",build:t0};function n0(i){const t=new De,e=64;Ye(t,i.hullDark,4,4,e,0,0,0);for(const s of[-22,-8,6,20])Ye(t,i.hullDark,22,1.4,1.4,0,0,s);for(let s=0;s<3;s++){const o=me+s/3*Math.PI*2,a=Math.cos(o)*11,c=Math.sin(o)*11;wr(t,i.hull,7,30,16).position.set(a,c,-2),Jt(t,new cn(7,.9,6,16),i.accent).position.set(a,c,-2);const l=Jt(t,new fe(.7,.7,30,6),i.hullDark);l.rotation.x=me,l.position.set(a*.55,c*.55,-2)}const n=Jt(t,new qe(6,16,14),i.accent);n.scale.set(1,1,1.2),n.position.z=e*.5-2,Ye(t,i.hull,7,7,6,0,0,e*.5-9),Jt(t,new cn(5.2,1,8,18),i.glow).position.z=e*.5+3;const r=Jt(t,new fe(6,9,8,18,1,!0),i.hullDark);return r.rotation.x=me,r.position.z=-e*.5-3,$_(t,i,3,3.8,3,3,-e*.5-2,-e*.5-8),t}const i0={name:"Tanker",build:n0};function r0(i){const t=new De,e=30;wr(t,i.hull,2.6,e,14);const n=Jt(t,new pn(2.6,11,14),i.hull);n.rotation.x=me,n.position.z=e*.5+7.5;const r=Jt(t,new qe(2.1,14,12),i.glow);r.scale.set(1,.7,1.8),r.position.set(0,1.4,e*.12),La(t,i.accent,vr(12,11,1.5,8,.8),2,-.5,-e*.12,.1),La(t,i.accent,vr(4.5,4,1,3,.6),2.2,.4,e*.32,.05);const s=Jt(t,vr(7,7,1.5,5,.8),i.accent);s.rotation.z=me,s.position.set(0,2,-e*.34);for(const c of[-1,1])Ye(t,i.hullDark,2.5,3,8,c*2.8,-.6,e*.02);const o=Jt(t,new fe(3,4.6,7,16,1,!0),i.hullDark);o.rotation.x=me,o.position.z=-e*.5-3;const a=Jt(t,new pn(4,8,16),i.engine);a.rotation.x=me,a.position.z=-e*.5-8;for(let c=0;c<4;c++){const l=c/4*Math.PI*2;Ye(t,i.hullDark,1,1,5,Math.cos(l)*4,Math.sin(l)*4,-e*.5-5)}return t}const s0={name:"Interceptor",build:r0};function o0(i){const t=new De,e=34;Jt(t,new qe(12,18,16),i.hull).scale.set(1,.85,1.5);for(const r of[-9,2,12]){const s=Jt(t,new cn(12,1.5,8,24),i.hullDark);s.scale.set(1,.85,1),s.position.z=r}for(const r of[-1,1])Ye(t,i.accent,5,8,14,r*11,0,-2);Ye(t,i.hullDark,12,4,16,0,9,-4);for(const r of[-1,1])Ye(t,i.hullDark,3,3,20,r*10,-1,e*.45),Ye(t,i.accent,5,7,5,r*10,-1,e*.5+9),Jt(t,new qe(2.2,10,8),i.hull).position.set(r*10,-1,e*.5+13);Jt(t,new qe(5,14,12,0,Math.PI*2,0,Math.PI*.6),i.accent).position.set(0,8,e*.18);const n=Jt(t,new qe(2.4,12,10),i.glow);n.scale.set(1.6,.8,.6),n.position.set(0,4.5,e*.55);for(const[r,s]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const o=Jt(t,new fe(2.6,3.4,5,12,1,!0),i.hullDark);o.rotation.x=me,o.position.set(r*6,s*5,-e*.5-2);const a=Jt(t,new pn(3,7,12),i.engine);a.rotation.x=me,a.position.set(r*6,s*5,-e*.5-6)}return t}const a0={name:"Mining Barge",build:o0},xs=[Q_,e0,i0,s0,a0],To=950,c0=280,l0=700,as=540,h0=52,u0=108,d0=760,f0=1180,p0=4.5,m0=3,g0=18,_0=.6,Nn=44,Ao=24,hr=(i,t)=>i+Math.random()*(t-i),Sn=re.clamp,vl=i=>i*i*(3-2*i);function v0(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return new A(Math.cos(t)*e,i,Math.sin(t)*e)}const xl=xs.map(i=>i.build),yl=["KLV","NRX","VSG","ORB","TYC","ZEN","AXM","HLO","DRV","PXR"];function Ps(){const i=yl[Math.floor(Math.random()*yl.length)],t=String(Math.floor(100+Math.random()*900));return`${i}-${t}`}function x0(i,t){i.updateMatrixWorld(!0);const e=new Wn().setFromObject(i),n=e.getSize(new A),r=e.getCenter(new A),s=Sn(n.length()*.018,.7,2.2),o=e.max.z-n.z*.18,a=[[16726832,r.x-n.x*.5,r.y,o,"nav"],[3800938,r.x+n.x*.5,r.y,o,"nav"],[16777215,r.x,e.max.y,e.min.z+n.z*.2,"strobe"],[16738890,r.x,r.y,e.min.z,"strobe"]];for(let c=0;c<a.length;c++){const[l,h,u,d,p]=a[c],g=new ai({color:l,transparent:!0,opacity:1,fog:!1});Jt(i,new qe(s,8,8),g).position.set(h,u,d),t.push({mat:g,kind:p,speed:2.4+c*.7,phase:c*1.7})}}function y0(i,t,e,n={}){const r=n.count??6,s=t.center,o=[],a=(t.colliders||[]).map(U=>({c:U.center,r:U.radius})),c=(e==null?void 0:e.asteroids)||[],l=(e==null?void 0:e.cluster)||null,h=16,u=24,d=1.15,p=130,g=2.6,x=1.3,f=new A,m=new A,E=new A(0,1,0),v=new A(0,0,1),S=new A,N=new A,C=new A,R=new A,D=new A,J=new A,_=new A,y=new A,I=new A;function F(U){const X=Math.random()*Math.PI*2,nt=(Math.random()*2-1)*_0,Y=Math.cos(nt);return U.set(Math.cos(X)*Y,Math.sin(nt),Math.sin(X)*Y).normalize()}function L(U,X){return m.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),X.crossVectors(U,m),X.lengthSq()<1e-4&&X.crossVectors(U,E),X.normalize()}function O(U,X,nt,Y,lt,ht,mt){S.copy(U).sub(nt);const St=S.length(),Z=X+lt+h,T=St-Z;if(T>ht||St<1e-4)return 0;const at=Sn(1-T/ht,0,1),st=at*at,V=S.dot(Y);N.copy(S).addScaledVector(Y,-V);const et=N.length();return V>0&&(et>.001?mt.addScaledVector(N,-(st*g)/et):(C.crossVectors(Y,E),C.lengthSq()<1e-4&&C.crossVectors(Y,v),mt.addScaledVector(C.normalize(),st*g))),mt.addScaledVector(S.multiplyScalar(-1/St),st*x),V>0&&et<Z?at*Sn(1-et/Z,0,1):0}function P(U,X,nt,Y,lt){S.copy(U).sub(X);const ht=S.length(),mt=nt+Y;ht<mt&&ht>1e-4&&U.addScaledVector(S.multiplyScalar(1/ht),(mt-ht)*lt)}function q(U,X){const nt=U.group.position,Y=U.heading,lt=U.radius,ht=60+U.speed*1.2;let mt=0;for(const St of a)mt=Math.max(mt,O(St.c,St.r,nt,Y,lt,ht,X));if(l&&nt.distanceTo(l.center)<l.radius+ht+80)for(const St of c)mt=Math.max(mt,O(St.position,(St.userData.viewRadius||10)*St.scale.x,nt,Y,lt,ht,X));for(const St of o)St===U||!St.active||(mt=Math.max(mt,O(St.group.position,St.radius,nt,Y,lt,ht,X)));return mt}function W(U){const X=U.group.position,nt=U.radius;for(const Y of a)P(X,Y.c,Y.r,nt,1);if(l&&X.distanceTo(l.center)<l.radius+80)for(const Y of c)P(X,Y.position,(Y.userData.viewRadius||10)*Y.scale.x,nt,1);for(const Y of o)Y===U||!Y.active||P(X,Y.group.position,Y.radius,nt,.5)}function _t(U,X,nt){y.subVectors(X,U);const Y=y.lengthSq(),lt=Y>1e-6?Sn(I.subVectors(nt,U).dot(y)/Y,0,1):0;return I.copy(U).addScaledVector(y,lt),I.distanceToSquared(nt)}function vt(U,X,nt){for(const Y of a){const lt=Y.r+nt+u;if(_t(U,X,Y.c)<lt*lt)return!1}if(l){const Y=l.radius+nt+u;if(_t(U,X,l.center)<Y*Y)return!1}return!0}function tt(U,X){const nt=new De;nt.visible=!1,i.add(nt);const Y=U(wh());nt.add(Y);const lt=[];x0(Y,lt);const ht=new Wn().setFromObject(Y),mt=ht.getSize(new A),St=mt.z,Z=Math.max(mt.x,mt.y),T=ht.getBoundingSphere(new pi).radius,at=St*p0,st=Math.max(1.5,Z*.4),V=new Float32Array(Nn*3),et=new Float32Array(Nn*3),ft=new Float32Array(Nn),yt=new Float32Array(Nn);for(let Nt=0;Nt<Nn;Nt++){const Qt=Nt/(Nn-1);ft[Nt]=Math.random()*2-1,yt[Nt]=Math.random()*2-1;const B=1-Qt*.85;et[Nt*3]=.72*B,et[Nt*3+1]=.9*B,et[Nt*3+2]=B}const w=new ve;w.setAttribute("position",new Fe(V,3)),w.setAttribute("color",new Fe(et,3));const M=new Mr({size:Sn(Z*.35,3,9),sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,fog:!1,blending:ys,depthWrite:!1}),H=new Rs(w,M);H.visible=!1,H.frustumCulled=!1,nt.add(H);const it=[],ot=new Float32Array(Ao*3);for(let Nt=0;Nt<Ao;Nt++)it.push(v0());const Q=new ve;Q.setAttribute("position",new Fe(ot,3));const wt=new Mr({color:14546687,size:Sn(Z*.4,3,10),sizeAttenuation:!0,transparent:!0,opacity:0,fog:!1,blending:ys,depthWrite:!1}),ut=new Rs(Q,wt);ut.visible=!1,ut.frustumCulled=!1;const Tt=Math.max(Z,St*.22);nt.add(ut);const Gt=new A,rt=new A,Pt=new A,kt=new A,At={group:nt,active:!1,radius:T,heading:rt,speed:0,laneLen:0,warpOutStart:0,cruiseSpeed:0,peakSpeed:0,respawn:hr(0,7)+X*.9,callsign:Ps()};function Dt(){for(let Nt=0;Nt<16;Nt++){F(Gt),L(Gt,m);const Qt=f.copy(s).addScaledVector(m,hr(c0,l0));if(Pt.copy(Qt).addScaledVector(Gt,-To),kt.copy(Qt).addScaledVector(Gt,To),vt(Pt,kt,T))break}At.laneLen=To*2,At.warpOutStart=At.laneLen-as*.4,At.cruiseSpeed=hr(h0,u0),At.peakSpeed=hr(d0,f0),At.speed=At.peakSpeed,At.callsign=Ps(),rt.copy(Gt),At.active=!0,nt.position.copy(Pt),nt.up.copy(E),nt.lookAt(f.copy(Pt).add(rt)),nt.visible=!0}function Yt(){At.active=!1,nt.visible=!1,H.visible=!1,ut.visible=!1,At.respawn=hr(m0,g0)}return At.update=function(Nt,Qt){if(!At.active){At.respawn-=Nt,At.respawn<=0&&Dt();return}const B=J.copy(nt.position).sub(Pt).dot(Gt);let Rt,$=0,ct=0;if(B<as){const $t=Sn(B/as,0,1);Rt=re.lerp(At.peakSpeed,At.cruiseSpeed,vl($t)),$=1-$t,ct=Math.max(0,1-$t/.22)}else if(B<At.warpOutStart)Rt=At.cruiseSpeed;else{const $t=At.laneLen+as-At.warpOutStart,Bt=(B-At.warpOutStart)/$t;if(Rt=re.lerp(At.cruiseSpeed,At.peakSpeed,vl(Bt)),$=Sn(Bt,0,1),ct=Math.max(0,(Bt-.78)/.22),Bt>=1){Yt();return}}const Lt=$<.05;R.copy(kt).sub(nt.position).normalize(),_.set(0,0,0);let It=0;Lt&&(It=q(At,_)),D.copy(R).add(_),D.lengthSq()<1e-6?D.copy(rt):D.normalize();const Zt=rt.angleTo(D);if(Zt>1e-4&&rt.lerp(D,Math.min(1,d*Nt/Zt)).normalize(),$>.02)At.speed=Rt;else{const $t=Rt*(1-.7*It);At.speed+=Sn($t-At.speed,-p*Nt,p*Nt)}if(nt.position.addScaledVector(rt,At.speed*Nt),W(At),nt.lookAt(f.copy(nt.position).add(rt)),$>.02){const $t=at*$;for(let Bt=0;Bt<Nn;Bt++){const ue=Bt/(Nn-1),ie=st*(.25+.9*ue);V[Bt*3]=ft[Bt]*ie,V[Bt*3+1]=yt[Bt]*ie,V[Bt*3+2]=-(ue*$t+St*.3)}w.attributes.position.needsUpdate=!0,M.opacity=Math.min(1,$*1.25),H.visible=!0}else H.visible=!1;if(ct>.001){const $t=Tt*(.3+ct*2.5);for(let Bt=0;Bt<Ao;Bt++){const ue=it[Bt];ot[Bt*3]=ue.x*$t,ot[Bt*3+1]=ue.y*$t,ot[Bt*3+2]=ue.z*$t}Q.attributes.position.needsUpdate=!0,wt.opacity=ct,ut.visible=!0}else ut.visible=!1;const he=$>.05;for(const $t of lt){if(he){$t.mat.opacity=1;continue}const Bt=Math.sin(Qt*$t.speed+$t.phase);$t.mat.opacity=$t.kind==="strobe"?Bt>.86?1:.06:.5+.5*Math.max(0,Bt)}},At}for(let U=0;U<r;U++)o.push(tt(xl[U%xl.length],U));let dt=0;function pt(U){dt+=U;for(const X of o)X.update(U,dt)}return{update:pt,ships:o}}const Ro=130,M0=.107,S0=re.degToRad(6);function E0(i,t,e){const n=new k_;n.far=Ro;const r=new gt(0,0),s=new A,o=new A,a=new A,c=new ke;let l=null;const h={object:null,inRange:!1,firing:!1,distance:0,integrity:1};function u(){l=null,h.object=null,h.inRange=!1,h.firing=!1,h.distance=0,h.integrity=1}function d(g){t.getWorldPosition(s),o.subVectors(g.position,s);const x=o.length();if(x>Ro)return!1;o.divideScalar(x),t.getWorldQuaternion(c),a.set(0,0,-1).applyQuaternion(c);const f=Math.acos(re.clamp(a.dot(o),-1,1)),m=Math.atan2((g.userData.viewRadius??10)*g.scale.x,x);return f<=m+S0}function p(g,x){i.updateMatrixWorld(!0);let f=null;if(g&&l&&d(l))f=l;else{n.setFromCamera(r,t),n.far=Ro;const m=n.intersectObjects(e.asteroids,!1);f=m.length?m[0].object:null}if(!f){u();return}if(l=f,t.getWorldPosition(s),h.object=f,h.inRange=!0,h.distance=s.distanceTo(f.position),h.integrity=f.userData.integrity??1,g){h.firing=!0;const m=e.mine(f,M0*x);h.integrity=m,m<=0&&u()}else h.firing=!1}return{update:p,reset:u,state:h}}function We(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function Co(i,t=12){const e=Math.max(0,Math.min(t,Math.round(i*t)));return"["+"#".repeat(e)+".".repeat(t-e)+"]"}function Po(i){return(i<0?"-":"+")+String(Math.abs(Math.round(i))).padStart(5,"0")}function b0(){const i=document.getElementById("hud"),t=We("div",null,"");t.id="reticle";for(const f of["up","down","left","right","dot"])t.appendChild(We("span",f,""));const e=We("pre","readout left",""),n=We("pre","readout low",""),r=We("div",null,"");r.id="dash";const s=We("div","rule",""),o=We("div","row",""),a=We("span",null,""),c=We("span",null,"");o.append(a,We("span","sep","|"),c),r.append(s,o);const l=We("pre",null,"");l.id="mining",l.style.display="none";const h=We("div",null,"");h.id="dock-prompt",h.style.display="none";const u=We("div",null,"");u.id="sys-msg",u.style.display="none";let d=null;i.append(t,e,n,r,l,h,u);function p(){}function g(f,m=3800){u.textContent=f,u.style.display="",d&&clearTimeout(d),d=setTimeout(()=>{u.style.display="none",d=null},m)}function x(f,m){const E=f.throttle,v=f.warp,S=f.reverse??0,N=S>0?S:E,C=S>0?-Math.round(S*100):Math.round(E*100);if(e.textContent=`SPD  ${String(Math.round(f.speed)).padStart(4)} u/s
THR  ${Co(N)} ${String(C).padStart(4)}%${S>0?" << REV":""}
WRP  ${Co(v)} ${String(Math.round(v*100)).padStart(4)}%${v>0?"  >> WARP":""}`,n.textContent=`HDG  ${String(Math.round(f.headingDeg)).padStart(4)} deg
PIT  ${String(Math.round(f.pitchDeg)).padStart(4)} deg`,a.textContent=`POS  X ${Po(f.pos.x)}  Y ${Po(f.pos.y)}  Z ${Po(f.pos.z)}`,c.textContent=`VEL ${String(Math.round(f.speed)).padStart(3)}`,m&&m.object){const R=m.integrity??1,D=Math.round(R*100);l.style.display="",l.textContent=`${m.firing?">> MINING <<":"-- LOCK --"}   DST ${String(Math.round(m.distance)).padStart(3)}u   INTEG ${Co(R)} ${String(D).padStart(3)}%`,l.classList.toggle("firing",!!m.firing)}else l.style.display="none";f.docked?(h.style.display="",h.classList.add("docked"),h.classList.remove("docking"),h.textContent="[ DOCKED ]   PRESS  E  TO UNDOCK"):f.docking||f.undocking?(h.style.display="",h.classList.add("docking"),h.classList.remove("docked"),h.textContent=f.docking?">> DOCKING <<   AUTOPILOT":">> DEPARTING <<   AUTOPILOT"):f.canDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="PRESS  E  TO DOCK"):f.tooFastToDock?(h.style.display="",h.classList.remove("docked","docking"),h.textContent="SLOW DOWN TO DOCK"):h.style.display="none"}return{update:x,resize:p,systemMessage:g}}function Qn(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}const Ml=100;function w0(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Sl(i){return String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function T0(){const i=document.getElementById("hud"),t=Qn("div",null,"");t.id="journal";const e=Qn("div",null,"");e.id="journal-full";const n=Qn("div","jrn-panel",""),r=Qn("div","jrn-head",""),s=Qn("span","jrn-title","SHIP LOG"),o=Qn("div","jrn-close","");r.append(s,o);const a=Qn("div","jrn-list","");n.append(r,a),e.append(n),e.style.display="none";for(const v of["pointerdown","pointermove","pointerup","wheel","contextmenu"])n.addEventListener(v,S=>S.stopPropagation());t.addEventListener("pointerdown",v=>{v.stopPropagation(),f(!0)}),o.addEventListener("pointerdown",v=>{v.stopPropagation(),f(!1)});for(const v of["pointermove","pointerup","wheel"])t.addEventListener(v,S=>S.stopPropagation());i.append(t,e);const c=[];let l=0,h=!1;function u(v,S){const N=v.kind==="radio"?"&gt;&gt;":"&middot;";let C=`<span class="jrn-time">T+${w0(v.t)}</span><span class="jrn-tag">${N}</span><span class="jrn-msg">${Sl(v.short)}</span>`;return S&&v.text&&v.text!==v.short&&(C+=`<div class="jrn-detail">${Sl(v.text)}</div>`),C}function d(){const v=c.slice(-10);t.innerHTML=v.map(S=>`<div class="jrn-entry jrn-${S.kind}">${u(S,!1)}</div>`).join("")}function p(v=!1){const S=v||a.scrollHeight-a.scrollTop-a.clientHeight<4;a.innerHTML=c.length?c.map(N=>`<div class="jrn-entry jrn-${N.kind}">${u(N,!0)}</div>`).join(""):'<div class="jrn-empty">— no entries —</div>',S&&(a.scrollTop=a.scrollHeight)}function g(v,S){const N=typeof v=="string"?{short:v,text:null,kind:S||"info",code:null}:{short:v.short,text:v.text||null,kind:v.kind||S||"info",code:v.code||null};N.t=l,c.push(N),c.length>Ml&&c.shift(),d(),h&&p()}function x(v,S=Ml){const N=Math.max(0,c.length-S);for(let C=N;C<c.length;C++)if(c[C].code===v)return!0;return!1}function f(v){h!==v&&(h=v,e.style.display=v?"":"none",v&&p(!0))}function m(){f(!h)}window.addEventListener("keydown",v=>{v.key&&v.key.toLowerCase()==="j"?(v.preventDefault(),m()):v.code==="Escape"&&h&&f(!1)});function E(v){l+=v}return d(),{log:g,toggle:m,update:E,hasRecent:x,isOpen:()=>h}}const Xe=i=>i[Math.floor(Math.random()*i.length)],ti=(i,t)=>i+Math.floor(Math.random()*(t-i+1)),El=["ore","raw ore","refined ore","iron ore","nickel-iron","copper ore","titanium ore","platinum ore","gold ore","silver ore","uranium ore","thorium ore","cobalt","tungsten","palladium","iridium","osmium","rhodium","bauxite","silicate sand","water ice","water","deuterium","helium-3","tritium","liquid hydrogen","liquid oxygen","liquid nitrogen","methane ice","ammonia","argon","xenon","neon","frozen volatiles","fuel cells","reactor cores","antimatter pods","fusion pellets","plasma capacitors","power cells","isotope batteries","solar film","scrap metal","alloy plating","hull plating","structural beams","sheet metal","composite panels","ceramic tiles","heat tiles","superalloy ingots","foamed aluminum","carbon fiber spools","machine parts","spare thrusters","drive couplings","pump assemblies","servo motors","heat exchangers","circuit boards","sensor modules","comm relays","nav beacons","survey drones","mining charges","cutting lasers","grapple arms","docking collars","airlock seals","pressure valves","superconductors","data cores","memory lattices","quantum chips","optical fiber","holo emitters","AI substrates","encrypted drives","navigation charts","foodstuffs","nutrient paste","grain","seed stock","hydroponics","fresh produce","algae blocks","protein vats","synth-meat","coffee beans","spices","dried rations","livestock embryos","frozen embryos","plant cuttings","fungal cultures","bee colonies","medical supplies","vaccines","antibiotics","blood plasma","organ cultures","gene therapies","surgical kits","stim packs","cryo-meds","passengers","colonists","tourists","contract laborers","refugees","a survey team","a relief crew","luxury goods","textiles","rare earths","gemstones","art (sealed crates)","antiques","vintage liquor","perfume base","silk","jewelry","coolant","lubricants","solvents","industrial acids","sealant foam","polymers","resins","ceramics","glass billets","fertilizer","rated explosives","propellant","oxygen candles","CO2 scrubbers","air filters","water reclaimers","ration bars","terraforming gear","atmosphere processors","soil bacteria","construction mechs","habitat modules","prefab shelters","solar arrays","wind turbines","salvage","derelict parts","scrapped drones","recovered black boxes","sealed crates","classified cargo","diplomatic pouches","unmarked containers","live specimens","seized contraband","quarantined goods"],Lo=["Tycho Relay","Kepler Station","Drift-Nine","the inner yards","the outer marker","Halcyon Dock","Meridian Platform","the refinery","Cold Harbor","Gantry Seven","Lagrange Hub","New Sutter","the foundry","Ostrava Ring","the deep field","Cradle Station","Pellucid Yards","the scrap line","Vesper Outpost","the jump gate","Beacon Echo","Far Dock","Ironside","the lower bays","the belt","Quayside","Helios Station","Perdition Reach","Anvil Yards","the Saltworks","Caldera Dock","Stillwater Ring","the Verge","Mariner Hub","Talon Outpost","the Bastion","Ember Platform","Hollow Point","the Spindle","Gossamer Dock","Karst Station","the Reliquary","Bishop Relay","the Maw","Tannhauser Gate","Solace Ring","the Drydocks","Caravan Point","Wreck Alley","the Sprawl","Lantern Station","Obsidian Yards","the Threshold","Pilgrim Dock","Harrow Ring","the Junkfields","Aurora Platform","Daedalus Hub","the Causeway","Greywater Station","Tarsus Relay","the Picket Line","Sable Dock","Verdant Ring","the Smelters","Highgate","Nyx Outpost","the Long Dark","Castellan Station","the Anchorage","Ridgeline Yards","Pell Station","the Freeport","Goliath Dock","the Reaches","Kessler Ring","the Boneyard","Mistral Platform","New Antioch","the Tessellate","Wayfarer Hub","the Cinder Belt","Ourania Station","the Trench","Provender Dock","Ashfall Ring","the Watchpost","Garrison Nine","the Sieve","Helion Yards","the Far Reaches","Selene Dock","the Quarantine Ring","Mercer Station","the Driftway","Cobalt Harbor","the Verdigris","Tycho Lower","Kepler High","the Gantries","Redoubt Station","the Marshalling Yards","Concord Dock","the Bight","Halberd Ring","the Spillway","Junctor Hub","the Outworks","Sentinel Platform","the Hollows","Calder Station","the Stacks","Wend Outpost","the Reef","Pannier Dock","the Lattice","Voss Relay","the Deadlanes","Hesperus Ring","the Coalsack","Branner Yards","the Estuary","Foundry Six","the Approaches","Marrow Dock","the Causey","Tindall Station"],bl=["main drive","coolant loop","reactor","RCS thrusters","nav computer","life support","shield emitter","sensor array","comm array","gyros","fuel pump","heat sinks","port nacelle","starboard nacelle","inertial dampers","jump drive","docking clamps","gravity plating","primary capacitor","secondary capacitor","plasma injector","fuel mixer","reaction wheel","attitude jets","thermal regulator","radiator fins","oxygen recycler","CO2 scrubber","water reclaimer","power bus","backup battery","main bus","transformer coil","field generator","deflector dish","particle sink","warp coil","warp manifold","flux capacitor","magnetic bottle","containment field","antimatter trap","ion thruster","main injector","turbopump","heat pipe","cryo pump","condenser","sensor mast","lidar array","radar dish","optical scope","spectrometer","transponder","beacon transmitter","autopilot","flight computer","star tracker","horizon sensor","docking laser","grapple winch","cargo crane","airlock","pressure hull","blast door","escape pod bay","medbay","galley","crew quarters","observation deck","landing gear","undercarriage","keel","spine truss","solar wing","battery array","heat shield","ablative plating","point defense","tractor emitter","stabilizer fin","trim tab","ballast tank","distress beacon","gimbal mount","fuel scrubber","plasma vent","arc suppressor"],A0=["bearing two-seven-zero","bearing one-eight-zero","bearing zero-niner-zero","bearing three-three-zero","high to port","low to starboard","dead ahead","off the stern","up-spin","down-spin","coreward","rimward","bearing nil","bearing zero-four-five","bearing one-three-five","bearing two-two-five","bearing three-one-five","bearing zero-one-zero","bearing zero-six-zero","bearing one-two-zero","bearing one-five-zero","bearing two-one-zero","bearing two-four-zero","bearing three-zero-zero","bearing zero-three-zero","high to starboard","low to port","off the bow","off the port quarter","off the starboard quarter","directly above","directly below","astern","to port","to starboard","high overhead","below the keel","two points off the bow","three points to port","off the nose","trailing aft","crossing left to right","crossing right to left","closing fast","holding station","drifting astern","spinward","antispinward","sunward","shadowside","toward the cluster","toward the station","out past the marker","near the jump gate","along the belt plane","above the ecliptic","below the ecliptic","inbound","outbound","on an intercept line","low and closing","high and slow","fading on the scope"];function R0(i,t){const e={cs:()=>t,cs2:Ps,cs3:Ps,cargo:()=>Xe(El),cargo2:()=>Xe(El),dest:()=>Xe(Lo),dest2:()=>Xe(Lo),origin:()=>Xe(Lo),system:()=>Xe(bl),system2:()=>Xe(bl),bearing:()=>Xe(A0),lane:()=>ti(1,9),corridor:()=>ti(1,6),bay:()=>ti(1,24),min:()=>ti(2,45),queue:()=>ti(2,9),count:()=>ti(2,9),hops:()=>ti(2,6)};return i.replace(/\{(\w+)\}/g,(n,r)=>e[r]?String(e[r]()):n)}const C0=["Long haul. Could use a real cup of coffee out here.","{cs2}, you copy? Been dead quiet on this band.","Third run this cycle. Eyes are starting to cross.","Anybody got the scores from the inner yards?","Tell {cs2} they still owe me a drink at {dest}.","Beautiful view of the cluster from up here, I'll give it that.","Halfway through the shift and nothing but static.","{cs2}, nice burn on that exit. Showing off again?","Remind me why I took the night rotation.","Somebody left the galley a mess. Again.","Same rock, same run, same paycheck.","You hear they're rerouting traffic past {dest}?","Sensors are picking up a whole lot of nothing.","Forty cycles to retirement. Not that I'm counting.","{cs2}, save me a docking slot, would you?","My nav says {dest}. My gut says lunch.","Quiet out here tonight. I like it that way.","Whoever calibrated these gyros owes me an apology.","Counting asteroids to pass the time. Lost track at four hundred.","New kid keeps calling it 'up'. There's no up out here.","Coffee machine's down. This is a genuine emergency.","Long way from home, this run.","{cs2}, that you on my scope or just more debris?","Another day, another belt. Same as the last.","Tell control the corridor markers are drifting again.","If I see one more cargo manifest I'm spacing myself.","Music's the only thing keeping me awake out here.","Pretty sure my co-pilot's asleep. Lucky him.","{cs2}, you still on for cards when we dock at {dest}?","Sun's coming up over the cluster. Worth the trip alone.","Stars look different from out past the marker. Colder, somehow.","Forgot my lucky wrench at {dest}. Whole run feels off now.","Three weeks on this tub and the recycler still smells like feet.","Anyone else's nav humming a B-flat, or is it just mine?","I swear this corridor's longer than it was yesterday.","Caught a meteor shower {bearing}. Free fireworks.","Tell the kids I'll be home by the next resupply. Probably.","Forty thousand klicks of nothing and a great playlist.","{cs2}, your strobes are out. Just so you know.","Logged my ten-thousandth hour today. Nobody clapped.","Coffee, course, cargo. The three Cs. In that order.","Drifting through the quiet part of the run. Love it.","Somebody's playing opera on the open channel again.","My back's been telling me to retire for six years now.","Cluster's pretty this time of cycle. Don't tell anyone I said so.","{cs2}, did you ever get that rattle in your nacelle fixed?","Hauling for {dest} again. Place never changes.","Out here long enough, you start naming the asteroids.","This far out, even the static sounds friendly.","Saw a long-hauler that must've been two klicks bow to stern.","Co-pilot bet me we'd beat schedule. Co-pilot's broke now.","Nothing on the scope but us and the dark. Suits me.","Tell {cs2} the customs line at {dest} is a nightmare today.","Eighteen hours in and the only excitement was a sneeze.","Whoever designed these seats never sat in one.","Burned past {dest} once without stopping. Best day of my career.","If the reactor hums any louder I'll have to charge it rent.","Spotted an old wreck {bearing}. Gave it a respectful nod.","Same three songs for two thousand klicks. Send help.","{cs2}, you awake over there? Your transponder's the only thing talking.","Cargo's quiet, drive's smooth, life is good. For now.","Going to miss this view when they automate us all.","Heard {dest} finally fixed their gravity ring. Believe it when I dock.","My nav computer and I are no longer on speaking terms.","Out here you learn to like your own company.","Passed a tourist liner. They waved. I waved back.","Twelve more runs and I'm buying a little ice moon somewhere quiet.","Somebody on this band's chewing way too close to their mic.","Clearest sky I've seen all cycle. Not a speck of dust.","{cs2}, race you to the marker. Loser buys at {dest}.","Reactor's purring like it actually likes me today.","Been talking to my plants again. They're better listeners than control.","Cargo bay's colder than my ex. And just as empty.","Logged a perfect burn. Nobody saw it. Story of my life.","Out past the belt the silence has a sound to it.","Tell {dest} to keep the lights on, I'm running late.","Spent the last hour watching dust glitter in the running lights.","If I had a credit for every klick, I'd still be out here.","Half the fun of this job is the half there isn't any.","{cs2}, your wake's all over my approach. Tidy up.","Recycler's making that noise again. The ominous one.","Going to name this stretch of nothing after myself.","Slow run today. I've reorganized the toolkit twice.","You can almost hear the cluster turning out here.","Picked the scenic route. Regret nothing.","Captain's asleep, so technically I'm in charge. Don't tell.","Another sunrise over {dest}. They never get old.","Twenty years out here and the dark still gets me sometimes.","Just me, the hum, and a thermos of something resembling coffee.","{cs2}, that was a clean dock. Buying you a round at {dest}.","Lost a glove to the airlock. Floating out there forever now.","If this run gets any quieter I'll start talking to the cargo.","Best part of the job? Nobody up here to tell me I'm wrong.","Worst part? Nobody up here at all, some nights.","Trimmed a full minute off my usual. Small victories.","Cluster's throwing shadows like a clock today.","Tell the relief crew the heater in bunk two is a liar.","Drive's smooth, scope's clear, and the coffee's almost warm. Perfect.","{cs2}, you ever just cut the lights and drift a while?","Heard a long-hauler sing to themselves on the dead channel. Beautiful, actually.","Six souls aboard, five asleep, one talking to strangers on the radio.","Spotted the station lights from way out. Feels like coming home.","Marking another quiet shift in the log. The good kind.","Dust on the canopy again. Out here it's basically weather.","If you're listening, {cs2}, you snore on an open channel."],P0=["Control, requesting departure clearance, lane {lane}.","Ops, requesting vector to {dest}.","Holding short of the corridor, awaiting clearance.","Requesting priority docking, running behind schedule.","{cs2}, hold your position, I've got crossing traffic.","{cs2}, you are drifting into my lane, come starboard.","Control, confirm I am cleared through corridor {corridor}.","Stacking up out here, request a hold vector.","Traffic, wide load on approach, give me room.","Requesting handoff to station approach.","{cs2}, after you on the corridor, I'll follow you in.","Control, my transponder's glitching, advise.","Lane {lane} is backed up, requesting reroute.","On final, gear warm, clamps ready.","Breaking off approach, going around.","Squawking ident, confirm you have me.","Control, requesting a slot at {dest}, ETA {min} minutes.","Request permission to cross corridor {corridor} outbound.","Ops, am I cleared to spin down in the dock perimeter?","Requesting a tug, my clamps are sluggish.","Control, traffic {bearing}, request advisory.","{cs2}, reduce your closure, you're inside my bubble.","Requesting fuel reservation at the ring, low on reserves.","Control, declaring minimum fuel, request direct routing.","Holding at the marker, request sequencing number.","Ops, my nav's reading two corridors, which is live?","Request a wider berth on approach, hauling overlength.","Control, lost the localizer, request vectors to {dest}.","{cs2}, confirm you see me, closing {bearing}.","Requesting clearance to test thrusters in the safe lane.","Ops, requesting hold until that debris {bearing} clears.","Control, request expedited departure, time-critical cargo.","Requesting handoff, leaving your airspace {bearing}.","{cs2}, slow your roll, the clamps aren't going anywhere.","Control, I'm number how-many for the dock?","Request altitude... well, you know what I mean. Going up-spin.","Ops, confirm corridor {corridor} markers are lit, I've got nothing.","Requesting clearance to jettison empty pods in the safe zone.","Control, my squawk's intermittent, paint me on radar?","Requesting straight-in approach, no time for the pattern.","{cs2}, you're cleared ahead of me, I'll hold.","Ops, request a hold, sorting a cargo shift before approach.","Control, declaring a soft alert, requesting a clear lane.","Requesting clearance to {dest}, manifest filed.","{cs2}, give way, I'm constrained by my draft on this vector.","Control, confirm the queue, I've been holding {min} minutes.","Requesting a quieter band, this one's jammed with chatter.","Ops, am I cleared to drop the grapple and take that salvage?","Control, request a flash of the approach lights, I'm half blind out here.","Requesting permission to shadow {cs2} through the corridor."],L0=["Hauling {cargo} to {dest}, ETA {min} mikes.","Outbound from {origin} with a hold full of {cargo}.","Light load this run, just {cargo} for {dest}.","Manifest says {cargo}. Smells more like {cargo2}.","Passing the outer marker, {cargo} aboard, all green.","Heavy with {cargo}, watch my wake on the corridor.","{cargo} delivery for {dest}, who is signing for it?","Running {cargo} to the deep field, back in {min}.","Cargo is shifting in the hold, slowing to secure it.","Empty run home, dropped the {cargo} at {dest}.","Carrying {cargo}, handle with care on the clamps.","Inbound, {cargo} for the refinery, ETA {min} minutes.","Picked up {cargo} from {origin}, bound for {dest}.","Overweight on {cargo} again, the yard will love that.","This {cargo} run doesn't pay enough, I'll tell you that.","Sealed manifest. Don't ask, I'm not telling.","Time-sensitive {cargo}, requesting the fast lane.","Two pallets of {cargo} short. Someone's getting a call.","{cargo} secured, all green, proceeding to {dest}.","Hot cargo, {cargo}, keep your distance on approach.","Full hold of {cargo}, riding low and slow to {dest}.","Manifest got swapped, I'm carrying {cargo}, not {cargo2}. Again.","Dropping {cargo} at {dest}, then deadheading to {dest2}.","Fragile load, {cargo}, no fast burns this trip.","{cargo} for the colony at {dest}. They've been waiting weeks.","Customs flagged my {cargo}. This is going to take a while.","Hauling {cargo} one way, {cargo2} back. Never an empty leg.","{cargo} aboard, transponder logged, clean run so far.","Diverting to {dest2}, the {cargo} buyer changed their mind.","Refrigerated load of {cargo}, can't afford a power blip.","Bulk {cargo}, low margin, high mileage. The usual.","Carrying {cargo} for {dest}. Don't love what's in the back, honestly.","Manifest reads {cargo}. Weight says otherwise. Not my problem.","Loaded {cargo} at {origin}, scales were generous. Lucky me.","Priority {cargo}, jumping the queue if they'll let me.","{cargo} run to {dest}, then I'm off rotation for a cycle.","Hold's pressurized, {cargo} stable, all readings nominal.","Picked up extra {cargo} at {origin}. Tight squeeze in the bay.","Spilled a crate of {cargo} in the hold. Cleaning that up for hours.","Live cargo this run, easy on the gees for the {cargo}.","{cargo} for {dest}, insured to the rivets. Wonder why.","Three pallets of {cargo}, one's leaking. Wonderful.","Hauling {cargo}, but the real money's the {cargo2} underneath.","Clean manifest, {cargo} to {dest}, nothing to declare.","{cargo} bound for {dest}. Slower than I'd like with this load.","Topped off with {cargo} at {origin}, hold's at capacity.","Carrying {cargo}. If it ticks, that's normal. Probably.","Diverted my {cargo} run through {dest2}, adds an hour.","Hold full of {cargo}, and the buyer's already haggling over the channel.","{cargo} delivered, signed off, deadheading home empty and happy."],D0=["Reporting a {system} fault, dropping to half burn.","{system} is acting up, nursing it to {dest}.","Reactor running hot, requesting priority docking.","Lost the {system}, switching to backups.","{system} pressure in the yellow, keeping an eye on it.","Got a flutter in the {system}, anyone heard that before?","Venting heat, give me a wide berth.","{system} recalibrating, my heading may wander, sorry.","Down a thruster, handling is sloppy, watch out.","{system} failure, soft alert, no assist needed yet.","Coolant is low, throttling back before something melts.","My {system} is held together with tape and prayers.","Patched the {system} mid-burn. Don't recommend it.","Sensor ghosting again, my scope is half junk.","Gyros tumbling, stand by while I sort this out.","Fuel tighter than I'd like, going easy on the burn.","{system} threw a fault code I've never seen. Love that.","Lost pressure in the {system}, isolating it now.","My {system}'s been groaning since {origin}. Today might be the day.","Cycling the {system}, expect my lights to flicker.","{system} overheating, popping the radiators, mind the glare.","Backup {system} engaged, primary's cooked.","Took a micrometeorite to the {system}. Could be worse.","{system}'s drawing too much power, shedding nonessentials.","Rerouting around a dead {system}, performance is going to suffer.","My {system} and my {system2} are both complaining. Great.","Hairline crack in the {system}, watching it like a hawk.","{system} keeps tripping the breakers. Third time this hour.","Drive's surging, suspect the {system}, throttling back.","{system} maintenance overdue by a thousand hours. Don't judge me.","Limping in on a bad {system}, request a gentle approach.","{system} froze up, literally, condensation got in.","Smelled something burning near the {system}. That's never good.","Lost telemetry on the {system}, flying it by feel.","{system} recalibrated, back to full performance, sorry for the chatter.","Vibration in the {system} I can feel in my teeth.","{system} alarm went off, turned out to be a loose sensor. Heart attack averted.","Manually overriding the {system}, autopilot's confused.","My {system}'s running on a part I printed myself. Wish me luck.","{system} degraded, declaring reduced maneuverability.","Reactor scram on the {system} fault, restarting now, stand clear.","{system}'s fine, it's the warning light that's broken. I think.","Bled the {system}, should ride smoother now.","Lost half my {system} output, still flyable, just slow.","{system}'s been stable for an hour. Watch me jinx it.","Coolant leak near the {system}, sealing the bulkhead.","{system} acting possessed, power-cycling the whole rack.","Replaced the {system} at {origin} and it's already whining.","Running the {system} cold to save it. Long, careful burn.","{system} back online. Crisis averted. Mostly."],I0=["All traffic, debris {bearing}, advise you divert.","Heads up, rock drift {bearing}, and it's moving.","Micrometeorite stream {bearing}, shields up.","Solar activity climbing, recommend topping your shielding.","Watch the slag cloud off the refinery, scopes don't love it.","Radiation spike {bearing}, button up your hulls.","Debris from an old wreck {bearing}, give it room.","Dust is thick {bearing}, visuals are useless out there.","Caution, tumbling container adrift {bearing}.","Gravimetric shear near the cluster, mind your trim.","Flare warning from the deep field, batten down.","Something big and unlit {bearing}, all traffic stay sharp.","Ice fragments {bearing} peppered my hull, watch yourselves.","Charged dust {bearing}, comms crackling, expect noise.","Frozen propellant cloud {bearing}, kills your sensors, route around.","Magnetic anomaly {bearing}, my compass is spinning, heads up.","Unlogged ship {bearing}, no transponder, keep your distance.","Sensor blind spot {bearing} where the dust's thickest.","Hot debris field {bearing}, still glowing, do not transit.","Slow tumbler {bearing}, looks like a shed cargo pod.","Watch for backscatter {bearing}, the cluster's lighting up the dust.","Loose mining charge adrift {bearing}. Do not, repeat, do not nudge it.","Heavy traffic stacking {bearing}, expect erratic vectors.","Wreckage spreading {bearing}, somebody lost a load.","Static storm rolling in {bearing}, comms about to get rough.","Plasma wash from a warp exit {bearing}, give it a minute to clear.","Drifting fuel bladder {bearing}, ruptured, slick on the sensors.","Caution, derelict tumbling {bearing}, no lights, no squawk.","Particle density rising {bearing}, throttle back through it.","Sharp debris {bearing}, took a scratch myself, slow down.","Solar wind gusting {bearing}, trim for it or you'll yaw.","Unsecured cargo crane swinging on a derelict {bearing}.","Cold cloud {bearing} eating my thermal sensors, fly visual.","Rock the size of a tug {bearing}, slow roll, plenty of warning.","Comms shadow {bearing} behind the big asteroid, you'll drop out.","Glittering debris {bearing}, pretty, but it'll pit your canopy.","Venting wreck {bearing}, pushing itself around unpredictably.","Dense pack of pebbles {bearing}, too small to dodge, just slow down.","Heat bloom {bearing}, possible reactor breach on a derelict, avoid.","Whole corridor's hazy {bearing}, somebody kicked up the dust."],U0=["Mayday, mayday, {system} failure, requesting immediate assist.","Pan-pan, pan-pan, lost main drive, drifting {bearing}.","Declaring an emergency, fire in the {system} bay.","Hull breach, sealing compartments, requesting rescue.","Losing life support, anyone in range, please respond.","Mayday, collision with debris, venting atmosphere.","Engines dead, drifting toward the cluster, need a tow now.","Mayday, {system} explosion, casualties aboard, need medical.","Pan-pan, reactor scrammed, on batteries, time critical.","Lost all thrust, tumbling {bearing}, can't stabilize.","Cabin pressure dropping, on suits, requesting urgent docking.","Mayday, struck an unlit object {bearing}, hull compromised.","Power's failing across the board, sending position now.","Pan-pan, {system} and {system2} both down, limited control.","Fire suppression failed, evacuating to the {system} bay.","Mayday, fuel breach, isolating, request foam on the pad.","Drifting powerless {bearing}, any vessel, please acknowledge.","Declaring emergency, navigation lost, flying blind.","Hull integrity at minimum, requesting nearest dock, any port.","Pan-pan, jammed clamps mid-undock, hanging off the ring.","Mayday, runaway burn, can't cut the {system}, clear my vector.","Coolant gone, reactor climbing, abandoning if it doesn't hold.","Lost the {system}, can't slow for approach, request a clear lane.","Crew member down, requesting a medical bay on arrival.","Mayday, micrometeorite swarm, multiple breaches, mapping damage.","Stuck in a flat spin {bearing}, RCS unresponsive, need talk-down.","Pan-pan, lost cabin heat, temperature dropping fast.","Emergency, cargo of {cargo} unstable, considering jettison.","Mayday, structural failure at the {system}, hull flexing.","Adrift and dark {bearing}, conserving power, monitoring this channel."],N0=["Anyone else getting that signal {bearing}? ...Probably nothing.","Picking up a transponder that's been dead for twenty years.","Ghost contact {bearing}, gone before I could lock it.","Old beacon out here still transmitting. Nobody knows why.","Cold spot {bearing} my sensors won't explain.","Heard a voice on the dead channel again. I keep that to myself.","Same derelict drifts past every cycle. Never the same heading twice.","Something past the deep field is answering my pings.","Got a navigation chart with a station marked that doesn't exist.","The cluster shadow moved wrong just now. Trick of the light. Has to be.","Picked up a distress call dated next week. Filed it. Said nothing.","There's a hull out here older than the colony. Nobody salvages it.","My star tracker locked onto a star that isn't on any map.","Heard the long-haulers won't transit {bearing} after dark. Now I get it.","Found a logbook floating {bearing}. Last entry's just one word, repeated.","Signal's counting down in a language the computer won't translate.","Same coordinates keep showing up in my nav cache. I never entered them.","There's a derelict that hails YOU first. Don't answer it.","Old timers call this stretch the Quiet. Now nobody's talking.","My reflection in the canopy waved a half-second late just now.","Beacon Echo's been answering pings it shouldn't be able to hear.","The dust out here remembers shapes. Saw a face in it for a second.","Caught a broadcast of my own callsign. I never sent it.","There's a wreck {bearing} with its lights still on. No power source.","Compass points to nothing in particular and holds there. Always the same nothing.","Heard singing on the carrier wave. Crew says it's interference. Crew's wrong.","An empty escape pod's been shadowing me for three runs. Door's open.","The jump gate hummed when nothing went through it.","Found a manifest for a ship that was never built. Cargo: us.","Out past the marker, the stars blink in order. Like a code. Like a count.","My grandfather flew this route. Says the Quiet's been getting closer.","Picked up a lullaby on a frequency that doesn't carry sound.","There's a station on the old charts called Home. No coordinates. Just Home.","Saw my own running lights {bearing}, ahead of me, on my exact heading.","The derelict's name plate keeps changing. Photographed it twice. Two names.","Something out here keeps the marker buoys warm. They should be ice cold.","Got a reply to a message I haven't decided to send yet.","The cluster's count of asteroids went up by one. There's no new one. I checked.","They decommissioned Beacon Echo a decade ago. It just wished me safe travels.","Every cycle, {bearing}, for one second, the radio plays the sound of a door closing."],O0=["All inbound traffic, hold for sequencing.","Docking queue is {queue} deep, expect delays.","Bay {bay} is now open for approach.","Bay {bay} closed for maintenance, reroute.","Refueling operations nominal at the ring.","Customs inspection in progress, bay {bay}.","Corridor {corridor} is now the active approach lane.","All vessels, reduce speed within the dock perimeter.","Quarantine protocol active on bay {bay}.","Tug services delayed, manual docking advised.","Cargo backlog at the yards, deliveries holding.","Approach lights lit, corridor {corridor} cleared for sequencing.","Shift rotation underway, expect brief comm gaps.","Power conservation in effect, non-essential systems offline.","Free berth open at bay {bay}, first come first served.","Outbound traffic, hold at the marker until corridor {corridor} clears.","Bay {bay} reserved for priority cargo, all others stand by.","Ring rotation adjusting, expect minor gravity fluctuations.","Fuel reserves low, rationing burns to essential traffic.","All traffic, transponders mandatory inside the perimeter.","Sequencing inbound flights, average wait {min} minutes.","Bay {bay} cleared, next in queue you are go for approach.","Maintenance crew on the hull, all docking holds at corridor {corridor}.","Customs sweep complete, normal operations resuming.","Dock master reports {queue} vessels in the pattern.","All vessels maintain station-keeping, traffic is heavy.","Lighting reduced on the upper ring, conserve and dock by instruments.","New arrivals, squawk ident and hold for a slot.","Bay {bay} flooding for pressure test, keep clear.","Corridor {corridor} markers recalibrating, fly the beacons not the chart.","Tug {cs2} dispatched to assist inbound traffic.","All clamps cycling for inspection, brief docking pause.","Cargo handlers on shift change, loading resumes shortly.","Priority lane open corridor {corridor} for medical traffic only.","Ring power on backup, expect flicker, docking unaffected.","Inbound flights, slow to perimeter speed or be held.","Bay {bay} occupant overstaying, dispatching a notice.","Approach radar degraded, pilots maintain visual separation.","All traffic, hold the chatter, emergency channel must stay clear.","Docking fees updated, see the bulletin before departure.","Sequencing reset, all inbound re-squawk for new numbers.","Bay {bay} now serving overlength vessels, others use {corridor}.","Gravity ring at reduced spin for repairs, watch your footing on arrival.","Outbound corridor {corridor} clear, departures are go.","Resupply barge docking, all traffic give the freight lane a wide margin.","Pressure doors on bay {bay} sticking, crews advised, allow extra time.","All vessels, the perimeter speed limit is enforced today, no exceptions.","Holding pattern is full, new arrivals divert and re-approach in {min}.","Night cycle lighting active, approach lights at full for your benefit.","Dock control rotating to the relief team, expect a brief handover."],F0=["Traffic advisory: debris {bearing}, divert as needed.","Solar weather advisory in effect, shields up on approach.","Beacon alignment in progress, navigation may degrade.","Unscheduled vessel logged {bearing}, monitoring.","Long-range scan complete, sector nominal.","Emergency channel test, disregard.","Gravimetric anomaly logged near the cluster, advise caution.","Lost contact with an outbound hauler {bearing}, investigating.","Radiation advisory: levels elevated {bearing}, limit exposure.","All traffic, a flare is forecast within the hour, plan accordingly.","Advisory: dust density rising {bearing}, expect reduced sensor range.","Unidentified contact {bearing}, vessels report any visual.","Navigation advisory: corridor {corridor} markers offline, fly with care.","Weather: charged particle storm {bearing}, comms may degrade.","Advisory, derelict adrift {bearing}, salvage crews notified, keep clear.","Search and rescue active {bearing}, all traffic yield to SAR vessels.","Advisory: micrometeorite activity up {bearing}, shields recommended.","Sector patrol passing through {bearing}, expect scanning sweeps.","Advisory, a vessel is declaring emergency {bearing}, clear the lanes.","Notice: jump gate cycling {bearing}, expect transient interference.","Advisory: temperature anomaly {bearing}, sensors may misread.","All traffic, comms relay {bearing} is down, expect dead zones.","Advisory: cargo spill reported {bearing}, navigate around the field.","Notice: a long-hauler reports a ghost contact {bearing}. Logged for review.","Advisory, the belt plane is congested today, transit with caution.","Weather update: solar activity easing, advisory lifted shortly.","Advisory: unregistered beacon transmitting {bearing}, do not rely on it.","All vessels, a quarantine vessel is inbound, expect a holding pattern.","Advisory: sensor mirage reported {bearing}, confirm contacts visually.","Notice: routine patrol requests all transponders remain active.","Advisory, debris reentry into the cluster {bearing}, expect bright flashes.","Long-range advisory: traffic surge expected from {dest}, plan holds.","Advisory: a tug has gone silent {bearing}, last seen towing salvage.","Notice: navigation database update available, sync before departure.","Advisory, gravitational lensing {bearing} may distort star fixes.","All traffic, an old distress beacon is looping {bearing}. Source confirmed derelict.","Advisory: thermal bloom {bearing}, possible reactor venting, stay clear.","Notice: the outer marker buoy is drifting, recalibrating its position.","Advisory, pirate activity rumored {bearing}, keep transponders honest.","Final advisory of the cycle: sector quiet, safe travels, all vessels."],B0=["Shuttle, you are coming in too fast. Reduce speed in the station zone.","Inbound shuttle, slow down. You're over the perimeter speed limit.","Ease off the throttle, shuttle, you're approaching far too quickly.","Shuttle, check your speed. This is a controlled zone, not a racetrack.","Reduce velocity immediately, you're entering the dock perimeter too hot.","Slow it down, shuttle. We'd like the station to stay in one piece.","Shuttle, your closure rate is excessive. Bleed off some speed.","Throttle back, shuttle. You're well above safe approach speed.","Control to shuttle, you are too fast for this proximity. Decelerate now.","Shuttle, kill your speed before you reach the ring. Last warning.","Cut your velocity, shuttle, you're a hazard at that pace.","Shuttle, the perimeter has a speed limit and you're shredding it. Slow down."],k0=["Shuttle, you just struck the station. What in the void are you doing?","That was a collision, shuttle. Watch where you're flying!","You hit us, shuttle. Pull back before you do more damage.","Control to shuttle, you've made contact with the structure. Knock it off.","Are you trying to dock or demolish us? Back off, shuttle.","Shuttle, that's a hull strike on the station. Get clear, now.","You scraped the ring, shuttle. There's paperwork for this, you know.","Collision alert, the shuttle made contact. Steady your approach!","Shuttle, hands off the station! Maintain your distance.","That impact is going on your record, shuttle. Fly straight.","You clipped us, shuttle. The dock crew is not amused.","Shuttle, cease ramming the station. This is not a drill."];function z0(){return Xe(B0)}function H0(){return Xe(k0)}const G0=[{hud:"WARP INHIBITED — OBSTACLE AHEAD",voice:"Warp inhibited. Obstacle ahead."},{hud:"WARP LOCKED — OBSTACLE IN PATH",voice:"Cannot engage warp. Object in our path."},{hud:"WARP BLOCKED — CLEAR THE HEADING",voice:"Warp blocked. Clear the heading first."}],V0=[{hud:"DROPPING OUT OF WARP — PROXIMITY",voice:"Proximity alert. Dropping out of warp."},{hud:"WARP ABORTED — OBSTACLE NEAR",voice:"Obstacle nearby. Aborting warp."},{hud:"WARP DISENGAGED — OBJECT CLOSE",voice:"Disengaging warp. Object too close."}];function W0(){return Xe(G0)}function X0(){return Xe(V0)}const q0=[{w:30,t:C0},{w:16,t:P0},{w:18,t:L0},{w:12,t:D0},{w:10,t:I0},{w:3,t:U0},{w:4,t:N0}],Y0=[{w:60,t:O0},{w:40,t:F0}];function K0(i){let t=0;for(const n of i)t+=n.w;let e=Math.random()*t;for(const n of i)if((e-=n.w)<=0)return n;return i[i.length-1]}function j0(i){const t=i.station?Y0:q0,e=Xe(K0(t).t);return`${i.callsign}: ${R0(e,i.callsign)}`}const wl={type:"change"},tc={type:"start"},Th={type:"end"},cs=new Cr,Tl=new On,Z0=Math.cos(70*re.DEG2RAD),ye=new A,Be=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class Ah extends H_{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new ke,this._lastTargetPosition=new A,this._quat=new ke().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new A,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new A,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J0.bind(this),this._onPointerDown=$0.bind(this),this._onPointerUp=Q0.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=nv.bind(this),this._onKeyDown=iv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=sv.bind(this),this._onMouseDown=tv.bind(this),this._onMouseMove=ev.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=cv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),r<-Math.PI?r+=Be:r>Math.PI&&(r-=Be),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cs.origin.copy(this.object.position),cs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cs.direction))<Z0?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),cs.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ye.copy(r).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function J0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Q0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Th),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(tc)}function ev(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nv(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(tc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Th))}function iv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(tc)}function sv(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function ov(i){this.enabled!==!1&&i.preventDefault()}function av(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lv=8191130,hv=10479871,Al=3108420,Rl=16757322,uv=16739029,ls=188,ei=1e7;function dv(i,t,e,n,r=()=>!1,s=()=>{}){const o=document.getElementById("hud"),a=Math.min(window.devicePixelRatio||1,2),c=i.cluster,l=i.asteroids,h=document.createElement("div");h.id="minimap";const u=document.createElement("div");u.className="mini-label",u.textContent="NAV";const d=document.createElement("div");d.id="mini-close",d.textContent="×",h.append(u,d),o.append(h);const p=new Wa({antialias:!0,alpha:!0});p.setPixelRatio(a);const g=p.domElement;h.appendChild(g);const x=new qa,f=new Oe(45,1,1,2e5),m=re.degToRad(f.fov),E=c.radius*80,v=80,S=E/2,N=new De;function C(V,et){const ft=new z_(E,v,Al,Al);ft.material.transparent=!0,ft.material.opacity=.05,V==="x"?(ft.rotation.z=Math.PI/2,ft.position.x=et*S):V==="z"?(ft.rotation.x=Math.PI/2,ft.position.z=et*S):ft.position.y=et*S,N.add(ft)}for(const V of["x","y","z"])C(V,-1),C(V,1);x.add(N);const R=new Float32Array(l.length*3),D=new ve;D.setAttribute("position",new Fe(R,3));const J=new Mr({color:lv,size:Math.max(8,c.radius*.06),sizeAttenuation:!0,transparent:!0,opacity:.95}),_=new Rs(D,J);_.frustumCulled=!1,x.add(_);const y=new De,I=Math.max(16,c.radius*.09),F=new Le(new pn(I*.42,I,12),new ai({color:hv}));F.rotation.x=-Math.PI/2,y.add(F),x.add(y);let L=null;if(e){L=new De;const V=e.radius*.55,et=new Le(new cn(V,V*.1,8,24),new ai({color:Rl})),ft=new Le(new qe(V*.28,12,12),new ai({color:Rl}));L.add(et,ft),L.position.copy(e.center),L.frustumCulled=!1,x.add(L)}let O=null,P=null;if(n&&n.ships.length){P=new Float32Array(n.ships.length*3).fill(ei);const V=new ve;V.setAttribute("position",new Fe(P,3));const et=new Mr({color:uv,size:Math.max(10,c.radius*.07),sizeAttenuation:!0,transparent:!0,opacity:.95});O=new Rs(V,et),O.frustumCulled=!1,x.add(O)}const q=new Ah(f,g);q.enableDamping=!0,q.dampingFactor=.08,q.enablePan=!1,q.rotateSpeed=.9,q.zoomSpeed=.9,q.enabled=!1;const W=new A(0,1,0);function _t(V){f.up.copy(V),q._quat.setFromUnitVectors(V,W),q._quatInverse.copy(q._quat).invert()}let vt=!1,tt=ls,dt=ls;const pt=new A,U=new A,X=new A,nt=new ke,Y=new A;function lt(V){return Y.copy(V).sub(t.position).applyQuaternion(nt),Math.abs(Y.x)<=S&&Math.abs(Y.y)<=S&&Math.abs(Y.z)<=S}function ht(){vt?(tt=window.innerWidth,dt=window.innerHeight):(tt=ls,dt=ls),p.setSize(tt,dt,!1),g.style.width=tt+"px",g.style.height=dt+"px",f.aspect=tt/dt,f.updateProjectionMatrix(),p.setClearColor(132620,vt?1:.5)}ht();function mt(){let V=t.position.distanceTo(c.center)*.6+c.radius;return e&&(V=Math.max(V,t.position.distanceTo(e.center)*.6+e.radius)),V/Math.sin(m*.5)}function St(){const V=f.position.distanceTo(t.position);y.scale.setScalar(re.clamp(V*.003,.5,5))}function Z(){pt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),U.set(0,1,0).applyQuaternion(t.quaternion),f.up.copy(U),f.position.copy(t.position).addScaledVector(pt,mt()),f.lookAt(t.position)}function T(V){vt=V,h.classList.toggle("expanded",V),s(V),ht(),V?(q.target.copy(t.position),pt.set(0,.5,1).normalize().applyQuaternion(t.quaternion),X.set(0,1,0).applyQuaternion(t.quaternion),_t(X),f.position.copy(t.position).addScaledVector(pt,mt()),q.enabled=!0,q.update()):q.enabled=!1}h.addEventListener("pointerdown",V=>{V.stopPropagation(),!r()&&(vt||T(!0))}),d.addEventListener("pointerdown",V=>{V.stopPropagation(),!r()&&T(!1)}),window.addEventListener("keydown",V=>{if(V.code==="Escape"&&vt){T(!1);return}if(V.key&&V.key.toLowerCase()==="m"){if(r())return;T(!vt)}});function at(){nt.copy(t.quaternion).invert();for(let V=0;V<l.length;V++){const et=l[V].position;lt(et)?(R[V*3]=et.x,R[V*3+1]=et.y,R[V*3+2]=et.z):(R[V*3]=ei,R[V*3+1]=ei,R[V*3+2]=ei)}if(D.attributes.position.needsUpdate=!0,O){const V=n.ships;for(let et=0;et<V.length;et++)if(V[et].active&&lt(V[et].group.position)){const ft=V[et].group.position;P[et*3]=ft.x,P[et*3+1]=ft.y,P[et*3+2]=ft.z}else P[et*3]=ei,P[et*3+1]=ei,P[et*3+2]=ei;O.geometry.attributes.position.needsUpdate=!0}L&&(L.visible=lt(e.center)),y.position.copy(t.position),y.quaternion.copy(t.quaternion),N.position.copy(t.position),N.quaternion.copy(t.quaternion),vt?(u.textContent="NAVIGATION — DRAG rotate · WHEEL zoom",f.up.copy(X),q.target.copy(t.position),q.update()):(u.textContent="NAV",Z()),St(),p.render(x,f)}function st(){ht()}return{update:at,resize:st}}function fv(){const i=document.createElement("div");i.id="cursor",i.innerHTML='<svg width="27" height="27" viewBox="0 0 30 30" aria-hidden="true"><path d="M2 2 L3 25 Q 8 18 19 18 Z" fill="rgba(124,252,154,0.22)" stroke="#7cfc9a" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',document.body.appendChild(i);function t(n){i.style.transform=`translate(${n.clientX-1.8}px, ${n.clientY-1.8}px)`,i.style.opacity="1"}window.addEventListener("pointermove",t,{passive:!0,capture:!0});function e(){i.style.opacity="0"}return document.addEventListener("mouseleave",e),window.addEventListener("blur",e),{}}function pv(){const i=document.createElement("div");return i.id="crt",i.setAttribute("aria-hidden","true"),document.body.appendChild(i),document.body.classList.add("crt"),{}}function mv({onOpen:i,onClose:t}={}){const e=document.body,n=document.createElement("div");n.id="shipdbg",n.innerHTML=`
    <div class="dbg-topbar">
      <div class="dbg-tabs"><div class="dbg-tab active" data-tab="ships">SHIPS</div></div>
      <div class="dbg-close" title="close"></div>
    </div>
    <div class="dbg-main">
      <div class="dbg-list"></div>
      <div class="dbg-view"><div class="dbg-vlabel"></div></div>
    </div>`,e.appendChild(n);const r=n.querySelector(".dbg-list"),s=n.querySelector(".dbg-view"),o=n.querySelector(".dbg-vlabel"),a=n.querySelector(".dbg-close"),c=xs.map((L,O)=>{const P=document.createElement("div");return P.className="dbg-item",P.textContent=L.name,P.addEventListener("click",()=>R(O)),r.appendChild(P),P}),l=new Wa({antialias:!0}),h=bh(l,{charset:" .:-=+*#%@",fontSize:11,color:"#7cfc9a"});s.appendChild(h.domElement);const u=new qa;u.background=new Xt(0),u.add(new Eh(16777215,.5)),u.add(new Mh(11191551,2107440,.5));const d=new Cs(16777215,1.1);d.position.set(1,1.2,1.4),u.add(d);const p=new Cs(8956671,.4);p.position.set(-1,-.4,-.8),u.add(p);const g=new Oe(45,1,.1,5e3);g.position.set(60,35,90);const x=new Ah(g,h.domElement);x.enableDamping=!0,x.dampingFactor=.08,x.enablePan=!1,x.autoRotate=!0,x.autoRotateSpeed=1.1,x.addEventListener("start",()=>{x.autoRotate=!1}),x.addEventListener("end",()=>{x.autoRotate=!0});const f=new A(.7,.45,1).normalize();let m=null,E=!1,v=0;function S(L){L.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&(Array.isArray(O.material)?O.material:[O.material]).forEach(P=>P.dispose())})}function N(L){const P=new Wn().setFromObject(L).getBoundingSphere(new pi),q=Math.max(1,P.radius);x.target.copy(P.center);const W=q/Math.sin(re.degToRad(g.fov*.5))*1.35;g.position.copy(P.center).addScaledVector(f,W),g.near=Math.max(.05,q*.02),g.far=q*60,g.updateProjectionMatrix(),x.minDistance=q*.5,x.maxDistance=q*14,x.update()}let C=-1;function R(L){m&&(u.remove(m),S(m),m=null),C=L,m=xs[L].build(wh()),u.add(m),N(m),c.forEach((O,P)=>O.classList.toggle("active",P===L)),o.textContent=`${xs[L].name}  —  DRAG rotate · WHEEL zoom`}function D(){const L=s.getBoundingClientRect(),O=Math.max(1,Math.floor(L.width)),P=Math.max(1,Math.floor(L.height));h.setSize(O,P),g.aspect=O/P,g.updateProjectionMatrix()}function J(){E&&(v=requestAnimationFrame(J),x.update(),h.render(u,g))}function _(){E||(E=!0,i==null||i(),n.classList.add("open"),D(),C<0&&R(0),cancelAnimationFrame(v),v=requestAnimationFrame(J))}function y(){E&&(E=!1,n.classList.remove("open"),cancelAnimationFrame(v),t==null||t())}function I(){E?y():_()}const F=L=>L.stopPropagation();for(const L of["pointerdown","pointermove","pointerup","wheel"])n.addEventListener(L,F);return n.addEventListener("contextmenu",L=>{L.preventDefault(),L.stopPropagation()}),a.addEventListener("click",y),window.addEventListener("keydown",L=>{if(L.key===","||L.code==="Comma"){L.preventDefault(),L.stopPropagation(),I();return}if(E){if(L.code==="Escape"){L.preventDefault(),L.stopPropagation(),y();return}L.stopPropagation()}},!0),window.addEventListener("resize",()=>{E&&D()}),{open:_,close:y,toggle:I,get isOpen(){return E}}}const Io=80,gv=800,Cl=.6;function _v(i={}){const t=i.engineUrl??null,e=i.warpUrl??null,n=i.miningUrl??null,r=i.impactUrl??null,s=window.AudioContext||window.webkitAudioContext;let o=null,a=null,c=0,l=null,h=1,u=!1,d=null,p=0,g=0;function x(){const tt=o.createBuffer(1,o.sampleRate*2,o.sampleRate),dt=tt.getChannelData(0);for(let pt=0;pt<dt.length;pt++)dt[pt]=Math.random()*2-1;return tt}function f(tt){return new Promise((dt,pt)=>{const U=o.decodeAudioData(tt,dt,pt);U&&typeof U.then=="function"&&U.then(dt,pt)})}function m(tt){const dt=tt.length,pt=[];for(let lt=0;lt<tt.numberOfChannels;lt++)pt.push(tt.getChannelData(lt));const U=.004,X=lt=>{let ht=0;for(const mt of pt){const St=Math.abs(mt[lt]);St>ht&&(ht=St)}return ht};let nt=0;for(;nt<dt&&X(nt)<U;)nt++;let Y=dt-1;for(;Y>nt&&X(Y)<U;)Y--;return Y<=nt?{start:0,end:tt.duration}:{start:nt/tt.sampleRate,end:(Y+1)/tt.sampleRate}}function E(tt,dt,pt){const U=o.createGain();U.gain.value=dt,U.connect(pt);const X={gain:U,src:null,rate:1};return fetch(tt).then(nt=>nt.arrayBuffer()).then(f).then(nt=>{const Y=o.createBufferSource();Y.buffer=nt,Y.loop=!0;const lt=m(nt);Y.loopStart=lt.start,Y.loopEnd=lt.end,Y.playbackRate.value=X.rate,Y.connect(U),Y.start(0,lt.start),X.src=Y}).catch(()=>{}),X}function v(){o=new s;const tt=x(),dt=o.createGain();dt.gain.value=u?0:Cl;const pt=o.createDynamicsCompressor();pt.threshold.value=-18,pt.knee.value=24,pt.ratio.value=3,pt.attack.value=.01,pt.release.value=.25,dt.connect(pt).connect(o.destination);const U=t?E(t,0,dt):null,X=e?E(e,0,dt):null,nt=n?E(n,0,dt):null;r&&fetch(r).then(St=>St.arrayBuffer()).then(f).then(St=>{const Z=m(St);d=St,p=Z.start,g=Math.max(0,Z.end-Z.start)}).catch(()=>{});const Y=o.createBufferSource();Y.buffer=tt,Y.loop=!0;const lt=o.createBiquadFilter();lt.type="bandpass",lt.frequency.value=1600,lt.Q.value=.9;const ht=o.createGain();ht.gain.value=0;const mt=o.createStereoPanner();mt.pan.value=0,Y.connect(lt).connect(ht).connect(mt).connect(dt),Y.start(),a={master:dt,engine:U,warp:X,mining:nt,rcsGain:ht,rcsBP:lt,rcsPan:mt}}function S(){o||v(),o.state==="suspended"&&o.resume()}window.addEventListener("pointerdown",S),window.addEventListener("keydown",S);const N=.1,C=.04,R=.07,D=.025,J=.6,_=.06,y=.55;function I(tt,dt,pt){if(!a)return;const U=o.currentTime,X=tt.active?1:0,nt=pt||.016,Y=Math.abs(tt.speed),lt=Math.min(Y/Io,1),ht=re.clamp((Y-Io)/(gv-Io),0,1);if(a.engine){a.engine.gain.gain.setTargetAtTime(X*.67*lt*h,U,N);const st=.95+.1*lt+.1*ht;a.engine.rate=st,a.engine.src&&a.engine.src.playbackRate.setTargetAtTime(st,U,N)}if(a.warp){a.warp.gain.gain.setTargetAtTime(X*.9*ht*h,U,N);const st=1+.15*ht;a.warp.rate=st,a.warp.src&&a.warp.src.playbackRate.setTargetAtTime(st,U,N)}if(a.mining){const st=X&&dt&&dt.firing?1:0;a.mining.gain.gain.setTargetAtTime(st*.8*h,U,.04)}const mt=tt.turn.yaw,St=tt.turn.pitch,Z=tt.turn.roll,T=Math.hypot(mt,St,Z);if(!tt.active)c=0,l=null;else{if(T<_)l=null;else{const st=mt/T,V=St/T,et=Z/T;l&&st*l.y+V*l.p+et*l.r>=y||(c=1,l={y:st,p:V,r:et})}c*=Math.exp(-nt/J)}a.rcsGain.gain.setTargetAtTime(X*D*c,U,R);const at=re.clamp(mt-.6*Z,-1,1);a.rcsPan.pan.setTargetAtTime(at,U,C)}function F(){return o}function L(){return a?a.master:null}function O(tt=.3){h=re.clamp(tt,0,1)}function P(){h=1}function q(tt){u=!!tt,o&&a&&a.master&&a.master.gain.setTargetAtTime(u?0:Cl,o.currentTime,.02)}function W(){return q(!u),u}function _t(){return u}function vt(tt=1){if(!o||!a||!d)return;const dt=re.clamp(tt,0,1.3),pt=o.createGain();pt.gain.value=dt;const U=o.createBufferSource();U.buffer=d,U.playbackRate.value=1.08-.18*Math.min(dt,1),U.connect(pt).connect(a.master),U.start(0,p,g||void 0),U.onended=()=>{try{U.disconnect(),pt.disconnect()}catch{}}}return{update:I,resume:S,getContext:F,getMaster:L,duck:O,unduck:P,playImpact:vt,toggleMute:W,isMuted:_t}}const Uo="/",vv=24e3,xv={configUrl:`${Uo}tts/config.json`,modelUrl:`${Uo}tts/kitten_tts_nano_v0_8.onnx`,voicesUrl:`${Uo}tts/nano_voices.npz`},yv="Bruno",Mv="Jasper",Sv="en-us",Ev=1,bv=1,wv=1.6,Pl=.3,Ll=220,Tv=300,Av=3200,hs=i=>new Promise(t=>setTimeout(t,i));function Rv(i){const e=new Float32Array(256);for(let n=0;n<256;n++){const r=n/255*2-1;e[n]=Math.tanh(r*i)}return e}function Cv(i){let t=null,e=1;const n=new Map;function r(){t||(t=new Worker(new URL("/assets/tts.worker-CulL91bv.js",import.meta.url),{type:"module"}),t.onmessage=_=>{const y=_.data,I=n.get(y.id);I&&(n.delete(y.id),y.type==="error"?I.reject(new Error(y.error)):I.resolve(y))},t.onerror=_=>{console.warn("[radio] erreur du worker TTS :",_.message||_);for(const y of n.values())y.reject(new Error("worker TTS en erreur"));n.clear()})}function s(_,y){r();const I=e++;return new Promise((F,L)=>{n.set(I,{resolve:F,reject:L}),t.postMessage({type:_,id:I,urls:xv,...y})})}let o=null,a=null,c=null,l=!1,h=null,u=!1,d=Promise.resolve();function p(){return o||(o=s("load",{}).catch(_=>{throw o=null,console.warn("[radio] echec du chargement du modele TTS :",_),_})),o}function g(){if(l)return!0;i.resume();const _=i.getContext(),y=i.getMaster();if(!_||!y)return!1;a=_;const I=_.createBiquadFilter();I.type="highpass",I.frequency.value=Tv,I.Q.value=.7;const F=_.createBiquadFilter();F.type="lowpass",F.frequency.value=Av,F.Q.value=.7;const L=_.createWaveShaper();L.curve=Rv(2.2),L.oversample="2x";const O=_.createGain();return O.gain.value=wv,c=_.createGain(),c.gain.value=1,c.connect(I),I.connect(F),F.connect(L),L.connect(O),O.connect(y),l=!0,!0}function x(){if(u)return!0;i.resume();const _=i.getContext(),y=i.getMaster();if(!_||!y)return!1;a=_,h=_.createGain(),h.gain.value=1;const I=_.createBiquadFilter();I.type="highpass",I.frequency.value=180,I.Q.value=.7;const F=_.createBiquadFilter();F.type="lowpass",F.frequency.value=5200,F.Q.value=.7;const L=_.createGain();return L.gain.value=bv,h.connect(I),I.connect(F),F.connect(L),L.connect(y),u=!0,!0}function f(_){for(let y=0;y<2;y++){const I=a.createOscillator();I.type="square",I.frequency.value=y?990:740;const F=a.createGain(),L=_+y*.13;F.gain.setValueAtTime(0,L),F.gain.linearRampToValueAtTime(.13,L+.01),F.gain.setValueAtTime(.13,L+.08),F.gain.linearRampToValueAtTime(0,L+.1),I.connect(F).connect(h),I.start(L),I.stop(L+.12)}}function m(_,y,I){const F=Math.floor(a.sampleRate*y),L=a.createBuffer(1,F,a.sampleRate),O=L.getChannelData(0);for(let W=0;W<F;W++)O[W]=Math.random()*2-1;const P=a.createBufferSource();P.buffer=L;const q=a.createGain();q.gain.setValueAtTime(0,_),q.gain.linearRampToValueAtTime(I,_+.008),q.gain.linearRampToValueAtTime(0,_+y),P.connect(q).connect(c),P.start(_),P.stop(_+y+.02)}function E(_,y,I,F){const L=a.createOscillator();L.type="sine",L.frequency.value=y;const O=a.createGain();O.gain.setValueAtTime(0,_),O.gain.linearRampToValueAtTime(F,_+.012),O.gain.setValueAtTime(F,_+I-.02),O.gain.linearRampToValueAtTime(0,_+I),L.connect(O).connect(c),L.start(_),L.stop(_+I+.02)}function v(_,y=yv){return s("synth",{text:_,opts:{voice:y,speed:Ev,language:Sv}}).then(I=>I.audio).catch(I=>(console.warn("[radio] echec de synthese pour :",_,I),null))}function S(_,y=c){return!_||!_.length||!a||!y?Promise.resolve():new Promise(I=>{const F=a.createBuffer(1,_.length,vv);F.getChannelData(0).set(_);const L=a.createBufferSource();L.buffer=F,L.connect(y),L.onended=()=>{L.disconnect(),I()},L.start()})}async function N(_,y={}){if(!_.length||!g())return;i.duck(Pl),m(a.currentTime,.09,.1);let I=Promise.resolve();for(let F=0;F<_.length;F++){const L=await v(_[F]),O=F===0;I=I.then(async()=>{if(await hs(O?130:Ll),O&&y.onPlay)try{y.onPlay()}catch{}await S(L)})}await I,E(a.currentTime+.05,1200,.09,.12),await hs(220),i.unduck()}async function C(_,y={}){if(!_.length||!x())return;i.duck(Pl),f(a.currentTime+.02);let I=Promise.resolve();for(let F=0;F<_.length;F++){const L=await v(_[F],Mv),O=F===0;I=I.then(async()=>{if(await hs(O?320:Ll),O&&y.onPlay)try{y.onPlay()}catch{}await S(L,h)})}await I,await hs(150),i.unduck()}function R(_,y={}){const I=(_||[]).filter(Boolean),F=d.then(()=>p()).then(()=>N(I,y)).catch(L=>{console.warn("[radio] message ignore :",L)});return d=F.catch(()=>{}),F}function D(_,y){return R([_],y)}function J(_,y={}){const I=d.then(()=>p()).then(()=>C([_],y)).catch(F=>{console.warn("[radio] message systeme ignore :",F)});return d=I.catch(()=>{}),I}return{preload:p,speak:D,speakSequence:R,speakSystem:J}}const Pv=[["L-CLICK + MOVE","steer"],["W / S","thrust (0-200%)"],["A / D","roll"],["X","cut engines"],["R-CLICK / SPACE","mine"],["E","dock / undock"],["M","nav map"],["J","ship log"]];function Lv(i,{onPlay:t,onToggleMute:e,isMuted:n}={}){const r=x=>{const f=document.createElement("button");return f.className="menu-btn",f.type="button",f.textContent=x,f};i.innerHTML="";const s=document.createElement("div");s.className="menu-panel";const o=document.createElement("h1");o.className="menu-title",o.textContent="Spascii";const a=document.createElement("div");a.className="menu-nav";const c=r("Play"),l=r("Commands"),h=r(n&&n()?"Unmute":"Mute");a.append(c,l,h);const u=document.createElement("div");u.className="menu-nav",u.hidden=!0;const d=r("< Back");u.append(d);const p=document.createElement("div");p.className="menu-commands";for(const[x,f]of Pv){const m=document.createElement("div");m.className="menu-cmd-row";const E=document.createElement("span");E.className="menu-cmd-key",E.textContent=x;const v=document.createElement("span");v.className="menu-cmd-desc",v.textContent=f,m.append(E,v),p.append(m)}u.append(p),s.append(o,a,u),i.append(s);const g=x=>{a.hidden=x,u.hidden=!x};c.addEventListener("click",()=>{t==null||t()}),l.addEventListener("click",()=>g(!0)),d.addEventListener("click",()=>g(!1)),h.addEventListener("click",()=>{const x=e?e():!1;h.textContent=x?"Unmute":"Mute",h.classList.toggle("active",x)})}const Rh=document.getElementById("app"),Ch=document.getElementById("menu"),Ae={clearance:"Station control to shuttle. You are cleared for docking, approach corridor three.",autopilot:"Autopilot engaged. Hands off the controls.",docked:"Docking complete. You are secured to the station. Welcome aboard.",undock:"Undocking sequence in progress.",resume:"You have control. Safe flight, shuttle."},Je=new qa;Je.background=new Xt(0);Je.fog=new Xa(0,7e-4);const wn=new Oe(72,window.innerWidth/window.innerHeight,.1,6e3),An=new De;An.add(wn);Je.add(An);Je.add(new Eh(16777215,.32));Je.add(new Mh(11191551,2766144,.6));const Ph=new Cs(16777215,1.2);Ph.position.set(1,.75,.5);Je.add(Ph);const Lh=new Cs(8956671,.3);Lh.position.set(-.6,-.3,-.8);Je.add(Lh);const Dv=new Wa({antialias:!0}),Wi=bh(Dv,{charset:" .:-=+*#%@",fontSize:12,color:"#7cfc9a"});Wi.setSize(window.innerWidth,window.innerHeight);Rh.appendChild(Wi.domElement);const $i=K_(Je),Re=Z_(Je),Pr=y0(Je,Re,$i),Tr={mapExpanded:!1,debugOpen:!1},Iv=()=>Tr.mapExpanded||Tr.debugOpen,ui=T0(),Uv={[Ae.clearance]:"CLEARED TO DOCK · CORRIDOR 3",[Ae.autopilot]:"AUTOPILOT ENGAGED",[Ae.docked]:"DOCKING COMPLETE",[Ae.undock]:"UNDOCK SEQUENCE",[Ae.resume]:"MANUAL CONTROL RESTORED"},Ui=i=>ui.log({short:Uv[i]||i,text:i,kind:"radio"}),Ar=_v({engineUrl:"/engine-loop.mp3",warpUrl:"/warp-loop.mp3",miningUrl:"/mining-loop.mp3",impactUrl:"/impact.mp3"}),Bn=Cv(Ar);Bn.preload();let ki=0;function Nv(i){return re.clamp(i/500,0,.5)}function Ov(i){return re.clamp(i/90,.35,1.6)}const je=V_(An,Rh,Ch,$i,Re,Pr,{onImpact:i=>{Ar.playImpact(Nv(i)),ki=Math.max(ki,Ov(i))},onWarpInhibit:()=>Dl(W0()),onWarpExit:()=>Dl(X0()),onDockStart:()=>{Bn.speakSequence([Ae.clearance,Ae.autopilot]),Ui(Ae.clearance),Ui(Ae.autopilot)},onDocked:()=>{Bn.speak(Ae.docked),Ui(Ae.docked)},onUndockStart:()=>{Bn.speakSequence([Ae.undock,Ae.autopilot]),Ui(Ae.undock),Ui(Ae.autopilot)},onUndocked:()=>{Bn.speak(Ae.resume),Ui(Ae.resume)},isUiOpen:Iv});Lv(Ch,{onPlay:()=>je.activate(),onToggleMute:()=>Ar.toggleMute(),isMuted:()=>Ar.isMuted()});const ur=E0(Je,wn,$i),Dh=b0(),Ih=dv($i,An,Re,Pr,()=>!je.state.active,i=>{Tr.mapExpanded=i});fv();mv({onOpen:()=>{Tr.debugOpen=!0,je.deactivate()},onClose:()=>{Tr.debugOpen=!1}});pv();const Uh=700;function Fv(){for(const i of Pr.ships){if(!i.active){i._inZone=!1;continue}const t=An.position.distanceTo(i.group.position)<=Uh;t&&!i._inZone&&ui.log({short:`${i.callsign} ENTERING SECTOR`,kind:"info"}),i._inZone=t}}const Ls=15,Nh=30,Bv=Uh,kv=(Re==null?void 0:Re.radius)+900;let No=Ls+Math.random()*(Nh-Ls);function zv(i){if(No-=i,No>0)return;No=Ls+Math.random()*(Nh-Ls);const t=[];for(const n of Pr.ships)n.active&&An.position.distanceTo(n.group.position)<=Bv&&t.push({callsign:n.callsign,station:!1});if(Re&&An.position.distanceTo(Re.center)<=kv&&t.push({callsign:"CONTROL",station:!0}),!t.length)return;const e=t[Math.floor(Math.random()*t.length)];ui.log({short:j0(e),kind:"chatter"})}const Hv=(Re==null?void 0:Re.radius)+220,Gv=45;let Oo=!1;function Vv(){if(!Re||Oo)return;const i=je.state;if(i.docking||i.undocking||i.docked||!(An.position.distanceTo(Re.center)<=Hv)||Math.abs(i.speed)<=Gv||ui.hasRecent("slow-down",50))return;Oo=!0;const e=z0();Bn.speak(e,{onPlay:()=>ui.log({short:"REDUCE SPEED — TOO FAST",text:e,kind:"radio",code:"slow-down"})}).finally(()=>{Oo=!1})}const Wv=4,Xv=8;let Fo=!1,Bo=!1,us=0;function qv(i){if(!Re||!Re.colliders)return;us>0&&(us-=i);const t=je.state;if(t.docking||t.undocking||t.docked){Fo=!1;return}let e=!1;for(const n of Re.colliders)if(An.position.distanceTo(n.center)<=n.radius+Wv){e=!0;break}if(e&&!Fo&&!Bo&&us<=0){Bo=!0;const n=H0();Bn.speak(n,{onPlay:()=>ui.log({short:"STATION COLLISION",text:n,kind:"radio",code:"collision"})}).finally(()=>{Bo=!1,us=Xv})}Fo=e}const Yv=30;let Ds=0;function Dl(i){Dh.systemMessage(i.hud),!(Ds>0)&&(Ds=Yv,Bn.speakSystem(i.voice))}const Il=.8,Kv=.25;let Ul=0;function jv(i,t){Ul+=t;const e=Ul;let n=0,r=0,s=0,o=0,a=0;const c=re.clamp((i-Il)/(1-Il),0,1);if(c>0){const l=Math.pow(c,1.6);s+=(Math.sin(e*84.3)*.6+Math.sin(e*137)*.4)*.018*l,n+=(Math.sin(e*96.7)*.6+Math.sin(e*151)*.4)*.011*l,r+=(Math.sin(e*73.1)*.6+Math.sin(e*121)*.4)*.011*l,o+=(Math.random()-.5)*.05*l,a+=(Math.random()-.5)*.05*l}if(ki>.001){const l=ki;s+=(Math.sin(e*120)*.5+(Math.random()-.5))*.12*l,n+=(Math.sin(e*97)*.5+(Math.random()-.5))*.1*l,r+=(Math.sin(e*138)*.5+(Math.random()-.5))*.1*l,o+=(Math.random()-.5)*1.4*l,a+=(Math.random()-.5)*1.4*l,ki*=Math.exp(-t/Kv)}else ki=0;wn.rotation.set(n,r,s),wn.position.set(o,a,0)}const Zv=new B_;function Oh(){requestAnimationFrame(Oh);const i=Math.min(Zv.getDelta(),.05);je.state.active?(je.update(i),$i.update(i),Re.update(i),Pr.update(i),Fv(),zv(i),Vv(),qv(i),Ds>0&&(Ds-=i),ur.update(je.state.mining,i)):ur.reset(),jv(je.state.warp,i),ui.update(i),Dh.update(je.state,ur.state),Ih.update(i),Ar.update(je.state,ur.state,i),Wi.render(Je,wn),Wi.drawStars($i.stars,wn,je.state.warp,i),Wi.drawMining(ur.state,wn,i)}Oh();window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;wn.aspect=i/t,wn.updateProjectionMatrix(),Wi.setSize(i,t),Ih.resize()});
