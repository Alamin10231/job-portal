import axios from "axios";
import Useauth from "./Useauth";
import { useNavigate } from "react-router-dom";

const axiousInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const UseAxiosSecure = () => {
  const { signout } = Useauth;
  const navigate = useNavigate();
  axios.interceptors.response.use(
    (response, error) => {
      return response;
    },
    (error) => {
      if (error.status(401) || error.status(403)) {
        signout().
        then(() => {
          navigate("/login")
        })
        .catch(error => {console.log(error)})
      }
      return Promise.reject(error);
    }
  );
  return axiousInstance;
};

export default UseAxiosSecure;
