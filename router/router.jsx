import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../src/Layout/Mainlayout";
import Home from "../src/Pages/Home/Home";
import Navbar from "../src/Shared/Navbar";
import Register from "../src/Pages/Register/Register";
import Login from "../src/Login/Login";
import LoginGoogle from "../src/Login/LoginGoogle";
import JobDetails from "../src/Pages/JobDetails/JobDetails";
import PrivateRoute from "../src/PrivateRoute/PrivateRoute";
import Application from "../src/components/Application/Application";
import MyApplications from "../src/components/MyApplications/MyApplications";
import AddJob from "../src/Pages/AddJob/AddJob";
import MyPostedJobs from "../src/Pages/MyPostedJobs/MyPostedJobs";
// import Logout from "../src/Login/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h2>router not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/google",
        element: <LoginGoogle></LoginGoogle>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <Application></Application>
          </PrivateRoute>
        ),
      },
      {
        path:"/myapplication",
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path:"/addjob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"/mypostedjobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
    ],
  },
]);
export default router;
