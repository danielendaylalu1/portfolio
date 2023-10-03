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
            in HTML, CSS, JavaScript, React, Redux, Tailwind, Node.js, Express,
            Mongodb and Sql. I excel in designing and maintaining responsive
            websites that offer a smooth user experience. My expertise lies in
            crafting dynamic, engaging interfaces through writing clean and
            optimized code and utilizing cutting-edge development tools and
            techniques. I am also a team player who thrives in collaborating
            with cross-functional teams to produce outstanding web applications.
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
