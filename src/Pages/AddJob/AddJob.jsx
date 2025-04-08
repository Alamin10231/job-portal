import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/Useauth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const AddJob = () => {
  const { user } = useAuth();
  const axioussecure = UseAxiosSecure();
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);

    const initialformdata = Object.fromEntries(formdata.entries());
    console.log(initialformdata);
    const { min, max, currency, ...alamin } = initialformdata;
    console.log(alamin);
    alamin.requirements = initialformdata.requirements.split("\n");
    alamin.responsibilities = initialformdata.responsibilities.split("\n");
    alamin.salaryRange = { min, max, currency };

    axioussecure
      .post("/jobsroute", alamin) // Simplified syntax
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Job has been Added!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl mb-6">Add Job</h2>
      <form className="card-body space-y-4" onSubmit={handlesubmit}>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Type your location"
            name="location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="jobType"
            defaultValue=""
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Pick your Job Type
            </option>
            <option value="Full Time">Full Time</option>
            <option value="Intern">Intern</option>
            <option value="Half Time">Half Time</option>
          </select>
        </div>

        {/* Job Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            name="jobField"
            defaultValue=""
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Pick your Job Field
            </option>
            <option value="Web Developer">Web Developer</option>
            <option value="Engineer">Engineer</option>
            <option value="Teaching">Teaching</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="flex flex-col gap-4 md:flex-row">
  <div className="w-full md:w-1/3">
    <label className="label">
      <span className="label-text">Salary Range</span>
    </label>
    <div className="flex flex-col gap-4 md:flex-row md:gap-2">
      <input
        type="text"
        placeholder="Min"
        name="min"
        className="input input-bordered w-full md:w-1/3"
        required
      />
      <input
        type="text"
        placeholder="Max"
        name="max"
        className="input input-bordered w-full md:w-1/3"
        required
      />
      <select
        name="currency"
        className="select select-bordered w-full md:w-1/3"
        required
      >
        <option disabled>Currency</option>
        <option>BDT</option>
        <option>USD</option>
        <option>INR</option>
        <option>RUPI</option>
      </select>
    </div>
  </div>
</div>


        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <input
            type="text"
            name="requirements"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <input
            type="text"
            name="responsibilities"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="email"
            name="hr-email"
            defaultValue={user.email}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
