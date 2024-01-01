import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../taskSlice";


export const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znalezniono zadania 😢"}
                body={
                    <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
                }
            />
        </Container>
    );
}
