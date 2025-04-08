// AuthProvider.jsx
import React, { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import axios from "axios";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true); // start with false

  const register = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    setloading(true);
    return signOut(auth);
  };

  const logingoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
      console.log("current user", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => console.log("login mama", res.data));
      } else {
        axios.post("http://localhost:5000/logout",
          {
            withCredentials: true,
          }
        )
         
        .then((res) => console.log("logout", res.data));
      }
      
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    register,
    signinUser,
    signout,
    logingoogle,
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
