$(document).ready(function () {

    var timer = ""; //timer holder
    var score = 0; //score holder
    var questionNum = 0; //question # holder
    var intervalId; //set var for inervalId timer

    var question1 = "Question 1: blah blah blah"; //question 1 and answers
    var oneAnswer1 = "Correct answer1 blah blah blah";
    var oneAnswer2 = "Wrong answer2 blah blah blah";
    var oneAnswer3 = "Wrong answer3 blah blah blah";
    var oneAnswer4 = "Wrong answer4 blah blah blah";

    var question2 = "Question 2: blah blah blah"; //question 2 and answers
    var twoAnswer1 = "Wrong answer1 blah blah blah";
    var twoAnswer2 = "Wrong answer2 blah blah blah";
    var twoAnswer3 = "Wrong answer3 blah blah blah";
    var twoAnswer4 = "Correct answer4 blah blah blah";

    var question3 = "Question 3: blah blah blah"; //question 4 and answers
    var threeAnswer1 = "Wrong answer1 blah blah blah";
    var threeAnswer2 = "Wrong answer2 blah blah blah";
    var threeAnswer3 = "Correct answer3 blah blah blah";
    var threeAnswer4 = "Wrong answer4 blah blah blah";

    var question4 = "Question 4: blah blah blah"; //question 4 and answers
    var fourAnswer1 = "Wrong answer1 blah blah blah";
    var fourAnswer2 = "Correct answer2 blah blah blah";
    var fourAnswer3 = "Wrong answer3 blah blah blah";
    var fourAnswer4 = "Wrong answer4 blah blah blah";

    function stop() {
        clearInterval(intervalId);
    } //stop timer function

    function decrease() {
        timer--;
        $("#timer").text(timer);
        if (timer === 0) {
            stop();
            timesUp();
        }
    } //print timer to timer div + actions when timer hits 0

    function timerStart() { //timer function
        $("#timer").empty();
        timer = 16;
        clearInterval(intervalId);
        intervalId = setInterval(decrease, 1000);
    }

    function timesUp() { //alert function for when timer hits 0
        alert("Time's Up!");
    }

    function correct() { //function to run when correct answer is chosen
        score++; //score increase by 1
        console.log(score);
        $("#score").text(score); //print new score to score div
        stop(); //stop timer
        alert("yay, you're correct!"); //alert notifying of correct selection
        if (questionNum <= 1) { //if first question, moves to question 2
            questionTwo();
            console.log(questionNum);
        }
        else if (questionNum == 2) { //if second question, moves to question 3
            questionThree();
            console.log(questionNum);
        }
        else if (questionNum == 3) { //if on third question, moves to question 4 
            questionFour();
            console.log(questionNum);
        }
        else if (questionNum == 4) { //if at end of game, run endgame function
            console.log(questionNum);
            alert("Game Over!");
            endGame();
        }

    }

    function wrong() { //wrong answer function, same as correct minus the score addition
        stop();
        alert("oof, that wasn't right at all.")
        if (questionNum == 1) {
            alert("Let's give another question a shot.")
            questionTwo()
            console.log(questionNum);
        }
        else if (questionNum == 2) {
            alert("Let's give another question a shot.")
            questionThree();
            console.log(questionNum);
        }
        else if (questionNum == 3) {
            alert("Let's give another question a shot.")
            questionFour();
            console.log(questionNum);
        }
        else if (questionNum == 4) {
            alert("Thank God that's over.")
            endGame();
            console.log(questionNum);
        }
    }

    function gameStart() {
        $("#clickStart").click(function () {
            questionNum++;
            console.log(this);
            console.log(questionNum);
            timerStart();
            $("#questions").empty();
            $("#questions").text(question1);
            $("#answer1").text(oneAnswer1);
            $("#answer2").text(oneAnswer2);
            $("#answer3").text(oneAnswer3);
            $("#answer4").text(oneAnswer4);
            $("#answer1").click(correct);
            $("#answer2").click(wrong);
            $("#answer3").click(wrong);
            $("#answer4").click(wrong);
        })
    }

    function questionTwo() {
        questionNum++;
        console.log(this);
        console.log(questionNum);
        timerStart();
        $("#questions").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
        $("#questions").text(question2);
        $("#answer1").text(twoAnswer1);
        $("#answer2").text(twoAnswer2);
        $("#answer3").text(twoAnswer3);
        $("#answer4").text(twoAnswer4);
        $("#answer1").click(wrong);
        $("#answer2").click(wrong);
        $("#answer3").click(wrong);
        $("#answer4").click(correct);
    }


    function questionThree() {
        questionNum++;
        console.log(this);
        console.log(questionNum);
        timerStart();
        $("#questions").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
        $("#questions").text(question3);
        $("#answer1").text(threeAnswer1);
        $("#answer2").text(threeAnswer2);
        $("#answer3").text(threeAnswer3);
        $("#answer4").text(threeAnswer4);
        $("#answer1").click(wrong);
        $("#answer2").click(wrong);
        $("#answer3").click(correct);
        $("#answer4").click(wrong);
    }

    function questionFour() {
        questionNum++;
        console.log(this);
        console.log(questionNum);
        timerStart();
        $("#questions").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
        $("#questions").text(question4);
        $("#answer1").text(fourAnswer1);
        $("#answer2").text(fourAnswer2);
        $("#answer3").text(fourAnswer3);
        $("#answer4").text(fourAnswer4);
        $("#answer1").click(wrong);
        $("#answer2").click(correct);
        $("#answer3").click(wrong);
        $("#answer4").click(wrong);
    }

    function endGame() {
        $("#questions").empty();
        $("#timer").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
        $("#questions").html("<div class='container' style='margin: 20px'><button id='reset'>PLAY AGAIN?</button></div>");
        questionNum = 0
        console.log(this);
        console.log(questionNum);
        $("#reset").click(newGame);
    }

    function newGame() {
        score = 0;
        questionNum++;
        console.log(this);
        console.log(questionNum);
        timerStart();
        $("#questions").empty();
        $("#questions").text(question1);
        $("#answer1").text(oneAnswer1);
        $("#answer2").text(oneAnswer2);
        $("#answer3").text(oneAnswer3);
        $("#answer4").text(oneAnswer4);
        $("#answer1").click(correct);
        $("#answer2").click(wrong);
        $("#answer3").click(wrong);
        $("#answer4").click(wrong);
    }
    console.log(this);
    console.log(questionNum);
    gameStart();
})
