import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

import { auth, db } from "../../config/firebase/firebaseconfig";
import { useDispatch } from "react-redux";
import { setLoginStatus, setRole } from "../../config/redux/reducers/AuthSlice";
import { useNavigate } from "react-router";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);


    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);

      const q = query(
        collection(db, "user"), 
        where("uid", "==", user.uid)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("User data not found in Firestore");
        return;
      }

      const userData = querySnapshot.docs[0].data();
      console.log(userData);


      dispatch(setLoginStatus(true));
      dispatch(setRole(userData.role));


      userData.role === "Admin" ? navigate('/') : navigate('/profile')


    } catch (error) {
      alert(error.message);
    }

  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;
