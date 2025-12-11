import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Task Manager App",
      desc: "A productivity app for creating, editing and tracking tasks with deadlines.",
      link: "https://github.com/grace-001dev/task-manager"
    },
    {
      title: "Forge720 Website",
      desc: "Company site for showcasing fabrication products and services.",
      link: "https://github.com/grace-001dev/forge720"
    },
    {
      title: "Student App",
      desc: "A mini school management application for attendance and grades.",
      link: "https://github.com/grace-001dev/student-app"
    }
  ];

  return (
    <section className="section projects-section">
      <h2>Selected Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
