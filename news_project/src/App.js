import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../src/Auth0/loginButton";
import Profile from "../src/Auth0/profile";
import LogoutButton from "../src/Auth0/logOutBtn";
import { PacmanLoader } from "react-spinners";
import { GetSubjects } from "./Components/getSubjects";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <div className="App">
          <Profile/>
          <LogoutButton />
          <GetSubjects/>
        </div>
      );
    } else {
      return(<div>
        <LoginButton />
      </div>)
    }
  } else {
    return ( <div>
      <PacmanLoader color="#1E90FF" size={83} />
    </div>)
  }
}

export default App;
