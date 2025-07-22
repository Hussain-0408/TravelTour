import React from 'react'
import Navbar from './Navbar'
import Trips from './Trips'
import Footer from './Footer'


function Home() {
  return (
    <div>
     
     <Navbar />
        {/* <img src = {image3} alt='' style={{width:"100%",height:"500px",background:"transparancy"}}/> */}
        <Trips />
        <Footer />
       
    </div>
  )
}

export default Home