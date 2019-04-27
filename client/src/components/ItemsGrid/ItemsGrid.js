import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemsCard from '../ItemCard/';
import PropTypes from 'prop-types';

import styles from './styles';

const ItemsGrid = ({ classes, items }) => {
  return (
    <Grid className={classes.grid} container spacing={8}>
      {items.map(item => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.gridItem}
            key={item.id}
          >
            <ItemsCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ItemsGrid.protoTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ItemsGrid);
