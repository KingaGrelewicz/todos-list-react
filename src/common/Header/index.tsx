import { ReactNode } from "react";
import { StyledHeader } from "./styled";

interface HeaderProps {
    title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
    <StyledHeader>
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header;