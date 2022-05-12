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
      <div className="signup_box">
        <h3 className="signup_header">Login/Signup</h3>
        <p>One step away to confirm your appointment</p>
      </div>
    </div>
  );
};

export default Signup;
