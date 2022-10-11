import React from "react";
import {NavLink} from "react-router-dom"

function Home(){
    return(
        <div className ="position-absolute top-50 start-50 translate-middle"> 
        <h1>Welcome Home</h1><br />
        <NavLink to="/rooms"><button type="button" className="btn btn-light start-50">View available rooms</button></NavLink>
        </div>
    )
    
}

export default Home