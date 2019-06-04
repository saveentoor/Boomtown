const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
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
    flexDirection: 'column',
    height: 600,
    width: 450,
    marginBottom: 50
  },
  cardMedia: {
    paddingTop: '56.25%',
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
    marginTop: 40,
    color: 'black',
    fontSize: 20
  },
  description: {
    fontSize: 16,

    paddingTop: 10,
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
    alignItem: 'flex-end',
    paddingTop: 40
  },
  button: {
    color: 'black',
    width: 130,
    paddingTop: 10,
    marginBottom: 15,
    fontSize: 15,
    height: 43,
    marginLeft: 10
  },
  userInfo: {
    alignSelf: 'center'
  },
  date: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  tag: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

export default styles;
