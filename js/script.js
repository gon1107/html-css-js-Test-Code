
const watch = document.querySelector('#watch');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop'); 
const reset = document.querySelector('#reset');


window.onload = function(){
	
}


var ms = 0;
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
	ms = ms + 10;
	if (ms >= 1000) {
		ms = 0;
		sec++;
		if (sec >= 60) {
			sec = 0;
			min++;
			if (min >= 60) {
				min = 0;
				hrs++;
			}
		}
	}
}
function add() {
    tick();
    watch.textContent = (hrs > 9 ? hrs : "0" + hrs)
			+ ":" + (min > 9 ? min : "0" + min)
       		+ ":" + (sec > 9 ? sec : "0" + sec)
			+ ":" + (ms > 90 ? ms/10 : "0" + ms/10);
    timer();
}
function timer() {
    t = setTimeout(add, 10);
}

//timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    watch.textContent = "00:00:00:00";
    ms = 0; sec = 0; min = 0; hrs = 0;
}