import Section from "./Section";
import { careerDirection } from "../data/cv";

export default function Career() {
  return (
    <Section id="career" icon="compass" title="Career Direction" index="06" kicker="Direction">
      <div className="cards cards--2">
        {careerDirection.map((item, i) => (
          <article
            className="card"
            data-reveal
            data-spotlight
            style={{ "--i": i }}
            key={item.title}
          >
            <div className="entry__head">
              <h3 className="entry__title">{item.title}</h3>
              <span className="entry__tag">{item.tag}</span>
            </div>
            <p className="entry__desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
