import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "./Auth/AuthReducer";

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),

        auth: AuthReducer,

    });

export default rootReducer;
