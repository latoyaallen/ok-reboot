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
  PositivityAd2__container: {
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

  PositivityAd2__text: {
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

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const getDay = (days) => {
  const now = new Date();
  return days[now.getDay()]
}


const PositivityAd2 = () => (
  <div className={css(styles.PositivityAd2__container)}>
    <div className={css(styles.PositivityAd2__text)}>
      <p>Today is {getDay(days)}.</p>
      <p>Shake off the stress.</p>
      <p>Celebrate your wins.</p>
    </div>
  </div>
)

export default PositivityAd2;
