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
    this.state = {
      fileSelected: false,
      done: false,
      selectedTags: []
    };
    this.fileInput = React.createRef();
  }
  applyTags(tags) {
    //converts an array of objects into a array of text
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
  getBase64Url() {
    //look over
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }
  resetFileInput = () => {
    //look over, have twice?
    this.fileInput.current.value = '';
    this.props.resetImage();
    this.setState({
      fileSelected: false
    });
  };

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }
  dispatchUpdate(values, tags, updateNewItem) {
    console.log(values);
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
                render={({ handleSubmit, pristine, invalid, form, values }) => (
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
                    <FormSpy
                      subscription={{ values: true }}
                      component={({ values }) => {
                        if (values) {
                          this.dispatchUpdate(values, tags, updateItem);
                        }
                        return '';
                      }}
                    />
                    <Button
                      variant="contained"
                      type="file" //changed from submit to file
                      className={classes.shareItemButton}
                      color="primary"
                      onClick={() => {
                        this.fileInput.current.click();
                      }}
                    >
                      Select an image
                    </Button>
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
                              />
                            )}
                        </div>
                      )}
                    />

                    <Field name="tags">
                      {({ input, meta }) => {
                        return (
                          <FormControl fullWidth>
                            <InputLabel htmlFor="tagid">add tags</InputLabel>

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
                                        this.state.selectedTags.indexOf(
                                          tag.id
                                        ) > -1
                                      }
                                    />
                                    <ListItemText primary={tag.title} />
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        );
                      }}
                    </Field>

                    <div>
                      <Button
                        variant="contained"
                        type="file" //changed from submit to file
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
