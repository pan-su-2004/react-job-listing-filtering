import React from "react";

const Card = (props) => {
  const {
    company,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    logo,
  } = props;

  return (
    <div className="flex flex-col rounded-md p-7 shadow-2xl bg-white gap-5 mt-12">
      <div className="flex flex-col gap-4">
        <div>
          <img src={logo} alt="" className="-mt-16 w-20" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-primary text-xl font-bold">{company}</h4>
          <h3 className="text-black text-xl font-bold">{position}</h3>
          <ul className="flex justify-between text-gray-500 text-xl gap-5">
            <li>{postedAt}</li>
            <li className="list-disc">{contract}</li>
            <li className="list-disc">{location}</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-400 w-auto h-[0.5px]"></div>

      <div className="flex justify-start flex-wrap gap-3">
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          {role}
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl">
          {level}
        </div>
        {languages?.map((language) => (
          <div
            key={language}
            className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl"
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
