const userName = localStorage.getItem("quizUsername");
document.getElementById("welcome-text").innerText = `Welcome, ${userName}!`;
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Django", "Vue"],
    answer: 2
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "##"],
    answer: 1
  }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selected = null;

function loadQuiz() {
  clearSelection();
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;

  optionsEl.innerHTML = "";
  current.options.forEach((option, idx) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.addEventListener("click", () => selectOption(li, idx));
    optionsEl.appendChild(li);
  });
}

function selectOption(element, index) {
  clearSelection();
  element.classList.add("selected");
  selected = index;
}

function clearSelection() {
  const items = document.querySelectorAll("li");
  items.forEach(item => item.classList.remove("selected"));
  selected = null;
}

nextBtn.addEventListener("click", () => {
  if (selected === null) {
    alert("Please select an answer!");
    return;
  }

  if (selected === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    quiz.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.innerText = `${score} / ${quizData.length}`;
  }
});

loadQuiz();
