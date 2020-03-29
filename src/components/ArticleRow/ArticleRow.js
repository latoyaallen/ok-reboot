import React from 'react';

import PrimaryArticle from './PrimaryArticle';
import SecondaryArticleRow from './SecondaryArticleRow';

const getPrimaryArticle = (mostRecent) => mostRecent[0];
//FIXME
const getSecondaryArticleRow = (mostRecent) => mostRecent.slice(1,4);


const ArticleRow = (props) => (
  <div>
    <PrimaryArticle
      article={getPrimaryArticle(props.mostRecent)}
    />
    <SecondaryArticleRow
      articles={getSecondaryArticleRow(props.mostRecent)}
    />
  </div>
);

export default ArticleRow;
