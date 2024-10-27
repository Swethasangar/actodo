import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/Todocontainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"
import Landing from "./Pages/Landing"
import { useState } from "react";

function App() {
  const [users, setusers] = useState([
    {
      username: "swetha",
      password: 123,
    },
  ]);
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
          <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path="/Landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
