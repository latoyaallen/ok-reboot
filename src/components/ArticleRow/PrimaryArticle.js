import React from 'react';
import PrimaryArticleText from './PrimaryArticleText';

const print = (article) => console.log(article["title"]);

const PrimaryArticle = (props) => (
  <div>
    {print(props.article)}
    <PrimaryArticleText
      source={props.article["source"]}
      title={props.article["title"]}
      author={props.article["author"]}
    />
</div>
);

export default PrimaryArticle;
