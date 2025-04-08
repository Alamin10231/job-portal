import React, { useContext } from "react";
import Authcontext from "../Context/Authcontext";

const LoginGoogle = () => {

  const { logingoogle } = useContext(Authcontext);

 const handlegoogle = (e)=>{
                    e.preventDefault()
                    logingoogle()
  .then(res => console.log(res.user))
  .catch (error => {console.log(error)})
  }
  

  return <div className="text-center ">
                    <div className="divider">OR</div>
                    <button onClick={handlegoogle} className="btn w-full">GOOGLE</button>
  </div>;
};

export default LoginGoogle;
