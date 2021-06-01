import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {  
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  
    if(storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', 0);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {isLoggedIn && <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </React.Fragment>
  );
}

export default App;
