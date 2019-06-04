import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';

const Share = ({ classes, tags }) => {
  return (
    <Grid container className={classes.sharePage} spacing={32}>
      <Grid item xs={6}>
        <ShareItemPreview />
      </Grid>
      <Grid item xs={6}>
        <ShareItemForm tags={tags} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Share);
