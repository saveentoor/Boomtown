import React, { Component } from 'react';

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
import { Form, Field, FormSpy } from 'react-final-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import validate from './helpers/validation';
import { ADD_ITEM_MUTATION, ALL_ITEMS_QUERY } from '../../apollo/queries';

import styles from './styles';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      done: false,
      selectedTags: []
    };
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }

  handleChange = event => {
    this.setState({ selectedTags: event.target.value });
  };

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
                onSubmit={async values => {
                  addItemMutation({
                    variables: {
                      item: {
                        ...values,
                        tags: this.state.selectedTags.map(tag => ({
                          id: tag,
                          title: ''
                        }))
                      }
                    },
                    refetchQueries: [
                      {
                        query: ALL_ITEMS_QUERY
                      }
                    ]
                  });
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
                        disabled={submitting || pristine || invalid}
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
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateItem: PropTypes.func.isRequired,
  resetItem: PropTypes.func.isRequired,
  resetImage: PropTypes.func.isRequired
};

export default withStyles(styles)(ShareItemForm);
