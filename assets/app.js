$(document).ready(function() {
    let Q1 = {
        q: "Madagascar is an island located off the southeast coast of what continent",
        one: "South America",
        two: "Asia",
        three: "Australia",
        four: "Africa",
        correct: "Africa",
    };
    let Q2 = {
        q: "What is the official language of Greenland?",
        one: "Greenlandic",
        two: "Danish",
        three: "English",
        four: "Aluu Inuugujoq Kutaa",
        correct: "Greenlandic",
    };
    let Q3 = {
        q: "In what country is the city of Turin?",
        one: "France",
        two: "Italy",
        three: "Switzerland",
        four: "Slovenia",
        correct: "Italy",
    };
    let Q4 = {
        q: "What is the capital city of Canada's Yukon territory?",
        one: "Whitehorse",
        two: "Calgary",
        three: "Edmonton",
        four: "Oxford",
        correct: "Whitehorse",
    };
    let Q5 = {
        q: "Macau is an autonomous territory belonging to which country?",
        one: "Phillipines",
        two: "China",
        three: "India",
        four: "Indonesia",
        correct: "China",
    };
    let Q6 = {
        q: "Which sea separates the East African coast and the Saudi Arabian peninsula?",
        one: "Red Sea",
        two: "Black Sea",
        three: "Mediterranean Sea",
        four: "Sea of Galilee",
        correct: "Red Sea",
    };
    let Q7 = {
        q: "What is the name for the monetary unit used in Thailand?",
        one: "Pesos",
        two: "Euro",
        three: "Yen",
        four: "Baht",
        correct: "Baht",
    };
    let Q8 = {
        q: "Hiragana, Katakana and Kanji are the names for writing systems used in which country?",
        one: "China",
        two: "Japan",
        three: "Taiwan",
        four: "India",
        correct: "Japan",
    };
    let Q9 = {
        q: "Chile shares the majority of its border with which other South American country?",
        one: "Brazil",
        two: "Peru",
        three: "Argentina",
        four: "Columbia",
        correct: "Argentina",
    };
    let Q10 = {
        q: "Alkebulan is the oldest indeginous name for which continent?",
        one: "South America",
        two: "North America",
        three: "Africa",
        four: "Australia",
        correct: "Africa",
    };
    let Q11 = {
        q: "Burkina Faso is a landlocked country located on which continent?",
        one: "Asia",
        two: "Australia",
        three: "Africa",
        four: "Europe",
        correct: "Africa",
    };
    let Q12 = {
        q: "What island state was formerly known by the name Formosa?",
        one: "Taiwan",
        two: "Macau",
        three: "Phillipines",
        four: "Madagascar",
        correct: "Taiwan",
    };
    let Q13 = {
        q: "The Principality of Monaco is a sovereign city-state bordered on three sides by which country?",
        one: "Italy",
        two: "France",
        three: "Spain",
        four: "Greece",
        correct: "France",
    };
    let Q14 = {
        q: "Suriname is a country located on which continent?",
        one: "Africa",
        two: "North America",
        three: "South America",
        four: "Europe",
        correct: "South America",
    };
    let Q15 = {
        q: "Wellington is the capital city of which island nation?",
        one: "Australia",
        two: "Scotland",
        three: "Wales",
        four: "New Zealand",
        correct: "New Zealand",
    };
    let Q16 = {
        q: "Atlantic City is a popular entertainment destination located in what U.S. state?",
        one: "Virginia",
        two: "New Jersey",
        three: "North Carolina",
        four: "New York",
        correct: "New Jersey",
    };
    let Q17 = {
        q: "What city in Australia has the highest population?",
        one: "Sydney",
        two: "Melbourne",
        three: "Canberra",
        four: "Adelaide",
        correct: "Sydney",
    };
    let Q18 = {
        q: "The avocado is a tree that is thought to have originated in what country?",
        one: "Panama",
        two: "Brazil",
        three: "Mexico",
        four: "Bermuda",
        correct: "Mexico",
    };
    let Q19 = {
        q: "In what country would you find the temple complex Angkor Wat?",
        one: "Thailand",
        two: "Vietnam",
        three: "Burma",
        four: "Cambodia",
        correct: "Cambodia",
    };
    let Q20 = {
        q: "The Hoover Dam in the United States is built on what river?",
        one: "The Colorado River",
        two: "The Mississippi River",
        three: "The Nevada River",
        four: "The Missouri River",
        correct: "The Colorado River",
    };
    let Q21 = {
        q: "San Marino is a microstate in Europe completely surrounded by what country?",
        one: "France",
        two: "Italy",
        three: "Spain",
        four: "Greece",
        correct: "Italy",
    };
    let Q22 = {
        q: "What is the Easternmost point on the North American continent?",
        one: "Cape Columbia, Ellesmere Island",
        two: "East Point Lighthouse, Prince Edward Island",
        three: "Cape Spear, Newfoundland",
        four: "Lubec, Maine",
        correct: "Cape Spear, Newfoundland",
    };
    let Q23 = {
        q: "Formerly known as Bedloe's Island, what is the current name of the island where the Statue of Liberty is located?",
        one: "Liberty Island",
        two: "Elles Island",
        three: "New York Island",
        four: "Hoffman Island",
        correct: "Liberty Island",
    };
    let Q24 = {
        q: "Sardinia, the second largest island in the Mediterranean Sea, is an autonomous region of what country?",
        one: "Spain",
        two: "Tunisia",
        three: "Italy",
        four: "Greece",
        correct: "Italy",
    };
    let Q25 = {
        q: "Located in Northwestern Turkey, which strait separates Europe and Asia?",
        one: "Strait of Gibraltar",
        two: "English Channel",
        three: "Panama Canal",
        four: "Bosphorus Strait",
        correct: "Bosphorus Strait",
    };
    let Q26 = {
        q: "South Africa completely surrounds which other African nation?",
        one: "Namibia",
        two: "Lesotho",
        three: "Swaziland",
        four: "Mozambique",
        correct: "Lesotho",
    };
    let Q27 = {
        q: "Europe is separated from Asia by which mountain range?",
        one: "Ural Mountains",
        two: "Himalayan Mountains",
        three: "The Alps",
        four: "The Pyrenees Mountains",
        correct: "Ural Mountains",
    };
    let Q28 = {
        q: "Which of the great lakes does not share a border with Canada?",
        one: "Lake Michigan",
        two: "Lake Superior",
        three: "Lake Huron",
        four: "Lake Ontario",
        correct: "Lake Michigan",
    };
    let Q29 = {
        q: "What is the national language of India?",
        one: "Sanskrit",
        two: "Hindi",
        three: "Bengali",
        four: "English",
        correct: "Hindi",
    };
    let Q30 = {
        q: "What is the largest island in the Caribbean Sea?",
        one: "Jamaica",
        two: "Haiti",
        three: "Cuba",
        four: "Dominican Republic",
        correct: "Cuba",
    };

    let questionArray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30];
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let startTime;
    let currentQuestion;

    $("#start").on('click', function() {
        $("#gameElement").attr('style', 'display: block;');
        $("#start").attr('style', 'display: none;');
        $("html,body").animate({
            scrollTop: document.body.scrollHeight
        }, "fast");
        startLoop();
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

    let timeSeconds;

    function startLoop() {
        let seconds = 0
        timeSeconds = setInterval(timeLeft, 1000)

        function timeLeft() {
            $("#timeLeft").html("<h4>You have : " + (10 - seconds) + " seconds left</h4>");
            seconds++;
            if (seconds === 11) {
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

    function checkAnswer(element) {
        if (element === currentQuestion.correct) {
            correctAnswers++;
            clearInterval(timeSeconds);
            reset()
            return;
        } else if (element !== currentQuestion.correct) {
            wrongAnswers++;
            clearInterval(timeSeconds);
            reset()
            return;
        }
        return;
    }

    function remove(element) {
        const index = questionArray.indexOf(element);
        questionArray.splice(index, 1);
    }

    function reset() {
        if (questionArray == 0) {
            clearInterval(timeSeconds);
            alert("You win!!!!")
        } else {
            startLoop();
        }
    }

});