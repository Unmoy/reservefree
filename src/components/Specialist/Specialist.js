import React from "react";
import icon1 from "../../assets/images/s1.png";
import icon2 from "../../assets/images/s2.png";
import icon3 from "../../assets/images/s3.png";
import icon4 from "../../assets/images/s4.png";
import ItemCard from "./ItemCard";
const itemsList = [
  { id: 1, title: "Critical Care", icon: icon1 },
  { id: 1, title: "Primary  Care", icon: icon2 },
  { id: 1, title: "Orthopedics", icon: icon3 },
  { id: 1, title: "Neuro Surgen", icon: icon4 },
];
const Specialist = () => {
  return (
    <div>
      <div className="specialist_heading">
        <p>Top-searched specialties</p>
      </div>
      <div className="specialist_item_box">
        {itemsList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Specialist;
