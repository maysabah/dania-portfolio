import Icon from "./Icon";

/** Reusable section shell: index numeral + kicker + display title + icon. */
export default function Section({ id, icon, title, index, kicker, className = "", children }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <header className="section__head" data-reveal>
        {index && <span className="section__num">{index}</span>}
        <span className="section__icon">
          <Icon name={icon} size={18} />
        </span>
        <div className="section__titles">
          {kicker && <span className="section__kicker">{kicker}</span>}
          <h2 className="section__title">{title}</h2>
        </div>
        <span className="section__rule" aria-hidden="true" />
      </header>
      {children}
    </section>
  );
}
