import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router';

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
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Navbar