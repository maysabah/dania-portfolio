import Section from "./Section";
import { skills } from "../data/cv";

function SkillGroup({ label, items }) {
  return (
    <div className="skills__group" data-reveal>
      <span className="skills__label">{label}</span>
      <ul className="pills">
        {items.map((skill) => (
          <li className="pill" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" icon="cpu" title="Skills" index="02" kicker="Toolkit">
      <SkillGroup label="Technical" items={skills.technical} />
      <SkillGroup label="Professional" items={skills.professional} />
    </Section>
  );
}
