import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory  } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Layout from "./components/Layout/Layout";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedLocaleInformation = localStorage.getItem("locale");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
    if(storedLocaleInformation) {
      i18n.changeLanguage(storedLocaleInformation);
    } else {
      localStorage.setItem("locale", "en");
    }
  }, [i18n]);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", 0);
    setIsLoggedIn(false);
    history.push('/login');
  };

  const localeChangeHandler = (language) => {
    console.log({language});
    if(language){
      localStorage.setItem("locale", language);
      i18n.changeLanguage(language);
    }
  }

  return (
    <React.Fragment>
      {!isLoggedIn && (
        <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login/:locale?">
          <LoginPage onLogin={loginHandler} onLocaleChange={localeChangeHandler}/>
        </Route>
        </Switch>
      )}
      {isLoggedIn && (
        <Layout onLogout={logoutHandler}>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Layout>
      )}
    </React.Fragment>
  );
}

export default App;
