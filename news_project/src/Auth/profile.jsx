import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SendUserDetails } from "../Services/UserServices";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const CurrUser = {
    Name:user.name,
    Email:user.email
  }

  const HandleUserDetails = async()=>{
    await SendUserDetails(CurrUser)
  }
  useEffect(()=>{
    HandleUserDetails();
  },[])
  if (isLoading) {
    return <div>Loading ...</div>;
  }
else{
  return (
    isAuthenticated && (
      <div className="BG-Image-Web">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
 }
};

export default Profile;