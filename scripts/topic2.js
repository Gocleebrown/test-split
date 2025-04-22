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
        modelAnswer: `Using SUVAT, displacement = ut + 0.5at² ≈ ${s} m.`
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
        text: `A ball is thrown vertically upwards with speed ${u} m/s. Calculate (a) time to reach max height and (b) max height.`,
        answer: [t_max + " s", h_max + " m"],
        modelAnswer: [
          `Time to max height = u/g = ${u}/9.81 ≈ ${t_max} s.`,
          `Max height = 0.5 u²/g ≈ ${h_max} m.`
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
        modelAnswer: `t = √(2h/g) = √(2×${h}/9.81) ≈ ${t} s.`
      };
    }
  },

  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const h = (Math.random() * 15 + 5).toFixed(1);
      const u = (Math.random() * 10 + 5).toFixed(1);
      const g = 9.81;
      const t = (Math.sqrt(2 * h / g)).toFixed(2);
      const d = (u * t).toFixed(2);
      return {
        text: `An object is launched horizontally from a ${h} m cliff at ${u} m/s. Find (a) time to hit ground and (b) horizontal distance.`,
        answer: [t + " s", d + " m"],
        modelAnswer: [
          `Time = √(2h/g) ≈ ${t} s.`,
          `Distance = u×t ≈ ${d} m.`
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
          `Deceleration = u/t ≈ ${a} m/s².`,
          `Distance = 0.5×u×t ≈ ${s} m.`
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
      const θ = (Math.random() * 20 + 20).toFixed(1);
      const g = 9.81;
      const range = (u * u * Math.sin(2 * θ * Math.PI / 180) / g).toFixed(2);
      return {
        text: `A projectile is launched at ${u} m/s at ${θ}°. Calculate its horizontal range.`,
        answer: range + " m",
        modelAnswer: `Range = (v₀² sin2θ)/g ≈ ${range} m.`
      };
    }
  },

  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = (Math.random() * 15 + 5).toFixed(1);
      const θ = (Math.random() * 60 + 10).toFixed(1);
      const Vh = (V * Math.cos(θ * Math.PI / 180)).toFixed(2);
      return {
        text: `Speed ${V} m/s at ${θ}° above horizontal. Find the horizontal component.`,
        answer: Vh + " m/s",
        modelAnswer: `V_x = V·cosθ = ${V}·cos(${θ}°) ≈ ${Vh} m/s.`
      };
    }
  },

  {
    topic: 2,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = (Math.random() * 15 + 5).toFixed(1);
      const θ = (Math.random() * 60 + 10).toFixed(1);
      const Vv = (V * Math.sin(θ * Math.PI / 180)).toFixed(2);
      return {
        text: `Speed ${V} m/s at ${θ}° above horizontal. Find the vertical component.`,
        answer: Vv + " m/s",
        modelAnswer: `V_y = V·sinθ = ${V}·sin(${θ}°) ≈ ${Vv} m/s.`
      };
    }
  },

  {
    topic: 2,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const d1 = (Math.random() * 9 + 3).toFixed(1);
      const θ1 = (Math.random() * 70 + 10).toFixed(1);
      const d2 = (Math.random() * 9 + 3).toFixed(1);
      const θ2 = (Math.random() * 70 + 10).toFixed(1);

      const x1 = d1 * Math.cos(θ1 * Math.PI / 180);
      const y1 = d1 * Math.sin(θ1 * Math.PI / 180);
      const x2 = d2 * Math.cos(θ2 * Math.PI / 180);
      const y2 = d2 * Math.sin(θ2 * Math.PI / 180);

      const x = x1 + x2;
      const y = y1 + y2;

      const R = Math.sqrt(x*x + y*y).toFixed(2);
      const φ = (Math.atan2(y, x) * 180 / Math.PI).toFixed(1);

      return {
        text: `Moves ${d1} m at ${θ1}°, then ${d2} m at ${θ2}°. Find resultant magnitude and direction.`,
        answer: [R + " m", φ + "°"],
        modelAnswer: [
          `1) Split into components:`,
          `   x₁=${d1}cos(${θ1}°), y₁=${d1}sin(${θ1}°);`,
          `   x₂=${d2}cos(${θ2}°), y₂=${d2}sin(${θ2}°).`,
          `2) Sum: x=${x.toFixed(2)}, y=${y.toFixed(2)}.`,
          `3) Resultant: R=√(x²+y²)≈${R} m, φ=atan2(y,x)≈${φ}° above horizontal.`
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
    keywords: [["displacement"], ["per unit time"]]
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
    question: "What does the gradient of a displacement–time graph represent?",
    modelAnswer: "The graph’s gradient represents velocity.",
    keywords: [["gradient"], ["velocity"]]
  },

  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "What does the gradient of a velocity–time graph represent?",
    modelAnswer: "The graph’s gradient represents acceleration.",
    keywords: [["gradient"], ["acceleration"]]
  },

  {
    topic: 2,
    difficulty: "easy",
    type: "definition",
    question: "What does the area under a velocity–time graph represent?",
    modelAnswer: "The area under a v–t graph represents displacement.",
    keywords: [["area"], ["displacement"]]
  }
];
