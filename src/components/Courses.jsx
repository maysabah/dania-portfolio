import Section from "./Section";
import Icon from "./Icon";
import { courses } from "../data/cv";

export default function Courses() {
  return (
    <Section id="courses" icon="award" title="Courses" index="07" kicker="Learning">
      <div className="cards">
        {courses.map((course, i) => (
          <article
            className="card card--course"
            data-reveal
            data-spotlight
            style={{ "--i": i }}
            key={course.name}
          >
            <span className="card__ic">
              <Icon name="award" size={20} />
            </span>
            <div className="card__body">
              <h3 className="course__name">{course.name}</h3>
              <span className="chip">{course.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
