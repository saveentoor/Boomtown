import React from 'react';
import ItemsCard from '../ItemCard';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
      
        return (
          <ItemsCard
            item={{
              ...shareItemPreview,
              itemowner: {
                id: viewer.id,
                fullname: viewer.fullname,
                email: viewer.email
              }
            }}
          />
        );
      }}
    </ViewerContext.Consumer>
  );
};

const mapStateToProps = ({ shareItemPreview }) => ({ shareItemPreview });

export default connect(mapStateToProps)(ShareItemPreview);
