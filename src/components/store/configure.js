import { configureStore } from "@reduxjs/toolkit";
import { reducerrr } from "./indexstore";
import { addreducer } from "./indexstore";
import { reducerform } from "./indexstore";
import { deletereducers } from "./indexstore";
import { searchreducers } from "./indexstore";
export const store=configureStore({
    reducer:{
     booksandmovies:reducerrr,
     additem:addreducer,
     showchange:reducerform,
     deleteItem:deletereducers,
     searchItem:searchreducers,
    }
})
export * from './reduxthunk'