import { useLocation } from "react-router-dom";
import { List, Item, Content, StyledButton, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../taskSlice";
import searchQueryParamName from "../../TaskPage/searchQueryParamName";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { Task } from "../../types";

const TaskList: React.FC = () => {
  const location = useLocation();
  const query: string | null = (new URLSearchParams(location.search)).get(searchQueryParamName); 

  const tasks: Task[] = useAppSelector(state => selectTasksByQuery(state, query));
  const hideDone: boolean = useAppSelector(selectHideDone);

  const dispatch = useAppDispatch();
  return (
    (
      <List>
        {tasks.map(task => (
          <Item
            key={task.id}
            hidden={task.done && hideDone}
          >
            <StyledButton
              $toggleDone
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔" : ""}
            </StyledButton>
            <Content $done={task.done}>
              <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
            </Content>
            <StyledButton
              $remove
              onClick={() => dispatch(removeTask(task.id))}
            >
              🗑
            </StyledButton>
          </Item>
        ))}
      </List>
    )
  );
};

export default TaskList;