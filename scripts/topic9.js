// js/topics/topic9.js
const additionalQuestionsTopic9 = [
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const I = Math.floor(Math.random() * 5 + 1);
      const R = Math.floor(Math.random() * 20 + 10);
      const V = I * R;
      return {
        text: `A current of ${I} A flows through a ${R} Ω resistor. Calculate the voltage.`,
        answer: V.toFixed(1),
        modelAnswer: `V = I×R ≈ ${V.toFixed(1)} V.`
      };
    }
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = Math.floor(Math.random() * 20 + 10);
      const I = Math.floor(Math.random() * 5 + 1);
      const P = V * I;
      return {
        text: `With a voltage of ${V} V and current of ${I} A, calculate power.`,
        answer: P.toFixed(1),
        modelAnswer: `Power = V×I ≈ ${P.toFixed(1)} W.`
      };
    }
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 20 + 10);
      const R2 = Math.floor(Math.random() * 20 + 10);
      const R3 = Math.floor(Math.random() * 20 + 10);
      const Rp = 1 / (1 / R1 + 1 / R2);
      const R_total = Rp + R3;
      return {
        text: `Calculate the total resistance when ${R1} Ω and ${R2} Ω resistors are in parallel and in series with a ${R3} Ω resistor.`,
        answer: R_total.toFixed(1),
        modelAnswer: `Parallel: ≈ ${Rp.toFixed(1)} Ω; then total = ${Rp.toFixed(1)} + ${R3} ≈ ${R_total.toFixed(1)} Ω.`
      };
    }
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "State Kirchhoff’s first law.",
    modelAnswer: "The sum of currents entering a junction equals the sum of currents leaving the junction.",
    keywords: [["sum"], ["current"], ["junction"]]
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electric current.",
    modelAnswer: "Electric current is the rate at which charge flows through a conductor.",
    keywords: [["charge"], ["flow"]]
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electromotive force (e.m.f.).",
    modelAnswer: "E.m.f. is the energy provided per unit charge by a source (in volts).",
    keywords: [["energy"], ["charge"]]
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "State Kirchhoff’s first law.",
    modelAnswer: "The sum of currents into a junction equals the sum of currents out.",
    keywords: [["sum"], ["current"], ["junction"]]
  },
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electric potential difference.",
    modelAnswer: "It is the work done per unit charge between two points.",
    keywords: [["work"], ["charge"], ["points"]]
  },
  {
    topic: 9,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const R = 10, Vin = 12, I1 = Vin / R, P1 = I1 * I1 * R,
            R_series = 10, newTotal = R + R_series, I2 = Vin / newTotal;
      return {
        text: `A ${R} Ω resistor is connected to ${Vin} V. Calculate: (a) current, (b) power, (c) new current if a ${R_series} Ω resistor is added.`,
        answer: [I1.toFixed(2)+" A", P1.toFixed(1)+" W", I2.toFixed(2)+" A"],
        modelAnswer: [
          `I = ${Vin}/${R} ≈ ${I1.toFixed(2)} A.`,
          `P = I²×R ≈ ${P1.toFixed(1)} W.`,
          `New current ≈ ${I2.toFixed(2)} A.`
        ]
      };
    }
  }
];

