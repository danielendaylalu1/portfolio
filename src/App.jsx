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
import Footer from "./components/Footer";

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
      <Footer links={links} />
    </div>
  );
};

export default App;
