import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import articles from '../../data/articles';

const styles = StyleSheet.create({
  Article__container: {
    [MOBILE_PORTRAIT]: {
      borderStyle: 'solid',
      alignItems: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      borderStyle: 'solid',
      alignItems: 'center',
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

  Article__text: {
    [MOBILE_PORTRAIT]: {
      textAlign: 'center',
      borderStyle: 'solid',
    },
    [MOBILE_LANDSCAPE]: {
      textAlign: 'center',
      color: 'pink',
      borderStyle: 'solid',
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

  Article__imgContainer: {
    [MOBILE_PORTRAIT]: {
      align: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      align: 'center',
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
  Article__img: {
    [MOBILE_PORTRAIT]: {
      maxHeight: '250px',
      maxWidth: '250px',
      align: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      maxHeight: '650px',
      maxWidth: '350px',
      align: 'center',
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
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1.4em',
  },
});

const Article = () => (
  <div className={css(styles.Article__container)}>
    <div className={css(styles.Article__imgContainer)}>
      <img className={css(styles.Article__img)}  src={articles[0]['img']} alt="Oops! Img" />
    </div>
    <div className={css(styles.Article__text)}>
      <a
        className={css(styles.links)}
        href={articles[0]['url']}
        target="_blank"
        rel="noopener noreferrer">
        {articles[0]['title']}
      </a>
    </div>
    <div className={css(styles.Article__text)}>
      {articles[0]['source']}
    </div>
    <div className={css(styles.Article__imgContainer)}>
      <img className={css(styles.Article__img)}  src={articles[1]['img']} alt="Oops! Img" />
    </div>
    <div className={css(styles.Article__text)}>
      <a
        className={css(styles.links)}
        href={articles[1]['url']}
        target="_blank"
        rel="noopener noreferrer">
        {articles[1]['title']}
      </a>
    </div>
    <div className={css(styles.Article__text)}>
      {articles[1]['source']}
    </div>
  </div>
)

export default Article;
