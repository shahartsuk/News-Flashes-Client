import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../src/Auth/loginButton";

import { PacmanLoader } from "react-spinners";
import { RouteComp } from "./Router/route.component";
import { PageContainer } from "./Router/pageContainer.component";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <div className="App">
          <PageContainer/>
          <RouteComp/>
        </div>
      );
    } else {
      return(<div >
      <div >
        <LoginButton />
      </div>
      </div>)
    }
  } else {
    return ( <div>
      <PacmanLoader color="#1E90FF" size={83} />
    </div>)
  }
}

export default App;
