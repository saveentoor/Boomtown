import React, { Component } from 'react';
import Share from './Share';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullscreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';
import PropTypes from 'prop-types';

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return `Error! ${error.message}`;
          if (data) {
            return <Share tags={data.tags} />;
          }
        }}
      </Query>
    );
  }
}
ShareContainer.protoTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareContainer);
