import React, { useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authConfig } from '../auth/config';
import { TextInput } from '../components/TextInput';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">Virtual Store</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

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

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [documentNumber, setdocumentNumber] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54'),
  );

  const signUpHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;
      try {
        await authConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.log(error);
        alert('Something went wrong. Is the email and password field filled?');
      }
    },
    [history],
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'Email',
      value: email,
      onChange: (event) => onChangeHandler(event, setEmail),
      name: 'email',
      type: 'email',
    },
    {
      title: 'Password',
      value: password,
      onChange: (event) => onChangeHandler(event, setPassword),
      name: 'password',
      type: 'password',
    },
    {
      title: 'Name',
      value: name,
      onChange: (event) => onChangeHandler(event, setName),
      name: 'name',
    },
    {
      title: 'Document number',
      value: documentNumber,
      onChange: (event) => onChangeHandler(event, setdocumentNumber),
      name: 'documentNumber',
    },
    {
      title: 'User address',
      value: userAddress,
      onChange: (event) => onChangeHandler(event, setUserAddress),
      name: 'userAddress',
    },
  ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={signUpHandler}>
          {inputFields.map((input, index) => (
            <TextInput
              key={`${index}_${input.name}`}
              value={input.value}
              onChange={input.onChange}
              margin="normal"
              required
              fullWidth
              id={input.name}
              label={input.title}
              name={input.name}
              type={input.type}
            />
          ))}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date"
              name="date"
              label="Birth date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Link to="/login" variant="body2" className={classes.link}>
              <Grid item>Already have an account? Sign In</Grid>
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(SignUp);
