import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import Title from './Title';
import Source from './Source';


const styles = StyleSheet.create({
  Text__container: {
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

const Text = (props) => (
  <div className={css(styles.Text__container)}>
    <Title
      title={props.title}
      url={props.url}
    />
    <Source
      source={props.source}
    />
  </div>
)

export default Text;
