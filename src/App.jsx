import { useState } from "react";
import NavBar from "./components/NavBar";

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
import Skills from "./components/Skills";
import Home from "./components/Home";
import About from "./components/About";
import HomeLinks from "./components/HomeLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      <Home links={links} />
      <Skills
        frontSkills={frontSkills}
        backSkills={backSkills}
        frameworkSkills={frameworkSkills}
        databaseSkills={databaseSkills}
      />
      <About />
      <div className="footer">
        <div className="footer-top">
          <h3>Contact</h3>
          <p>Hit me up!</p>
          <div className="contact">
            <div className="contact-box">
              <a href="" className="box-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <div className="box-dec">
                <h4>Mail</h4>
                <a
                  href="https://t.me/Daylalu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  endaylaludaniel@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-box">
              <a href="" className="box-icon">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <div className="box-dec">
                <h4>Telegram</h4>
                <a
                  href="https://t.me/Daylalu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://t.me/Daylalu
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>Copyright &copy; 2023. All rights are reserved</p>
          <HomeLinks links={links} className="small white" />
        </div>
      </div>
    </div>
  );
};

export default App;
