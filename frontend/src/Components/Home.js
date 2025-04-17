import React from 'react'
import Navbar from './Navbar'
import Trips from './Trips'
import Footer from './Footer'


function Home() {
  return (
    <div>
     
     <div style={{ width: "100%",  zIndex: "1", position: "fixed", backgroundColor: "yellow" }}>
        <Navbar style={{ position: 'fixed' }} />
      </div>
        {/* <img src = {image3} alt='' style={{width:"100%",height:"500px",background:"transparancy"}}/> */}
        <Trips />
        <Footer />
       
    </div>
  )
}

export default Home