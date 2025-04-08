import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Useauth from "../../Hooks/Useauth";
import Swal from "sweetalert2";

const Application = () => {
  const { id } = useParams();
  const { user } = Useauth();
  const navigate = useNavigate();
  console.log(user);
  const submitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const LinkedIn = form.LinkedIn.value;
    const FaceBook = form.FaceBook.value;
    const Reseume = form.Reseume.value;
    console.log(LinkedIn, FaceBook, Reseume);

    const jobapplication = {
      job_id: id,
      applicant_email: user.email,
      LinkedIn,
      FaceBook,
      Reseume,
    };

    fetch("http://localhost:5000/jobApply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobapplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Application Success!",
            icon: "success",
            draggable: true,
          });
        }
        navigate("/myapplication");
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
        <form className="card-body " onSubmit={submitApplication}>
          <h1 className="text-3xl font-bold">Application form</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              type="url"
              placeholder="Type Your Url"
              name="LinkedIn"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">FaceBook </span>
            </label>
            <input
              type="url"
              placeholder="pasType Your Url"
              name="FaceBook"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reseume </span>
            </label>
            <input
              type="url"
              name="Reseume"
              placeholder="submit your reseume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
