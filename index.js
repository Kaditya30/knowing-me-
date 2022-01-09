console.log(
  "HOW MUCH YOU KNOW ME\n"
)
var readLineSync = require("readline-sync");
var userName = readLineSync.question("Please Enter Your Name To Play\n");
var score = 0 ;
console.log("Welocome " + userName +"!!");

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer){
    console.log("You are RIGHT!!!");
    score = score + 1 ;  }
  else{
    console.log("$$ You are WRONG");
    }
    console.log("current score :" + score)
}
 var arr1 = [
  {question:"What's my surname?",
  answer:"kotalwar"},
  {question:"What is my age ?",
  answer:"19"},
  {question:"Wich is my favourite sport ?",
  answer:"cricket"},
  {question:"Where do i live ?",
  answer:"parbhani"},
  {question:"Am i having spects?(yes/no)",
  answer:"yes"}
];

for(var i=0; i<arr1.length; i=i+1){
  var currentQuestion = arr1[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY!\n Final Score is:" + score)