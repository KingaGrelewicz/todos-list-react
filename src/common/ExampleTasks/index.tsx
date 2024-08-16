import { fetchExampleTasks } from "../../features/tasks/taskSlice";
import { Button } from "../../features/tasks/Button";
import { ErrorComponent } from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks";

const ExampleTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.tasks.loading);
  const error = useAppSelector((state) => state.tasks.error);

  const handleClick = () => {
    dispatch(fetchExampleTasks());
  };

  return (
    <>
      {error ? (
        <ErrorComponent>{error}</ErrorComponent>
      ) : (
        <Button onClick={handleClick} disabled={loading}>
          {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
      )}
    </>
  );
};

export default ExampleTasks;
