//check for the wins across
var checkRowWin = function(class_name) {
//check for the wins across
var $row = $(class_name);
length = $row.length; // can you just hard code this to 3?

// if the first two are the same...
if ($row[0].innerHTML === $row[1].innerHTML){
	// check if the next two are the same
	if ($row[1].innerHTML === $row[2].innerHTML){
		alert("YOU WIN");
		// reset the game after a win/loss
		location.reload();
		};
	};
};

//check for the wins down
var checkColWin = function(class_name) {
	//check for the wins across
	var $col = $(class_name);
	length = $col.length; // can you just hard code this to 3?

	// if the first two are the same...
	if ($col[0].innerHTML === $col[1].innerHTML){
		// check if the next two are the same
		if ($col[1].innerHTML === $col[2].innerHTML){
			alert("YOU WIN");
			// reset the game after a win/loss
			location.reload();
		};
	};
};

//check for the diagnol win 
var diagnolWin = function() {
	// do NOT like that i hard coded all these vars
	var $middle = $(".b.2");
	var $topLeft = $(".a.1");
	var $topRight = $(".a.3");

	var $bottomLeft = $(".c.1");
	var $bottomRight = $(".c.3");

	console.log($middle[0].innerHTML);
	console.log($topLeft[0].innerHTML);

	// if middle matches the top left or right corner
	if ($middle[0].innerHTML === $topLeft[0].innerHTML || $middle[0].innerHTML === $topRight[0].innerHTML){
		// check if the next two are the same
		if ($middle[0].innerHTML === $bottomLeft[0].innerHTML || $middle[0].innerHTML === $bottomRight[0].innerHTML){
			alert("YOU WIN");
			// reset the game after a win/loss
			location.reload();

			//////////// PROBLEM: this will also think a triangle is a win ///////////
		};
	};
};

//check for a draw
var checkDraw = function() {
	//check for the wins across
	var $boxes = $(".box");
	length = $boxes.length; 
	var i=0;

	while (i < length) {
		if ($boxes[i].innerHTML === "X" || $boxes[i].innerHTML === "O"){
			i++;
			// basically check if every box is full and no one has won yet
			if (i === 9){
				alert("GAME ENDS IN A DRAW");
				location.reload();
			}
		} else {
			return;
		};
	};
};


$(document).ready(function(){

var counter = 0;
$(".box").on("click", function(){
	if (counter %2 ==0){
		$(this).css({"background-color": "blue"});
		$(this).html("X");
		counter++;
	} else {
		$(this).css({"background-color": "green"});
		$(this).html("O");
		counter ++;
	}
});


var clickMid = 0;
// Get the id and value of the clicked box 
$(".box").on("click", function(){

	// get the clicked box
	var $this = event.target;

	// get the row from the class
	var $rowNum = $this.className;
	var $rowNum = $rowNum.slice(0,1);

	// get the col from the class
	var $colNum = $this.className;
	var $colNum = $colNum.split(' ')[1]; // I understand how this works but no idea why this works and slice does not ?!

	// sanity check
	console.log("row " + $rowNum);
	console.log("col " + $colNum);

	// check for the win on the changed row or col  
	checkRowWin("." + $rowNum);
	checkColWin("." + $colNum);

	// when we click on the middle box change this so we know it has been cliecked
	$(".b.2").on("click", function(){
		clickMid ++;
	});

	// if the middle has been clicked...check for the diagnol win 
	if (clickMid > 0) {
		diagnolWin();
	}

	// check to see if there is a draw
	checkDraw()

	});
});


