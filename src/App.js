import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../src/components/HomePage/HomePage";
import Login from "./Authentication/Login";
import OtpForm from "./Authentication/OtpForm";
import Signup from "./Authentication/Signup";
import ClinicStepper from "./components/ClinicStepper/ClinicStepper";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import DoctorListScreen from "./components/DoctorListScreen/DoctorListScreen";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
function App() {
  let location = useLocation();
  return (
    <AuthProvider>
      {location.pathname === "/clinic" ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="doctors" element={<DoctorListScreen />} />
        <Route path="detail" element={<DoctorDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OtpForm />} />
        <Route path="clinic" element={<ClinicStepper />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
