import React from "react";
import { useDispatch } from "react-redux";
import { CreateLogout } from "../saga/auth/auth.action";

const Profile = () => {
  const dispatch=useDispatch()
  const handleLogout=()=>{
     dispatch(CreateLogout())
  }
  return (
    <div>
      <button onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}
export default Profile