import React from "react";
import { FaBusinessTime, FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const HotjobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    title,
    location,
    jobType,
    applicationDeadline,
    description,
    requirements,
    salaryRange,
    company,
  } = job;
  console.log("requirnmentssss", requirements);
  return (
    <div className="card card-compact bg-base-100  shadow-xl max-w-lg">
      <div className="flex gap-4 items-center m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h3 className="font-bold text-lg">{company}</h3>

          <p className="flex items-center gap-2">
            {" "}
            <FaLocationDot />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="flex gap-2 items-center text-gray-500">
            <FaBusinessTime />
            {jobType}
          </p>
          <p className="flex gap-2 items-center text-gray-500">
            <MdAccessTimeFilled /> {applicationDeadline}
          </p>
        </div>
        <p className="text-gray-600 ">{description}</p>
        {/* <div className="flex  flex-wrap gap-2 text-center ">
          {requirements.map((skill, index) => (
            <p
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 
                 text-white font-medium rounded-lg shadow-md 
                 transform transition-all duration-200 
                 hover:scale-105 whitespace-nowrap"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div> */}
        <div className="card-actions justify-between items-center ">
          <div>
            <p className="">
              {salaryRange.min} to {salaryRange.max}
              {salaryRange.currency}
            </p>
          </div>
          <Link to={`/jobs/${_id}`}>
            <button
              className="btn btn-primary bg-slate-100 border-none text-blue-600 hover:bg-blue-600 
                 hover:text-white"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotjobCard;
