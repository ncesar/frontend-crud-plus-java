import React, { useState } from 'react';
import { CssBaseline, Typography, makeStyles, Button } from '@material-ui/core';
import { Content } from '../components/Content';
import { TextInput } from '../components/TextInput';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 20,
  },
  button: {
    textTransform: 'none',
    marginLeft: 5,
  },
  item: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
});

const Edit = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'Name',
      value: name,
      onChange: (event) => onChangeHandler(event, setName),
    },
    {
      title: 'Description',
      value: description,
      onChange: (event) => onChangeHandler(event, setDescription),
    },
    {
      title: 'Price',
      value: price,
      onChange: (event) => onChangeHandler(event, setPrice),
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Edit a product">
        <div className={classes.item}>
          <Typography variant="h5" className={classes.typography}>
            Edit - product name
          </Typography>
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
            Delete product
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Edit;
