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

  Header__text: {
    [MOBILE_PORTRAIT]: {
      textAlign: 'center',
    },
    [MOBILE_LANDSCAPE]: {
      display: 'center',
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
