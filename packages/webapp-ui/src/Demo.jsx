import React, { Component } from 'react'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:9394/')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state
    return (
      data ? (
        <h2>
          {data.data}
        </h2>
      ) : (
        <h2>
Loading ...
        </h2>
      )
    )
  }
}
