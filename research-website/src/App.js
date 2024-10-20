// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <Home />
      <Domain />
      <Milestones />
      <Documents />
      <Slides />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Research Project Website</h1>
      <h2>R24 - 109</h2>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#domain">
            <i className="fas fa-globe"></i> Domain
          </a>
        </li>
        <li>
          <a href="#milestones">
            <i className="fas fa-flag-checkered"></i> Milestones
          </a>
        </li>
        <li>
          <a href="#documents">
            <i className="fas fa-file-alt"></i> Documents
          </a>
        </li>
        <li>
          <a href="#slides">
            <i className="fas fa-file-powerpoint"></i> Presentations
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fas fa-users"></i> About Us
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fas fa-envelope"></i> Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="animated fadeIn">
      <h2>Home</h2>
      <p>
        Welcome to our Research Project website! Here, you'll find all the
        details about our journey, the domain we've explored, our project
        milestones, documents, and presentations. We are dedicated to solving
        complex problems through innovative solutions.
      </p>
      <h3 style={{ marginBottom: "20px" }}>Project Overview</h3>
      <p>
        The <strong>Programming App for Kids</strong> aims to bridge the
        knowledge gap between students in our country and those in India,
        focusing on producing future engineers with strong programming
        foundations.
      </p>
      <h3>What You Can Find Here</h3>
      <ul>
        <li>
          <i className="fas fa-info-circle"></i> Detailed information about our
          research domain and methodology.
        </li>
        <li>
          <i className="fas fa-file"></i> Links to key documents including
          project proposals, reports, and presentations.
        </li>
        <li>
          <i className="fas fa-bullseye"></i> Updates on project milestones and
          achievements.
        </li>
        <li>
          <i className="fas fa-comment-dots"></i> Contact information for
          queries or collaborations.
        </li>
      </ul>
      <h3>Join Us on Our Journey!</h3>
      <p>
        We invite you to explore our project further and stay tuned for updates
        as we progress. Your insights and feedback are valuable to us!
      </p>
    </section>
  );
}

function Domain() {
  return (
    <section id="domain" className="animated fadeIn">
      <h2>Domain</h2>
      <p>
        This section provides domain details about our project based on our
        literature survey.
      </p>
      <h3>Literature Survey</h3>
      <p>
        Our literature survey revealed that Sri Lanka is facing a USD price
        hike, impacting several sectors still recovering from the pandemic.
        While the IT Sector in Sri Lanka remains stable, there's increased
        outsourcing from larger companies to South Asian countries, primarily
        India. This presents both challenges and opportunities.
      </p>
      <h3>Research Gap</h3>
      <p>
        We identified a potential knowledge gap between Sri Lankan and Indian
        students in IT fundamentals and programming skills.
      </p>
      <h3>Research Problem</h3>
      <p>
        The main research problem is how to bridge this knowledge gap and
        produce high-quality, knowledgeable engineers in Sri Lanka who can
        compete on a global scale.
      </p>
      <h3>Research Objectives</h3>
      <ul>
        <li>
          Develop an interactive mobile application for gamified learning of
          fundamental programming concepts through storytelling using native
          language support.(Personalized Story Generation)
        </li>
        <li>
          Implement a level-based IT fundamental knowledge evaluation system.
        </li>
        <li>
          Create a customized kids assistance system to provide real-time
          support.
        </li>
        <li>
          Design a project-based programming system to teach practical
          application of concepts.
        </li>
      </ul>
      <h3>Methodology</h3>
      <p>
        Our methodology includes developing a comprehensive system with
        components for personalized story generation, MCQ generation, hint
        generation, and feedback generation. We're using a combination of mobile
        app development and machine learning techniques.
      </p>
      <h3>Technologies Used</h3>
      <ul>
        <li>Flutter for cross-platform mobile development</li>
        <li>Python for backend and machine learning</li>
        <li>Libraries such as PyTorch, Transformers, PEFT</li>
        <li>Language models like GPT-2 and LLAMA</li>
        <li>Cloud technologies for hosting and scaling</li>
      </ul>
    </section>
  );
}

function Milestones() {
  return (
    <section id="milestones">
      <h2>Milestones</h2>
      <p>These are the key milestones we've achieved so far:</p>
      <ul>
        <li>Project Proposal</li>
        <li>Progress Presentation 1</li>
        <li>Progress Presentation 2</li>
        <li>Final Assessment</li>
        <li>Viva</li>
      </ul>
    </section>
  );
}

