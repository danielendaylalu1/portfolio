import profile from "../assets/profile.svg";
import HomeLinks from "./HomeLinks";

const Home = ({ links }) => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="header home-header">
          <h1 className="big-header">Full-Stack MERN Developer</h1>
          <p className="description">
            Hi, I{"'"}m Daniel Endaylalu. A dedicated and passionate{" "}
            <span>Full-stack MERN</span> Developer.
          </p>
          <a href="mailto:your-email@gmail.com?subject=Hello&cc=another-email@gmail.com&bcc=third-email@gmail.com&body=Nice to meet you!">
            Email me
          </a>

          <HomeLinks links={links} className="md hover black" />
        </div>
        <div className="cover home-cover">
          <img src={profile} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
