import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  links: {
    color: '#659d89',
    textDecoration: 'none',
  },
});

const LinkItem = (props) => (
  <a
    className={css(styles.links)}
    href={`/${props.name}`}
    target="_blank"
    rel="noopener noreferrer">
    {props.name}
  </a>
);

export default LinkItem;
