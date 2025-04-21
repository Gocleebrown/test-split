// Topic 4: Forces, Density and Pressure
const additionalQuestionsTopic4 = [
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const h = (Math.random() * 10 + 5).toFixed(1);
      const rho = 1000, g = 9.81;
      const pressure = (rho * g * h).toFixed(0);
      return {
        text: `Calculate the hydrostatic pressure at a depth of ${h} m in water.`,
        answer: pressure + " Pa",
        modelAnswer: `Pressure = ρgh ≈ ${pressure} Pa.`
      };
    }
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const A = (Math.random() * 1000 + 500).toFixed(0);
      const h = (Math.random() * 4 + 2).toFixed(1);
      const rho = 1000, g = 9.81;
      const A_m2 = A / 10000;
      const force = (rho * g * h * A_m2).toFixed(1);
      return {
        text: `A container with a base area of ${A} cm² is filled with water to a height of ${h} m. Calculate the force on its base.`,
        answer: force + " N",
        modelAnswer: `Force = ρgh×(A in m²) ≈ ${force} N.`
      };
    }
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = (Math.random() * 500 + 100).toFixed(0);
      const rho = 1000, g = 9.81;
      const V_m3 = V / 1e6;
      const buoyant = (rho * g * V_m3).toFixed(2);
      return {
        text: `An object displaces ${V} cm³ of water. Calculate its buoyant force using Archimedes' principle.`,
        answer: buoyant + " N",
        modelAnswer: `Buoyant force = ρgV. Here, V = ${V} cm³, so force ≈ ${buoyant} N.`
      };
    }
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const V_g = (Math.random() * 60 + 20).toFixed(0);
      const d_g = 1.3, d_w = 1.0, d_mix = 1.1;
      const V_w = (((d_g - d_mix) / (d_mix - d_w)) * V_g).toFixed(1);
      return {
        text: `A student has ${V_g} cm³ of glycerine (density = 1.3 g/cm³). How much water (density = 1.0 g/cm³) must be added to get a mixture density of 1.1 g/cm³?`,
        answer: V_w + " cm³",
        modelAnswer: `Using the mixing formula, V_w = 2×V_g. So if V_g = ${V_g} cm³, then V_w ≈ ${V_w} cm³.`
      };
    }
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F_small = (Math.random() * 200 + 100).toFixed(0);
      const A_small = (Math.random() * 50 + 50).toFixed(0);
      const A_large = (Math.random() * 200 + 100).toFixed(0);
      const F_large = (F_small * (A_large / A_small)).toFixed(1);
      return {
        text: `In a hydraulic press, if ${F_small} N is applied on a small piston of area ${A_small} cm², what is the force on a large piston of area ${A_large} cm²?`,
        answer: F_large + " N",
        modelAnswer: `F_large = F_small×(A_large/A_small) ≈ ${F_large} N.`
      };
    }
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "definition",
    question: "Define pressure.",
    modelAnswer: "Pressure is the force per unit area.",
    keywords: [["force"], ["area"]]
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "definition",
    question: "Define density.",
    modelAnswer: "Density is the mass per unit volume of a substance.",
    keywords: [["mass"], ["volume"]]
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const area_cm2 = 500, height = 2.5, rho = 1000, g = 9.8;
      const area_m2 = area_cm2 / 10000;
      const pressure = rho * g * height;
      const extra = 0.1 * pressure;
      const extraForce = extra * area_m2;
      return { 
        text: `For a container with a base area of ${area_cm2} cm² and water height of ${height} m, calculate: (a) hydrostatic pressure and (b) the extra force for a 10% pressure increase.`,
        answer: [pressure.toFixed(0) + " Pa", extraForce.toFixed(2) + " N"],
        modelAnswer: [
          `Pressure = ρgh ≈ ${pressure.toFixed(0)} Pa,`,
          `Extra force ≈ ${extraForce.toFixed(2)} N.`
        ]
      };
    }
  }
];
