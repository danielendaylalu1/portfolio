const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const items = ["home", "about", "projects", "contact"];
  return (
    <ul className={`nav ${isNavOpen && "min-nav"}`}>
      {items.map((item) => (
        <li key={item}>
          <a href={`#${item}`} onClick={() => setIsNavOpen(false)}>
            {item.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
