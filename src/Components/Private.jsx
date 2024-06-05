import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Private = (props) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth.loggedInStatus ? props.children : <Navigate to="/signIn" />;
};
