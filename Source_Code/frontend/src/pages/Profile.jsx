import React from "react";
import defaultProfile from "../assets/images/default_profile.png"
import {useSelector} from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="flex justify-center items-center max-w-screen max-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img className="w-24 h-24" src={defaultProfile}/>
        <p>
          Full Name <span>{currentUser.fullName}</span>
        </p>
        <p>
          Age <span>{currentUser.age}</span>
        </p>
        <p>
          Experience <span>{currentUser.experience}</span>
        </p>
        <p>
          Skills <span>{currentUser.skills}</span>
        </p>
        <p>
          Email <span>{currentUser.email}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
