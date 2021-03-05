import React from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from './Theme';

import useMediaQuery from '@material-ui/core/styles'
import {useTheme} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: '28px',
    fontFamily: 'Poppins',
    fontWeight: '800',
    width: '44px',
    height: '44px',
    lineHeight: '44px',
    borderRadius: '100px',
    textAlign: 'center',
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      width: '32px',
      height: '32px',
      lineHeight: '32px',
    }
    
  },
  logoText: {
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#222',

    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    },
    
    '& span': {
        fontWeight: '400',
        //marginLeft: '4px'
        marginLeft: theme.spacing(0.5)
    }
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <Typography className={classes.logoIcon}>A</Typography>
      <Typography className={classes.logoText}>
        Aman<span>Patel</span>
      </Typography>
    </div>
  );
}

export default Logo;
