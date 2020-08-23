import React from 'react';
import { makeStyles } from '@material-ui/core';

import { MenuBar } from '../MenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const Content = (props) => {
  const { children, title, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...other}>
      <MenuBar title={title} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
