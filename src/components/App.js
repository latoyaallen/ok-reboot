import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './Header/Header'
import Articles from './Article/Articles'
import About from './About'
import ContentMenu from './ContentMenu'

import articles from '../data/articles';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../lib/breakpoints';


const styles = StyleSheet.create({
  App__container: {
    [MOBILE_PORTRAIT]: {
      display: 'grid',
    },
    [MOBILE_LANDSCAPE]: {
      display: 'grid',
    },
    [TABLET_PORTRAIT]: {
      display: 'none',
    },
    [TABLET_LANDSCAPE]: {
      display: 'none',
    },
    [LAPTOPS]: {
      display: 'none',
    }
  },

  App__mobileTextcontainer: {
    color: '#659d89',
    textAlign: 'center',
    [MOBILE_PORTRAIT]: {
      display: 'none',
    },
    [MOBILE_LANDSCAPE]: {
      display: 'none',
    },
    [TABLET_PORTRAIT]: {
      display: 'block',
    },
    [TABLET_LANDSCAPE]: {
      display: 'block',
    },
    [LAPTOPS]: {
      display: 'block',
    }
  },
});

class App extends React.Component {

  render() {
    let view;

    view =
    <React.Fragment>
      <Header/>
      <Articles
        articleData={articles}
      />
      <ContentMenu/>
      <About/>
    </React.Fragment>

      return (
        <div>
          <div className={css(styles.App__container)}>
            {view}
          </div>
          <div className={css(styles.App__mobileTextcontainer)}>
            <h1> This is a mobile experience.</h1>
            <h1> Please use your phone or tablet to continue.</h1>
          </div>
        </div>
      );
  }
}

export default App;
