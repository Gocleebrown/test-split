// scripts/main.js

// 1) Combine all topic arrays into one question bank
const questionBank = []
  .concat(
    additionalQuestionsTopic1,
    additionalQuestionsTopic2,
    additionalQuestionsTopic3,
    additionalQuestionsTopic4,
    additionalQuestionsTopic5,
    additionalQuestionsTopic6,
    additionalQuestionsTopic7,
    additionalQuestionsTopic8,
    additionalQuestionsTopic9,
    additionalQuestionsTopic10,
    additionalQuestionsTopic11
  );

// 2) Names for your topics (used in the checkbox labels)
const topicsArrNames = [
  "Physical quantities and units",
  "Kinematics",
  "Dynamics",
  "Forces, density and pressure",
  "Work, energy and power",
  "Deformation of solids",
  "Waves",
  "Superposition",
  "Electricity",
  "D.C. circuits",
  "Particle and nuclear physics"
];

// 3) Generate topic checkboxes
function generateTopicCheckboxes() {
  const left  = document.getElementById("topic-columns-left");
  const right = document.getElementById("topic-columns-right");

  topicsArrNames.forEach((name, i) => {
    const topicNum = i + 1;
    const block = `<h3>${topicNum}. ${name}</h3>
<label><input type="checkbox" id="topic${topicNum}-defs"> Definitions</label>
<label><input type="checkbox" id="topic${topicNum}-eqs"> Equations</label>`;
    if (i % 2 === 0) left.innerHTML  += block;
    else             right.innerHTML += block;
  });
}

// 4) “Select All” toggles
function toggleByGroup(typeSuffix, isChecked) {
  document
    .querySelectorAll(`input[id$="-${typeSuffix}"]`)
    .forEach(box => box.checked = isChecked);
}

// 5) Helpers to read what checked
function getSelectedDifficulty() {
  return Array.from(document.getElementsByName("difficulty"))
              .find(r => r.checked).value;
}

function getCheckedTopicModes() {
  const wholeDefs = document.getElementById("whole-defs").checked;
  const wholeEqs  = document.getElementById("whole-eqs").checked;
  const modes = topicsArrNames.map((_, i) => {
    const n = i + 1;
    return {
      topic: n,
      defs: document.getElementById(`topic${n}-defs`).checked,
      eqs:  document.getElementById(`topic${n}-eqs`).checked
    };
  });
  return { wholeDefs, wholeEqs, modes };
}

// 6) Build question pool based on checks & difficulty
function buildQuestionPool() {
  const { wholeDefs, wholeEqs, modes } = getCheckedTopicModes();
  const diff = getSelectedDifficulty();
  let filtered = [];

  questionBank.forEach(q => {
    const isDef = q.type === "definition";
    const isEq  = ["equation","numeric","numeric_multi","numeric_dynamic"].includes(q.type);
    let matched = (wholeDefs && isDef) || (wholeEqs && isEq);
    const setting = modes.find(m => m.topic === q.topic);
    if (setting) {
      if (!matched && isDef && setting.defs) matched = true;
      if (!matched && isEq  && setting.eqs ) matched = true;
    }
    if (matched) filtered.push(q);
  });

  if (diff === "easy") {
    filtered = filtered.filter(q => q.difficulty === "easy" || !q.difficulty);
  } else if (diff === "hard") {
    filtered = filtered.filter(q => q.difficulty === "hard");
  }
  return filtered;
}

// 7) Core practice‐flow functions
score = 0;
mixedCount = 0;
questionPool = [];
answeredCurrent = false;
currentQuestion = null;
currentAnswers = null;

function startPractice() {
  score = 0;
  document.getElementById("score").innerText = score;
  mixedCount = 0;
  answeredCurrent = false;
  questionPool = buildQuestionPool();
  if (!questionPool.length) {
    document.getElementById("question-box").innerText = "No matching questions available yet.";
    return;
  }
  askNewQuestion();
}

function askNewQuestion() {
  if (!questionPool.length) {
    document.getElementById("question-box").innerText = "No matching questions available yet.";
    return;
  }
  answeredCurrent = false;
  document.getElementById("feedback").innerText = "";

  const diff = getSelectedDifficulty();
  let subset = questionPool;

  if (diff === "mixed") {
    subset = (mixedCount % 3 < 2)
      ? questionPool.filter(q => q.difficulty === "easy" || !q.difficulty)
      : questionPool.filter(q => q.difficulty === "hard");
    mixedCount++;
    if (!subset.length) subset = questionPool;
  }

  const choice = subset[Math.floor(Math.random() * subset.length)];
  loadQuestion(choice);
}

