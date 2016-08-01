var audio = new Audio('"https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90"');
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var score = 0;
var test, test_status, question, choice, choices, chA, chB, chC,chD 



var questions = [
	["According to the 'Huffington Post', what can I guy do without?", "Black Umbrella", "Desert Boots","Bermuda shorts", "Converse sneakers","C"],
	["According to the 'Huffington Post', what can I guy do without?","Navy Suit", "Gray Sport Coat","Dark Wool Jacket","Trench Coat","D"],
	["According to GQ, what can I guy do without?","Black Dress Pants","Oxford Shirt","Bomber Jacket","White Sneakers","A"],
	["According to 'The Elite Daily', of the traits that women want in a man, what is not included?", "Sense of Humor", "Brains", "Sex Appeal", "Good Listener","C"]
	];

$(document).ready(function(){
    	console.log( "ready!" );

// remember to use $("#Start").show() on reset;
	$("#Start").click(function() {
	alert("Ready,Set,Go!");
	$("#Start").hide("slow");
	timerBegin();

	});

	function Reset() {
		correct = 0;
		incorrect = 0;
		noAnswer = 0;
		$("#Start").show();
	}
// timer section 
function timerBegin () {
setTimeout(twentySeconds,1000*20);

setTimeout(thirtySeconds,1000*30);
}
function twentySeconds(){
	$("timeRem").html("10 Seconds Left!");
	$("#timer").html(10);
	alert("10 seconds left");
}

function thirtySeconds() {
	audio.play();
	$("#timeRem").html("Time/'s Up!")
	alert("Time is Up");
	console.log('done');
}

	//Question section
	function (x){
		return document.getElementById('x');
	}
	// following only half relevant if doing Easy hw
	function renderQuestion() {
		test = ('test');
		// question 1 of 4
		x$("test_status").html = question "+ (pos+1)+" + "of" + questions.length; }
	
		question = questions [pos] [0]; // actual question
		chA = questions [pos] [1];			// choice one etc.
		chB = questions [pos] [2];
		chC = questions [pos] [3];
		chD = questions [pos] [4];
		$("question").html = <h2>"+question +"<h2>;
		$("textInput").html += <input type = 'radio' name = 'choices' //+= append?
		/* need help here - 
		value"A">"+chA"<br>...
		value"B">
		value"C">*/
	function checkAnswer() {
		choices = document.getElementByName('choices');
		for(var i=0; i<choices.length; i++){
			if(choices [i].checked){
				choice = choices[i].value;		
			}
			if choice === questions [pos] [4]{
			correct ++;
			}
			else if {
			choice !== questions [pos] [4]
				incorrect ++
			}
			else {
			unanswered ++
			}
		}
			pos ++;
			renderQuestion();
		}

		function resultPage(){
			$("#question").html("<h1> Test Completed </h1>")
			$("textInput").html("<h3> "correct Answers: "+ (correct)</h3><br>" );
			$("textInput").html("<h3> "Incorrect Answers: "+ (incorrect)</h3><br>" );
			$("textInput").html("<h3> "Unanswered: "+ (noAnswer)</h3><br>" );

		}
	}

