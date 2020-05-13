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
    },
    [MOBILE_LANDSCAPE]: {
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

  Article__text: {
    [MOBILE_PORTRAIT]: {
      textAlign: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      textAlign: 'center',
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
});

const Article = () => (
  <div className={css(styles.Article__container)}>
    <div className={css(styles.Article__text)}>
      {articles[0]['category']}
    </div>
  </div>
)

export default Article;
