import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import LinkItem from './LinkItem';
import ExternalLinkItem from './ExternalLinkItem';

const styles = StyleSheet.create({
  ContentMenu__container: {
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
  ContentMenu__text: {
    color: '#659d89',
    transform: 'rotate(-90deg) translate(-50%,50%)',
    transformOrigin: '0 50%',
    left: '1%',
    top: '50%',
    bottom: '50%',
    position: 'fixed',
    height: '1.5em',
    margin: 'auto',
    letterSpacing: '1px',
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

class ContentMenu extends React.Component {
  render() {
    return (
      <div className={css(styles.ContentMenu__container)}>
        <h4 className={css(styles.ContentMenu__text)}>- {<LinkItem name={"body"}/>} - {<LinkItem name={"mind"}/>} - {<LinkItem name={"space"}/>} - {<LinkItem name={"about"}/>} -</h4>
      </div>
    );
  }
}

export default ContentMenu;
