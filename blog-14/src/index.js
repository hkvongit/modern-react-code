import React from "react";
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
//---reduc-thunk
//we need to use middleware  for async actions.. here we use the jsonplaceholder api which needs async function to execute properly


import { Provider } from "react-redux" // helps to makes the Redux store available to any nested components 

import {createStore,applyMiddleware} from "redux"
//----createStore
//syntax :  createStore(reducer, [preloadedState], [enhancer])
// Creates a Redux store that holds the complete state tree of your app.
// There should only be a single store in your app.
// read more from link: https://redux.js.org/api/createstore

//--applyMiddleware
// we need to use applymiddleware func. to specify the thunk middleware to  the store

import App from "./components/App"
import reducers from "./reducers"

//--how to hook middleware to redux store---//
// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
const store=createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
