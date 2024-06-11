import React, { useEffect } from 'react';
import './main.css'

import { HiOutlineLocationMarker } from "react-icons/hi";

import { HiOutlineClipboardCheck } from "react-icons/hi";

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.,  This place is known for its luxurial stays and advantruous activities. '


  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu Pichu',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huyana Picchu is a mountain in peru,rising over Machu Pichhu, the so-called Lost City of Incas. This popular among tourist as the sunrise from the Sun Gage is simply spectualr.               '
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description :'One of the maost remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is skskksksksk'

  },

  {
    id:4,
    imgSrc:img4,
    destTitle:' Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'Accourding to the world Tourism Ranking 45 Million people visite Turkey each year, and from that about 2 milion come to visit this place is known for luxurious stays a.'

  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Mexico',
    location:'Mexico',
    grade:'CULTURAL RELAX',
    fees:'$1100',
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:'The Vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are foodies and love seafood, you will bedkdkdkdkd'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Machu Pichu',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees:'$790',
    description:'Anglot was represts th entire range of Khmer art from the 9th to the 15th century. This temple is considered the heard and sould '


  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'TajMahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'seeieidksl35ghjkl;'
  },

  {
    id:9,
    imgSrc:img9,

    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bali is the Indonesian Island and of the best Holyday  destination in the Indonesian archpelago. Bali is known for its volcaono'
  }








 ]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
 },[])



  return (

    <section className='main container section'>

     <div className="secTitle">
      <h3 data-aos="fade-right" className="title">
        Most Visited destinations
      </h3>
     </div>


     <div className="secContent grid">
      {/* { just method arrays mpa\\a} */}
      {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,
          description})=>{
            return(
                 <div key={id}data-aos='fade-up'
                  className="singlDestination">
                  {/*  Here it will return single destination */}



                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}
                      </h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'>{location}</span>
                      </span>


                      <div className="fees flex">
                        <div className="grade">
                          <span >{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>
                      <button className='btn flex'>
                        DETAILS<HiOutlineClipboardCheck className='icon' />
                     

                      </button>
                  </div>
                 </div>

            )

        })
      }

     </div>
    </section>
  );
}

export default Main;
