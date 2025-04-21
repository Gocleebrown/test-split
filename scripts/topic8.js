// js/topics/topic8.js
const additionalQuestionsTopic8 = [
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "State the principle of superposition.",
    modelAnswer: "When waves overlap, the net displacement is the sum of the individual displacements.",
    keywords: [["sum", "add or subtract"], ["displacement"]]
  },
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define constructive interference.",
    modelAnswer: "Constructive interference occurs when waves in phase add together to increase displacement.",
    keywords: [["in phase"], ["displacement", "amplitude"], ["add", "increase"]]
  },
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define destructive interference.",
    modelAnswer: "Destructive interference occurs when waves out of phase cancel each other causing the resultant displacement to be lower.",
    keywords: [["out of phase"], ["cancel","less", "reduce", "lower"]]
  },
  {
    topic: 8,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const n = Math.floor(Math.random() * 3 + 1);
      const L = Math.floor(Math.random() * 3 + 1);
      const v = Math.floor(Math.random() * 200 + 100);
      const f = (n * v) / (2 * L);
      return {
        text: `A pipe closed at both ends of length ${L} m vibrates in its ${ordinalSuffix(n)} harmonic. Find its frequency.`,
        answer: f.toFixed(1),
        modelAnswer: `Frequency ≈ ${f.toFixed(1)} Hz using f = n·v/(2L).`
      };
    }
  },
  {
    topic: 8,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const L = Math.floor(Math.random() * 3 + 1);
      const n = Math.floor(Math.random() * 3 + 1);
      const v = Math.floor(Math.random() * 50 + 330);
      const lambda = (2 * L) / n;
      const f = v / lambda;
      return {
        text: `An open pipe of length ${L} m vibrates in its ${ordinalSuffix(n)} harmonic mode. Calculate (a) the wavelength and (b) the frequency.`,
        answer: [lambda.toFixed(2) + " m", f.toFixed(2) + " Hz"],
        modelAnswer: [
          `λ = 2L/n ≈ ${lambda.toFixed(2)} m,`,
          `f = v/λ ≈ ${f.toFixed(2)} Hz.`
        ]
      };
    }
  },
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "A string 8cm long is fixed at both ends. A point on the string is moved downwards and then released. Explain how a standing wave is formed on the string.",
    modelAnswer: "Waves travel along the string and reflect at the fixed ends. The returning wave interferes with the incoming wave, and if their frequencies match, a standing wave is formed.",
    keywords: [["reflect", "bounce"], ["fixed point", "end"], ["two waves"], ["interfere", "standing"]]
  },
  {
    topic: 8,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const d = (Math.random() * 0.5 + 0.2).toFixed(2);
      const v = Math.floor(Math.random() * 50 + 330);
      const f = v / (2 * d);
      return {
        text: `A speaker and wall setup gives loud points spaced ${d} m apart. If sound speed is ${v} m/s, find the frequency.`,
        answer: f.toFixed(2) + " Hz",
        modelAnswer: `Loud point spacing = ½λ, so λ = 2×${d} ≈ ${(2 * d).toFixed(2)} m; f = ${v} / (${2 * d}) ≈ ${f.toFixed(2)} Hz.`
      };
    }
  },
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define a standing wave.",
    modelAnswer: "A standing wave is formed by two waves traveling in opposite directions with the same frequency and similar amplitude.",
    keywords: [["opposite", "different direction"], ["frequency"], ["amplitude"]]
  }
];

