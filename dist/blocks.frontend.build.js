!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=466)}({466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(467);n.n(o)},467:function(e,t){function n(e,t){if(YT&&YT.Player){new YT.Player(e,{playerVars:{autoplay:1,controls:0,disablekb:0,autohide:1,wmode:"opaque",hd:1,enablejsapi:1,loop:1,showinfo:0,iv_load_policy:3,rel:0,modestbranding:1,playlist:t},videoId:t,events:{onReady:o}})}else setTimeout(function(){n(e,t)},100)}function o(e){e.target.mute(),e.target.playVideo(),e.target.f.parentNode.parentNode.style.opacity=1}document.addEventListener("DOMContentLoaded",function(){for(var e=document.getElementsByClassName("c9-video"),t=0;t<e.length;t++){n(e[t].getAttribute("id"),e[t].getAttribute("video-id"))}var o=window.jQuery;o(".c9-video-container").each(function(){var e=this;0<o(".c9-video-custom",this).length&&o(".c9-video-custom",this).on("canplay",function(){o(e).css({opacity:1})})})})}});