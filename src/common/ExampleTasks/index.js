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
            <Button onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "Pobierz przykładowe zadania"}
            </Button>
            {error && <ErrorComponent>{error}</ErrorComponent>}
        </>
    );
};

export default ExampleTasks;