// js/topics/topic7.js
const additionalQuestionsTopic7 = [
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const T = (Math.random() * 20 + 50).toFixed(1);
      const mu = (Math.random() * 0.005 + 0.005).toFixed(4);
      const v = Math.sqrt(T / mu).toFixed(2);
      return {
        text: `A wave travels along a string under ${T} N tension with linear density ${mu} kg/m. Find its speed.`,
        answer: v + " m/s",
        modelAnswer: `Speed = √(T/μ) ≈ ${v} m/s.`
      };
    }
  },
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const v = (Math.random() * 50 + 300).toFixed(1);
      const f = (Math.random() * 10 + 50).toFixed(1);
      const lambda = (v / f).toFixed(2);
      return {
        text: `A sound wave has speed ${v} m/s and frequency ${f} Hz. Calculate its wavelength.`,
        answer: lambda + " m",
        modelAnswer: `λ = v / f ≈ ${lambda} m.`
      };
    }
  },
  {
    topic: 7,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const f0 = (Math.random() * 10 + 400).toFixed(1);
      const v = 340;
      const vs = (Math.random() * 10 + 10).toFixed(1);
      const f_obs = (f0 * (v / (v - vs))).toFixed(1);
      return {
        text: `A source emitting ${f0} Hz moves towards an observer at ${vs} m/s. Calculate the observed frequency.`,
        answer: f_obs + " Hz",
        modelAnswer: `Using Doppler: f ≈ ${f0}×(340/(340−${vs})) ≈ ${f_obs} Hz.`
      };
    }
  },
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define wavelength.",
    modelAnswer: "Wavelength is the distance between successive in-phase points on a wave.",
    keywords: [["distance"], ["in phase"]]
  },
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define frequency.",
    modelAnswer: "Frequency is the number of oscillations per second.",
    keywords: [["oscillations"], ["Hz"]]
  },
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define wavefront.",
    modelAnswer: "A wavefront is a line joining points on a wave that are in phase.",
    keywords: [["line"], ["in phase"]]
  },
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const timeBase = [1, 2, 5][Math.floor(Math.random() * 3)];
      const cycles  = Math.floor(Math.random() * 2) + 3;
      const totalDivisions = 10;
      const totalTime = timeBase * totalDivisions;
      const period = totalTime / cycles;
      const canvasId = "oscChart_" + Math.floor(Math.random() * 1e5);
      const imageHtml = `<canvas id="${canvasId}" width="600" height="300"></canvas>`;
      setTimeout(() => { drawOscilloscopeChart(canvasId, cycles, timeBase); }, 100);
      return {
        text: `The oscilloscope below is set to ${timeBase} ms/division. Determine the wave’s period in ms.`,
        answer: period.toFixed(1) + " ms",
        modelAnswer: `Time period is the time for 1 whole wave. Count divisions and multiply by time base, then divide by number of cycles: T = (10 × ${timeBase} ms) / ${cycles} ≈ ${period.toFixed(1)} ms.`,
        image: imageHtml
      };
    }
  }
];

