const chalk = require('chalk');
const readlineSync=require("readline-sync");
score=0;
var highScore={name:"Rohini",hscore:07};
console.log(chalk.cyan('Hello Players!'));
console.log(chalk.magentaBright("The high scorer is "+ highScore.name + " and the highscore is "+highScore.hscore));
console.log(chalk.yellowBright("Let's see how far can you go?"));
