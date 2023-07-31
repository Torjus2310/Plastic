let bottle = document.querySelector('.bottle');
let textIn = document.querySelector('.textIn');
let textIn2 = document.querySelector('.textIn2');
let green = document.querySelector('.green');

/*
 *	Set bottle sprite by scroll position
 */
window.addEventListener('scroll', (event) => {
	

	let bottleTop = bottle.getBoundingClientRect().top;
	let yBreakPoint1 = textIn.getBoundingClientRect().top - 250;
	let yBreakPoint2 = textIn.getBoundingClientRect().top - 50;
	let yBreakPoint3 = textIn.getBoundingClientRect().top + 150;
	let yBreakPoint4 = textIn.getBoundingClientRect().top + 350;
	let yBreakPoint5 = textIn2.getBoundingClientRect().top - 100;
	let yBreakPoint6 = textIn2.getBoundingClientRect().top + 100;
	let yBreakPoint7 = textIn2.getBoundingClientRect().top + 250;
	let yBreakPoint8 = textIn2.getBoundingClientRect().top + 400;

	let frame;
	if (bottleTop < yBreakPoint1) frame = 0;
	if (bottleTop > yBreakPoint1) frame = 1;
	if (bottleTop > yBreakPoint2) frame = 2;
	if (bottleTop > yBreakPoint3) frame = 3;
	if (bottleTop > yBreakPoint4) frame = 4;
	if (bottleTop > yBreakPoint5) frame = 5;
	if (bottleTop > yBreakPoint6) frame = 6;
	if (bottleTop > yBreakPoint7) frame = 7;
	if (bottleTop > yBreakPoint8) frame = 8;

	bottle.style.cssText = "background-position-x: calc(" + frame + " * -310px);";
});

/*
 * Animate bottle container element
 */
let xCounter = 0;
let yCounter = 0;
let rCounter = 0;

(function draw() {
	xCounter += 0.02;
	yCounter += 0.01;
	rCounter += 0.005;
	let xPos = Math.sin(xCounter) * 30;
	let yPos = Math.sin(yCounter) * 25;
	let rot = Math.sin(rCounter) * 10;
	bottle.style.cssText += "transform: scale(0.6) translate("+ xPos +"px, "+ yPos +"px) rotate("+ rot +"deg);";

	window.requestAnimationFrame(draw);
}());

/*
 * Fade-in active elements
 */

//let mobile = window.matchMedia("(min-width: 500px)")


let bottleHeight = 1025
window.addEventListener('scroll', () => {
	if (window.scrollY > bottleHeight) {
		textIn2.classList.add('fade-in-element')
    }
    if(innerWidth < 500) {
        bottleHeight = 500
    }
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 1900) {
		green.classList.add('greenFill')
	}
});

let bottleOpacity = 2200
window.addEventListener('scroll', () => {
	if (window.scrollY > bottleOpacity) {
		bottle.style.cssText = "opacity:0;";
    }
    
    if(innerWidth < 500) {
       let = bottleOpacity = 1200
    }
});



window.addEventListener('scroll', () => {
        if (window.scrollY > 257) {
            textIn.classList.add('fade-in-element')

            } 
    });



    







