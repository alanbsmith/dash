import React from 'react';

const ArticleList = (props) => {
  return(
    <div className="col-sm-8">
      { props.articles.map((article, index) => {
          return(
            <div key={ article.id } className="panel panel-default">
              <div className="panel-body">
                <h3>{ article.topic }</h3>
                <p>{ article.subtopic }</p>
                <a target="_blank" href={ article.url }>{ article.url }</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default ArticleList;
