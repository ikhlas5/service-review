import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './singleService/SingleService';

const Service = () => {
  const services=useLoaderData();
  console.log(services)
    return (
        <div>
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