import Section from "./Section";
import Icon from "./Icon";
import { contacts } from "../data/cv";

function Row({ contact, index }) {
  const inner = (
    <>
      <span className="contact__ic">
        <Icon name={contact.icon} size={20} />
      </span>
      <span className="contact__txt">
        <span className="contact__label">{contact.label}</span>
        <span className="contact__value">{contact.value}</span>
      </span>
      {contact.href && <Icon name="arrowUpRight" size={16} className="contact__go" />}
    </>
  );

  const props = {
    className: "contact__row",
    "data-reveal": true,
    "data-spotlight": true,
    style: { "--i": index },
  };
  return contact.href ? (
    <a href={contact.href} {...props}>
      {inner}
    </a>
  ) : (
    <div {...props}>{inner}</div>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      icon="mail"
      title="Get in touch"
      index="08"
      kicker="Say Hello"
      className="section--contact"
    >
      <p className="contact__lead" data-reveal>
        Have an opportunity or just want to say hello? Dania would love to hear from you.
      </p>
      <div className="contact__grid">
        {contacts.map((contact, i) => (
          <Row contact={contact} index={i + 1} key={contact.label} />
        ))}
      </div>
    </Section>
  );
}
