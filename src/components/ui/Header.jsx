import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from './Theme';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: '40px 70px 60px',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.25em',
  },
  appBar: {
    backgroundColor: 'transparent',
    //color: '#000',
    // zIndex: theme.zIndex.modal + 1,
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff',
      padding: '0px 20px',
    },
  },
  logoButton: {
    padding: '0px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: '25px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '32px',
    width: '32px',
  },
  drawer: {
    //backgroundColor: theme.palette.primary.main,
    backgroundColor: '#fff',
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

function Header(props) {
  const { value, setValue } = props;

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) setValue(0);
    else if (window.location.pathname === '/portfolio' && value !== 1)
      setValue(1);
    else if (window.location.pathname === '/blog' && value !== 2) setValue(2);
    else if (window.location.pathname === '/about' && value !== 3) setValue(3);
    else if (window.location.pathname === '/contact' && value !== 4) setValue(4);
  }, [value]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setValue(0);
  };

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [opentDrawer, setOpenDrawer] = useState(false);

  const tabs = (
    <Tabs
      className={classes.tabContainer}
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
    >
      <Tab
        disableRipple
        className={classes.tab}
        component={Link}
        to="/"
        label="Home"
      />
      <Tab
        disableRipple
        className={classes.tab}
        component={Link}
        to="/portfolio"
        label="Portfolio"
      />
      <Tab
        disableRipple
        className={classes.tab}
        component={Link}
        to="/blog"
        label="Blog"
      />
      <Tab
        disableRipple
        className={classes.tab}
        component={Link}
        to="/about"
        label="About Me"
      />
      <Tab
        disableRipple
        className={classes.tab}
        component={Link}
        to="/contact"
        label="Contact"
      />
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={opentDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              disableTypography
              className={
                value === 0
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            to="/portfolio"
            selected={value === 1}
          >
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Portfolio
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            component={Link}
            to="/blog"
            selected={value === 2}
          >
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Blog
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            to="/about"
            selected={value === 3}
          >
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            component={Link}
            to="/contact"
            selected={value === 4}
          >
            <ListItemText
              disableTypography
              className={
                value === 4
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!opentDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBar}
        color="primary"
        position={matches ? 'fixed' : 'static'}
        elevation={matches ? 1 : 0}
      >
        <Toolbar disableGutters>
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to="/"
            onClick={handleClick}
          >
            <Logo />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={matches ? classes.toolbarMargin : undefined}></div>
    </div>
  );
}

export default Header;
