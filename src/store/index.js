import { configureStore } from "@reduxjs/toolkit";
import caretakersReducer from "./caretakerSlice";
import taskReducer from "./taskSlice";
import assignmentReducer from "./assignmentSlice";
//import reducers // 

const store = configureStore({
    reducer: {
        caretakers: caretakersReducer,
        tasks: taskReducer,
        assignments: assignmentReducer
    }
});

export default store;