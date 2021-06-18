var wide;
var long;

// Prompt the user for a a width and a height.
// It will ask repeatedly, until a valid input is received.
// Sorry, there is no getting out of it, save for closing the page.
function getSizes() {
	do{
		wide = parseInt(prompt("How wide a bar do you want?"));
	}while(isNaN(wide) || wide<=0)
	do{
		long = parseInt(prompt("How many rows of chocolate do you want?"));
	}while(isNaN(long) || long<=0)
};
// Multiply the number of square times the size of each square
// The calculated size includes the border and margin
// 2px is then removed from the total, to remove the first and last margin.
function barSize() {
	var barWidth = (wide*60) - 2;
	var barHeight = (long*60) - 2;
	$("#bar").css("width", barWidth);
	$("#bar").css("height", barHeight);
};

// Create the divs for the bar, according to size
function createBar() {
	for (var i = 0; i < long; i++) {
		$("#bar").append('<div class="row"></div>');
	};
};
function createRow() {
	for (var i = 0; i < wide; i++) {
		$(".row").append('<div class="choco-bar"></div>');
	};
};

// Add the toggle-click function
function eat() {
	$(".choco-bar").on("click", function() {
		$(this).toggleClass("eaten");
	});
};

$(document).ready(function(){
	getSizes();
	barSize();
	createBar();
	createRow();
	eat();
});