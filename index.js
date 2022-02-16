var readlineSync=require("readline-sync");
var userName=readlineSync.question("May I have your Name?\n");

console.log("Hi "+userName+" Welcome to the Game of Test your General Knowledge");
console.log("----------------------------");
console.log("Total number of questions are 9");
console.log("----------------------------");

questionOne={
  question:"India lies in which continent?",
  answer:"Asia"
}
questionTwo={
  question:"Which is the heavier metal of these two? Gold or Silver?",
  answer:"Gold"
}
questionThree={
  question:"Which country are the Giza Pyramids in?",
  answer:"Egypt"
}
questionFour={
  question:"Which is the longest river on the earth?",
  answer:"Nile"
}
questionFive={
  question:"Which organ purify our blood?",
  answer:"Kidney"
}
questionSix={
  question:"Gateway of India is located at?",
  answer:"Mumbai"
}
questionSeven={
  question:"Which animal is called the ship of the desert?",
  answer:"Camel"
}
questionEight={
  question:"Olylmpics games are held after every?",
  answer:"four"
}
questionNine={
  question:"Name the biggest planet in our solar system",
  answer:"Jupiter"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine];

var score=0,level=1,i;//variable i used in for loop

function play(question,answer)
{
  var userAnswer=readlineSync.question(question+"\n");
if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log("Yay!!! You are correct! "+userName);
    console.log("----------------");
    score++;
    if(score>=5)
    {
      level=2;
    }
  }
  
  else 
  {
    console.log("Oops!! you guessed it wrong! "+userName);
    console.log("The correct answer is: "+answer);
    console.log("----------------");

  }
}

for(i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);

}

if(level>=2)
{
  console.log(" Wow !! Congratulations You are exceptional");
  console.log("Your current level is : "+level);
  console.log("Your current score is: "+score);
}
else
{  
  console.log("Well Done!!");
  console.log("Your current Level is: "+level);
  console.log("Your current score is: "+score);
}