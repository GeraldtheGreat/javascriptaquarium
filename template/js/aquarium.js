var userTop=0;
var userLeft=0;
//
// document.getElementsByClassName("dory")[0].onclick= doryswim;
// document.getElementsByClassName("nemo")[0].onclick= nemoswim;
// document.getElementsByClassName("stingray")[0].onclick= swimray;
// document.getElementsByClassName("shark")[0].onclick= sharkswim;
//
// function getPosition(){
//   return Math.random()*500
// }
// function doryswim (){
//   userTop= getPosition();
//   userLeft=getPosition();
//   document.getElementsByClassName("dory")[0].style.top=userTop + "px";
//   document.getElementsByClassName("dory")[0].style.left=userLeft + "px";
//   document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
//   document.getElementById("music").play();
//
// }
// function nemoswim (){
//   userTop= getPosition();
//   userLeft=getPosition();
//   document.getElementsByClassName("nemo")[0].style.top=userTop + "px";
//   document.getElementsByClassName("nemo")[0].style.left=userLeft + "px";
//   document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
//   document.getElementById("music").play();
//
// }
// function swimray (){
//   userTop= getPosition();
//   userLeft=getPosition();
//   document.getElementsByClassName("stingray")[0].style.top=userTop + "px";
//   document.getElementsByClassName("stingray")[0].style.left=userLeft + "px";
//   document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
//   document.getElementById("music").play();
//
// }
// function sharkswim (){
//   userTop= getPosition();
//   userLeft=getPosition();
//   document.getElementsByClassName("shark")[0].style.top=userTop + "px";
//   document.getElementsByClassName("shark")[0].style.left=userLeft + "px";
//   document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
//   document.getElementById("music").play();
//
// }
$(".dory").on("click", function() {
userTop = Math.random ()*500;
userLeft= Math.random ()*500;
$(this).css("top", userTop);
$(this).css("left", userLeft);
document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
document.getElementById("music").play();
});

$(".nemo").on("click", function() {
userTop = Math.random ()*500;
userLeft= Math.random ()*500;
$(this).css("top", userTop);
$(this).css("left", userLeft);
document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
document.getElementById("music").play();
});

$(".stingray").on("click", function() {
userTop = Math.random ()*500;
userLeft= Math.random ()*500;
$(this).css("top", userTop);
$(this).css("left", userLeft);
document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
document.getElementById("music").play();
});

$(".shark").on("click", function() {
userTop = Math.random ()*500;
userLeft= Math.random ()*500;
$(this).css("top", userTop);
$(this).css("left", userLeft);
document.getElementById("music").src="http://www.wavlist.com/soundfx/023/water-flowing3.wav";
document.getElementById("music").play();
});
