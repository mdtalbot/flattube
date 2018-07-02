import React, { Component } from 'react'

export default class TVShowDetail extends Component {
  render() {
    console.log(this.props.foundShow)
    return (
      <div>
        {this.props.foundShow ? this.props.foundShow.name : 'No Show Yet'}

        <div key={this.props.show.id} name={this.props.show.name} id={this.props.show.id} onClick={(e) => this.props.foundShow(this.props.show.id, e)}>
            <h5>{this.props.show.name}</h5>
            <img src={this.props.show.image.medium} />
        </div>

      </div>
    )
  }
}
