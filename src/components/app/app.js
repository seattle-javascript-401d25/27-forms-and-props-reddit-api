import React from 'react';
import SearchForm from './searchForm/searchForm';
import SearchResultList from './searchResultList/searchResultList';
import fetchData from '../../lib/utils';

import './app.scss';

const redditApi = 'https://www.reddit.com/r/aww.json?limit=10';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      articleList: [],
      loading: false,
    };
  }

  load = (url) => {
    this.setState({ loading: true });
    return fetchData(url)
      .then((data) => {
        this.setState({ loading: false });
        return data;
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.loadArticleList()
      .then((articleList) => {
        this.setState({ articleList });
      })
      .catch(console.error);
  }

  loadArticleList = () => {
    return this.load(redditApi)
      .then((result) => {
        return result.data.children;
      })
      .catch(console.error);
  }

  articleDetails = (event) => {
    const i = event.target.id;
    return this.setState({ article: this.state.articleList[i] });
  }

  articleSearch = (search) => {
    const url = `https://www.reddit.com/r/${search}.json?limit=10`;
    return this.load(url)
      .then((article) => {
        this.setState({ articleList: article.data.children });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
        <SearchResultList 
          searchMethod={ this.articleSearch }
          article={ this.state.articleList }
          articleLoader={ this.articleDetails }
        />
        <SearchForm 
          article={ this.state.article }
        />
      </main>
    );
  }
}
