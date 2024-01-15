const quizData = [
  {
    question: "Which HTML tag is used to define an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<dl>",
    correct: "a",
  },

  {
    question: "How can you include an external CSS file in an HTML document?",
    a: `<css src="style.css">`,
    b: `<style link="style.css">`,
    c: `<link rel="stylesheet" href="style.css">`,
    d: ` <style src="style.css">`,
    correct: "c",
  },

  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "In CSS, what does the z-index property control?",
    a: "The transparency of an element",
    b: "The stacking order of positioned elements",
    c: "The width of an element",
    d: "The rotation of an element",
    correct: "b",
  },

  {
    question:
      "What is the purpose of the addEventListener method in JavaScript?",
    a: "To add a new HTML element",
    b: "To attach an event handler to an element",
    c: "To create a new function",
    d: "To define a new variable",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}
        /${quizData.length} questions correctly</h2>

        <button onClick = "location.reload()">Reload</button>
        `;
    }
  }
});
