// setup data layer
// We need this to track the basket

import React, {createContext, useContext, useReducer} from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, childeren}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childeren}
    </StateContext.Provider>
)