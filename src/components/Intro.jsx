import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { contacts, profile } from "../data/cv";
import { handleImgError } from "../data/photo";

export default function Intro({ photo, hiding, onEnter }) {
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onEnter]);

  return (
    <div
      className={`intro ${hiding ? "intro--hiding" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Dania's portfolio"
      onClick={onEnter}
    >
      <div className="intro__card" onClick={(e) => e.stopPropagation()}>
        <div className="intro__photo">
          <span className="intro__ring" aria-hidden="true" />
          <img
            src={photo}
            alt={`${profile.firstName} ${profile.lastName}`}
            width="180"
            height="220"
            onError={handleImgError}
          />
        </div>

        <div className="intro__body">
          <span className="eyebrow">{profile.eyebrow}</span>
          <h1 className="intro__name">
            {profile.firstName}
            <span>{profile.lastName}</span>
          </h1>
          <span className="intro__title">{profile.title}</span>
          <p className="intro__summary">{profile.introSummary}</p>

          <ul className="intro__contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <Icon name={c.icon} size={15} />
                <span>{c.value}</span>
              </li>
            ))}
          </ul>

          <span className="magnetic intro__btn" data-magnetic>
            <button
              ref={btnRef}
              type="button"
              className="btn btn-primary"
              onClick={onEnter}
            >
              Enter Portfolio <Icon name="arrowRight" size={16} />
            </button>
          </span>
        </div>

        <span className="intro__hint">Press Enter ↵</span>
      </div>
    </div>
  );
}
