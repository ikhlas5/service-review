import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {ratting,img,text,service_name,price,_id}=useLoaderData();
    console.log(ratting)
    return (
        <div>
            <h1 className='text-center text-2xl m-3 font-medium text-orange-600'>Name of Photographer:  {service_name}</h1>
             <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl mx-auto mt-5 mb-5">
  <figure><img src={img} alt='' /></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{text}</p>
    <p className='text-xl font-medium'>Price: ${price}</p>
    <p>ratting: {ratting}</p>
    <div className="card-actions justify-end">
        {/* <Link to={`/services/${_id}`}>
      <button className="btn btn-primary"></button>
        </Link> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;