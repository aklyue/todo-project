import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers: {

    }
})

export const tasksReducer = tasksSlice.reducer