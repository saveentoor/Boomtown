import React from 'react';
import {
  withStyles,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Grow,
  Paper,
  Popper,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Grid,
  Slide
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/boomtown.svg';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import Fingerprint from '@material-ui/icons/Fingerprint';
import MoreVert from '@material-ui/icons/MoreVert';
import AddCircle from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import styles from './style';
import { ViewerContext } from '../../context/ViewerProvider';

class MenuBar extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, location } = this.props;
    const { open } = this.state;

    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          return (
            <div className={classes.root}>
              <Grid container>
                <AppBar position="static" color="primary">
                  <Toolbar>
                    <Grid item xs={9}>
                      <IconButton component={Link} to="/">
                        <img src={logo} width="40px" alt="Boomtown logo" />
                      </IconButton>
                    </Grid>

                    <Grid item xs={2}>
                      <Slide
                        direction="left"
                        in={location.pathname !== '/share'}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Button component={Link} to="/share">
                          <AddCircle />
                          Share Something
                        </Button>
                      </Slide>
                    </Grid>

                    <Grid item xs={1}>
                      <Button
                        buttonRef={node => {
                          this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                      >
                        <MoreVert />
                      </Button>
                      <Popper
                        open={open}
                        anchorEl={this.anchorEl}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{
                              transformOrigin:
                                placement === 'bottom'
                                  ? 'center top'
                                  : 'center bottom'
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList>
                                  <MenuItem
                                    component={Link}
                                    to={`/profile/${viewer.id}`}
                                    onClick={() => window.location.refresh()}
                                  >
                                    <Fingerprint />
                                    Profile
                                  </MenuItem>
                                  <MenuItem onClick={this.props.logoutMutation}>
                                    <PowerSettingsNew />
                                    Logout
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </Grid>
                  </Toolbar>
                </AppBar>
              </Grid>
            </div>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
];
export default compose(
  graphql(LOGOUT_MUTATION, {
    options: {
      refetchQueries
    },
    name: 'logoutMutation'
  }),
  withStyles(styles),
  withRouter
)(MenuBar);
