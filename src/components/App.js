import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './Header/Header'
import Articles from './Article/Articles'
import About from './About'
import ContentMenu from './ContentMenu/ContentMenu'
import PositivityAd2 from './Ads/PositivityAd2'

import articles from '../data/articles';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../lib/breakpoints';

const NUM_ARTICLES_IN_CHUNK = 3;
const START_PATHNANE_RANGE = 1;
const END_PATHNAME_RANGE = 24;


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

function App() {
  // Declare a new state variable called page.
  // When the app loads, set the page to 'home'
  const [page, setView] = useState('home');

  // Similar to componentDidMount and componentDidUpdate:
  // React Hook useEffect contains a call to 'setView'. Without a list of dependencies, this can lead to an infinite chain of updates.
  // To fix this, pass [] as a second argument to the useEffect Hook  react-hooks/exhaustive-deps
  useEffect(() => {
    const pathname = window.location.pathname.substring(START_PATHNANE_RANGE, END_PATHNAME_RANGE);

    if(pathname === 'body') {
      setView("body")
    }

    if(pathname === 'belly') {
      setView("belly")
    }

    if(pathname === 'mind') {
      setView("mind")
    }

    if(pathname === 'space') {
      setView("mind")
    }

    if(pathname === 'about') {
      setView("about")
    }

    if(pathname === 'home') {
      setView("home")
    }
  }, []);

  // first three articles //
  const firstThreeArticles = articles.slice(0, NUM_ARTICLES_IN_CHUNK);
  let topArticles;

  if(page === 'home') {
    topArticles = <Articles articleData={firstThreeArticles} />
  } else if(page === 'body') {
    topArticles = <Articles articleData={firstThreeArticles} />
  }
  // first three articles //


  // middle articles //
  const middleArticleData = articles.slice(NUM_ARTICLES_IN_CHUNK, articles.length);
  let middleArticles;

  if(page === 'home') {
    middleArticles = <Articles articleData={middleArticleData} />
  } else if(this.state.page === 'body') {
    middleArticles = <Articles articleData={middleArticleData} />
  }

  return (
    <div>
      <div className={css(styles.App__container)}>
        <React.Fragment>
          <Header/>
          {topArticles}
          <ContentMenu/>
          <About/>
          <PositivityAd2 />
          {middleArticles}
        </React.Fragment>
      </div>
      <div className={css(styles.App__mobileTextcontainer)}>
        <h1> This is a mobile experience.</h1>
        <h1> Please use your phone or flip your tablet to continue.</h1>
      </div>
    </div>
  );
}

export default App;
