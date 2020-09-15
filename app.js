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
    },
    {
      question: "Match this quote to the right play: 'Come what come may, / Time and the hour runs through the roughest day.' ",
      answers: ["Macbeth", "Hamlet", "King Lear", "Julius Caesar"],
      correctAnswer: "Macbeth",
    },
    {
      question: "Hamlet has the most lines of any characer in Shakespeare at 1,506. Which of these other titular character has the fewest lines?",
      answers: ["Timon", "Troilus", "Juliet", "King John"],
      correctAnswer: "King John (437)",
    },
  ],g
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
