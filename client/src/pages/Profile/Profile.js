import React, { Fragment } from 'react';
import Gravatar from 'react-gravatar';
import ItemsCard from '../../components/ItemCard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Profile = ({ classes, profile }) => {
  return (
    <Card className={classes.profileCardContainer}>
    <Fragment>
      <Card>
        <CardContent>
          <div>
            <Avatar>
              <Gravatar email={profile && profile.email} />
            </Avatar>
            <Typography>{profile && profile.fullname}</Typography>
          </div>

          <div>
            <Typography>
              <span>{profile && profile.items.length}</span>
              items shared
              <span>{profile && profile.borrowed.length}</span>
              items borrowed
            </Typography>
            <p>{profile && profile.bio}</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <Typography> Shared Items</Typography>
      </div>
      <Grid container className={classes.profileGrid}>
        {profile &&
          profile.items.map(item => {
            return (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ItemsCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </Fragment>
    </Card>
  );
};
export default Profile;
