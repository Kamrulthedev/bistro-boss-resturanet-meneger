import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {


  const axsiocPablic = useAxiosPublic();
  const provider = new GoogleAuthProvider();

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

  const signInGoogle = () => {
    serLoading(true)
    return signInWithRedirect(auth, provider);

  }

  const UpdateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const LogOut = () => {
    serLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (createUaer) {
        //get token and stord cliend
        const userInfo = { email: currentUser.email };
        axsiocPablic.post('jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
            }
          })
      }
      else {
        //TODO: remove token and cliend stord and remove and other stores
        localStorage.removeItem('access-token');
      }
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
    LogOut,
    signInGoogle,
    UpdateUser
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