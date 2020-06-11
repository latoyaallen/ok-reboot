import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../lib/breakpoints';

const styles = StyleSheet.create({
  ContentMenu__container: {
    overflow: 'hidden',
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
  ContentMenu__text: {
    color: '#659d89',
    transform: 'rotate(-90deg) translate(-50%,50%)',
    transformOrigin: '0 50%',
    left: '1%',
    // also needed for left
    top: '50%',
    bottom: '50%',
    position: 'fixed',
    height: '1.5em',
    margin: 'auto',
    // also needed for left
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
});

class ContentMenu extends React.Component {
  render() {
    return (
      <div className={css(styles.ContentMenu__container)}>
        <h4 className={css(styles.ContentMenu__text)}>body - mind - belly - space - about </h4>
      </div>
    );
  }
}

export default ContentMenu;
