// js/topics/topic10.js
const additionalQuestionsTopic10 = [
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 50 + 50);
      const R2 = Math.floor(Math.random() * 50 + 50);
      const Vin = Math.floor(Math.random() * 20 + 10);
      const Vout = (Vin * (R2 / (R1 + R2))).toFixed(1);
      return {
        text: `In a voltage divider with ${R1} Ω and ${R2} Ω resistors and Vin = ${Vin} V, find the voltage across the ${R2} Ω resistor.`,
        answer: Vout,
        modelAnswer: `V_out = Vin×(R2/(R1+R2)) ≈ ${Vout} V.`
      };
    }
  },
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const Vin = Math.floor(Math.random() * 20 + 10);
      const R_total = Math.floor(Math.random() * 100 + 100);
      const I = (Vin / R_total).toFixed(2);
      return {
        text: `Find the current in a series circuit with R_total = ${R_total} Ω and Vin = ${Vin} V.`,
        answer: I,
        modelAnswer: `I = Vin/R ≈ ${I} A.`
      };
    }
  },
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const I = Math.floor(Math.random() * 5 + 1);
      const R = Math.floor(Math.random() * 100 + 50);
      const P = (I * I * R).toFixed(1);
      return {
        text: `Calculate the power in a ${R} Ω resistor with current ${I} A.`,
        answer: P,
        modelAnswer: `P = I²×R ≈ ${P} W.`
      };
    }
  },
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 50 + 50);
      const R2 = Math.floor(Math.random() * 50 + 50);
      const R3 = Math.floor(Math.random() * 50 + 50);
      const R_total = R1 + R2 + R3;
      return {
        text: `Three resistors of ${R1} Ω, ${R2} Ω, and ${R3} Ω are in series. Find R_total.`,
        answer: R_total.toFixed(1),
        modelAnswer: `R_total = ${R1} + ${R2} + ${R3} = ${R_total} Ω.`
      };
    }
  },
  {
    topic: 10,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const R1 = 100, R2 = 200, R3 = 300, Vin = 12;
      const R_total = R1 + R2 + R3;
      const I = Vin / R_total;
      const V_R2 = I * R2;
      const power_R2 = (V_R2 * V_R2) / R2;
      return {
        text: `In a series circuit with resistors ${R1} Ω, ${R2} Ω, and ${R3} Ω and Vin = ${Vin} V, calculate: (a) voltage across ${R2} Ω, (b) power dissipated in it.`,
        answer: [V_R2.toFixed(2)+" V", power_R2.toFixed(2)+" W"],
        modelAnswer: [
          `V_R2 = Vin×(R2/R_total) ≈ ${V_R2.toFixed(2)} V.`,
          `Power = V_R2²/R2 ≈ ${power_R2.toFixed(2)} W.`
        ]
      };
    }
  },
  {
    topic: 10,
    difficulty: "easy",
    type: "definition",
    question: "Define resistance.",
    modelAnswer: "Resistance is the ratio of the voltage across a conductor to the current flowing through it.",
    keywords: [["voltage"], ["current"], ["ratio"]]
  },
  {
    topic: 10,
    difficulty: "easy",
    type: "definition",
    question: "Define internal resistance.",
    modelAnswer: "Internal resistance is the resistance inside a power source that causes a terminal voltage drop.",
    keywords: [["internal"], ["power source"], ["resistance"]]
  }
];

