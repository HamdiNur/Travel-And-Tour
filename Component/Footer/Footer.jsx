import React, { useEffect } from 'react';
import './footer.css'
import { FiSend } from "react-icons/fi";
import video1 from '../../assets/video1.mp4'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <div>
     <section className='footer'>
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
             <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" 
            placeholder='Enter Email Address'/>
            <button data-aos='fade-up' className='btn flex' type='submit'>
               SEND<FiSend className="icon"/>
             
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#"className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel


              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
            Travel is a transformative experience that expands our
             horizons and challenges our assumptions about the world. 
             By stepping outside of our comfort zones and immersing ourselves in diverse cultures,
              we develop greater empathy, adaptability, and a deeper appreciation for the global community. 
            </div>
            <div data-aos='fade-up' className="footerSocials flex">
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />       
             <AiFillInstagram className='icon' />
             <FaTripadvisor  className='icon'/>
            </div>
          </div>
         
         
          <div className="footerLinks grid">
             {/* Group one */}
           <div data-aos='fade-up'
            data-aos-duration="3000"

               
            className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY  </span>
           
            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Services
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Insurance
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Agency
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
           Tourism
            </li>
            <li className="footerList flex">
            <FiChevronRight className='icon' />
           Payment
            </li>
           </div>
           {/* Group two */}
              <div data-aos='fade-up'
              data-aos-duration="4000"
               className="linkGroup">
            <span className="groupTitle">
              Partner  </span>
           
            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Booking 
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            RentCars
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Trivago
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
           TripAdvisor
            </li>
            <li className="footerList flex">
            <FiChevronRight className='icon' />
           HotelWorld
            </li>
           </div>
              {/* Group tgree */}
              <div data-aos='fade-up' 
                            data-aos-duration="5000"
                            className="linkGroup">
            <span className="groupTitle">
              Last Minute  </span>
           
            <li className="footerList flex">
            <FiChevronRight className='icon' />
            London
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            California
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
            Indonisia
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon' />
           Europe
            </li>
            <li className="footerList flex">
            <FiChevronRight className='icon' />
           Ociaro
            </li>
           </div>
          </div>

           <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED.ISRATECH
              2022
            </small>

           </div>
        </div>
      </div>
     </section>
    </div>
  );
}

export default Footer;
