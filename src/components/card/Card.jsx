import React from "react";
import FavIcon from "../../images/photosnap.svg";

const Card = () => {
  return (
    <div className="flex flex-col rounded-md p-7 shadow-2xl bg-white gap-5">
      <div>
        <div>
          <img src={FavIcon} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-primary text-base font-bold">Account</h4>
          <h3 className="text-black text-xl font-bold">Developer</h3>

          <ul className="items flex justify-between text-gray-400 text-xl">
            <li>2days ago</li>
            <li>Part time</li>
            <li>USA only</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-400 w-auto h-[0.5px]"></div>

      <div className="flex justify-start flex-wrap gap-3">
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-base">
          react
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-base">
          javascript
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-base">
          html
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-base">
          html
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-base">
          html
        </div>
      </div>
    </div>
  );
};

export default Card;
