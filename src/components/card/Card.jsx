import React from "react";
import FavIcon from "../../images/photosnap.svg";

const Card = (props) => {
  const { title, profile } = props;

  return (
    <div className="flex flex-col rounded-md p-7 shadow-2xl bg-white gap-5 mt-12">
      <div className="flex flex-col gap-4">
        <div>
          <img src={FavIcon} alt="" className="-mt-16 w-20" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-primary text-xl font-bold">{title}</h4>
          <h3 className="text-black text-xl font-bold">{profile}</h3>
          <ul className="flex justify-between text-gray-500 text-xl gap-5">
            <li>2days ago</li>
            <li className="list-disc">Part time</li>
            <li className="list-disc">USA only</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-400 w-auto h-[0.5px]"></div>

      <div className="flex justify-start flex-wrap gap-3">
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          react
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          javascript
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          html
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          html
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          html
        </div>
      </div>
    </div>
  );
};

export default Card;
