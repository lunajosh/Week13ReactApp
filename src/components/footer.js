import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Footer extends Component {
  
  render() {
    return (
      <footer className='fixed-bottom bg-light'>
        <p className='text-center text-dark p-3'>&copy; {this.props.copy}</p>
        </footer>
    )
  }
}
