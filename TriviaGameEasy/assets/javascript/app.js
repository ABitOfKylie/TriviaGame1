function submitAnswers(){
	var total = 10;
	var score = 0; 
	var incorrect = total - score;
	var q1 = document.forms["quizForm"] ["q1"].value;
	var q2 = document.forms["quizForm"] ["q2"].value;
	var q3 = document.forms["quizForm"] ["q3"].value;
	var q4 = document.forms["quizForm"] ["q4"].value;
	var q5 = document.forms["quizForm"] ["q5"].value;
	var q6 = document.forms["quizForm"] ["q6"].value;
	var q7 = document.forms["quizForm"] ["q7"].value;
	var q8 = document.forms["quizForm"] ["q8"].value;
	var q9 = document.forms["quizForm"] ["q9"].value;
	var q10 = document.forms["quizForm"] ["q10"].value;
	console.log(q1);

	alert("q1");	
	//ensure user answer .. eval evaluates a string
	for(var i = 1; i<=total; i++){
		if (eval ('q' + i ) == null || eval ('q' +i) == " ") {
			alert ("You missed question " + i);
			return false;
		}
	}
// Correct Answers
 	var answers = [c, d, a, c, d, b, c, a, b, a];
 // Check Answers
 	for(var i = 1; i<=total; i++){
 		if (eval ('q' +i) === answers[i - 1] ){
 			score++;
 		}
	} // Final Answers
	var testStatus = document.getElementById('testStatus');
	testStatus.innerHTML = "You scored <span> "+score+"</span> out of <span> "+total+"</span>"
	alert("You scored " + score + "/ " +total);
	return false;
}

// once the above code is working, add in js/jq timer functions. then test renderQuestion/checkAnswer functions.
/*$(document).ready(function(){
    	console.log( "ready!" );

	$("#Start").click(function() {
	alert("Ready,Set,Go!");
	$("#Start").hide("slow");
	
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
		$("#textInput").hide();
	}

	function totalSeconds() {
		audio.play();
	}

	//time remaining
	function run(){  //run(); - this will happen on #Start.on (click, run check syntax)
            counter = setInterval(decrement, 1000);
            setTimeout(totalSeconds,1000*120);
            /*setTimeout(totalSeconds,1000*120); // added 66-68. may have to delete
            function totalSeconds(){
            	audio.play();
            }
            
        }

        function decrement(){
            number--;
            $('.showTimer').html('<h2>' + number + '</h2>');
            $("#Start").show(300);// if using same button for :timer & done, ???
			$("#Start").html('<h2>' + number + '</h2>');
            if (number === 0){
                stop();
                $("#timeRem").html("Time's Up!");
                alert('Your time is up!');
            } else if (number == 10) {

            }
        }

        function stop(){
            clearInterval(counter);
            reset();
        }

        //Populating question form
    //function
   	function renderQuestion() {
   		if(pos >= questions.length){  // resultPage()
   			$("#testStatus").html ("<h2> You got '+correct+' of '+questions.length+'  questions correct </h2>");
   			$("#testStatus").html ( "Test Completed");
   			reset(); // not reset, resultPage then timeOut then reset
   			return false;
   		}
   	
		//test = ('test'); //populate questions 1 thru 5
		$("#testStatus").text ("Question + (pos +1) ' /  '+ questions.length");
		question = questions [pos] [0]; // actual question
		chA = questions [pos] [1];			// choice one etc.
		chB = questions [pos] [2]; 
		chC = questions [pos] [3];
		chD = questions [pos] [4];
		pic = questions [pos] [5];
		$("#textInput").show(300);
		$("#textInput").html("<h2>"+question +"<h2>");
		$("#textInput").append("<input type ='radio' name = 'choices'  value = 'A'>" +chA+ "<br>");
		$("#textInput").append ("<input type = 'radio' name = 'choices' value = 'B'>"+chB+ "<br>");
		$("#textInput").append ("<input type = 'radio' name = 'choices' value = 'C'>" +chC+ "<br>");
		$("#textInput").append ("<input type = 'radio' name = 'choices' value = 'D'>" +chD+ "<br><br>");
		$("#textInput").append ("<button class='submit' onclick='checkAnswer()'>Submit</button>");
		//$("#textInput").append (+pic+);
	}	
		
		
	function checkAnswer(){
		choices = document.getElementByName('choices'); //creating array with 4 items
		for(var i=0; i<choices.length; i++){
			if(choices [i].checked){
				choice = choices[i].value;		
			}
		}
		if (choice === questions [pos] [5] && pos>=6){
			correct ++; // could add sound audio() or image flash
			pos ++;
			renderQuestion();
			}
		else if 
			(choice !== questions [pos] [5]);{
				incorrect ++
				pos ++;
				renderQuestion();
			}
			
			/*renderQuestion();
			$(".submit").click(renderQuestion);
			setTimeout(renderQuestion,10000);
   
	}

		/*function resultPage(){
			$("#testStatus").html("<h2> Test Completed </h2>")
			$("#Start").fadeOut("slow");// if using same button for :timer & done, ???
			$("#Start").html('Ta Dah!');
			$("#Start").fadeIn("slow");
			$("#textInput").append("Correct: " + correct + <br>);
			$("textInput").append("<h3> "correct Answers: "+ (correct)</h3><br>" );
			$("textInput").append("<h3> "Incorrect Answers: "+ (incorrect)</h3><br>" );
			$("textInput").append("<h3> "Unanswered: "+ (noAnswer)</h3><br>" );
			audio.play();
			setTimeout(reset, 5000);
		}
	}); //end of document.ready*/

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