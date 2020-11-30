const chalk = require('chalk');
const readlineSync=require("readline-sync");
score=0;
var highScore={name:"Rohini",hscore:07};
console.log(chalk.cyan('Hello Players!'));
console.log(chalk.magentaBright("The high scorer is "+ highScore.name + " and the highscore is "+highScore.hscore));
console.log(chalk.yellowBright("Let's see how far can you go?"));
function play(question,answer)
{
 var userAnswer=readlineSync.question(question);
 if(userAnswer===answer)
 {
   console.log(chalk.green("Great job!Your answer is Right!"));
   score=++score;
 }
 else
 {
   console.log(chalk.red("Oops! You're Wrong!"));
   score=--score;
 }
}
var capitals=[{question:"What is the capital of India?\nNew Delhi or Mumbai\n",answer:"New Delhi"},
{question:"What is the capital of Australia?\nSydney or Canberra\n",answer:"Canberra"},
{question:"What is the capital of Egypt?\nCairo or Luxor\n",answer:"Cairo"},
{question:"What is the capital of New-zealand?\nAuckland or Wellington\n",answer:"Wellington"},
{question:"What is the capital of Bangladesh?\nSylhet or Dhaka\n",answer:"Dhaka"},
{question:"What is the capital of Austria?\nWestros or Vienna\n",answer:"Vienna"},
{question:"What is the capital of USA?\nNew-york or Washington DC\n",answer:"Washington DC"}];