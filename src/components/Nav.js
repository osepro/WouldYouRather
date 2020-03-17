import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: "none"
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <nav align="center">
            <ul className="navList">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/newquestions" exact activeClassName="active">
                  New Question
                </NavLink>
              </li>
              <li>Leader Board</li>
              <li>Hello Ose</li>
              <li>Logout</li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: users
  };
}

export default connect(mapStateToProps)(Nav);
