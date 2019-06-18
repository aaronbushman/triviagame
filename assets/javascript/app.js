$(document).ready(function () {

var timerRunning = false;
var timer = 15;
var score = 0;
var questionNum = 0;
var intervalId;
var question1 = "Question 1: blah blah blah";
var oneAnswer1 = "Correct answer1 blah blah blah";
var oneAnswer2 = "Wrong answer2 blah blah blah";
var oneAnswer3 = "Wrong answer3 blah blah blah";
var oneAnswer4 = "Wrong answer4 blah blah blah";

function stop() {
    clearInterval(intervalId);
}
function decrement() {
    timer--;
    $("#timer").text(timer);
    if(timer === 0) {
        stop();
        timesUp();
    }
}

function timerStart() {  
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function timesUp() {
    alert("Time's Up!");
}

function correct() {
    score += 1;
    $("#score").text(score);
    alert("yay, you're correct!")
    questionNum++;
    stop();
}

function wrong() {
    alert("oof, that wasn't right at all.")
    questionNum++;
    stop();
}

function gameStart() {
    $("#clickStart").click(function(){
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
    timerStart();
        })
    
}

function questionTwo() {
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
    timerStart();
        }


function questionThree() {
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
    timerStart();
        }

function questionThree() {
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
    timerStart();
        }


gameStart();

})
