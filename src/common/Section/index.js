import { Wrapper, Title, SectionList } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <SectionList>
      <Title>{title}</Title>
      {extraHeaderContent}
    </SectionList>
    <div>
      {body}
    </div>
  </Wrapper>
);

export default Section;