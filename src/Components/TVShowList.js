import React, { Component } from 'react';
import TVShowDetail from './TVShowDetail';

class TVShowList extends Component {

  render() {
    const shows = this.props.shows.map(show => 
      <TVShowDetail show={show} foundShow={this.props.foundShow} />
    )
    return (
      <div>
        {shows}
      </div>
    )
  }

}

export default TVShowList;
