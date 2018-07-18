import React from 'react';
import SearchResultList from './searchResultList/searchResultList';
import SearchForm from './searchForm/searchForm';
import { fetchData } from '../../lib/utils';

import './app.scss';

const redditApi = 'https://www.reddit.com/r/aww.json?limit=10';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redditlist: {},
      topics: [],
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

  // this is a lifecyle hook provided to us by React
  componentDidMount() {
    // when you draw yourself on the page, do this logic here
    this.loadRedditList()
      .then((redditList) => {
        this.setState({ redditList });
      })
      .catch(console.error);
  }

  loadRedditList = () => {
    return this.load(redditApi)
      .then((redditData) => {
        return redditData.results;
      })
      .catch(console.error);
  }

  redditListDetails = (event) => {
    const url = event.target.id;
    return this.load(url)
      .then((list) => {
        this.setState({ list });
      })
      .catch(console.error);
  }

  redditListSearch = (search) => {
    const url = `${redditApi}/${search}`;
    return this.load(url)
      .then((list) => {
        this.setState({ list });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
        <SearchForm 
          searchMethod = { this.redditListSearch }
         list = { this.state.redditList }
         redditListLoader = { this.redditListDetails }
        />
        <SearchResultList 
         reddit = { this.state.reddit }
        />
      </main>
    );
  }
}
