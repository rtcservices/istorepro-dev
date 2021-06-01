import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUserName, enteredPassword);
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <nav className={classes["language-bar"]}>
        <a href="#japanese">日本人</a>
        <a href="#english">English</a>
      </nav>
      <main className={`${classes["container"]}`}>
        <form onSubmit={submitHandler}>
          <div className={classes["login-container"]}>
            <div className="text-center">
              <div className={classes["rounded-user-icon"]}>
                <FontAwesomeIcon icon={faUser} size="4x" />
              </div>
            </div>
            <div className={classes["login-form"]}>
              <div className="input-group">
                <div className="input-group-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="input-group-area">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={enteredUserName}
                    onChange={userNameChangeHandler}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-icon">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div className="input-group-area">
                  <input
                    type="password"
                    placeholder="Password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                  />
                </div>
              </div>
              <div className="text-right">
                <a
                  href="#forgot-password"
                  className={classes["forgot-password"]}
                >
                  Forgot Password
                </a>
              </div>
              <button className={`btn btn-main ${classes["login-button"]}`}>
                Login
              </button>
            </div>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Login;
