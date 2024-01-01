import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, NewTask, Button } from "./styled"
import { addTask } from "../../taskSlice";

const Form = () => {
    const [newTaskContent, setNewTask] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));
        
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