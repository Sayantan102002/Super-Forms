import React from 'react'
import About from '../Components/Auth/auth'
import GuestRoute from '../GuestRoute'

export default function GuestRoutes() {
    return [
        <GuestRoute
            exact
            path="/about"
            //   element={<Home />}
            component={About}
        />
    ]
}
