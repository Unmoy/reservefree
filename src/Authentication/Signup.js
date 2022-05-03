import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Signup.css";
const Signup = () => {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlegoogle = async () => {
    try {
      setError("");
      await signInWithGoogle();
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
  };
  return (
    <div className="signup_page">
      <button className="signup_google" onClick={handlegoogle}>
        SignUp with Google
      </button>
      <p className="singin_error">{error}</p>
    </div>
  );
};

export default Signup;
