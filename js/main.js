$(document).ready(function(){
//Global variabes
	var squares = 16;
	var side;
	var i;
	var measure;
	var option = 1;
	var currentOpacity = 0.1;
	//build the container
	$("#container").css({
		"width":"500px",
		"height":"500px",
		"margin":"auto", 
	});

	start(option)

	//Select the desired option
	$("#normalButton").click(function(){
		option = 1;
		start(option);
	});
	$("#rgbButton").click(function(){
		option = 2;
		start(option);
	});
	$("#transparentButton").click(function(){
		option = 3;
		start(option);
	});
	$("#trailButton").click(function(){
		option = 4;
		start(option);
	});

	//create the grid
	function start(option){
		$(".square").remove();
		side = prompt("How many squares per side in the new grid?");
		if (side > 100) {
			side = prompt("A number smaller than 100, please.");
		}
		squares = side * side;
		i = 0;
		while(i < squares){
			$("#container").append("<div class='square'></div>");
			i++
		};
		measuare = 500 / side;
		$(".square").css({
			"border": "1px solid black",
			"width":measuare+'px',
			"height":measuare+'px',
			"float":"left",
			"box-sizing": "border-box",
			"background-color": "red"
		});
		//Choose different grid
		$(".square").mouseover(function(){
			switch(option){
				//Grid normal
				case 1: 
						$(this).css({"background-color": "blue"});
						$(this).mouseout(function(){
							$(this).css({"background-color": "red"});
						});
				break;
				//Grid random colored
				case 2:
						$(this).css({
							"background-color": "rgb("+random()+", "+random()+", "+random()+")"
						});
				break;
				//Change the opacity 
				case 3:
						currentOpacity = $(this).css('opacity');
						if (currentOpacity > 0) {
							$(this).css("opacity",currentOpacity - 0.1);
						}
						
				break;
				//Build trial
				case 4:
						$(this).fadeTo(100,0);
						$(this).mouseleave(function(){
							$(this).fadeTo(400,1);
						});
				break;
			}
		});
	}
	function random(){
		return Math.floor((Math.random() * 255))
	}
});