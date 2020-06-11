import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

const styles = StyleSheet.create({
  Title__container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [MOBILE_PORTRAIT]: {
      maxWidth: '50%',
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
      display: 'none',
    }
  },

  Title__text: {
    textAlign: 'center',
    [MOBILE_PORTRAIT]: {
      fontSize: '0.9em',
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
      display: 'none',
    }
  },

  Title__link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.3em',
    textAlign: 'center',
    width: '30%',
  },
});

const Title = (props) => (
  <div className={css(styles.Title__container)}>
    <div className={css(styles.Title__text)}>
      <a
        className={css(styles.Title__link)}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.title}
      </a>
    </div>
  </div>
)

export default Title;
