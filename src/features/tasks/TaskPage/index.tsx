import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../taskSlice";
import { Wrapper } from "./styled";
import { useAppSelector } from "../../../hooks";


export const TaskPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const task = useAppSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znalezniono zadania 😢"}
                body={ task ?
                    <Wrapper>
                        <strong>Ukończono:</strong> {(task.done ? "Tak" : "Nie")}
                    </Wrapper>
                    : ""
                }
            />
        </Container>
    );
}
