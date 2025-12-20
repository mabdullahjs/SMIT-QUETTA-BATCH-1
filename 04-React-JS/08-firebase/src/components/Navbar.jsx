import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase/firebaseconfig";
import { Link, useNavigate } from "react-router";

function Navbar() {
    const [showLogout, setShowLogout] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("Navbar User is logged in:", user.uid);
                setShowLogout(true)
            } else {
                console.log("No user is logged in.");
            }
        })
    }, [])


    // use navigate
    const navigate = useNavigate()

    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            alert(`Error: ${error.message} (Code: ${error.code})`);
        });
    }
    return (
        <nav style={styles.nav}>
            <h3 style={styles.logo}>MyApp</h3>
            <ul style={styles.menu}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                {showLogout ? <li><Link style={styles.link} onClick={logoutUser}>Logout</Link></li> : <div><li><Link to="/login" style={styles.link}>Login</Link></li>
                    <li><Link to="/register" style={styles.link}>Register</Link></li></div>}
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
    },
    logo: {
        color: "#fff",
        margin: 0,
    },
    menu: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
        margin: 0,
        padding: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
    },
};

export default Navbar;
