import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import About from '../Components/Auth/auth'
import GuestRoute from '../GuestRoute'

export default function GuestRoutes() {
    return [
        <GuestRoute
            exact
            path="/about"
            //   element={<Home />}
            component={About}
        />,
        <Route
            exact
            path="*"
            render={() => <Redirect to="/about" />}
        />
    ]
}
