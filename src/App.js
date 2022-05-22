import { Route,Routes } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage"; 
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login"
import Admin from "./Pages/Admin Panel/Admin";

function App() {



  return (
    <div >
      <Routes>
      <Route path = "/" element = {<Homepage/>}></Route>
      <Route path = "/Login" element = {<Login/>}></Route>
        <Route path = "/Signup" element = {<Signup/>}></Route>
        <Route path = "/Admin" element = {<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
