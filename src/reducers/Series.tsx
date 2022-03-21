import React from "react";
import { Action } from "./index";

const listSeriesReducer = (state = [], action: Action) => 
{
    switch (action.type) {
        case "ADD_SERIES":
            return state;
    }
    return state;
}

export default listSeriesReducer;