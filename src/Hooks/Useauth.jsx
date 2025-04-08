import { useContext } from "react";
import Authcontext from "../Context/Authcontext";

const Useauth = () => {
  const Context = useContext(Authcontext);
  return Context;
};
export default Useauth;
