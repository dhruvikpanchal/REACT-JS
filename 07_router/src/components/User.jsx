import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-red-100 py-5 ">this is user : {userid}</div>
  );
}

export default User;
