import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
