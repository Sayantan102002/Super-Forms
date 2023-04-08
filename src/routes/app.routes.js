import React from 'react'
import BasicPrivateRoute from '../BasicPrivateRoute'
import About from '../Components/Auth/auth'
import FormBuilder from '../Components/Forms/FormBuilder'
import Home from '../Components/Home/Home'
import GuestRoute from '../GuestRoute'

export default function AppRoutes() {
    return [
        <BasicPrivateRoute
            exact
            path="/dashboard/forms"
            //   element={<Home />}
            component={Home}
        />,
        <BasicPrivateRoute
            exact
            path="/dashboard/form/:formId"
            //   element={<Home />}
            component={FormBuilder}
        />
    ]
}
