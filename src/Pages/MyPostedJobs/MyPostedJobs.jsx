import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/Useauth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure"; // Fixed filename case

const MyPostedJobs = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure(); // Fixed variable name
  const [postedjobs, setPostedJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`jobs?hr_email=${user.email}`) // Correct parameter
        .then((res) => setPostedJobs(res.data))
        .catch((error) => console.error("Error fetching jobs:", error));
    }
  }, [user?.email, axiosSecure]); // Added axiosSecure to dependencies

  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4">My posted jobs: {postedjobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">#</th>
              <th className="p-2">Job Title</th>
              <th className="p-2">Application Deadline</th>
              <th className="p-2">Applications</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {postedjobs.map((postedjob, index) => (
              <tr key={postedjob._id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{postedjob.title}</td>
                <td className="p-2">
                  {new Date(postedjob.applicationDeadline).toLocaleDateString()}
                </td>
                <td className="p-2">{postedjob.applicationCount || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
