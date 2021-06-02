import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

import classes from './MainNavigation.module.css';
import siteLogo from '../../assets/images/logo.png';


const useStyles = makeStyles(() => ({
  header: {
    paddingRight: '20px',
    paddingLeft: '20px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontWeight: 700,
    size: '18px',
    marginLeft: '30px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    backgroundColor: '#e6e6e6',
    color: '#449ad1',
    padding: '20px 30px',
    height: '100%',
  },
}));

const MainNavigation = (props) => {
  const { t } = useTranslation();
  const headersData = [
    {
      label: t('nav.setup'),
      href: '/setup',
    },
    {
      label: t('nav.transaction'),
      href: '/transaction',
    },
    {
      label: t('nav.routine'),
      href: '/routine',
    },
    {
      label: t('nav.dashboard'),
      href: '/dashboard',
    },
    {
      label: t('nav.query'),
      href: '/query',
    },
  ];
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [headerState, setHeaderState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = headerState;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setHeaderState((prevState) => ({ ...prevState, mobileView: true }))
        : setHeaderState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const logoutClickHandler = () => {
    props.onLogout();
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div>
          {
            <Link to='/home'>
              <img
                src={siteLogo}
                alt='Site Logo'
                className={classes.appBar__Logo}
              />
            </Link>
          }
          {getMenuButtons()}
        </div>
        <div>
          <IconButton color='inherit'>
            <NotificationsIcon />
          </IconButton>
          <IconButton color='inherit'>
            <SettingsIcon />
          </IconButton>
          <Button color='inherit' onClick={logoutClickHandler}>
          {t('nav.logout')}
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setHeaderState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setHeaderState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>
          <img
            src={siteLogo}
            alt='Site Logo'
            className={classes.appBar__Logo}
          />
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={`header ${classes.appBar}`}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};
export default MainNavigation;
