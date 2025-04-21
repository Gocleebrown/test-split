
// js/topics/topic11.js
const additionalQuestionsTopic11 = [
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const A = Math.floor(Math.random() * 50 + 200);
      const finalA = A - 4;
      return {
        text: `A nucleus with mass number ${A} undergoes alpha decay. What is its final mass number?`,
        answer: finalA.toString(),
        modelAnswer: `Alpha decay reduces mass number by 4: ${A} → ${finalA}.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const Z = Math.floor(Math.random() * 20 + 10);
      const A = Math.floor(Math.random() * 30 + parseFloat(Z) + 10);
      const finalZ = Z + 1;
      return {
        text: `A nucleus with proton number ${Z} and mass number ${A} undergoes beta-minus decay. What is its new proton number?`,
        answer: finalZ.toString(),
        modelAnswer: `Beta-minus decay increases proton number by 1: ${Z} → ${finalZ}.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const initialN = Math.floor(Math.random() * 50 + 50);
      return {
        text: `In β– decay, if a nucleus has nucleon number ${initialN}, what remains?`,
        answer: initialN.toString(),
        modelAnswer: `The nucleon number remains ${initialN}.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const initialZ = Math.floor(Math.random() * 20 + 10);
      const finalZ = initialZ - 1;
      return {
        text: `A nucleus with proton number ${initialZ} undergoes β+ decay. What is its new proton number?`,
        answer: finalZ.toString(),
        modelAnswer: `Proton number decreases by 1: ${initialZ} → ${finalZ}.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const initialMass = Math.floor(Math.random() * 200 + 100);
      const finalMass = initialMass - 4;
      return {
        text: `A nucleus with mass number ${initialMass} undergoes alpha decay. What is its new mass number?`,
        answer: finalMass.toString(),
        modelAnswer: `Mass number decreases by 4: ${initialMass} → ${finalMass}.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const initialMass = Math.floor(Math.random() * 200 + 100);
      const change = 4;
      return {
        text: `A nucleus with mass number ${initialMass} undergoes alpha decay. By how much does its mass number change?`,
        answer: change.toString(),
        modelAnswer: `It decreases by 4.`
      };
    }
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define nucleon number.",
    modelAnswer: "Nucleon number is the total count of protons and neutrons in a nucleus.",
    keywords: [["protons"], ["neutrons"], ["total"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define proton number.",
    modelAnswer: "Proton number is the count of protons in a nucleus.",
    keywords: [["proton"], ["number"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define isotope.",
    modelAnswer: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    keywords: [["same protons"], ["different neutrons"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define a hadron.",
    modelAnswer: "A hadron is a composite particle made of quarks that participates in the strong force.",
    keywords: [["quarks"], ["strong force"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define a baryon.",
    modelAnswer: "A baryon is a hadron composed of three quarks.",
    keywords: [["three quarks"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define a meson.",
    modelAnswer: "A meson is a hadron composed of a quark and an antiquark.",
    keywords: [["quark"], ["antiquark"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define a lepton.",
    modelAnswer: "A lepton is a fundamental particle that does not experience the strong nuclear force.",
    keywords: [["fundamental"], ["lepton"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define a quark.",
    modelAnswer: "A quark is a fundamental particle that comes in six flavors: up, down, charm, strange, top, and bottom.",
    keywords: [["up"], ["down"], ["charm"], ["strange"], ["top"], ["bottom"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "State the charges of up and down quarks.",
    modelAnswer: "Up quark: +2/3 e; Down quark: -1/3 e.",
    keywords: [["+2/3"], ["-1/3"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "State the quark composition of a proton.",
    modelAnswer: "A proton consists of two up quarks and one down quark (uud).",
    keywords: [["uud"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "State the quark composition of a neutron.",
    modelAnswer: "A neutron consists of one up quark and two down quarks (udd).",
    keywords: [["udd"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define an antiparticle.",
    modelAnswer: "An antiparticle has the same mass but opposite charge compared to its corresponding particle.",
    keywords: [["opposite charge"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "What is emitted during β– decay?",
    modelAnswer: "An electron and an electron antineutrino are emitted.",
    keywords: [["electron"], ["antineutrino"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "What is emitted during β+ decay?",
    modelAnswer: "A positron and an electron neutrino are emitted.",
    keywords: [["positron"], ["electron neutrino"]]
  },
  {
    topic: 11,
    difficulty: "easy",
    type: "definition",
    question: "Define the unified atomic mass unit (u).",
    modelAnswer: "1 u is 1/12 the mass of a carbon-12 atom.",
    keywords: [["1/12"], ["carbon-12"]]
  },
  {
    topic: 11,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      return {
        text: "A nucleus with mass number 210 and atomic number 84 undergoes β– decay followed by alpha decay. Calculate the final mass number and atomic number.",
        answer: ["206", "83"],
        modelAnswer: [
          "After β– decay, nucleon number remains 210; then alpha decay reduces mass number by 4 and atomic number by about 1 resulting in 206 and 83."
        ]
      };
    }
  }
];
