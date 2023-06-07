import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function useAuthenticate() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setProfilePic(user.photoURL);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return { profilePic, handleClick };
}
