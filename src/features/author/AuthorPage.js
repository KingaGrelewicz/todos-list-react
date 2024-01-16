import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"
import { Wrapper } from "./styled";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kinga Grelewicz"
            body={
                <Wrapper>
                    <p>
                        Na codzień pracuję jako <strong>koordynator do spraw szkoleń</strong> w Chińskiej korporacji.<br />
                        W czasie wolnym lubię zatrzymać się na chwilę przy kawie☕ oraz serialu lub szydełkując nowe projekty.
                        Bardzo lubię podróżować oraz poznawać inne kultury, spacerować pośród nowych nieznanych mi jeszcze miejsc🌴🌴.
                    </p>
                </Wrapper>
            }
        />
    </Container>
);

export default AuthorPage;