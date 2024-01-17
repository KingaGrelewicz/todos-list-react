import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks } from '../../features/tasks/taskSlice';
import { Button } from '../../features/tasks/Button';
import { ErrorComponent } from './styled';

const ExampleTasks = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.tasks.loading);
  const error = useSelector(state => state.tasks.error);

  const handleClick = () => {
    dispatch(fetchExampleTasks());
  };

  return (
    <>
      {error ? <ErrorComponent>{error}</ErrorComponent> : (
        <Button onClick={handleClick} disabled={loading}>
          {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
      )}
    </>
  );
};

export default ExampleTasks;