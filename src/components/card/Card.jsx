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
    isNew,
    isFeatured,
  } = props;

  return (
    <div className=" lg:w-4/5 mx-auto lg:flex-row lg:items-center flex flex-col lg:justify-between rounded-md p-7 shadow-2xl bg-white gap-5 mt-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div>
          <img src={logo} alt="" className="-mt-16 w-20 lg:mt-auto lg:w-16" />
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex gap-3 items-center">
            <h4 className="text-primary text-xl lg:text-sm font-bold">
              {company}
            </h4>
            <div className="flex gap-1">
              {isNew && (
                <span className="bg-primary font-bold text-[10px] leading-[0] text-bgColor rounded-full flex items-center justify-center p-[10px] ">
                  NEW!
                </span>
              )}
              {isFeatured && (
                <span className="bg-black font-bold text-[10px] leading-[0] text-bgColor rounded-full flex items-center justify-center p-[10px]">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          <h3 className="text-black text-xl lg:text-base font-bold">
            {position}
          </h3>
          <ul className="flex justify-between text-gray-500 text-xl gap-5 lg:text-sm">
            <li>{postedAt}</li>
            <li className="list-disc">{contract}</li>
            <li className="list-disc">{location}</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-400 w-auto h-[0.5px]"></div>

      <div className="flex justify-start flex-wrap gap-3 ">
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl lg:text-sm ">
          {role}
        </div>
        <div className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl lg:text-sm ">
          {level}
        </div>
        {languages?.map((language) => (
          <div
            key={language}
            className="bg-bgColor p-2 rounded-md text-primary font-bold text-xl lg:text-sm "
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
