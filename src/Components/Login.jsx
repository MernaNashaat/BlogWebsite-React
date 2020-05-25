import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../style.css";
import NavBar from "./Shared/Navbar";

const Login = () => {
  
  window.$name = "Authenticated";
  window.$signup = false;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    errors: {},
  });

  const submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "/user/login", {
          email: email,
          password: password,
        })
        .then((result) => {  
          const data = result.data;
          const token = result.data.token;
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
          window.location.href = "/";
        })
        .catch((err) => {
          toast("Invalid user name or password !");
        });
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      errors["username"] = "*Please enter your UserName.";
    }

    if (!password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    setErrors({
      errors: errors,
    });

    return formIsValid;
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="container-box">
        <div>
          <h2 id="title">Login</h2>

          <form
            className="items"
            method="post"
            onSubmit={submituserRegistrationForm}
          >
            <input
              type="text"
              id="form-text"
              placeholder="Username"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              id="form-password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            <input id="button" type="submit" value="Login" />
            {/* <button >Login</button> */}
            <a id="sign" type="submit" href="/signup">
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
