import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, address) => {
    return signInWithEmailAndPassword(auth, email, address);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    googleLogIn,
    createUser,
    login,
    logOut,
  };

  return (
    <div>
      <AuthProvider.provider value={authInfo}>{children}</AuthProvider.provider>
    </div>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
