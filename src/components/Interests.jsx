import Section from "./Section";
import Icon from "./Icon";
import { interests } from "../data/cv";

export default function Interests() {
  return (
    <Section id="interests" icon="heart" title="Interests" index="04" kicker="Beyond Work">
      <ul className="interests">
        {interests.map((item, i) => (
          <li className="interest" data-reveal style={{ "--i": i }} key={item.label}>
            <span className="interest__ic">
              <Icon name={item.icon} size={16} />
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
