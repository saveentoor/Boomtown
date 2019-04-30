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

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.cardMedia}
          image={item.imageurl}
          title={item.title}
          component={Link}
          to={ `profile/${item.itemowner.id}`
          } //link to whatever we put in this
        />
        <CardContent>
          <div className={classes.itemownerContainer}>
            <div>
              <Avatar className={classes.avatar}>
                {/* {item.itemowner && <Gravatar email={item.itemowner.email} />} */}
              </Avatar>
            </div>
            <div>
              <Typography className={classes.nameOfItemOwner}>
                {/* {item.itemowner.fullname} */}
              </Typography>
            </div>
          </div>
          <Typography variant="display1">{item.title}</Typography>

          <Typography variant="display1">{item.description}</Typography>

          <Typography component="p">
            {item.tags.map(tag => tag.title).join(', ')}
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button size="small" color="primary">
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