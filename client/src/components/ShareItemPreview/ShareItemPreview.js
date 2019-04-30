import React from 'react';
import ItemsCard from '../ItemCard';
import { connect } from 'react-redux';

const ShareItemPreview = ({shareItemPreview}) => {
  return <ItemsCard item={shareItemPreview} />;
};

//map state to form
const mapStateToProps = ({ shareItemPreview }) => ({ shareItemPreview });

export default connect(mapStateToProps)(ShareItemPreview); //map through form share pform to shareitempreview


