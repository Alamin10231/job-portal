import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, location, company, description } = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg bg-white border border-gray-200">
      <h1 className="text-3xl font-bold text-blue-600 mb-3">📍 {location}</h1>
      <h1 className="text-2xl font-semibold text-gray-800">{company}</h1>
      <p className="text-gray-600 my-4">{description}</p>

      <Link to={`/jobApply/${_id}`}>
        <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
