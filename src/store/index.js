import {configureStore} from "@reduxjs/toolkit"

import { counterReducer } from "./counterSlice";

import { tasksReducer } from "./tasksSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer
    }
});

export default store;