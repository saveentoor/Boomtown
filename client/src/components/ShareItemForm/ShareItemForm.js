import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import validate from './helpers/validation';
import { ADD_ITEM_MUTATION, ALL_ITEMS_QUERY } from '../../apollo/queries';
import styles from './styles';
import {
  updateItem,
  resetItem,
  resetImage
} from '../../redux/shareItemPreview/reducer';
import { connect } from 'react-redux';
import {
  TextField,
  Button,
  ListItemText,
  withStyles,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  Typography
} from '@material-ui/core/';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: false,
      done: false,
      selectedTags: [],
    };
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }

  handleChange = event => {
    this.setState({ selectedTags: event.target.value });
  };
  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }
    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }

  render() {
    const { classes, tags, updateItem, resetItem } = this.props;
    return (
      <div>
        <Typography className={classes.shareFormTitle}>
          Share. Borrow. Prosper.
        </Typography>
        <Mutation mutation={ADD_ITEM_MUTATION}>
          {addItemMutation => {
            return (
              <Form
                onSubmit={values => {
                  this.saveItem(values); //tags
                }}
                validate={values => {
                  return validate(values, this.state.selectedTags);
                }}
                render={({
                  handleSubmit,
                  pristine,
                  submitting,
                  invalid,
                  form
                }) => (
                  <form
                    onSubmit={event => {
                      handleSubmit(event).then(() => {
                        form.reset();

                        this.fileInput.current.value = '';

                        this.setState({ selectedTags: [] });
                        resetItem();
                      });
                    }}
                  >
                    <Field
                      name="title"
                      render={({ input, meta }) => {
                        return (
                          <div>
                            <TextField
                              id="standard-textarea"
                              label="Name Your Item"
                              multiline
                              fullWidth
                              margin="normal"
                              type="text"
                              {...input}
                            />
                            {meta.touched &&
                              meta.invalid && (
                                <Typography className={classes.errorText}>
                                  {meta.error}
                                </Typography>
                              )}
                          </div>
                        );
                      }}
                    />
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <div className="field">
                          <TextField
                            type="text"
                            {...input}
                            fullWidth
                            placeholder="Describe Your Item"
                            multiline
                            maxLength="6"
                            rows="4"
                          />
                          {meta.touched &&
                            meta.invalid && (
                              <div
                                className="error"
                                style={{ color: 'red', fontSize: '10px' }}
                              >
                                <Typography className={classes.errorText}>
                                  {meta.error}
                                </Typography>
                              </div>
                            )}
                        </div>
                      )}
                    />
                    <Field
                      name="tags"
                      render={({ classes, meta }) => (
                        <FormControl fullWidth>
                          <InputLabel htmlFor="tagid">Add Tags</InputLabel>
                          <Select
                            multiple
                            value={this.state.selectedTags}
                            onChange={this.handleChange}
                            renderValue={selected => {
                              return this.generateTagsText(tags, selected);
                            }}
                          >
                            {tags &&
                              tags.map(tag => (
                                <MenuItem key={tag.id} value={tag.id}>
                                  <Checkbox
                                    checked={
                                      this.state.selectedTags.indexOf(tag.id) >
                                      -1
                                    }
                                  />
                                  <ListItemText primary={tag.title} />
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      )}
                    />
                    <div>
                      <Button
                        variant="contained"
                        type="submit"
                        className={classes.shareItemButton}
                        color="primary"
                      >
                        Share
                      </Button>
                    </div>
                  </form>
                )}
              />
            );
          }}
        </Mutation>
      </div>
    );
  }
}

ShareItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired
  // updateItem: PropTypes.func.isRequired,
  // resetItem: PropTypes.func.isRequired,
  // resetImage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  updateItem(item) {
    dispatch(updateItem(item));
  },
  resetImage() {
    dispatch(resetImage());
  },
  resetItem() {
    dispatch(resetItem());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));
