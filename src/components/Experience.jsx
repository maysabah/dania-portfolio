import Section from "./Section";
import { experience } from "../data/cv";

export default function Experience() {
  return (
    <Section id="experience" icon="briefcase" title="Professional Profile" index="05" kicker="Profile">
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="tl-item" data-reveal style={{ "--i": i }} key={item.title}>
            <span className="tl-node" aria-hidden="true" />
            <div className="entry__head">
              <h3 className="entry__title">{item.title}</h3>
              <span className="entry__tag">{item.tag}</span>
            </div>
            {item.period && <span className="entry__period">{item.period}</span>}
            <p className="entry__desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
