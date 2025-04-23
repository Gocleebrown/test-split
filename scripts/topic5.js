// js/topics/topic5.js
const additionalQuestionsTopic5 = [
  {
  topic: 5,
  difficulty: "hard",
  type: "numeric_multi",
  question: function() {
    // — Dynamic inputs —
const angle  = Math.floor(Math.random() * (80 - 25 + 1)) + 25;
const weight = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
const power  = Math.floor(Math.random() * (500 - 80 + 1)) + 80;
    // — Calculations —
    const tension = (weight * Math.sin(angle * Math.PI/180)).toFixed(1);
    const speed   = (power / tension).toFixed(2);

    // unique canvas id so multiples don’t clash
    const canvasId = `winch_${angle}_${weight}_${power}`;

    return {
      text: `A car is pulled up a slope by a winch, as shown in the figure.  
- Winch power output: ${power} W  
- Car weight: ${weight} N  
- Slope angle: ${angle}°  

The car moves at constant speed. Assume no friction.  

(i) Calculate the tension in the cable.  
(ii) Calculate the speed of the car up the slope.`,
      
      // canvas placeholder for the diagram:
      image: `<canvas id="${canvasId}" width="500" height="1000"></canvas>`,

      // once rendered, draw the slope + car + winch:
      setup: () => setTimeout(() => drawWinchDiagram(canvasId, angle), 50),

      answer: [ `${tension} N`, `${speed} m/s` ],

      modelAnswer: [
        // part (i)
        `1. Weight acts straight down (${weight} N).  
2. On a slope, the component pulling down the slope is W × sin θ = ${weight}×sin(${angle}°) ≈ ${tension} N.  
3. So the winch must pull with that tension to keep the car moving steadily.`,

        // part (ii)
        `1. Power (P) = force (F) × speed (v).  
2. Rearrange: v = P / F = ${power} W ÷ ${tension} N ≈ ${speed} m/s.  
3. That means the car travels up the slope at about ${speed} m/s.`
      ]
    };
  }
  },
{
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 10 + 5).toFixed(1);
      const h = (Math.random() * 10 + 5).toFixed(1);
      const g = 9.81;
      const GPE = (m * g * h).toFixed(1);
      return {
        text: `Calculate the gravitational potential energy of a ${m} kg object raised to ${h} m.`,
        answer: GPE + " J",
        modelAnswer: `GPE = mgh ≈ ${GPE} J.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const W = (Math.random() * 500 + 200).toFixed(0);
      const t = (Math.random() * 10 + 5).toFixed(1);
      const P = (W / t).toFixed(1);
      return {
        text: `If ${W} J of work is done in ${t} s, calculate the power output.`,
        answer: P + " W",
        modelAnswer: `Power = Work/Time ≈ ${P} W.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const k = (Math.random() * 200 + 100).toFixed(0);
      const x = (Math.random() * 0.1 + 0.05).toFixed(3);
      const energy = (0.5 * k * x * x).toFixed(3);
      return {
        text: `A spring with constant ${k} N/m is compressed by ${x} m. Calculate the stored energy.`,
        answer: energy + " J",
        modelAnswer: `Energy = 0.5×k×x² ≈ ${energy} J.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F = (Math.random() * 50 + 50).toFixed(0);
      const d = (Math.random() * 10 + 5).toFixed(1);
      const reduction = (Math.random() * 0.3 + 0.2).toFixed(2);
      const effectiveForce = (F * (1 - reduction)).toFixed(1);
      const work = (effectiveForce * d).toFixed(1);
      return {
        text: `A force of ${F} N acts over ${d} m, but friction reduces the force by ${(reduction * 100).toFixed(0)}%. Calculate the net work done.`,
        answer: work + " J",
        modelAnswer: `Effective force ≈ ${effectiveForce} N, so work ≈ ${work} J.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const m = (Math.random() * 5 + 1).toFixed(1);
      const h = (Math.random() * 10 + 5).toFixed(1);
      const g = 9.81;
      const v = (Math.sqrt(2 * g * h)).toFixed(2);
      return {
        text: `An object of ${m} kg is dropped from ${h} m. Calculate its impact speed using energy conservation.`,
        answer: v + " m/s",
        modelAnswer: `v = √(2gh) ≈ ${v} m/s.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = Math.floor(Math.random() * 10 + 1);
      const v = Math.floor(Math.random() * 10 + 1);
      const KE = (0.5 * m * v * v).toFixed(1);
      return {
        text: `Calculate the kinetic energy of a ${m} kg object moving at ${v} m/s.`,
        answer: KE,
        modelAnswer: `KE ≈ ${KE} J.`
      };
    }
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "State what is meant by the work done by a force.",
    modelAnswer: "Work is done when a force causes an object to move in its direction.",
    keywords: [["force"], ["movement"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Define power.",
    modelAnswer: "Power is the rate of doing work or transferring energy.",
    keywords: [["rate"], ["work"], ["energy"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of power to determine its SI units.",
    modelAnswer: "Power in SI units is kg·m²/s³.",
    keywords: [["kg"], ["m²"], ["s³"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of work to determine its SI units.",
    modelAnswer: "Work in SI units is kg·m²/s².",
    keywords: [["kg"], ["m²"], ["s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of force (F = m·a) to determine its SI units.",
    modelAnswer: "Force in SI units is kg·m/s².",
    keywords: [["kg"], ["m/s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of pressure (P = F/A) to determine its SI units.",
    modelAnswer: "Pressure in SI units is kg/(m·s²).",
    keywords: [["kg"], ["m"], ["s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of momentum (p = m·v) to determine its SI units.",
    modelAnswer: "Momentum in SI units is kg·m/s.",
    keywords: [["kg"], ["m/s"]]
  },
];

