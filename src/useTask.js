import { useState, useEffect } from 'react';

export const useTask = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }))
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(task => [
            ...tasks,
            {
                content,
                done: false,
                id: task.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };
    
    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    }
}