import React from 'react';
import ItemsCard from '../ItemCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ShareItemPreview = ({shareItemPreview}) => {
  return <ItemsCard item={shareItemPreview} />;
};

//map state to form
 const mapStateToform = state => {
     return {
        ...state
     };
 };

ShareItemPreview.propTypes = { shareItemPreview: PropTypes.object.isRequired }; // run if exits

export default ShareItemPreview; //map through form share pform to shareitempreview
