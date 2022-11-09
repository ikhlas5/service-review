import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const {ratting,img,text,service_name,price,_id}=useLoaderData();
    console.log(ratting)
    return (
        <div>
            <h1 className='text-center text-2xl m-3 font-medium text-orange-600'>Name of Photographer:  {service_name}</h1>
             <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl mx-auto mt-5 mb-5">
      <PhotoProvider 
        speed={() => 800}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
      ><PhotoView src={img}>
        <img src={img} alt='' />
        </PhotoView></PhotoProvider>
   <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p className='text-sm'>{text}</p>
    <p className='text-xl font-medium'>Price: ${price}</p>
    <p className='text-sm'>ratting: {ratting}</p>
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