import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const users = props.users;

  const [enuser, setenuser] = useState("");

  const [enpass, setenpass] = useState("");

  const [ruser, setruser] = useState(true);

  const checkUser = () => {
    var userfound = false;
    users.forEach((items) => {
      if (items.username === enuser && items.password === enpass) {
        console.log("Login Successfull");
        userfound = true;
        navigate("/landing", { state: { user: enuser } });
      }
    });
    if (userfound === false) {
      console.log("Login Failed");
      setruser(false);
    }
  };
  const euser = (eve) => {
    setenuser(eve.target.value);
  };
  const epass = (eve) => {
    setenpass(eve.target.value);
  };
  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h1 className="text-3xl font-medium">Hii</h1>
          {ruser ? (
            <p>I help you manage your activities after you login:)</p>
          ) : (
            <p className="text-red-500">Please Sign Up Before You Login</p>
          )}

          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              className="w-40 border-black p-1 bg-transparent border rounded-md md:w-52"
              placeholder="Username"
              value={enuser}
              onChange={euser}
            ></input>
            <input
              type="text"
              className="w-40 border-black p-1 bg-transparent border rounded-md md:w-52"
              placeholder="Password"
              value={enpass}
              onChange={epass}
            ></input>
            <button
              className="bg-[#F0E2A3] w-24 p-1 rounded-md"
              onClick={checkUser}
            >
              Login
            </button>
            <p>
              Don't have an account? Please{" "}
              <Link to={"/signup"} className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
