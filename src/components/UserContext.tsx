import React from "react";

export type User = {
  email?: string | null;
};

const defaultUser: User = {
  email: "test@test.com",
};

const UserContext = React.createContext(defaultUser);

export function useUserContext() {
  return React.useContext(UserContext);
}

export default UserContext;
