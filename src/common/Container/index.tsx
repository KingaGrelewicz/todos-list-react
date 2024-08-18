import { ReactNode } from "react";
import { StyledContainer } from "./styled";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
