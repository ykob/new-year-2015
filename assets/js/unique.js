var sheepArr = [];
var sheepImg = new Image();
sheepImg.src = 'img/sheep.png';

var runningSheep = function(x, y, a, type, big) {
  this.x = x;
  this.y = y;
  this.v = 0;
  this.a = a;
  this.w = 320 / 2;
  this.h = 488 / 4;
  this.type = type;
  this.frameNum = 0;
  this.walk = 0;
  this.sx = this.w * this.walk;
  this.sy = this.h * type;
  this.sw = this.w;
  this.sh = this.h;
  this.dx = this.x;
  this.dy = this.y - this.h / 4;
  if (big === true) {
    this.dw = this.w;
    this.dh = this.h;
  } else {
    this.dw = this.w / 2;
    this.dh = this.h / 2;
  };
};

runningSheep.prototype.render = function() {
  this.v += this.a;
  this.x -= this.v;
  this.dx = this.x;
  this.dy = this.y - this.h / 4;
  this.frameNum++;
  if (this.frameNum % 7 == 0) {
    if (this.walk == 0) {
      this.walk = 1;
    } else {
      this.walk = 0;
    };
    this.sx = this.w * this.walk;
  };

  ctx.beginPath();
  ctx.drawImage(sheepImg, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
};

runningSheep.prototype.isLast = function() {
  if (this.x > width) {
    return true;
  } else {
    return false;
  }
};

var render = function() {
  ctx.clearRect(0, 0, width, height);
  for (var i = 0; i < sheepArr.length; i++) {
    sheepArr[i].render();
    if (sheepArr[i].isLast()) {
      sheepArr.splice(i, 1);
    };
  };
};

var addSheep = function(auto) {
  var x = width;
  var y = getRandomInt(height / 10, height - height / 10);
  var a = getRandomInt(0.1, 1);
  var typeMax = 4;
  var type = getRandomInt(0, typeMax);
  var judgeBigOrNormal = getRandomInt(0, 20);
  if (judgeBigOrNormal == 19 && auto == false) {
    sheepArr.push(new runningSheep(x, y, a, type, true));
  } else {
    sheepArr.push(new runningSheep(x, y, a, type));
  };
};

if ('ontouchstart' in document) {
  document.addEventListener('touchstart', function(event) {
    addSheep(false);
  }, false);
} else {
  document.addEventListener('click', function(event) {
    addSheep(false);
  }, false);
};

setInterval(function() {
  render();
}, frameTime);

setInterval(function() {
  addSheep(true);
}, 5000);
