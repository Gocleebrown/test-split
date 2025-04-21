// Topic 3: Dynamics
const additionalQuestionsTopic3 = [
  {
    topic: 3,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 20 + 10).toFixed(1);
      const F = (Math.random() * 100 + 50).toFixed(1);
      const f = (Math.random() * F * 0.5).toFixed(1);
      const netForce = F - f;
      const a = (netForce / m).toFixed(2);
      return {
        text: `A force of ${F} N is applied to a ${m} kg object while friction of ${f} N opposes it. Calculate the net acceleration.`,
        answer: a + " m/s²",
        modelAnswer: `Net force = ${F} N - ${f} N = ${netForce} N, so a = ${netForce} / ${m} ≈ ${a} m/s².`
      };
    }
  },
  {
    topic: 3,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const m1 = (Math.random() * 5 + 1).toFixed(1);
      const m2 = (Math.random() * 5 + 1).toFixed(1);
      const u1 = (Math.random() * 10 + 5).toFixed(1);
      const u2 = (Math.random() * 10).toFixed(1);
      const v1 = (((m1 - m2) / (parseFloat(m1) + parseFloat(m2))) * u1 + ((2 * m2) / (parseFloat(m1) + parseFloat(m2))) * u2).toFixed(2);
      return {
        text: `Two objects (masses ${m1} kg and ${m2} kg) moving at ${u1} m/s and ${u2} m/s collide elastically. Find the final speed of the ${m1} kg object.`,
        answer: v1 + " m/s",
        modelAnswer: `Using conservation laws, v₁ = [(m₁−m₂)/(m₁+m₂)]×u₁ + [2m₂/(m₁+m₂)]×u₂ ≈ ${v1} m/s.`
      };
    }
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "numeric_multi",
    question: function() {
      const m1 = (Math.random() * 10 + 5).toFixed(1);
      const m2 = (Math.random() * 10 + 5).toFixed(1);
      const u1 = (Math.random() * 10 + 10).toFixed(1);
      const u2 = (Math.random() * 5).toFixed(1);
      const finalV = ((m1 * u1 + m2 * u2) / (parseFloat(m1) + parseFloat(m2))).toFixed(2);
      return {
        text: `A ${m1} kg object moving at ${u1} m/s collides inelastically with a ${m2} kg object at ${u2} m/s. Find their common final velocity.`,
        answer: finalV + " m/s",
        modelAnswer: `v = (m1*u1 + m2*u2) / (m1 + m2) ≈ ${finalV} m/s.`
      };
    }
  },
  {
    topic: 3,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F = (Math.random() * 20 + 10).toFixed(1);
      const r = (Math.random() * 0.5 + 0.5).toFixed(2);
      const I = (Math.random() * 2 + 1).toFixed(2);
      const torque = (F * r).toFixed(2);
      const alpha = (torque / I).toFixed(2);
      return {
        text: `A force of ${F} N is applied perpendicularly at ${r} m from the axis of an object (I = ${I} kg·m²). Calculate the angular acceleration.`,
        answer: alpha + " rad/s²",
        modelAnswer: `Torque = ${F}×${r} ≈ ${torque} N·m; then α = ${torque} / ${I} ≈ ${alpha} rad/s².`
      };
    }
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 20 + 5).toFixed(1);
      const angle = (Math.random() * 20 + 10).toFixed(1);
      const d = (Math.random() * 10 + 2).toFixed(1);
      const g = 9.8;
      const a = (g * Math.sin(angle * Math.PI / 180)).toFixed(2);
      const v = (Math.sqrt(2 * a * d)).toFixed(2);
      return {
        text: `A ${m} kg block slides down a ${angle}° frictionless slope for ${d} m. Find its speed at the bottom.`,
        answer: v + " m/s",
        modelAnswer: `Acceleration ≈ ${a} m/s²; speed ≈ ${v} m/s.`
      };
    }
  },
  {
    topic: 3,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const mass = 20, angle = 23, distance = 5, g = 9.8;
      const a = g * Math.sin(angle * Math.PI / 180);
      const v = Math.sqrt(2 * a * distance);
      const ke = 0.5 * mass * v * v;
      return {
        text: `A ${mass} kg block slides down a ${angle}° slope for ${distance} m. Calculate: (a) acceleration, (b) final speed, and (c) kinetic energy.`,
        answer: [a.toFixed(2) + " m/s²", v.toFixed(2) + " m/s", ke.toFixed(2) + " J"],
        modelAnswer: [
          `a ≈ ${a.toFixed(2)} m/s²,`,
          `v ≈ ${v.toFixed(2)} m/s,`,
          `KE ≈ ${ke.toFixed(2)} J.`
        ]
      };
    }
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s First Law of Motion.",
    modelAnswer: "A body remains at rest or in uniform motion unless acted upon by a net force.",
    keywords: [["rest"], ["uniform motion"], ["net force"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State what is meant by the centre of gravity of an object.",
    modelAnswer: "The point where all the weight of an object appears to act.",
    keywords: [["point", "location", "place"], ["weight"], ["act", "work", "occur"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s Second Law of Motion.",
    modelAnswer: "The force on an object is proportional to the rate of change of its momentum.",
    keywords: [["momentum change"], ["force"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s Third Law of Motion.",
    modelAnswer: "For every action, there is an equal and opposite reaction.",
    keywords: [["action"], ["reaction"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "Define inertia.",
    modelAnswer: "Inertia is the tendency of an object to resist a change in its state of motion.",
    keywords: [["resist change"], ["motion"]]
  }
];
