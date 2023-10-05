const Nav = ({ isNavOpen }) => {
  const items = ["home", "skills", "about", "projects", "contact"];
  return (
    <ul className={`nav ${isNavOpen && "min-nav"}`}>
      {items.map((item) => (
        <li key={item}>
          <a href={`#${item}`}>{item.toUpperCase()}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
