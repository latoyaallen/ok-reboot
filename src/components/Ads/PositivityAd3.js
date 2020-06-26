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
  PositivityAd3__container: {
    paddingBottom: '5.9em',
    [MOBILE_PORTRAIT]: {
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

  PositivityAd3__text: {
    textAlign: 'center',
    color: '#659d89',
    letterSpacing: '2px',
    fontSize: '1.7em',
    [MOBILE_PORTRAIT]: {
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
});

const PositivityAd3 = () => (
  <div className={css(styles.PositivityAd3__container)}>
    <div className={css(styles.PositivityAd3__text)}>
      <p>Tomorrow is going to be a sucessful day,</p>
      <p>and you're going to be satisfied at the end of the day.</p>
    </div>
  </div>
)

export default PositivityAd3;
