import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../taskSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    (
      <List>
        {tasks.map(task => (
          <Item
            key={task.id}
            hidden={task.done && hideDone}
          >
            <Button
              $toggleDone
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔" : ""}
            </Button>
            <Content $done={task.done}>
              <Link to={`/zadania/${task.id}`}>{task.content}</Link>
            </Content>
            <Button
              $remove
              onClick={() => dispatch(removeTask(task.id))}
            >
              🗑
            </Button>
          </Item>
        ))}
      </List>
    )
  );
};

export default TaskList;