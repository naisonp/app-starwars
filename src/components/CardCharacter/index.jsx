import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CharacterWindow from '../CharacterWindow';
import CardImg from '../CardImg';
import style from './style';

const CardCharacter = props => {
  const [starshipsData, setStarShipsData] = useState([]);
  const [open, setOpen] = useState(false);
  const { character } = props;
  const classes = style();

  useEffect(() => {
    getStarships();
  }, []);

  const getStarships = async () => {
    let arrayStarships = [];
    character.starships.forEach(async url => {
      const { data } = await Axios.get(url);
      arrayStarships.push(data);
    });

    setStarShipsData(arrayStarships);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
  }

  return (
    <>
      <Card className={classes.card}>
        <CardImg characterName={character.name} className={classes.cardImage} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography>
            {(character.height * 0.01).toFixed(2)}m | {character.mass}kgs | {character.hair_color} hair |{" "}
            {character.eye_color} eyes
          </Typography>
        </CardContent>

        <CardActions className={classes.CardActions} >
          <Button size="small" color="primary" onClick={handleClickOpen} disabled={character.starships.length === 0}>
            Starships
          </Button>
        </CardActions>

      </Card>

      <CharacterWindow open={open} onClose={handleClose} starshipsData={starshipsData} />
    </>
  );
};

export default CardCharacter;
