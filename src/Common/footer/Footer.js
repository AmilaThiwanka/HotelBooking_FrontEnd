import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>About Saru Blue Sapphire</p>
            <br />
            <p>How we work</p>
            <br />
            <p>Sustainability</p>
            <br />
            <p>Careers</p>
            <br />
            <p>Corporate contact</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Rooms & Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Looking for a meeting venue?</p>
                <label className='fa fa-calendar-alt'></label>
                <span>Date</span>
              </li>
              <li>
                <p>The margarita nails four of those five: the salty rim of the glass, the sweetness of the agave, the bitterness of the tequila, and the sourness of the limes.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>Date</span>
              </li>
              <li>
                <p>mazing Food Experience with Special Pot Menu for 2</p>
                <label className='fa fa-calendar-alt'></label>
                <span>Date</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Save time, save money!
Sign up and we'll send the best deals to you</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer