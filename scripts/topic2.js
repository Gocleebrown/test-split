// Topic 2: Kinematics
const additionalQuestionsTopic2 = [
  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const u = Math.floor(Math.random() * 10 + 5);
      const a = Math.floor(Math.random() * 4 + 1);
      const t = Math.floor(Math.random() * 4 + 2);
      const s = (u * t + 0.5 * a * t * t).toFixed(1);
      return { 
        text: `A body starts at ${u} m/s and accelerates at ${a} m/s² for ${t} s. Find its displacement.`,
        answer: s + " m",
        modelAnswer: `Using SUVAT Equations find the one that you can use. In this case Displacement = ut + 0.5at² ≈ ${s} m.`
      };
    }
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const u = (Math.random() * 10 + 10).toFixed(1);
      const g = 9.81;
      const t_max = (u / g).toFixed(2);
      const h_max = (0.5 * u * u / g).toFixed(2);
      return {
        text: `A ball is thrown vertically upwards with an initial speed of ${u} m/s. Calculate: (a) time to reach maximum height and (b) the maximum height.`,
        answer: [t_max + " s", h_max + " m"],
        modelAnswer: [
          `Time = u / g = ${u} / 9.81 ≈ ${t_max} s.`,
          `Height = 0.5*u²/g ≈ ${h_max} m.`
        ]
      };
    }
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const h = (Math.random() * 20 + 10).toFixed(1);
      const g = 9.81;
      const t = (Math.sqrt(2 * h / g)).toFixed(2);
      return {
        text: `An object is dropped from ${h} m. Calculate the time to hit the ground.`,
        answer: t + " s",
        modelAnswer: `Time = √(2h/g) = √(2×${h}/9.81) ≈ ${t} s.`
      };
    }
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const h = (Math.random() * 15 + 5).toFixed(1);
      const g = 9.81;
      const t = (Math.sqrt(2 * h / g)).toFixed(2);
      const u = (Math.random() * 10 + 5).toFixed(1);
      const d = (u * t).toFixed(2);
      return {
        text: `An object is launched horizontally from a ${h} m cliff with speed ${u} m/s. Find (a) time to hit the ground and (b) horizontal distance traveled.`,
        answer: [t + " s", d + " m"],
        modelAnswer: [
          `Time = √(2h/g) ≈ ${t} s.`,
          `Distance = u*t ≈ ${d} m.`
        ]
      };
    }
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const u = (Math.random() * 20 + 20).toFixed(1);
      const t = (Math.random() * 3 + 2).toFixed(1);
      const a = (u / t).toFixed(2);
      const s = (0.5 * u * t).toFixed(2);
      return {
        text: `A vehicle decelerates from ${u} m/s to rest in ${t} s. Calculate (a) deceleration and (b) distance traveled.`,
        answer: [a + " m/s²", s + " m"],
        modelAnswer: [
          `Deceleration = ${u} / ${t} ≈ ${a} m/s².`,
          `Distance ≈ 0.5 × ${u} × ${t} ≈ ${s} m.`
        ]
      };
    }
  },
  {
    topic: 2,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const u = (Math.random() * 10 + 20).toFixed(1);
      const angle = (Math.random() * 20 + 20).toFixed(1);
      const g = 9.81;
      const range = (u * u * Math.sin(2 * angle * Math.PI / 180) / g).toFixed(2);
      return {
        text: `A projectile is launched at ${u} m/s at ${angle}°. Calculate its horizontal range.`,
        answer: range + " m",
        modelAnswer: `You can either use the Range equation R = (v₀² * sin(2θ)) / g, or split the vector into its components, then work out the time in the air. Then use that time to work out the horizontal displacement.  ≈ ${range} m.`
      };
    }
  },
  {
  topic: 2,
  difficulty: "easy",
  type: "equation",
  question: function() {
    // Speed between 5 and 20 m/s
    const V = (Math.random() * 15 + 5).toFixed(1);
    // Angle between 10° and 70°
    const θ = (Math.random() * 60 + 10).toFixed(1);
    // Horizontal component Vh = V·cosθ
    const Vh = (V * Math.cos(θ * Math.PI / 180)).toFixed(2);
    return {
      text: `A particle moves with speed ${V} m/s at an angle of ${θ}° above the horizontal. Calculate the horizontal component of its velocity.`,
      answer: Vh + " m/s",
      modelAnswer: `Horizontal component = V cos θ = ${V} × cos(${θ}°) ≈ ${Vh} m/s.`
    };
  }
},
  {
  topic: 2,
  difficulty: "easy",
  type: "equation",
  question: function() {
    // Speed between 5 and 20 m/s
    const V = (Math.random() * 15 + 5).toFixed(1);
    // Angle between 10° and 70°
    const θ = (Math.random() * 60 + 10).toFixed(1);
    // Vertical component Vv = V·sinθ
    const Vv = (V * Math.sin(θ * Math.PI / 180)).toFixed(2);
    return {
      text: `A particle moves with speed ${V} m/s at an angle of ${θ}° above the horizontal. Calculate the vertical component of its velocity.`,
      answer: Vv + " m/s",
      modelAnswer: `Vertical component = V sin θ = ${V} × sin(${θ}°) ≈ ${Vv} m/s.`
    };
  }
},
  // Add this object to your additionalQuestionsTopic2 array in topic2.js:

