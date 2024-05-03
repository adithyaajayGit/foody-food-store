import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div><Card /></div>
      <br></br>
      <div><Footer /></div>
    </div>
  )
}

export default Home
