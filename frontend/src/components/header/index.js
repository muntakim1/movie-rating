import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

const ButtonGroup = () => {
  const classes = useStyles();

  return (
    <div>
      {" "}
      <Link
        color="textPrimary"
        href="#"
        className={classes.link}
        component={NavLink}
        to="/register"
      >
        Register
      </Link>
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        component={NavLink}
        to="/login"
      >
        Login
      </Button>
    </div>
  );
};

const ButtonGroupAfterLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        component={NavLink}
        to="/"
      >
        Search
      </Button>
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        component={NavLink}
        to="/search-history"
      >
        History
      </Button>
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        component={NavLink}
        to="/favourte-movies"
      >
        Favourite
      </Button>
      <Button
        href=""
        color="primary"
        variant="outlined"
        className={classes.link}
        component={NavLink}
        onClick={() => dispatch({ type: "SIGN_IN" })}
        to="/logout"
      >
        Logout
      </Button>
    </div>
  );
};
function Header() {
  const classes = useStyles();
  const data = useSelector((state) => state.login);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to=""
              underline="none"
              color="textPrimary"
            >
              Movie<span style={{ color: "brown" }}>Mela</span>
            </Link>
          </Typography>
          {data ? <ButtonGroupAfterLogin /> : <ButtonGroup></ButtonGroup>}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
