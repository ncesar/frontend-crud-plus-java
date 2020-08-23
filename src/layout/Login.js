import React, { useState, useCallback, useContext } from 'react';
import {
  Avatar,
  Button,
  Grid,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextInput } from '../components/TextInput';
import { authConfig } from '../auth/config';
import { AuthContext } from '../auth/AuthContext';
import { Link, Redirect, withRouter } from 'react-router-dom';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none',
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await authConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.log(error);
        alert('Something went wrong. Did you put your email and password?');
      }
    },
    [history],
  );
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'Email',
      value: email,
      onChange: (event) => onChangeHandler(event, setEmail),
      autoComplete: 'email',
      name: 'email',
    },
    {
      title: 'Password',
      value: password,
      onChange: (event) => onChangeHandler(event, setPassword),
      autoComplete: 'current-password',
      name: 'password',
    },
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={loginHandler}>
          {inputFields.map((input, index) => (
            <TextInput
              key={`${index}_${input.value}`}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={input.name}
              name={input.name}
              label={input.title}
              autoFocus
              autoComplete={input.autoComplete}
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Link to="/sign-up" variant="body2" className={classes.link}>
              <Grid item>{"Don't have an account? Sign Up"}</Grid>
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Login);
