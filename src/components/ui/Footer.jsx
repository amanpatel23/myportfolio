import React from 'react';
import theme from './Theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    //width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '60px -70px -60px',
    padding: '15px 45px',
    borderTop: '2px solid #f2f2f2',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '60px 0 0',
      padding: '15px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '5px'
    }
  },
  social_links: {
    display: 'flex',
    //flexDirection: 'column'
  },
  link: {
    //display: 'none',
    fontFamily: 'Poppins',
    color: '#333',
    fontSize: '.9rem',
    opacity: 0.6,
    cursor: 'pointer',
    marginRight: theme.spacing(1.3),
    '&:hover': {
      opacity: 1,
    },
  },
  thankYou_text: {
    fontFamily: 'Poppins',
    color: '#aaa',
    fontSize: '.9rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.social_links}>
        <Typography variant="subtitle1" className={classes.link}>
          LinkedIn
        </Typography>
        <Typography variant="subtitle1" className={classes.link}>
          Twitter
        </Typography>
      </div>

      <div className={classes.thankYou}>
        <Typography className={classes.thankYou_text}>
          Made with react, material ui and evening tea.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
