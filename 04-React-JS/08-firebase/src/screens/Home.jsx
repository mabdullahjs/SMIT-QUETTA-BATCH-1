import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userUid, setUid] = useState(null);
  const [todo, setTodo] = useState([]);
  // const [loading , setLoading] = useState(true);
  // const [error , setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid)
        
        
        // get data from firebase
        const q = query(collection(db, "todos"), where("uid", "==", uid));
        
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          todo.push({ ...doc.data(), docId: doc.id });
          setTodo([...todo]);
        });
      } else {
        alert("No user is signed in.");
        navigate('/login');
      }
    });
  }, [])

  const handleAddTodo = async () => {
    console.log({ title, description });

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title, description, uid: userUid
      });
      console.log("Document written with ID: ", docRef.id);
      setTodo([...todo, { title, description, docId: docRef.id, uid: userUid }]);
      alert("Todo Added Successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  };

  return (
    <div style={styles.container}>
      <h2>Todo App {userUid}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleAddTodo} style={styles.addBtn}>
        Add Todo
      </button>

      <div style={styles.list}>
        {todo.length > 0 ? todo.map((item) => {
          return <div key={item.docId} style={styles.todo}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <div style={styles.actions}>
              <button style={styles.editBtn}>
                Edit
              </button>
              <button style={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        }) : <p>No Todos Added Yet</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "8px",
  },
  addBtn: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  todo: {
    border: "1px solid #ccc",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    gap: "5px",
  },
  editBtn: {
    padding: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
  },
};

export default Home;
