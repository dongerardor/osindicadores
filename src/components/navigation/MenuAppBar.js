import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    title: 'Os indicadores',
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    const section = e.target.textContent;

    this.setState({ 
      anchorEl: null,
      title: section,
    });

    this.props.onSetSection(section);
  };

  handleProfile = () => {
    //handleProfile
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, title } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                 
                  <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={this.handleClose}>Receitas</MenuItem>
                  <MenuItem onClick={this.handleClose}>Despesas</MenuItem>
                  <MenuItem onClick={this.handleClose}>Folha</MenuItem>
                  <MenuItem onClick={this.handleClose}>Resultado</MenuItem>
                  <MenuItem onClick={this.handleClose}>DRE</MenuItem>
                  <MenuItem onClick={this.handleClose}>Rentabilidade</MenuItem>
                  <MenuItem onClick={this.handleClose}>Cenários</MenuItem>
                </Menu>
              </div>
            )}



            </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              { this.state.title }
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfile}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSetSection: PropTypes.func.isRequired,
};

export default withStyles(styles)(MenuAppBar);