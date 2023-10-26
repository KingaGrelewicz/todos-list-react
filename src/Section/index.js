import { Part, Title, SectionList } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
  <Part>
    <SectionList className="section__list">
      <Title>{title}</Title>
      {extraHeaderContent}
    </SectionList>
    <div>
      {body}
    </div>
  </Part>
);

export default Section;