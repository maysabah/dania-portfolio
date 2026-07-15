import { useRef } from "react";
import Icon from "./Icon";
import CountUp from "./CountUp";
import { contacts, profile, skills } from "../data/cv";
import { handleImgError } from "../data/photo";
import { useTilt } from "../hooks/useInteractions";

export default function Hero({ photo }) {
  const frameRef = useRef(null);
  useTilt(frameRef);

  const skillCount = skills.technical.length + skills.professional.length;

  return (
    <header id="about" className="hero">
      <div className="hero__inner">
        <div className="hero__text" data-reveal>
          <span className="eyebrow">{profile.eyebrow}</span>

          <h1 className="hero__name">
            <span className="hero__name-first">{profile.firstName}</span>
            <span className="hero__name-last">{profile.lastName}</span>
          </h1>

          <div className="hero__title-row">
            <span className="hairline" aria-hidden="true" />
            <span className="hero__title">{profile.title}</span>
          </div>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <span className="magnetic" data-magnetic>
              <a className="btn btn-primary" href="#contact">
                Get in touch <Icon name="arrowRight" size={16} />
              </a>
            </span>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              {profile.status}
            </span>
          </div>

          <ul className="hero__stats" aria-label="Highlights">
            <li>
              <span className="hero__stat-num">
                <CountUp to={skillCount} />+
              </span>
              <span className="hero__stat-label">Skills</span>
            </li>
            <li>
              <span className="hero__stat-num">
                <CountUp to={2} />
              </span>
              <span className="hero__stat-label">Languages</span>
            </li>
            <li>
              <span className="hero__stat-num">
                <CountUp to={3} />
              </span>
              <span className="hero__stat-label">Interests</span>
            </li>
          </ul>

          <ul className="hero__contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="hero__contact-ic">
                  <Icon name={c.icon} size={16} />
                </span>
                <span className="hero__contact-txt">
                  <span className="hero__contact-label">{c.label}</span>
                  {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" data-reveal style={{ "--i": 1 }}>
          <figure className="photo">
            <span className="photo__ring" aria-hidden="true" />
            <span className="photo__glow" aria-hidden="true" />
            <span className="photo__frame" ref={frameRef}>
              <img
                src={photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                width="360"
                height="460"
                loading="eager"
                decoding="async"
                onError={handleImgError}
              />
              <span className="photo__shine" aria-hidden="true" />
            </span>

            <span className="photo__chip photo__chip--tl">
              <Icon name="mapPin" size={14} />
              Baghdad, Iraq
            </span>
            <span className="photo__chip photo__chip--br">
              <span className="photo__chip-dot" aria-hidden="true" />
              {profile.status}
            </span>
          </figure>
        </div>
      </div>

      <a className="scroll-cue" href="#education" aria-label="Scroll to explore">
        <span className="scroll-cue__mouse" aria-hidden="true">
          <span />
        </span>
        <span className="scroll-cue__text">Scroll</span>
      </a>
    </header>
  );
}
