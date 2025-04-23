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
/**
/**
 /**
 * Draw a car-on-slope + winch diagram with baseline, dynamic angle arc, and winch label.
 * @param {string} canvasId – id of the <canvas> element
 * @param {number} angleDeg – slope angle in degrees
 */
function drawWinchDiagram(canvasId, angleDeg) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.width, H = c.height;
  ctx.clearRect(0, 0, W, H);

  const margin   = 20;
  const slopeLen = W - 2 * margin;
  const baseY    = H - margin;

  // 1) Horizontal baseline
  ctx.beginPath();
  ctx.moveTo(margin, baseY);
  ctx.lineTo(W - margin, baseY);
  ctx.lineWidth   = 2;
  ctx.strokeStyle = '#000';
  ctx.stroke();

  // 2) Dynamic angle arc at the base
  const originX = margin;
  const originY = baseY;
  const arcR    = 30;
  const angleRad = angleDeg * Math.PI / 180;

  ctx.beginPath();
  ctx.arc(originX, originY, arcR, 0, -angleRad, true);
  ctx.lineWidth   = 2;
  ctx.strokeStyle = '#000';
  ctx.stroke();

  // Label the angle a bit further out for clarity
  const midAng = -angleRad / 2;
  // push label radius out by +20 instead of +12
  const labelRadius = arcR + 1000;
  const labelX = originX + labelRadius * Math.cos(midAng);
  const labelY = originY + labelRadius * Math.sin(midAng);
  ctx.font      = '14px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText(`${angleDeg}°`, labelX - 7, labelY + 5);

  // 3) Draw slope, car, and cable in rotated coords
  ctx.save();
  ctx.translate(margin, baseY);
  ctx.rotate(-angleRad);

  // 3a) slope line
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(slopeLen, 0);
  ctx.lineWidth   = 4;
  ctx.strokeStyle = '#555';
  ctx.stroke();

  // 3b) car rectangle
  const carW = 40, carH = 20;
  const carX = slopeLen * 0.3;
  const carY = -carH;
  ctx.fillStyle = '#888';
  ctx.fillRect(carX, carY, carW, carH);

  // 3c) cable from car up the slope
  ctx.beginPath();
  ctx.moveTo(carX + carW, carY + carH / 2);
  ctx.lineTo(slopeLen - 10, -10);
  ctx.lineWidth   = 2;
  ctx.strokeStyle = '#333';
  ctx.stroke();

  ctx.restore();

  // 4) Compute end-of-slope for the winch drum
  const endX = margin + slopeLen * Math.cos(angleRad);
  const endY = baseY  - slopeLen * Math.sin(angleRad);

  // 4a) winch drum (outer & inner)
  ctx.beginPath();
  ctx.arc(endX, endY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(endX, endY, 3, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();

  // 5) Leader line + “winch” label
  const labelX2 = endX + 25;
  const labelY2 = endY - 30;
  ctx.beginPath();
  ctx.moveTo(endX, endY);
  ctx.lineTo(labelX2, labelY2);
  ctx.lineWidth   = 2;
  ctx.strokeStyle = '#000';
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.fillText('winch', labelX2 + 5, labelY2 - 5);
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
