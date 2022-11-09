import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './singleService/SingleService';

const Service = () => {
  const services=useLoaderData();
  console.log(services)
    return (
        <div>
          <h1 className='text-3xl font-semibold text-orange-600 m-5'>Our Services</h1>
            <div className='grid md:grid-cols-3 gap-3 m-10'>
              {
                services.map((service)=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
              }
            </div>
        </div>
    );
};

export default Service;