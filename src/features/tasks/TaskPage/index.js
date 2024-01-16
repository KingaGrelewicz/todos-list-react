import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../taskSlice";
import { Wrapper } from "./styled";


export const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znalezniono zadania 😢"}
                body={
                    <Wrapper>
                        <strong>Ukończono:</strong> {task ? (task.done ? "Tak" : "Nie") : "Brak zadania"}
                    </Wrapper>
                }
            />
        </Container>
    );
}
