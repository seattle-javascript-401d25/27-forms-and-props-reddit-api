import React from 'react';
import RedditList from './searchResultList';
import { fetchData } from '../../lib/utils';

import './app.scss';

const redditApi = 'https://www.reddit.com/r/aww.json?limit=10';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  loadArticleList = () => {
    return this.load(redditApi)
      .then((articles) => {
        return articles.results;
      })
      .catch(console.error);
  }

  redditSearch = (search, limit) => {
    const url = `${redditApi}/${search}.json?limit=${limit}`;
    return this.load(url)
      .then((articles) => {
        this.setState({ articles });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
      <RedditList 
        searchMethod={ this.redditSearch }
        articleList={ this.state.articleList }
      />
    </main>
    );
  }
}
