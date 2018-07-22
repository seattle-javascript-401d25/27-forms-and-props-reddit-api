import React from 'react';
import PropTypes from 'prop-types';
import './app.scss';

export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      limit: 2,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search, this.state.limit);
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="thread-list">
        <label>Search Your Favorite Sub Reddit</label>
        <form onSubmit={ this.handleSubmit }>
          <input
            name="search" 
            value={this.state.search}
            onChange={ this.handleSearch }
            placeholder="Search..."
          /><br />
          <label htmlFor="limit">Number of Threads: {this.state.limit}</label><br />
          <input ref={this.state.limit} type="range" min="1" max="100" value={ this.state.limit } name="limit" onChange={ this.handleInputChange } />
          <button type="submit">SEND IT</button>
        </form>
        <ul>
          </ul>
      </div>
    );
  }
}

RedditList.propTypes = {
  searchMethod: PropTypes.func,
  threads: PropTypes.array,
};
