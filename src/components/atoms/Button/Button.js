import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.action}>{ this.props.children }</button>
    )
  }
}