import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../ItemCard/ItemsCard';
import PropTypes from 'prop-types';
import styles from './styles';

const ItemsGrid = ({ classes, items }) => {
  return (
    <Grid className={classes.grid} container spacing={16}>
      {items &&
        items.map(item => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              className={classes.gridItem}
              key={item.id}
            >
              <ItemCard item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
};

ItemsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ItemsGrid);
