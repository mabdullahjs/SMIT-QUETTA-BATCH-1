import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase/firebaseconfig";
import { useNavigate } from "react-router";

// role = ["Admin"] or ["Student"]
const ProtectedRoutes = ({ component, role }) => {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAllowed(false);
        setLoading(false);
        navigate('login')
        return;
      }

      try {
        const q = query(
          collection(db, "user"),
          where("uid", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setIsAllowed(false);
          setLoading(false);
          return;
        }

        const userData = snapshot.docs[0].data();

        if (role.includes(userData.role)) {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setIsAllowed(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [role]);

  if (loading) return <h1>Loading...</h1>;

  return isAllowed ? component : <h1>Not Allowed</h1>;
};

export default ProtectedRoutes;




// Higher order components HOC