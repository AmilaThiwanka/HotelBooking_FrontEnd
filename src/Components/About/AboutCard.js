import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to make the holiday
          </h1>
          <p className="justify-text">Saru Blue Sapphire Hotel places you 9.9 mi (16 km) from Udawalawe National Park. This 3.5-star hotel has 20 guestrooms and offers an outdoor pool, free in-room WiFi, and free self parking</p>
          <p className="justify-text">Saru Blue Sapphire Hotel features an outdoor pool, a children's pool, and a gym. Free parking is included with your stay. The 24-hour front desk has staff standing by to help with dry cleaning or laundry, and answer any questions about the accommodations. Additional amenities include free WiFi in public areas, laundry facilities, and a garden.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard