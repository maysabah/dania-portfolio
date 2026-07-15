import Section from "./Section";
import CountUp from "./CountUp";
import { languages } from "../data/cv";

export default function Languages() {
  return (
    <Section id="languages" icon="globe" title="Languages" index="03" kicker="Communication">
      {languages.map((lang, i) => (
        <div
          className="lang"
          data-reveal
          style={{ "--i": i, "--w": `${lang.value}%` }}
          key={lang.name}
        >
          <div className="lang__top">
            <span className="lang__name">{lang.name}</span>
            <span className="lang__level">
              {lang.level}
              <span className="lang__pct">
                <CountUp to={lang.value} suffix="%" />
              </span>
            </span>
          </div>
          <div
            className="lang__bar"
            role="progressbar"
            aria-valuenow={lang.value}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${lang.name} proficiency`}
          >
            <span className="lang__fill" />
          </div>
        </div>
      ))}
    </Section>
  );
}
