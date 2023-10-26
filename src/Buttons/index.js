import { SectionButtons } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <SectionButtons>
    {tasks.length > 0 && (
      <>
        <SectionButtons onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </SectionButtons>
        <SectionButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </SectionButtons>
      </>
    )}
  </SectionButtons>
);

export default Buttons;