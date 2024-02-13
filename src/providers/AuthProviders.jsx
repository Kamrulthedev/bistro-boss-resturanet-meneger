import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, serLoading] = useState(true)

  const createUaer = (email, password) => {
    serLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    serLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    serLoading(true)
     return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);
      serLoading(false);
    });
    return () => {
      return unsubscribe()
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUaer,
    signInUser,
    LogOut
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProviders;