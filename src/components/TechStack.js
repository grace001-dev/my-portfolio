import React from "react";

const TechStack = () => {
  const stacks = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "REST APIs",
    "Responsive"
  ];

  return (
    <section className="section tech-section">
      <h2>Tech Stack</h2>
      <div className="tech-badges">
        {stacks.map((s) => (
          <span key={s} className="tech-badge">{s}</span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
