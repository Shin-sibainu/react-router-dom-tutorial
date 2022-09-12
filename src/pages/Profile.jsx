import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      Profileのページです。{username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Aboutページへ
      </button>
    </div>
  );
};

export default Profile;
