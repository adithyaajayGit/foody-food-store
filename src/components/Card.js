import React from 'react'

function Card() {
  return (
    <div> 
    <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img className="card-img-top" src="https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" alt="img" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">this is text</p>
                <div className='container w-100'></div>
                <select className='m-2 h-100  bg-success' >
                    {Array.from(Array(6), (e, i) => {
                        return (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        )
                    })}
                </select>
                <select className='m-2 h-100  bg-success rounded'>
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                </select>
                <div className='d-inline h-100 fs-5'>
                    Total Price:
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default Card
