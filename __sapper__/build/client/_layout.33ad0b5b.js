import{S as s,i as a,s as t,e,J as r,c as n,f as c,K as o,d as i,k as l,l as $,m as f,L as m,D as d,E as u,M as h,b as g,t as p,g as v,j as E,u as y,I,H as b}from"./client.ff1afff8.js";import{C as D,R as x}from"./Container.7e56bedb.js";import V from"./login.71745961.js";function j(s){let a,t;return a=new V({}),{c(){r(a.$$.fragment)},l(s){o(a.$$.fragment,s)},m(s,e){m(a,s,e),t=!0},i(s){t||(d(a.$$.fragment,s),t=!0)},o(s){u(a.$$.fragment,s),t=!1},d(s){h(a,s)}}}function w(s){let a,t,e="login"===s[0]&&j();return{c(){e&&e.c(),a=y()},l(s){e&&e.l(s),a=y()},m(s,r){e&&e.m(s,r),$(s,a,r),t=!0},p(s,t){"login"===s[0]?e?1&t&&d(e,1):((e=j()).c(),d(e,1),e.m(a.parentNode,a)):e&&(I(),u(e,1,1,()=>{e=null}),b())},i(s){t||(d(e),t=!0)},o(s){u(e),t=!1},d(s){e&&e.d(s),s&&i(a)}}}function A(s){let a,t,y,I,b,D,V,j,A,C,J,L,M;return a=new x({props:{class:"justify-content-center",$$slots:{default:[w]},$$scope:{ctx:s}}}),{c(){r(a.$$.fragment),t=g(),y=e("div"),I=e("div"),b=g(),D=e("div"),V=e("small"),j=p("Created by "),A=e("b"),C=p("Patricio J. Gerpe"),J=g(),L=e("div"),this.h()},l(s){o(a.$$.fragment,s),t=v(s),y=n(s,"DIV",{class:!0});var e=c(y);I=n(e,"DIV",{class:!0}),c(I).forEach(i),b=v(e),D=n(e,"DIV",{class:!0});var r=c(D);V=n(r,"SMALL",{});var l=c(V);j=E(l,"Created by "),A=n(l,"B",{});var $=c(A);C=E($,"Patricio J. Gerpe"),$.forEach(i),l.forEach(i),r.forEach(i),J=v(e),L=n(e,"DIV",{class:!0}),c(L).forEach(i),e.forEach(i),this.h()},h(){l(I,"class","col m4 s4"),l(D,"class","col m4 s4"),l(L,"class","col m4 s4"),l(y,"class","row")},m(s,e){m(a,s,e),$(s,t,e),$(s,y,e),f(y,I),f(y,b),f(y,D),f(D,V),f(V,j),f(V,A),f(A,C),f(y,J),f(y,L),M=!0},p(s,t){const e={};3&t&&(e.$$scope={dirty:t,ctx:s}),a.$set(e)},i(s){M||(d(a.$$.fragment,s),M=!0)},o(s){u(a.$$.fragment,s),M=!1},d(s){h(a,s),s&&i(t),s&&i(y)}}}function C(s){let a,t,g,p,v;return p=new D({props:{$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){a=e("div"),t=e("div"),g=e("main"),r(p.$$.fragment),this.h()},l(s){a=n(s,"DIV",{id:!0,class:!0});var e=c(a);t=n(e,"DIV",{id:!0});var r=c(t);g=n(r,"MAIN",{});var l=c(g);o(p.$$.fragment,l),l.forEach(i),r.forEach(i),e.forEach(i),this.h()},h(){l(t,"id","layoutAuthentication_content"),l(a,"id","layoutAuthentication"),l(a,"class","bg-primary")},m(s,e){$(s,a,e),f(a,t),f(t,g),m(p,g,null),v=!0},p(s,[a]){const t={};3&a&&(t.$$scope={dirty:a,ctx:s}),p.$set(t)},i(s){v||(d(p.$$.fragment,s),v=!0)},o(s){u(p.$$.fragment,s),v=!1},d(s){s&&i(a),h(p)}}}function J(s,a,t){let{segment:e}=a;return s.$$set=(s=>{"segment"in s&&t(0,e=s.segment)}),[e]}export default class extends s{constructor(s){super(),a(this,s,J,C,t,{segment:0})}}
