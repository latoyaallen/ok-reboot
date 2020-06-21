import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './Header/Header'
import Articles from './Article/Articles'
import About from './About'
import ContentMenu from './ContentMenu/ContentMenu'
import PositivityAd from './PositivityAd'

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
      display: 'grid',
    },
    [TABLET_LANDSCAPE]: {
      display: 'grid',
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
      display: 'none',
    },
    [TABLET_LANDSCAPE]: {
      color: 'pink',
      display: 'none',
    },
    [LAPTOPS]: {
      display: 'block',
      color: '#659d89',
      textAlign: 'center',
    }
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'home'};
    this.handleHome = this.handleHome.bind(this);
  }

  handleHome() {
    window.location.assign(`/`)
    this.setState({view: 'home'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,24);

    if(pathname === 'body') {
      this.setState({view: 'body'});
    }

    if(pathname === 'belly') {
      this.setState({view: 'belly'});
    }

    if(pathname === 'mind') {
      this.setState({view: 'mind'});
    }

    if(pathname === 'space') {
      this.setState({view: 'space'});
    }

    if(pathname === 'about') {
      this.setState({view: 'about'});
    }

    if(pathname === 'home') {
      this.setState({view: 'home'});
    }
  }

  render() {
    // first three articles //
    const firstThreeArticles = articles.slice(0, 3);
    let topArticles;

    if(this.state.view === 'home') {
      topArticles = <Articles articleData={firstThreeArticles} />
    } else if(this.state.view === 'body') {
      topArticles = <Articles articleData={firstThreeArticles} />
    }
    // first three articles //


    // remaining articles //
    console.log(articles.length);
    const remainingArticles = articles.slice(3, articles.length);
    let bodyArticles;

    if(this.state.view === 'home') {
      bodyArticles = <Articles articleData={remainingArticles} />
    } else if(this.state.view === 'body') {
      bodyArticles = <Articles articleData={remainingArticles} />
    }
    // remaining articles //

    return (
      <div>
        <div className={css(styles.App__container)}>
          <React.Fragment>
            <Header/>
            {topArticles}
            <ContentMenu/>
            <About/>
            <PositivityAd />
            {bodyArticles}
          </React.Fragment>
        </div>
        <div className={css(styles.App__mobileTextcontainer)}>
          <h1> This is a mobile experience.</h1>
          <h1> Please use your phone or flip your tablet to continue.</h1>
        </div>
      </div>
    );
  }
}

export default App;
