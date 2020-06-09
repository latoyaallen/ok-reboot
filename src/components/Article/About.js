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
  About__text: {
    color: '#659d89',
    transform: 'rotate(90deg)',
    position: 'absolute',
    zIndex: '10',
    top: '0',
    bottom: '0',
    right: '250px',
    textAlign: 'center',
    [MOBILE_PORTRAIT]: {
    width: '250px',

    },
    [MOBILE_LANDSCAPE]: {
    width: '270px',
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

const About = () => (
  <div className={css(styles.About__text)}>
    <h4>a relaxing space built for us.</h4>
  </div>
)

export default About;
