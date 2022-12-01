import React from 'react'
import BasicPrivateRoute from '../BasicPrivateRoute'
import About from '../Components/Auth/auth'
import Home from '../Components/Home/Home'
import GuestRoute from '../GuestRoute'

export default function AppRoutes() {
    return [
        <BasicPrivateRoute
            exact
            path="/forms"
            //   element={<Home />}
            component={Home}
        />,
        <GuestRoute
            exact
            path="/"
            //   element={<Home />}
            component={About}
        />
    ]
}
