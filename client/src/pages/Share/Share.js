import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
Share.protoTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
};
export default withStyles(styles)(Share);
