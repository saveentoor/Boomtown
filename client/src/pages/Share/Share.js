import React from 'react';
import { Grid } from '@material-ui/core';
//import {withStyles} from '@material-ui/core/styles';

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';

const Share = ({ classes, tags }) => {
  return (
    //causing error on share page
    <Grid container spacing={32}>
      <ShareItemPreview />
      <Grid item xs={6}>
        <ShareItemForm tags={tags} />
      </Grid>
    </Grid>
  );
};

export default Share;
