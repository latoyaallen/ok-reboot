import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import Image from './Image';
import Text from './Text';

const styles = StyleSheet.create({
  Article__container: {
    overflow: 'visible',
    [MOBILE_PORTRAIT]: {
      paddingTop: '30px',
      paddingBottom: '30px',
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

const Article = (props) => (
  <div className={css(styles.Article__container)}>
    <Image
      img={props.img}
    />
    <Text
      source={props.source}
      title={props.title}
      about={props.about}
      url={props.url}
    />
  </div>
)

export default Article;
