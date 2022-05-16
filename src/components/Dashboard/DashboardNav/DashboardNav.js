import "./DashboardNav.css";
import userjpg from "../../../assets/images/user.jpg";
import bellicon from "../../../assets/images/bell.png";
import chaticon from "../../../assets/images/chat.png";
import searchicon from "../../../assets/images/dashboard_search_icon.png";
function DashboardNav() {
  return (
    <div className="dashboard_nav">
      <div className="search--box">
        <div className="search--bar">
          <img src={searchicon} alt="search" className="search--icon" />
          <input
            type="text"
            placeholder="Search patient name, date"
            className="search--text"
          />
        </div>
      </div>
      <img src={userjpg} alt="messages" className="user--icon" />
      <img src={bellicon} alt="messages" className="header--icon" />
      <img src={chaticon} alt="messages" className="header--icon" />
    </div>
  );
}

export default DashboardNav;
