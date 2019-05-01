$(document).ready(function() {
  const questions = [
    {
      id: "question1",
      category: "Geography",
      type: "multiple",
      difficulty: "hard",
      question: "Which country is completely landlocked by South Africa?",
      correct_answer: "Lesotho",
      incorrect_answers: [
        "Swaziland",
        "Botswana",
        "Zimbabwe"
      ]
    },
    {
      id: "question2",
      category: "History",
      type: "multiple",
      difficulty: "hard",
      question: "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed &quot;the Kingmaker&quot;?",
      correct_answer: "Richard Neville",
      incorrect_answers: [
        "Richard III",
        "Henry V",
        "Thomas Warwick"
      ]
    },
    {
      id: "question3",
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "What was the transfer of disease, crops, and people across the Atlantic shortly after the discovery of the Americas called?",
      correct_answer: "The Columbian Exchange",
      incorrect_answers: [
        "Triangle Trade",
        "Transatlantic Slave Trade",
        "The Silk Road"
      ]
    },
    {
      id: "question4", 
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question: "This weapon in Counter-Strike: Global Offensive does not exist in real life.",
      correct_answer: "M4A4",
      incorrect_answers: [
        "AWP",
        "M4A1",
        "MP9"
      ]
    },
    {
      id: "question5",
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "easy",
      question: "In the movie &quot;Blade Runner&quot;, what is the term used for human-like androids ?",
      correct_answer: "Replicants",
      incorrect_answers: [
        "Cylons",
        "Synthetics",
        "Skinjobs"
      ]
    }];

/*Set clock to 30.*/
let clock = 30;

//  Variable for interval 
let oneSecond;


//  When the start button gets clicked, execute the run function.
$("#startButton").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the interval prior to setting our new interval will not allow multiple instances.
function run() {
  clearInterval(oneSecond);
  oneSecond = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease clock by one.
  clock--;

  //  Show the number in the #timer tag.
  $("#timer").html("<h2>" + clock + "</h2>");
  console.log(clock);

  //  Once number hits zero...
  if (clock === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(oneSecond);
}

while(clock !== 30 && clock !== 0){
  
  questions.forEach(function(ask) {
    
    let askID = ask.id;
    let radioForm = `<div>`+ askID +`</div>`;
    $('<'+askID+'>').html
    .0
    .0
    (radioForm);
    
  });
}


  
});