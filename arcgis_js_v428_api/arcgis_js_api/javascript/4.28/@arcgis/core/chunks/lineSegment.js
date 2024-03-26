/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{O as r,s as n}from"./vector.js";import{c as o,b as i,i as e,q as c,d as s,a,n as u}from"./vec3.js";import{a as g,c as f}from"./vec3f64.js";function v(t){return t?{origin:g(t.origin),vector:g(t.vector)}:{origin:f(),vector:f()}}function p(t,r=v()){return b(t.origin,t.vector,r)}function b(t,r,n=v()){return o(n.origin,t),o(n.vector,r),n}function h(t,r,n=v()){return o(n.origin,t),i(n.vector,r,t),n}function m(r,o){const s=i(n.get(),o,r.origin),a=e(r.vector,s),u=e(r.vector,r.vector),g=t(a/u,0,1),f=i(n.get(),c(n.get(),r.vector,g),s);return e(f,f)}function M(t,r,n){return A(t,r,0,1,n)}function d(t,r,n){return s(n,t.origin,c(n,t.vector,r))}function A(r,o,a,g,f){const{vector:v,origin:p}=r,b=i(n.get(),o,p),h=e(v,b)/u(v);return c(f,v,t(h,a,g)),s(f,f,r.origin)}function B(t,r){if(l(t,function(t,r){const n=w.get();return n.origin=t,n.vector=r,n}(r.origin,r.direction),!1,q)){const{tA:r,pB:o,distance2:i}=q;if(r>=0&&r<=1)return i;if(r<0)return a(t.origin,o);if(r>1)return a(s(n.get(),t.origin,t.vector),o)}return null}function j(t,r,n){return!!l(t,r,!0,q)&&(o(n,q.pA),!0)}function l(r,o,i,e){const c=1e-6,u=r.origin,g=s(n.get(),u,r.vector),f=o.origin,v=s(n.get(),f,o.vector),p=n.get(),b=n.get();if(p[0]=u[0]-f[0],p[1]=u[1]-f[1],p[2]=u[2]-f[2],b[0]=v[0]-f[0],b[1]=v[1]-f[1],b[2]=v[2]-f[2],Math.abs(b[0])<c&&Math.abs(b[1])<c&&Math.abs(b[2])<c)return!1;const h=n.get();if(h[0]=g[0]-u[0],h[1]=g[1]-u[1],h[2]=g[2]-u[2],Math.abs(h[0])<c&&Math.abs(h[1])<c&&Math.abs(h[2])<c)return!1;const m=p[0]*b[0]+p[1]*b[1]+p[2]*b[2],M=b[0]*h[0]+b[1]*h[1]+b[2]*h[2],d=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],A=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],B=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*A-M*M;if(Math.abs(B)<c)return!1;let j=(m*M-d*A)/B,l=(m+M*j)/A;i&&(j=t(j,0,1),l=t(l,0,1));const q=n.get(),w=n.get();return q[0]=u[0]+j*h[0],q[1]=u[1]+j*h[1],q[2]=u[2]+j*h[2],w[0]=f[0]+l*b[0],w[1]=f[1]+l*b[1],w[2]=f[2]+l*b[2],e.tA=j,e.tB=l,e.pA=q,e.pB=w,e.distance2=a(q,w),!0}const q={tA:0,tB:0,pA:f(),pB:f(),distance2:0},w=new r((()=>v()));export{j as a,p as b,v as c,m as d,b as e,h as f,B as g,d as h,M as i,A as p};
