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
  Source__text: {
    color: '#7e7e7e',
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
});

const Source = (props) => (
  <div className={css(styles.Source__text)}>
    By {props.source}
  </div>
)

export default Source;
