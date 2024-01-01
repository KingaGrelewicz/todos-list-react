import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled"
import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone
} from "../../taskSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  );
}

export default Buttons;