'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <div className="w-full md:w-1/2 p-4" style={{ overflow: 'hidden' }}>
      <Slider {...settings}>
          <div>
            <Image 
              src="https://images.pexels.com/photos/9072342/pexels-photo-9072342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Warnet Centro Gaming Setup" 
              width={600} 
              height={400} 
              className="w-full" 
            />
          </div>
          <div>
            <Image 
              src="https://images.pexels.com/photos/7849510/pexels-photo-7849510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Warnet Centro Gaming Setup" 
              width={600} 
              height={400} 
              className="w-full" 
            />
          </div>
          <div>
            <Image 
              src="https://images.pexels.com/photos/9072248/pexels-photo-9072248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Warnet Centro Gaming Setup" 
              width={600} 
              height={400} 
              className="w-full" 
            />
          </div>
        </Slider>
    </div>
  )
}

export default ImageSlider

