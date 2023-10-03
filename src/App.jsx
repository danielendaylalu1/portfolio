import { useState } from "react";
import NavBar from "./components/NavBar";
import profile from "./assets/profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = [
    {
      icon: faLinkedin,
      link: "www.linkedin.com/in/daniel-endaylalu-43b92326a",
    },
  ];

  return (
    <div>
      <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="home">
        <div className="container">
          <div className="header home-header">
            <h1 className="big-header">Full-Stack MERN Developer</h1>
            <p className="description">
              Hi, I{"'"}m Daniel Endaylalu. A passionate Full-stack Mern
              Developer.
            </p>
            <div className="links">
              {" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://t.me/Daylalu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
          <div className="cover home-cover">
            <img src={profile} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
