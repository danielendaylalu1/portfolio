import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomeLinks = ({ links, className }) => {
  return (
    <div className={`links`}>
      {links.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={link.link}
          className={`${className}`}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default HomeLinks;
