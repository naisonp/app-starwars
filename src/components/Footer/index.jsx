
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import style from './style';

const Footer = () => {
  const classes = style();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Developed by <Link color="inherit" href="https://www.github.com/naisonp" target="_blank">
          Naison Pontes
      </Link>{' '}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default Footer;