import React from 'react';
import { Grid } from '@material-ui/core';
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
      {/* {<ShareItemPreview className={classes}/>} */}
      <Grid item xs={6}>
        <ShareItemForm className={classes} tags={tags} />
      </Grid>
      <p>
        This is the share page located at <code>/share</code>.
      </p>
    </Grid>
  );
};

export default Share;
