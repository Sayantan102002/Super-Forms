import React from 'react'
import { useSelector } from 'react-redux';
import NoForm from '../Forms/NoForm';
import NavBar from '../NavBar';

export default function Home() {
    const { user } = useSelector((state) => (state.auth));
    console.log(user, "user");
    let form = [];
    return (
        <>
            <NavBar />
            {!(form.length > 0) ? <NoForm /> : null}
        </>
    )
}
