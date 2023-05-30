import { createStore } from "redux";

import rootReducer from "./Redux/Reducers/combinedReducers";


export  const Store = createStore(rootReducer);


//with the help of store every state / activities within the whole project  is centralized & also connect() method is used to connect with redux as we are passing the props.