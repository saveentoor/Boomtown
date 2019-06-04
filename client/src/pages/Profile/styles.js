import { red } from '@material-ui/core/colors';
const styles = theme => ({
  profileCardContainer: {
    backgroundColor: '#212121',
    width: '100%',
    marginRight: 'auto',
    padding: 80,
    paddingTop: 100,
    marginLeft: 'auto',
    //for0-600px width
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16,
      paddingTop: 36
    },
    //for600-1280px width
    [theme.breakpoints.up('sm')]: {
      paddingTop: 100,
      padding: 80
    }
  },
  fullName: {
    color: red,
    fontSize: 40,
    marginLeft: 20
  },
  profileInfo: {
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 10
  },
  profileSharePage: {
    fontSize: 40,
    color: '#f9a825',
    paddingTop: 35
  },
  itemsLayout: {
    //for 1280px width
    backgroundColor: '#212121',
    width: '100%',
    marginRight: 'auto',
    padding: 80,
    paddingTop: 100,
    marginLeft: 'auto',

    //for0-600px width
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: 16,
      paddingTop: 36
    },
    //for600-1280px width
    [theme.breakpoints.up('sm')]: {
      paddingTop: 100,
      padding: 80
    }
  },
  cardContent: {
    marginBottom: 50
  },
  cardInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  numberOfItems: {
    fontWeight: 'bold'
  }
});
export default styles;
