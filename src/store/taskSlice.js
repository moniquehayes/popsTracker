import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   

export const fetchTasksAsync = createAsyncThunk("tasks", async () => {
    const {data} = await axios.get("/api/tasks");
    return data;
});

// export const fetchMostRecent = createAsyncThunk("mostRecent", async (type) => {
//     const {data} = await axios.get("api/tasks");
//     const filteredTasks = data.filter((task) => task.type === type);
//     let mostRecent = filteredTasks[0];
//     if (filteredTasks.length > 1) {
//         for (let i=1; i<filteredTasks.length; i++) {
//             const task = filteredTasks[i];
//             if (task.date > mostRecent.date) {
//                 mostRecent = task
//             }
//         }
//     }
//     console.log(mostRecent);
//     return mostRecent;
// })

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