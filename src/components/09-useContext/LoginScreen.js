import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const login = () => {
    let newUser = {
      id: crypto.randomUUID(),
      name: "jonathan",
    };
    setUser(newUser);
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-success" onClick={() => login("s")}>
        Login
      </button>
    </>
  );
};
