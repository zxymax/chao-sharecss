window.animateFrame = (function(){
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback){
					window.setTimeout(callback, timer)
				}
})()
	let left = 0, flag = false;
function getAnimation(start, end){
	let Ele = document.getElementById('spn');


	left == start ? flag = false : left == end ? flag = true : '';
	flag ? Ele.style.left = `${left--}px` : Ele.style.left = `${left++}px`; 
}

(function animloop(){
			getAnimation(10, 100);
			animateFrame(animloop, 1000/60)
})()