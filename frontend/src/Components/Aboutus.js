import React from 'react'
import Navbar from './Navbar'
import image2 from "./image/image2.jpg"
import '../Styles/about.css'
import Footer from './Footer'

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className='imagesection'>
        <img src={image2} style={{ width: "100%", height: "600px" }} alt='aboutus' />
      </div>
      <div className='aboutcontainer'>
        <h1>ABOUT OUR COMPANY</h1>
        <div className='aboutsection2'>
          <div className='aboutinnerdiv'>
            <p>At Trips and Tours, we specialize in crafting unforgettable travel experiences to the enchanting region of Kashmir. Nestled in the lap of the majestic Himalayas, Kashmir is a land of breathtaking beauty, where verdant valleys, serene lakes, lush gardens, and snow-capped peaks converge to create a picture-perfect destination.</p>
          </div>
          <div className='aboutinnerdiv1'>
            <p>With a passion for travel and an in-depth understanding of the region, we are dedicated to curating tailor-made journeys that cater to every traveler's unique preferences and interests. Whether you're an adventure seeker, a nature lover, a history enthusiast, or simply seeking tranquility, our diverse range of tour packages.</p>
          </div>
        </div>

      </div>
      <div className='formcontainer'>
        <div className='innercontainer'>
          <form className='form'>
            <div className='formsection'>
              <h1 style={{ color: "red" }}>
                Cultural Immersion:
              </h1>
              <p>Immerse yourself in the cultural tapestry of Kashmir with our meticulously designed cultural tours. Explore the timeless charm of Srinagar's old city, wander through bustling bazaars adorned with intricate handicrafts, and engage with local artisans to learn about the craftsmanship that has been passed down through generations. Discover the history behind ancient Mughal architecture and visit historic mosques and shrines that reflect the region's diverse heritage.</p>

            </div>


          </form>
        </div>
        <div className='innercontainer1'>
          <form className='form'>
            <div className='formsection'>
              <h1 style={{ color: "red" }}>
                Cultural Tailoring:
              </h1>
              <p>At Trips and Tours, we understand that every traveler is unique. That's why we offer the option to customize your itinerary according to your preferences. Whether you want to focus on a specific aspect of Kashmir, extend your stay, or include special activities, our team will work closely with you to craft a journey that fulfills your desires. Witness the changing hues of the Chinar trees and experience the magic of a snowfall in the midst of pristine landscapes.</p>
            </div>
          </form>
        </div>
      </div>

      <div className='whychoose'>
        <div className='whychooseheading'>
          <h1 style={{ fontSize: "2.5rem", color: "green", fontFamily: "sans-serif" }}>Why Choose Us</h1>
          <p style={{ fontSize: "1.3rem", color: "black", fontFamily: "sans-serif" }}><b>we Are Happy To Help Your journey Easier & Remarkable!</b></p>
        </div>
        <div className='choosecontainer'>
          <div className='choosecontainer1'>
            <div className='local'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "red" }}>Local Expertise:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>Our team of seasoned travel experts are locals who intimately know every nook and cranny of Kashmir. This enables us to provide you with an authentic and immersive experience.</p>
            </div>
            <div className='personalised'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "blue" }}>Personalized Itineraries:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>We understand the differences. That's why we work closely with you to design personalized itineraries that match your travel style and desires, ensuring an unforgettable journey.</p>
            </div>
          </div>
          <div className='choosecontainer2'>
            <div className='diverse'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "orange" }}>Diverse Experiences:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>Dream of cruising on the tranquil Dal Lake, exploring ancient temples and mosques, trekking through breathtaking landscapes, or simply savoring the region's delectable cuisine, we have a wide array of experiences to choose from.</p>
            </div>
            <div className='safety'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "green" }}>Safety and Comfort:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>Your safety and comfort are our top priorities. We partner with reputable accommodations, reliable transportation services, and experienced guides to ensure a smooth and secure journey.</p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Aboutus