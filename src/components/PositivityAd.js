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
    paddingBottom: '1.9em',
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

const text =
      "Spread good vibes today. Take some of my positivity.  Today is going to be a sucessful day.  And you're going to be satisfied at the end of the day. We're going to crush it. We need more people like you on the planet."

const PositivityAd = () => (
  <div className={css(styles.PositivityAd__container)}>
    <div className={css(styles.PositivityAd__text)}>
      <p>Spread good vibes today.</p>
      <p>Take some of my positivity.  Today is going to be a sucessful day.  And you're going to be satisfied at the end of the day.</p>

    </div>
  </div>
)

export default PositivityAd;
