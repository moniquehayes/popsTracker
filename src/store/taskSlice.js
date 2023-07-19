import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   

export const fetchTasksAsync = createAsyncThunk("tasks", async () => {
    const {data} = await axios.get("/api/tasks");
    return data;
})

export const tasksSlice = createSlice({
    name: 'tasks', 
    initialState: [],
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchTasksAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;