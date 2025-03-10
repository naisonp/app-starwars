import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  CardActions: {
    justifyContent: "center"
  }
}));