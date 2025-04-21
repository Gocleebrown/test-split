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
        modelAnswer: `Displacement = ut + 0.5at² ≈ ${s} m.`
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
        modelAnswer: `Range = (u²*sin(2θ))/g ≈ ${range} m.`
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
