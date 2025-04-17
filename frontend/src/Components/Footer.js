import React from 'react'
import "../footer.css"
import Icons from './Icons'


function Footer() {
    return (
        <div>
            <div className='footercontainer'>
                <div className='footersection1'>
                    <div className='footerheader'>
                        <h5 style={{ fontSize: "1.5rem", margin: "1rem" }}> ABOUT US</h5>
                        <p style={{ fontSize: "1rem", margin: "1rem" }}>Discover the magic of Kashmir with us, where every moment is a masterpiece of beauty and serenity. Let us be your guide as you embark on a journey that will stay etched in your heart forever. Welcome to Trips and Tours.</p>
                    </div>
                    <div className='footertheme'>
                        <h1 style={{ fontSize: "1.5rem", margin: "1rem" }}>TOURS BY THEME</h1>
                        <h5>Mountaineering Tours</h5>
                        <h5>House Boat Tours</h5>
                        <h5>Sightseeing Tours</h5>
                        <h5>Trekking Tours</h5>
                        <h5>Skiing Tours</h5>
                        <h5>Horse Riding Tours</h5>

                    </div>
                    <div className='footcontact'>
                        <h1 style={{ fontSize: "1.5rem", margin: "1rem" }}>CONTACT US</h1>
                        <address style={{ fontSize: "1rem", margin: "1rem" }}>Pandach chowk 90 feet Soura Srinagar 190006 </address>
                     <Icons />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer