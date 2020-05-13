import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './Header/Header'
import Article from './Article/Article'

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
    },
    [MOBILE_LANDSCAPE]: {
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
  constructor(props) {
    super(props);
  }


  render() {
    let view;

    view =
    <React.Fragment>
      <Header/>
      <Article/>
    </React.Fragment>

      return (
        <div>
          <div className={css(styles.App__container)}>
            {view}
          </div>
          <div className={css(styles.App__mobileTextcontainer)}>
            I'm mobile only.
          </div>
        </div>
      );
  }
}

export default App;
