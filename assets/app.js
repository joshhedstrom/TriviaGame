$(document).ready(function() {

    function Question(q, one, two, three, four, correct) {
        this.q = q;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.correct = correct;
    };
    let Q1 = new Question("Madagascar is an island located off the southeast coast of what continent", "South America", "Asia", "Australia", "Africa", "Africa");
    let Q2 = new Question("What is the official language of Greenland?", "Greenlandic", "Danish", "English", "Aluu Inuugujoq Kutaa", "Greenlandic");
    let Q3 = new Question("In what country is the city of Turin?", "France", "Italy", "Switzerland", "Slovenia", "Italy");
    let Q4 = new Question("What is the capital city of Canada's Yukon territory?", "Whitehorse", "Calgary", "Edmonton", "Oxford", "Whitehorse");
    let Q5 = new Question("Macau is an autonomous territory belonging to which country?", "Phillipines", "China", "India", "Indonesia", "China");
    let Q6 = new Question("Which sea separates the East African coast and the Saudi Arabian peninsula?", "Red Sea", "Black Sea", "Mediterranean Sea", "Sea of Galilee", "Red Sea");
    let Q7 = new Question("What is the name for the monetary unit used in Thailand?", "Pesos", "Euro", "Yen", "Baht", "Baht");
    let Q8 = new Question("Hiragana, Katakana and Kanji are the names for writing systems used in which country?", "China", "Japan", "Taiwan", "India", "Japan");
    let Q9 = new Question("Chile shares the majority of its border with which other South American country?", "Brazil", "Peru", "Argentina", "Columbia", "Argentina");
    let Q10 = new Question("Alkebulan is the oldest indeginous name for which continent?", "South America", "North America", "Africa", "Australia", "Africa");
    let Q11 = new Question("Burkina Faso is a landlocked country located on which continent?", "Asia", "Australia", "Africa", "Europe", "Africa");
    let Q12 = new Question("What island state was formerly known by the name Formosa?", "Taiwan", "Madagascar", "Macau", "Phillipines", "Taiwan", );
    let Q13 = new Question("The Principality of Monaco is a sovereign city-state bordered on three sides by which country?", "Italy", "France", "Spain", "Greece", "France");
    let Q14 = new Question("Suriname is a country located on which continent?", "Africa", "North America", "South America", "Europe", "South America");
    let Q15 = new Question("Wellington is the capital city of which island nation?", "Australia", "Scotland", "Wales", "New Zealand", "New Zealand");
    let Q16 = new Question("Atlantic City is a popular entertainment destination located in what U.S. state?", "Virginia", "New Jersey", "North Carolina", "New York", "New Jersey");
    let Q17 = new Question("What city in Australia has the highest population?", "Sydney", "Melbourne", "Canberra", "Adelaide", "Sydney");
    let Q18 = new Question("The avocado is a tree that is thought to have originated in what country?", "Panama", "Brazil", "Mexico", "Bermuda", "Mexico");
    let Q19 = new Question("In what country would you find the temple complex Angkor Wat?", "Thailand", "Vietnam", "Burma", "Cambodia", "Cambodia");
    let Q20 = new Question("The Hoover Dam in the United States is built on what river?", "The Colorado River", "The Mississippi River", "The Nevada River", "The Missouri River", "The Colorado River");
    let Q21 = new Question("San Marino is a microstate in Europe completely surrounded by what country?", "France", "Italy", "Spain", "Greece", "Italy");
    let Q22 = new Question("What is the Easternmost point on the North American continent?", "Cape Columbia, Ellesmere Island", "East Point Lighthouse, Prince Edward Island", "Cape Spear, Newfoundland", "Lubec, Maine", "Cape Spear, Newfoundland");
    let Q23 = new Question("Formerly known as Bedloe's Island, what is the current name of the island where the Statue of Liberty is located?", "Liberty Island", "Elles Island", "New York Island", "Hoffman Island", "Liberty Island");
    let Q24 = new Question("Sardinia, the second largest island in the Mediterranean Sea, is an autonomous region of what country?", "Spain", "Tunisia", "Italy", "Greece", "Italy");
    let Q25 = new Question("Located in Northwestern Turkey, which strait separates Europe and Asia?", "Strait of Gibraltar", "English Channel", "Panama Canal", "Bosphorus Strait", "Bosphorus Strait");
    let Q26 = new Question("South Africa completely surrounds which other African nation?", "Namibia", "Lesotho", "Swaziland", "Mozambique", "Lesotho");
    let Q27 = new Question("Europe is separated from Asia by which mountain range?", "Ural Mountains", "Himalayan Mountains", "The Alps", "The Pyrenees Mountains", "Ural Mountains");
    let Q28 = new Question("Which of the great lakes does not share a border with Canada?", "Lake Michigan", "Lake Superior", "Lake Huron", "Lake Ontario", "Lake Michigan");
    let Q29 = new Question("What is the national language of India?", "Sanskrit", "Hindi", "Bengali", "English", "Hindi");
    let Q30 = new Question("What is the largest island in the Caribbean Sea?", "Jamaica", "Haiti", "Cuba", "Dominican Republic", "Cuba");

    let questionArray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30];
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let startTime;
    let currentQuestion;
    let timeSeconds;

    $("#start").on('click', function() {
        $("#gameElement").attr('style', 'display: block;');
        $("#start").attr('style', 'display: none;');
        $("#message").attr('style', 'display: none;');
        $("html,body").animate({
            scrollTop: document.body.scrollHeight
        }, "fast");
        startLoop();
    });

    $('.modal').modal({
        dismissible: false
    });

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

    function startLoop() {
        let seconds = 0
        timeSeconds = setInterval(timeLeft, 1000)

        function timeLeft() {
            $("#timeLeft").html("<h4>You have : " + (15 - seconds) + " seconds left</h4>");
            seconds++;
            if (seconds === 16) {
                wrongAnswers++;
                clearInterval(timeSeconds);
                reset();
                return;
            };
            return;
        }
        currentQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
        remove(currentQuestion)
        $("#wins").text("Correct: " + correctAnswers)
        $("#losses").text("Wrong: " + wrongAnswers)
        $("#question").text(currentQuestion.q)
        $("#answer1").text(currentQuestion.one)
        $("#answer2").text(currentQuestion.two)
        $("#answer3").text(currentQuestion.three)
        $("#answer4").text(currentQuestion.four)
    }

    function checkAnswer(answer) {
        if (answer === currentQuestion.correct) {
            correctAnswers++;
            $('#modalRight').modal('open');
            $('#timeLeft').attr('style', 'display: none;');
            clearInterval(timeSeconds);
            return;
        } else if (answer !== currentQuestion.correct) {
            wrongAnswers++;
            $('#rightAnswer').text(currentQuestion.correct);
            $('#modalWrong').modal('open');
            $('#timeLeft').attr('style', 'display: none;');
            clearInterval(timeSeconds);
            return;
        }
        return;
    }
    $('.modal-close').on('click', function() {
        restart()
    });

    function restart() {
        clearInterval(timeSeconds)
        reset();
        $('#timeLeft').attr('style', 'display: block;');
    }

    function remove(element) {
        const index = questionArray.indexOf(element);
        questionArray.splice(index, 1);
    }

    function reset() {
        if (questionArray == 0) {
            clearInterval(timeSeconds);
            $("#gameElement").attr('style', 'display: none;');
            $("#question").attr('style', 'display: none;');
            $('#tally').attr('style', 'display: none;');
            $("#message").attr('style', 'display: block;');
            $("#message").html("<h4>You finished! You answered " + correctAnswers + " correctly and " + wrongAnswers + " incorrectly. \n Thanks for playing!</h4>")
        } else {
            startLoop();
        }
    }
});