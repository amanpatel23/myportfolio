import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './components/ui/Theme';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import DummyText from './components/DummyText';

import { styles } from './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '96%',
    margin: '3% auto',
    backgroundColor: '#fff',
    borderRadius: '40px',
    padding: '40px 70px 60px',
  },
  root_md: {
    backgroundColor: '#fff',
    width: '100%'
    //padding: '52px 40px 60px'
  },
}));

export default function App() {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={matches ? classes.root_md : classes.root}>
          <Header value={value} setValue={setValue} />

          <Switch>
            <Route exact path="/" component={() => <DummyText />} />
            <Route exact path="/portfolio" component={() => <DummyText />} />
            <Route exact path="/Blog" component={() => <DummyText />} />
            <Route exact path="/about" component={() => <DummyText />} />
            <Route exact path="/Contact" component={() => <DummyText />} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
