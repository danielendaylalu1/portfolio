import { useState } from "react";
import NavBar from "./components/NavBar";
import profile from "./assets/profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import bootstrap from "./assets/bootstrap.svg";
import tailwindcss from "./assets/tailwind-css.svg";
import javascript from "./assets/javascript.svg";
import react from "./assets/react.svg";
import redux from "./assets/redux.svg";
import nextjs from "./assets/nextjs.svg";
import nodejs from "./assets/node-js.svg";
import express from "./assets/express.svg";
import mongodb from "./assets/mongodb.svg";
import sql from "./assets/sql.svg";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = [
    {
      icon: faLinkedin,
      link: "https://linkedin.com/in/daniel-endaylalu-43b92326a",
    },
    {
      icon: faGithub,
      link: "https://github.com/danielendaylalu1",
    },
    {
      icon: faTelegram,
      link: "https://t.me/Daylalu",
    },
  ];
  const frontSkills = [html, css, javascript, tailwindcss, bootstrap];
  const frameworkSkills = [react, redux, nextjs];
  const backSkills = [nodejs, express];
  const databaseSkills = [mongodb, sql];

  return (
    <div>
      <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="home" id="#home">
        <div className="container">
          <div className="header home-header">
            <h1 className="big-header">Full-Stack MERN Developer</h1>
            <p className="description">
              Hi, I{"'"}m Daniel Endaylalu. A passionate Full-stack Mern
              Developer.
            </p>
            <div className="links">
              {links.map((link) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.link}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="cover home-cover">
            <img src={profile} alt="illustration" />
          </div>
        </div>
        <div className="skills">
          <h2 className="md-header">Skills</h2>
          <div className="skill-icons">
            <h3>Frontend-stack</h3>
            <div className="icons">
              {frontSkills.map((skill) => (
                <div key={skill} className="icon">
                  <img src={skill} alt="skills" />
                </div>
              ))}
            </div>
          </div>
          <div className="skill-icons">
            <h3>Frameworks</h3>
            <div className="icons">
              {frameworkSkills.map((skill) => (
                <div key={skill} className="icon">
                  <img src={skill} alt="skills" />
                </div>
              ))}
            </div>
          </div>
          <div className="skill-icons">
            <h3>Backend-stack</h3>
            <div className="icons">
              {backSkills.map((skill) => (
                <div key={skill} className="icon">
                  <img src={skill} alt="skills" />
                </div>
              ))}
            </div>
          </div>
          <div className="skill-icons">
            <h3>Database</h3>
            <div className="icons">
              {databaseSkills.map((skill) => (
                <div key={skill} className="icon">
                  <img src={skill} alt="skills" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
