import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./slice/clockSlice";

export default configureStore({
    reducer:{
        clock: clockReducer
    }
})