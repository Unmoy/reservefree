import React, { useState } from "react";
import "./SideFilter.css";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0.00 KM",
  },
  {
    value: 100,
    label: "Maximum",
  },
];

const SideFilter = () => {
  const [value, setValue] = useState([0, 100]);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="side_filter">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="filter_header">Filters</h1>
        <h6 className="clear_filter">Clear All</h6>
      </div>
      <div className="location_filter">
        <p>location</p>
        <Slider value={value} onChange={handleOnChange} marks={marks} />
      </div>
      <hr />
      <div className="price_filter">
        <p className="mb-4">Price</p>
        <form>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input1"
              name="input1"
              value="0"
            />
            <label for="input1">Free</label>
            <br />
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input2"
              name="input2"
              value="1"
            />
            <label for="input2">₹01-₹200</label>
            <br />
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">₹200-₹500</label>
            <br />
          </div>
          <div className="d-flex justify-content-start">
            <input
              className="checkmark"
              type="checkbox"
              id="input4"
              name="input4"
              value="3"
            />
            <label for="input4">₹501+</label>
          </div>
        </form>
      </div>
      <hr />
      <div className="type_filter">
        <p className="mb-4">Doctor Type</p>
        <form>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input1"
              name="input1"
              value="0"
            />
            <label for="input1">Physical Meet</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input2"
              name="input2"
              value="1"
            />
            <label for="input2">Online Consult</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Home Visit</label>
          </div>
        </form>
      </div>
      <hr />
      <div className="speciality_filter">
        <p className="mb-4">Speciality</p>
        <form>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input1"
              name="input1"
              value="0"
            />
            <label for="input1">Orthopedics</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input2"
              name="input2"
              value="1"
            />
            <label for="input2">Neck bone surgery</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Joint Replacement Surgeont</label>
          </div>
        </form>
        <button>+View More</button>
      </div>
      <hr />
      <div className="sort_filter">
        <p className="mb-4">Sort by</p>
        <form>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input1"
              name="input1"
              value="0"
            />
            <label for="input1">Relevance</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input2"
              name="input2"
              value="1"
            />
            <label for="input2">Earliest Available</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Price- Low to High</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Price- High to Low</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Year of Experience</label>
          </div>
          <div className="d-flex justify-content-start mb-2">
            <input
              className="checkmark"
              type="checkbox"
              id="input3"
              name="input3"
              value="2"
            />
            <label for="input3">Recommendation</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideFilter;
