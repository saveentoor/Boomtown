import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function FullScreenLoader({ classes }) {
  return (
    <div className={classes.container}>
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  );
}
export default withStyles(styles)(FullScreenLoader);
