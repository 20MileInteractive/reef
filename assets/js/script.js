$(document).ready(function(){
 
 var imgArr = new Array( // relative paths of images
 'assets/images/hero2x.jpg',
 'assets/images/Dennis-Custom-Cape-front-approach.jpg',
 'assets/images/Orleans-Custom-Cape-fireplace-mantle-detail.jpg'
 );
 
 var preloadArr = new Array();
 var i;
 
 /* preload images */
 for(i=0; i < imgArr.length; i++){
 preloadArr[i] = new Image();
 preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 1;
 var intID = setInterval(changeImg, 6000);
 
 /* image rotator */
 function changeImg(){
 $('#hero').animate({opacity: 0}, 1000, function(){
 $(this).css('background-image','url(' + preloadArr[currImg++%preloadArr.length].src +')');
 }).animate({opacity: 1}, 1000);
 }
 
 });