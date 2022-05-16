import "./Requests.css";
import accept from "../../../assets/images/accept.png";
function RequestCard() {
  return (
    <div className="request--card">
      <div className="request--card--profile">AM</div>
      <div className="request--card--detials">
        <span className="request--card--name">Akash Mandal</span>
        <span className="request--card--age">45 </span>
        <span className="request--card--gender">Male </span>
        &bull;
        <span className="request--card--time"> 10.30 AM - 11:45 PM</span>
      </div>
      <div className="requests--card--buttons">
        <div className="requests--card-button--group">
          <span className="requests--card--button decline">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L14.9996 14.9996"
                stroke="#194AF5"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15.0015 1L1.00187 14.9996"
                stroke="#194AF5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="requests--card--button accept">
            <img src={accept} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Requests() {
  return (
    <div className="requests--container">
      <div className="requests--header">
        <span className="requests--title">Requests (46)</span>
        <span className="requests--viewall"> View All &gt;</span>
      </div>
      <div className="requests--body">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        {/* <RequestCard /> */}
      </div>
    </div>
  );
}

export default Requests;
