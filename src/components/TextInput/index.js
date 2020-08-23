import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  typography: {
    marginTop: 20,
  },
}));

export const TextInput = (props) => {
  const { title, value, onChange, ...other } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      {title && <Typography className={classes.typography}>{title}</Typography>}
      <TextField
        variant="outlined"
        value={value}
        onChange={onChange}
        size="small"
        {...other}
      />
    </React.Fragment>
  );
};
