import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/boomtown.svg';
import { Link, withRouter } from 'react-router-dom';
import { MoreVert, AddCircle, Fingerprint } from '@material-ui/icons';
import styles from './style';
import {
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem
} from '@material-ui/core';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import { Mutation } from 'react-apollo';
import { compose } from 'react-apollo';
import { graphql } from 'graphql';
import client from '../../apollo/';

// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// };

class ButtonAppBar extends React.Component {
  state = {
    open: false
  };
  handleclose = event => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Mutation
        mutation={LOGOUT_MUTATION}
        onCompleted={() => client.resetStore()}
      >
        {(logoutMutation, { data }) => {
          return (
            <AppBar position="static">
              <Toolbar className={classes.headerBar}>
                <IconButton
                  className={classes.root}
                  color="inherit"
                  aria-label="Menu"
                  component={Link}
                  to="/items"
                >
                  <img src={logo} width="40" />
                </IconButton>
                <div className={classes.grow} />
                <div className={classes.shareButton}>
                  <Button color="inherit" component={Link} to="/share">
                    <AddCircle />Share Something
                  </Button>
                  <Button color="inherit" aria-label="Menu">
                    <MoreVert />
                  </Button>
                  <Popper open={open} anchorEl={this.anchorEl} transition>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="rightButton"
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom'
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleclose} />
                          <MenuList>
                            <MenuItem
                              component={Link}
                              to={`/profile/${this.props.user.id}`}
                            >
                              <Fingerprint />
                              Profile
                            </MenuItem>
                          </MenuList>
                          <MenuItem onClick={logoutMutation} />
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Toolbar>
            </AppBar>
          );
        }}
      </Mutation>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
