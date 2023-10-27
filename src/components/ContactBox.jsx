import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ContactBox = () => {
  const icons = [
    {
      icon: faEnvelope,
      link: "endaylaludaniel@gmail.com",
      header: "E-Mail",
      name: "endaylaludaniel@gmail.com",
    },
    {
      icon: faTelegram,
      link: "https://t.me/Daylalu",
      header: "Telegram",
      name: "t.me/Daylalu",
    },
  ];
  return (
    <>
      {icons.map((item) => {
        return (
          <div className="contact-box" key={item.header}>
            <a
              href={
                item.header === "E-Mail" ? `mailto:${item.link}` : item.link
              }
              className="box-icon"
            >
              <FontAwesomeIcon icon={item.icon} className="fa" />
            </a>
            <div className="box-dec">
              <h4>{item.header}</h4>
              <a
                href={
                  item.header === "E-Mail" ? `mailto:${item.link}` : item.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContactBox;
