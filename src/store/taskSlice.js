import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   

export const fetchTasksAsync = createAsyncThunk("tasks", async () => {
    const {data} = await axios.get("/api/tasks");
    return data;
});

export const addTaskAsync = createAsyncThunk('tasks/addtask', async ({type, mealtype, date, time, description}) => {
    try {
        const {data} = await axios.post('api/tasks', {
            type,
            mealtype,
            date,
            time,
            description
        });
        return data;
    } catch(error) {
        console.error(error)
    }
})

export const tasksSlice = createSlice({
    name: 'tasks', 
    initialState: [],
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchTasksAsync.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(addTaskAsync.fulfilled, (state, action) => {
            state.push(action.payload)
        })
    }
});

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;