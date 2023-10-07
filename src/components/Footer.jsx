import HomeLinks from "./HomeLinks";
import ContactBox from "./ContactBox";
const Footer = ({ links }) => {
  return (
    <div className="footer" id="contact">
      <div className="footer-top">
        <h3>Contact</h3>
        <p>Hit me up!</p>
        <div className="contact">
          <ContactBox />
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright &copy; 2023. All rights are reserved</p>
        <HomeLinks links={links} className="small white" />
      </div>
    </div>
  );
};

export default Footer;
