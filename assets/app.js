$(document).ready(function() {
    let Q1 = {
        q: "what is the answer to this question?",
        a1: "wrong guess 1",
        a2: "wrong guess 2",
        a3: "wrong guess 3",
        a4: "right guess",
        correct: "wrong guess 1",
    };
    let Q2 = {
        q: "2what is the answer to this question?",
        a1: "2wrong guess 1",
        a2: "2wrong guess 2",
        a3: "2wrong guess 3",
        a4: "2right guess",
        correct: "2wrong guess 1",
    };
    let Q3 = {
        q: "3what is the answer to this question?",
        a1: "3wrong guess 1",
        a2: "3wrong guess 2",
        a3: "3wrong guess 3",
        a4: "3right guess",
        correct: "3wrong guess 1",
    };
    let Q4 = {
        q: "4what is the answer to this question?",
        a1: "4wrong guess 1",
        a2: "4wrong guess 2",
        a3: "4wrong guess 3",
        a4: "4right guess",
        correct: "4wrong guess 1",
    };

    let questionArray = [Q1, Q2, Q3, Q4];
    let currentQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
    let qAnswered = false;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    // console.log(currentQuestion);

    function questionLoop (argument) {
    	$("#message").text("here is your first question / how much time you have left")
    	$("#question").text(currentQuestion.q)
    	$("#answer1").text(currentQuestion.a1)
    	$("#answer2").text(currentQuestion.a2)
    	$("#answer3").text(currentQuestion.a3)
    	$("#answer4").text(currentQuestion.a4)

    	$("#aBtn1").on('click', function() {
    		if (questionArray.a1 === questionArray.correct) {
                correctAnswers++;
    			//reset time
                //new question
                //remove question from array
    		}
            else if (questionArray.a1 !===questionArray.correct) {
                wrongAnswers++;
                //reset time
                //new question
                //remove question from array

            }

    	});
    }

   window.setTimeout(timeoutLoop, 10000)

   function timeoutLoop() {
        wrongAnswers++;
        questionLoop();
        //reset time
        //start time again

       
   }


});