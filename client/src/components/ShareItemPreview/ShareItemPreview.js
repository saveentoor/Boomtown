import React from 'react';
import ItemsCard from '../ItemCard';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';


const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
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
ShareItemPreview.protoTypes = {
  shareItemPreview: PropTypes.object.isRequired,
};


const mapStateToProps = ({ shareItemPreview }) => ({ shareItemPreview });

export default connect(mapStateToProps)(ShareItemPreview);
