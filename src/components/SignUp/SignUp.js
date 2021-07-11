import React from 'react';
import { Link, useHistory} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from "formik";
import { signUp } from '../../helper/validation';
import HomePage from '../HomePage/HomePage';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://hihub.am/" target="_blank">
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: ""
};

const validationSchema = signUp;


 const onSubmit = (values, props ) => { 
  let users = JSON.parse(localStorage.getItem('Users')) || [];
  let userData = values 
  users.push(userData)

    setTimeout(() => {
        localStorage.setItem('Users', JSON.stringify(users));
        props.resetForm()
        props.setSubmitting(false)
        handleRoute()
    }, 2000);
}

const history = useHistory();
const handleRoute = () =>{ 
  history.push("/profile");
}

  return (
   <div>
    <HomePage />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
             initialValues={initialValues}
             onSubmit={onSubmit}
             validationSchema={validationSchema}
        >
            {(props) => (
        <Form  className={classes.form}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field as={TextField}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                helperText={<ErrorMessage name="firstName"/>}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field as={TextField}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={<ErrorMessage name="lastName"/>}
              />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={<ErrorMessage name="email"/>}
              />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete = "current-password"
                helperText = {<ErrorMessage name="password"/>}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                label="Terms and Conditions"
                control={<Field as = {Checkbox} 
                                color="primary" 
                                name="termsAndConditions" 
                         />}
              />
              <FormHelperText>{<ErrorMessage name="termsAndConditions"/>}</FormHelperText>
            </Grid>
          </Grid>
          <Button
           disabled={props.isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
           {props.isSubmitting? "Loading" : "Sign Up"} 
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
             
              <Link to={'/signin'} href="#">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>)}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}