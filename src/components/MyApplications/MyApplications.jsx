import React, { useEffect, useState } from "react";
import Authcontext from "../../Context/Authcontext";
import Useauth from "../../Hooks/Useauth";
import { p } from "framer-motion/client";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const MyApplications = () => {
  const axioussecure = UseAxiosSecure()
  const { user } = Useauth();
  const [job, setJob] = useState([]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myapplication/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setJob((prev) => prev.filter((app) => app._id !== id));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // if (!user?.email) return;
    console.log("user email aise re", user.email);
    // axios
    //   .get(`http://localhost:5000/jobApply?email=${user?.email}`, {
    //     withCredentials: true,
    //   })
    axioussecure.get(`jobApply?email=${user?.email}`)
      .then((res) => setJob(res.data))

      
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name{job.length}</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {job.map((job) => (
            <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={job.company_logo} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="btn btn-ghost btn-xs"
                >
                  <MdDeleteForever />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
