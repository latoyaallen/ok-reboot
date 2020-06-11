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
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
      textAlign: 'center',
      paddingBottom: '35px',
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
    [MOBILE_PORTRAIT]: {
      textAlign: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      textAlign: 'center',
      color: 'pink',
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
