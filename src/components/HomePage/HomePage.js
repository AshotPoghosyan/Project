import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"




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

export default function HomePage() {
  const classes = useStyles();

  const history = useHistory();
  const handleSignIn = () =>{ 
    history.push("/signin");
  }
  const handleSignUp = () =>{ 
    history.push("/signup");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button color="inherit" onClick = {handleSignIn}> SignIn  </Button>
          <Button color="inherit"onClick = {handleSignUp}> SignUp  </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
