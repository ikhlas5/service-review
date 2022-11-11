import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from '../Service/singleService/SingleService';
import Slider from './Slider/Slider';
import img1 from '../../astes/dark-haired-bearded-man-light-shirt-holding-camera-portrait-guy-bright-living-room-background-wedding-photos.jpg'
import img2 from '../../astes/cameraman-recording-wedding-ceremony-using-camera-tripod.jpg'

const Home = () => {
    const services=useLoaderData();
    console.log(services)
    console.log(services)
    return (
        <div>
            <Slider></Slider>

            <div className='grid md:grid-cols-2 m-10'>
               <div className='p-5'>
                    <h1 className='text-3xl font-bold text-orange-600'>Wedding Photography Jargon,
                        <br />
                        When Dreams Come True!
                    </h1>
                    <br/>
                    <p><small>All good wedding studios & wedding photographers worth their salt have a good steady workload from their wedding season which they plan & manage.<br/>
                     Their back-end work-flow is like the iceberg under the sea,
                     you just see the tip floating above the ocean.
                     <br/> But behind the scenes there is a lot of work that needs to be executed and for multiple clients.</small></p>
                </div>
                <div>
                    <img className='w-9/12 rounded' src={img1} alt="" />
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-3 m-10'>
               {
                services.map(service=><SingleService key={service._id} service={service}></SingleService>)
               }
            </div>
            <>
            <Link to='/services'>
            <button className="btn btn-outline btn-warning mr-10 float-right ">See More</button>
            </Link>
            </>

            <div className='grid md:grid-cols-2 m-10'>
              <div>
                    <img className='w-9/12 rounded' src={img2} alt="" />
                </div>

               <div className='p-5'>
                    <h1 className='text-3xl font-bold text-orange-600'>About Me!
                    </h1>
                    <br/>
                    <p><small>My name is Maxima.

                    I am a photographer and owner of Maxima Photography Co. Ltd.”, a studio specializing in wedding photography. I have my master’s in Art.

                    I held a lot of workshops and masterclasses for photographers all over the world. I teach photography and photo retouching.

                    From year 2000 I’m offering my services on the island of Phuket, Thailand.

                    Working with me you are guaranteed photographs of the highest quality and service to match it. Don’t risk your celebration – reach out to a professional.</small></p>
                    <Link to='/'>
            <button className="btn btn-outline btn-info m-3  ">Contact Me</button>
            </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;