import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTaskFormLocalStorage } from "./taskLocalStorage";
import { Task } from "./types";

interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: getTaskFormLocalStorage() ?? [],
  hideDone: false,
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex(({ id }) => id === action.payload);
      if (index !== -1) {
        state.tasks[index].done = !state.tasks[index].done;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.tasks.findIndex(
        ({ id }) => id === action.payload
      );
      if (indexToRemove !== -1) {
        state.tasks.splice(indexToRemove, 1);
      }
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: () => {},
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    fetchExampleTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchExampleTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.loading = false;
      state.tasks = action.payload;
    },

    fetchExampleTasksFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksStart,
  fetchExampleTasksSuccess,
  fetchExampleTasksFailure,
} = tasksSlice.actions;

const selectTaskState = (state: { tasks: TasksState }) => state.tasks;

export const selectTasks = (state: { tasks: TasksState }) =>
  selectTaskState(state).tasks;
export const selectHideDone = (state: { tasks: TasksState }) =>
  selectTaskState(state).hideDone;
export const selectAreTasksEmpty = (state: { tasks: TasksState }) =>
  selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state: { tasks: TasksState }) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state: { tasks: TasksState }, taskId: string) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (
  state: { tasks: TasksState },
  query: string | null
) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
