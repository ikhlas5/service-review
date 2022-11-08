import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from '../Service/singleService/SingleService';
import Slider from './Slider/Slider';

const Home = () => {
    const services=useLoaderData();

    console.log(services)
    return (
        <div>
            <Slider></Slider>
            <div className='grid md:grid-cols-3 gap-3 m-10'>
               {
                services.map(service=><SingleService key={service._id} service={service}></SingleService>)
               }
            </div>
            <Link to='/services'>
            <button className="btn btn-outline btn-warning m-10 float-right ">See More</button>
            </Link>
        </div>
    );
};

export default Home;