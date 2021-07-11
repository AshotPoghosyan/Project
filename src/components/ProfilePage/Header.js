import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogOut from "../LogOut/LogOut"
import Button from '@material-ui/core/Button';


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




        

export default function ButtonAppBar() {
  const classes = useStyles();
   let user = JSON.parse(localStorage.getItem('loggedInUser'));

  const history = useHistory();

  function handleMyProducts(){
       history.push('/myProducts')
   }
 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleMyProducts}>My Products</Button>
          <Typography variant="h6" className={classes.title}>
            {user ? user.firstName : "Name"}
          </Typography>
          <LogOut /> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
