import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">
          <a href="#">
            Dan.<span>stack</span>
          </a>
        </h3>
        {!isNavOpen ? (
          <FontAwesomeIcon
            icon={faBars}
            className="nav-icon hum"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="nav-icon"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
        )}
        <ul className={`nav ${isNavOpen && "min-nav"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
