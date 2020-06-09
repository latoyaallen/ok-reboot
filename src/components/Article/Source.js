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
    [MOBILE_PORTRAIT]: {
      textAlign: 'center',
      paddingBottom: '5%',
    },
    [MOBILE_LANDSCAPE]: {
      textAlign: 'center',
      paddingBottom: '5%',
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
      {props.source}
    </div>
)

export default Source;
