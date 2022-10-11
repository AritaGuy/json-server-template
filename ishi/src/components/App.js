import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import RoomDetails from "./RoomDetails";
import Rooms from "./Rooms";
import PaymentToken from "./PaymentToken"
import Confirm from "./Confirm"

function App() {
  return <div>
  <NavBar /> 
  <Routes>
   <Route path="/" element = {<Login />} />
   <Route path="/home" element = {<Home />} />
   <Route path="/rooms/*" element = {<Rooms />} />
   <Route path="/roomdetails/:roomId" element = {<RoomDetails />} />
   <Route path="/paymentoken" element = {<PaymentToken />} />
   <Route path="/congratulations" element = {<Confirm />} />
  </Routes>
  
  </div>;
}

export default App;
