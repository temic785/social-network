import React from "react";
import User_info from "./Posts/User_info/User_info";
import Posts from "./Posts/Posts";
import Module from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <User_info />
      <Posts />
    </div>
  );
};

export default Profile;
