import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './style';

const Hearder = () => {
  const classes = style();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Star Wars
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Hearder;
