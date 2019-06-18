$(document).ready(function () {

var timer = 0;
var score = 0;
var oldScores = [];
var question1 = "Question 1: blah blah blah";
var oneAnswer1 = "answer1 blah blah blah";
var oneAnswer2 = "answer2 blah blah blah";
var oneAnswer3 = "answer3 blah blah blah";
var oneAnswer4 = "answer4 blah blah blah";


function gameStart() {
    $("#clickStart").click(function(){
    $("#questions").empty();
    
    $("#questions").text(question1);
    $("#answer1").text(oneAnswer1);
    $("#answer2").text(oneAnswer2);
    $("#answer3").text(oneAnswer3);
    $("#answer4").text(oneAnswer4);
        })
    
}

gameStart();

})
