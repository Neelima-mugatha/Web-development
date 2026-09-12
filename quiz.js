const questions = [
  {
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    answers: ["let", "var", "int", "function"],
    correct: "let"
  },
  {
    question: "Which symbol is used for strict equality?",
    answers: ["=", "==", "===", "!="],
    correct: "==="
  },
  {
    question: "Which method adds an item to the end of an array?",
    answers: ["pop()", "push()", "shift()", "slice()"],
    correct: "push()"
  },
  {
    question: "Which keyword creates a constant?",
    answers: ["var", "let", "const", "static"],
    correct: "const"
  },
  {
    question: "Which function displays text in the browser console?",
    answers: ["alert()", "console.log()", "print()", "display()"],
    correct: "console.log()"
  },
  {
    question: "Which data type is true or false?",
    answers: ["String", "Number", "Boolean", "Array"],
    correct: "Boolean"
  },
  {
    question: "Which method removes the last element of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: "pop()"
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Method",
      "Digital Output Mode",
      "Document Order Method"
    ],
    correct: "Document Object Model"
  },
  {
    question: "Which keyword is used to define a function?",
    answers: ["func", "function", "define", "method"],
    correct: "function"
  },
  {
    question: "Which loop repeats while a condition is true?",
    answers: ["for", "while", "switch", "if"],
    correct: "while"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

function showQuestion() {
  const quizQuestion = questions[currentQuestion];

  progressElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionElement.textContent = quizQuestion.question;
  answersElement.innerHTML = "";

  quizQuestion.answers.forEach((answer) => {
    answersElement.innerHTML += `
      <label class="answer-option">
        <input type="radio" name="answer" value="${answer}">
        ${answer}
      </label>
    `;
  });

  nextButton.textContent =
    currentQuestion === questions.length - 1 ? "Show Score" : "Next";
}

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  if (selectedAnswer.value === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "Quiz Completed!";
  progressElement.textContent = "";
  answersElement.innerHTML = "";
  nextButton.style.display = "none";

  resultElement.textContent =
    `Your score is ${score} out of ${questions.length}.`;
}

nextButton.addEventListener("click", nextQuestion);

showQuestion();