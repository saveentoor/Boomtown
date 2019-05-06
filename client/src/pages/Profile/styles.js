const styles = theme => ({
  profileCardContainer: {
    background: '#212121',
    padding: 150,
    height: '100%'
  },
  cardContent: {
    padding: 50
  },
  cardInfo: {
    display: 'flex'
  },
  fullName: {
    marginLeft: 20,
    fontSize: 30
  },
  profileInfo: {
    fontSize: 20,
    marginTop: 15
  },
  numberOfItems: {
    fontWeight: 600
  },
  profileSharePage: {
    color: theme.palette.primary.main,
    fontSize: 40,
    fontWeight: 600,
    paddingTop: 20
  }
});

export default styles;
