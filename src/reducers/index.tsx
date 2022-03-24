import React from "react";
import loggedReducer from "./isLogged";
import listSeriesReducer from "./Series";
import { combineReducers } from "redux";
import myListReducer from "./mylist";

export interface Action 
{
    type: string;
}

const allReducers = combineReducers(
    {
        isLogged: loggedReducer,
        series: listSeriesReducer,
        myList: myListReducer
    }
)

export default allReducers;