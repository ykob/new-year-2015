!function(a,b){b.demo=a;var c=window.innerWidth,d=window.innerHeight,e=document.getElementById("canvas"),f=e.getContext("2d"),g=60,h=1e3/g,i=function(a,b){return Math.floor(Math.random()*(b-a))+a},j=function(a,b,c){var d;a.addEventListener(b,function(){clearTimeout(d),d=setTimeout(function(){c()},500)},!1)},k=function(){c=window.innerWidth,d=window.innerHeight,e.width=c,e.height=d};j(window,"resize",function(){k()}),setTimeout(function(){k()},100);var l=[],m=new Image;m.src="img/sheep.png";var n=function(a,b,c,d,e){this.x=a,this.y=b,this.v=0,this.a=c,this.w=160,this.h=122,this.type=d,this.frameNum=0,this.walk=0,this.sx=this.w*this.walk,this.sy=this.h*d,this.sw=this.w,this.sh=this.h,this.dx=this.x,this.dy=this.y-this.h/4,e===!0?(this.dw=this.w,this.dh=this.h):(this.dw=this.w/2,this.dh=this.h/2)};n.prototype.render=function(){this.v+=this.a,this.x-=this.v,this.dx=this.x,this.dy=this.y-this.h/4,this.frameNum++,this.frameNum%7==0&&(this.walk=0==this.walk?1:0,this.sx=this.w*this.walk),f.beginPath(),f.drawImage(m,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh)},n.prototype.isLast=function(){return this.x>c?!0:!1};var o=function(){f.clearRect(0,0,c,d);for(var a=0;a<l.length;a++)l[a].render(),l[a].isLast()&&l.splice(a,1)},p=function(a){var b=c,e=i(d/10,d-d/10),f=i(.1,1),g=4,h=i(0,g),j=i(0,20);l.push(19==j&&0==a?new n(b,e,f,h,!0):new n(b,e,f,h))};"ontouchstart"in document?document.addEventListener("touchstart",function(){p(!1)},!1):document.addEventListener("click",function(){p(!1)},!1),setInterval(function(){o()},h),setInterval(function(){p(!0)},5e3)}({},function(){return this}());