import React from 'react'
import Navbar from './Navbar'
import metro from "./image/metro.jpg" // Replaced with a Hyderabad-related image
import '../Styles/about.css'
import Footer from './Footer'

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className='imagesection'>
        <img src={metro} style={{ width: "100%", height: "600px", objectFit: "cover" }} alt='aboutus' />
      </div>
      <div className='aboutcontainer'>
        <h1>ABOUT OUR COMPANY</h1>
        <div className='aboutsection2'>
          <div className='aboutinnerdiv'>
            <p>At <strong>Trips and Tours</strong>, we go beyond typical travel — we create experiences that connect you with the heart and soul of Hyderabad. From ancient landmarks to buzzing bazaars and lip-smacking food trails, our team crafts every itinerary to tell a story worth remembering.</p>
          </div>
          <div className='aboutinnerdiv1'>
            <p>With a passion for travel and an in-depth understanding of the region, we are dedicated to curating tailor-made journeys that cater to every traveler's unique preferences and interests. Whether you're an adventure seeker, a history enthusiast, a foodie, or simply seeking a cultural retreat, our diverse range of tour packages has you covered.</p>
          </div>
        </div>
      </div>
      <div className='formcontainer'>
        <div className='innercontainer'>
          <form className='form'>
            <div className='formsection'>
              <h1 style={{ color: "crimson" }}>Authentic Cultural Trails</h1>
              <p>Stroll through Laad Bazaar's bangles, taste Irani chai in an old café, and witness qawwalis at Mecca Masjid. Our curated trails take you deep into Hyderabad’s soul.</p>
            </div>
          </form>
        </div>
        <div className='innercontainer1'>
          <form className='form'>
            <div className='formsection'>
              <h1 style={{ color: "teal" }}>Curated Just for You</h1>
              <p>No cookie-cutter trips. From heritage photography tours to family-friendly amusement stops like Ramoji Film City — we design your dream Hyderabad adventure.</p>

            </div>
          </form>
        </div>
      </div>

      <div className='whychoose'>
        <div className='whychooseheading'>
          <h1 style={{ fontSize: "2.5rem", color: "green", fontFamily: "sans-serif" }}>Why Choose Us</h1>
          <p style={{ fontSize: "1.3rem", color: "black", fontFamily: "sans-serif" }}><b>We Are Happy To Help Make Your Journey Easier & Remarkable!</b></p>
        </div>
        <div className='choosecontainer'>
          <div className='choosecontainer1'>
            <div className='local'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "red" }}>Local Expertise:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>Our team of seasoned travel experts are locals who intimately know every corner of Hyderabad. This enables us to provide you with an authentic and immersive experience.</p>
            </div>
            <div className='personalised'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "blue" }}>Personalized Itineraries:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>We work closely with you to design personalized itineraries that match your travel style and desires, ensuring an unforgettable journey through the City of Pearls.</p>
            </div>
          </div>
          <div className='choosecontainer2'>
            <div className='diverse'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "orange" }}>Diverse Experiences:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>From historical tours and heritage walks to food trails and shopping sprees, Hyderabad offers a rich variety of experiences for every kind of traveler.</p>
            </div>
            <div className='safety'>
              <h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", margin: "0.5rem", color: "green" }}>Safety and Comfort:</h1>
              <p style={{ fontSize: "1rem", fontFamily: "sans-serif", margin: "0.5rem", color: "gray" }}>Your safety and comfort are our top priorities. We partner with reputable accommodations, reliable transportation services, and experienced guides to ensure a smooth and secure journey.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus
