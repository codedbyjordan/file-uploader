(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(28),c=a.n(l),i=(a(35),a(4)),u=a(16),o=a(14),s=a.n(o),m=a(19),d={apiKey:"AIzaSyDs77phTnoaiUAZZd8ak_Gvv5ozeBtZ4XM",authDomain:"firegram-70a8a.firebaseapp.com",projectId:"firegram-70a8a",storageBucket:"firegram-70a8a.appspot.com",messagingSenderId:"984077982923",appId:"1:984077982923:web:eff5bef8df8968bf538f4e"},f=a(15);a(45),a(46),a(38);f.a.initializeApp(d);var p=f.a.storage(),E=f.a.firestore(),g=f.a.firestore.FieldValue.serverTimestamp,b=(f.a.firestore.FieldValue.delete,f.a.auth()),v=new f.a.auth.GoogleAuthProvider,h=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.ref(n),l=E.collection(t).doc(a),e.next=4,r.delete();case 4:return e.next=6,l.delete();case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var j={loading:!0},O=function(e,t){switch(t.type){case"sign_in":return{loggedIn:!0,displayName:t.payload.displayName,email:t.payload.email,id:t.payload.id};case"reset":return{loggedIn:!1};default:return e}},y=r.a.createContext(),N=function(e){var t=Object(n.useReducer)(O,j),a=Object(i.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){c(e?{type:"sign_in",payload:{displayName:e.displayName,email:e.email,id:e.uid}}:{type:"reset"})}))}),[]),r.a.createElement(y.Provider,{value:{user:l,userDispatch:c}},l.loading?r.a.createElement("div",{className:"loading"}):e.children)},k=function(){var e=Object(n.useContext)(y),t=e.user,a=e.userDispatch;return[t,function(){b.signInWithPopup(v).then((function(e){a({type:"sign_in",payload:{displayName:e.user.displayName,email:e.user.email,id:e.user.uid}})})).catch((function(e){return console.log(e)}))},function(){b.signOut().then((function(e){a({type:"sign_out"})})).catch((function(e){console.log(e)}))}]},w=function(){var e=k(),t=Object(i.a)(e,3),a=t[0],n=(t[1],t[2]);return r.a.createElement("nav",null,r.a.createElement(u.b,{className:"nav-link",to:"/"},r.a.createElement("h1",{className:"logo"},"Jordan's File Uploader")),r.a.createElement("div",{className:"nav-items"},!a.loggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{className:"nav-link",to:"/login"},"Login"),r.a.createElement(u.b,{className:"nav-link",to:"/signup"},"Signup")),a.loggedIn&&r.a.createElement(u.b,{className:"nav-link",to:"/file-uploader",onClick:n},"Sign Out")))},I=a(5),S=a(21),x=function(e){return r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,e.children))},F=function(){var e=k(),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"form"},r.a.createElement(x,null,"Login"),a.loggedIn?r.a.createElement(I.a,{to:"/file-uploader"}):r.a.createElement("button",{onClick:n},r.a.createElement(S.b,null)))},A=function(){return r.a.createElement("form",null)},C=function(e,t){var a=Object(n.useState)(0),r=Object(i.a)(a,2),l=r[0],c=r[1],u=Object(n.useState)(null),o=Object(i.a)(u,2),d=o[0],f=o[1],b=Object(n.useState)(null),v=Object(i.a)(b,2),h=v[0],j=v[1];return Object(n.useEffect)((function(){var a=function(e){var t=(e=e.split(/(?=.png|.jpg|.jpeg|.txt)/)).pop();return e.push(Date.now(),t),e.join().replace(",","")}(e.name),n=E.collection(t),r=p.ref(a);r.put(e).on("state_changed",(function(e){c(e.bytesTransferred/e.totalBytes*100)}),(function(e){f(e)}),Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getDownloadURL();case 2:a=t.sent,j(a),n.add({name:e.name,url:a,type:e.type,createdAt:g()});case 5:case"end":return t.stop()}}),t)}))))}),[e,t]),[l,d,h]},D=function(e){var t=e.file,a=e.resetFile,l=k(),c=Object(i.a)(l,1)[0],u=C(t,c.id),o=Object(i.a)(u,3),s=o[0],m=(o[1],o[2]);return Object(n.useEffect)((function(){m&&a()}),[m,a]),r.a.createElement("div",{className:"progress-bar"},r.a.createElement("progress",{value:s,max:100,style:{width:"100%"}}))},_=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),u=Object(i.a)(c,2),o=u[0],s=u[1];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t?l(t):s("Error: No file selected")}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("h1",null,o),a&&r.a.createElement("h1",null,a.name),a&&r.a.createElement(D,{file:a,resetFile:function(){return l(null)}})))},B=a(25),M=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var t=E.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(B.a)(Object(B.a)({},e.data()),{},{id:e.id}))})),l(t)}));return function(){return t}}),[e]),{docs:r}},T=function(e){var t=e.type,a=e.url,l=e.deleteImage,c=Object(n.useState)(!1),u=Object(i.a)(c,2),o=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)},onClick:function(){var e=new XMLHttpRequest;e.responseType="blob",e.onload=function(t){e.response},e.open("GET",a),e.send()}},t.includes("image")?r.a.createElement("img",{src:a}):r.a.createElement("div",{className:"file"},r.a.createElement(S.a,{className:"fileIcon"}))),o&&r.a.createElement("button",{className:"delete-btn",onClick:l},"X"))},L=function(){var e=k(),t=Object(i.a)(e,1)[0],a=M(t.id).docs;return r.a.createElement("div",{className:"grid"},a&&a.map((function(e){return r.a.createElement("div",{className:"wrap",key:e.id},r.a.createElement(T,{type:e.type,url:e.url,deleteFile:function(){return h(t.id,e.id,e.fileName)},key:e.id}))})))},z=function(){var e=k(),t=Object(i.a)(e,1)[0];return r.a.createElement("div",null,t.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,"Hello, ",t.displayName),r.a.createElement(_,null),r.a.createElement(L,null)):r.a.createElement(x,null,"Welcome!"))};var G=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/image-uploader"},r.a.createElement(z,null)),r.a.createElement(I.b,{path:"/login"},r.a.createElement(F,null)),r.a.createElement(I.b,{path:"/signup"},r.a.createElement(A,null)))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null,r.a.createElement(G,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.40bed259.chunk.js.map