function Documents() {
  return (
    <section id="documents">
      <h2>Documents</h2>
      <p>Below are the links to our project documents:</p>
      <h3>Project Proposal</h3>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1VsCo8RuPW-Z01K_yoAWK9v-gePDhRZAA/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT21023446 - Sanjeevan M.C.M.A
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/16KRB-k4WKtP1IAggkxA_rahWxa4i_RbD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT21037306 - Fahmi M.F.A
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1N8TshGobmErP4ZADwWVsWxM34hqZk-1r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT20275006 - Lakpriya K.H.A.V
          </a>
        </li>
      </ul>

      <h3>Final Report</h3>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1XDQ8qPvh3xkUlFUGd2Rm5jo17BDqIKAl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            R24-109 Group Final Report
          </a>
        </li>
      </ul>

      <h4>Individual Reports</h4>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1nlDy4W_6aQc3k6nGqPRaYpEbww4CVeKk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT21023446 - Sanjeevan M.C.M.A
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1wC41S1qThtI148EUXrrkrd4B6bg_NMZ4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT21037306 - Fahmi M.F.A
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1uYzwhFR-Ri7GIBEstKdBv7ZNwdqtdZZR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT21084522 - Dissanayake A.L
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1r8QR77hw7LqhyUwCNBIq298xFVbwJ3Vk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT20275006 - Lakpriya K.H.A.V
          </a>
        </li>
      </ul>
    </section>
  );
}

function Slides() {
  return (
    <section id="slides">
      <h2>Presentations</h2>
      <p>Links to our presentations:</p>
      <ul>
        <li>
          <a
            href="https://docs.google.com/presentation/d/15RbY2dy85O7Zpk-4NiVIIbVu1aaEHNX4/edit?usp=drive_link&ouid=103272867948592942019&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Proposal - R24-109 Proposal
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/presentation/d/16PNWvIMrvyRHpZJEheZcOjkeiCEaN3dc/edit?usp=drive_link&ouid=103272867948592942019&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Progress Presentation 1 - R24-109 PP1
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/presentation/d/1sRqw8nU35bHgnrOyvDD3tiL_lm6t7c04/edit?usp=drive_link&ouid=103272867948592942019&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Progress Presentation 2 - R24-109 PP2
          </a>
        </li>
      </ul>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>Meet the team behind this project:</p>
      <ul>
        <li>
          <strong>Sanjeevan M.C.M.A</strong> (Project Group Leader)
          <br />
          <span style={{ fontSize: "small", fontStyle: "Normal" }}>
            ✉️{" "}
            <a href="mailto:it21023446@my.sliit.lk">it21023446@my.sliit.lk</a>
          </span>
        </li>
        <li>
          <strong>Fahmi M.F.A</strong>
          <br />
          <span style={{ fontSize: "small", fontStyle: "Normal" }}>
            ✉️{" "}
            <a href="mailto:it21037306@my.sliit.lk">it21037306@my.sliit.lk</a>
          </span>
        </li>
        <li>
          <strong>Lakpriya K.H.A.V</strong>
          <br />
          <span style={{ fontSize: "small", fontStyle: "Normal" }}>
            ✉️{" "}
            <a href="mailto:it20275006@my.sliit.lk">it20275006@my.sliit.lk</a>
          </span>
        </li>
        <li>
          <strong>Dissanayake A.L</strong>
          <br />
          <span style={{ fontSize: "small", fontStyle: "Normal" }}>
            ✉️{" "}
            <a href="mailto:it21084522@my.sliit.lk">it21084522@my.sliit.lk</a>
          </span>
        </li>
      </ul>

      <h3>Supervisor</h3>
      <p>
        <strong>Ms. Samanthi E.R Siriwardana</strong> (Lecturer)
        <br />
        <span style={{ fontSize: "small", fontStyle: "italic" }}>
          Faculty of Computing
          <br />
          Department of Software Engineering
          <br />
          Sri Lanka Institute of Information Technology
          <br />
          Malabe, Sri Lanka
          <br />
        </span>
        <span style={{ fontSize: "small", fontStyle: "Normal" }}>
          ✉️ <a href="mailto:samanthi.s@sliit.lk">samanthi.s@sliit.lk</a>
        </span>
      </p>

      <h3>Co-Supervisor</h3>
      <p>
        <strong>Ms. Mihiri Samaraweera</strong> (Lecturer)
        <br />
        <span style={{ fontSize: "small", fontStyle: "italic" }}>
          Faculty of Computing
          <br />
          Department of Software Engineering
          <br />
          Sri Lanka Institute of Information Technology
          <br />
          Malabe, Sri Lanka
          <br />
        </span>
        <span style={{ fontSize: "small", fontStyle: "Normal" }}>
          ✉️ <a href="mailto:samanthi.s@sliit.lk">mihiri.s@sliit.lk</a>
        </span>
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <h3>If you have any questions, feel free to reach out:</h3>
      <br />
      <ul>
        <li>
          Email ✉️:{" "}
          <a href="mailto:it21023446@my.sliit.lk">it21023446@my.sliit.lk</a>
        </li>
        <li>Phone📱: +94 76 280 2065</li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Research Project. All rights reserved.</p>
    </footer>
  );
}

export default App;
