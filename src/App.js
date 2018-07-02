import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import TVShowDetail from './Components/TVShowDetail';


class App extends Component {
  state = {
    shows: [],
    selectedShow: null
  }

  componentDidMount = () => {
    Adapter.getShows()
    .then((res) => this.setState({ shows: res }))
  }

  detailsHandler = (id, event) => {
    
    const foundShow = this.state.shows.find(show => show.id === id )
    console.log(foundShow);
    this.setState({selectedShow: foundShow}, () => {console.log(this.state.selectedShow)})

  }

  render = () => {
    console.log(this.state)
    return (
      <div>
        {/* <TVShowDetail foundShow={this.state.selectedShow}  details={} /> */}
        <TVShowList 
          detailsHandler={this.detailsHandler} 
          shows={this.state.shows} 
          tvShowDetail={<TVShowDetail foundShow={this.state.selectedShow} />}
        />
      </div>
    );
  }

}

export default App;
