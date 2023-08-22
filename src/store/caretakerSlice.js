import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   

export const fetchCaretakersAsync = createAsyncThunk("caretakers", async () => {
    try {
    const {data} = await axios.get("/api/caretakers");
    return data;
    } catch (err) {
        console.error(err)
    }
});

export const fetchSingleCaretaker = createAsyncThunk("caretakers/id", async (id) => {
   try {
    const {data} = await axios.get(`/api/caretakers/${id}`);
    return data;
   } catch (err) {
    console.error(err)
   }
})

export const caretakersSlice = createSlice({
    name: "caretakers",
    initialState: [], 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCaretakersAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchSingleCaretaker.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectCaretakers = (state) => state.caretakers;

export default caretakersSlice.reducer;