import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from "./reducers";

console.log(reducers)
const loggerMiddleware = createLogger()
const configureStore = () => {
    const rootReducer = combineReducers( reducers );
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
}

export default configureStore();