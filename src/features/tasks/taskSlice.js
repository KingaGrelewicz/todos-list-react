import { createSlice } from '@reduxjs/toolkit';
import { getTaskFormLocalStorage } from "./taskLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTaskFormLocalStorage(),
        hideDone: false,
        loading: false,
        error: null,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const indexToRemove = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(indexToRemove, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => {},
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasksStart: (state) => {
            state.loading = true;
            state.error = null; 
        },

        fetchExampleTasksSuccess: (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        },

        fetchExampleTasksFailure: (state, action) => {
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

const selectTaskState = state => state.tasks;

export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;