import { ReactNode } from "react";
import { Wrapper, Title, SectionList } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => {
  return (
    <Wrapper>
      <SectionList>
        <Title>{title}</Title>
        {extraHeaderContent}
      </SectionList>
      <div>{body}</div>
    </Wrapper>
  );
};

export default Section;
