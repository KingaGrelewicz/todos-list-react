import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="section__list">
      <h2 className="section__header">{title}</h2>
      {extraHeaderContent}
    </header>
    <div>
      {body}
    </div>
  </section>
);

export default Section;