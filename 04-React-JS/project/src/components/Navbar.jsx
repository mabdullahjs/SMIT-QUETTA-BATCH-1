import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { Link, useNavigate } from 'react-router';

const Navbar = () => {

    const navigate = useNavigate()
    const logout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((error) => {
            alert('error occured')
        });
    }
    return (
        <>
        <Link to={'/'}>Dashboard</Link>
        <Link to={'profile'}>Profile</Link>
        <Link to={'courses'}>Course</Link>
        <Link to={'students'}>student</Link>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Navbar