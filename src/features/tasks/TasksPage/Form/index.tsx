import { useState, useRef, FormEventHandler } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledButton } from "./styled";
import { addTask } from "../../taskSlice";
import Input from "../../Input";
import { useAppDispatch } from "../../../../hooks";

const Form = () => {
  const [newTaskContent, setNewTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

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
