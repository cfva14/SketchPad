$(document).ready(function(){

	var squares = 16;
	var side;
	var i = 0;
	var measure;

	$("#container").css({
		"width":"500px",
		"height":"500px",
		"margin":"auto", 
	});

	$("#clear").css({
		"margin":"auto", 
	});

	while(i < 16){
		$("#container").append("<div></div>");
		i++;
    }

    $("div div").css({
		"border": "1px solid black",
		"width":"125px",
		"height":"125px",
		"float":"left",
		"box-sizing": "border-box"
	});

	$("div div").mouseover(function(){
		$(this).css({
			"background-color": "red",
		});
	});

	$("div div").mouseout(function(){
		$(this).css({
			"background-color": "white",
		});
	});
	




	$("#clear").click(function(){
		side = prompt("How many squares per side in the new grid?");
		$("div div").remove();
		squares = side * side;
		var j = 0;
		while(j < squares){
			$("#container").append("<div></div>");
			j++
			console.log("Contando");
		};
		measuare = 500 / side;
		$("div div").css({
		"border": "1px solid black",
		"width":measuare+'px',
		"height":measuare+'px',
		"float":"left",
		"box-sizing": "border-box"
	});

		$("div div").mouseover(function(){
		$(this).css({
			"background-color": "red",
		});
	});

	$("div div").mouseout(function(){
		$(this).css({
			"background-color": "white",
		});
	});
	})

});
