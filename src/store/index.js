import { configureStore } from "@reduxjs/toolkit";
import caretakersReducer from "./caretakerSlice";
import taskReducer from "./taskSlice";
//import reducers // 

const store = configureStore({
    reducer: {
        caretakers: caretakersReducer,
        tasks: taskReducer
    }
});

export default store;