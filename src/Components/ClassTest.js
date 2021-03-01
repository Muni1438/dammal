import React, { Component } from 'react'

export class ClassTest extends Component {

 muni = () => {
    
  return (
    <div>
      <h1>Arrow Function</h1>
    </div>
  )
}     
  render() {  
    return (
      <div>
        {this.muni()}
      </div>
    )
  }
}

export default ClassTest
