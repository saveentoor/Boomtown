import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';
import { Link, withRouter } from 'react-router-dom';
import styles from './styles';
import ItemCardDate from './ItemCardDate';

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.cardMedia}
          image={item.imageurl}
          title={item.title}
          component={Link}
          to={`profile/${item.itemowner.id}`}
        />
        <CardContent>
          <div className={classes.itemownerContainer}>
            <div>
              <Avatar className={classes.avatar}>
                {item.itemowner && <Gravatar email={item.itemowner.email} />}
              </Avatar>
            </div>
            <div className={classes.userInfo}>
              <Typography className={classes.nameOfItemOwner}>
                {item.itemowner.fullname}
              </Typography>
              <Typography>{ItemCardDate(item.created)}</Typography>
            </div>
          </div>
          <Typography className={classes.title} variant="display1">
            {item.title}
          </Typography>

          <Typography className={classes.description} variant="display1">
            {item.description}
          </Typography>

          <Typography className={classes.tag} component="p">
            {item.tag ? item.tags.map(tag => tag.title).join(', ') : null}
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.button}
          variant="outlined"
          size="small"
          color="primary"
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ItemsCard));
