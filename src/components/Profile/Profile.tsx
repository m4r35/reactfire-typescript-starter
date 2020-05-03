import React from "react";
import { useUserContext } from "../UserContext";

function Profile() {
  const user = useUserContext();

  return (
    <div>
      <p>{user.email || "nope"}</p>
    </div>
  );
}

export default Profile;
