$(document).ready(function() {
    let Q1 = {
        q: "what is the answer to this question?",
        one: "wrong guess 1",
        two: "wrong guess 2",
        three: "wrong guess 3",
        four: "right guess",
        correct: "wrong guess 1",
    };
    let Q2 = {
        q: "2what is the answer to this question?",
        one: "2wrong guess 1",
        two: "2wrong guess 2",
        three: "2wrong guess 3",
        four: "2right guess",
        correct: "2wrong guess 1",
    };
    let Q3 = {
        q: "3what is the answer to this question?",
        one: "3wrong guess 1",
        two: "3wrong guess 2",
        three: "3wrong guess 3",
        four: "3right guess",
        correct: "3wrong guess 1",
    };
    let Q4 = {
        q: "4what is the answer to this question?",
        one: "4wrong guess 1",
        two: "4wrong guess 2",
        three: "4wrong guess 3",
        four: "4right guess",
        correct: "4wrong guess 1",
    };

    let questionArray = [Q1, Q2, Q3, Q4];
    let qAnswered = false;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let startTime;
    // console.log(currentQuestion);
    let currentQuestion;


    $("#aBtn1").click(function() {
        checkAnswer(currentQuestion.one)
    });
    $("#aBtn2").click(function() {
        checkAnswer(currentQuestion.two)
    });
    $("#aBtn3").click(function() {
        checkAnswer(currentQuestion.three)
    });
    $("#aBtn4").click(function() {
        checkAnswer(currentQuestion.four)
    });

    function questionLoop() {

    }


    function startLoop() {
        let currentQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
        $("#message").text("here is your first question / how much time you have left")
        $("#question").text(currentQuestion.q)
        $("#answer1").text(currentQuestion.one)
        $("#answer2").text(currentQuestion.two)
        $("#answer3").text(currentQuestion.three)
        $("#answer4").text(currentQuestion.four)
        return currentQuestion;
    }

    function checkAnswer(element) {
        if (element === currentQuestion.correct) {
            correctAnswers++;
            console.log("correct answers: " + correctAnswers)
                // clearTimeout(startTime);
            remove(currentQuestion)
            console.log(questionArray.length)
            startLoop()
        } else if (element !== currentQuestion.correct) {
            wrongAnswers++;
            console.log("wrong answers: " + wrongAnswers)
                // clearTimeout(startTime);
            remove(currentQuestion)
                startLoop()
        }
    }

    //  function startLoop () {
    // let startTime = setTimeout(timeoutLoop, 10000){       
    // } 
    //  }


    // function timeoutLoop() {
    //      wrongAnswers++;
    //      clearTimeout(startTime);
    //      questionLoop();
    //      //start time again
    // }

    function remove(element) {
        const index = questionArray.indexOf(element);
        questionArray.splice(index, 1);
    }

    $("#start").on('click', function() {
        startLoop();
        // questionLoop();
    });

});