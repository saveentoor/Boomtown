import React from 'react';
import Itemsgrid from '../../components/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <div>
      <Itemsgrid className={classes} item={items} />
    </div>
  );
};

ItemsGrid.protoTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired
};

export default Items;
