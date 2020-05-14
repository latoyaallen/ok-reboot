import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import Image from './Image';

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

  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1.4em',
  },
});

const Article = (props) => (
  <div className={css(styles.Article__container)}>
    <Image
      img={props.img}
    />
    <div className={css(styles.Article__text)}>
      <a
        className={css(styles.links)}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.title}
      </a>
    </div>
    <div className={css(styles.Article__text)}>
      {props.source}
    </div>
    <div className={css(styles.Article__text)}>
      {props.about}
    </div>
  </div>
)

export default Article;
