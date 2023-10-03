const SkillIcons = ({ stack, header }) => {
  return (
    <div className="skill-icons">
      <h3>{header}</h3>
      <div className="icons">
        {stack.map((skill) => (
          <div key={skill} className="icon">
            <img src={skill} alt="skills" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillIcons;
