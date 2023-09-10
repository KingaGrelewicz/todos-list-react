import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}
        >
          <button className="list__button list__button--toggleDone">
            {task.done ? "✔" : ""}
          </button>
          <span className={`list__content${task.done ? " list__content--done" : ""}`}>
            {task.content}
          </span>
          <button className="list__button list__button--remove">
            🗑
          </button>
        </li>
      ))}
    </ul>
  );

export default Tasks;