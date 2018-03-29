import React from "react";
import logo from "./communityBank.svg";
import "./Login.css";
const Login = () => {
  return (
    <div className="App">
      <img src={logo} />
      <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    </div>
  );
};

export default Login;
