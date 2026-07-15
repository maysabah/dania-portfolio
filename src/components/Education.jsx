import Section from "./Section";
import { education } from "../data/cv";

export default function Education() {
  return (
    <Section id="education" icon="graduationCap" title="Education" index="01" kicker="Background">
      <div className="timeline">
        {education.map((e, i) => (
          <article className="tl-item" data-reveal style={{ "--i": i }} key={e.degree}>
            <span className="tl-node" aria-hidden="true" />
            <h3 className="edu__degree">{e.degree}</h3>
            <p className="edu__school">{e.school}</p>
            <span className="edu__years">{e.years}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}
