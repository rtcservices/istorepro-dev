import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./MainHeader.module.css";
import siteLogo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainHeaderOld = (props) => {
  const rootClasses = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={rootClasses.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img src={siteLogo} alt="Site Logo" className={classes.appBar__Logo}/>
          <Typography variant="h6" className={rootClasses.title}>
            <Button
              aria-controls="setup-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Setup<ExpandMoreIcon />
            </Button>
            <Button
              aria-controls="transaction-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Transaction<ExpandMoreIcon />
            </Button>
            <Button
              aria-controls="routine-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Routine<ExpandMoreIcon />
            </Button>
            <Button
              aria-controls="dashboard-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Dashboard<ExpandMoreIcon />
            </Button>
            <Button
              aria-controls="query-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Query<ExpandMoreIcon />
            </Button>
            <Menu
              id="setup-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Setup Data</MenuItem>
            </Menu>
            <Menu
              id="transaction-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Trans Data</MenuItem>
            </Menu>
          </Typography>
          <IconButton color="inherit"><NotificationsIcon /></IconButton>
          <IconButton color="inherit"><SettingsIcon /></IconButton>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeaderOld;
