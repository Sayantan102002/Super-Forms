import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AuthReducer from "./Auth/AuthReducer";
import FormsReducer from "./Forms/FormsReducer";
import FileReducer from "./File/FileReducer";
import UsersReducer from "./Users/UsersReducer";
import NotificationsReducer from "./Notifications/notifications.reducer";

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        forms: FormsReducer,
        auth: AuthReducer,
        file: FileReducer,
        users: UsersReducer,
        notifications: NotificationsReducer,

    });

export default rootReducer;
