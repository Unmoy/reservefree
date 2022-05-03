import { Routes, Route } from "react-router-dom";
import HomePage from "../src/components/HomePage/HomePage";
import Signup from "./Authentication/Signup";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
