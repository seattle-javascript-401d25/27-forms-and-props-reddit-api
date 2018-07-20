import React from 'react';
import PropTypes from 'prop-types';

import './searchForm.scss';

export default class searchForm extends React.Component {
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
        <form type="submit" value="Submit" onClick={ this.handleSubmit }>
          <input 
            onChange= { this.handleSearch }
            placeholder="Search"
          />
          <input 
            onChange= { this.handleLimit }
            placeholder="10"
          />
          { 
            this.props.article.map((article, index) => {
              return (
                <div key={index}>
                  <div
                    className="article"
                    id={ index }
                    onClick={ this.props.articleLoader }
                  >
                    {article.data.title}
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

searchForm.propTypes = {
  searchMethod: PropTypes.func,
  article: PropTypes.array,
  articleLoader: PropTypes.func,
};
