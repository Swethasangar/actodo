import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate()
  const users = props.users;
  const setusers = props.setusers;
  const [enuser, setenuser] = useState("");
  const [enpass, setenpass] = useState("");
  const euser = (eve) => {
    setenuser(eve.target.value);
  };
  const epass = (eve) => {
    setenpass(eve.target.value);
  };
  const addUser = ()=>{
      setusers([...users,{username:enuser,password:enpass}])
      navigate("/")
  }
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hii</h1>
        <p>Sign Up here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-40 border-black p-1 bg-transparent border rounded-md md:w-52"
            placeholder="Username" onChange={euser} value={enuser} 
          ></input>
          <input
            type="text"
            className="w-40 border-black p-1 bg-transparent border rounded-md md:w-52"
            placeholder="Password" onChange={epass} value={enpass}
          ></input>
          <input
            type="text"
            className="w-40 border-black p-1 bg-transparent border rounded-md md:w-52"
            placeholder="Confirm Password"
          ></input>
          <button className="bg-[#89D2DC] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
          <p>
            Already have an account? Please{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
