import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import Article from './Article';

const styles = StyleSheet.create({
  Articles__container: {
    overflow: 'visible',
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

const Articles = (props) => (
  <div className={css(styles.Articles__container)}>
    {props.articleData.map(d => (
      <div key={d.id}>
        <Article
          title={d.title}
          source={d.source}
          about={d.about}
          author={d.author}
          url={d.url}
          img={d.img}
        />
      </div>
    ))}
  </div>
)

export default Articles;
