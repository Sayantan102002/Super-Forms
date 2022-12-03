import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "./Auth/AuthReducer";
import FormsReducer from "./Forms/FormsReducer";

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        forms: FormsReducer,
        auth: AuthReducer,

    });

export default rootReducer;
