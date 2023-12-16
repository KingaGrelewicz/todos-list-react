import { StyledHeader } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <h1 className="header">{title}</h1>
    </StyledHeader>
);

export default Header;