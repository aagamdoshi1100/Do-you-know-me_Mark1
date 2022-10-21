var readlinesync = require("readline-sync");


console.log("Welcome to the Quiz");
console.log("Answer must be in a,b,c");
var Name = readlinesync.question("Please Enter your Name: ");

console.log("\n");

var Dicto = [{
  Q: "1) Name the National tree of India?",
  MCQ: "A: Mango  B: Banyan C:Grapes",
  Answer: "Banyan"
},
{
  Q: "2) Name the National river of India?",
  MCQ: "A: Brhmaputra  B: Godaveri C:Ganga",
  Answer: "Ganga"
},
{
  Q: "3) Name the National reptile of India?",
  MCQ: "A: Gharial  B:Indian cobra  C:King cobra",
  Answer: "King cobra"
},
{
  Q: "4) Name the biggest continent in the world?",
  MCQ: "A: North America  B: Europe C:Asia",
  Answer: "Asia"
}, {
  Q: "5) Name the house made of ice?",
  MCQ: "A: Eco-friendly  B: Igloo C:Farmhouse",
  Answer: "Igloo"
}
];

var Score = 0;

function Game(Question, Options, Answer) {
  console.log(Question);
  console.log(Options);
  console.log("Your response : ");


  var UserInput = readlinesync.question();

  if (Answer === 'Banyan') {
    Answer = 'B';
  } else if (Answer === 'Ganga') {
    Answer = 'C';
  } else if (Answer === 'King cobra') {
    Answer = 'C';
  } else if (Answer === 'Asia') {
    Answer = 'C';
  } else if (Answer === 'Igloo') {
    Answer = 'B';
  }


  if (UserInput.toUpperCase() === Answer) {
    console.log("Correct!");
    Score++;
    console.log("Current Score", Score);
  } else {
    console.log("Oops! Wrong Answer");
    console.log("Better luck next time");
    Score--;
    console.log("Current Score", Score);
  }
  console.log("\n");
  console.log("Final Score", Score);
  console.log("\n");

  if (Score === 5) {
    console.log("Congrats!");
   
  } 
}


for (i = 0; i < Dicto.length; i++) {

  var scanning = Dicto[i];
  var Myquestion = scanning.Q;
  var Myoptions = scanning.MCQ;
  var Myanswer = scanning.Answer;

  Game(Myquestion, Myoptions, Myanswer);

}


 function High(){
      console.log("");
      console.log("---------------Highscores------------------------");
      console.log("");

      var HighScores = [
  {
    name: "Aagam",
    score: 5,
  },

  {
    name: "Parth",
    score: 4,
  },
]
       console.log("Take a screenshot share score to the delveloper to update your score ");
      console.log("");
for (i = 0; i < HighScores.length; i++) {

    var scanning = HighScores[i];
    var Name = scanning.name;
    var scoreb = scanning.score;
  
   
  console.log("Name: ",Name);
  console.log("Score: ",scoreb);
  console.log("");

  }
    }   
High();

console.log("If you want to play again please visit https://replit.com/@AagamDoshi2/L1-DoYouKnowMeQuiz?embed=true#index.js");
