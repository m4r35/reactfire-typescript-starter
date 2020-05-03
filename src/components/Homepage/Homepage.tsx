import React from "react";
import { useAuth } from "reactfire";
import { useHistory } from "react-router-dom";
import { routeConfig } from "../../util/RouteConfig";

const HomePage = () => {
  const auth = useAuth();
  const { push } = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      push(routeConfig.login.path);
    });
  };
  return (
    <div>
      <p>{"home page"}</p>
      <div>
        <button type="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
