import React from 'react';

// components
import Header from './hemingway/Header';
import AddArticleModal from './hemingway/AddArticleModal';
import ArticleList from './hemingway/ArticleList';

const Hemingway = React.createClass({
  getInitialState() {
    return({ articles: [], showModal: false });
  },
  componentDidMount() {
    this.fetchArticles();
  },

  handleModalClick() {
    this.setState({ showModal: !this.state.showModal });
  },

  fetchArticles() {
    $.ajax({
      url: "http://dash-api.herokuapp.com/api/v1/articles.json",
      type: 'json',
      method: 'get',
      headers: "Access-Control-Allow-Origin",
      success: (data) => {
        this.setState({ articles: data })
      }
    });
  },

  openModal() {
    this.setState({ showModal: !this.state.showModal });
  },

  submitArticle(data) {
    $.ajax({
      url: "http://dash-api.herokuapp.com/api/v1/articles.json",
      type: 'POST',
      data: {
        article: {
           topic: data.topic,
           subtopic: data.subtopic,
           url: data.url
        }
      },
      headers: "Access-Control-Allow-Origin",
      success: (data) => {
        this.fetchArticles();
      }
    });
  },

  render() {
    return(
      <div>
        <Header
          openModal={ this.openModal }
        />
        <AddArticleModal
          show={ this.state.showModal }
          hide={ this.handleModalClick }
          addArticle={ this.submitArticle }
        />
        <ArticleList
          articles={ this.state.articles }
        />
      </div>
    )
  }
});

export default Hemingway;
