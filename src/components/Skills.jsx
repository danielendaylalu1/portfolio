import SkillIcons from "./SkillIcons";

const Skills = ({
  frontSkills,
  frameworkSkills,
  backSkills,
  databaseSkills,
}) => {
  return (
    <div className="skills" id="skills">
      <h2 className="md-header">Skills</h2>
      <SkillIcons header="Frontend-stack" stack={frontSkills} />
      <SkillIcons header="Frameworks" stack={frameworkSkills} />
      <SkillIcons header="Backend-stack" stack={backSkills} />
      <SkillIcons header="Database" stack={databaseSkills} />
    </div>
  );
};

export default Skills;
