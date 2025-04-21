// Combine all topic arrays into one question bank
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

// Topic names for checkbox labels
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

// Generate topic checkboxes
function generateTopicCheckboxes() {
  const left = document.getElementById("topic-columns-left");
  const right = document.getElementById("topic-columns-right");
  topicsArrNames.forEach((name, i) => {
    const topicNum = i + 1;
    const block = `<h3>${topicNum}. ${name}</h3>
      <label><input type="checkbox" id="topic${topicNum}-defs"> Definitions</label>
      <label><input type="checkbox" id="topic${topicNum}-eqs"> Equations</label>`;
    if (i % 2 === 0) left.innerHTML += block;
    else right.innerHTML += block;
  });
}

// Toggle all defs or eqs checkboxes
function toggleByGroup(typeSuffix, isChecked) {
  const boxes = document.querySelectorAll(`input[id$="-${typeSuffix}"]`);
  boxes.forEach(box => box.checked = isChecked);
}

// Read selected difficulty
function getSelectedDifficulty() {
  const radios = document.getElementsByName("difficulty");
  for (let radio of radios) if (radio.checked) return radio.value;
  return "easy";
}

// Read which topics & types are checked
function getCheckedTopicModes() {
  const wholeDefs = document.getElementById("whole-defs").checked;
  const wholeEqs = document.getElementById("whole-eqs").checked;
  const modes = [];
  for (let i = 1; i <= topicsArrNames.length; i++) {
    const defs = document.getElementById(`topic${i}-defs`).checked;
    const eqs  = document.getElementById(`topic${i}-eqs`).checked;
    modes.push({ topic: i, defs, eqs });
  }
  return { wholeDefs, wholeEqs, modes };
}

// Build question pool based on checks & difficulty
function buildQuestionPool() {
  const { wholeDefs, wholeEqs, modes } = getCheckedTopicModes();
  const diff = getSelectedDifficulty();
  let filtered = [];
  questionBank.forEach(q => {
    const isDef = q.type === "definition";
    const isEq  = ["equation","numeric","numeric_multi","numeric_dynamic"].includes(q.type);
    let matched = (wholeDefs && isDef) || (wholeEqs && isEq);
    const topicSetting = modes.find(m => m.topic === q.topic);
    if (topicSetting) {
      if (!matched && isDef && topicSetting.defs) matched = true;
      if (!matched && isEq && topicSetting.eqs) matched = true;
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

// Starts a new practice run
function startPractice() {
  score = 0;
  document.getElementById("score").innerText = score;
  answeredCurrent = false;
  mixedCount = 0;
  questionPool = buildQuestionPool();
  if (questionPool.length === 0) {
    document.getElementById("question-box").innerText = "No matching questions available yet.";
    return;
  }
  askNewQuestion();
  document.getElementById("question-box").scrollIntoView({ behavior: 'smooth' });
}

// Ask a new question
function askNewQuestion() {
  answeredCurrent = false;
  document.getElementById("feedback").innerText = "";
  if (!questionPool.length) {
    document.getElementById("question-box").innerText = "No matching questions available yet.";
    return;
  }
  let subset = questionPool;
  const diff = getSelectedDifficulty();
  if (diff === "mixed") {
    subset = (mixedCount % 3 < 2)
      ? questionPool.filter(q => q.difficulty === "easy" || !q.difficulty)
      : questionPool.filter(q => q.difficulty === "hard");
    mixedCount++;
  }
  if (!subset.length) subset = questionPool;
  loadQuestion(getRandom(subset));
}

// Load and render a question
function loadQuestion(q) {
  currentQuestion = q;
  if (typeof q.question === "function") {
    const built = q.question();
    q.text = built.text;
    q.answer = built.answer;
    q.modelAnswer = built.modelAnswer;
    q.image = built.image || null;
  } else {
    q.text = q.question;
  }
  document.getElementById("diagramContainer").innerHTML = "";
  document.getElementById("answerInputs").innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("question-box").innerText = "Question: " + q.text;
  if (q.image) {
    document.getElementById("diagramContainer").innerHTML = q.image;
  }
  // Build appropriate input fields
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
      inp.placeholder = `Part (${String.fromCharCode(97+i)})`;
      inp.style.width = "100px";
      if (i>0) inp.style.marginLeft = "10px";
      document.getElementById("answerInputs").appendChild(inp);
    });
    currentAnswers = q.answer;
  }
}

// Check the user's answer
function checkAnswer() {
  if (!currentQuestion || answeredCurrent) return;
  let userAns;
  if (currentQuestion.type === "numeric_multi") {
    userAns = Array.from(document.querySelectorAll("#answerInputs input")).map(i => i.value.trim());
  } else {
    userAns = document.getElementById("answerInput").value.trim();
  }
  let correct = false;
  if (currentQuestion.type === "definition") {
    const ansLower = userAns.toLowerCase();
    correct = currentAnswers.every(group => group.some(k => ansLower.includes(k)));
  } else if (["equation","numeric","numeric_dynamic"].includes(currentQuestion.type)) {
    const userNum = parseFloat(userAns);
    const correctNum = parseFloat(currentAnswers[0]);
    correct = !isNaN(userNum) && Math.abs(userNum - correctNum) < Math.max(0.01*Math.abs(correctNum), 0.1);
  } else if (currentQuestion.type === "numeric_multi") {
    correct = currentAnswers.every((ans,i) => {
      const userNum = parseFloat(userAns[i]);
      const correctNum = parseFloat(ans);
      return !isNaN(userNum) && Math.abs(userNum - correctNum) <= Math.max(0.01*Math.abs(correctNum), 0.1);
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

// Show the model answer
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

// Wire up the Check, Show, Next buttons
const checkBtn = document.createElement("button");
checkBtn.innerText = "Check Answer"; checkBtn.style.marginRight = "10px";
checkBtn.onclick = checkAnswer;
const showBtn = document.createElement("button");
showBtn.innerText = "Show Model Answer"; showBtn.style.marginRight = "10px";
showBtn.onclick = showModelAnswer;
const nextBtn = document.createElement("button");
nextBtn.innerText = "Next Question"; nextBtn.onclick = askNewQuestion;
const container = document.getElementById("question-box").parentNode;
container.insertBefore(checkBtn, container.children[1]);
container.insertBefore(showBtn, container.children[2]);
container.insertBefore(nextBtn, container.children[3]);

// Initialize on page load
generateTopicCheckboxes();
