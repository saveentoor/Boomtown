import React, { Fragment } from 'react';
import { CardContent, Card, Avatar, Typography } from '@material-ui/core';
import Gravatar from 'react-gravatar';
import ItemsCard from '../../components/ItemCard';

const Profile = ({ classes, profile }) => {
  return (
    <Fragment>
      <div>
        <Card>
          {' '}
          <CardContent>
            <div>
              <Avatar>
                <Gravatar email={profile.email} />
              </Avatar>
              <Typography>{profile.fullname}</Typography>
            </div>
            <div>
              <Typography>
                <span>{profile.items.length}</span>
                items shared
                <span>{profile.borrowed.length}</span>
                items borrowed
              </Typography>
              <p>{profile.bio}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Typography> Shared Items</Typography>
      </div>
      <Grid container className={classes.profileGrid}>
        {profile.items.map(item => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ItemsCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Profile;
