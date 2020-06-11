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
  About__container: {
    overflow: 'hidden',
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
  About__text: {
    color: '#659d89',
    transform: 'rotate(90deg) translate(50%,50%)',
    transformOrigin: '100% 50%',
    right: '1%',
    top: '50%',
    bottom: '50%',
    position: 'fixed',
    height: '1.5em',
    margin: 'auto',
    letterSpacing: '2px',
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

class About extends React.Component {
  render() {
    return (
      <div className={css(styles.About__container)}>
        <h4 className={css(styles.About__text)}>a  relaxing  space  built  for  us </h4>
      </div>
    );
  }
}

export default About;
