var viewport = document.getElementsByClassName('viewport')[0];
var imgs = document.getElementsByClassName('img');
var timerID;
var isMouseDown = false;
var animating = false;
var gtime = 0;
var quickfinish = false;

// getClosestImg(): returns index of nearest image
// scrollToMiddle(i): takes index /\ and scrolls directly to centre
// handleScroll(e): takes event, delegates scroll event if not still scrolling
// animateScroll(sInit, sFinal): takes init and final pos, animates scrolling 

function getClosestImg() {
  // Variables
  var viewWidth = viewport.offsetWidth;
  var min = viewWidth;
  var centre = viewport.scrollLeft + viewWidth/2;

  // Main loop
  for (var i = 0; i < imgs.length; ++i) {
    var loc = imgs[i].offsetLeft + imgs[i].offsetWidth/2;
    var diff = Math.abs(centre - loc);
    if (diff < min) {
      min = diff;
    } else if (min < viewWidth) {
      return (i==0)?0:i-1;
    }
  }
  return imgs.length-1;
}
function scrollToMiddle(i) {
  var sFinal = imgs[i].offsetLeft + imgs[i].offsetWidth/2 - viewport.offsetWidth/2;
  viewport.scrollLeft = sFinal;
}
function handleScroll(e){
  if (animating){
    return;
  }
  clearTimeout(timerID);
  timerID = setTimeout(function(){
    if (!isMouseDown) {
      var i = getClosestImg();
      scrollToi(i);
    }
  }, 50);
}
function scrollToi(i){
  var sInit = viewport.scrollLeft;
  var sFinal = imgs[i].offsetLeft + imgs[i].offsetWidth/2 - viewport.offsetWidth/2;
  if (sInit != sFinal) {
    animateScroll(sInit,sFinal);
    addRemoveImages(i);
  }
}
function animateScroll(sInit, sFinal) {
  var delaytime = 300;
  window.requestAnimationFrame(function(time){
    if (quickfinish) {
      viewport.scrollLeft = sFinal;
      quickfinish = false;
      animating = false;
      gtime = 0;
      return
    }

    animating = true;
    if (gtime == 0) { //first time
      gtime = time;
    } else {
      var p = [[0,sInit],[0,sFinal],[1,sFinal]];
      var t = (time - gtime)/delaytime;
      var y = sFinal;
      if (t < 1)
        y = (1-t)*(1-t)*sInit+2*(1-t)*t*sFinal+t*t*sFinal;
      viewport.scrollLeft = y;
    }
    if (time - gtime < delaytime) {
      animateScroll(sInit, sFinal);
    } else {
      animating = false;
      gtime = 0;
    }
  });
}
function addRemoveImages(currenti) {
  // lets do just adding...
  var numOffPage = 2;
  var max = Math.min(currenti+numOffPage, imgList.length-1);
  for (var i=imgs.length; i<=max; ++i) {
    console.log("addedImage");
    var img = new Image();
    img.src = imgList[i];
    img.className = "img";
    img.i = i;
    img.onclick = moveToNextImg;
    if (imgs.length == 0) {
      viewport.insertBefore(img,viewport.lastElementChild);
    } else {
      viewport.insertBefore(img,imgs[imgs.length-1].nextSibling);
    }
    imgs = viewport.getElementsByClassName('img');
  }
}
function moveToNextImg(e){
  clearTimeout(timerID);
  if (animating)
    quickfinish = true;
  
  var j = getClosestImg();
  if (this.i == j)
    j = (j >= imgs.length-1)? 0 : j+1;
  else
    j = this.i;
  
  scrollToi(j);
};
function nextImg(){
  clearTimeout(timerID);
  if (animating)
    quickfinish = true;

  var i = getClosestImg() + 1;
  if (i >= imgList.length) i = 0;
  scrollToi(i);
}
function previousImg() {
  clearTimeout(timerID);
  if (animating)
    quickfinish = true;

  var i = getClosestImg() - 1;
  if (i < 0) return;
  scrollToi(i);
}

addRemoveImages(-1);
window.onload = function(e){
  animating = true;
  scrollToMiddle(getClosestImg());
  animating = false;
}
//viewport.onmouseup = function(e){scrollToMiddle(getClosestImg())}
viewport.onmousedown = function(e){isMouseDown=true};
viewport.onmouseup = function(e){isMouseDown=false;handleScroll()};
viewport.onscroll = handleScroll;
viewport.onresize = handleScroll;

for (var i=0;i<imgs.length;++i){
  imgs[i].i = i;
  imgs[i].onclick = moveToNextImg;
}
