// Topic 2: Kinematics (with more explanatory model answers)
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
        modelAnswer: 
          `1) Identify values: initial speed u = ${u} m/s, acceleration a = ${a} m/s², time t = ${t} s.\n` +
          `2) Use the displacement formula: s = u×t + ½×a×t².\n` +
          `3) Calculate u×t = ${u}×${t} = ${ (u*t).toFixed(1) }.\n` +
          `4) Calculate ½×a×t² = 0.5×${a}×${t}² = ${ (0.5*a*t*t).toFixed(1) }.\n` +
          `5) Add them: s ≈ ${(u*t + 0.5*a*t*t).toFixed(1)} m.`
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
        text: `A ball is thrown vertically upwards at ${u} m/s. Calculate: (a) time to reach maximum height and (b) the maximum height.`,
        answer: [t_max + " s", h_max + " m"],
        modelAnswer: [
          `a) At top the speed is 0. The speed drops by g each second, so time = initial speed / g = ${u} / 9.81 ≈ ${t_max} s.`,
          `b) You can think average speed over the trip up is (u + 0)/2, so height = avg speed × time = (${u}+0)/2 × ${t_max} ≈ ${h_max} m.\n` +
          `   Or use h = u²/(2g) = ${u}²/(2×9.81) ≈ ${h_max} m.`
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
        modelAnswer: 
          `1) No initial speed, so h = ½ g t².\n` +
          `2) Solve for t: t = √(2h/g) = √(2×${h}/9.81) ≈ ${t} s.\n` +
          `3) That is how long it takes to fall ${h} m under gravity.`
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
        text: `An object is launched horizontally from a ${h} m cliff at ${u} m/s. Find (a) time to hit the ground and (b) horizontal distance traveled.`,
        answer: [t + " s", d + " m"],
        modelAnswer: [
          `a) Vertical fall is just like dropping: t = √(2h/g) = √(2×${h}/9.81) ≈ ${t} s.`,
          `b) While falling, horizontal speed stays constant at ${u} m/s. Distance = speed × time = ${u} × ${t} ≈ ${d} m.`
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
        text: `A vehicle slows from ${u} m/s to rest in ${t} s. Calculate (a) deceleration and (b) distance traveled.`,
        answer: [a + " m/s²", s + " m"],
        modelAnswer: [
          `a) Deceleration = (final speed – initial speed) / time = (0 – ${u}) / ${t} ≈ –${a} m/s² (magnitude ${a}).`,
          `b) Average speed = (${u} + 0)/2; distance = avg speed × time = (${u}/2) × ${t} ≈ ${s} m.`
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
        modelAnswer: 
          `Method 1 (formula): Range = (u² × sin2θ) / g.\n` +
          `  = (${u}² × sin(2×${θ}°)) / 9.81 ≈ ${range} m.\n` +
          `Method 2 (components):\n` +
          `  • Vertical component = u sinθ, find time up & down.\n` +
          `  • Horizontal component = u cosθ, multiply by total time.`
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
        text: `Speed ${V} m/s at ${θ}° above horizontal. Calculate the horizontal component.`,
        answer: Vh + " m/s",
        modelAnswer: 
          `Draw a right‐angle triangle: the hypotenuse is speed ${V}, angle to horizontal is ${θ}°.\n` +
          `Horizontal side = V × cosθ = ${V} × cos(${θ}°) ≈ ${Vh} m/s.`
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
        text: `Speed ${V} m/s at ${θ}° above horizontal. Calculate the vertical component.`,
        answer: Vv + " m/s",
        modelAnswer: 
          `Using the same triangle: vertical side = V × sinθ = ${V} × sin(${θ}°) ≈ ${Vv} m/s.\n` +
          `This tells you how fast the object moves up.`
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
