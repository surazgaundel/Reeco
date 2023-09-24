import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/update/productSlice";



export const store =configureStore({
    reducer:{
        products:productSlice
    }
});

