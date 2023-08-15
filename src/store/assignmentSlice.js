import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAssignmentsAsync = createAsyncThunk("assignments", async () => {
    try {
    const {data} = await axios.get("api/assignments");
    return data;
    } catch (err) {
        console.error(err)
    }
})

export const assignmentsSlice = createSlice({
    name: "assignments",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAssignmentsAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAssignments = (state) => state.assignments;

export default assignmentsSlice.reducer;