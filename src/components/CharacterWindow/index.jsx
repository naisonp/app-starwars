import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import style from './style';

const CharacterWindow = props => {
  const { onClose, open, starshipsData } = props;
  const classes = style();

  function handleClose() {
    onClose();
  }

  return (
    <Dialog fullWidth={true} onClose={handleClose} aria-labelledby="dialog-starShips" open={open}>
      <DialogTitle id="dialog-starShips">StarShips</DialogTitle>
      {starshipsData.map(starship => (
        <React.Fragment key={starship.name}>
          <Typography component="h2" variant="h6">
            <ArrowRightAltIcon className={classes.icon} /> 
            {starship.name}
          </Typography>

          <ul>
            <Typography component="li" variant="subtitle1">
              {starship.passengers} passengers
          </Typography>

            <Typography component="li" variant="subtitle1">
              {starship.cargo_capacity} cargo capacity
          </Typography>

            <Typography component="li" variant="subtitle1">
              {starship.consumables} consumables
          </Typography>

            <Typography component="li" variant="subtitle1">
              Crew {starship.crew}
            </Typography>

            <Typography component="li" variant="subtitle1">
              {starship.model} model
          </Typography>

            <Typography component="li" variant="subtitle1">
              {starship.length} length
          </Typography>

            <Typography component="li" variant="subtitle1">
              Manufactured by {starship.manufacturer}
            </Typography>

            <Typography component="li" variant="subtitle1">
              Class {starship.starship_class}
            </Typography>

            <Typography component="li" variant="subtitle1" key={starship.created}>
              Created on {new Date(starship.created).getDay()}/{new Date(starship.created).getMonth()}/{new Date(starship.created).getFullYear()}
            </Typography>

          </ul>
          <Divider />
        </React.Fragment>
      ))}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Fechar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

CharacterWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default CharacterWindow;