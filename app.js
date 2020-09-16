/* eslint-disable quotes */
/* eslint-disable strict */

const questions = {
  // 5 or more questions are required
  questions: [
    {
      question:
        "It was around 1595 when Shakespeare wrote 'Romeo and Juliet,' everyone's favorite 'romance' where all the lovers die. In what year did Shakespeare himself *ahem* ...exit stage left?",
      answers: ["1599", "1702", "1616", "1542"],
      correctAnswer: "1616",
      funFact: "something about shakespeares death",
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
      correctAnswer: "King John (437)",
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

function questionTemplateGenerator(){
  console.log('`templateGenerator` fn ran')
//takes in array/object 
//generates container for question, along with appropriate buttons
}

function answerTemplateGenerator(){
  console.log('answer generator ran')
  //generates container for answer screen 
}

function welcomeScreenGenerator(){
  console.log("welcomescreen generator fn ran")
  //no inputs 
  //when site is loaded, generates "Welcome" and a start quiz button
}

function conclusionGenerator(){
  console.log("conclusion generator fn ran")
  //take in questions object 
  //output window with final score, button to retake quiz
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderIt(){
  console.log("renderIt function ran")
  //replaces content with appropriate next screen
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function checkAnswer(){
  console.log("check answer function ran ")
  //on submit of answer, takes in users choice
  //also takes questions object
  //checks against correctAnswer in questions and returns true/false 
}


$(/*listen to welcome screen)*/.on('click', '.start-button', function(){
  //render the first question screen
})

$(/*listen to question screen)*/.on('click', '.answer-button', function(){
  //check if answer correct
  //give appropriate response screen 
})

$(/*listen to answer screen*/.on('click', '.next-button', function(){
  //render the next question with updated stats 
})

$(/*listen to final screen*/).on('click','try-again-button', function(){
  //reset stats
  //render the welcome screen 
})