import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authentication } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user_name: "",
    user_email: "",
  });

  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  function signInWithGoogle() {
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          user_name: user._delegate.displayName,
          user_email: user._delegate.email,
        });
        localStorage.setItem("token", user._delegate.accessToken);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
