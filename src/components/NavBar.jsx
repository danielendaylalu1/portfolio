import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
const NavBar = ({ isNavOpen, setIsNavOpen }) => {
  return (
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
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </nav>
  );
};

export default NavBar;
