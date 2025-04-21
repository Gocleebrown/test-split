// scripts/core.js

// Global variables
let answeredCurrent = false,
    currentQuestion = null,
    currentAnswers = null,
    score = 0,
    mixedCount = 0,
    questionPool = [];

// Utility functions
function ordinalSuffix(n) { /* … as before … */ }
function getRandom(arr)   { /* … as before … */ }

// Chart‐drawing functions
function drawSpringChart(canvasId, k, L0) { /* … */ }
function drawOscilloscopeChart(canvasId, cycles, timeBase) { /* … */ }

// Checkbox toggler
function toggleByGroup(typeSuffix, isChecked) {
  document
    .querySelectorAll(`input[id$="-${typeSuffix}"]`)
    .forEach(box => box.checked = isChecked);
}
