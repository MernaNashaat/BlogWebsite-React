import React, { useState, useEffect } from "react";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    errors: {},
  });
  useEffect(() => {});
  const submituserRegistrationForm = (e) => {
    
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(
          REACT_APP_BACKEND_URL + "/user/signup",
          { email: email, name: username, password: password },
          [
            { "Content-Type": "application/json" },
            { "Access-Control-Allow-Origin": "*" },
          ]
        )
        .then((result) => {
          const data = result;
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });

      // window.location.href="/";
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUsername(e.target.value);
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

    if (typeof username !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email)) {
        formIsValid = false;

        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    if (typeof password !== "undefined") {
      if (
        !password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;

        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    setErrors({
      errors: errors,
    });

    return formIsValid;
  };

  return (
    <React.Fragment>
      <div className="container-box">
        <div>
          <h2 id="title">Sign Up</h2>

          <form
            class="items"
            method="post"
            onSubmit={submituserRegistrationForm}
          >
            <input
              type="text"
              id="form-username"
              placeholder="Username"
              value={username}
              onChange={handleChangeUserName}
              name="username"
            />
            <input
              type="email"
              id="form-mail"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
              name="email"
            />
            <input
              type="password"
              id="form-password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              name="password"
            />
            <input type="submit" value="Sign Up" id="button" href="/" />
            <a id="sign" type="submit" href="/login">
              Login
            </a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
