import{b as n,c as t,d as r,e as f,i as o,f as i,S as c,s as u,F as e,A as a,h as s,P as m,U as $,O as g,g as l,V as d,W as p,X as v,Y as _,Z as h}from"./client.3d2d2cae.js";import j from"./error_401.c32510cd.js";import w from"./error_404.9b80f08d.js";import b from"./error_500.7a83f527.js";function x(n){var t,r;return t=new b({}),{c:function(){p(t.$$.fragment)},l:function(n){v(t.$$.fragment,n)},m:function(n,f){_(t,n,f),r=!0},i:function(n){r||(g(t.$$.fragment,n),r=!0)},o:function(n){m(t.$$.fragment,n),r=!1},d:function(n){h(t,n)}}}function A(n){var t,r;return t=new w({}),{c:function(){p(t.$$.fragment)},l:function(n){v(t.$$.fragment,n)},m:function(n,f){_(t,n,f),r=!0},i:function(n){r||(g(t.$$.fragment,n),r=!0)},o:function(n){m(t.$$.fragment,n),r=!1},d:function(n){h(t,n)}}}function F(n){var t,r;return t=new j({}),{c:function(){p(t.$$.fragment)},l:function(n){v(t.$$.fragment,n)},m:function(n,f){_(t,n,f),r=!0},i:function(n){r||(g(t.$$.fragment,n),r=!0)},o:function(n){m(t.$$.fragment,n),r=!1},d:function(n){h(t,n)}}}function N(n){var t,r,f,o,i=[F,A,x],c=[];function u(n,t){return"error_401"===n[0]?0:"error_404"===n[0]?1:"error_500"===n[0]?2:-1}return~(t=u(n))&&(r=c[t]=i[t](n)),{c:function(){r&&r.c(),f=e()},l:function(n){r&&r.l(n),f=e()},m:function(n,r){~t&&c[t].m(n,r),a(n,f,r),o=!0},p:function(n,o){s(o,1)[0];var e=t;(t=u(n))!==e&&(r&&(d(),m(c[e],1,1,function(){c[e]=null}),$()),~t?((r=c[t])||(r=c[t]=i[t](n)).c(),g(r,1),r.m(f.parentNode,f)):r=null)},i:function(n){o||(g(r),o=!0)},o:function(n){m(r),o=!1},d:function(n){~t&&c[t].d(n),n&&l(f)}}}function O(n,t,r){var f=t.segment;return n.$$set=function(n){"segment"in n&&r(0,f=n.segment)},[f]}export default(function(e){function a(n){var c;return t(this,a),c=r(this,f(a).call(this)),o(i(c),n,O,N,u,{segment:0}),c}return n(a,c),a}());