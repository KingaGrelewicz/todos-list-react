import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled"
import { selectTasks, toggleHideDone, setAllDone, fetchExampleTasks } from "../taskSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={(tasks.every(({ done }) => done))}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  );
}

export default Buttons;