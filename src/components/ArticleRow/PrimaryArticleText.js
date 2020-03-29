import React from 'react';

const PrimaryArticleText = ({source, title, author}) => (
  <div>
    <p>{source}</p>
    <h2>{title}</h2>
    <p>By {author}</p>
  </div>
);

export default PrimaryArticleText;
