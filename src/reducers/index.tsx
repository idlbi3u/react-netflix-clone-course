import React from "react";
import loggedReducer from "./isLogged";
import listSeriesReducer from "./Series";
import { combineReducers } from "redux";

export interface Action 
{
    type: string;
}

const allReducers = combineReducers(
    {
        isLogged: loggedReducer,
        series: listSeriesReducer,
    }
)

export default allReducers;