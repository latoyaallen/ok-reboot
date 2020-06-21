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
  PositivityAd__container: {
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

  PositivityAd__text: {
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

const PositivityAd = () => (
  <div className={css(styles.PositivityAd__container)}>
    <div className={css(styles.PositivityAd__text)}>
      <p>Spread good vibes today.</p>
      <p>Take some of my positivity.</p>
      <p>Today is going to be a sucessful day,</p>
      <p>and you're going to be satisfied at the end of the day.</p>
    </div>
  </div>
)

export default PositivityAd;
