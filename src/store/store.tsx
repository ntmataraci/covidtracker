import { configureStore} from "@reduxjs/toolkit";
import covidReducer from "./slice";

export const store = configureStore({
    reducer: {
        covidData: covidReducer,
    }
})