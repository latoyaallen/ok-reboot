import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    color: '#659d89',
    textDecoration: 'none',
  },
});

const ExternalLinkItem = (props) => (
  <a
    className={css(styles.links)}
    href="http://www.latoya-allen.com/"
    target="_blank"
    rel="noopener noreferrer">
    {props.name}
  </a>
);

export default ExternalLinkItem;
