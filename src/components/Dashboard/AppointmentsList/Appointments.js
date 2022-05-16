import "./Appointments.css";

function AppointmentCard() {
  return (
    <div className="appointment--card">
      <div className="appointment--card--profile">AM</div>
      <div className="appointment--card--detials">
        <span className="appointment--card--name">Akash Mandal</span>
        <span className="appointment--card--age">45 </span>
        <span className="appointment--card--gender">Male</span>
      </div>
      <span className="appointment--card--time"> 10.30 AM</span>
      <span className="appointment--card--location"> Walk In</span>
      <div className="appointments--card--buttons">
        <div className="appointments--card-button--group">
          <span className="appointments--card--button accept">Diagnose</span>
        </div>
      </div>
    </div>
  );
}
function Appointments() {
  return (
    <div className="appointments--container">
      <div className="appointments--header">
        <span className="appointments--title">Appointments (16)</span>
        <span className="appointments--viewall"> View all &gt;</span>
      </div>
      <div className="appointments--body">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        {/* <AppointmentCard /> */}
      </div>
    </div>
  );
}

export default Appointments;