{
  topic: 2,
  difficulty: "hard",
  type: "numeric_multi",
  question: function() {
    // Two random displacements (3–12 m) and angles (10°–80°)
    const d1 = (Math.random() * 9 + 3).toFixed(1);
    const θ1 = (Math.random() * 70 + 10).toFixed(1);
    const d2 = (Math.random() * 9 + 3).toFixed(1);
    const θ2 = (Math.random() * 70 + 10).toFixed(1);
    // Components of vector 1
    const x1 = d1 * Math.cos(θ1 * Math.PI / 180);
    const y1 = d1 * Math.sin(θ1 * Math.PI / 180);
    // Components of vector 2
    const x2 = d2 * Math.cos(θ2 * Math.PI / 180);
    const y2 = d2 * Math.sin(θ2 * Math.PI / 180);
    // Sum components
    const x = x1 + x2;
    const y = y1 + y2;
    // Resultant magnitude and direction
    const R = Math.sqrt(x*x + y*y).toFixed(2);
    const φ = (Math.atan2(y, x) * 180 / Math.PI).toFixed(1);
    return {
      text: `A particle first moves ${d1} m at ${θ1}° above the horizontal, then ${d2} m at ${θ2}° above the horizontal. Calculate the magnitude and direction (above the horizontal) of the resultant displacement.`,
      answer: [R + " m", φ + "°"],
      modelAnswer: [
        `First, split each vector into horizontal (x) and vertical (y) components:`,
        `• Vector 1: x₁ = ${d1} cos(${θ1}°), y₁ = ${d1} sin(${θ1}°).`,
        `• Vector 2: x₂ = ${d2} cos(${θ2}°), y₂ = ${d2} sin(${θ2}°).`,
        `Next, add components: x = x₁ + x₂, y = y₁ + y₂.`,
        `Finally, recombine to get the resultant:`,
        `• Magnitude R = √(x² + y²) ≈ ${R} m.`,
        `• Direction φ = atan2(y, x) ≈ ${φ}° above horizontal.`
      ]
    };
  }
},

  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "Define displacement.",
    modelAnswer: "Displacement is the change in position in a specific direction.",
    keywords: [["displacement"], ["direction"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "Define speed.",
    modelAnswer: "Speed is the distance traveled per unit time.",
    keywords: [["distance"], ["time"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "Define velocity.",
    modelAnswer: "Velocity is displacement per unit time including direction.",
    keywords: [["change in displacement"], ["per unit time", "divided by time", "/time"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "Define acceleration.",
    modelAnswer: "Acceleration is the rate of change of velocity.",
    keywords: [["rate"], ["velocity change"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "State what the gradient of a displacement–time graph represents.",
    modelAnswer: "It represents velocity.",
    keywords: [["velocity"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "State what the gradient of a velocity–time graph represents.",
    modelAnswer: "It represents acceleration.",
    keywords: [["acceleration"]]
  },
  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "State what the area under a velocity–time graph represents.",
    modelAnswer: "It represents displacement.",
    keywords: [["displacement"]]
  }
];
