import React from 'react';
import Itemsgrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <div>
      <Itemsgrid item={items} />
    </div>
  );
};

export default Items;
