import react, { Component } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Footer copy='Pinnacol Assurance' />
      </>
    )
  }
}
