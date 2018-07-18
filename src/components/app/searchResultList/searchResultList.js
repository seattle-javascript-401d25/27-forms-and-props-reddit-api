import React from 'react';
import PropTypes from 'prop-types';

import './searchResultList.scss';

export default class searchResultList extends React.Component {
  render() {
    return (
      this.props.list.data
        ? <div className="list-title">
          <h2>{this.props.list.data.title}</h2>
          <span>{this.props.list.data.ups}</span>
          <a href={ `https://www.reddit.com${this.props.list.data.permalink}` }>Source</a>
          <img src={this.props.list.data.url} />
        </div>
        : null
    );
  }
}

searchResultList.propTypes = {
  list: PropTypes.object,
};
