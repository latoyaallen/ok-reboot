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
  Text__container: {
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

  Text__text: {
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

  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1.4em',
  },
});

const Text = (props) => (
  <div className={css(styles.Text__container)}>
    <div className={css(styles.Text__text)}>
      <a
        className={css(styles.links)}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.title}
      </a>
    </div>
    <div className={css(styles.Text__text)}>
      {props.source}
    </div>
    <div className={css(styles.Text__text)}>
      {props.about}
    </div>
  </div>
)

export default Text;
