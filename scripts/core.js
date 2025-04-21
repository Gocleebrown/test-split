// scripts/core.js

// Global variables & setup
let answeredCurrent = false;
let currentQuestion = null;
let currentAnswers = null;
let score = 0;
let mixedCount = 0;
let questionPool = [];

// Utility: Ordinal suffix for harmonic questions
function ordinalSuffix(n) {
  let j = n % 10, k = n % 100;
  if (j === 1 && k !== 11) return n + "st";
  if (j === 2 && k !== 12) return n + "nd";
  if (j === 3 && k !== 13) return n + "rd";
  return n + "th";
}

// Utility: Return a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Draw spring F vs x chart (using Chart.js)
function drawSpringChart(canvasId, k, L0) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const MAX_L = 60;
  const dataPoints = [];
  for (let L = 0; L <= MAX_L; L += 1) {
    const F = Math.max(0, k * (L - L0));
    dataPoints.push({ x: L, y: F });
  }
  new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Force vs. Extension',
        data: dataPoints,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointRadius: 0
      }]
    },
    options: {
      responsive: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: { display: true, text: 'Extension L (cm)' },
          min: 0,
          max: MAX_L,
          ticks: { stepSize: 2 }
        },
        y: {
          title: { display: true, text: 'Force F (N)' },
          min: 0,
          ticks: { stepSize: 2 }
        }
      },
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Force vs. Extension Graph' }
      }
    }
  });
}

// Draw oscilloscope‑style sine trace
function drawOscilloscopeChart(canvasId, cycles, timeBase) {
  const totalDivisions = 10;
  const totalTime = timeBase * totalDivisions;
  const period = totalTime / cycles;
  const N = 5;
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const samples = 600;
  const dataPoints = [];
  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * totalTime;
    const y = Math.sin(2 * Math.PI * t / period);
    dataPoints.push({ x: t, y: y });
  }
  new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{ data: dataPoints, pointRadius: 0, borderWidth: 2, fill: false, tension: 0 }]
    },
    options: {
      responsive: false,
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: 'Div' },
          min: 0,
          max: totalTime,
          ticks: {
            stepSize: timeBase / N,
            autoSkip: false,
            maxTicksLimit: totalDivisions * N + 1,
            callback: value => Number.isInteger(value / timeBase) ? value / timeBase : ''
          },
          grid: {
            drawOnChartArea: true,
            color: ctx => Number.isInteger(ctx.tick.value / timeBase) ? 'rgba(0,0,0,0.3)' : 'rgba(200,0,0,0.1)',
            lineWidth: ctx => Number.isInteger(ctx.tick.value / timeBase) ? 1.5 : 0.5
          }
        },
        y: {
          title: { display: true, text: 'Voltage (arb. units)' },
          min: -1.2,
          max: 1.2,
          ticks: { stepSize: 1 },
          grid: { drawOnChartArea: true, lineWidth: 1 }
        }
      },
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Oscilloscope Trace' }
      }
    }
  });
}

// Checkbox toggler
function toggleByGroup(typeSuffix, isChecked) {
  document
    .querySelectorAll(`input[id$="-${typeSuffix}"]`)
    .forEach(box => box.checked = isChecked);
}
