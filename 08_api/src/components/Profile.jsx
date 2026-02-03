import React, { useContext } from "react";
import UserContext from "../content/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (user.username === "" && user.password === "") {
    return <h1>Enter name and password</h1>;
  }
  if (user.username === "") return <h1>User missing</h1>;
  if (user.password === "") return <h1>password missing</h1>;
  return (
    <div>
      <h1>Profile</h1>
      <h3>Username : {user.username}</h3>
      <h3>Password : {user.password}</h3>
    </div>
  );
}

export default Profile;
