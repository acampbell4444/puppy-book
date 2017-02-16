import React, { Component } from 'react';
const speechSynthesis = require('speech-synthesis');
 



export default class SinglePuppy extends Component {

   // componentDidMount () {
   // this.props.onLoadPuppy()
   // }

  render () {
    const currentPuppy = this.props.currentPuppy
    return (
      <div>
        <h2>{currentPuppy.name}</h2>
        <div>
          <img src={currentPuppy.image} />
        </div>
      </div>
    )
  }
}