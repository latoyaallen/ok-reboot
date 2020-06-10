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
  Header__container: {
    textAlign: 'center',
    paddingTop: '40px',
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

  Header__text: {
    color: '#659d89',
    fontSize: '1.3em',
    fontWeight: '500',
    textDecoration: 'none',
    [MOBILE_PORTRAIT]: {
    paddingBottom: '20px',
    },
    [MOBILE_LANDSCAPE]: {
    paddingBottom: '40px',
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

const Header = () => (
  <div className={css(styles.Header__container)}>
    <div className={css(styles.Header__text)}>
      ok-reboot
    </div>
  </div>
)

export default Header;
