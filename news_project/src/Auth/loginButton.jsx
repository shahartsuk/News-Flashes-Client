import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Auth/style.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return( 
  
    <div className="firstPage">
      <h1>Welcome To My First News Flashes Web</h1>
  <button className="btn btn-primary" onClick={() => loginWithRedirect("http://localhost:3000/")}>Log In</button>
  </div>
 
  )
};

export default LoginButton;