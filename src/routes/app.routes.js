import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BasicPrivateRoute from '../BasicPrivateRoute'
import Account from '../Components/Account/account'
import About from '../Components/Auth/auth'
import FormBuilder from '../Components/Forms/FormBuilder'
import Home from '../Components/Home/Home'
import Settings from '../Components/Settings/settings'
import GuestRoute from '../GuestRoute'

export default function AppRoutes() {
    return [
        <BasicPrivateRoute
            exact
            path="/dashboard"
            //   element={<Home />}
            component={Home}
        />,
        <BasicPrivateRoute
            exact
            path="/dashboard/form/:formId"
            component={FormBuilder}
        />,
        <BasicPrivateRoute
            exact
            path="/account"
            component={Account}
        />,
        <BasicPrivateRoute
            exact
            path="/settings"
            component={Settings}
        />,
        <Route
            exact
            path="/"
            render={() => <Redirect to="/dashboard" />}
        />
    ]
}
