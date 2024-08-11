import { useState, useRef, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledButton } from "./styled";
import { addTask } from "../../taskSlice";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTask] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current!.focus();
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTask("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTask(target.value)}

        name="newTask"
        placeholder="Co jest do zrobienia?"
      />
      <StyledButton onClick={focusInput} className="form__button">
        Dodaj zadanie
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
