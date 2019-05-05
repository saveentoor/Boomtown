import { red } from '@material-ui/core/colors';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    // maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 300
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  title: {
    fontSize: 22,
    marginTop: 40,
    color: 'black',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    height: 80,
    paddingTop: 10,
    color: 'black',
  },
  tag: {
    fontSize: 12
  },
  button: {
    border: 1,
    color: 'black'
  },
  itemownerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatar: {
    margin: 5
  },

  cardAction: {
    alignItem: 'flex-end'
  },
  button: {
    color: 'black',
    width: 130,
    paddingTop: 10,
    marginBottom: 15,
  },
  userInfo: {
    alignSelf: 'center'
  }
});

export default styles;
