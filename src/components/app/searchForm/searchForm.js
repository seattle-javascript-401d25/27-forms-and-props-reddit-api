import React from 'react';
import PropTypes from 'prop-types';
import './searchForm.scss';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      limit: 10,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
  }

  handleLimit = (event) => {
    const limit = event.target.value;
    this.setState({ limit });
  }

  render() {
    return (
<div className="search-form">
        <form>
          <input 
            onChange= { this.handleSearch }
            placeholder="Search"
          />
          <input 
            onChange= { this.handleLimit }
            placeholder="10"
          />
          <input 
            type="submit" value="Submit" onClick={ this.handleSubmit }
          />
          { 
            this.props.redditList.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className="list"
                    id={ index }
                    onClick={ this.props.redditListLoader }
                  >
                    {list.data.title}
                  </div>
                </div>
              );
            })
          }         
        </form>
      </div>
    );
  }
}
