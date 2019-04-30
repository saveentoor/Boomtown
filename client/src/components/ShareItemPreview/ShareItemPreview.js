import React, { Component } from 'react';
import ItemsCard from '../ItemCard';
import {connect} from 'react-redux';

const ShareItemPreview = ({ shareItemPreview}) => {
    return <ItemsCard item = {shareItemPreview} > </ItemsCard>
};

 //map state to form 
 const mapStateToform = state => {
     return {
        ...state
     };
 };


export default connect(mapStateToform)(ShareItemPreview)//map through form share pform to shareitempreview
