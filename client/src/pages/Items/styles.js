const styles = theme => ({
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
  }
});
export default styles;
