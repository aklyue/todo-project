import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        processedTasksCount: 0,
        completedTasksCount: 0,
    },
    reducers: {
        createTask(state, action) {
            const newTasks = {
                id: `${Date.now()}-${state.tasks.length}`,
                title: action.payload.title,
                text: action.payload.text,
                date: new Date().toLocaleDateString(),
                isDone: false
            }

            state.tasks.push(newTasks)
        },

        completeTask(state, action) {
            state.tasks = state.tasks.map((elem) => {
                if (elem.id === action.payload) {
                    if (elem.isDone) {
                        state.processedTasksCount += 1;
                        state.completedTasksCount -= 1;
                    } else {
                        state.processedTasksCount -= 1;
                        state.completedTasksCount += 1;
                    }

                    return {
                        ...elem,
                        isDone: !elem.isDone,
                    };
                }
                return elem;
            });
        },

        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const { createTask, removeTask, completeTask } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer