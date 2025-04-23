// js/topics/topic6.js
const additionalQuestionsTopic6 = [
  {
    topic: 6,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const kVal = (Math.random() * 200 + 100).toFixed(0);
      const F = (Math.random() * 50 + 20).toFixed(0);
      const extension = (F / kVal).toFixed(3);
      return {
        text: `A spring with constant ${kVal} N/m is pulled with a force of ${F} N. Calculate its extension.`,
        answer: extension + " m",
        modelAnswer: `Using Hooke's law, x = F/k ≈ ${extension} m.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of strain to determine its SI units.",
    modelAnswer: "Strain is dimensionless.",
    keywords: [["dimensionless"]]
  },
  {
    topic: 6,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const L = (Math.random() * 100 + 50).toFixed(0);
      const A = (Math.random() * 0.001 + 0.0005).toFixed(6);
      const F = (Math.random() * 1000 + 500).toFixed(0);
      const E = 200e9;
      const strain = F / (E * A);
      const extension = ((L / 100) * strain).toFixed(6);
      return {
        text: `A rod (${L} cm long, area ${A} m²) is under a force of ${F} N. With E = 200 GPa, calculate its extension.`,
        answer: extension + " m",
        modelAnswer: `Extension = (L/100) × (F/(E*A)) ≈ ${extension} m.`
      };
    }
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "numeric_multi",
    question: function() {
      const k_num = 0.3 + Math.random() * 0.2;
      const L0 = Math.random() * 5;
      const F_applied = Number((Math.random() * 10 + 10).toFixed(0));
      const answerPart1 = (k_num*100).toFixed(2) + " N/m";
      const x_cm = F_applied / k_num;
      const x_m = x_cm / 100;
      const k_SI = k_num * 100;
      const energy = 0.5 * k_SI * (x_m * x_m);
      const answerPart2 = energy.toFixed(2) + " J";
      const answerCombined = [answerPart1, answerPart2];
      const modelAnswerPart1 = `Answer (a): Using Hooke's Law, F = kx, we can use the gradient of the graph to give k, however, you must make sure you do rise over run and not just take one data point as the graph does not go throught the origin. For this graph, k = ${(k_num*100).toFixed(2)} N/m.`;
      const modelAnswerPart2 = `Answer (b): With F = ${F_applied} N, the extension is x = F/k = ${x_cm.toFixed(2)} cm (${x_m.toFixed(4)} m). Converting k to SI units gives k = ${k_SI.toFixed(2)} N/m so the elastic potential energy is E = ½·k·x² ≈ ${energy.toFixed(2)} J.`;
      const modelAnswerCombined = [modelAnswerPart1, modelAnswerPart2];
      const canvasId = "springChart_" + Math.floor(Math.random() * 100000);
      const imageHtml = `<canvas id="${canvasId}" width="600" height="400"></canvas>`;
      setTimeout(() => {
        drawSpringChart(canvasId, k_num, L0);
      }, 700);
      return {
        text: `A force vs. extension graph for a spring is shown below. 
(a) Determine the spring constant k from the graph.
(b) Determine the elastic potential energy stored when the applied force is ${F_applied} N.`,
        answer: answerCombined,
        modelAnswer: modelAnswerCombined,
        image: imageHtml
      };
    }
  },
  {
    topic: 6,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F = (Math.random() * 500 + 100).toFixed(0);
      const k_approx = (Math.random() * 100 + 200).toFixed(0);
      const x = (F / k_approx).toFixed(3);
      const energy = (0.5 * F * x).toFixed(2);
      return {
        text: `If a material with stiffness ${k_approx} N/m is extended by a force of ${F} N (extension = ${x} m), calculate its stored energy.`,
        answer: energy + " J",
        modelAnswer: `Elastic energy = 0.5×F×x ≈ ${energy} J.`
      };
    }
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define Young's modulus and its significance.",
    modelAnswer: "Young's modulus is the ratio of stress to strain in the elastic range and indicates material stiffness.",
    keywords: [["stiffness"], ["stress"], ["strain"]]
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const deltaL = (Math.random() * 0.05 + 0.01).toFixed(3);
      const L0 = (Math.random() * 1 + 1).toFixed(2);
      const strain = (deltaL / L0).toFixed(3);
      return {
        text: `A rod of length ${L0} m is extended by ${deltaL} m. Calculate its strain.`,
        answer: strain,
        modelAnswer: `Strain = ΔL / L₀ ≈ ${strain} (dimensionless).`
      };
    }
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "State Hooke's Law.",
    modelAnswer: "Within the elastic limit, extension is directly proportional to the applied force.",
    keywords: [["proportional"], ["force"]]
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define stress.",
    modelAnswer: "Stress is force per unit area of a material.",
    keywords: [["force"], ["area"]]
  },
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define strain.",
    modelAnswer: "Strain is the ratio of change in length to the original length.",
    keywords: [["ratio"], ["change"], ["original length"]]
  },
  {
    topic: 6,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const length = 2, area = 1e-4, force = 10000, E = 200e9;
      const stress = force / area;
      const strain = stress / E;
      const elongation = length * strain;
      return {
        text: `A rod (${length} m long, area ${area} m²) is subjected to ${force} N with E = ${E / 1e9} GPa. Calculate: (a) stress, (b) strain, (c) elongation.`,
        answer: [stress.toExponential(2) + " Pa", strain.toExponential(2), elongation.toExponential(2) + " m"],
        modelAnswer: [
          `Stress ≈ ${stress.toExponential(2)} Pa,`,
          `Strain ≈ ${strain.toExponential(2)},`,
          `Elongation ≈ ${elongation.toExponential(2)} m.`
        ]
      };
    }
  }
];

