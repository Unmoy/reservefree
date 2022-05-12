import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import "./Availability.scss";

const Availability = () => {
  const [fromdayTime, setFromDayTime] = useState("AM");
  const [todayTime, setToDayTime] = useState("PM");
  const [timefrom, setTimeFrom] = useState("10:00");
  const [timeto, setTimeTo] = useState("12:00");
  const [weekdays, setWeekdays] = useState({ days: [] });
  const [appointmentData, setAppointmentData] = useState({ appointments: [] });
  console.log(appointmentData);
  const handlefromdayTimeChange = (e) => {
    const fromdayTimevalue = e.currentTarget.value;
    setFromDayTime(fromdayTimevalue);
  };
  const handletodayTimeChange = (e) => {
    const todayTimevalue = e.currentTarget.value;
    setToDayTime(todayTimevalue);
  };

  const handleweekdays = (e) => {
    const { value, checked } = e.target;
    const { days } = weekdays;
    if (checked) {
      setWeekdays({
        days: [...days, value],
      });
    } else {
      setWeekdays({
        days: days.filter((e) => e !== value),
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { appointments } = appointmentData;
    const from = { timefrom, fromdayTime };
    const to = { timeto, todayTime };
    const appointment = {
      ...weekdays,
      from: [from],
      to: [to],
    };
    setAppointmentData({ appointments: [...appointments, appointment] });
  };
  return (
    <div className="availability_form container d-flex justify-content-center flex-column">
      <h1>Availablity</h1>
      <p>It’s going to take only few minutes</p>
      <h4 className="mb-2">Create Slot</h4>
      <form onSubmit={handleSubmit}>
        <div className="availability_box d-flex justify-content-center">
          <div className="w-75 d-flex justify-content-evenly">
            <div className="time_slot">
              <label htmlFor="timefrom" className="timefrom">
                From*
              </label>
              <input
                type="time"
                name=""
                id=""
                className="without_ampm"
                defaultValue={timefrom}
                onChange={(e) => setTimeFrom(e.target.value)}
                required
              />
              <input
                id="toggle-on-left"
                className="toggle toggle-left"
                value="AM"
                type="radio"
                onChange={handlefromdayTimeChange}
                checked={fromdayTime === "AM"}
              />
              <label htmlFor="toggle-on-left" className="daytime_label">
                AM
              </label>
              <input
                id="toggle-off-right"
                className="toggle toggle-right"
                value="PM"
                type="radio"
                onChange={handlefromdayTimeChange}
                checked={fromdayTime === "PM"}
                required
              />
              <label htmlFor="toggle-off-right" className="daytime_label">
                PM
              </label>
            </div>
            <div className="time_slot">
              <label htmlFor="timeto" className="timefrom">
                To*
              </label>
              <input
                type="time"
                id=""
                className="without_ampm"
                defaultValue={timeto}
                onChange={(e) => setTimeTo(e.target.value)}
              />

              <input
                id="toggle-on"
                className="toggle toggle-left"
                value="AM"
                type="radio"
                onChange={handletodayTimeChange}
                checked={todayTime === "AM"}
              />
              <label htmlFor="toggle-on" className="daytime_label">
                AM
              </label>
              <input
                id="toggle-off"
                className="toggle toggle-right"
                value="PM"
                type="radio"
                onChange={handletodayTimeChange}
                checked={todayTime === "PM"}
              />
              <label htmlFor="toggle-off" className="daytime_label">
                PM
              </label>
            </div>
          </div>
        </div>
        <h4 className="mb-3 mt-3 date_select_heading">Select Days</h4>
        <div className="d-flex justify-content-center">
          <div class="weekDays-selector">
            <input
              type="checkbox"
              id="weekday-mon"
              class="weekday"
              onChange={handleweekdays}
              value="Monday"
            />
            <label htmlFor="weekday-mon" className="weekdays_label">
              Mon
            </label>
            <input
              type="checkbox"
              id="weekday-tue"
              class="weekday"
              onChange={handleweekdays}
              value="Tuesday"
            />
            <label htmlFor="weekday-tue" className="weekdays_label">
              Tue
            </label>
            <input
              type="checkbox"
              id="weekday-wed"
              class="weekday"
              onChange={handleweekdays}
              value="Wednesday"
            />
            <label htmlFor="weekday-wed" className="weekdays_label">
              Wed
            </label>
            <input
              type="checkbox"
              id="weekday-thu"
              class="weekday"
              onChange={handleweekdays}
              value="Thursday"
            />
            <label htmlFor="weekday-thu" className="weekdays_label">
              Thu
            </label>
            <input
              type="checkbox"
              id="weekday-fri"
              class="weekday"
              onChange={handleweekdays}
              value="Friday"
            />
            <label htmlFor="weekday-fri" className="weekdays_label">
              Fri
            </label>
            <input
              type="checkbox"
              id="weekday-sat"
              class="weekday"
              onChange={handleweekdays}
              value="Saturday"
            />
            <label htmlFor="weekday-sat" className="weekdays_label">
              Sat
            </label>
            <input
              type="checkbox"
              id="weekday-sun"
              class="weekday"
              onChange={handleweekdays}
              value="Sunday"
            />
            <label htmlFor="weekday-sun" className="weekdays_label">
              Sun
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="create_slot_btn" onSubmit={handleSubmit}>
            Create Slot
          </button>
        </div>
        <div>
          <div className="w-75 mx-auto d-flex flex-wrap justify-content-center">
            {appointmentData.appointments.length
              ? appointmentData.appointments.map((appointment) => (
                  <AppointmentCard appointment={appointment} />
                ))
              : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Availability;
