import React from 'react';
import Gravatar from 'react-gravatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ItemsGrid from '../../components/ItemsGrid';
import style from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const Profile = ({ classes, profile }) => {
  return (
    <div className={classes.profileCardContainer}>
      <Card>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardInfo}>
            <Avatar>
              <Gravatar email={profile && profile.email} />
            </Avatar>
            <Typography className={classes.fullName}>
              {profile && profile.fullname}
            </Typography>
          </div>

          <div>
            <Typography className={classes.profileInfo}>
              <span className={classes.numberOfItems}>
                {profile && profile.items.length}{' '}
              </span>
              Items shared
              <span className={classes.numberOfItems}>
                {' '}
                {profile && profile.borrowed.length}{' '}
              </span>
              Items borrowed
            </Typography>
            <p>{profile && profile.bio}</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <Typography className={classes.profileSharePage}>
          {' '}
          Shared Items
        </Typography>
      </div>

      <div className={classes.itemsL}>
        <ItemsGrid className={classes} items={profile.items} />
      </div>
    </div>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default withStyles(style)(Profile);
