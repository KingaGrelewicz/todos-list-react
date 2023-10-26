import { useState, useRef } from 'react';
import { StyledForm, NewTask, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTask] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

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
        <StyledForm onSubmit={onFormSubmit}>
            <NewTask
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTask(target.value)}
                className="form__newTask"
                name="newTask"
                placeholder="Co jest do zrobienia?" 
            />
            <Button onClick={focusInput} className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;