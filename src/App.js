import React from "react";
import "./App.css";

function App() {
  const cvUrl = `${process.env.PUBLIC_URL || ""}/Grace_CV.pdf`;

  return (
    <div className="App">
      {/* ---- HEADER ---- */}
      <header className="header">
        <img
          src="/profile.png"
          alt="Grace Ruguru Ndungu"
          className="profile-img"
        />
        <h1 className="title">Grace Ruguru Ndungu</h1>
        <p className="subtitle">IT Student | Web Developer | Tech Enthusiast</p>
      </header>

      {/* ---- ABOUT ---- */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am an Information Technology student passionate about web
          development, cybersecurity, cloud computing, and building smart
          digital solutions. I enjoy creating visually appealing user interfaces
          and working on innovative tech projects.
        </p>
      </section>

      {/* ---- SKILLS ---- */}
      <section className="section">
        <h2>Skills</h2>
        <ul className="list">
          <li>Data Entry & Documentation</li>
          <li>Network Configuration & Troubleshooting</li>
          <li>Version Control (Git & GitHub)</li>
          <li>HTML, CSS, JavaScript, Python, Java</li>
          <li>Basic AI & Machine Learning</li>
          <li>Cloud Computing (AWS & Google Cloud – beginner)</li>
          <li>Diligence, resilience & strong-willed</li>
          <li>Good communication & writing skills</li>
          <li>Teamwork & minimal supervision</li>
        </ul>
      </section>

      {/* ---- HOBBIES ---- */}
      <section className="section">
        <h2>Hobbies & Interests</h2>
        <ul className="list">
          <li>UI/UX Designing</li>
          <li>Exploring AI, IoT & Cloud Technologies</li>
          <li>Web & App Design</li>
          <li>Team Projects & Collaboration</li>
          <li>Watching Documentaries</li>
          <li>Problem Solving & Logical Thinking</li>
        </ul>
      </section>

      {/* ---- PROJECTS ---- */}
      <section className="section">
        <h2>Projects</h2>
        <ul className="list">
          <li>
            <strong>Task Manager App:</strong> A productivity app for managing
            tasks efficiently.
          </li>
          <li>
            <strong>Forge720 Website:</strong> Company website for showcasing
            fabrication products.
          </li>
          <li>
            <strong>Student App:</strong> A school management mini-application.
          </li>
        </ul>
      </section>

      {/* ---- CONTACT ---- */}
      <section className="section contact">
        <h2>Contact Me</h2>
        <p>Email: <strong>rugurugrace75@gmail.com</strong></p>
        <p>GitHub: <strong>github.com/grace-001dev</strong></p>
        <p>Phone: <strong>0797 837 043</strong></p>
      </section>

 {/* ---- CV SECTION ---- */}
<section className="section cv-section">
  <h2>My CV</h2>
  <p>You can view my updated CV below:</p>

  <a
    href="/Grace_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="cv-view-btn"
  >
    Open CV
  </a>
</section>


      {/* ---- FOOTER ---- */}
      <footer className="footer">
        <p>© 2025 Grace Ruguru Ndungu | All Rights Reserved</p>
      </footer>

      {/* Floating CV Button */}
      <a
        href={cvUrl}
      
        className="cv-floating-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
    </div>
  );
}

export default App;
