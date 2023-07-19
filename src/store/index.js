import { configureStore } from "@reduxjs/toolkit";
import caretakersReducer from "./caretakerSlice";
//import reducers // 

const store = configureStore({
    reducer: {
        caretakers: caretakersReducer
    }
});

export default store;