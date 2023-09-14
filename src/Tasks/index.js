import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button list__button--toggleDone"
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__content${task.done ? " list__content--done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;