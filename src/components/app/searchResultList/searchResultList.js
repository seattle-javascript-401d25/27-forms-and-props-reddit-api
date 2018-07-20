import React from 'react';
import PropTypes from 'prop-types';

import './searchResultList.scss';

export default class searchResultList extends React.Component {
  render() {
    return (
      <div className="article-list">
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleSearch }
            placeholder="Search..."
          />
          {
            this.props.article.map((article, index) => {
              return (
                <div key={index}>
                  <div
                    className="item"
                    id={ article.url }
                    onClick= { this.props.articleLoader }
                  >
                    {article.name}
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

searchResultList.propTypes = {
  article: PropTypes.object,
  articleLoader: PropTypes.func,
};
