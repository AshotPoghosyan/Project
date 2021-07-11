import React, {useState} from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import { signIn } from '../../helper/validation';
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DescriptionAlerts from "../error";
import HomePage from '../HomePage/HomePage';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="#">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useState(false)
  const initialValues = {
      email: "",
      password: "",
      rememberMe: false
  }

 
  
  const onSubmit = (values, props) => {

      setTimeout(() => {
        let users = JSON.parse(localStorage.getItem('Users')) || [];
        for( let i = 0; i < users.length; i++){
          if(users[i].email === values.email && users[i].password === values.password ){
            setLoggedInUser(true)
            // console.log( JSON.stringify(JSON.parse(localStorage.getItem('Users'))[i]))
            localStorage.setItem('loggedInUser', JSON.stringify(JSON.parse(localStorage.getItem('Users'))[i]))
            handleRoute()
            break;
          }
        }
        loggedInUser ? console.log("Succsess") : console.log("Error")
          props.setSubmitting(false)
          props.resetForm()
    }, 2000);
  }
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/profile");
  }
  const validationSchema = signIn;

  return (
<div>
 <HomePage />
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
             initialValues={initialValues}
             onSubmit={onSubmit}
             validationSchema={validationSchema}
        >
            {(props) => (
        <Form className={classes.form}>
          <Field as={TextField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={<ErrorMessage name="email"/>}
          />
          <Field as={TextField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={<ErrorMessage name="password"/>}
          />
          <FormControlLabel
            control={<Field as={Checkbox} value="remember" color="primary" name="rememberMe" />}
            label="Remember me"
          />
          <Button
            disabled={props.isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           { props.isSubmitting? "Loading" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>      
                Forgot password?
            </Grid>
            <Grid item>
              <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        
        </Form>)}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}