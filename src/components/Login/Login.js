import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";

const Login = (props) => {
  const [loginFormInvalid, setLoginFormInvalid] = useState(false);
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  
  const history = useHistory();
  const { locale } = useParams();
  const { i18n, t } = useTranslation();
  const { onLocaleChange, onLogin } = props;
  const submitHandler = (event) => {
    event.preventDefault();

    if((enteredUserName === "japan" && enteredPassword === "1234")
    || (enteredUserName === "english" && enteredPassword === "1234")) {
      onLocaleChange(enteredUserName === "japan" ? "jp": "en");
      onLogin(enteredUserName, enteredPassword);
      history.push('/home');
    } else {
      setLoginFormInvalid(true);
    }
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  useEffect(() => {
    if (locale) {
      localStorage.setItem("locale", locale);
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <React.Fragment>
      <nav className={classes["language-bar"]}>
        <Link to="/login/jp">日本人</Link>
        <Link to="/login/en">English</Link>
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
                    placeholder={t("login.userNamePlaceHolder")}
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
                    placeholder={t("login.passwordPlaceHolder")}
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
                  {t("login.forgotPassword")}
                </a>
              </div>
              {loginFormInvalid && <span className={classes["login-error"]}>
                {t("login.loginError")}
              </span> }
              <button className={`btn btn-main ${classes["login-button"]}`}>
                {t("login.forgotPassword")}
              </button>
            </div>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Login;