function loadQuestion(q) {
  currentQuestion = q;
  if (typeof q.question === "function") {
    const built = q.question();
    q.text = built.text;
    q.answer = built.answer;
    q.modelAnswer = built.modelAnswer;
    q.image = built.image || null;
    q.setup       = built.setup   || null;
  } else {
    q.text = q.question;
  }

  document.getElementById("diagramContainer").innerHTML = "";
  document.getElementById("answerInputs").innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("question-box").innerText = "Question: " + q.text;
  if (q.image) {
    document.getElementById("diagramContainer").innerHTML = q.image;
   if (typeof q.setup === "function") {
      q.setup();
   }
  }

  // Build input fields
  if (q.type === "definition") {
    const inp = document.createElement("input");
    inp.type = "text"; inp.id = "answerInput"; inp.placeholder = "Enter your answer...";
    document.getElementById("answerInputs").appendChild(inp);
    currentAnswers = q.keywords || [q.answer];
  } else if (["equation","numeric","numeric_dynamic"].includes(q.type)) {
    const inp = document.createElement("input");
    inp.type = "text"; inp.id = "answerInput"; inp.placeholder = "Enter your answer...";
    document.getElementById("answerInputs").appendChild(inp);
    currentAnswers = [q.answer];
  } else if (q.type === "numeric_multi") {
    q.answer.forEach((_, i) => {
      const inp = document.createElement("input");
      inp.type = "text";
      inp.id = `answerInput${i+1}`;
      inp.placeholder = `Part ${String.fromCharCode(97+i)}`;
      inp.style.width = "100px";
      if (i > 0) inp.style.marginLeft = "10px";
      document.getElementById("answerInputs").appendChild(inp);
    });
    currentAnswers = q.answer;
  }
}

function checkAnswer() {
  if (!currentQuestion || answeredCurrent) return;
  let userAns;

  if (currentQuestion.type === "numeric_multi") {
    userAns = Array.from(document.querySelectorAll("#answerInputs input"))
                   .map(i => i.value.trim());
  } else {
    userAns = document.getElementById("answerInput").value.trim();
  }

  let correct = false;

  if (currentQuestion.type === "definition") {
    const ansLower = userAns.toLowerCase();
    correct = currentAnswers.every(group => group.some(k => ansLower.includes(k)));
  } else if (["equation","numeric","numeric_dynamic"].includes(currentQuestion.type)) {
    const numU = parseFloat(userAns), numC = parseFloat(currentAnswers[0]);
    correct = !isNaN(numU) && Math.abs(numU - numC) < Math.max(0.01*Math.abs(numC), 0.1);
  } else if (currentQuestion.type === "numeric_multi") {
    correct = currentAnswers.every((ans, i) => {
      const numU = parseFloat(userAns[i]), numC = parseFloat(ans);
      return !isNaN(numU) && Math.abs(numU - numC) <= Math.max(0.01*Math.abs(numC), 0.1);
    });
  }

  const fb = document.getElementById("feedback");
  if (correct) {
    fb.innerText = "✔ Correct!";
    score++;
    document.getElementById("score").innerText = score;
  } else {
    fb.innerText = "✘ Not quite correct.";
  }
  answeredCurrent = true;
}

function showModelAnswer() {
  if (!currentQuestion) return;
  let text = "Model Answer: ";
  if (currentQuestion.type === "numeric_multi" && Array.isArray(currentQuestion.modelAnswer)) {
    text += currentQuestion.modelAnswer.join(" | ");
  } else {
    text += currentQuestion.modelAnswer;
  }
  document.getElementById("feedback").innerText = text;
  answeredCurrent = true;
}

// 8) Wire up buttons and initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  const questionBox = document.getElementById("question-box");

  // Create and insert the three action buttons right after the question box
  const buttonSpecs = [
    { text: "Check Answer",  onClick: checkAnswer },
    { text: "Show Model Answer", onClick: showModelAnswer },
    { text: "Next Question",  onClick: askNewQuestion }
  ];

  buttonSpecs.forEach(spec => {
    const btn = document.createElement("button");
    btn.innerText = spec.text;
    btn.style.marginRight = "10px";
    btn.addEventListener("click", spec.onClick);
    questionBox.insertAdjacentElement("afterend", btn);
  });

  // Finally, render the topic checkboxes
  generateTopicCheckboxes();
});
