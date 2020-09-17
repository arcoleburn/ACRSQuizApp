/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable strict */

const store = {
  // 5 or more questions are required
  questions: [
    {
      question:
        "It was around 1595 when Shakespeare wrote 'Romeo and Juliet,' everyone's favorite 'romance' where all the lovers die. In what year did Shakespeare himself *ahem* ...exit stage left?",
      answers: ["1599", "1702", "1616", "1542"],
      correctAnswer: "1616",
      funFact:
        "Not much is known about Shakespeare's death, but one theory holds that he died of a fever contracted after a drinking binge with a couple fellow playwrights",
    },
    {
      question:
        "Match this quote to the right play: 'Come what come may, / Time and the hour runs through the roughest day.' ",
      answers: ["Macbeth", "Hamlet", "King Lear", "Julius Caesar"],
      correctAnswer: "Macbeth",
      funFact:
        "This line comes just after Macbeth is told the prophecy which sets him on his murderous path.",
    },
    {
      question:
        "Hamlet has the most lines of any characer in Shakespeare at 1,506. Which of these other titular character has the fewest lines?",
      answers: ["Timon", "Troilus", "Juliet", "King John"],
      correctAnswer: "King John",
      funFact:
        "The title character with the fewest lines in all of Shakespeare is Julius Caesar, who manages to get out 151 lines before being murdered in Act III, Scene I of his own play.",
    },
    {
      question:
        "First published 18 years after his death, which was the last play published by Shakespeare?",
      answers: [
        "Henry VIII",
        "The Noble Kinsmen",
        "Cymbleine",
        "Othello",
      ],
      correctAnswer: "The Noble Kinsmen",
      funFact:
        "Scholars attribute 'The Noble Kinsmen' to both Shakespeare, and John Fletcher.",
    },
    {
      question:
        "Which of these actors was NOT part of Shakespeare's troupe, The Lord Chamberlain's men?  ",
      answers: [
        "Richard Burbage",
        "Robert Armin",
        "Will Kemp",
        "Henry Irving",
      ],
      correctAnswer: "Henry Irving",
      funFact:
        "Sir Henry Irving was perhaps the most famous actor of the Victorian Era. He was the first actor ever to be knighted, receiving the honor in 1895.",
    },
    {
      question: "How many sonnets did Shakespeare write? ",
      answers: ["154", "207", "120", "309"],
      correctAnswer: "154",
      funFact:
        "When published in 1609, Shakespeare's sonnets were dedicated to 'W. H', who is thought to be William Herbert, Earl of Pembroke.",
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function getQuestion() {
  //this function takes the store and gives the question value for adding to the template
  let num = store.questionNumber;
  let nextQuestion = store.questions[num];
  console.log(nextQuestion);
  return nextQuestion;
}

function questionTemplateGenerator() {
  let questionNum = store.questionNumber;

  console.log("`templateGenerator` fn ran");
  let question = getQuestion();
  console.log("q# is: ", questionNum);
  //takes in array/object
  //generates container for question, along with appropriate buttons
  const template = `<section class="boxit" id="question-screen">
      <form class="container">
      <h2> SHAKESPEARE QUIZ</H2>
        <ul >
          <div class='textbox'><p>${question.question}</p></div>
          <li>
            <input
              type="radio"
              name="quizquestion"
              id="correct"
              value="${question.answers[0]}" 
              required
            />
            <label for="correct">${question.answers[0]}</label>
          </li>
          <li>
            <input
              type="radio"
              name="quizquestion"
              id="quizquestion"
              value="${question.answers[1]}"
            />
            <label for="incorrect1">${question.answers[1]}</label>
          </li>
          <li>
            <input
              type="radio"
              name="quizquestion"
              id="quizquestion"
              value="${question.answers[2]}"
            />
            <label for="incorrect2">${question.answers[2]}</label>
          </li>
          <li>
            <input
              type="radio"
              name="quizquestion"
              id="quizquestion"
              value="${question.answers[3]}"
            />
            <label for="incorrect3">${question.answers[3]}</label>
          </li>
          <button type="submit" class="submit-question">Submit Answer</button>
        </ul>
        <div class="innercontainer">
            <div><p> Question ${questionNum + 1} of ${
    store.questions.length
  }</p></div>
            <div><p> ${store.score} of ${questionNum} Correct so far!</p></div>
        </div>
      </form>
      
    </section>`;
  renderIt(template);
}

function answerTemplateGenerator() {
  console.log("answer generator ran");
  let score = store.score;
  let totalQuestions = store.questions.length;
  let num = store.questionNumber;
  let funFact = store.questions[num].funFact;
  let userAnswer = $('input[name="quizquestion"]:checked').val();
  let correctAnswer = getQuestion().correctAnswer;
  console.log("user ans is: ", userAnswer);
  let template;
  if (correctAnswer === userAnswer) {
    store.score += 1;
    store.questionNumber += 1;
    //generates container for answer screen
    // takes in a true or false
    // if statment that checks if the answer is right or wrong and switches the template based on it
    template = `<section class="boxit" id="answer-screen">
        <h2>Correct!</h2>
        <p>The Correct Answer Was: ${correctAnswer}</p>
        <p>You got ${
          score + 1
        } of ${totalQuestions} correct so far.</p>
        <p>Did you Know?</p>
        <p class='text-left'> ${funFact}</p>
        `;
  } else {
    store.questionNumber += 1;
    template = `<section class="boxit" id="answer-screen">
        <h2> Incorrect!</h2>
        <p>The Correct Answer Was: ${correctAnswer}</p>
        <p>You got ${
          score
        } of ${totalQuestions} correct so far.</p>
        <p>Did you Know?</p>
        <p class='text-left'> ${funFact}</p>
    `;
  }
  if (store.questionNumber === store.questions.length) {
    template +=
      "<button class='finish-quiz'>Finish Quiz</button></section>";
  } else {
    template +=
      "<button class='next-question'>Next Question</button></section>";
  }
  renderIt(template);
}
function welcomeScreenGenerator() {
  console.log("welcomescreen generator fn ran");
  //no inputs
  //when site is loaded, generates "Welcome" and a start quiz button
  const template = `<section class="boxit" id="welcome-screen">
      <h1>Shakespeare Quiz</h1>
      <button class='next-question' id="start">Click Here to start Quiz</button>
    </section>`;
  renderIt(template);
}

function conclusionGenerator() {
  console.log("conclusion generator fn ran");
  //take in questions object
  //output window with final score, button to retake quiz
  let score = store.score;
  let totalQuestions = store.questions.length;
  const template = `<section class="boxit" id="answer-screen">
        <h2>Congrats!</h2>
        <p>You got ${score} of ${totalQuestions} correct</p>
        <p> Click the button below to try again.</p>
        <button class="again-button"> Once More unto the Breach!</button>

    </section>`;
  renderIt(template);
}

function main() {
  renderIt();
  welcomeScreenGenerator();
  startQuiz();
  checkAnswer();
  nextQuestion();
  finishQuiz();
  onceMore();
}

$(main);

// /********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the data store
function renderIt(state) {
  console.log("renderIt function ran");
  //replaces content with appropriate next screen
  $("body").html(`${state}`);
}
// /********** EVENT HANDLER FUNCTIONS **********/

// // These functions handle events (submit, click, etc)
/*function startQuiz() {
  console.log("start quiz ran 1");
  $("body").on("click", ".start-button", function (evt) {
    evt.preventDefault()
    nextQuestion();
  });
}*/
function checkAnswer() {
  console.log("check answer function ran ");
  $("body").on("click", `.submit-question`, function (event) {
    event.preventDefault();
    answerTemplateGenerator();
  });
}
//   //on submit of answer, takes in users choice
//   //also takes questions object
//   //checks against correctAnswer in questions and returns true/false
// }
function nextQuestion() {
  console.log("next q ran");
  $("body").on("click", ".next-question", function (evt) {
    evt.preventDefault();
    questionTemplateGenerator();
  });
}
function startQuiz() {
  console.log("start quiz ran 2");
  $("body").on("click", "#start", function (evt) {
    nextQuestion();
  });
}
function finishQuiz() {
  console.log("finish quiz ran");
  $("body").on("click", ".finish-quiz", function (evt) {
    evt.preventDefault();
    conclusionGenerator();
  });
}
function onceMore() {
  console.log("once more ran");
  $("body").on("click", ".again-button", function (evt) {
    store.questions.score = 0;
    store.questions.questionNumber = 0;
    location.reload();
    welcomeScreenGenerator();
  });
}
// $(/*listen to welcome screen)*/.on('click', '.start-button', function(){
//   //render the first question screen
// })

// $(/*listen to question screen)*/.on('click', '.answer-button', function(){
//   //check if answer correct
//   //give appropriate response screen
// })

// $(/*listen to answer screen*/.on('click', '.next-button', function(){
//   //render the next question with updated stats
// })

// $(/*listen to final screen*/).on('click','try-again-button', function(){
//   //reset stats
//   //render the welcome screen
// })
