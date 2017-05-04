var num = 6;
var colors = [];
var pickedColor;


var circles = document.querySelectorAll(".circles");
var message = document.querySelector("#message");
var selected = document.getElementById("selected");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var hardButton = document.getElementsByClassName("hard");


reset();
initialize();
setUp();


//Reset Button
resetButton.addEventListener("click", function(){
	reset();
});



//sets up the circles and colors. And, the game logic
function setUp(){
	for (var i = 0; i < circles.length; i++){
		circles[i].style.background = colors[i];
		circles[i].addEventListener('click', function(){
			var clickedColor = this.style.background;

			if(clickedColor === pickedColor){
				message.textContent = "Correct";
				changeColors(pickedColor);
				document.getElementById("title").style.background = pickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.background = "#232323";
				message.textContent = "Try again?"
			};
		});
	};
};


//Button set up
function initialize(){
	hardButton[0].classList.add("button");
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener('click', function(){
			modeButton[0].classList.remove("button");
			modeButton[1].classList.remove("button");
			this.classList.add("button");
			this.textContent === "Easy" ? num = 3: num = 6;
			reset();
		});
	};
};



//Reset
function reset(){
	message.textContent = "";
	resetButton.textContent = "New Colors";
	document.querySelector("#title").style.background = "steelblue";
	colors = generateColor(num);
	pickedColor = colors[randomNumber()];
	selected.textContent = pickedColor;

	for( var i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.display = 'block'
			circles[i].style.background = colors[i];
		} else {
			circles[i].style.display = 'none';
		};
	};
};




//Change background color of the circles
	function changeColors(color){
		for(var i = 0; i < circles.length; i++){
		circles[i].style.background = color;
		};
	};



//Generates a random number
	function randomNumber(){
		return Math.floor(Math.random() * colors.length);
	};



//Generates array of Colors
	function generateColor(num){
		var colors = [];
		for (var i = 0; i < num; i++){
			colors.push(randomColor());
		};
		return colors;
	};



//Generates one Color
	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = "rgb(" + r + ", " + g + ", " + b + ")"
		return color;
	}