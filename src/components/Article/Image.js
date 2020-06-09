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
  Image__container: {
    [MOBILE_PORTRAIT]: {
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      paddingBottom: '35px',
    },
    [MOBILE_LANDSCAPE]: {
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      paddingBottom: '45px',
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

  Image: {
    [MOBILE_PORTRAIT]: {
      maxHeight: '90vh',
      maxWidth: '30vh',
    },
    [MOBILE_LANDSCAPE]: {
      maxHeight: '92vh',
      maxWidth: '60vh',
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

const Image = (props) => (
  <div className={css(styles.Image__container)}>
    <img className={css(styles.Image)} src={props.img} alt="Oops! Img" />
  </div>
)

export default Image;
