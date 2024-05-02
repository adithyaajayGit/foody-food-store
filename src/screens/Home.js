import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="card mt-3" style={{"width" : "18rem","maxHeight":"360px"}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">this is text</p>
            <div className='container w-100'></div>
            <select className='m-2 h-100 w-100 bg-success'>
              {Array.from(Array(6),(e,i)=>{
                return(
                  <option key={i+1} value={i+1}></option>
              )
              })}
            </select>
            
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
