import React from 'react';
import PrimaryArticleText from './PrimaryArticleText';
import PrimaryArticleImage from './PrimaryArticleImage';

const print = (article) => console.log(article["title"]);

const PrimaryArticle = (props) => (
  <div>
    {print(props.article)}
    <PrimaryArticleImage
      image={props.article["img"]}
    />
    <PrimaryArticleText
      source={props.article["source"]}
      title={props.article["title"]}
      author={props.article["author"]}
    />
  </div>
);

export default PrimaryArticle;
