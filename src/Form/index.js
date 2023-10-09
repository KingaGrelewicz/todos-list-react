import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTask] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault(); 

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTask("");
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTask(target.value)}
                className="form__newTask"
                name="newTask"
                placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;