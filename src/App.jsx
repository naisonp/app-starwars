import React, { useState, useEffect } from 'react'
import api from './services/api';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Hearder from './components/Hearder';
import CardCharacter from './components/CardCharacter';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function App() {
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    getPeople(1)
  }, [])

  const getPeople = async (page) => {
    if (page === pagination.current_page) {
      return
    }

    const response = await api.get(`people/?page=${page}`);
    setPeople(response.data.results);
    setPagination({
      current_page: page,
      total_pages: Math.ceil(response.data.count / 10)
    });
  }

  window.scrollTo(0, 0);
  return (
    <>
      <Hearder />
      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Listagem de todos os personagens consumindo a <Link color="primary" href="https://swapi.co" target="_blank"> 
              SWAPI - The Star Wats API</Link>, incluindo informações das starships de cada personagem
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {people.map((character, index) => (
              <React.Fragment key={index}>
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <CardCharacter character={character} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Container>

        <Pagination click={getPeople} pagination={pagination} />
        
      </main>

      <Footer />
    </>
  );
}