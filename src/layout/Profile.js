import React, { useState } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { Content } from '../components/Content';
import { TextInput } from '../components/TextInput';

const useStyles = makeStyles(() => ({
  typography: {
    marginTop: 20,
  },
  item: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
}));

const Profile = () => {
  const [name, setName] = useState('César Nascimento');
  const [documentNumber, setdocumentNumber] = useState('document from backend');
  const [userAddress, setUserAddress] = useState('userAddress from backend');
  const [birthDate, setBirthDate] = useState('birthDate from backend');
  const classes = useStyles();

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    { title: 'E-mail', value: 'email from backend' },
    {
      title: 'Name',
      value: name,
      onChange: (event) => onChangeHandler(event, setName),
    },
    {
      title: 'Document number',
      value: documentNumber,
      onChange: (event) => onChangeHandler(event, setdocumentNumber),
    },
    {
      title: 'User address',
      value: userAddress,
      onChange: (event) => onChangeHandler(event, setUserAddress),
    },
    {
      title: 'Birth date',
      value: birthDate,
      onChange: (event) => onChangeHandler(event, setBirthDate),
    },
  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Your profile</Typography>
          {inputFields.map((input, index) => (
            <TextInput
              key={`${index}_${input.title}`}
              title={input.title}
              value={input.value}
              onChange={input.onChange}
              id={input.value.toString()}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            size="small"
          >
            Save changes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 10 }}
            size="small"
          >
            Delete account
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Profile;
