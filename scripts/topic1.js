// Topic 1: Physical Quantities and Units
const additionalQuestionsTopic1 = [
  {
    topic: 1,
    difficulty: "easy",
    type: "numeric_multi",
    question: function() {
      const km = (Math.random() * 10 + 5).toFixed(1);
      const m = (km * 1000).toFixed(0);
      const cm = (km * 100000).toFixed(0);
      return {
        text: `A runner completes a race of ${km} km. Express this distance in both meters and centimeters. Explain your conversion process.`,
        answer: [m + " m", cm + " cm"],
        modelAnswer: [
          `Since 1 km = 1000 m, ${km} km equals ${m} m.`,
          `Also, 1 km = 100,000 cm, so ${km} km equals ${cm} cm.`
        ]
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const densitySI = (Math.random() * 1000 + 500).toFixed(0);
      const densityCGS = (densitySI / 1000).toFixed(3);
      return {
        text: `A substance has a density of ${densitySI} kg/m³. Convert this density to g/cm³. Explain the conversion.`,
        answer: densityCGS + " g/cm³",
        modelAnswer: `Since 1 kg/m³ = 0.001 g/cm³, multiplying ${densitySI} by 0.001 gives ${densityCGS} g/cm³.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = (Math.random() * 450 + 50).toFixed(0);
      const dV = (V * (Math.random() * 0.1 + 0.01)).toFixed(1);
      const percent = ((dV / V) * 100).toFixed(1);
      return {
        text: `A measurement gives a value of ${V} with an absolute uncertainty of ${dV}. Calculate the percentage uncertainty. Explain the calculation.`,
        answer: percent + " %",
        modelAnswer: `Percentage uncertainty is the percentage uncertainty as percentage  = (ΔV / V) × 100 = (${dV} / ${V}) × 100 ≈ ${percent} %.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const C = (Math.random() * 100 - 00).toFixed(1);
      const K = (parseFloat(C) + 273.15).toFixed(2);
      return {
        text: `Convert a temperature of ${C} °C to Kelvin. Explain the conversion formula.`,
        answer: K + " K",
        modelAnswer: `To convert °C to K, add 273.15. Thus, ${C} °C becomes ${K} K.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const km = (Math.random() * (10 - 1) + 1).toFixed(3);
      const m  = (km * 1000).toFixed(0);
      return { 
        text: `Convert ${km} km to meters.`,
        answer: m,
        modelAnswer: `1 km = 1000 m; thus, ${km} km = ${m} m.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const grams =  Math.floor(Math.random() * 9001) + 1000;
      const kg = (grams / 1000).toFixed(3);
      return { 
        text: `Express ${grams} g in kilograms.`,
        answer: kg,
        modelAnswer: `1 kg = 1000 g; therefore, ${grams} g = ${kg} kg.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const km = (Math.random() * (100 - 10) + 10).toFixed(0);
      const hr = (Math.random() * (10 - 1) + 1).toFixed(1);
      const mps = ((parseFloat(km) * 1000) / (parseFloat(hr) * 3600)).toFixed(2);
      return {
        text: `A car travels ${km} km in ${hr} hour. What is its speed in m/s?`,
        answer: mps,
        modelAnswer: `First convert the distance into m by timings by 1000. Then convert the time into seconds by timeings by 3600 (or 60 to get mins then 60 again to get seconds) Speed = ( ${km}×1000 m ) / ( ${hr}×3600 s ) ≈ ${mps} m/s.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const mass_g = (Math.random() * (100000 - 2000) + 2000).toFixed(0);
      const volume_cm3 = (Math.random() * (50000 - 500) + 500).toFixed(0);
      const density = ((mass_g / 1000) / (volume_cm3 / 1e6)).toFixed(0);
      return { 
        text: `A substance has ${mass_g} g and occupies ${volume_cm3} cm³. Calculate its density in kg/m³.`,
        answer: density + " kg/m³",
        modelAnswer: `Density = (mass in kg)/(volume in m³) = (${mass_g/1000} kg)/(${volume_cm3/1e6} m³) ≈ ${density} kg/m³.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define a scalar quantity.",
    modelAnswer: "A scalar quantity is described only by its magnitude.",
    keywords: [["magnitude", "size", "value"], ["no direction", "directionless"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define a vector quantity.",
    modelAnswer: "A vector quantity has both magnitude and direction.",
    keywords: [["magnitude", "size", "value"], ["direction", "oriented"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define SI base quantity.",
    modelAnswer: "An SI base quantity is defined independently and is used to derive other quantities.",
    keywords: [["independent"], ["derived quantities"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define random error.",
    modelAnswer: "Random error is the unpredictable variation in measurements due to uncontrolled factors.",
    keywords: [["unpredictable"], ["variation", "fluctuation", "changes"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define systematic error.",
    modelAnswer: "Systematic error is a consistent bias in measurements that skews results in one direction.",
    keywords: [["consistent"], ["bias", "incorrect reading"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define precision.",
    modelAnswer: "Precision refers to the closeness of repeated measurements to each other.",
    keywords: [["repeatability"], ["closeness"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define accuracy.",
    modelAnswer: "Accuracy indicates how close a measured value is to the true or accepted value.",
    keywords: ["true", "accepted", "real" ]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define absolute uncertainty.",
    modelAnswer: "Absolute uncertainty is the estimated amount by which a measured value may vary.",
    keywords: ["may vary", "difference in possible results", "accepted error"]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Explain how to combine uncertainties for multiplication and division.",
    modelAnswer: "For multiplication or division, add the percentage uncertainties of the individual values.",
    keywords: [["percentage uncertainty"], ["combine", "add"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const length =  (Math.random() * (3.5 - 0.5) + .5).toFixed(1);
      const uncertainty = (Math.random() * (0.09 - 0.01) + 0.01).toFixed(3);
      const perc = (uncertainty / length) * 100;
      return { 
        text: `An object is measured as ${length} m with an uncertainty of ${uncertainty} m. Calculate the percentage uncertainty.`,
        answer: perc.toFixed(2) + " %",
        modelAnswer: `Percentage uncertainty is calculated by taking the uncertainty in the measurement dividing this by the actual measurement and then multiplying this by 100 to make a percentage = (0.02/1.20)*100 ≈ ${perc.toFixed(2)} %.` 
      };
    }
  }
];
