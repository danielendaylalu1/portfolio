import about from "../assets/about.svg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="header home-header">
          <h1 className="md-header">About me</h1>
          <h3>
            A dedicated and passionate <span>Full-stack MERN</span> Developer.
          </h3>
          <p className="description">
            As a Full-stack Developer, I possess an impressive arsenal of skills
            in HTML, Css, JavaScript, React, Redux, Tailwind, Node.js, Express,
            Mongodb and Sql. I excel in designing, developing, and maintaining
            responsive websites and applications that offer a seamless user
            experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean, optimized code and utilizing
            cutting-edge full-stack development tools and techniques. I am
            proficient in both front-end and back-end development, including
            database management and server-side programming. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications. My comprehensive understanding
            of the MERN stack allows me to handle projects from conception to
            deployment, ensuring high performance and reliability.
          </p>
        </div>
        <div className="cover home-cover">
          <img src={about} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
