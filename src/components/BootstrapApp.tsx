import React from "react";
import UserContext, { User } from "./UserContext";
import { useUser } from "reactfire";

type Props = {
  children: React.ReactNode;
};

const BootstrapApp = ({ children }: Props) => {
  const user: User = useUser();

  return <UserContext.Provider value={user} children={children} />;
};

export default BootstrapApp;
