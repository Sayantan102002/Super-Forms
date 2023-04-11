import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const BasicPrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const { user, loggedIn } = useSelector((state) => state.auth);
    const token = localStorage.getItem("token");
    // const loggedIn = user?.loggedIn;
    console.log(loggedIn);
    // console.log("useRightSide", useRightSide);
    return (
        <Route
            {...rest}
            render={(props) =>
                loggedIn ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to="/about" />
                )
            }
        />
    );
};
export default BasicPrivateRoute;
