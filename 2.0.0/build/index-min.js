/*! kissy-mscroller - v2.0.0 - 2013-09-24 10:40:33 AM
* Copyright (c) 2013 岑安; Licensed  */
KISSY.add("kg/kissy-mscroller/2.0.0/hos",function(){function a(){var a=["webkit","moz","o","ms"],b=document.createElement("div"),c=document.getElementsByTagName("body")[0],d=!1;c.appendChild(b);for(var e=0;e<a.length;e++){var f=a[e];b.style[f+"OverflowScrolling"]="touch"}b.style.overflowScrolling="touch";var g=window.getComputedStyle(b);d=!!g.overflowScrolling;for(var e=0;e<a.length;e++){var f=a[e];if(g[f+"OverflowScrolling"]){d=!0;break}}return b.parentNode.removeChild(b),d}return a()}),KISSY.add("kg/kissy-mscroller/2.0.0/osptr",function(a,b,c,d){function e(b,c){var d=this;e.superclass.constructor.call(d,c),this.selector=b,this.isTouch=!!("ontouchstart"in window),this.cfg=a.mix({hasPtr:!1,scrollingY:!0,scrollingX:!1,message:{pull:"Pull to refresh",release:"Release to refresh",loading:"Loading"},imgLazyload:!0,ptrCallback:function(){}},c,!0,null,!0),this.html='<div class="pull-to-refresh"><div class="icon"></div><div class="message"><i class="arrow"></i><i class="spinner large"></i><span class="pull">'+this.cfg.message.pull+"</span>"+'<span class="release">'+this.cfg.message.release+"</span>"+'<span class="loading">'+this.cfg.message.loading+"</span>"+"</div>"+"</div>",this.els={},this._init()}var f=b.all;return a.extend(e,c,{_init:function(){this.els.container=f(this.selector),this._initScroll(),this.cfg.hasPtr&&this._initPtr(),this.cfg.imgLazyload&&this._initLazyload()},_initScroll:function(){this.els.container.css({overflowY:"auto",webkitOverflowScrolling:"touch",mozOverflowScrolling:"touch",msOverflowScrolling:"touch",oOverflowScrolling:"touch",overflowScrolling:"touch",position:"relative"})},_initPtr:function(){var a=this.isTouch,b=this.cfg,c=this.html;this.els.container.each(function(){if(a){var e=f(this).prepend(c),g=e.one(".scroll-wrap"),h=e.one(".pull-to-refresh"),i=e.one(".arrow"),j=e.one(".spinner"),k=e.one(".pull"),l=e.one(".release"),m=e.one(".loading"),n=h.height(),o=2*(n/3),p=!1,q=!1;g.css({minHeight:"100%",webkitTransform:"translateZ(0)"}),g.on("touchstart",function(){0===e.scrollTop()&&e.scrollTop(1)}).on("touchmove",function(){var a=e.scrollTop(),b=180-(-n>a?180:-o>a?Math.round(180/(n-o)*(-a-o)):0);return q?!0:(i.show(),i.css("webkitTransform","rotate("+b+"deg)"),j.hide(),-a>n?(l.css("opacity",1),k.css("opacity",0),m.css("opacity",0),p=!0):a>-n&&(l.css("opacity",0),m.css("opacity",0),k.css("opacity",1),p=!1),void 0)}).on("touchend",function(){if(e.scrollTop(),p){q=!0,p=!1,l.css("opacity",0),k.css("opacity",0),m.css("opacity",1),i.hide(),j.show(),h.css("position","static");var a=function(){var a=new d.Defer,c=a.promise,e=c.then(function(){var a=new d.Defer;return b.ptrCallback(a),a.promise});return a.resolve(),e};a().then(function(){h.animate({height:0},.1,"easeOut",function(){h.css({position:"absolute",height:n}),q=!1})})}})}})},_initLazyload:function(){var a=this;this.els.container.each(function(b){b.on("scroll",function(){a.dealLazyload(f(this))}),a.dealLazyload(b)})},dealLazyload:function(a){var b=a.all("img[data-src]"),c=this,d=a.offset();b.length||(b=f(a[0].querySelectorAll("img[data-src]"))),b.each(function(b){("about:blank"==b.attr("src")||!b.attr("src"))&&b.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=");var e=b.offset(),f=b.height();b.width();var g={left:e.left-d.left,top:e.top-d.top};c.cfg.scrollingY&&g.top>-f&&g.top<a.height()&&(b.attr("src",b.attr("data-src")),b.removeAttr("data-src"))})}},{ATTRS:{}}),e},{requires:["node","base","promise"]}),KISSY.add("kg/kissy-mscroller/2.0.0/rafanim",function(){var a=Date.now||function(){return+new Date},b=60,c=2.0.0,d={},e=1,f=window||this,g={requestAnimationFrame:function(){var a=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||f.oRequestAnimationFrame,b=!!a;if(a&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(a.toString())&&(b=!1),b)return function(b,c){a(b,c)};var c=60,d={},e=0,g=1,h=null,i=+new Date;return function(a){var b=g++;return d[b]=a,e++,null===h&&(h=setInterval(function(){var a=+new Date,b=d;d={},e=0;for(var c in b)b.hasOwnProperty(c)&&(b[c](a),i=a);a-i>2500&&(clearInterval(h),h=null)},2.0.0/c)),b}}(),stop:function(a){var b=null!=d[a];return b&&(d[a]=null),b},isRunning:function(a){return null!=d[a]},start:function(f,h,i,j,k,l){var m=a(),n=m,o=0,p=0,q=e++;if(l||(l=document.body),0===q%20){var r={};for(var s in d)r[s]=!0;d=r}var t=function(e){var r=e!==!0,s=a();if(!d[q]||h&&!h(q))return d[q]=null,i&&i(b-p/((s-m)/c),q,!1),void 0;if(r)for(var u=Math.round((s-n)/(c/b))-1,v=0;v<Math.min(u,4);v++)t(!0),p++;j&&(o=(s-m)/j,o>1&&(o=1));var w=k?k(o):o;f(w,s,r)!==!1&&1!==o||!r?r&&(n=s,g.requestAnimationFrame(t,l)):(d[q]=null,i&&i(b-p/((s-m)/c),q,1===o||null==j))};return d[q]=!0,g.requestAnimationFrame(t,l),q}};return g}),KISSY.add("kg/kissy-mscroller/2.0.0/scrollfn",function(a,b){var c=function(){},d=function(a,b){this.__callback=a,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:c,penetrationDeceleration:.03,penetrationAcceleration:.08};for(var d in b)this.options[d]=b[d]},e=function(a){return Math.pow(a-2.0.0)+1},f=function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},g={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(a,b,c,d){var e=this;a===+a&&(e.__clientWidth=a),b===+b&&(e.__clientHeight=b),c===+c&&(e.__contentWidth=c),d===+d&&(e.__contentHeight=d),e.__computeScrollMax(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},setPosition:function(a,b){var c=this;c.__clientLeft=a||0,c.__clientTop=b||0},setSnapSize:function(a,b){var c=this;c.__snapWidth=a,c.__snapHeight=b},activatePullToRefresh:function(a,b,c,d){var e=this;e.__refreshHeight=a,e.__refreshActivate=b,e.__refreshDeactivate=c,e.__refreshStart=d},finishPullToRefresh:function(){var a=this;a.__refreshActive=!1,a.__refreshDeactivate&&a.__refreshDeactivate(),a.scrollTo(a.__scrollLeft,a.__scrollTop,!0)},getValues:function(){var a=this;return{left:a.__scrollLeft,top:a.__scrollTop,zoom:a.__zoomLevel}},getScrollMax:function(){var a=this;return{left:a.__maxScrollLeft,top:a.__maxScrollTop}},zoomTo:function(a,c,d,e){var f=this;if(!f.options.zooming)throw new Error("Zooming is not enabled!");f.__isDecelerating&&(b.stop(f.__isDecelerating),f.__isDecelerating=!1);var g=f.__zoomLevel;null==d&&(d=f.__clientWidth/2),null==e&&(e=f.__clientHeight/2),a=Math.max(Math.min(a,f.options.maxZoom),f.options.minZoom),f.__computeScrollMax(a);var h=(d+f.__scrollLeft)*a/g-d,i=(e+f.__scrollTop)*a/g-e;h>f.__maxScrollLeft?h=f.__maxScrollLeft:0>h&&(h=0),i>f.__maxScrollTop?i=f.__maxScrollTop:0>i&&(i=0),f.__publish(h,i,a,c)},zoomBy:function(a,b,c,d){var e=this;e.zoomTo(e.__zoomLevel*a,b,c,d)},scrollTo:function(a,c,d,e){var f=this;if(f.__isDecelerating&&(b.stop(f.__isDecelerating),f.__isDecelerating=!1),null!=e&&e!==f.__zoomLevel){if(!f.options.zooming)throw new Error("Zooming is not enabled!");a*=e,c*=e,f.__computeScrollMax(e)}else e=f.__zoomLevel;f.options.scrollingX?f.options.paging?a=Math.round(a/f.__clientWidth)*f.__clientWidth:f.options.snapping&&(a=Math.round(a/f.__snapWidth)*f.__snapWidth):a=f.__scrollLeft,f.options.scrollingY?f.options.paging?c=Math.round(c/f.__clientHeight)*f.__clientHeight:f.options.snapping&&(c=Math.round(c/f.__snapHeight)*f.__snapHeight):c=f.__scrollTop,a=Math.max(Math.min(f.__maxScrollLeft,a),0),c=Math.max(Math.min(f.__maxScrollTop,c),0),a===f.__scrollLeft&&c===f.__scrollTop&&(d=!1),f.__publish(a,c,e,d)},scrollBy:function(a,b,c){var d=this,e=d.__isAnimating?d.__scheduledLeft:d.__scrollLeft,f=d.__isAnimating?d.__scheduledTop:d.__scrollTop;d.scrollTo(e+(a||0),f+(b||0),c)},doMouseZoom:function(a,b,c,d){var e=this,f=a>0?.97:1.03;return e.zoomTo(e.__zoomLevel*f,!1,c-e.__clientLeft,d-e.__clientTop)},doTouchStart:function(a,c){if(null==a.length)throw new Error("Invalid touch list: "+a);if(c instanceof Date&&(c=c.valueOf()),"number"!=typeof c)throw new Error("Invalid timestamp value: "+c);var d=this;d.__interruptedAnimation=!0,d.__isDecelerating&&(b.stop(d.__isDecelerating),d.__isDecelerating=!1,d.__interruptedAnimation=!0),d.__isAnimating&&(b.stop(d.__isAnimating),d.__isAnimating=!1,d.__interruptedAnimation=!0);var e,f,g=1===a.length;g?(e=a[0].pageX,f=a[0].pageY):(e=Math.abs(a[0].pageX+a[1].pageX)/2,f=Math.abs(a[0].pageY+a[1].pageY)/2),d.__initialTouchLeft=e,d.__initialTouchTop=f,d.__zoomLevelStart=d.__zoomLevel,d.__lastTouchLeft=e,d.__lastTouchTop=f,d.__lastTouchMove=c,d.__lastScale=1,d.__enableScrollX=!g&&d.options.scrollingX,d.__enableScrollY=!g&&d.options.scrollingY,d.__isTracking=!0,d.__didDecelerationComplete=!1,d.__isDragging=!g,d.__isSingleTouch=g,d.__positions=[]},doTouchMove:function(a,b,c){if(null==a.length)throw new Error("Invalid touch list: "+a);if(b instanceof Date&&(b=b.valueOf()),"number"!=typeof b)throw new Error("Invalid timestamp value: "+b);var d=this;if(d.__isTracking){var e,f;2===a.length?(e=Math.abs(a[0].pageX+a[1].pageX)/2,f=Math.abs(a[0].pageY+a[1].pageY)/2):(e=a[0].pageX,f=a[0].pageY);var g=d.__positions;if(d.__isDragging){var h=e-d.__lastTouchLeft,i=f-d.__lastTouchTop,j=d.__scrollLeft,k=d.__scrollTop,l=d.__zoomLevel;if(null!=c&&d.options.zooming){var m=l;if(l=l/d.__lastScale*c,l=Math.max(Math.min(l,d.options.maxZoom),d.options.minZoom),m!==l){var n=e-d.__clientLeft,o=f-d.__clientTop;j=(n+j)*l/m-n,k=(o+k)*l/m-o,d.__computeScrollMax(l)}}if(d.__enableScrollX){j-=h*this.options.speedMultiplier;var p=d.__maxScrollLeft;(j>p||0>j)&&(d.options.bouncing?j+=h/2*this.options.speedMultiplier:j=j>p?p:0)}if(d.__enableScrollY){k-=i*this.options.speedMultiplier;var q=d.__maxScrollTop;(k>q||0>k)&&(d.options.bouncing?(k+=i/2*this.options.speedMultiplier,d.__enableScrollX||null==d.__refreshHeight||(!d.__refreshActive&&k<=-d.__refreshHeight?(d.__refreshActive=!0,d.__refreshActivate&&d.__refreshActivate()):d.__refreshActive&&k>-d.__refreshHeight&&(d.__refreshActive=!1,d.__refreshDeactivate&&d.__refreshDeactivate()))):k=k>q?q:0)}g.length>60&&g.splice(0,30),g.push(j,k,b),d.__publish(j,k,l)}else{var r=d.options.locking?3:0,s=5,t=Math.abs(e-d.__initialTouchLeft),u=Math.abs(f-d.__initialTouchTop);d.__enableScrollX=d.options.scrollingX&&t>=r,d.__enableScrollY=d.options.scrollingY&&u>=r,g.push(d.__scrollLeft,d.__scrollTop,b),d.__isDragging=(d.__enableScrollX||d.__enableScrollY)&&(t>=s||u>=s),d.__isDragging&&(d.__interruptedAnimation=!1)}d.__lastTouchLeft=e,d.__lastTouchTop=f,d.__lastTouchMove=b,d.__lastScale=c}},doTouchEnd:function(a){if(a instanceof Date&&(a=a.valueOf()),"number"!=typeof a)throw new Error("Invalid timestamp value: "+a);var b=this;if(b.__isTracking){if(b.__isTracking=!1,b.__isDragging)if(b.__isDragging=!1,b.__isSingleTouch&&b.options.animating&&a-b.__lastTouchMove<=100){for(var c=b.__positions,d=c.length-1,e=d,f=d;f>0&&c[f]>b.__lastTouchMove-100;f-=3)e=f;if(e!==d){var g=c[d]-c[e],h=b.__scrollLeft-c[e-2],i=b.__scrollTop-c[e-1];b.__decelerationVelocityX=h/g*(2.0.0/60),b.__decelerationVelocityY=i/g*(2.0.0/60);var j=b.options.paging||b.options.snapping?4:1;(Math.abs(b.__decelerationVelocityX)>j||Math.abs(b.__decelerationVelocityY)>j)&&(b.__refreshActive||b.__startDeceleration(a))}else b.options.scrollingComplete()}else a-b.__lastTouchMove>100&&b.options.scrollingComplete();b.__isDecelerating||(b.__refreshActive&&b.__refreshStart?(b.__publish(b.__scrollLeft,-b.__refreshHeight,b.__zoomLevel,!0),b.__refreshStart&&b.__refreshStart()):((b.__interruptedAnimation||b.__isDragging)&&b.options.scrollingComplete(),b.scrollTo(b.__scrollLeft,b.__scrollTop,!0,b.__zoomLevel),b.__refreshActive&&(b.__refreshActive=!1,b.__refreshDeactivate&&b.__refreshDeactivate()))),b.__positions.length=0}},__publish:function(a,c,d,g){var h=this,i=h.__isAnimating;if(i&&(b.stop(i),h.__isAnimating=!1),g&&h.options.animating){h.__scheduledLeft=a,h.__scheduledTop=c,h.__scheduledZoom=d;var j=h.__scrollLeft,k=h.__scrollTop,l=h.__zoomLevel,m=a-j,n=c-k,o=d-l,p=function(a,b,c){c&&(h.__scrollLeft=j+m*a,h.__scrollTop=k+n*a,h.__zoomLevel=l+o*a,h.__callback&&h.__callback(h.__scrollLeft,h.__scrollTop,h.__zoomLevel))},q=function(a){return h.__isAnimating===a},r=function(a,b,c){b===h.__isAnimating&&(h.__isAnimating=!1),(h.__didDecelerationComplete||c)&&h.options.scrollingComplete(),h.options.zooming&&h.__computeScrollMax()};h.__isAnimating=b.start(p,q,r,h.options.animationDuration,i?e:f)}else h.__scheduledLeft=h.__scrollLeft=a,h.__scheduledTop=h.__scrollTop=c,h.__scheduledZoom=h.__zoomLevel=d,h.__callback&&h.__callback(a,c,d),h.options.zooming&&h.__computeScrollMax()},__computeScrollMax:function(a){var b=this;null==a&&(a=b.__zoomLevel),b.__maxScrollLeft=Math.max(b.__contentWidth*a-b.__clientWidth,0),b.__maxScrollTop=Math.max(b.__contentHeight*a-b.__clientHeight,0)},__startDeceleration:function(){var a=this;if(a.options.paging){var c=Math.max(Math.min(a.__scrollLeft,a.__maxScrollLeft),0),d=Math.max(Math.min(a.__scrollTop,a.__maxScrollTop),0),e=a.__clientWidth,f=a.__clientHeight;a.__minDecelerationScrollLeft=Math.floor(c/e)*e,a.__minDecelerationScrollTop=Math.floor(d/f)*f,a.__maxDecelerationScrollLeft=Math.ceil(c/e)*e,a.__maxDecelerationScrollTop=Math.ceil(d/f)*f}else a.__minDecelerationScrollLeft=0,a.__minDecelerationScrollTop=0,a.__maxDecelerationScrollLeft=a.__maxScrollLeft,a.__maxDecelerationScrollTop=a.__maxScrollTop;var g=function(b,c,d){a.__stepThroughDeceleration(d)},h=a.options.snapping?4:.1,i=function(){var b=Math.abs(a.__decelerationVelocityX)>=h||Math.abs(a.__decelerationVelocityY)>=h;return b||(a.__didDecelerationComplete=!0),b},j=function(){a.__isDecelerating=!1,a.__didDecelerationComplete&&a.options.scrollingComplete(),a.scrollTo(a.__scrollLeft,a.__scrollTop,a.options.snapping)};a.__isDecelerating=b.start(g,i,j)},__stepThroughDeceleration:function(a){var b=this,c=b.__scrollLeft+b.__decelerationVelocityX,d=b.__scrollTop+b.__decelerationVelocityY;if(!b.options.bouncing){var e=Math.max(Math.min(b.__maxDecelerationScrollLeft,c),b.__minDecelerationScrollLeft);e!==c&&(c=e,b.__decelerationVelocityX=0);var f=Math.max(Math.min(b.__maxDecelerationScrollTop,d),b.__minDecelerationScrollTop);f!==d&&(d=f,b.__decelerationVelocityY=0)}if(a?b.__publish(c,d,b.__zoomLevel):(b.__scrollLeft=c,b.__scrollTop=d),!b.options.paging){var g=.95;b.__decelerationVelocityX*=g,b.__decelerationVelocityY*=g}if(b.options.bouncing){var h=0,i=0,j=b.options.penetrationDeceleration,k=b.options.penetrationAcceleration;c<b.__minDecelerationScrollLeft?h=b.__minDecelerationScrollLeft-c:c>b.__maxDecelerationScrollLeft&&(h=b.__maxDecelerationScrollLeft-c),d<b.__minDecelerationScrollTop?i=b.__minDecelerationScrollTop-d:d>b.__maxDecelerationScrollTop&&(i=b.__maxDecelerationScrollTop-d),0!==h&&(h*b.__decelerationVelocityX<=0?b.__decelerationVelocityX+=h*j:b.__decelerationVelocityX=h*k),0!==i&&(i*b.__decelerationVelocityY<=0?b.__decelerationVelocityY+=i*j:b.__decelerationVelocityY=i*k)}}};for(var h in g)d.prototype[h]=g[h];return d},{requires:["./rafanim"]}),KISSY.add("kg/kissy-mscroller/2.0.0/fakescroller",function(a,b,c,d){var e=c.all,f=function(a,c){this.content=a,this.container=a.parentNode,this.options=c||{};var d=this;this.scroller=new b(function(a,b,c){d.render(a,b,c),d.onScroll&&d.onScroll(a,b,c),clearTimeout(d.__finishAtInt),d.__finishAtInt=setTimeout(function(){a=Math.round(a),b=Math.round(b),d.render(a,b,c)},200)},c),this.bindEvents(),this.content.style[f.vendorPrefix+"TransformOrigin"]="left top",this.reflow()};f.prototype.render=function(){var a,b=document.documentElement.style;window.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?a="presto":"MozAppearance"in b?a="gecko":"WebkitAppearance"in b?a="webkit":"string"==typeof navigator.cpuClass&&(a="trident");var c,d=f.vendorPrefix={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[a],e=document.createElement("div"),g=d+"Perspective",h=d+"Transform";return e.style[g]!==c?function(a,b,c){this.content.style[h]="translate3d("+-a+"px,"+-b+"px,0) scale("+c+")"}:e.style[h]!==c?function(a,b,c){this.content.style[h]="translate("+-a+"px,"+-b+"px) scale("+c+")"}:function(a,b,c){this.content.style.marginLeft=a?-a/c+"px":"",this.content.style.marginTop=b?-b/c+"px":"",this.content.style.zoom=c||""}}(),f.prototype.reflow=function(){this.scroller.setDimensions(this.container.clientWidth,this.container.clientHeight,this.content.offsetWidth,this.content.offsetHeight);var a=this.container.getBoundingClientRect();this.scroller.setPosition(a.left+this.container.clientLeft,a.top+this.container.clientTop)},f.prototype.bindEvents=function(){var a=this;if(window.addEventListener("resize",function(){a.reflow()},!1),"ontouchstart"in window){var b=!1;this.container.addEventListener("touchstart",function(c){c.touches[0]&&c.touches[0].target&&c.touches[0].target.tagName.match(/input|textarea|select/i)||(b=!0,a.scroller.doTouchStart(c.touches,c.timeStamp))},!1),document.addEventListener("touchmove",function(c){b&&(c.preventDefault(),a.scroller.doTouchMove(c.touches,c.timeStamp,c.scale))},!1),document.addEventListener("touchend",function(c){b=!1,a.scroller.doTouchEnd(c.timeStamp)},!1),document.addEventListener("touchcancel",function(c){b=!1,a.scroller.doTouchEnd(c.timeStamp)},!1)}else if(a.options.mouseDrag){var c=!1;this.container.addEventListener("mousedown",function(b){b.target.tagName.match(/input|textarea|select/i)||(a.scroller.doTouchStart([{pageX:b.pageX,pageY:b.pageY}],b.timeStamp),c=!0,b.preventDefault())},!1),document.addEventListener("mousemove",function(b){c&&(a.scroller.doTouchMove([{pageX:b.pageX,pageY:b.pageY}],b.timeStamp),a.scroller.effectiveMove&&a.scroller.effectiveMove.call(a.scroller),c=!0)},!1),document.addEventListener("mouseup",function(b){c&&(a.scroller.doTouchEnd(b.timeStamp),c=!1)},!1),this.container.addEventListener("mousewheel",function(b){a.options.zooming&&a.scroller.doMouseZoom(b.wheelDelta,b.timeStamp,b.pageX,b.pageY)},!1)}this.container.addEventListener("mousewheel",function(b){var c=a.options.scrollingX?-b.wheelDelta:0,d=a.options.scrollingY?-b.wheelDelta:0;a.scroller.scrollBy(c,d,!0)},!1)};var g=function(b,c){this.selector=b,this.isTouch=!!("ontouchstart"in window),this.els={},this.cfg=a.mix({scrollingY:!0,scrollingX:!1,message:{pull:"Pull to refresh",release:"Release to refresh",loading:"Loading"},hasPtr:!1,hasBar:!0,mouseDrag:!0,imgLazyload:!0,ptrCallback:function(){}},c,!0,null,!0),this.html='<div class="pull-to-refresh"><div class="icon"></div><div class="message"><i class="arrow"></i><i class="spinner large"></i><span class="pull">'+this.cfg.message.pull+"</span>"+'<span class="release">'+this.cfg.message.release+"</span>"+'<span class="loading">'+this.cfg.message.loading+"</span>"+"</div>"+"</div>",this._init()};return g.prototype={_init:function(){var a=this.cfg,b=this,c=[];this.els.container=e(this.selector).css("overflow","hidden"),this.els.container.each(function(g){var h=g.all(".scroll-wrap");a.hasPtr&&h.prepend(b.html),"static"==g.css("position")&&g.css("position","relative");var i=h.all(".pull-to-refresh"),j=h.all(".release"),k=h.all(".loading"),l=h.all(".pull"),m=h.all(".arrow"),n=h.all(".spinner");j.hide(),k.hide(),l.show(),n.hide();var o,p=i.height(),q=2*(p/3),r=new f(h[0],a),s=r.scroller;s.effectiveMove=function(){var a=this.getValues(),b=a.top,c=180-(-p>b?180:-q>b?Math.round(180/(p-q)*(-b-q)):0);m.show(),m.css("webkitTransform","rotate("+c+"deg)")},a.imgLazyload&&(s.options.scrollingComplete=function(){b.dealLazyload(g,r)},b.dealLazyload(g,r)),a.hasBar&&(o=g.all(".scroll-bar"),o.length||(o=e('<div class="scroll-bar"></div>').css({position:"absolute",right:3,top:1,width:6,height:6,background:"rgba(0, 0, 0, 0.6)",webkitBorderRadius:"3px",opacity:0}).appendTo(g)),b.setBarHeight(o,g),r.onScroll=function(a,c,d){b.dealScrollbarByValues(a,c,d,s,o)}),a.hasPtr&&s.activatePullToRefresh(p,function(){l.hide(),k.hide(),j.show()},function(){j.hide(),k.hide(),l.show()},function(){j.hide(),l.hide(),k.show(),n.show(),m.hide();var b=function(){var b=new d.Defer,c=b.promise,e=c.then(function(){var b=new d.Defer;return a.ptrCallback(b),b.promise});return b.resolve(),e};b().then(function(a){return function(){a.finishPullToRefresh(),n.hide()}}(s))}),c.push(r)}),this.scrollers=c},setBarHeight:function(a,b){var c=b.height(),d=c/b[0].scrollHeight,e=c*d;a.css("height",e)},dealScrollbarByValues:function(a,b,c,d,e){var f=(this.cfg.scrollingX,this.cfg.scrollingY),g=d.getScrollMax(),h=e.parent(this.selector),i=h.height(),j=h[0].scrollHeight,k=i/j,l=i*k,m=e.width();if(l=Math.max(l,m),f){var n=g.top,o=0;b>0?(o=b*k,b>=n&&(l=Math.max(m,i*k+n-b),o=i-l-2)):0>b&&(o=0,l=Math.max(m,i*k+b)),e.css({opacity:1,height:l,webkitTransform:"translate(0, "+o+"px)"})}clearTimeout(e.__hideTimer),e.__hideTimer=setTimeout(function(){e.css("opacity",0)},200)},dealLazyload:function(a,b){var c=a.all("img[data-src]"),d=this,f=a.offset();c.length||(c=e(a[0].querySelectorAll("img[data-src]"))),c.each(function(c){("about:blank"==c.attr("src")||!c.attr("src"))&&c.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=");var e=c.offset(),g=c.height();c.width();var h={left:e.left-f.left,top:e.top-f.top};d.cfg.scrollingY&&h.top>-g&&h.top<a.height()&&(c.attr("src",c.attr("data-src")),c.removeAttr("data-src"),c.on("load",function(){b.reflow()}))})},reflow:function(){for(var a=0;a<this.scrollers.length;a++)this.scrollers[a].reflow&&this.scrollers[a].reflow()},scrollTo:function(a,b,c){for(var d=0;d<this.scrollers.length;d++)this.scrollers[d].scroller&&this.scrollers[d].scroller.scrollTo(a,b,c)},scrollBy:function(a,b,c){for(var d=0;d<this.scrollers.length;d++)this.scrollers[d].scroller&&this.scrollers[d].scroller.scrollBy(a,b,c)}},g},{requires:["./scrollfn","node","promise"]}),KISSY.add("kg/kissy-mscroller/2.0.0/index",function(a,b,c,d){return b?c:d},{requires:["./hos","./osptr","./fakescroller"]});