import { Container } from "./styled";
import { Button } from "../../Button";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../../taskSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const Buttons = () => {
  const areTasksEmpty = useAppSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useAppSelector(selectIsEveryTaskDone);
  const hideDone = useAppSelector(selectHideDone);

  const dispatch = useAppDispatch();

  return (
    <Container>
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
};

export default Buttons;
