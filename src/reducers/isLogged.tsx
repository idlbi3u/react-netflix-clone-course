import React from "react";
import { Action } from "./index";

const loggedReducer = (state: boolean = false, action: Action) => 
{
    switch (action.type) {
        case "SIGN_IN":
            return !state;
    }
    return state;
}

export default loggedReducer;
