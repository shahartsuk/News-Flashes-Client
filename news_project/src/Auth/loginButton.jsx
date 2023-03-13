import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Style/authPages.css";
import { FallingStars } from "../Components/fallingStars";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return( 
  
    <div className="firstPage">
      <div className="falling-stars-container1">
       <FallingStars/>
      </div>
      <div className="falling-stars-container2">
       <FallingStars/>
      </div>
      <div className="falling-stars-container3">
       <FallingStars/>
      </div>
      <h1>Welcome To My First News Flashes Web</h1>
  <button className="btn btn-primary" onClick={() => loginWithRedirect("http://localhost:3000/")}>Log In</button>
  </div>
 
  )
};

export default LoginButton;