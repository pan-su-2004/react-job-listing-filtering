import React from "react";
import FavIcon from "../../images/photosnap.svg";

const Card = () => {
  return (
    <div className="card-con">
      <div className="image-con">
        <img src={FavIcon} alt="" />
      </div>
      <div className="content">
        <h4>Account</h4>
        <h3>Developer</h3>

        <ul className="items">
          <li>2days ago</li>
          <li>Part time</li>
          <li>USA only</li>
        </ul>
      </div>
      <div className="skills">
        <div className="badge">react</div>
        <div className="badge">javascript</div>
        <div className="badge">html</div>
        <div className="badge">html</div>
      </div>
    </div>
  );
};

export default Card;
