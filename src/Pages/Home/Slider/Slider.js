import React from 'react';
import img1 from '../../../astes/chris-ainsworth-CxoEeNkJwUA-unsplash.jpg'
import img2 from '../../../astes/mariah-krafft-ayc1G5wV3aA-unsplash.jpg'
import img3 from '../../../astes/victoria-priessnitz-JFAPl7brL6U-unsplash.jpg'
import img4 from '../../../astes/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg'
const Slider = () => {
    return (
        <div className="carousel w-3/5 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;