import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   

export const fetchCaretakersAsync = createAsyncThunk("caretakers", async () => {
    const {data} = await axios.get("/api/caretakers");
    return data;
});

export const caretakersSlice = createSlice({
    name: "caretakers",
    initialState: [], 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCaretakersAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectCaretakers = (state) => state.caretakers;

export default caretakersSlice.reducer;