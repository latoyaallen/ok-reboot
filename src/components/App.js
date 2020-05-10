import React from 'react';
import IntroText from './IntroText/IntroText';
import Workouts from './Workouts/Workouts';
import { StyleSheet, css } from 'aphrodite';

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
    marginLeft: '12%',
    },
    [MOBILE_LANDSCAPE]: {
    marginLeft: '12%',
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
    this.state = {
      view: 'home',
    };
    this.handleHome = this.handleHome.bind(this);
  }

  handleHome() {
    window.location.assign(`/`);
    this.setState({view: 'home'});
  }

  handleKettlebell() {
    window.location.assign(`/kettlebell`);
    this.setState({view: 'kettlebell'});
  }

  handleJumprope() {
    window.location.assign(`/jumprope`);
    this.setState({view: 'jumprope'});
  }

  handleBody() {
    window.location.assign(`/body`);
    this.setState({view: 'body'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,24);
    if(pathname === 'home') {
      this.setState({view: 'home'});
    }
  }

  render() {
    let view;

    if(this.state.view === 'home') {
      view =
      <React.Fragment>
        <IntroText />
        <Workouts />
      </React.Fragment>
    }

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
