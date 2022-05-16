import { Routes, Route } from "react-router-dom";
import HomePage from "../src/components/HomePage/HomePage";
import Login from "./Authentication/Login";
import OtpForm from "./Authentication/OtpForm";
import Signup from "./Authentication/Signup";
import ClinicStepper from "./components/ClinicStepper/ClinicStepper";
import Dashboard from "./components/Dashboard/Dashboard";
import Monitor from "./components/Dashboard/Monitor/Monitor";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import DoctorListScreen from "./components/DoctorListScreen/DoctorListScreen";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route exact path="doctors" element={<DoctorListScreen />} />
        <Route exact path="detail" element={<DoctorDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OtpForm />} />
        <Route path="clinic" element={<ClinicStepper />} />
        <Route exact path="dashboard" element={<Dashboard />}>
          <Route index element={<Monitor />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="clinicscreen" element={<Clinicscreen />} />
          <Route path="patient" element={<Patient />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

const Clinicscreen = () => {
  return <div className="text-center">clinicscreen</div>;
};
const Patient = () => {
  return <div className="text-center">Patient</div>;
};
const Analytics = () => {
  return <div className="text-center">Analytics</div>;
};
const Legal = () => {
  return <div className="text-center">Legal</div>;
};
