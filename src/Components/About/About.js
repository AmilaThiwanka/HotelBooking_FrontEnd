import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p className="justify-text">Saru Blue Sapphire hotel offer an array of exquisite features that set them apart and provide an unparalleled guest experience. From the moment guests step into the grand lobby, they are greeted with opulence and attention to detail. The outstanding service provided by highly trained staff ensures that every need is anticipated and met promptly and professionally. Fine dining options within the hotel tantalize the taste buds with world-class cuisine and impeccable service. Spa and wellness facilities provide a haven of relaxation and rejuvenation, offering a range of indulgent treatments and therapies. State-of-the-art fitness centers cater to guests' wellness needs with top-notch equipment and personalized services. Exclusive amenities such as private pools, concierge services, and chauffeur-driven limousines further enhance the luxury experience. High-speed Wi-Fi and advanced technology keep guests connected and entertained throughout their stay.</p>
            <p className="justify-text">Our hotel also offer sophisticated event and meeting spaces, equipped with the latest technology and supported by dedicated event planners. VIP and personalized services cater to individual preferences, ensuring a customized and unforgettable stay. Prime locations and stunning views provide a picturesque backdrop, offering guests the opportunity to immerse themselves in breathtaking surroundings. In essence, we provide a harmonious blend of refined features and exceptional services, creating a haven of indulgence and luxury for discerning travelers.</p> 
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About