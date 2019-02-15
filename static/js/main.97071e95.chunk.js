(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1618:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(557),i=n.n(a),r=n(182),s=n(63),l=n(275),d=n(111),u=n(112),f={score:{state:0,actions:function(e){return{addScore:function(){return e(function(e){return e+1})},resetScore:function(){return e(0)}}}}},p=Object.keys(f).reduce(function(e,t){var n=Object(c.createContext)();return{providers:Object(u.a)({},e.providers,Object(d.a)({},t,n.Provider)),consumers:Object(u.a)({},e.consumers,Object(d.a)({},"use".concat(t.slice(0,1).toUpperCase()).concat(t.slice(1)),function(){return Object(c.useContext)(n)}))}},{providers:{},consumers:{}}),b=Object.entries(f).reduce(function(e,t){var n=Object(l.a)(t,2),a=n[0],i=n[1],r=p.providers[a];return o.a.memo(function(t){var n=t.component,s=Object(c.useState)(i.state),f=Object(l.a)(s,2),p=f[0],b=f[1],h=Object(c.useRef)(i.actions(b));return o.a.createElement(r,{value:Object(u.a)(Object(d.a)({},a,p),h.current)},e?o.a.createElement(e,{component:n}):n)})},null)||function(e){return e.component};var h=function(e){return o.a.createElement(b,{component:e.children})},g=p.consumers,m=n(64),y=n.n(m),w=n(107),j=n(109),v=n(108),O=n(110),S=n(17),k=function(e){function t(e,n){var c;return Object(w.a)(this,t),(c=Object(j.a)(this,Object(v.a)(t).call(this,e,e.game.config.width/5,e.game.config.height/5,"player"))).flap=function(){c.body.setVelocityY(-c.scene.game.config.height/1.1)},c.preUpdate=function(){c.body.checkWorldBounds()&&c.scene.loser()},e.add.existing(Object(S.a)(Object(S.a)(c))),e.physics.world.enable(Object(S.a)(Object(S.a)(c))),c.body.setCollideWorldBounds(!0),c.body.setCircle(n*e.game.config.width),c}return Object(O.a)(t,e),t}(y.a.GameObjects.Sprite),C=function(e){function t(e,n,c,o){var a;return Object(w.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e,1.5*e.game.config.width,n,"pipe"))).preUpdate=function(){a.body.position.x<-100&&(a.addScore(),a.destroy())},e.add.existing(Object(S.a)(Object(S.a)(a))),e.physics.world.enable(Object(S.a)(Object(S.a)(a))),a.body.allowGravity=!1,a.body.setVelocityX(-e.game.config.width*o/3),a.body.setImmovable(!0),a.addScore=c,a}return Object(O.a)(t,e),t}(y.a.GameObjects.Sprite),E=.03,x=.1,W=1,G=.2;var R=function(e){function t(e){var n,c=e.addScore,o=e.resetScore;return Object(w.a)(this,t),(n=Object(j.a)(this,Object(v.a)(t).call(this))).preload=function(){var e=n.game.config.width;n.make.graphics().fillStyle(170).fillCircle(E*e,E*e,E*e).generateTexture("player",2*E*e,2*E*e),n.make.graphics().fillStyle(43520).fillRect(0,0,x*e,W*e).generateTexture("pipe",x*e,W*e),n.add.graphics().fillStyle(13421772).fillRect(0,0,e,n.game.config.height)},n.create=function(){n.isDead=!1,n.difficulty=1,n.resetScore(),n.player=new k(Object(S.a)(Object(S.a)(n)),E),n.pipes=n.add.group(Object(S.a)(Object(S.a)(n))),n.physics.add.collider(n.player,n.pipes,n.loser),n.input.on("pointerdown",n.player.flap),n.input.keyboard.on("keydown-SPACE",n.player.flap)},n.update=function(){if(!n.isDead){var e=n.game.config.width,t=n.pipes.getLast(!0);if(!t||t.body.position.x<n.game.config.width){var c=function(e,t,n){var c=G*t/(2*n);return Math.random()*(e-2*c)+c}(n.game.config.height,n.game.config.width,n.difficulty);n.pipes.add(new C(Object(S.a)(Object(S.a)(n)),c+G*e/(2*n.difficulty)+W*e/2,n.addScore,n.difficulty)).add(new C(Object(S.a)(Object(S.a)(n)),c-W*e/2-G*e/(2*n.difficulty),function(){},n.difficulty)),n.difficulty<2&&(n.difficulty=n.difficulty+.01)}}},n.loser=function(){n.game.scene.stop("Game"),n.isDead=!0,setTimeout(function(){n.game.scene.start("Game")},1e3)},n.addScore=c,n.resetScore=o,n}return Object(O.a)(t,e),t}(y.a.Scene);var A=function(e){Object(c.useEffect)(function(){var e=window.innerWidth,c=window.innerHeight,o=e/c<16/9?e:16/9*c,a=o/(16/9),s={parent:n.current,type:y.a.AUTO,width:o,height:a,canvasStyle:"display: block; pointer-events: none",physics:{default:"arcade",arcade:{gravity:{y:3*a}}}},l=new y.a.Game(s);l.scene.add("Game",new R({addScore:i,resetScore:r}),!0),t.current=l},[]);var t=Object(c.useRef)(),n=Object(c.useRef)(),o=g.useScore(),a=o.score,i=o.addScore,r=o.resetScore;return{parent:n,score:a,onClick:function(){t.current.scene.getScene("Game").input.emit("pointerdown")}}},U=o.a.memo(function(e){var t=A(e),n=t.parent,c=t.score,a=t.onClick;return o.a.createElement("div",{onClick:a,className:e.classes.canvas,ref:n},o.a.createElement(r.b,{className:e.classes.score},"Score: ",c))}),T=Object(s.withStyles)(function(e){return{canvas:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"black",position:"relative"},score:{position:"absolute",fontSize:"2em",top:0,left:0,width:200,height:50,display:"flex",alignItems:"center",justifyContent:"center"}}})(U),N=Object(s.withStyles)(function(e){return{body:Object(u.a)({},e.typography.body1,{position:"absolute",height:"100%",width:"100%"})}})(function(e){return o.a.createElement(h,null,o.a.createElement(r.a,null),o.a.createElement("div",{className:e.classes.body},o.a.createElement(T,null)))}),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/flappy-nerd",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/flappy-nerd","/service-worker.js");B?(function(e,t){fetch(e).then(function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(t,e)})}}()},663:function(e,t,n){e.exports=n(1618)}},[[663,2,1]]]);