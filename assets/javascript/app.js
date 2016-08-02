var audio = new Audio('"https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90"');
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var score = 0;
var pos = 0
var test, test_status, question, choice, chA, chB, chC,chD; 
var seconds, temp;
var number = 120;
var choices = [];

var questions = [
	["According to the 'Huffington Post', what can I guy do without?", "Black Umbrella", "Desert Boots","Bermuda shorts", "Converse sneakers","C"],
	["According to the 'Huffington Post', what can I guy do without?","Navy Suit", "Gray Sport Coat","Dark Wool Jacket","Trench Coat","D"],
	["According to GQ, what can I guy do without?","Black Dress Pants","Oxford Shirt","Bomber Jacket","White Sneakers","A"],
	["According to 'The Elite Daily', of the traits that women want in a man, what is not included?", "Sense of Humor", "Brains", "Sex Appeal", "Good Listener","C"],
	["What was the first year Corvette introduced the Sting Ray?", "1969", "1961","1965","1963","D"]
	];

$(document).ready(function(){
    	console.log( "ready!" );

	$("#Start").click(function() {
	alert("Ready,Set,Go!");
	$("#Start").hide("slow");
	timerBegin(); // warning time running out
	run(); // countdown timer
	//$("#Start").show("slow"); idea is idStart hides & .showTimer takes its space
	$(".showTimer").html('number');
	renderQuestion();


	});

	function reset() {
		correct = 0;
		incorrect = 0;
		noAnswer = 0;
		pos = 0;
		number = 120;
		$("#Start").show();// if using same button for :timer & done, ???
		$("#Start").html("Start");
	}
// timer section 
function timerBegin () { // combine timerBegin tenleftSeconds in run function -& kill totalSeconds 
setTimeout(tenleftSeconds,1000*110);//Hw easy full time 120sec.

setTimeout(totalSeconds,1000*120);//Hw easy full time 120sec.
}
function tenleftSeconds(){
	$("timeRem").html("10 Seconds Left!");
	$(".showTimer").html("10 " +"seconds");//
	alert("10 seconds left");
}

function totalSeconds() {
	//audio.play();
	
	alert("Time is Up");
	console.log('done');
}

	//time remaining
	function run(){  //run(); - this will happen on #Start.on (click, run check syntax)
            counter = setInterval(decrement, 1000);
        }

        function decrement(){
            number--;
            $('.showTimer').html('<h2>' + number + '</h2>');
            if (number === 0){
                stop();
                $("#timeRem").html("Time/'s Up!")
                alert('Your time is up!')
            }
        }

        function stop(){
            clearInterval(counter);
            reset();
        }

        //Populating question form
    //function
   	function renderQuestion() {
   		if(pos >= questions.length){
   			$("#testStatus").html = "<h2> You got '+correct+' of '+questions.length+'  questions correct </h2>";
   			$("#testStatus").html = "Test Completed";
   			reset();
   			return false;
   		}
		//test = ('test'); //populate questions 1 thru 5
		$("#testStatus").html = ("Question" + (pos+1) +"  of  " + questions.length);
		question = questions [pos] [0]; // actual question
		chA = questions [pos] [1];			// choice one etc.
		chB = questions [pos] [2]; 
		chC = questions [pos] [3];
		chD = questions [pos] [4];
		$("#textInput").html = "<h2>'+question +'<h2>";
		$("#textInput").html += "<input type ='radio' name = 'choices'  value = 'A'> '+chA+' <br>";
		$("#textInput").html += "<input type = 'radio' name = 'choices' value = 'B'> '+chB+' <br>";
		$("#textInput").html += "<input type = 'radio' name = 'choices' value = 'C'> '+chC+' <br>";
		$("#textInput").html += "<input type = 'radio' name = 'choices' value = 'D'> '+chD+' <br><br>";
		$("#textInput").html += "<button onclick="checkAnswer()">Submit Answer</button>";
		}
		
	function checkAnswer(){
		choices = document.getElementByName('choices'); //creating array with 4 items
		for(var i=0; i<choices.length; i++){
			if(choices [i].checked){
				choice = choices[i].value;		
			}
		}
		if (choice === questions [pos] [5]){
			correct ++; // could add sound audio() or image flash
			}
		else if {
			(choice !== questions [pos] [5])
				incorrect ++
			}
		else {
			unanswered ++
			}
		}
			pos ++;
			renderQuestion();
   
}); //end of document.ready

	/*Question section
	
	// following only half relevant if doing Easy hw

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
			$("textInput").html("<h3> "Unanswered: "+ (noAnswer)</h3><br>" );*/

// lager, ale, pilsner, bock
// sports
//cars engines
//what was the first yer the corvette became a stingray
// 1969 Indianopis pace car - mustanf, camaro, corvette baracuda
// what are the only twpo days that there are no professional spors being played - day before and day after allstar game
//what is commonly known as a gordy howe hat trick - goal, assist fight misconduct penalty
// price is right fail tune 
// last days of our lives
// in golf which of these clubs has the least loft: pitching wedge, sand wedge, lob wedge and gap wedge, answer pitching
//  Which film brought a 1981 Oscar for Robert De Niro?

//A Raging Bull B Taxi Driver C The Deer Hunter D The King of Comedy