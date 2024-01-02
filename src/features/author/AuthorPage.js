import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kinga Grelewicz"
            body={
                <>
                    <p>
                        W czasie wolnym lubię zatrzymać się na chwilę przy kawie oraz serialu lub szydełkując nowe projekty.
                        Bardzo lubię podróżować oraz poznawać inne kultury, spacerować pośród nowych nieznanych mi jeszcze miejsc.
                    </p>
                </>
            }
        />
    </Container>
);

export default AuthorPage;