// Menu javascript
var leftmenu = document.getElementById('leftmenu');
var closer = document.getElementById('closer');
var hamburger = document.getElementById('hamburger');
var mwidth = 250;
var markdown = document.getElementById('markdown');
hamburger.onclick = function(){ closemenu() };
leftmenu.adist = 0;
leftmenu.open = false;
leftmenu.scheduledAnimationFrame = false;

if (window.innerWidth < 900) leftmenu.classList.add('hidden');
else leftmenu.classList.remove('hidden');

function closemenu(){
  leftmenu.classList.toggle('hidden');
  if (leftmenu.classList.contains('hidden')){
    if (window.innerWidth < 900){
      leftmenu.adist = 0;
      leftmenu.open = false;
      movemenu();
    } else {
      markdown.style.left = "0";
    }
    closer.innerHTML = "&gt;&gt;";
  } else {
    if (window.innerWidth < 900) {
      leftmenu.adist = mwidth;
      leftmenu.open = true;
      movemenu();
    } else {
      setTimeout(function(){markdown.style.left = mwidth+"px";},200);
    }
    closer.innerHTML = "&lt;&lt;";
  }
}
// --------------------------------------------------------Touch Start
leftmenu.addEventListener('touchstart', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
  startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
  //e.preventDefault()
}, false)

// ---------------------------------------------------------Touch move
leftmenu.addEventListener('touchmove', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event
  var dist = parseInt(touchobj.clientX) - startx + leftmenu.open*mwidth;

  leftmenu.adist = (dist > mwidth) ? mwidth : (dist < 0) ? 0 : dist;

  if (!leftmenu.scheduledAnimationFrame) {
    requestAnimationFrame(movemenu);

    leftmenu.scheduledAnimationFrame = true;
  }
  if (Math.abs(dist) < 20) {
    e.preventDefault()
  }
}, false)

// -----------------------------------------------------------Touch end
leftmenu.addEventListener('touchend', function(e){
  var touchobj = e.changedTouches[0] // reference first touch point for this event

  var dist = parseInt(touchobj.clientX) - startx + leftmenu.open*mwidth;
  if (dist > mwidth/2) {
    leftmenu.adist = mwidth;
    leftmenu.open = true;
    requestAnimationFrame(movemenu);
  } else {
    leftmenu.adist = 0;
    leftmenu.open = false;
    requestAnimationFrame(movemenu);
  }
  //e.preventDefault()
}, false)

// --------------------------Move the menu - called by movement normally
function movemenu(time){
  leftmenu.style.left = -mwidth + leftmenu.adist + 'px';
  leftmenu.scheduledAnimationFrame = false;
}
