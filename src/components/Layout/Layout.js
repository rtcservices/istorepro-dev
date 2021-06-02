import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  const logoutHandler = () => {
    props.onLogout();
  };
  return (
    <Fragment>
      <MainNavigation onLogout={logoutHandler}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;