import React from 'react';
import Itemsgrid from '../../components/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <div>
      <Itemsgrid className={classes} items={items} />
    </div>
  );
};

Items.protoTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Items;
