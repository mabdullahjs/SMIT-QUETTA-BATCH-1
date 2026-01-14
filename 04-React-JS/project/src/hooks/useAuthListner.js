import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { logout, setAuthLoading, setUser } from "../config/redux/reducers/AuthSlice";
import { auth, db } from "../config/firebase/firebaseconfig";

export const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthLoading(true));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(logout());
        return;
      }

      try {
        const q = query(
          collection(db, "user"),
          where("uid", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          dispatch(logout());
          return;
        }

        const userData = snapshot.docs[0].data();

        dispatch(setUser({
          uid: user.uid,
          role: userData.role
        }));
      } catch (err) {
        console.error("Error fetching user data:", err);
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};